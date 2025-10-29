import React from 'react';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import Logo from '../assets/Images/logo.jpg'
const Footer = () => {
  return (
    <div className="">
 
      {/* Footer Section */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1 ">
              <div className="w-40 mb-3">
                <img src={Logo} alt="" />
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Strategic consulting and digital transformation for businesses across Africa.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#6bb3d8] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#6bb3d8] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#6bb3d8] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#6bb3d8] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">IT Solutions</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-[#6bb3d8] transition-colors">Insights</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className='block'>
              <h4 className="font-semibold mb-4 text-white">Stay Informed</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for insights on digital transformation
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} CODE-X. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;