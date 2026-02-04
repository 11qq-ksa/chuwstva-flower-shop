import { useState, useEffect } from 'react';

/**
 * LOADING SCREEN COMPONENT
 * 
 * Shows spinning logo2.svg with dissolve effect,
 * then reveals the website.
 */

function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [logoFading, setLogoFading] = useState(false);
  const [screenFading, setScreenFading] = useState(false);

  useEffect(() => {
    // Start logo dissolve after 1 second
    const logoFadeTimer = setTimeout(() => {
      setLogoFading(true);
    }, 1000);

    // Start screen fade after logo dissolves (400ms later)
    const screenFadeTimer = setTimeout(() => {
      setScreenFading(true);
    }, 1400);

    // Complete loading after screen fade (300ms)
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1700);

    return () => {
      clearTimeout(logoFadeTimer);
      clearTimeout(screenFadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300 ${
        screenFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        {/* Spinning Logo with dissolve effect */}
        <img 
          src="/logo2.svg" 
          alt="Чувства в цветах"
          className={`w-32 h-32 md:w-48 md:h-48 transition-all duration-500 ${
            logoFading ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
          }`}
          style={{ 
            filter: 'invert(42%) sepia(11%) saturate(1032%) hue-rotate(62deg) brightness(96%) contrast(89%)',
            animation: logoFading ? 'none' : 'spin 0.8s linear infinite',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
