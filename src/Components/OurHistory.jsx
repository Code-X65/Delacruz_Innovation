import React, { useEffect, useState } from 'react';

const OurHistory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">History</span>
          </h2>
        </div>

        {/* Image */}
        <div className={`mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop" 
              alt="Team collaboration"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2010, CODE-X began with a vision to transform businesses through innovative IT solutions and strategic consulting. What started as a small team of passionate technologists has grown into a global leader in digital transformation.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              In 2013, we achieved our first major breakthrough by launching our proprietary digital transformation framework, which helped over 50 enterprises modernize their operations. This innovation set the foundation for our reputation as thought leaders in the industry.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              By 2016, our success led to global expansion across three continents, establishing partnerships with Fortune 500 companies. Our commitment to excellence and client success opened doors to new markets and opportunities worldwide.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The year 2019 marked significant team growth as we expanded to over 500 dedicated consultants and technologists. We built centers of excellence around the world, bringing together diverse talent to solve complex business challenges.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              In 2022, our efforts were recognized with multiple industry awards for innovation and client success. These accolades affirmed our position as a leader in IT consulting and motivated us to push boundaries even further.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Today in 2025, we're leading the charge in AI-driven solutions and sustainable technology, shaping the future of enterprise transformation. Our journey continues as we help organizations navigate the complexities of digital innovation and achieve lasting success.
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;