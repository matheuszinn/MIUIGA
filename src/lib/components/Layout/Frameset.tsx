import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FramesetContextType {
  isMobile: boolean;
  minimizedFrames: string[];
  toggleFrame: (id: string) => void;
}

const FramesetContext = createContext<FramesetContextType | undefined>(undefined);

export const useFrameset = () => {
  const context = useContext(FramesetContext);
  if (!context) throw new Error('useFrameset must be used within a Frameset');
  return context;
};

interface FramesetProps {
  children: ReactNode;
  breakpoint?: number;
}

export const Frameset: React.FC<FramesetProps> = ({ children, breakpoint = 768 }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  // On mobile, everything is minimized by default. On desktop, nothing is.
  const [minimizedFrames, setMinimizedFrames] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < breakpoint;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  const toggleFrame = (id: string) => {
    setMinimizedFrames(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // We'll use a slightly different approach: a 'visibleFrames' list on mobile.
  // Actually, let's stick to 'minimized' but interpret it as 'closed' on mobile.
  // We need a way to open them. The Taskbar will do that.

  // Let's refine the Context to handle this better.
  const [openedOnMobile, setOpenedOnMobile] = useState<string[]>([]);

  const toggleMobileFrame = (id: string) => {
    setOpenedOnMobile(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <FramesetContext.Provider value={{ 
      isMobile, 
      minimizedFrames: isMobile ? openedOnMobile : [], // Invert logic for mobile
      toggleFrame: isMobile ? toggleMobileFrame : toggleFrame 
    }}>
      <div className={`miuiga-frameset ${isMobile ? 'frameset-mobile' : 'frameset-desktop'}`} style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {children}
      </div>
    </FramesetContext.Provider>
  );
};
