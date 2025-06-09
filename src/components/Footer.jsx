import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-8 overflow-hidden">
      {/* Cyan geometric patterns */}
      <div className="absolute inset-0 opacity-25">
        {/* Circuit-like patterns */}
        <div className="absolute top-4 left-10 w-24 h-24 border-2 border-cyan-400 rotate-45"></div>
        <div className="absolute top-8 left-14 w-10 h-10 bg-cyan-400 rotate-45"></div>
        <div className="absolute bottom-6 right-16 w-20 h-20 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
        
        {/* Connecting lines */}
        <div className="absolute top-12 left-32 w-32 h-1 bg-cyan-400 rotate-12"></div>
        <div className="absolute bottom-12 right-40 w-40 h-1 bg-cyan-400 -rotate-12"></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-cyan-400 transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-1 bg-cyan-400 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/2 w-12 h-12 border-2 border-cyan-400 rotate-12"></div>
        
        {/* Extra pattern elements */}
        <div className="absolute top-6 right-8 w-14 h-14 border-2 border-cyan-400 transform rotate-12"></div>
        <div className="absolute bottom-4 left-8 w-6 h-20 border-l-2 border-cyan-400"></div>
        <div className="absolute top-1/4 left-2/3 w-10 h-2 bg-cyan-400 rotate-90"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
                  My Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
                  Let's Connect
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright Information */}
          <div className="text-center md:text-right">
            <p className="text-sm mb-1">
              Crafted with <span className="text-cyan-400">❤</span>
            </p>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} • Built to inspire and create
            </p>
          </div>
        </div>
        
        {/* Social Media Links */}  
      </div>
    </footer>
  );
};

export default Footer;