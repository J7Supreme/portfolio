export interface GenerationResult {
    textureUrl: string;       // base64 data URL
    templateType: string;     // 'box' | 'car' | 'house'
    refinedPrompt: string;    // human-readable summary
    enhancedPrompt: string;   // structured descriptor (for debugging / display)
}

/**
 * Main entry point — takes user prompt, calls our secure Netlify backend, returns generation result.
 */
export async function generatePapercraft(
    userPrompt: string
): Promise<GenerationResult> {
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userPrompt })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Server error generating papercraft. Check API keys out back.');
    }

    return response.json();
}
