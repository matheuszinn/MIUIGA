# Make Internet UI Great Again (MIUIGA) - Framework Manifest

## The Vision
To reclaim the internet from the era of "clean," "flat," and "minimalist" design. This manifest defines a framework that is unapologetically quirky, modular, tactile, and faithful to the rendering constraints of the late 1990s.

---

## Core Principles

### 1. The Bevel Rule
Every interactive or container element must have a 3D effect. Shadows are not blurred; they are solid 1px or 2px lines.
- **Outer Bevel (Outset)**: `border-top: white; border-left: white; border-bottom: gray; border-right: gray;`
- **Inner Bevel (Inset)**: The reverse of the outset bevel, drawing the eye inwards.

### 2. High-Contrast Textures & Tiling
Backgrounds should never be a single flat hex color.
- **Tiling**: Use small, repeating GIF/JPG patterns (stars, clouds, paper, marble).
- **The "Frameset" Look**: Pages must feature fixed sidebars mimicking classic framesets, divided by solid outset panel borders.

### 3. Motion & Life
A website should feel like a living machine.
- **Marquee**: Auto-scrolling horizontal text for headlines and news tickers.
- **Blink**: Periodic blinking text for drawing attention to critical metadata.
- **High-Performance Trails**: Canvas-based particle overlays rendering trailing shapes (stars/crosses) behind the mouse at 60FPS.

### 4. Typography & Pixel Preservation
- **Primary Serif**: Times New Roman (default body).
- **Secondary Sans**: Arial (headers and buttons).
- **Expanded Font Stacks**: Add Comic Sans MS (`.font-comic`) and Verdana (`.font-verdana`) for casual and small-screen content.
- **Un-smoothed Rendering**: Enforce `-webkit-font-smoothing: none` globally to preserve bitmap font-aliasing characteristics.
- **Pixel Preservation Reset**: Apply nearest-neighbor interpolation (`image-rendering: pixelated`) globally on all images, canvases, and backgrounds.

### 5. Web-Safe Color Enforcement
All layouts must restrict their color palettes to the mathematical 216 Web-Safe 6x6x6 RGB grid (using component values `00`, `33`, `66`, `99`, `cc`, `ff`). Any non-safe color is strictly outlawed.

---

## Widget & Layout Standards

### 1. Dithered Scrollbars
Override the default scrollbar tracks with a repeating 2x2 SVG checkerboard dither pattern encoded as a Base64 URI, forcing a tactile gray-and-white or black-and-white grain.

### 2. Standardized IAB Ad Real Estate
Layouts should allocate rigid container blocks conforming to the 1990s Interactive Advertising Bureau banner specifications:
- **Full Banner**: `468x60px`
- **Full Banner with Vertical Nav**: `392x72px`
- **Half Banner**: `234x60px`
- **Vertical Banner**: `120x240px`

### 3. Spacer GIF Emulation
Align inline margins using the `<spacer-gif>` element (or `Spacer` React component equivalent), defining explicit `x` and `y` constraints to hold structural gaps open.

### 4. Draggable OS-Style Popup Windows
Embed draggable warning dialog elements mimicking Windows 95/98 windows. Drag handlers must bind directly to the title bar (using a navy-blue background and active close buttons). In React frameworks, these windows must render via `createPortal` to prevent boundary clipping.

### 5. Modern Table-Layout Emulation
Instead of tables, construct grids using CSS Grid (`.retro-table-layout` and `.retro-table-cell`) where `gap` handles `cellspacing` and cell padding handles `cellpadding`. Maintain a debugging mode (`.debug-tables`) applying dotted boundaries to mimic `border="1"`.

### 6. Algorithmic Webrings
circular network loops linking themed blogs using array-based index routing (Previous, Random, Next nodes) parsed from `window.location.href` to bypass legacy CGI-scripts.

---

## Technical Goals
- **Zero Dependencies**: Pure CSS and Vanilla JS code.
- **Low Asset Weight**: High utilization of compressed gifs/jpegs.
- **Strict Web-Safe Math**: Colors are mapped mathematically to avoid browser dither issues.
