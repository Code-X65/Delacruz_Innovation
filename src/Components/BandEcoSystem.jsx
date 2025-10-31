import React, { useState, useEffect } from 'react';

const BrandEcoSystem = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Replace these with your actual image URLs
  const brands = [
    { logo: 'https://via.placeholder.com/200x100?text=Brand+1', name: 'Brand 1' },
    { logo: 'https://via.placeholder.com/200x100?text=Brand+2', name: 'Brand 2' },
    { logo: 'https://via.placeholder.com/200x100?text=Brand+3', name: 'Brand 3' },
  ];

  return (
    <div className="relative bg-black py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
            Trusted and <span className="text-purple-600">Certified</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Delivering quality digital solutions with recognisable international certification bodies.
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-32 mx-8 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-32 mx-8 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

           {/* Join the Movement */}
      <section className="px-6 py-16 bg-opacity-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6">
            Join the Movement
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Whether you are a growing bussiness, a sector public agency, or a multinational enterprise expanding into Africa, 
            Delacruz Innovations is your trusted partner for digital evolution.
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            Let's build tomorrow,  today!
          </p>
          <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Work with Us
          </button>
        </div>
      </section>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandEcoSystem;