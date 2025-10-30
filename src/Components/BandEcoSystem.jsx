import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Linkedin, Facebook, ChevronLeft, ChevronRight } from 'lucide-react'
import amala from '../assets/amala.png';
import coreconnect from '../assets/coreconnect.png'
import innosphere from '../assets/innospere.png'

const BrandEcoSystem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const brands = [
    {
      logo: amala,
      description: "Leading innovation in food delivery services across Africa",
      socials: [
        { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
        { icon: Facebook, url: "https://facebook.com", label: "Facebook" }
      ]
    },
    {
      logo: coreconnect,
      description: "Empowering the next generation with cutting-edge tech education",
      socials: [
        { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
        { icon: Youtube, url: "https://youtube.com", label: "Youtube" },
        { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" }
      ]
    },
    {
      logo: innosphere,
      description: "Strategic consulting for digital transformation and business growth",
      socials: [
        { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
        { icon: Youtube, url: "https://youtube.com", label: "Youtube" },
        { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
        { icon: Facebook, url: "https://facebook.com", label: "Facebook" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative bg-black py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Brand Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover our family of innovative brands delivering excellence across industries
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <div className="relative">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 relative z-10'
                    : 'opacity-0 scale-95 absolute top-0 left-0 w-full pointer-events-none'
                }`}
              >
                <div 
                  className="perspective-1000"
                  onClick={() => toggleFlip(`mobile-${index}`)}
                >
                  <div className={`relative transition-all duration-700 transform-style-3d ${flippedCards[`mobile-${index}`] ? 'rotate-y-180' : ''}`}
                       style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Front */}
                    <div className="backface-hidden bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-3xl p-8"
                         style={{ backfaceVisibility: 'hidden' }}>
                      <div className="flex items-center justify-center mb-8">
                        <div className="w-48 h-48 bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl flex items-center justify-center border border-purple-700/20 overflow-hidden">
                          <img 
                            src={brand.logo} 
                            alt="Brand logo"
                            className="w-40 h-40 object-contain"
                          />
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent mb-6"></div>
                      <p className="text-gray-400 text-center text-sm">Tap to see social links</p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-900/50 to-black border border-purple-600/30 rounded-3xl p-8 rotate-y-180"
                         style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-gray-300 text-center mb-6">{brand.description}</p>
                        <div className="flex items-center justify-center gap-4">
                          {brand.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-600 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                                aria-label={social.label}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon className="w-5 h-5" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-2 bg-purple-700 rounded-full text-white hover:bg-purple-600 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {brands.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-purple-500 w-8' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 bg-purple-700 rounded-full text-white hover:bg-purple-600 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid with Flip Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div 
                className="perspective-1000 h-96 cursor-pointer"
                onMouseEnter={() => toggleFlip(index)}
                onMouseLeave={() => toggleFlip(index)}
              >
                <div className={`relative h-full transition-all duration-700 transform-style-3d ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                     style={{ transformStyle: 'preserve-3d' }}>
                  
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-3xl p-8 hover:border-purple-600/50 transition-all duration-300"
                       style={{ backfaceVisibility: 'hidden' }}>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-48 h-48 bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl flex items-center justify-center border border-purple-700/20 overflow-hidden mb-6">
                        <img 
                          src={brand.logo} 
                          alt="Brand logo"
                          className="w-40 h-40 object-contain"
                        />
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-900/50 to-black border border-purple-600/40 rounded-3xl p-8 rotate-y-180"
                       style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <p className="text-gray-300 mb-8 text-lg">{brand.description}</p>
                      <div className="flex items-center justify-center gap-4">
                        {brand.socials.map((social, idx) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                              aria-label={social.label}
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default BrandEcoSystem;