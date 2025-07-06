import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-6 md:py-8 overflow-hidden">
      {/* Cyan geometric patterns */}
      <div className="absolute inset-0 opacity-20 md:opacity-25">
        {/* Circuit-like patterns */}
        <div className="absolute top-2 md:top-4 left-4 md:left-10 w-12 md:w-24 h-12 md:h-24 border-2 border-cyan-400 rotate-45"></div>
        <div className="absolute top-4 md:top-8 left-6 md:left-14 w-5 md:w-10 h-5 md:h-10 bg-cyan-400 rotate-45"></div>
        <div className="absolute bottom-3 md:bottom-6 right-8 md:right-16 w-10 md:w-20 h-10 md:h-20 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-5 md:bottom-10 right-10 md:right-20 w-3 md:w-6 h-3 md:h-6 bg-cyan-400 rounded-full"></div>
        
        {/* Connecting lines */}
        <div className="absolute top-6 md:top-12 left-16 md:left-32 w-16 md:w-32 h-0.5 md:h-1 bg-cyan-400 rotate-12"></div>
        <div className="absolute bottom-6 md:bottom-12 right-20 md:right-40 w-20 md:w-40 h-0.5 md:h-1 bg-cyan-400 -rotate-12"></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/2 left-1/4 w-4 md:w-8 h-4 md:h-8 border-2 border-cyan-400 transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/3 w-8 md:w-16 h-0.5 md:h-1 bg-cyan-400 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/2 w-6 md:w-12 h-6 md:h-12 border-2 border-cyan-400 rotate-12"></div>
        
        {/* Extra pattern elements */}
        <div className="absolute top-3 md:top-6 right-4 md:right-8 w-7 md:w-14 h-7 md:h-14 border-2 border-cyan-400 transform rotate-12"></div>
        <div className="absolute bottom-2 md:bottom-4 left-4 md:left-8 w-3 md:w-6 h-10 md:h-20 border-l-2 border-cyan-400"></div>
        <div className="absolute top-1/4 left-2/3 w-5 md:w-10 h-1 md:h-2 bg-cyan-400 rotate-90"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <nav className="order-2 md:order-1 w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base">
              <li>
                <a href="#about" className="font-medium leading-tight tracking-tight text-white transition-colors duration-300 px-2 py-1 rounded-md hover:bg-cyan-400/10">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="font-medium leading-tight tracking-tight text-white transition-colors duration-300 px-2 py-1 rounded-md hover:bg-cyan-400/10">
                  My Work
                </a>
              </li>
              <li>
                <a href="#skills" className="font-medium leading-tight tracking-tight text-white transition-colors duration-300 px-2 py-1 rounded-md hover:bg-cyan-400/10">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contacts" className="font-medium leading-tight tracking-tight text-white transition-colors duration-300 px-2 py-1 rounded-md hover:bg-cyan-400/10">
                  Let's Connect
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright Information */}
          <div className="order-1 md:order-2 text-center md:text-right">
            <p className="text-sm mb-1">
              Crafted with <span className="text-cyan-400 animate-pulse">❤</span>
            </p>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} • Built to inspire and create
            </p>
          </div>
        </div>
        
        {/* Divider line for mobile */}
        <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mt-4"></div>
  
      </div>
    </footer>
  );
};

export default Footer;