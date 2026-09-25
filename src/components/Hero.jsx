'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Code2, FileText } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Hero() {
  const heroContentRef = useRef(null);

  // Directional stretch motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const skewX = useMotionValue(0);

  // Soft, weighted spring physics creating a luxurious cushioned lag/delay
  const springConfig = { damping: 28, stiffness: 100, mass: 1.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const smoothScaleX = useSpring(scaleX, springConfig);
  const smoothScaleY = useSpring(scaleY, springConfig);
  const smoothSkewX = useSpring(skewX, springConfig);

  const handleMouseMove = (e) => {
    if (!heroContentRef.current) return;
    const rect = heroContentRef.current.getBoundingClientRect();
    // Clamped normalized distance from center (-1 to 1)
    const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
    const normY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));

    // Displace and stretch dynamically with directional inertia
    x.set(normX * 18);
    y.set(normY * 10);
    scaleX.set(1 + Math.abs(normX) * 0.04);
    scaleY.set(1 + Math.abs(normY) * 0.025);
    skewX.set(-normX * 1.8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleX.set(1);
    scaleY.set(1);
    skewX.set(0);
  };
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden select-none bg-[var(--bg-base)] font-sans">
      {/* ── BACKGROUND PHOTOGRAPH LAYER ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/heroImg_wide.jpg?v=2"
          alt="Madhumithra M."
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover select-none"
          style={{ objectPosition: '85% 88%' }}
        />

        {/* Soft contrast scrim on left side to guarantee flawless text legibility */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[48%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(5, 14, 22, 0.6) 0%, rgba(5, 14, 22, 0.3) 45%, transparent 100%)',
          }}
        />
      </div>

      {/* ── FOREGROUND CONTENT WRAPPER ── */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-5 sm:px-12 md:px-16 lg:px-24 py-6 sm:py-8 max-w-[1720px] mx-auto">
        {/* Top spacer to balance vertical layout with floating nav */}
        <div className="w-full h-12 sm:h-14 pointer-events-none" aria-hidden="true" />

        {/* ── MAIN HERO BODY (Left typography & actions, Right subject space) ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start max-w-2xl pt-4 sm:pt-10">
            {/* Unified Directional Stretch Hero Unit (Text, CTAs & Socials) */}
            <motion.div
              ref={heroContentRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                x: smoothX,
                y: smoothY,
                scaleX: smoothScaleX,
                scaleY: smoothScaleY,
                skewX: smoothSkewX,
                transformOrigin: 'left center',
              }}
              className="flex flex-col items-start w-full will-change-transform"
            >
              {/* Status Line with Ember Orange Ping */}
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <span className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722] shadow-[0_0_8px_rgba(255,87,34,0.95),0_0_12px_rgba(255,87,34,0.8)]" />
                </span>
                <span className="text-white/80 text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase font-mono">
                  BACKEND & DISTRIBUTED SYSTEMS · AI
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[2.25rem] xs:text-[2.65rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-semibold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] m-0 mb-5 sm:mb-6">
                <ShinyText
                  text="Hi, I'm Madhumithra"
                  speed={2.8}
                  color="#e2e8f0"
                  shineColor="#ffffff"
                  spread={100}
                />
              </h1>

              {/* Supporting Text */}
              <p className="text-white/85 text-[14.5px] sm:text-[16px] md:text-[16.5px] font-normal leading-[1.7] max-w-[500px] m-0 mb-7 sm:mb-9">
                I like building things, figuring things out, and trying things I haven't done before.
              </p>

              {/* Dual CTAs: Primary "View My Work" pill + Secondary "Let's Connect →" */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-7 sm:mb-8">
                {/* Primary CTA */}
                <a
                  href="#projects"
                  style={{ color: '#000000' }}
                  className="inline-flex items-center justify-center text-[14px] sm:text-[14px] font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-black/25 tracking-tight"
                >
                  View My Work
                </a>

                {/* Secondary CTA */}
                <a
                  href="#contact"
                  className="group inline-flex items-center text-[13.5px] sm:text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                >
                  <span>Let&apos;s Connect</span>
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1 font-light">
                    &rarr;
                  </span>
                </a>
              </div>

              {/* Social / Profile Links with Lucide Icons */}
              <div className="flex items-center gap-5 sm:gap-6">
                {[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/mithra0612',
                    icon: <Github size={21} strokeWidth={1.9} />,
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/mithra0612/',
                    icon: <Linkedin size={21} strokeWidth={1.9} />,
                  },
                  {
                    label: 'LeetCode',
                    href: 'https://leetcode.com/u/mithra_612',
                    icon: <Code2 size={21} strokeWidth={1.9} />,
                  },
                  {
                    label: 'Resume',
                    href: '/resume.pdf',
                    icon: <FileText size={21} strokeWidth={1.9} />,
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="text-white hover:text-white/70 transition-all duration-200 hover:scale-115 active:scale-95 flex items-center justify-center p-0.5"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right space intentionally left clear for the subject photograph */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

        {/* Bottom counterweight to balance optical vertical centering */}
        <div className="hidden sm:block h-10 md:h-14" />
      </div>
    </div>
  );
}
