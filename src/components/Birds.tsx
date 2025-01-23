import React, { useState, useEffect } from 'react';
const Theme=localStorage.getItem('theme')

const Bird = ({ x, y, angle, size }) => (
  
  <svg 
    width="20" 
    height="16" 
    viewBox="0 0 20 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: `rotate(${angle}deg)`,
      transition: 'all 0.2s ease-out',
    }}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M20 1.89213C19.2512 2.22033 18.4573 2.43437 17.645 2.52713C18.4962 2.0251 19.1359 1.23078 19.445 0.292127C18.6377 0.762699 17.7571 1.09431 16.84 1.27313C16.4536 0.869725 15.9894 0.548912 15.4755 0.330102C14.9616 0.111292 14.4086 -0.000964 13.85 0.000126737C13.3156 -0.00409145 12.7856 0.0970247 12.2903 0.297697C11.795 0.49837 11.3441 0.794667 10.9634 1.16966C10.5826 1.54465 10.2795 1.99099 10.0713 2.48317C9.8631 2.97535 9.75392 3.50374 9.75 4.03813C9.74934 4.34749 9.78458 4.65588 9.855 4.95713C8.22956 4.87962 6.63813 4.46404 5.18233 3.73691C3.72653 3.00978 2.43834 1.98709 1.4 0.734127C1.03722 1.34953 0.8456 2.05075 0.845 2.76513C0.845471 3.43275 1.01241 4.08971 1.33072 4.67657C1.64903 5.26342 2.10866 5.76164 2.668 6.12613C2.01779 6.10692 1.38112 5.93568 0.809 5.62613V5.67613C0.814795 6.61489 1.14597 7.52259 1.74609 8.24451C2.3462 8.96643 3.1781 9.45789 4.1 9.63513C3.74707 9.72943 3.38331 9.77716 3.018 9.77713C2.75836 9.77648 2.49931 9.75239 2.244 9.70513C2.51331 10.5121 3.02652 11.2155 3.71275 11.7184C4.39898 12.2212 5.22439 12.4985 6.075 12.5121C4.34562 13.8405 2.16557 14.4406 0 14.1841C1.88216 15.3742 4.06415 16.0041 6.291 16.0001C7.8157 16.0231 9.32973 15.7425 10.745 15.1749C12.1603 14.6072 13.4485 13.7638 14.5348 12.6936C15.6211 11.6235 16.4836 10.348 17.0724 8.94132C17.6611 7.53467 17.9642 6.025 17.964 4.50013C17.964 4.32313 17.964 4.15113 17.952 3.97713C18.7548 3.41169 19.4486 2.70465 20 1.89213Z" 
      fill={Theme=="dark"?"white":"black"}
      
    />
  </svg>
);

const FlyingBirdsBackground = () => {
  const [flock, setFlock] = useState([]);
  useEffect(() => {
    const createFlock = () => {
      const birdCount = 6;
      const startX = 0;
      const startY = window.innerHeight;

      const newFlock = Array.from({ length: birdCount }, (_, index) => ({
        id: index,
        x: startX,
        y: startY+100,
        targetX: window.innerWidth + 100,
        targetY: 0,
        angle: -25,
        followDelay: index * 200,
        followOffset: {
          x: index * 30,
          y: -index * 20
        },
        active: index === 0
      }));

      setFlock(newFlock);
    };

    createFlock();
    const interval = setInterval(updateFlock, 50);
    return () => clearInterval(interval);
  }, []);

  const updateFlock = () => {
    setFlock(currentFlock => {
      return currentFlock.map((bird, index) => {
        // Activate next birds in sequence
        if (!bird.active && index > 0 && currentFlock[index-1].active) {
          if (currentFlock[index-1].x > window.innerWidth * 0.2) {
            bird.active = true;
          }
        }

        // Move active birds
        if (bird.active) {
          // Smooth lerp movement
          const speedX = (bird.targetX - bird.x) * 0.02;
          const speedY = (bird.targetY - bird.y) * 0.02;

          return {
            ...bird,
            x: bird.x + speedX,
            y: bird.y + speedY + Math.sin(bird.x * 0.1) * 2, // slight wave motion
          };
        }

        return bird;
      });
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {flock.map(bird => (
        <Bird 
          key={bird.id}
          x={bird.x + bird.followOffset.x}
          y={bird.y + bird.followOffset.y}
          angle={bird.angle} size={undefined}        />
      ))}
    </div>
  );
};

export default FlyingBirdsBackground;