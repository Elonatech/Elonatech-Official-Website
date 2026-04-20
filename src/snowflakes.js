// src/Snowflakes.js
import React, { useEffect, useState } from 'react';
import './Snowflakes.css';

const Snowflakes = ({ count = 50, heroOnly = false }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const newSnowflakes = [];
      for (let i = 0; i < count; i++) {
        newSnowflakes.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 4 + 2, // 2-6px
          duration: Math.random() * 8 + 5, // 5-13s
          delay: Math.random() * 10,
          sway: Math.random() > 0.5
        });
      }
      setSnowflakes(newSnowflakes);
    };

    createSnowflakes();
  }, [count]);

  // If heroOnly is true, position relative to parent
  // If false, position fixed for entire page
  const containerStyle = heroOnly 
    ? { 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }
    : { 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000
      };

  return (
    <div className="snowflakes" style={containerStyle}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `
              fall ${flake.duration}s linear ${flake.delay}s infinite,
              ${flake.sway ? 'sway 3s ease-in-out infinite' : ''}
            `,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}
    </div>
  );
};

export default Snowflakes;