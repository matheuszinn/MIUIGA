import React, { ReactNode } from 'react';
import { getDitherPattern } from '../utils/shadows';

interface DitherShadowProps {
  children: ReactNode;
  density?: 25 | 50 | 75;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const DitherShadow: React.FC<DitherShadowProps> = ({ 
  children, 
  density = 50, 
  offset = 4,
  className = '',
  style = {}
}) => {
  const pattern = getDitherPattern(density);
  
  return (
    <div 
      className={`dither-shadow-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        ...style
      }}
    >
      <div 
        className="dither-shadow-effect"
        style={{
          position: 'absolute',
          top: offset,
          left: offset,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${pattern})`,
          backgroundSize: '2px 2px',
          zIndex: 0,
          imageRendering: 'pixelated'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};
