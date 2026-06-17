import React, { HTMLAttributes } from 'react';

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  speed?: number; // Not implemented in CSS yet, but good for future
}

export const Marquee: React.FC<MarqueeProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`marquee-container ${className}`} {...props}>
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};
