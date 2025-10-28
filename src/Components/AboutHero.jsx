import React, { useEffect, useState } from 'react';
import BackgroundImage from '../assets/Images/bghero.png'
import { ArrowRight, ChevronRight, ChevronRightIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutHero = () => {
    const location = useLocation();
const navigate = useNavigate();

const currentPage = location.pathname === '/' ? 'Home' : location.pathname.slice(1).replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  return (
    <>
    <div>

      <div id="hero" className="relative h-[400px] md:h-[500px] flex items-end justify-start overflow-hidden " style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className=" inset-0 bg-grid-pattern opacity-5 max-w-7xl "></div>

        <div className="  px-4  pb-4 relative z-10">
          <div className="hero-container ">
            <h6 className='text-gray-50 font-medium'>About us</h6>
            {/* Main Heading with Animation */}
            <h2
              className={`text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 md:mb-8 max-w-3xl leading-tight transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              We accelerate sustainable and inclusive growth
            </h2>
          </div>
        </div>
      </div>
      {/* Navigation path */}
     <div className='p-8 text-gray-50 bg-purple-700 font-semibold '>
  <p>Our clients are always pushing forward. Testing. Challenging. Striving for the change that changes everything.
<br />
<br />
We partner with bold leaders every step of the way. Pinpointing the strategy that will reshape tomorrow. Harnessing innovation to reach net zero. Transforming through technology. Developing skills and capabilities across their organization.
<br />
<br />
Together we’re accelerating toward a more sustainable, inclusive, and growing future for all.</p>
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
  )
}

export default AboutHero