'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;

    // Unfocus button so focus style does not linger
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Temporarily disable pointer events across the document during scroll-up.
    // This prevents desktop hover events (like skill cards expanding and causing layout shifts)
    // from interrupting or stalling the smooth scroll animation.
    document.documentElement.classList.add('scrolling-to-top');

    let cleanedUp = false;
    const restorePointerEvents = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      document.documentElement.classList.remove('scrolling-to-top');
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchstart', handleUserInterrupt);
    };

    const handleUserInterrupt = () => {
      restorePointerEvents();
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true, once: true });
    window.addEventListener('touchstart', handleUserInterrupt, { passive: true, once: true });

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        onComplete: restorePointerEvents,
      });
      // Safety timeout in case onComplete is delayed or skipped
      setTimeout(restorePointerEvents, 1400);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const checkScrollTop = () => {
        if (window.scrollY <= 2) {
          restorePointerEvents();
        } else if (!cleanedUp) {
          requestAnimationFrame(checkScrollTop);
        }
      };
      requestAnimationFrame(checkScrollTop);
      setTimeout(restorePointerEvents, 1400);
    }
  };

  return (
    <footer className="w-full bg-black border-t border-white/[0.06] py-5 px-6 sm:px-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500">
        <p className="m-0">
          © {new Date().getFullYear()} Madhumithra M.
        </p>

        <button
          onClick={scrollToTop}
          className="group relative inline-flex items-center gap-1.5 py-0.5 text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none bg-transparent border-none p-0"
        >
          <span>Back to Top</span>
          <ArrowUp
            size={12}
            className="text-[var(--accent)] transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 ease-out origin-left group-hover:w-full" />
        </button>
      </div>
    </footer>
  );
}
