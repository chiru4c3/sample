import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5,
    });
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-yellow-300 opacity-10 animate-pulse`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="h-4 w-4 rounded-full bg-blue-800 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center relative">
        {/* Left column - Text content */}
        <div
          className={`w-full lg:w-1/2 space-y-6 transform transition-all duration-1000 relative z-20 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <h2
            className="text-blue-950 text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            We take care of
            <span className="text-yellow-500"> ALL </span>
            your business compliance needs
          </h2>
          <p className="text-blue-800 text-lg md:text-xl max-w-xl">
            An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="px-8 py-3 bg-yellow-500 text-blue-900 rounded-lg font-semibold
                transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/50
                transform hover:-translate-y-1 active:translate-y-0 active:bg-yellow-600 relative z-30"
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 bg-transparent text-blue-800 border-2 border-blue-800 rounded-lg font-semibold
                transition-all duration-300 hover:bg-blue-800 hover:text-white hover:shadow-lg hover:shadow-blue-500/30
                transform hover:-translate-y-1 active:translate-y-0 relative z-30"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right column - Stats */}
        <div
          className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <div className="relative h-[400px] md:h-[500px]">
            {/* Stats floating cards */}
            <div
              className="absolute top-5 -left-5 p-4 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl z-10"
              style={{
                transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <h3 className="text-4xl font-bold text-blue-900">500<span className="text-yellow-500">+</span></h3>
              <p className="text-blue-700">Businesses Incorporated Every Month</p>
            </div>

            <div
              className="absolute top-1/3 -right-5 p-4 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl z-10"
              style={{
                transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * -10}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <h3 className="text-4xl font-bold text-blue-900">250<span className="text-yellow-500">+</span></h3>
              <p className="text-blue-700">Professionals Network</p>
            </div>

            <div
              className="absolute bottom-5 left-5 p-4 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl z-10"
              style={{
                transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * 10}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <h3 className="text-4xl font-bold text-blue-900">20,000<span className="text-yellow-500">+</span></h3>
              <p className="text-blue-700">Clients all over India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-blue-800 opacity-10 rounded-tl-full"
        style={{
          transform: `scale(${1 + mousePosition.x * 0.1}) rotate(${mousePosition.y * 5}deg)`,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-yellow-400 opacity-10 rounded-br-full"
        style={{
          transform: `scale(${1 - mousePosition.x * 0.1}) rotate(${mousePosition.y * 5}deg)`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
