import React from 'react';
import { 
  RetroProvider, 
  Button, 
  Panel, 
  Marquee, 
  VisitorCounter, 
  Window, 
  useRetro,
  Frameset,
  Frame,
  MainFrame,
  Taskbar,
  DitherShadow,
  snapToWebSafe
} from '../lib';

const ThemeSwitcher = () => {
  const { isModern, toggleModern } = useRetro();
  return (
    <Button onClick={toggleModern} style={{ width: '100%' }}>
      {isModern ? 'Retro Mode' : 'Modern Mode'}
    </Button>
  );
};

const ColorSnapper = () => {
  const [color, setColor] = React.useState('#ff5733');
  const webSafe = snapToWebSafe(color);

  return (
    <Panel variant="inset" style={{ marginTop: '20px' }}>
      <h3>Web-Safe Snapper</h3>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <p>Original: {color}</p>
      <div style={{ 
        width: '50px', 
        height: '20px', 
        backgroundColor: color, 
        border: '1px solid black' 
      }} />
      <p>Web-Safe: {webSafe}</p>
      <div style={{ 
        width: '50px', 
        height: '20px', 
        backgroundColor: webSafe, 
        border: '1px solid black' 
      }} />
    </Panel>
  );
};

export const App = () => {
  return (
    <RetroProvider>
      <Frameset>
        <Frame id="nav" title="Navigation" icon="📂">
          <center>
            <h2 style={{ fontSize: '18px', color: 'blue' }}>MENU</h2>
            <hr className="rainbow-bar" />
          </center>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
            <Button>HOME</Button>
            <Button>SITEMAP</Button>
            <ThemeSwitcher />
          </div>
          <ColorSnapper />
        </Frame>

        <MainFrame className="bg-stars">
          <DitherShadow density={50} offset={6} style={{ width: '100%' }}>
            <Panel variant="outset" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h1>Make Internet UI Great Again</h1>
              <Marquee>
                DITHERED SHADOWS ENABLED! | RESPONSIVE FRAMESETS ACTIVE! | WEB-SAFE PALETTE SNAPPING READY!
              </Marquee>
            </Panel>
          </DitherShadow>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <Panel variant="outset">
              <h2>Dithered Shadows</h2>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '10px' }}>
                <DitherShadow density={25}>
                  <Button>25% Shadow</Button>
                </DitherShadow>
                <DitherShadow density={50}>
                  <Button>50% Shadow</Button>
                </DitherShadow>
                <DitherShadow density={75}>
                  <Button>75% Shadow</Button>
                </DitherShadow>
              </div>
            </Panel>

            <Panel variant="inset">
              <h2>Visitor Stats</h2>
              <VisitorCounter />
              <p>Responsive behavior: Resize the window to see the sidebar turn into a Taskbar!</p>
            </Panel>
          </div>

          <Window title="Deep Retro Alert" initialX="60%" initialY="70%">
            <p>You are using the MIUIGA React Library v2.0.</p>
            <p>Everything you see is mathematically snapped to the 1996 web standards.</p>
          </Window>
        </MainFrame>

        <Taskbar frames={[
          { id: 'nav', title: 'Navigation', icon: '📂' }
        ]} />
      </Frameset>
    </RetroProvider>
  );
};
