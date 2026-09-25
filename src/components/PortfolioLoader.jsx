'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMPILE_STEPS = [
  {
    type: 'info',
    text: '▲ Next.js 15.1.0 (Turbopack)',
    accent: '#FF5722',
    delay: 150,
  },
  {
    type: 'meta',
    text: '- Target: madhumithra.dev (App Router)',
    delay: 420,
  },
  {
    type: 'meta',
    text: '- Environment: production · React 19',
    delay: 700,
  },
  {
    type: 'progress',
    text: '○ Compiling / ...',
    delay: 1000,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Compiled /src/app/page.js',
    stats: '(842 modules in 184ms)',
    delay: 1450,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Loaded systems: PayPal Experience & Projects',
    stats: '(6 active routes)',
    delay: 1900,
  },
  {
    type: 'success',
    prefix: '✓',
    text: 'Observability & Editorial theme initialized',
    stats: '(100% parity)',
    delay: 2350,
  },
  {
    type: 'ready',
    prefix: '✓',
    text: 'Ready in 312ms',
    delay: 2800,
  },
];

export default function PortfolioLoader({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const hasFinishedRef = useRef(false);

  const finish = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete?.();
    }, 600);
  };

  // Step-by-step compiler log progression ensuring every single step is fully visible
  useEffect(() => {
    const timers = [];

    COMPILE_STEPS.forEach((step, idx) => {
      const timer = setTimeout(() => {
        setCurrentStepIndex(idx + 1);
        // Gradually increment progress in sync with visible compiler steps
        setProgress(((idx + 1) / COMPILE_STEPS.length) * 100);
      }, step.delay);
      timers.push(timer);
    });

    // Once all compiler content is completely visible (at 2800ms), hold for 1 second so user reads it
    const holdTimer = setTimeout(() => {
      setProgress(100);
      // Wait full 950ms with all lines clearly visible before fading out
      const fadeTimer = setTimeout(() => {
        finish();
      }, 950);
      timers.push(fadeTimer);
    }, 2800);
    timers.push(holdTimer);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: '#000000',
      }}
    >
      {/* Subtle brand ambient glow in the center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255, 87, 34, 0.05) 0%, rgba(56, 189, 248, 0.02) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── COMPILER TERMINAL WINDOW ── */}
      <div className="relative w-full max-w-[620px] px-4 sm:px-8">
        <div className="rounded-xl bg-[#050608] border border-white/[0.1] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#030406]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-neutral-400 uppercase">
              <span className="text-[var(--accent)] font-bold">▲</span>
              <span>Turbopack compiler</span>
            </div>

            <div className="text-[10px] font-mono text-neutral-600">
              localhost:3000
            </div>
          </div>

          {/* Terminal Logs Body */}
          <div className="p-4 sm:p-6 font-mono text-[11px] xs:text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8] min-h-[240px] sm:min-h-[260px] flex flex-col justify-start">
            {COMPILE_STEPS.slice(0, currentStepIndex).map((step, idx) => {
              if (step.type === 'info') {
                return (
                  <div key={idx} className="flex items-center gap-2 font-semibold text-white mb-1">
                    <span className="text-[var(--accent)] font-black text-sm">▲</span>
                    <span>Next.js 15.1.0</span>
                    <span className="text-neutral-500 font-normal text-xs">(Turbopack)</span>
                  </div>
                );
              }

              if (step.type === 'meta') {
                return (
                  <div key={idx} className="text-neutral-400 pl-3">
                    {step.text}
                  </div>
                );
              }

              if (step.type === 'progress') {
                // If subsequent steps are already loaded, we don't need to show 'Compiling...'
                if (currentStepIndex > idx + 1) return null;
                return (
                  <div key={idx} className="flex items-center gap-2 text-amber-400/90 pt-1 animate-pulse">
                    <span>○</span>
                    <span>Compiling / ...</span>
                  </div>
                );
              }

              if (step.type === 'success') {
                return (
                  <div key={idx} className="flex flex-wrap items-baseline gap-2 pt-1">
                    <span className="text-emerald-400 font-bold">{step.prefix}</span>
                    <span className="text-neutral-200">{step.text}</span>
                    {step.stats && (
                      <span className="text-neutral-500 text-xs">{step.stats}</span>
                    )}
                  </div>
                );
              }

              if (step.type === 'ready') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-emerald-400 font-semibold pt-2">
                    <span>✓</span>
                    <span>{step.text}</span>
                  </div>
                );
              }

              return null;
            })}

            {/* Pulsing Command-Line Cursor */}
            <div className="flex items-center gap-1 text-[var(--accent)] pt-1">
              <span className="w-2 h-4 bg-[var(--accent)] animate-pulse inline-block" />
            </div>
          </div>

          {/* Compiler Progress Track (Bottom border of terminal) */}
          <div className="w-full bg-white/[0.05] h-[2px] relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--accent)] to-[#FF7043]"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(255, 87, 34, 0.7)',
              }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>
        </div>

        {/* Footer Subtext */}
        <div className="mt-3 flex items-center justify-between text-[10.5px] font-mono text-neutral-400 px-1">
          <span>PORTFOLIO COMPILED</span>
          <button
            onClick={finish}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wider uppercase text-[10px]"
          >
            Click anywhere to skip ↗
          </button>
        </div>
      </div>
    </div>
  );
}