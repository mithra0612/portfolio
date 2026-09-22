'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    // Initial sync on mount if URL already has a hash
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const foundIdx = SECTIONS.findIndex(
        s => s.hash === hash || '#' + s.id === hash
      );
      if (foundIdx !== -1) {
        setActiveIndex(foundIdx);
      }
    }

    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.__isNavClicking) return;

      const scrollY = window.scrollY;

      if (scrollY < 250) {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-none shadow-none py-5 sm:py-7 pointer-events-none">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between pointer-events-auto">
        <Link
          href="/"
          className="text-white text-[17px] sm:text-[19px] font-normal tracking-[-0.01em] transition-opacity hover:opacity-85 flex-shrink-0"
          aria-label="Home"
        >

        </Link>

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
  );
}