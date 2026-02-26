// Template registry and definitions
// SVG coordinate space = 210 x 297 mm (A4)
// All faces are proportioned to assemble as valid 3D nets.
//
// Layout rules:
//   Top margin:    8mm
//   Bottom band:  32mm (title + instructions + legend + credit)
//   Usable height for net: 8 to 265 = 257mm
//   Each net's OY is calculated to vertically center it in that band.

export interface PapercraftTemplate {
  id: string;
  name: string;
  svgMarkup: (textureUrl: string) => string;
}

// Shared SVG helpers
const fold = 'stroke="#555" stroke-width="0.8" stroke-dasharray="4,3" fill="none"';
const tab = 'fill="#E8F4F8" stroke="#555" stroke-width="0.6"';
const label = 'font-family="Nunito,sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="#333"';
const credit = 'font-family="Nunito,sans-serif" font-size="5" fill="#aaa" text-anchor="middle"';

// A4 wrapper — title & instructions are always in the bottom band, never over the net
function a4Wrapper(
  content: string,
  textureUrl: string,
  title: string,
  emoji: string,
  color: string,
  instructions: string
): string {
  return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 210 297" width="100%" height="100%">
  <defs>
    <pattern id="tex" patternUnits="userSpaceOnUse" width="60" height="60">
      <image href="${textureUrl}" x="0" y="0" width="60" height="60"
             preserveAspectRatio="xMidYMid slice" crossorigin="anonymous"/>
    </pattern>
    <pattern id="tex-light" patternUnits="userSpaceOnUse" width="60" height="60">
      <image href="${textureUrl}" x="0" y="0" width="60" height="60"
             preserveAspectRatio="xMidYMid slice" crossorigin="anonymous" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- A4 page background -->
  <rect width="210" height="297" fill="white"/>

  <!-- Net content (vertically and horizontally centered) -->
  ${content}

  <!-- ── Bottom info band (y = 265–297) ── -->
  <!-- Legend — three items evenly spaced across full width -->
  <line x1="15" y1="270" x2="38" y2="270" stroke="#000" stroke-width="1.2"/>
  <text x="40" y="273" ${credit}>Cut</text>

  <line x1="73" y1="270" x2="96" y2="270" stroke="#555" stroke-width="0.8" stroke-dasharray="4,3"/>
  <text x="98" y="273" ${credit}>Fold</text>

  <rect x="133" y="267" width="11" height="7" ${tab}/>
  <text x="146" y="273" ${credit}>Glue tab</text>

  <!-- Instructions -->
  <text x="105" y="281" ${credit} font-size="5">${instructions}</text>

  <!-- Title -->
  <text x="105" y="290"
        font-family="Nunito,sans-serif" font-size="9" font-weight="900"
        text-anchor="middle" fill="${color}">${emoji} ${title}</text>

  <!-- Footer credit -->
  <text x="105" y="296" ${credit}>Magic Paper Toys ✨ — Cut, Fold &amp; Glue!</text>
</svg>`;
}

// ─── BOX / CHARACTER ─────────────────────────────────────────────────────────
// Net: cross layout (top / left-front-right-back / bottom), each face 42×42
// Net bounding box: ~170mm wide × ~136mm tall
// Vertical centering: top = 8, available = 257, net = 136 → OY = 8 + (257-136)/2 + 42 = 8+60+42 = 110
const BOX_FACE = 42;
const BX = 63;   // FRONT left edge  (net width ~170mm, center at 63+(42*2)=147 ≈ 105 ✓)
const BY = 110;  // FRONT top edge   (centered vertically in usable band)

function boxNet(textureUrl: string): string {
  const f = BOX_FACE;
  const faces = {
    top: [BX, BY - f],
    front: [BX, BY],
    bottom: [BX, BY + f],
    left: [BX - f, BY],
    right: [BX + f, BY],
    back: [BX + 2 * f, BY],
  } as Record<string, [number, number]>;

  const faceRects = Object.entries(faces).map(([name, [x, y]]) => `
    <rect x="${x}" y="${y}" width="${f}" height="${f}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${x + f / 2}" y="${y + f / 2 + 3}" ${label}>${name.toUpperCase()}</text>
  `).join('');

  const tabs = `
    <polygon points="${BX + 3},${BY - f} ${BX + f - 3},${BY - f} ${BX + f - 1},${BY - f - 9} ${BX + 1},${BY - f - 9}" ${tab}/>
    <text x="${BX + f / 2}" y="${BY - f - 3}" ${credit}>TAB 1</text>
    <polygon points="${BX + 3},${BY + 2 * f} ${BX + f - 3},${BY + 2 * f} ${BX + f - 1},${BY + 2 * f + 9} ${BX + 1},${BY + 2 * f + 9}" ${tab}/>
    <text x="${BX + f / 2}" y="${BY + 2 * f + 6}" ${credit}>TAB 2</text>
    <polygon points="${BX - f},${BY + 3} ${BX - f},${BY + f - 3} ${BX - f - 9},${BY + f - 1} ${BX - f - 9},${BY + 1}" ${tab}/>
    <text x="${BX - f - 13}" y="${BY + f / 2 + 2}" ${credit}>3</text>
    <polygon points="${BX + 3 * f},${BY + 3} ${BX + 3 * f},${BY + f - 3} ${BX + 3 * f + 9},${BY + f - 1} ${BX + 3 * f + 9},${BY + 1}" ${tab}/>
    <text x="${BX + 3 * f + 13}" y="${BY + f / 2 + 2}" ${credit}>4</text>
    <polygon points="${BX - f + 2},${BY} ${BX - f + f - 2},${BY} ${BX - f + f},${BY - 7} ${BX - f},${BY - 7}" ${tab}/>
    <polygon points="${BX + f + 2},${BY} ${BX + f + f - 2},${BY} ${BX + 2 * f},${BY - 7} ${BX + f},${BY - 7}" ${tab}/>
    <polygon points="${BX - f + 2},${BY + f} ${BX - f + f - 2},${BY + f} ${BX - f + f},${BY + f + 7} ${BX - f},${BY + f + 7}" ${tab}/>
    <polygon points="${BX + f + 2},${BY + f} ${BX + f + f - 2},${BY + f} ${BX + 2 * f},${BY + f + 7} ${BX + f},${BY + f + 7}" ${tab}/>
  `;

  const folds = `
    <line x1="${BX}" y1="${BY - f}" x2="${BX + f}" y2="${BY - f}" ${fold}/>
    <line x1="${BX}" y1="${BY + f}" x2="${BX + f}" y2="${BY + f}" ${fold}/>
    <line x1="${BX}" y1="${BY + 2 * f}" x2="${BX + f}" y2="${BY + 2 * f}" ${fold}/>
    <line x1="${BX - f}" y1="${BY}" x2="${BX - f}" y2="${BY + f}" ${fold}/>
    <line x1="${BX}" y1="${BY}" x2="${BX}" y2="${BY + f}" ${fold}/>
    <line x1="${BX + f}" y1="${BY}" x2="${BX + f}" y2="${BY + f}" ${fold}/>
    <line x1="${BX + 2 * f}" y1="${BY}" x2="${BX + 2 * f}" y2="${BY + f}" ${fold}/>
    <line x1="${BX + 3 * f}" y1="${BY}" x2="${BX + 3 * f}" y2="${BY + f}" ${fold}/>
  `;

  return a4Wrapper(
    tabs + faceRects + folds,
    textureUrl,
    'Box Character', '🎁', '#FF6B6B',
    '1. Cut along solid lines  2. Fold dashed lines inward  3. Glue tabs in order'
  );
}

// ─── CAR / VEHICLE ──────────────────────────────────────────────────────────
// Net: horizontal body strip + TOP above + BOTTOM below + 4 wheels
// Net bounding box: width ~220mm, height ~168mm
// Vertical centering: y_top = 8 + (257-168)/2 = 8+44 = 52 → OY = 52 + D(40) = 92
const W = 68, H = 28, D = 38;
const CAR_OX = 10, CAR_OY = 92;

function carNet(textureUrl: string): string {
  const OX = CAR_OX, OY = CAR_OY;

  const faces = `
    <rect x="${OX}" y="${OY}" width="${D}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D / 2}" y="${OY + H / 2 + 3}" ${label}>FRONT</text>
    <rect x="${OX + D}" y="${OY}" width="${W}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D + W / 2}" y="${OY + H / 2 + 3}" ${label}>SIDE</text>
    <rect x="${OX + D + W}" y="${OY}" width="${D}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D + W + D / 2}" y="${OY + H / 2 + 3}" ${label}>BACK</text>
    <rect x="${OX + D + W + D}" y="${OY}" width="${W}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D + W + D + W / 2}" y="${OY + H / 2 + 3}" ${label}>SIDE</text>
    <!-- TOP -->
    <rect x="${OX + D}" y="${OY - D}" width="${W}" height="${D}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D + W / 2}" y="${OY - D / 2 + 3}" ${label}>TOP</text>
    <!-- BOTTOM -->
    <rect x="${OX + D}" y="${OY + H}" width="${W}" height="${D}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + D + W / 2}" y="${OY + H + D / 2 + 3}" ${label}>BOTTOM</text>
  `;

  // 4 wheels spaced across the bottom
  const wheelY = OY + H + D + 38;
  const wheelR = 16;
  const wheels = [28, 76, 124, 172].map(cx => `
    <circle cx="${OX + cx}" cy="${wheelY}" r="${wheelR}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <circle cx="${OX + cx}" cy="${wheelY}" r="5" fill="white" stroke="#222" stroke-width="0.8"/>
  `).join('') + `<text x="${OX + 100}" y="${wheelY + wheelR + 8}" ${credit} text-anchor="middle">WHEEL ×4 — cut and fold tabs to attach</text>`;

  const tabs = `
    <polygon points="${OX + 2},${OY} ${OX + D - 2},${OY} ${OX + D},${OY - 8} ${OX},${OY - 8}" ${tab}/>
    <polygon points="${OX + D + W + 2},${OY} ${OX + D + W + D - 2},${OY} ${OX + D + W + D},${OY - 8} ${OX + D + W},${OY - 8}" ${tab}/>
    <polygon points="${OX + 2},${OY + H} ${OX + D - 2},${OY + H} ${OX + D},${OY + H + 8} ${OX},${OY + H + 8}" ${tab}/>
    <polygon points="${OX + D + W + 2},${OY + H} ${OX + D + W + D - 2},${OY + H} ${OX + D + W + D},${OY + H + 8} ${OX + D + W},${OY + H + 8}" ${tab}/>
    <polygon points="${OX + 2 * D + 2 * W},${OY + 2} ${OX + 2 * D + 2 * W},${OY + H - 2} ${OX + 2 * D + 2 * W + 8},${OY + H} ${OX + 2 * D + 2 * W + 8},${OY}" ${tab}/>
  `;

  const folds = `
    <line x1="${OX + D}" y1="${OY}" x2="${OX + D}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + D + W}" y1="${OY}" x2="${OX + D + W}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + D + W + D}" y1="${OY}" x2="${OX + D + W + D}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + D}" y1="${OY}" x2="${OX + D + W}" y2="${OY}" ${fold}/>
    <line x1="${OX + D}" y1="${OY + H}" x2="${OX + D + W}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + D}" y1="${OY - D}" x2="${OX + D + W}" y2="${OY - D}" ${fold}/>
    <line x1="${OX + D}" y1="${OY + H + D}" x2="${OX + D + W}" y2="${OY + H + D}" ${fold}/>
  `;

  return a4Wrapper(
    tabs + faces + folds + wheels,
    textureUrl,
    'Car / Vehicle', '🚗', '#74B9FF',
    '1. Cut all pieces  2. Fold dashed lines  3. Glue body tabs  4. Attach wheels'
  );
}

// ─── HOUSE / BUILDING ────────────────────────────────────────────────────────
// Net: horizontal wall strip + FLOOR below + gable roof panels + end triangles
// Net bounding box: roughly width ~195mm, height ~180mm
// Vertical centering: y_top = 8 + (257-180)/2 = 8+38 = 46
// ROOF B top should be at y=46 → OY = 46 + roofB(40) + roofA(38) + 40 = ~164? Let me derive:
//   roofY = OY - 40, ROOF B top = roofY - 38 = OY - 78
//   We want OY - 78 = 46  → OY = 124
const HW = 52, HH = 48, HD = 38;
const HOUSE_OX = 25, HOUSE_OY = 124;

function houseNet(textureUrl: string): string {
  const OX = HOUSE_OX, OY = HOUSE_OY;
  const W = HW, H = HH, D = HD;
  const roofY = OY - D;    // top of ROOF A = bottom fold of walls
  const roofBH = 38;        // height of each roof panel

  const walls = `
    <rect x="${OX}" y="${OY}" width="${W}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W / 2}" y="${OY + H / 2 + 3}" ${label}>FRONT</text>
    <rect x="${OX + W}" y="${OY}" width="${D}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + D / 2}" y="${OY + H / 2 + 3}" ${label}>SIDE</text>
    <rect x="${OX + W + D}" y="${OY}" width="${W}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + D + W / 2}" y="${OY + H / 2 + 3}" ${label}>BACK</text>
    <rect x="${OX + 2 * W + D}" y="${OY}" width="${D}" height="${H}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + 2 * W + D + D / 2}" y="${OY + H / 2 + 3}" ${label}>SIDE</text>
    <!-- FLOOR -->
    <rect x="${OX + W}" y="${OY + H}" width="${W}" height="${D}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + W / 2}" y="${OY + H + D / 2 + 3}" ${label}>FLOOR</text>
  `;

  const roof = `
    <!-- ROOF A -->
    <rect x="${OX + W}" y="${roofY - roofBH}" width="${W}" height="${roofBH}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + W / 2}" y="${roofY - roofBH / 2 + 3}" ${label}>ROOF A</text>
    <!-- ROOF B -->
    <rect x="${OX + W}" y="${roofY - 2 * roofBH}" width="${W}" height="${roofBH}" fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + W / 2}" y="${roofY - 3 * roofBH / 2 + 3}" ${label}>ROOF B</text>
    <!-- Gable end triangles -->
    <polygon points="${OX},${OY} ${OX + W / 2},${OY - 22} ${OX + W},${OY}"
             fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W / 2}" y="${OY - 8}" ${credit} text-anchor="middle">END</text>
    <polygon points="${OX + W + D},${OY} ${OX + W + D + W / 2},${OY - 22} ${OX + W + D + W},${OY}"
             fill="url(#tex)" stroke="#222" stroke-width="1"/>
    <text x="${OX + W + D + W / 2}" y="${OY - 8}" ${credit} text-anchor="middle">END</text>
  `;

  const tabs = `
    <polygon points="${OX + 2 * W + 2 * D},${OY + 3} ${OX + 2 * W + 2 * D},${OY + H - 3} ${OX + 2 * W + 2 * D + 9},${OY + H - 1} ${OX + 2 * W + 2 * D + 9},${OY + 1}" ${tab}/>
    <polygon points="${OX + 2},${OY + H} ${OX + W - 2},${OY + H} ${OX + W},${OY + H + 8} ${OX},${OY + H + 8}" ${tab}/>
    <polygon points="${OX + W + D + 2},${OY + H} ${OX + W + D + W - 2},${OY + H} ${OX + W + D + W},${OY + H + 8} ${OX + W + D},${OY + H + 8}" ${tab}/>
    <polygon points="${OX + W + 2},${roofY - 2 * roofBH} ${OX + 2 * W - 2},${roofY - 2 * roofBH} ${OX + 2 * W},${roofY - 2 * roofBH - 8} ${OX + W},${roofY - 2 * roofBH - 8}" ${tab}/>
  `;

  const folds = `
    <line x1="${OX + W}" y1="${OY}" x2="${OX + W}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + W + D}" y1="${OY}" x2="${OX + W + D}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + 2 * W + D}" y1="${OY}" x2="${OX + 2 * W + D}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + W}" y1="${OY + H}" x2="${OX + 2 * W}" y2="${OY + H}" ${fold}/>
    <line x1="${OX + W}" y1="${OY}" x2="${OX + 2 * W}" y2="${OY}" ${fold}/>
    <line x1="${OX + W}" y1="${roofY - roofBH}" x2="${OX + 2 * W}" y2="${roofY - roofBH}" ${fold}/>
    <line x1="${OX + W}" y1="${roofY - 2 * roofBH}" x2="${OX + 2 * W}" y2="${roofY - 2 * roofBH}" ${fold}/>
  `;

  return a4Wrapper(
    tabs + walls + roof + folds,
    textureUrl,
    'House / Building', '🏠', '#55E6C1',
    '1. Cut all pieces  2. Score &amp; fold dashed lines  3. Assemble walls  4. Attach roof'
  );
}

// ─── Template registry ───────────────────────────────────────────────────────
export const TEMPLATES: Record<string, PapercraftTemplate> = {
  box: { id: 'box', name: 'Box Character', svgMarkup: boxNet },
  car: { id: 'car', name: 'Car / Vehicle', svgMarkup: carNet },
  house: { id: 'house', name: 'House', svgMarkup: houseNet },
};
