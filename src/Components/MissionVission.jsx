import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const MissionVisionValues = () => {
  const [sectionVisible, setSectionVisible] = useState({
    mission: false,
    vision: false,
    values: false
  });
  
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === missionRef.current) {
            setSectionVisible(prev => ({ ...prev, mission: true }));
          }
          if (entry.target === visionRef.current) {
            setSectionVisible(prev => ({ ...prev, vision: true }));
          }
          if (entry.target === valuesRef.current) {
            setSectionVisible(prev => ({ ...prev, values: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

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

  const coreValues = [
    { title: 'Innovation', description: 'Pioneering solutions that transform businesses' },
    { title: 'Integrity', description: 'Building trust through transparency and ethics' },
    { title: 'Excellence', description: 'Delivering quality in every engagement' },
    { title: 'Collaboration', description: 'Partnering for sustainable success' },
    { title: 'Agility', description: 'Adapting swiftly to evolving needs' },
    { title: 'Impact', description: 'Creating measurable, lasting value' }
  ];

  return (
    <div className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-800 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Mission Section */}
        <div 
          ref={missionRef}
          className={`mb-16 transition-all duration-1000 transform ${
            sectionVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="group relative bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-3xl p-8 md:p-12 hover:border-purple-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-700/20">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white ml-6 group-hover:text-purple-300 transition-colors">Our Mission</h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-700 to-purple-600 mb-8 group-hover:w-48 transition-all duration-700"></div>
            <div className="grid md:grid-cols-2 gap-4">
              {missionPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 group/item hover:transform hover:translate-x-2 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1 group-hover/item:text-purple-400" />
                  <p className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div 
          ref={visionRef}
          className={`mb-16 transition-all duration-1000 transform delay-200 ${
            sectionVisible.vision ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="group relative bg-gradient-to-br from-purple-950/50 to-black border border-purple-600/30 rounded-3xl p-8 md:p-12 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-600/20">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white ml-6 group-hover:text-purple-300 transition-colors">Our Vision</h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-500 mb-8 group-hover:w-48 transition-all duration-700"></div>
            <div className="grid md:grid-cols-2 gap-4">
              {visionPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 group/item hover:transform hover:translate-x-2 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1 group-hover/item:text-purple-300" />
                  <p className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div 
          ref={valuesRef}
          className={`transition-all duration-1000 transform delay-400 ${
            sectionVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="group relative bg-gradient-to-br from-purple-950/50 to-black border border-purple-700/30 rounded-3xl p-8 md:p-12 hover:border-purple-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-700/20">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white ml-6 group-hover:text-purple-300 transition-colors">Our Values</h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-700 to-purple-800 mb-8 group-hover:w-48 transition-all duration-700"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-700/20 rounded-xl p-6 hover:border-purple-600/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-700/10"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <h3 className="text-xl font-bold text-purple-400">{value.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-600 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-75 delay-500"></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-700 rounded-full animate-ping opacity-75 delay-1000"></div>

      <style jsx>{`
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default MissionVisionValues;