import React from 'react';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
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
            className="text-white/90 text-sm font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#about" 
            className="text-white/90 text-sm font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#skills" 
            className="text-white/90 text-sm font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#projects" 
            className="text-white/90 text-sm font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#contact" 
            className="text-white/90 text-sm font-medium hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;