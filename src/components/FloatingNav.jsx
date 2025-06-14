import React, { useState } from 'react';

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation - Original */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-full px-8 py-3 shadow-2xl shadow-cyan-500/5 relative overflow-hidden">
          {/* Subtle animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
          
          {/* Subtle corner accents */}
          <div className="absolute top-1 left-4 w-1 h-1 bg-cyan-400/60 rounded-full"></div>
          <div className="absolute top-1 right-4 w-1 h-1 bg-cyan-400/60 rounded-full"></div>
          
          <div className="flex items-center gap-8 relative z-10">
            {/* Navigation Links */}
            <a 
              href="#home" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#skills" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#projects" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="https://cal.com/madhumithra-m/30min?user=madhumithra-m" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 text-sm font-medium hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
            >
              Book A Call
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-6 right-6 z-50 bg-black/70 backdrop-blur-md border border-cyan-500/30 rounded-full p-3 shadow-lg hover:border-cyan-400/60 hover:bg-black/80 transition-all duration-300"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center relative">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md border-l border-cyan-500/20 z-40 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="relative z-10 p-6 pt-20 flex flex-col space-y-6">
            <a 
              href="#home"
              onClick={toggleMobileMenu}
              className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen && window.location.hash === '#home' ? 'text-cyan-400' : 'text-white'}`}
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={toggleMobileMenu}
              className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen && window.location.hash === '#about' ? 'text-cyan-400' : 'text-white'}`}
            >
              About
            </a>
            <a 
              href="#skills"
              onClick={toggleMobileMenu}
              className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen && window.location.hash === '#skills' ? 'text-cyan-400' : 'text-white'}`}
            >
              Skills
            </a>
            <a 
              href="#projects"
              onClick={toggleMobileMenu}
              className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen && window.location.hash === '#projects' ? 'text-cyan-400' : 'text-white'}`}
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={toggleMobileMenu}
              className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen && window.location.hash === '#contact' ? 'text-cyan-400' : 'text-white'}`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;