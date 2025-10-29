import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import insight1 from '../assets/Images/insight1.png';
import insight2 from '../assets/Images/insight2.png';
import insight3 from '../assets/Images/insight3.png';
import insight4 from '../assets/Images/insight4.png';
import insight5 from '../assets/Images/insight5.png';
import insight6 from '../assets/Images/insight6.png';
// Import insights data
import insightsData from '../InsightsData.json';

const InsightsListPage = () => {
     const placeholderImages = [
    insight2,
    insight3,
    insight4,
    insight5,
    insight6
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredInsight = insightsData.insights.find(insight => insight.featured);
  const regularInsights = insightsData.insights.filter(insight => !insight.featured);

  return (
    <div className="min-h-screen bg-white py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
            Insights & Perspectives
          </h1>
          <p className="text-gray-600 text-lg">
            Expert analysis on strategic digital transformation, and business growth in African markets.
          </p>
        </div>

        {/* Featured Article */}
        {featuredInsight && (
          <Link to={`/insights/${featuredInsight.id}`}>
            <div className={`mb-16 group cursor-pointer transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-black/50 group-hover:from-purple-700/30 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-purple-700/30 rounded-full blur-3xl"></div>
                    </div>
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                      <img src={insight1} alt="" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block mb-4">
                      <span className="bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {featuredInsight.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {featuredInsight.title}
                    </h2>
                    
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {featuredInsight.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredInsight.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredInsight.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularInsights.map((insight, index) => (
            <Link key={insight.id} to={`/insights/${insight.id}`}>
              <div className={`group cursor-pointer transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Image Section */}
                   <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
    <img 
      src={placeholderImages[index % 6]} 
      alt={insight.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="bg-purple-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {insight.category}
                      </span>
                      <span className="ml-2 text-gray-500 text-xs">{insight.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsListPage;