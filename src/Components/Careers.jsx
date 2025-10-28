import React, { useState, useEffect } from 'react';
import { ArrowRight, Briefcase, Users, Rocket, Sparkles } from 'lucide-react';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all flex-1 duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-700/20 border border-purple-700/30 rounded-full mb-6">
  <Briefcase className="w-4 h-4 text-purple-300" />
  <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">
                Careers
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Looking for your{' '}
              <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
    next move?
      </span>
      <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-purple-400 animate-pulse" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We look for people who are energized by the same things as our clients: 
              <span className="text-white font-semibold"> bold thinking</span>, 
              <span className="text-white font-semibold"> real impact</span>, and the 
              <span className="text-white font-semibold"> courage to move first</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1">
 <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              
             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-purple-700/50 transition-all duration-300">
<div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-1">
                  1000+
                </div>
                <div className="text-gray-400 text-sm">Employees</div>
              </div>
             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-[#87ceeb]/50 transition-all duration-300">
  <div className="text-3xl font-bold bg-gradient-to-r from-[#87ceeb] to-[#a8d8ea] bg-clip-text text-transparent mb-1">
                  100+
                </div>
                <div className="text-gray-400 text-sm">Positions</div>
              </div>
            </div>

            {/* CTA Button */}
         <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-700/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                Explore Careers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm">
                <Users className="w-4 h-4 text-purple-500" />
                Collaborative Culture
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm">
                <Rocket className="w-4 h-4 text-purple-400" />
                Fast Growth
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative flex-1 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '300ms' }}>
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Image */}
              {/* <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop" 
                alt="Modern Office Space"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              /> */}
<iframe
  src="https://www.youtube.com/embed/vZE0j_WCRvI"
  className="w-full h-[400px] md:h-[500px] object-cover"
  allow="autoplay; encrypted-media"
  frameBorder="0"
></iframe>

              
              {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-transparent to-purple-700/40 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Floating Card 1 */}
              <div className="absolute top-8 right-8 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Join Our Team</div>
                    <div className="text-gray-400 text-xs">Remote & On-site</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 left-8 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-xl p-4 shadow-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Career Growth</div>
                    <div className="text-gray-400 text-xs">Unlimited Potential</div>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-purple-700 to-purple-600 opacity-20 blur-3xl rounded-full"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-700 opacity-20 blur-3xl rounded-full animate-pulse"></div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Careers;