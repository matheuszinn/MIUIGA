import React, { useState, useRef, ReactNode, useEffect } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  initialOpen?: boolean;
  onClose?: () => void;
  initialX?: string;
  initialY?: string;
}

export const Window: React.FC<WindowProps> = ({ 
  title, 
  children, 
  initialOpen = true, 
  onClose,
  initialX = '50%',
  initialY = '50%'
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-close-btn')) return;
    
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  if (!isOpen) return null;

  const style: React.CSSProperties = isDragging || position.x !== 0 
    ? { left: position.x, top: position.y, transform: 'none' } 
    : { left: initialX, top: initialY };

  return (
    <div 
      ref={windowRef}
      className="retro-window" 
      style={style}
    >
      <div className="window-title-bar" onMouseDown={handleMouseDown}>
        <div className="window-title">{title}</div>
        <button 
          className="window-close-btn" 
          onClick={() => {
            setIsOpen(false);
            if (onClose) onClose();
          }}
        >
          X
        </button>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};
