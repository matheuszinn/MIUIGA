import React from 'react';
import { useFrameset } from './Frameset';
import { Button } from '../Button';

interface TaskbarProps {
  frames: { id: string; title: string; icon?: string }[];
}

export const Taskbar: React.FC<TaskbarProps> = ({ frames }) => {
  const { isMobile, toggleFrame } = useFrameset();

  if (!isMobile) return null;

  return (
    <div className="retro-taskbar retro-outset" style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '2px 5px',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <Button style={{ height: '30px', fontWeight: 'bold' }}>START</Button>
      <div style={{ width: '2px', height: '100%', backgroundColor: 'gray', margin: '0 5px' }} />
      {frames.map(frame => (
        <Button 
          key={frame.id} 
          onClick={() => toggleFrame(frame.id)}
          style={{ height: '30px', fontSize: '11px' }}
        >
          {frame.icon && <span style={{ marginRight: '5px' }}>{frame.icon}</span>}
          {frame.title}
        </Button>
      ))}
    </div>
  );
};
