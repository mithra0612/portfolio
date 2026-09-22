'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

// Panel sliding variants
const panelVariants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1],
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Backdrop fade variants
const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Staggered navigation link variants
const linkItemVariants = {
  closed: {
    opacity: 0,
    y: 35,
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Footer elements variant
const footerVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.45,
    },
  },
};

export default function RightSidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showTrigger, setShowTrigger] = useState(false);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Dynamic active section detection based on current scroll position
  const updateActiveSection = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    setShowTrigger(scrollY > 100);

    // If near the top, active section is Home
    if (scrollY < 200) {
      setActiveSection('Home');
      return;
    }

    const sections = [
      { id: 'contact', title: 'Contact' },
      { id: 'projects', title: 'Projects' },
      { id: 'skills', title: 'Skills' },
      { id: 'experience', title: 'Experience' },
      { id: 'about', title: 'About' },
    ];

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh * 0.45 && rect.bottom >= vh * 0.15) {
          setActiveSection(section.title);
          return;
        }
      }
    }
  }, []);

  // Update on scroll
  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  // Re-check active section whenever the sidebar is opened
  useEffect(() => {
    if (isOpen) {
      updateActiveSection();
    }
  }, [isOpen, updateActiveSection]);

  const handleLinkClick = (e, href, title) => {
    e.preventDefault();
    setActiveSection(title);
    setIsOpen(false);

    setTimeout(() => {
      const hash = href === '#' || href === '#hero' ? '#home' : href;
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', hash);
      }
      if (href === '#' || href === '#hero' || href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 450);
  };

  return (
    <>
      {/* ── MINIMALIST HAMBURGER TRIGGER BUTTON (Visible when scrolled past hero) ── */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: !isOpen && showTrigger ? 1 : 0,
          scale: !isOpen && showTrigger ? 1 : 0.85,
        }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: !isOpen && showTrigger ? 'auto' : 'none' }}
        className="fixed top-8 right-8 z-50 group flex items-center justify-center w-12 h-12 cursor-pointer mix-blend-difference"
      >
        <div className="flex flex-col justify-center items-end gap-[5px] w-6 h-5">
          <span className="h-[1.5px] w-6 bg-white transition-all duration-300 group-hover:-translate-x-1" />
          <span className="h-[1.5px] w-4 group-hover:w-6 bg-white transition-all duration-300" />
        </div>
      </motion.button>

      {/* ── OVERLAY & SLIDING DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* Dark Semi-transparent Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Stark White Sidebar Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                paddingTop: '48px',
                paddingBottom: '40px',
                paddingLeft: '48px',
                paddingRight: '48px',
              }}
              className="fixed top-0 right-0 bottom-0 h-screen h-dvh w-full sm:w-[420px] md:w-[440px] lg:w-[460px] bg-white text-black shadow-[-20px_0_50px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-y-auto selection:bg-[#ff6a00] selection:text-white box-border"
            >
              {/* Top Section: Header Bar + Navigation Links */}
              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between w-full">
                  {/* Plus Icon with stem aligned to the left edge of the navigation letters */}
                  <div className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#ff6a00]"
                      style={{ marginLeft: '-6px' }}
                    >
                      <path
                        d="M8 1V15M1 8H15"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Sleek Wide Cross Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Navigation Menu"
                    className="group relative flex items-center justify-center p-1 text-black cursor-pointer hover:opacity-60 transition-opacity"
                  >
                    <svg
                      width="34"
                      height="12"
                      viewBox="0 0 34 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:scale-105"
                    >
                      <line
                        x1="1"
                        y1="1.5"
                        x2="33"
                        y2="10.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="10.5"
                        x2="33"
                        y2="1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links with Active State & Kinetic Hover Effects */}
                <nav
                  style={{
                    marginTop: '56px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                  className="mt-14 sm:mt-16 flex flex-col gap-3 sm:gap-3.5"
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {NAV_LINKS.map((item) => {
                    const isActive = activeSection === item.title;
                    const isHovered = hoveredItem === item.title;

                    return (
                      <motion.div key={item.title} variants={linkItemVariants}>
                        <motion.a
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href, item.title)}
                          onMouseEnter={() => setHoveredItem(item.title)}
                          whileHover={{ x: 14 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                          className="group relative flex items-center w-fit cursor-pointer select-none"
                          style={{
                            opacity: hoveredItem && !isHovered ? 0.35 : 1,
                            transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          {/* Left Arrow Indicator that glides in on hover */}
                          <span
                            aria-hidden="true"
                            className="absolute -left-6 text-[#ff6a00] pointer-events-none"
                            style={{
                              opacity: isHovered ? 1 : 0,
                              transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                              transition: 'opacity 0.25s ease, transform 0.25s ease',
                              fontSize: '1.25rem',
                              lineHeight: 1,
                            }}
                          >
                            →
                          </span>

                          {/* Navigation Text with Active / Hover States */}
                          <span
                            className={`font-medium tracking-tight font-[var(--font-body)] ${
                              isActive
                                ? 'text-[#ff6a00] font-semibold'
                                : 'text-black group-hover:text-[#ff6a00]'
                            }`}
                            style={{
                              fontSize: 'clamp(1.75rem, 3.5vw, 2.05rem)',
                              lineHeight: 1.22,
                              letterSpacing: isHovered ? '-0.015em' : '-0.025em',
                              transition: 'color 0.25s ease, letter-spacing 0.25s ease',
                            }}
                          >
                            {item.title}
                          </span>

                          {/* Active Section Dot Indicator */}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavDot"
                              className="ml-3 w-2 h-2 rounded-full bg-[#ff6a00]"
                              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                            />
                          )}

                          {item.isNew && (
                            <span
                              className="font-semibold bg-[#d35400] text-white rounded-full leading-none inline-flex items-center justify-center"
                              style={{
                                marginLeft: '12px',
                                padding: '3px 10px',
                                fontSize: '11px',
                                letterSpacing: '0.02em',
                              }}
                            >
                              new
                            </span>
                          )}
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Section: Email Footer Anchored to the Bottom */}
              <motion.div
                variants={footerVariants}
                style={{
                  marginTop: 'auto',
                  paddingTop: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
                className="pt-12 pb-2 flex flex-col gap-1.5"
              >
                <a
                  href="mailto:mithramadhu005@gmail.com"
                  className="font-medium text-black hover:text-[#ff6a00] transition-colors font-[var(--font-body)] tracking-tight w-fit"
                  style={{
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  mithramadhu005@gmail.com
                </a>
                <span
                  className="text-neutral-400 font-normal font-[var(--font-body)]"
                  style={{ fontSize: '13px', marginTop: '2px' }}
                >
                  © {new Date().getFullYear()} Madhumithra
                </span>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
