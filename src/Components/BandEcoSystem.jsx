import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import amala from '../assets/amala.png';
import cca from '../assets/coreconnect.png';
import innosphere from '../assets/innosphare.png';
const BrandEcoSystem = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const brands = [
    {
      name: "Amala On The Go",
      logo: amala, // Replace with actual logo path
      socials: [
        { icon: Instagram, url: "https://instagram.com/amalaonthego", label: "Instagram" },
        { icon: Facebook, url: "https://facebook.com/amalaonthego", label: "Facebook" }
      ]
    },
    {
      name: "Core Connect Academy",
      logo: cca, // Replace with actual logo path
      socials: [
        { icon: Facebook, url: "https://facebook.com/coreconnectacademy", label: "Facebook" },
        { icon: Youtube, url: "https://youtube.com/coreconnectacademy", label: "Youtube" },
        { icon: Instagram, url: "https://instagram.com/coreconnectacademy", label: "Instagram" },
        { icon: Linkedin, url: "https://linkedin.com/company/coreconnectacademy", label: "LinkedIn" }
      ]
    },
    {
      name: "Innosphere Consulting",
      logo: innosphere, // Replace with actual logo path
      socials: [
        { icon: Linkedin, url: "https://linkedin.com/company/innosphere", label: "LinkedIn" },
        { icon: Youtube, url: "https://youtube.com/innosphere", label: "Youtube" },
        { icon: Instagram, url: "https://instagram.com/innosphere", label: "Instagram" },
        { icon: Facebook, url: "https://facebook.com/innosphere", label: "Facebook" }
      ]
    }
  ];

  return (
    <div className="relative bg-black py-20 md:py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-800 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Brand Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our family of innovative brands delivering excellence across industries
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-3xl p-8 hover:border-purple-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-700/20 hover:transform hover:scale-105 h-full flex flex-col">
                
                {/* Logo Container */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl flex items-center justify-center border border-purple-700/20 group-hover:border-purple-600/40 transition-all duration-300 overflow-hidden">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-purple-400 text-4xl font-bold">${brand.name.split(' ').map(w => w[0]).join('')}</div>`;
                      }}
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-6 group-hover:text-purple-300 transition-colors">
                  {brand.name}
                </h3>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent mb-6 group-hover:via-purple-500 transition-colors"></div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4 mt-auto">
                  {brand.socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-purple-900/50 to-black/50 border border-purple-700/30 rounded-xl flex items-center justify-center text-purple-400 hover:text-white hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-700/20 rounded-tr-2xl group-hover:border-purple-500/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-700/20 rounded-bl-2xl group-hover:border-purple-500/40 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-16 md:mt-24 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-600 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-75 delay-500"></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-700 rounded-full animate-ping opacity-75 delay-1000"></div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(#ffffff08 1px, transparent 1px),
            linear-gradient(90deg, #ffffff08 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default BrandEcoSystem;