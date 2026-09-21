'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

// ── SPOTLIGHT WORK CARD COMPONENT ──
// CardSpotlight with animated CanvasRevealEffect dot matrix revealed around the cursor
function ExperienceWorkCard({
  colors = [[255, 87, 34]],
  radius = 260,
  style,
  className,
  children,
}) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    mousePosRef.current = { x, y };
  }

  function handleMouseEnter(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    mousePosRef.current = { x, y };
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  const accentRgb = colors[0].join(', ');

  return (
    <motion.div
      style={style}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -7, scale: 1.008 }}
        transition={{ type: 'spring', stiffness: 380, damping: 24 }}
        className={`relative rounded-xl bg-[#0a0f1d]/70 backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between border border-white/[0.05] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.95)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.98),0_0_24px_-4px_rgba(${accentRgb},0.22)] transition-all duration-300 overflow-hidden h-full ${className || ''}`}
      >
        {/* ── CANVAS REVEAL EFFECT (ANIMATED DOT MATRIX AROUND CURSOR) ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-lg overflow-hidden transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
          }}
          aria-hidden="true"
        >
          <CanvasRevealEffect
            animationSpeed={3.5}
            containerClassName="absolute inset-0 pointer-events-none"
            colors={colors}
            dotSize={2.0}
            gridSpacing={7}
            radius={radius}
            mousePosRef={mousePosRef}
          />
        </div>

        {/* ── CARD CONTENT (ABOVE CANVAS DOT REVEAL) ── */}
        <div className="relative z-10 flex flex-col justify-between h-full pointer-events-auto">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Mobile detection for proportional displacement calibration
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Scroll Progress tied to scrolling from About into Experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 92%', 'start 8%'],
  });

  // Smooth, critically damped spring for slow physical paper alignment without bounce
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.0005,
  });

  const d = isMobile ? 0.45 : 1;

  // ── 1. HERO HEADING ("EXPERIENCE"): x: -80px, y: -50px ──
  const headingX = useTransform(smoothProgress, [0, 0.98], [-80 * d, 0]);
  const headingY = useTransform(smoothProgress, [0, 0.98], [-50 * d, 0]);
  const headingRotate = useTransform(smoothProgress, [0, 0.98], [-1.2 * d, 0]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.5], [0.35, 1]);

  // ── 2. HANDWRITTEN SCRIPT ("at PayPal"): x: +90px, y: +60px ──
  const scriptX = useTransform(smoothProgress, [0.04, 1.0], [90 * d, 0]);
  const scriptY = useTransform(smoothProgress, [0.04, 1.0], [60 * d, 0]);
  const scriptRotate = useTransform(smoothProgress, [0.04, 1.0], [1.5 * d, -3.5]);
  const scriptOpacity = useTransform(smoothProgress, [0.04, 0.65], [0.25, 1]);

  // ── 3. WORK CARD 01 (VIRTUAL TERMINAL): x: -80px, y: +60px ──
  const card01X = useTransform(smoothProgress, [0.02, 1.0], [-80 * d, 0]);
  const card01Y = useTransform(smoothProgress, [0.02, 1.0], [60 * d, 0]);
  const card01Rotate = useTransform(smoothProgress, [0.02, 1.0], [-1.3 * d, 0]);
  const card01Opacity = useTransform(smoothProgress, [0.02, 0.65], [0.3, 1]);

  // ── 4. WORK CARD 02 (OBSERVABILITY): x: +50px, y: -60px ──
  const card02X = useTransform(smoothProgress, [0.04, 1.0], [50 * d, 0]);
  const card02Y = useTransform(smoothProgress, [0.04, 1.0], [-60 * d, 0]);
  const card02Rotate = useTransform(smoothProgress, [0.04, 1.0], [1.0 * d, 0]);
  const card02Opacity = useTransform(smoothProgress, [0.04, 0.65], [0.3, 1]);

  // ── 5. WORK CARD 03 (AI TOOLING): x: +90px, y: +50px ──
  const card03X = useTransform(smoothProgress, [0.06, 1.0], [90 * d, 0]);
  const card03Y = useTransform(smoothProgress, [0.06, 1.0], [50 * d, 0]);
  const card03Rotate = useTransform(smoothProgress, [0.06, 1.0], [1.4 * d, 0]);
  const card03Opacity = useTransform(smoothProgress, [0.06, 0.7], [0.3, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full bg-[var(--bg-base)] text-[var(--text-primary)] pt-20 sm:pt-28 lg:pt-32 pb-24 sm:pb-32 overflow-hidden select-none"
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* ── HERO HEADING + OVERLAPPING SCRIPT ── */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <div className="relative inline-block">
            <motion.h2
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                    x: headingX,
                    y: headingY,
                    rotate: headingRotate,
                    opacity: headingOpacity,
                  }
              }
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none m-0 font-sans select-none"
            >
              EXPERIENCE
            </motion.h2>

            {/* Overlapping Handwritten Script "at PayPal" */}
            <motion.span
              style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                ...(shouldReduceMotion
                  ? {}
                  : {
                    x: scriptX,
                    y: scriptY,
                    rotate: scriptRotate,
                    opacity: scriptOpacity,
                  }),
              }}
              className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 right-0 sm:right-2 md:right-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--accent)] tracking-normal normal-case pointer-events-none drop-shadow-[0_4px_16px_rgba(255,87,34,0.35)] select-none whitespace-nowrap z-20"
            >
              at PayPal
            </motion.span>
          </div>
        </div>

        {/* ── 3-COLUMN WORK CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">

          {/* ══════════════════════════════════════════════════════════════
              CARD 01 — VIRTUAL TERMINAL (Accent: #FF5722)
              ══════════════════════════════════════════════════════════════ */}
          <ExperienceWorkCard
            colors={[
              [255, 87, 34],
              [255, 112, 67],
            ]}
            style={
              shouldReduceMotion
                ? undefined
                : {
                  x: card01X,
                  y: card01Y,
                  rotate: card01Rotate,
                  opacity: card01Opacity,
                }
            }
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" aria-hidden="true" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#FF5722] uppercase font-semibold">
                  PRODUCT ENGINEERING
                </span>
              </div>

              {/* Large Number + Heading Anchor */}
              <div className="flex items-baseline gap-3.5 mb-5">
                <span className="font-mono text-4xl sm:text-[2.65rem] font-bold tracking-tight text-[#FF5722] leading-none select-none flex-shrink-0">
                  01
                </span>
                <h3 className="text-xl sm:text-[1.35rem] font-bold text-white tracking-tight leading-snug m-0">
                  Virtual Terminal
                </h3>
              </div>

              {/* Visual Motif Box */}
              <div className="rounded-md bg-[#0a0d14] border border-white/[0.04] p-4 sm:p-4.5 mb-5">
                <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-neutral-400 uppercase mb-2">
                  <span>MIGRATION</span>
                  <span className="text-[#38BDF8] font-medium">NEXT.JS 15</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold tracking-tight">
                  <span className="text-neutral-300">LEGACY</span>
                  <span className="text-[#FF5722] font-bold">→</span>
                  <span className="text-white border-b-2 border-[#FF5722] pb-0.5">
                    NEXT.JS 15
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-neutral-200 leading-[1.7] font-normal mb-3">
                Rebuilt a customer-facing Virtual Terminal in Next.js 15, working across routing, authentication, order-entry, and error handling.
              </p>

              {/* Supporting Line */}
              <p className="font-mono text-[11px] text-neutral-400 tracking-wide mb-6">
                Testing · Shadow Testing · Traffic Routing
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="pt-4 mt-auto border-t border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px]">
                {['Next.js 15', 'React', 'TypeScript', 'Jest', 'Cypress', 'CI/CD'].map((tech, idx, arr) => (
                  <React.Fragment key={tech}>
                    <span className="text-[#FF5722] font-semibold tracking-tight">
                      {tech}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-neutral-600 select-none">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ExperienceWorkCard>

          {/* ══════════════════════════════════════════════════════════════
              CARD 02 — OBSERVABILITY (Accent: #F59E0B)
              ══════════════════════════════════════════════════════════════ */}
          <ExperienceWorkCard
            colors={[
              [245, 158, 11],
              [251, 191, 36],
            ]}
            style={
              shouldReduceMotion
                ? undefined
                : {
                  x: card02X,
                  y: card02Y,
                  rotate: card02Rotate,
                  opacity: card02Opacity,
                }
            }
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#F59E0B] uppercase font-semibold">
                  MONITORING & RELIABILITY
                </span>
              </div>

              {/* Large Number + Heading Anchor */}
              <div className="flex items-baseline gap-3.5 mb-5">
                <span className="font-mono text-4xl sm:text-[2.65rem] font-bold tracking-tight text-[#F59E0B] leading-none select-none flex-shrink-0">
                  02
                </span>
                <h3 className="text-xl sm:text-[1.35rem] font-bold text-white tracking-tight leading-snug m-0">
                  Observability
                </h3>
              </div>

              {/* Visual Motif Box */}
              <div className="rounded-md bg-[#0a0d14] border border-white/[0.04] p-4 sm:p-4.5 mb-5">
                <div className="flex items-baseline justify-between mb-2.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-mono font-light text-[#F59E0B] leading-none">
                      43
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white font-semibold">
                      WIDGETS
                    </span>
                  </div>
                  <span className="font-mono text-[9.5px] text-neutral-400 uppercase tracking-wider">
                    DATADOG
                  </span>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-300 tracking-wider">
                  <span>API</span>
                  <span className="text-[#F59E0B]">→</span>
                  <span>METRICS</span>
                  <span className="text-[#F59E0B]">→</span>
                  <span className="text-white font-semibold">ALERTS</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-neutral-200 leading-[1.7] font-normal mb-3">
                Built a Datadog dashboard covering API traffic, authorization rates, and payment dimensions including card country, currency, and brand.
              </p>

              {/* Supporting Line */}
              <p className="font-mono text-[11px] text-neutral-400 tracking-wide mb-6">
                Threshold Alerts · Drill-down Views
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="pt-4 mt-auto border-t border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px]">
                <span className="text-[#F59E0B] font-semibold tracking-tight">
                  Datadog
                </span>
              </div>
            </div>
          </ExperienceWorkCard>

          {/* ══════════════════════════════════════════════════════════════
              CARD 03 — CLAUDE SKILL FOR NEXT.JS (Accent: #38BDF8)
              ══════════════════════════════════════════════════════════════ */}
          <ExperienceWorkCard
            colors={[
              [56, 189, 248],
              [14, 165, 233],
            ]}
            className="col-span-1 md:col-span-2 lg:col-span-1"
            style={
              shouldReduceMotion
                ? undefined
                : {
                  x: card03X,
                  y: card03Y,
                  rotate: card03Rotate,
                  opacity: card03Opacity,
                }
            }
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#38BDF8] uppercase font-semibold">
                  DEVELOPER PRODUCTIVITY
                </span>
              </div>

              {/* Large Number + Heading Anchor */}
              <div className="flex items-baseline gap-3.5 mb-5">
                <span className="font-mono text-4xl sm:text-[2.65rem] font-bold tracking-tight text-[#38BDF8] leading-none select-none flex-shrink-0">
                  03
                </span>
                <h3 className="text-xl sm:text-[1.35rem] font-bold text-white tracking-tight leading-snug m-0">
                  Claude Skill for Next.js
                </h3>
              </div>

              {/* Visual Motif Box */}
              <div className="rounded-md bg-[#0a0d14] border border-white/[0.04] p-4 sm:p-4.5 mb-5">
                <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-neutral-400 uppercase mb-2">
                  <span>WORKFLOW INTEGRATION</span>
                  <span className="text-[#38BDF8] font-medium">CLAUDE SKILL</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold tracking-tight">
                  <span className="text-neutral-300">CONFLUENCE</span>
                  <span className="text-[#38BDF8] font-bold">→</span>
                  <span className="text-white border-b-2 border-[#38BDF8] pb-0.5">
                    CLAUDE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-neutral-200 leading-[1.7] font-normal mb-3">
                Created an internal Claude skill with Confluence integration for migration reports, existing patterns, and internal documentation.
              </p>

              {/* Supporting Line */}
              <p className="font-mono text-[11px] text-neutral-400 tracking-wide mb-6">
                Initiative beyond assigned work · Near-production ready
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="pt-4 mt-auto border-t border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px]">
                {['Claude', 'Confluence'].map((tech, idx, arr) => (
                  <React.Fragment key={tech}>
                    <span className="text-[#38BDF8] font-semibold tracking-tight">
                      {tech}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-neutral-600 select-none">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ExperienceWorkCard>

        </div>

      </div>
    </section>
  );
}
