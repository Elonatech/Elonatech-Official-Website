import React, { useEffect, useRef } from 'react';

const CanvasSnow = ({ heroOnly = false }) => {
  const canvasRef = useRef(null);
  const snowflakesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resize = () => {
      if (heroOnly) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Create snowflakes
    const createSnowflakes = () => {
      const snowflakes = [];
      const count = heroOnly ? 100 : 200;
      
      for (let i = 0; i < count; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          sway: Math.random() * 0.5 - 0.25
        });
      }
      snowflakesRef.current = snowflakes;
    };

    createSnowflakes();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakesRef.current.forEach((flake) => {
        // Update position
        flake.y += flake.speed;
        flake.x += flake.sway;
        
        // Reset if off screen
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }
        
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;
        
        // Draw snowflake
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
        
        // Add glow
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 5;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [heroOnly]);

  const canvasStyle = heroOnly 
    ? { position: 'absolute', top: 0, left: 0, zIndex: 1 }
    : { position: 'fixed', top: 0, left: 0, zIndex: 100, pointerEvents: 'none' };

  return (
    <canvas
      ref={canvasRef}
      style={canvasStyle}
    />
  );
};

export default CanvasSnow;