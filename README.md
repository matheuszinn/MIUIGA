# Make Internet UI Great Again (MIUIGA)

MIUIGA is a React component library dedicated to reclaiming the internet from the era of "clean," "flat," and "minimalist" design. It embraces the unapologetically quirky, modular, and tactile aesthetics of the Web 1.0 era.

## Features

- **Retro Aesthetic**: 3D bevels, high-contrast textures, and animated GIFs.
- **Dithered Shadows**: Authentic 1-bit stippled shadows with `<DitherShadow>`.
- **Responsive Framesets**: Flexible, mobile-aware layout system via `<Frameset>`, `<Frame>`, and `<Taskbar>`.
- **Web-Safe Palette**: Built-in utilities for snapping colors to the 1996 browser standard.
- **Reusable React Components**: `<Button>`, `<Panel>`, `<Window>`, `<Marquee>`, and more.
- **Theme Support**: Easily toggle between classic 90s Geocities and early 2010s "Frutiger Aero" styles via `<RetroProvider>`.
- **Zero Configuration**: Comes with pre-bundled styles.

## Installation

```bash
npm install miuiga
```

## Usage

```tsx
import React from 'react';
import { RetroProvider, Button, Panel, Window } from 'miuiga';
import 'miuiga/style.css';

const App = () => (
  <RetroProvider>
    <Panel variant="outset">
      <h1>Welcome to MIUIGA</h1>
      <Button onClick={() => alert('Hello!')}>Click Me</Button>
    </Panel>
    
    <Window title="A Retro Window">
      <p>This window is draggable!</p>
    </Window>
  </RetroProvider>
);
```

## Available Components

- `RetroProvider`: Required wrapper for theme and state management.
- `Frameset`, `Frame`, `MainFrame`, `Taskbar`: The responsive layout system.
- `DitherShadow`: Applies a stippled shadow effect to any element.
- `Button`: Classic bevelled button.
- `Panel`: Layout container with `outset` or `inset` variants.
- `Window`: Draggable, closable OS-style window.
- `Marquee`: Traditional scrolling text.
- `VisitorCounter`: LocalStorage-backed digital odometer.

## Development

To start the development server with an example app:

```bash
npm run dev
```

To build the library:

```bash
npm run build
```

## License

MIT
