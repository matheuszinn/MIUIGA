# Make Internet UI Great Again (MIUIGA)

## The Vision
To reclaim the internet from the era of "clean," "flat," and "minimalist" design. This manifest defines a framework that is unapologetically quirky, modular, and tactile.

## Core Principles

### 1. The Bevel Rule
Every interactive or container element must have a 3D effect. Shadows are not blurred; they are solid 1px lines.
- **Outer Bevel**: `border-top: white; border-left: white; border-bottom: gray; border-right: gray;`
- **Inner Bevel (Inset)**: The reverse of the above.

### 2. High-Contrast Textures
Backgrounds should never be a single flat hex color.
- **Tiling**: Use small, repeating GIF/JPG patterns (stars, clouds, paper, marble).
- **The "Frameset" Look**: Even without `<frameset>`, pages should have fixed, non-scrolling sidebars separated by a 2px-5px gray border.

### 3. Motion & Life
A website should feel like it's "running."
- **Marquee**: Use for news, tickers, or just because.
- **Blink**: Use to draw attention to critically important (or completely useless) information.
- **GIF Icons**: Animated envelopes for mail, spinning construction signs, and "rainbow bars" for horizontal rules (`<hr>`).

### 4. Typography & Browser Quarks
- **Primary**: Times New Roman (Serif).
- **Technical**: Courier New (Monospace).
- **Secondary**: Arial (Sans-Serif).
- **Scrollbars**: Must be blocky, gray, and square. No rounded corners allowed.
- **Alerts**: Entry alerts ("Welcome to my slice of heaven!") are encouraged.

### 5. Widget Culture
The UI is a collection of independent, "plug-and-play" modules:
- **Visitor Counter**: Digital odometer style.
- **Media Player**: Skeletal, text-based control panel with visualizer.
- **The Badge Wall**: 88x31px graphic buttons (authentic images preferred).
- **Scratchbook (Guestbook)**: A shared space for simple text input.
- **Under Construction**: Mandatory GIF for any section not 100% complete (which is every section).

## Technical Goals
- **Zero Dependencies**: Pure CSS and Vanilla JS.
- **Low Asset Weight**: Use compression-heavy GIFs and JPEGs.
- **Table-First Mentality**: Even if using Flexbox/Grid, the *look* should mimic nested HTML tables.
