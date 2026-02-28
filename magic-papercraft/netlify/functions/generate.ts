import type { Config, Context } from "@netlify/functions";
declare var process: any;

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

// ─── Step 1: Prompt Enhancer ─────────────────────────────────────────────────
async function enhancePrompt(apiKey: string, userPrompt: string): Promise<string> {
    const systemInstruction = `You are a creative director for a children's papercraft toy app (target age 3–8).
Your job is to expand a user's rough idea into a short, structured, VISUAL descriptor optimised for AI image generation.

STYLE RULES (always apply all of these):
- Flat 2D cartoon illustration style — think Pixar storybook or Saturday-morning cartoon
- Bold black outlines (2–4px) around every shape
- Bright, saturated, primary or complementary colours (no muted tones, no grey)
- Solid colour fills — NO gradients, NO photorealism, NO textures from real life
- Simple geometric shapes — circles, rectangles, stars, basic silhouettes
- Cheerful and child-safe — no scary, violent, or mature imagery
- White or light background so the tiling pattern reads clearly when repeated

OUTPUT FORMAT — respond with ONE plain paragraph (no JSON, no bullet points, no extra text).
The paragraph must describe:
  1. SUBJECT: what the main object/character is
  2. COLOURS: exactly which colours appear and where
  3. PATTERN ELEMENTS: what repeating decorative details cover the surface (dots, stripes, stars, shapes, logos, etc.)
  4. STYLE KEYWORDS: e.g. "flat cartoon", "bold outlines", "seamless tile", "bright and fun"

Keep it under 80 words. Be specific about colours (e.g. "fire-engine red", "sky blue").`;

    const response = await fetch(
        `${GEMINI_API_BASE}/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemInstruction }] },
                contents: [{ parts: [{ text: userPrompt }] }],
                generationConfig: { temperature: 0.9, maxOutputTokens: 200 },
            }),
        }
    );

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || 'Prompt enhancement failed');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? userPrompt;
}

// ─── Step 2: Classify & Build Image Prompt ───────────────────────────────────
async function classifyPrompt(
    apiKey: string,
    userPrompt: string,
    enhancedDescriptor: string
): Promise<{ templateType: string; imagePrompt: string; refinedPrompt: string }> {
    const systemInstruction = `You are a papercraft template classifier for a children's app.
Given a user's description AND a structured visual descriptor, output exactly this JSON and nothing else:
{
  "templateType": "<one of: box, car, house>",
  "imagePrompt": "<final image generation prompt — MUST incorporate the visual descriptor verbatim, then append the required technical suffix>",
  "refinedPrompt": "<a friendly 1-sentence description of what will be made, written for a child>"
}

Template selection rules:
- "box"   → animals, characters, creatures, monsters, robots, any cube-like object
- "car"   → vehicles: cars, trucks, rockets, trains, boats, buses, planes
- "house" → buildings: houses, castles, towers, shops, barns, space stations

For imagePrompt, follow this exact structure:
"[paste the full visual descriptor here]. Seamless repeating tile pattern. Flat 2D cartoon illustration. Bold black outlines. No 3D, no shadows, no gradients. Square format. Child-safe."`;

    const combinedInput = `User said: "${userPrompt}"\n\nVisual descriptor: ${enhancedDescriptor}`;

    const response = await fetch(
        `${GEMINI_API_BASE}/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemInstruction }] },
                contents: [{ parts: [{ text: combinedInput }] }],
                generationConfig: { responseMimeType: 'application/json', temperature: 0.3 },
            }),
        }
    );

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || 'Prompt classification failed');
    }

    const data = await response.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
    return JSON.parse(raw);
}

// ─── Step 3: Generate Texture Image ──────────────────────────────────────────
async function generateTexture(apiKey: string, imagePrompt: string): Promise<string> {
    const response = await fetch(
        `${GEMINI_API_BASE}/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: imagePrompt }] }],
                generationConfig: { responseModalities: ['IMAGE'], candidateCount: 1 },
            }),
        }
    );

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || 'Texture generation failed');
    }

    const data = await response.json();
    const imagePart = data.candidates?.[0]?.content?.parts?.find(
        (p: any) => p.inlineData?.mimeType?.startsWith('image/')
    );

    if (!imagePart) throw new Error('No image returned by Gemini');

    const { mimeType, data: b64 } = imagePart.inlineData;
    return `data:${mimeType};base64,${b64}`;
}

// ─── NETLIFY FUNCTION ENTRY ──────────────────────────────────────────────────
export default async (req: Request, context: Context) => {
    // Only accept POST requests
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    // Only read the server-side secret name here so the key never needs to be exposed to Vite.
    const apiKey = process.env.GEMINI_API_KEY || Netlify.env.get("GEMINI_API_KEY");

    if (!apiKey) {
        const hasLegacyClientKey =
            Boolean(process.env.VITE_GEMINI_API_KEY) || Boolean(Netlify.env.get("VITE_GEMINI_API_KEY"));

        return new Response(JSON.stringify({
            error: hasLegacyClientKey
                ? 'Server API key is misconfigured. Rename VITE_GEMINI_API_KEY to GEMINI_API_KEY.'
                : "Server API Key configuration error"
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const { prompt } = await req.json();

        if (!prompt || typeof prompt !== 'string') {
            return new Response(JSON.stringify({ error: "Missing or invalid prompt" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // 1. Enhance
        const enhancedPrompt = await enhancePrompt(apiKey, prompt);

        // 2. Classify
        const { templateType, imagePrompt, refinedPrompt } = await classifyPrompt(
            apiKey,
            prompt,
            enhancedPrompt
        );

        // 3. Generate Texture
        const textureUrl = await generateTexture(apiKey, imagePrompt);

        // Send the final compiled package securely back to the frontend
        return new Response(JSON.stringify({ textureUrl, templateType, refinedPrompt, enhancedPrompt }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message || "An unexpected error occurred" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
