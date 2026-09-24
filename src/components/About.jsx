'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'framer-motion';

function CountUpNumber({ target, suffix = '', duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutCubic: fast initial count with smooth deceleration to target
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: '15+', target: 15, suffix: '+', duration: 1.4, label: 'Hackathons' },
  { value: '700+', target: 700, suffix: '+', duration: 1.8, label: 'Problems Solved' },
  { value: "SIH '24", label: 'National Finalist' },
  { value: '3', target: 3, suffix: '', duration: 1.2, label: 'Published Poems' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-[#F8FAFC] pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 border-t border-white/[0.08] z-10 selection:bg-[var(--accent)] selection:text-black overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Asymmetrical 3-Column Editorial Composition with Clean Top Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-start">
          {/* ── COLUMN 1: Portrait (Slightly larger, dominant, editorial frame) ── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start">
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[360px] xl:max-w-[380px]">
              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0a0c] border border-white/[0.1]">
                <Image
                  src="/placeholder-portrait.jpg"
                  alt="Portrait of Madhumithra M."
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 320px, 380px"
                  className="object-cover object-top grayscale contrast-[1.08] brightness-[0.95] pointer-events-none select-none transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              {/* Understated Editorial Caption */}
              <div className="pt-3 flex items-center justify-between border-t border-white/[0.08] mt-2.5 text-[11px] font-mono text-neutral-400 tracking-[0.2em] uppercase">
                <span>Madhumithra M</span>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: About Narrative & Headline (Strong, confident scale) ── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            {/* Eyebrow with orange line */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--text-secondary)] uppercase m-0 font-medium">
                ABOUT ME
              </p>
            </div>

            {/* Confident Typographic Main Statement with Tight Editorial Line-Height */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] font-extrabold tracking-tight text-white leading-[1.14] mb-7 font-[var(--font-headline)]">
              Curiosity first — figuring out the rest by building it.
            </h2>

            {/* Substantial, Readable Narrative constrained to optimal measure */}
            <div className="space-y-5 text-[0.98rem] sm:text-[1.02rem] leading-[1.8] font-[var(--font-body)] max-w-[540px]">
              <p className="text-neutral-100 font-normal">
                I’m a software developer interested in building practical products across frontend, backend, and AI-integrated applications. I enjoy working from an idea to a working product — figuring out the architecture, building the interface, connecting the systems, and exploring where AI can actually add value.
              </p>

              <p className="text-neutral-300 font-light">
                I like taking initiative, learning by building, and working across different parts of a product rather than staying limited to one layer. I’m also comfortable speaking, sharing ideas, and mentoring others — things that have become just as much a part of how I work as writing code.
              </p>

              <p className="text-neutral-300 font-light">
                Outside of software, I’m usually listening to music, playing the keyboard, or writing poetry. I’ve had three poems published across two anthologies.
              </p>

              {/* Deliberate Editorial CTA (Border-free with orange arrow) */}
              <div className="pt-3">
                <Link
                  href="/achievements"
                  className="group relative inline-flex items-center gap-2 py-1 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 hover:text-white transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                >
                  <span>VIEW ALL ACHIEVEMENTS</span>
                  <span className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1.5 font-bold">
                    →
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: Milestones (Visible Evidence of Achievement) ── */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col pt-8 lg:pt-0 lg:border-l border-white/[0.1] lg:pl-10 xl:pl-12">
            {/* Matching Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--text-secondary)] uppercase m-0 font-medium">
                MILESTONES
              </p>
            </div>

            {/* Vertical Stack: Large Bold Numbers with Quiet Labels */}
            <div className="flex flex-col space-y-8 sm:space-y-9">
              {STATS.map(({ value, label, target, suffix, duration }) => (
                <div key={label} className="group flex flex-col items-start">
                  <span className="text-4xl sm:text-[2.5rem] lg:text-[2.75rem] font-bold font-mono text-white tracking-tight leading-none">
                    {target !== undefined ? (
                      <CountUpNumber
                        target={target}
                        suffix={suffix}
                        duration={duration}
                      />
                    ) : (
                      value
                    )}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider mt-2.5 font-medium leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}