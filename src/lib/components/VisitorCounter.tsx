import React, { useState, useEffect } from 'react';

interface VisitorCounterProps {
  initialCount?: number;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ initialCount = 42 }) => {
  const [count, setCount] = useState<string>('000000');

  useEffect(() => {
    let visits = localStorage.getItem('miuiga_visits') || String(initialCount);
    const newVisits = parseInt(visits) + 1;
    localStorage.setItem('miuiga_visits', String(newVisits));
    setCount(newVisits.toString().padStart(6, '0'));
  }, [initialCount]);

  return (
    <div className="visitor-counter">
      {count}
    </div>
  );
};
