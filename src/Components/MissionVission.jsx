import React, { useState, useEffect, useRef } from 'react'

const MissionVision = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.target === missionRef.current && entry.isIntersecting) {
          setMissionVisible(true);
        }
        if (entry.target === visionRef.current && entry.isIntersecting) {
          setVisionVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission Card */}
          <div 
            ref={missionRef}
            className={`group relative transition-all duration-1000 transform ${
              missionVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-black bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-700 border-opacity-30 hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white ml-4 group-hover:text-purple-300 transition-colors">Our Mission</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-700 to-purple-600 mb-6 group-hover:w-full transition-all duration-700"></div>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                We pledge to serve our clients, guiding them on the path to process excellence and supporting their digital transformation journey. We do this by making deep-rooted, impactful, and sustainable enhancements to maximize their potential at various stages of growth.
              </p>
              <div className="mt-6 flex space-x-2">
                <div className="w-2 h-2 bg-purple-700 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-700 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div 
            ref={visionRef}
            className={`group relative transition-all duration-1000 transform delay-300 ${
              visionVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-black bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-600 border-opacity-30 hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white ml-4 group-hover:text-purple-300 transition-colors">Our Vision</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-500 mb-6 group-hover:w-full transition-all duration-700"></div>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                To create an ecosystem where all businesses can achieve process excellence for optimum efficiency, quality and customer satisfaction, and leverage the latest technologies to enhance their performance.
              </p>
              <div className="mt-6 flex space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-600 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-75 delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-700 rounded-full animate-ping opacity-75 delay-1000"></div>
      </div>

      <style jsx>{`
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default MissionVision;