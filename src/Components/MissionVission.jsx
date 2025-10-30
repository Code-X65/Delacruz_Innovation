import React, { useState, useEffect } from 'react';
import { Target, Eye, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const MissionVisionValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const missionPoints = [
    'Guide clients on their path to process excellence',
    'Support digital transformation journeys with expertise',
    'Deliver deep-rooted and sustainable enhancements',
    'Maximize potential at every stage of growth'
  ];

  const visionPoints = [
    'Create an ecosystem for universal process excellence',
    'Enable optimum efficiency and quality across industries',
    'Drive exceptional customer satisfaction',
    'Leverage cutting-edge technologies for performance enhancement'
  ];

  const valuePoints = [
    'Innovation: Pioneering solutions that transform businesses',
    'Integrity: Building trust through transparency and ethics',
    'Excellence: Delivering quality in every engagement',
    'Collaboration: Partnering for sustainable success',
    'Agility: Adapting swiftly to evolving needs',
    'Impact: Creating measurable, lasting value'
  ];

  const sections = [
    {
      icon: Target,
      title: 'Our Mission',
      gradient: 'from-purple-700 to-purple-600',
      borderColor: 'border-purple-700/30 hover:border-purple-600/50',
      points: missionPoints,
      checkColor: 'text-purple-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      gradient: 'from-purple-600 to-purple-500',
      borderColor: 'border-purple-600/30 hover:border-purple-500/50',
      points: visionPoints,
      checkColor: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Our Values',
      gradient: 'from-purple-700 to-purple-800',
      borderColor: 'border-purple-700/30 hover:border-purple-600/50',
      points: valuePoints,
      checkColor: 'text-purple-500'
    }
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? 'opacity-100 scale-100 relative z-10'
                      : 'opacity-0 scale-95 absolute top-0 left-0 w-full pointer-events-none'
                  }`}
                >
                  <div className={`bg-gradient-to-br from-purple-950/50 to-black border ${section.borderColor} rounded-2xl p-8 transition-all duration-300`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white ml-4">{section.title}</h2>
                    </div>
                    <div className={`h-1 w-20 bg-gradient-to-r ${section.gradient} mb-6`}></div>
                    <div className="space-y-3">
                      {section.points.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className={`w-5 h-5 ${section.checkColor} flex-shrink-0 mt-1`} />
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-2 bg-purple-700 rounded-full text-white hover:bg-purple-600 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {sections.map((_, index) => (
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
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Flex Container */}
        <div className="hidden lg:flex gap-6">
          
          {/* Mission Section */}
          <div 
            className={`flex-1 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-2xl p-8 h-full hover:border-purple-600/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Our Mission</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-700 to-purple-600 mb-6"></div>
              <div className="space-y-3">
                {missionPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div 
            className={`flex-1 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-600/30 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Our Vision</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-500 mb-6"></div>
              <div className="space-y-3">
                {visionPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div 
            className={`flex-1 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-2xl p-8 h-full hover:border-purple-600/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Our Values</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-700 to-purple-800 mb-6"></div>
              <div className="space-y-3">
                {valuePoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;