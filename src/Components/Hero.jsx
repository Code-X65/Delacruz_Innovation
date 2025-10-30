import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(5);

  // Multiple video sources - replace with your actual video URLs
  const videos = [
    'https://media.istockphoto.com/id/1130891181/video/it-specialist-standing-in-front-of-server-racks-with-laptop-he-activates-data-center-with-a.mp4?s=mp4-640x640-is&k=20&c=fpqLQ5UHuWLv9ANb_lqLUeh_UEZ7Dy9DvQXcHCsFcN8=', // Tech/coding video
    'https://media.istockphoto.com/id/2165901622/video/artificial-intelligence-developer-team-meeting-at-night.mp4?s=mp4-640x640-is&k=20&c=SScucaSLCCWx8gGKzKJA80qjD2lgNoiBDudzpY8nan0=', // Business meeting
    'https://media.istockphoto.com/id/1036949572/video/caucasian-business-woman-with-dark-hair-leading-a-meeting-in-the-glass-conference-room.mp4?s=mp4-640x640-is&k=20&c=6utWbY6OUmTPoYJYUpMl6XVBGqxU5VTrX8MhDIeFOrA=', // Data visualization
  ];

  // Text rotation phrases
  const phrases = [
    'Hello...',
    'Ready to innovate?',
    'What\'s your next brilliant move?',
    'Transform your digital future',
    'Build something extraordinary',
    'Scale your technology vision'
  ];

  useEffect(() => {
    // Trigger visibility animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Video rotation effect
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 8 seconds

    return () => clearInterval(videoInterval);
  }, []);

  // Auto-typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, displayText.length - 1)
        : currentPhrase.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        // Pause at end of phrase
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(150);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Transition */}
        <div className="absolute inset-0 w-full h-full">
          {videos.map((video, index) => (
            <video
              key={index}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="hero-container max-w-6xl mx-auto text-center">
            {/* Auto-typing Heading with Cursor */}
            <div
              className={`min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] flex items-center justify-center mb-6 md:mb-8 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {displayText}
                <span className="inline-block w-1 h-8 sm:h-10 md:h-12 lg:h-16 bg-purple-500 ml-1 animate-blink"></span>
              </h1>
            </div>

            {/* Description with Delayed Animation */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              Partner with{' '}
              <span className="text-purple-400 font-semibold">Delacruz</span>
              {' '}to revolutionize your IT infrastructure. We deliver cutting-edge solutions 
              that drive innovation, enhance security, and accelerate your digital transformation journey.
            </p>

            {/* CTA Button with Delayed Animation */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Link to='/consultation_form' className="group relative inline-flex items-center gap-2 sm:gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Button Background Animation */}
                <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                <span className="relative z-10">Book a Consultation</span>
                
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                
                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </Link>
            </div>

            {/* Stats Section */}
            <div
              className={`mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50+', label: 'Expert Consultants' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Indicator Dots */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex
                  ? 'bg-purple-500 w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Switch to video ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(#ffffff08 1px, transparent 1px),
            linear-gradient(90deg, #ffffff08 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        @media (max-width: 640px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;