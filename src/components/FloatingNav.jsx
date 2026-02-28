import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation'; // added import

const FixedNavbar = () => {
  const router = useRouter(); // added router
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll / navigation function
  const scrollToSection = (sectionId) => {
    if (!sectionId) return;
    // if it's an in-page anchor (starts with #) perform smooth scroll
    if (sectionId.startsWith('#')) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      // ensure mobile menu closes after in-page navigation
      setIsMobileMenuOpen(false);
      return;
    }
    // otherwise navigate to the route (external page)
    router.push(sectionId);
    // ensure mobile menu closes after route navigation
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          // Hide navbar when scrolling down
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Add your download logic here
    console.log('Download resume');
  };

  // Component to render text with bouncing characters
  const BounceText = ({ text, className = "" }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600); // Reset after animation duration
      }
    };

    return (
      <span 
        className={`inline-block group ${className}`}
        onMouseEnter={handleMouseEnter}
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ease-out font-bold group-hover:text-[#F68B08] ${
              isAnimating ? 'animate-[bounce_0.6s_ease-out_1]' : ''
            }`}
            style={{
              animationDelay: isAnimating ? `${index * 50}ms` : '0ms'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  // Navigation link component with bounce effect
  const NavLink = ({ href, children, onClick }) => (
    <button 
      onClick={() => {
        scrollToSection(href);
        if (onClick) onClick();
      }}
      className="text-sm md:text-base font-medium leading-tight tracking-tight text-white no-underline transition-all duration-500 ease-out"
    >
      <BounceText text={children} />
    </button>
  );

  return (
    <>
      {/* Desktop Navigation - Fixed */}
      <nav className={`fixed top-0 left-0 right-0 z-40 hidden lg:block bg-black/70 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Name */}
            <div className="text-white font-medium leading-tight tracking-tight text-2xl">
              <BounceText text="MADHUMITHRA" />
            </div>
            
            {/* Right side - Navigation Links */}
            <div className="flex items-center gap-8">
              <NavLink href="#hero">HOME</NavLink>
              <NavLink href="#about">ABOUT</NavLink>
              <NavLink href="#skills">SKILLS</NavLink>
              <NavLink href="#projects">PROJECTS</NavLink>
              {/* <NavLink href="/achievements">ACHIEVEMENTS</NavLink> will navigate to page */}
              <NavLink href="#contact">CONTACT</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`fixed top-6 right-6 z-50 bg-black/70 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-black/80 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
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
        <div className={`fixed top-0 right-0 h-full w-64 bg-black/70 backdrop-blur-md z-40 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="relative z-10 p-6 pt-20 flex flex-col space-y-6">
            <NavLink href="#hero" onClick={toggleMobileMenu}>HOME</NavLink>
            <NavLink href="#about" onClick={toggleMobileMenu}>ABOUT</NavLink>
            <NavLink href="#skills" onClick={toggleMobileMenu}>SKILLS</NavLink>
            <NavLink href="#projects" onClick={toggleMobileMenu}>PROJECTS</NavLink>
            <NavLink href="/achievements" onClick={toggleMobileMenu}>ACHIEVEMENTS</NavLink> {/* navigates to page and closes menu */}
            <NavLink href="#contact" onClick={toggleMobileMenu}>CONTACT</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FixedNavbar;