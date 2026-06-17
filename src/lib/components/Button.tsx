import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'; // Can expand later
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`retro-button ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
