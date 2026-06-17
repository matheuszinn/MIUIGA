import React, { HTMLAttributes } from 'react';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'outset' | 'inset';
}

export const Panel: React.FC<PanelProps> = ({ children, variant = 'outset', className = '', ...props }) => {
  const bevelClass = variant === 'outset' ? 'retro-outset' : 'retro-inset';
  return (
    <div className={`${bevelClass} ${className}`} {...props}>
      {children}
    </div>
  );
};
