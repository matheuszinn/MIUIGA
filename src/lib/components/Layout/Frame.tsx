import React, { ReactNode } from 'react';
import { useFrameset } from './Frameset';
import { Window } from '../Window';

interface FrameProps {
  id: string;
  title: string;
  children: ReactNode;
  width?: string;
  className?: string;
  icon?: string;
}

export const Frame: React.FC<FrameProps> = ({ 
  id, 
  title, 
  children, 
  width = '200px', 
  className = '',
  icon
}) => {
  const { isMobile, minimizedFrames, toggleFrame } = useFrameset();
  const isMinimized = minimizedFrames.includes(id);

  if (isMobile) {
    if (isMinimized) return null;
    return (
      <Window title={title} onClose={() => toggleFrame(id)}>
        {children}
      </Window>
    );
  }

  return (
    <div 
      id={id}
      className={`frame-left retro-outset ${className}`}
      style={{
        width,
        height: '100%',
        overflowY: 'auto',
        flexShrink: 0
      }}
    >
      {children}
    </div>
  );
};

export const MainFrame: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`frame-main ${className}`} style={{
      flexGrow: 1,
      height: '100%',
      overflowY: 'auto',
      padding: '20px'
    }}>
      {children}
    </div>
  );
};
