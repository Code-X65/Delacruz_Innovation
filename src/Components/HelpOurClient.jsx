import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Target, ArrowRight } from 'lucide-react';

import { Globe, Database, Briefcase } from 'lucide-react';
const HelpOurClient = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


const services = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Digital Transformation',
    description:
      'We help businesses embrace digital solutions — automating workflows, enhancing customer experiences, and modernizing legacy systems for sustainable growth.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    gradient: 'from-[#4a90b8] to-[#6bb3d8]',
    delay: '0ms',
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Business Information',
    description:
      'We provide data-driven insights that empower decision-making. From market analysis to performance dashboards, we help you understand and act on what truly matters.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
    gradient: 'from-[#6bb3d8] to-[#87ceeb]',
    delay: '200ms',
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Business Advisory',
    description:
      'Our advisory team partners with you to identify growth opportunities, streamline operations, and develop long-term strategies that keep you ahead of competition.',
    image:
      'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=800&auto=format&fit=crop',
    gradient: 'from-[#4a90b8] to-[#5fa8c8]',
    delay: '400ms',
  },
];


  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <p className="text-[#6bb3d8] text-sm font-semibold tracking-widest uppercase mb-4">
            How We Help Clients
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's turn your biggest opportunities
            <br />
            <span className="text-purple-500">
              into your next big moves.
            </span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-purple-700 border border-white rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-500 transform ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}
              style={{ 
                transitionDelay: isVisible ? service.delay : '0ms',
                animation: isVisible ? `float ${3 + index * 0.5}s ease-in-out infinite` : 'none'
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-purple-300 opacity-40 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon Container Overlay */}
                <div className="absolute top-4 left-4">
                  <div className={`w-14 h-14 rounded-xl bg-purple-700 p-0.5 group-hover:scale-110 transition-transform duration-300`}>
  <div className="w-full h-full bg-[#0d2438]/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-4   group-hover:text-white transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-50  leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-gray-50 group-hover:text-white transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <button className="group relative px-8 py-4 bg-purple-700 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-700/50 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
           <div className="absolute inset-0 bg-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default HelpOurClient;