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
  { value: '10+', target: 10, suffix: '+', duration: 1.4, label: 'Hackathons' },
  { value: '500+', target: 500, suffix: '+', duration: 1.8, label: 'Problems Solved' },
  { value: "SIH '24", label: 'National Finalist' },
  { value: '3', target: 3, suffix: '', duration: 1.2, label: 'Published Poems' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-[#F8FAFC] pt-24 sm:pt-36 lg:pt-40 pb-20 sm:pb-32 border-t border-white/[0.08] z-10 selection:bg-[var(--accent)] selection:text-black overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-10 md:px-14 lg:px-16">
        {/* Balanced 3-Column Composition: ~31% Portrait, ~46% About, ~23% Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-[31fr_46fr_23fr] gap-10 lg:gap-10 xl:gap-14 items-stretch">
          {/* ── COLUMN 1: Portrait (~31%) ── */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[360px] lg:max-w-full mx-auto lg:mx-0">
              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0a0c]">
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

              {/* Subtle Editorial Caption */}
              <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-[0.2em] uppercase">
                <span>Madhumithra M</span>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: About Narrative & Headline (Primary Focus, ~46%) ── */}
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* ABOUT ME Section Heading - restrained editorial with orange line */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-6 h-[2px] bg-[var(--accent)]" aria-hidden="true" />
                <h2 className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-[0.18em] text-white font-sans m-0">
                  ABOUT ME
                </h2>
              </div>

              {/* Intro Headline: elegant, ~26–30px, comfortable presence */}
              <p className="text-[21px] xs:text-[23px] sm:text-[26px] lg:text-[28px] font-semibold tracking-tight text-white leading-[1.3] mb-6 font-[var(--font-headline)]">
                Curiosity first — figuring out the rest by building it.
              </p>

              {/* Substantial Body Text: ~17–19px with line-height ~1.75 */}
              <div className="space-y-4 sm:space-y-5 text-[15.5px] sm:text-[18px] leading-[1.7] sm:leading-[1.75] font-[var(--font-body)] text-neutral-200">
                <p className="font-normal text-neutral-200">
                  I’m a software developer passionate about building practical, end-to-end products across full-stack and AI applications. I enjoy turning ideas into reality — designing systems, crafting clean interfaces, and applying AI where it creates real value.
                </p>

                <p className="font-light text-neutral-300">
                  Beyond writing code, I enjoy mentoring, sharing knowledge, playing the keyboard, and writing poetry — with three poems published across two anthologies.
                </p>
              </div>
            </div>

            {/* VIEW ALL ACHIEVEMENTS CTA positioned toward lower portion */}
            <div className="pt-8 sm:pt-10">
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

          {/* ── COLUMN 3: Milestones (Supporting, quiet editorial rows, ~23%) ── */}
          <div className="flex flex-col pt-8 lg:pt-0 lg:border-l border-white/[0.08] lg:pl-8 xl:pl-10">
            {/* Editorial section label: ~12–14px, uppercase */}
            <div className="flex items-center gap-2.5 mb-6 sm:mb-7">
              <span className="w-4 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-neutral-400 uppercase font-medium m-0">
                MILESTONES
              </p>
            </div>

            {/* Clean vertical editorial rows with thin horizontal separators */}
            <div className="flex flex-col divide-y divide-white/[0.08] border-b border-white/[0.08]">
              {STATS.map(({ value, label, target, suffix, duration }) => (
                <div key={label} className="py-4 first:pt-0 flex flex-col items-start">
                  <span className="text-[32px] sm:text-[35px] font-bold font-mono text-white tracking-tight leading-none">
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
                  <span className="font-mono text-[11px] sm:text-[12px] text-neutral-400 uppercase tracking-[0.16em] mt-1.5 font-normal leading-snug">
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