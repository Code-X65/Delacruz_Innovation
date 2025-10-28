import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import BackgroundImage from '../assets/Images/bghero.png'
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden " style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a90b8]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6bb3d8]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 max-w-7xl mx-auto"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="hero-container max-w-5xl mx-auto text-center">
            {/* Main Heading with Animation */}
            <h2
              className={`text-4xl md:text-5xl lg:text-7xl font-semibold text-purple-600 mb-6 md:mb-8 leading-tight transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              What's your next{' '}
            
                brilliant move
             
              ?
            </h2>

            {/* Description with Delayed Animation */}
            <p
              className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              Game-changing work. People-powered growth. At{' '}
              <span className="text-purple-600 font-semibold">Delacruz</span>, we
              help you think bigger, build stronger, and expand opportunity for
              all.
            </p>

            {/* CTA Button with Delayed Animation */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
             <button className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl hover:shadow-[#4a90b8]/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Button Background Animation */}
                <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                <span className="relative z-10">Book a Consultation</span>
                
                <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                
                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </button>
            </div>


            {/* Scroll Indicator
            <div
              className={`mt-16 md:mt-20 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
                <span className="text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                  <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(#ffffff08 1px, transparent 1px),
            linear-gradient(90deg, #ffffff08 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default Hero;