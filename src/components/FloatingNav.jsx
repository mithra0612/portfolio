'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { X, FileText, Github, Linkedin, Code2 } from 'lucide-react';
import GooeyNav from './GooeyNav';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTIONS = [
  { id: 'hero', hash: '#home', index: 0 },
  { id: 'about', hash: '#about', index: 1 },
  { id: 'experience', hash: '#experience', index: 2 },
  { id: 'skills', hash: '#skills', index: 3 },
  { id: 'projects', hash: '#projects', index: 4 },
  { id: 'contact', hash: '#contact', index: 5 },
];

export default function FloatingNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Disable background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Escape key closes mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Initial sync on mount if URL already has a hash or target_section in sessionStorage
    if (typeof window !== 'undefined') {
      let initialHash = '';
      try {
        initialHash = sessionStorage.getItem('target_section') || window.location.hash;
      } catch (e) {
        initialHash = window.location.hash;
      }
      if (initialHash) {
        const foundIdx = SECTIONS.findIndex(
          s => s.hash === initialHash || '#' + s.id === initialHash
        );
        if (foundIdx !== -1) {
          setActiveIndex(foundIdx);
        }
      }
    }

    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.__isNavClicking) return;

      const scrollY = window.scrollY;

      if (scrollY < 250) {
        let hasPendingTarget = false;
        try {
          hasPendingTarget = Boolean(sessionStorage.getItem('target_section'));
        } catch (e) {}

        if (hasPendingTarget || (typeof window !== 'undefined' && window.__isNavClicking)) {
          return;
        }

        setActiveIndex(0);
        if (typeof window !== 'undefined' && window.location.hash && window.location.hash !== '#home' && window.location.hash !== '#hero') {
          window.history.replaceState(null, '', '#home');
        }
        return;
      }

      // Scroll spy for active section highlight & URL bar sync
      const checkPoint = scrollY + 300;
      for (let i = SECTIONS.length - 1; i >= 1; i--) {
        const sectionEl = document.getElementById(SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (checkPoint >= top) {
            setActiveIndex(SECTIONS[i].index);
            const currentHash = SECTIONS[i].hash;
            if (typeof window !== 'undefined' && window.location.hash !== currentHash) {
              window.history.replaceState(null, '', currentHash);
            }
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (href) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (typeof window !== 'undefined') {
      window.__isNavClicking = true;
      window.history.pushState(null, '', href);
      setTimeout(() => {
        window.__isNavClicking = false;
      }, 1400);
    }

    if (href === '#home' || href === '#hero') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const targetSection = document.querySelector(href);
      if (targetSection) {
        if (lenis) {
          lenis.scrollTo(targetSection, { offset: 0, duration: 1.2 });
        } else {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <>
      {/* ── DESKTOP NAVIGATION (Untouched, hidden on mobile) ── */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-transparent border-none shadow-none py-3.5 sm:py-7 pointer-events-none">
        <div className="max-w-[1720px] mx-auto px-2 xs:px-4 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between pointer-events-auto">
          <Link
            href="/"
            className="text-white text-[17px] sm:text-[19px] font-normal tracking-[-0.01em] transition-opacity hover:opacity-85 flex-shrink-0"
            aria-label="Home"
          />

          <GooeyNav
            items={NAV_ITEMS}
            activeIndex={activeIndex}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </header>

      {/* ── MOBILE SIDEBAR TRIGGER BUTTON (block md:hidden) ── */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open Navigation Sidebar"
        className="block md:hidden fixed top-5 right-5 z-50 p-2 cursor-pointer outline-none bg-transparent border-none mix-blend-difference active:scale-95 transition-transform"
      >
        <div className="flex flex-col justify-center items-end gap-[5px] w-6 h-5">
          <span className="h-[1.5px] w-6 bg-white transition-all duration-300" />
          <span className="h-[1.5px] w-4 bg-white transition-all duration-300" />
        </div>
      </button>

      {/* ── MOBILE SLIDING SIDEBAR DRAWER (Right Sidebar) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-in Sidebar Panel from Right */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[84vw] max-w-[340px] h-screen h-dvh bg-[#090b10] border-l border-white/[0.08] shadow-[-20px_0_50px_rgba(0,0,0,0.85)] z-50 flex flex-col justify-between p-6 sm:p-7 overflow-y-auto overscroll-contain"
            >
              {/* Top Bar inside Sidebar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-white">
                    MADHUMITHRA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 p-1 text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors"
                  aria-label="Close Sidebar"
                >
                  <span>CLOSE</span>
                  <X size={14} className="text-[var(--accent)]" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col py-6 space-y-1">
                {NAV_ITEMS.map((item, idx) => {
                  const isCurrent = activeIndex === idx;
                  const paddedNum = String(idx + 1).padStart(2, '0');
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleMobileNavClick(item.href)}
                      style={
                        isCurrent
                          ? {
                              backgroundColor: 'rgba(255, 87, 34, 0.14)',
                              borderColor: 'rgba(255, 87, 34, 0.45)',
                            }
                          : {
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }
                      }
                      className="group w-full py-3.5 px-3.5 rounded-xl border flex items-center justify-between text-left transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className="font-mono text-xs font-bold tracking-wider"
                          style={{
                            color: isCurrent ? '#FF5722' : 'rgba(255, 255, 255, 0.35)',
                          }}
                        >
                          {paddedNum}
                        </span>
                        <span
                          className="text-lg font-bold tracking-tight uppercase font-sans transition-colors"
                          style={{
                            color: isCurrent ? '#FF5722' : '#e5e5e5',
                          }}
                        >
                          {item.label}
                        </span>
                      </div>

                      {isCurrent && (
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: '#FF5722',
                            boxShadow: '0 0 10px #FF5722, 0 0 18px rgba(255, 87, 34, 0.7)',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Actions & Socials */}
              <div className="border-t border-white/[0.08] pt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Link
                    href="/resume"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      try {
                        sessionStorage.setItem('skip_loader', 'true');
                      } catch (e) {}
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-white/20 hover:border-[var(--accent)] text-neutral-200 hover:text-white font-mono text-xs uppercase tracking-wider bg-white/[0.04] transition-colors"
                  >
                    <FileText size={13} className="text-[var(--accent)]" />
                    <span>Resume</span>
                  </Link>

                  <div className="flex items-center gap-3.5 text-neutral-300">
                    <a
                      href="https://github.com/mithra0612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mithra0612/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={17} />
                    </a>
                    <a
                      href="https://leetcode.com/u/mithra_612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-white transition-colors"
                      aria-label="LeetCode"
                    >
                      <Code2 size={17} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
                  <span>Tamil Nadu, India</span>
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}