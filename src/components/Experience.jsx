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
      className="relative h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 360, damping: 22 }}
        className={`group relative rounded-[24px] bg-[#07090e] p-5 xs:p-6 sm:p-8 flex flex-col justify-between border border-white/[0.09] hover:border-[rgba(${accentRgb},0.4)] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.95)] hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.98),0_0_32px_-4px_rgba(${accentRgb},0.28)] transition-all duration-400 overflow-hidden h-full ${className || ''}`}
      >

        {/* ── TOP ACCENT GLOW STRIPE ── */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgb(${accentRgb}) 50%, transparent 100%)`,
            opacity: isHovering ? 1 : 0.45,
          }}
          aria-hidden="true"
        />

        {/* ── CANVAS REVEAL EFFECT (ANIMATED DOT MATRIX AROUND CURSOR) ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[24px] overflow-hidden transition-opacity duration-300"
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
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none m-0 font-sans select-none"
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
              className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 right-0 sm:right-2 md:right-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--accent)] tracking-normal normal-case pointer-events-none drop-shadow-[0_4px_16px_rgba(255,87,34,0.35)] select-none whitespace-nowrap z-20"
            >
              at PayPal
            </motion.span>
          </div>

          {/* Subtitle / Timeline badge from resume */}
          <div className="mt-3.5 flex items-center gap-2.5">
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[var(--accent)] uppercase font-semibold">
              Software Engineer Intern
            </span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs sm:text-sm tracking-wider text-neutral-400">
              Jun 2026 – Aug 2026
            </span>
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

              {/* Visual Motif Box (Interactive Migration Pipeline & Parity Metrics) */}
              <div className="rounded-xl bg-[#030509] border border-white/[0.08] p-4 sm:p-4.5 mb-5 group-hover:border-[#FF5722]/30 transition-colors h-[82px] flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  <span>126 COMMITS · 3,891 FILES</span>
                  <span className="text-[#38BDF8] font-semibold bg-[#38BDF8]/10 px-2 py-0.5 rounded-full">112/112 PASS</span>
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2.5 font-mono text-[10.5px] xs:text-xs sm:text-sm font-semibold tracking-tight">
                  <span className="text-neutral-400">EXPRESS + REACT</span>
                  <span className="text-[#FF5722] font-bold tracking-tighter hidden xs:inline">──────►</span>
                  <span className="text-[#FF5722] font-bold tracking-tighter xs:hidden">──►</span>
                  <span className="text-white border-b-2 border-[#FF5722] pb-0.5">
                    NEXT.JS 15
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] text-neutral-300 leading-[1.65] font-normal mb-5 min-h-[72px]">
                Migrated merchant-facing Virtual Terminal from Express + React to Next.js App Router across 3,891 files. Restructured routing, middleware, and state management, validating full parity with 112/112 unit tests and 70+ integration tests.
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="mt-auto pt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] min-h-[40px]">
                {['Next.js 15', 'TypeScript', 'Jest', 'Cypress', 'Git'].map((tech, idx, arr) => (
                  <React.Fragment key={tech}>
                    <span className="text-neutral-300 font-medium tracking-tight">
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

              {/* Visual Motif Box (Telemetry Dashboard & Equalizer) */}
              <div className="rounded-xl bg-[#030509] border border-white/[0.08] p-4 sm:p-4.5 mb-5 group-hover:border-[#F59E0B]/30 transition-colors h-[82px] flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-mono font-light text-[#F59E0B] leading-none">
                      43
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white font-semibold">
                      WIDGETS
                    </span>
                  </div>
                  {/* Live Telemetry Equalizer Bars */}
                  <div className="flex items-end gap-1 h-3.5" title="Telemetry stream">
                    <span className="w-1 bg-[#F59E0B] rounded-full h-2 animate-pulse" />
                    <span className="w-1 bg-[#F59E0B] rounded-full h-3.5 animate-pulse delay-75" />
                    <span className="w-1 bg-[#F59E0B] rounded-full h-1.5 animate-pulse delay-150" />
                    <span className="w-1 bg-[#F59E0B] rounded-full h-3 animate-pulse delay-100" />
                  </div>
                </div>
                <div className="pt-1.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] xs:text-[10.5px] text-neutral-300 tracking-wider">
                  <span>API METRICS</span>
                  <span className="text-[#F59E0B]">→</span>
                  <span>ANOMALY DETECT</span>
                  <span className="text-[#F59E0B]">→</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SLACK ALERTS
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] text-neutral-300 leading-[1.65] font-normal mb-5 min-h-[72px]">
                Built a 43-widget Datadog observability dashboard with automated Slack alerts and anomaly monitors. Tracked API traffic, payment authorization rates, latency, and dimensional metrics to ensure production reliability.
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="mt-auto pt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] min-h-[40px]">
                {['Datadog', 'Slack Alerts', 'Anomaly Monitors', 'APM'].map((tech, idx, arr) => (
                  <React.Fragment key={tech}>
                    <span className="text-neutral-300 font-medium tracking-tight">
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
                  Claude Skill for Migration
                </h3>
              </div>

              {/* Visual Motif Box (AI Integration Flow) */}
              <div className="rounded-xl bg-[#030509] border border-white/[0.08] p-4 sm:p-4.5 mb-5 group-hover:border-[#38BDF8]/30 transition-colors h-[82px] flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  <span>WORKFLOW INTEGRATION</span>
                  <span className="text-[#38BDF8] font-semibold bg-[#38BDF8]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="text-[10px]">✦</span>
                    AI AGENT
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-semibold tracking-tight">
                  <span className="text-neutral-400">CONFLUENCE</span>
                  <span className="text-[#38BDF8] font-bold tracking-tighter">──────►</span>
                  <span className="text-white border-b-2 border-[#38BDF8] pb-0.5">
                    CLAUDE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13.5px] text-neutral-300 leading-[1.65] font-normal mb-5 min-h-[72px]">
                Engineered an internal Claude Skill integrated with Confluence to phase migrations, persist migration state, and reuse codebase knowledge across sessions—accelerating pattern discovery and engineering documentation.
              </p>
            </div>

            {/* Stack Footer with Visual Emphasis */}
            <div className="mt-auto pt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span className="font-mono text-[9.5px] tracking-[0.22em] text-neutral-400 uppercase font-semibold">
                  STACK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] min-h-[40px]">
                {['Claude Skills', 'Confluence API', 'Prompt Engineering'].map((tech, idx, arr) => (
                  <React.Fragment key={tech}>
                    <span className="text-neutral-300 font-medium tracking-tight">
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
