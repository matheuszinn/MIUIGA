import React from 'react';
import { RetroProvider, Button, Panel, Marquee, VisitorCounter, Window, useRetro } from '../lib';

const ThemeSwitcher = () => {
  const { isModern, toggleModern } = useRetro();
  return (
    <Button onClick={toggleModern}>
      Switch to {isModern ? 'Classic 90s' : 'Modern 2010s'}
    </Button>
  );
};

export const App = () => {
  return (
    <RetroProvider>
      <div style={{ padding: '20px' }} className="bg-stars">
        <Panel variant="outset" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>MIUIGA React Library</h1>
          <Marquee>
            WELCOME TO THE FUTURE OF RETRO UI! | FULLY COMPONENTIZED! | REACT POWERED!
          </Marquee>
        </Panel>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Panel variant="outset" style={{ width: '300px' }}>
            <h2>Controls</h2>
            <hr className="rainbow-bar" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ThemeSwitcher />
              <Button onClick={() => alert('Clicked!')}>Click Me</Button>
            </div>
          </Panel>

          <Panel variant="inset" style={{ flexGrow: 1 }}>
            <h2>Main Content</h2>
            <p>
              This is a demonstration of the MIUIGA React library. 
              All components are built using the core principles of Web 1.0 design.
            </p>
            <VisitorCounter />
          </Panel>
        </div>

        <Window title="About MIUIGA" initialX="70%" initialY="30%">
          <p>MIUIGA stands for Make Internet UI Great Again.</p>
          <p>It's a tribute to the golden era of the web.</p>
        </Window>
      </div>
    </RetroProvider>
  );
};
