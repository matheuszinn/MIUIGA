import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RetroContextType {
  isModern: boolean;
  toggleModern: () => void;
}

const RetroContext = createContext<RetroContextType | undefined>(undefined);

export const useRetro = () => {
  const context = useContext(RetroContext);
  if (!context) {
    throw new Error('useRetro must be used within a RetroProvider');
  }
  return context;
};

interface RetroProviderProps {
  children: ReactNode;
  initialModern?: boolean;
}

export const RetroProvider: React.FC<RetroProviderProps> = ({ children, initialModern = false }) => {
  const [isModern, setIsModern] = useState(initialModern);

  useEffect(() => {
    const saved = localStorage.getItem('miuiga_modern_mode');
    if (saved !== null) {
      setIsModern(saved === 'true');
    }
  }, []);

  const toggleModern = () => {
    const newVal = !isModern;
    setIsModern(newVal);
    localStorage.setItem('miuiga_modern_mode', String(newVal));
  };

  return (
    <RetroContext.Provider value={{ isModern, toggleModern }}>
      <div className={isModern ? 'mode-modern' : ''}>
        {children}
      </div>
    </RetroContext.Provider>
  );
};
