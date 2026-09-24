'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
