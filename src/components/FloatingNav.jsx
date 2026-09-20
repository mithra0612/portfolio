'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GooeyNav from './GooeyNav';


const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTIONS = [
  { id: 'hero', index: 0 },
  { id: 'about', index: 1 },
  { id: 'experience', index: 2 },
  { id: 'skills', index: 3 },
  { id: 'projects', index: 4 },
  { id: 'contact', index: 5 },
];

export default function FloatingNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scroll spy for active section highlight
      const checkPoint = scrollY + 250;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (checkPoint >= top) {
            setActiveIndex(SECTIONS[i].index);
            return;
          }
        }
      }

      if (scrollY < 300) {
        setActiveIndex(0);
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