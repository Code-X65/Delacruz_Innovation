import React, { useState, useEffect, useRef } from 'react';

// JSON Data
const caseStudiesData = {
  title: "Case Studies",
  subtitle: "Real results from real clients. See how we've helped businesses transform and grow.",
  cases: [
    {
      id: 1,
      tags: ["Data Strategy", "Digital Solutions", "Analytics"],
      title: "National Digital Health Transformation — 111 Emergency Online Program",
      client: "NHS England, UK Health Security Agency",
      challenge: {
        title: "The Challenge",
        description: "The platform's performance and accessibility required significant improvement to meet modern healthcare and user experience standards."
      },
      solution: {
        title: "Our Solution",
        description: "Optimised a range of features: Analytics to document requirements and system workflows. Partnered with clinical authors, product owners, and architects to increase application reliability, safety and accessibility standards. Led gap analysis and process re-engineering to enable faster triage and enhanced system reliability."
      },
      results: {
        title: "The Results",
        metrics: [
          {
            icon: "📊",
            value: "Reduced 40% manual data retrieval",
            description: "Streamlined digital tools, adverts and accountability from application tickets for 2 million users"
          },
          {
            icon: "👥",
            value: "160K",
            description: "Monthly calls"
          },
          {
            icon: "📈",
            value: "4.5x",
            description: "Growth"
          }
        ]
      }
    },
    {
      id: 2,
      tags: ["Data Strategy", "Digital Solutions", "Analytics"],
      title: "Platform Integration & Data Modernisation —",
      client: "Skybetting And Gaming (FlutterGroup), Leeds UK",
      challenge: {
        title: "The Challenge",
        description: "Multiple legacy systems and siloed data models created inefficiencies and slowed digital deployment cycles."
      },
      solution: {
        title: "Our Solution",
        description: "Streamlined cross-platform data exchange, improving operational efficiency. Reduced service downtime and accelerated time-to-market for new platforms. Improved regulatory compliance through structured governance and audit-ready documentation."
      },
      results: {
        title: "The Results",
        metrics: [
          {
            icon: "⚡",
            value: "50%",
            description: "Faster releases"
          },
          {
            icon: "🌍",
            value: "3 Countries",
            description: "Deployment"
          },
          {
            icon: "💰",
            value: "£2M",
            description: "Cost savings"
          }
        ]
      }
    },
       {
      id: 3,
      tags: ["Brand Strategy", "Digital Solutions", "Analytics"],
      title: "Workforce Management (WFM) Optimisation",
      client: "Social Security Scotland - Glasgow, Scotland",
      challenge: {
        title: "The Challenge",
        description: "Existing manual scheduling and reporting processes limited visibility and adaptability across multiple service centres."
      },
      solution: {
        title: "Our Solution",
        description: "Improved forecasting accuracy and workload transparency. Increased staff productivity and engagement through intelligent scheduling. Provided a scalable digital framework for future agency-wide implementation."
      },
      results: {
        title: "The Results",
        metrics: [
          {
            icon: "⚡",
            value: "150%",
            description: "Faster releases"
          },
          {
            icon: "🌍",
            value: "150%",
            description: "Webiste Traffic"
          },
          {
            icon: "💰",
            value: "4.5X",
            description: "Cost savings"
          }
        ]
      }
    }
  ]
};

const CaseStudies = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.case-card');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
            {caseStudiesData.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            {caseStudiesData.subtitle}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudiesData.cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              data-id={caseStudy.id}
              className={`case-card transition-all duration-700 ${
                visibleCards.has(String(caseStudy.id))
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-black border border-purple-700 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-700 text-white text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-50 mb-2">
                  {caseStudy.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6">{caseStudy.client}</p>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3">
                        {caseStudy.challenge.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                        {caseStudy.challenge.description}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-3">
                        {caseStudy.solution.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                        {caseStudy.solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-4">
                      {caseStudy.results.title}
                    </h3>
                    <div className="space-y-4">
                      {caseStudy.results.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-dark border border-purple-700 rounded-lg p-4 hover:bg-gray-900 transition-colors duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{metric.icon}</span>
                            <div>
                              <p className="text-xl sm:text-2xl font-bold text-purple-700 mb-1">
                                {metric.value}
                              </p>
                              <p className="text-gray-50 text-sm">
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center justify-center text-white py-16 my-10 border border-purple-700 rounded-lg '>
            <h1 className='text-4xl font-bold mb-4'>Want Results Like These?</h1>
            <p className='text-gray-300'>Let's discuss how we can help your business achieve similar transformational outcomes.</p>
            <button className='text-semi-bold px-8 py-3 hover:scale-0 rounded-md border border-purple-600 my-6 hover:shadow-md hover:shadow-purple-500 hover:bg-purple-700 hover:text-white transition-all duration-500 cursor-pointer'>Get in Touch</button>
        </div>
      </div>

      <style jsx>{` 
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;