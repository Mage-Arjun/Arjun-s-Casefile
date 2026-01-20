import { useEffect, useRef } from 'react';

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-foreground/80';
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animation = `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`;
      
      container.appendChild(star);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};

export default StarField;
