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
      className="relative w-full bg-[var(--bg-base)] text-[var(--text-primary)] pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 border-t border-[var(--border)] z-10 selection:bg-[var(--accent)] selection:text-[var(--bg-base)] overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow reflecting the hero sky & warm amber lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 85% 15%, rgba(56, 189, 248, 0.06) 0%, transparent 70%), radial-gradient(ellipse 55% 45% at 8% 45%, rgba(255, 87, 34, 0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">

        {/* Asymmetrical 3-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-start">

          {/* ── COLUMN 1: Portrait strictly anchored to the left ── */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-start">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[320px]">
              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-raised)] border border-[var(--border)]">
                <Image
                  src="/placeholder-portrait.jpg"
                  alt="Portrait of Madhumithra M."
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-top grayscale contrast-[1.08] brightness-[0.95] pointer-events-none select-none transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              {/* Understated Editorial Caption */}
              <div className="pt-3 flex items-center justify-between border-t border-[var(--border)] mt-2 text-[10px] font-mono text-[var(--text-muted)] tracking-[0.16em] uppercase">
                <span>Madhumithra M</span>
                {/* <span>Portrait // 01</span> */}
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: About Narrative & Headline ── */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
            {/* Small understated label */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--text-secondary)] uppercase">
                ABOUT ME
              </p>
            </div>

            {/* Oversized Typographic Phrase */}
            <h2 className="text-2xl sm:text-3xl md:text-[2.1rem] xl:text-[2.35rem] font-light tracking-tight text-[var(--text-primary)] leading-[1.28] mb-8 font-[var(--font-headline)]">
              Curiosity first — figuring out the rest by building it.
            </h2>

            {/* Exact Content Provided by User */}
            <div className="space-y-4 sm:space-y-5 text-[0.92rem] sm:text-[0.96rem] leading-[1.82] font-[var(--font-body)]">
              <p className="text-[#E2E8F0] font-normal">
                I’m a software developer interested in building practical products across frontend, backend, and AI-integrated applications. I enjoy working from an idea to a working product — figuring out the architecture, building the interface, connecting the systems, and exploring where AI can actually add value.
              </p>

              <p className="text-[var(--text-secondary)] font-light">
                I like taking initiative, learning by building, and working across different parts of a product rather than staying limited to one layer. I’m also comfortable speaking, sharing ideas, and mentoring others — things that have become just as much a part of how I work as writing code.
              </p>

              <p className="text-[var(--text-secondary)] font-light">
                Outside of software, I’m usually listening to music, playing the keyboard, or writing poetry. I’ve had three poems published across two anthologies.
              </p>

              {/* CTA button to achievements page */}
              <div className="pt-2">
                <Link
                  href="/achievements"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-raised)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-200"
                >
                  <span className="text-xs font-mono tracking-wider uppercase">View Achievements</span>
                  <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform duration-200 text-xs">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: Stats placed to the RIGHT of the About Content ── */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col pt-6 lg:pt-0 lg:border-l border-[var(--border)] lg:pl-8 xl:pl-10">
            {/* Matching understated top label */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--text-secondary)] uppercase">
                MILESTONES
              </p>
            </div>

            {/* Vertical Stack of Stats with Count-Up Effect */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-7">
              {STATS.map(({ value, label, target, suffix, duration }) => (
                <div
                  key={label}
                  className="group flex flex-col border-b border-[var(--border)] pb-4 lg:pb-5"
                >
                  <span className="text-2xl sm:text-[1.85rem] font-light text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 tracking-tight leading-none mb-2 font-mono">
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
                  <span className="text-xs text-[var(--text-muted)] font-normal leading-snug">
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