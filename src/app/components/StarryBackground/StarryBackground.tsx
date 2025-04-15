'use client';

import React, { useState, useEffect } from 'react';
import './StarryBackground.css';

const Star = ({ style }: { style: React.CSSProperties }) => (
  <span className="star" style={style} /> 
);

const StarryBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = Array.from({ length: 350 }, () => ({
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 2}s`,
    }
  }));

  return (
    <aside className="starry-background">
      {mounted && stars.map((star, index) => (
        <Star key={index} style={star.style} />
      ))}
    </aside>
  );
};

export default StarryBackground;