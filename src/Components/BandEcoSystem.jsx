import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const BrandEcoSystem = () => {
  const brands = [
    {
      name: "Amala On The Go",
      logo: "🍲",
      bgColor: "bg-gray-900",
      socials: [
        { icon: "Instagram", url: "#" },
        { icon: "X", url: "#" }

      ]
    },
    {
      name: "Core Connect Academy",
      logo: "CCA",
      bgColor: "bg-white",
      socials: [
        { icon: "Facebook", url: "#" },
        { icon: Youtube, url: "#" },
        { icon: Instagram, url: "#" },
        { icon: "X", url: "#" }
      ]
    },
    {
      name: "Innosphere Consulting",
      logo: "IC",
      bgColor: "bg-gray-900",
      socials: [
        { icon: Linkedin, url: "#" },
        { icon: Youtube, url: "#" },
        { icon: Instagram, url: "#" },
        { icon: "X", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header with info icon */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-purple-700 inline-block">
            Our Brand Ecosystem
          </h2>
          <div className="absolute top-0 right-0 w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white">
            <span className="text-sm">ℹ</span>
          </div>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Logo Circle */}
              <div className={`w-48 h-48 ${brand.bgColor} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                {brand.name === "Amala On The Go" && (
                  <div className="text-center">
                    <div className="text-6xl mb-2">{brand.logo}</div>
                    <div className="text-orange-400 font-bold text-xl">Amala</div>
                    <div className="text-orange-400 text-sm">On The Go</div>
                  </div>
                )}
                {brand.name === "Core Connect Academy" && (
                  <div className="text-center">
                    <div className="text-purple-700 text-3xl font-bold mb-2">C</div>
                    <div className="text-purple-700 text-sm font-semibold mb-1">CORE CONNECT</div>
                    <div className="text-gray-600 text-xs tracking-wider">ACADEMY</div>
                  </div>
                )}
                {brand.name === "Innosphere Consulting" && (
                  <div className="text-center">
                    <div className="text-purple-300 mb-2">
                      <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="30" r="3" />
                        <circle cx="50" cy="50" r="3" />
                        <circle cx="50" cy="70" r="3" />
                        <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="text-purple-300 text-xs tracking-wider">
                      <div>INNOSPHERE</div>
                      <div>CONSULTING</div>
                      <div className="text-purple-400">LET US GO</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Brand Name */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{brand.name}</h3>

              {/* Social Icons */}
              <div className="flex gap-3">
                {brand.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="text-purple-700 hover:text-purple-800 transition-colors"
                  >
                    {social.icon === "X" ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : social.icon === "Facebook" ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ) : typeof social.icon === 'function' ? (
                      <social.icon className="w-5 h-5" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandEcoSystem