import React, { useEffect, useState, useRef } from 'react';
import { Building2, Lightbulb, Users, Trophy, Globe, Rocket } from 'lucide-react';

const OurHistory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded with a vision to transform businesses through innovative IT solutions and strategic consulting.',
      icon: Building2,
      color: 'from-purple-600 to-purple-700'
    },
    {
      year: '2013',
      title: 'Innovation Breakthrough',
      description: 'Launched our proprietary digital transformation framework, helping 50+ enterprises modernize their operations.',
      icon: Lightbulb,
      color: 'from-purple-700 to-purple-800'
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Expanded operations to three continents, establishing partnerships with Fortune 500 companies.',
      icon: Globe,
      color: 'from-purple-800 to-purple-900'
    },
    {
      year: '2019',
      title: 'Team Growth',
      description: 'Grew to over 500 dedicated consultants and technologists, building centers of excellence worldwide.',
      icon: Users,
      color: 'from-purple-900 to-black'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Recognized as a leader in IT consulting, winning multiple industry awards for innovation and client success.',
      icon: Trophy,
      color: 'from-black to-purple-900'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in AI-driven solutions and sustainable technology, shaping the future of enterprise transformation.',
      icon: Rocket,
      color: 'from-purple-900 to-purple-700'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        const newIndex = Math.floor(scrollProgress * milestones.length);
        setActiveIndex(Math.min(newIndex, milestones.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">History</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A journey of innovation, growth, and transformation. Discover how we've evolved to become 
            a trusted partner in digital excellence.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-700 via-purple-600 to-purple-700 opacity-30"></div>
          
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            const isActive = index <= activeIndex;
            
            return (
              <div
                key={index}
                className={`relative mb-16 md:mb-24 transition-all duration-700 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-2xl p-6 md:p-8 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/20">
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-purple-400">{milestone.year}</h3>
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{milestone.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} ring-4 ring-black shadow-lg shadow-purple-700/50 transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-0'
                    }`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Mobile Line Connector */}
                <div className="md:hidden absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-purple-700 to-transparent opacity-30"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 md:mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gradient-to-r from-purple-700 to-purple-600 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl">
              Join hundreds of organizations that have transformed their business with our expertise.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(#ffffff08 1px, transparent 1px),
            linear-gradient(90deg, #ffffff08 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default OurHistory;