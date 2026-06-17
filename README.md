# Make Internet UI Great Again (MIUIGA)

MIUIGA is a React component library dedicated to reclaiming the internet from the era of "clean," "flat," and "minimalist" design. It embraces the unapologetically quirky, modular, and tactile aesthetics of the Web 1.0 era.

## Features

- **Retro Aesthetic**: 3D bevels, high-contrast textures, and animated GIFs.
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
- `Button`: Classic bevelled button.
- `Panel`: Layout container with `outset` (3D protruding) or `inset` (3D recessed) variants.
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
