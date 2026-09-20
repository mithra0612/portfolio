'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

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
  // Extended range allows the user to deliberately watch the scrapbook pieces assemble
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

  // ── 1. HEADER STRIP (MASTHEAD) ──
  const headerY = useTransform(smoothProgress, [0, 0.9], [-25 * d, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.55], [0.35, 1]);

  // ── 2. HERO HEADING ("EXPERIENCE"): x: -80px, y: -50px ──
  const headingX = useTransform(smoothProgress, [0, 0.98], [-80 * d, 0]);
  const headingY = useTransform(smoothProgress, [0, 0.98], [-50 * d, 0]);
  const headingRotate = useTransform(smoothProgress, [0, 0.98], [-1.2 * d, 0]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.5], [0.35, 1]);

  // ── 3. HANDWRITTEN SCRIPT ("at PayPal"): x: +90px, y: +60px ──
  const scriptX = useTransform(smoothProgress, [0.04, 1.0], [90 * d, 0]);
  const scriptY = useTransform(smoothProgress, [0.04, 1.0], [60 * d, 0]);
  const scriptRotate = useTransform(smoothProgress, [0.04, 1.0], [1.5 * d, -3.5]);
  const scriptOpacity = useTransform(smoothProgress, [0.04, 0.65], [0.25, 1]);

  // ── 4. TOP-RIGHT BLOCK: x: +90px, y: -30px ──
  const topRightX = useTransform(smoothProgress, [0, 0.98], [90 * d, 0]);
  const topRightY = useTransform(smoothProgress, [0, 0.98], [-30 * d, 0]);
  const topRightRotate = useTransform(smoothProgress, [0, 0.98], [1.1 * d, 0]);
  const topRightOpacity = useTransform(smoothProgress, [0, 0.6], [0.3, 1]);

  // ── 5. WORK BLOCK 01 (VIRTUAL TERMINAL): x: -80px, y: +60px ──
  const block01X = useTransform(smoothProgress, [0.02, 1.0], [-80 * d, 0]);
  const block01Y = useTransform(smoothProgress, [0.02, 1.0], [60 * d, 0]);
  const block01Rotate = useTransform(smoothProgress, [0.02, 1.0], [-1.3 * d, 0]);
  const block01Opacity = useTransform(smoothProgress, [0.02, 0.65], [0.3, 1]);

  // ── 6. WORK BLOCK 02 (OBSERVABILITY): x: +50px, y: -60px ──
  const block02X = useTransform(smoothProgress, [0.04, 1.0], [50 * d, 0]);
  const block02Y = useTransform(smoothProgress, [0.04, 1.0], [-60 * d, 0]);
  const block02Rotate = useTransform(smoothProgress, [0.04, 1.0], [1.0 * d, 0]);
  const block02Opacity = useTransform(smoothProgress, [0.04, 0.65], [0.3, 1]);

  // ── 7. WORK BLOCK 03 (AI TOOLING): x: +90px, y: +50px ──
  const block03X = useTransform(smoothProgress, [0.06, 1.0], [90 * d, 0]);
  const block03Y = useTransform(smoothProgress, [0.06, 1.0], [50 * d, 0]);
  const block03Rotate = useTransform(smoothProgress, [0.06, 1.0], [1.4 * d, 0]);
  const block03Opacity = useTransform(smoothProgress, [0.06, 0.7], [0.3, 1]);

  // ── 8. GRID BORDERS: Subtly assemble and seal ──
  const gridBorderOpacity = useTransform(smoothProgress, [0, 0.85], [0.25, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full bg-[var(--bg-base)] text-[var(--text-primary)] pt-20 sm:pt-28 lg:pt-32 pb-24 sm:pb-32 overflow-hidden select-none"
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* ══════════════════════════════════════════════════════════════════
            RIGID SCRAPBOOK / EDITORIAL COLLAGE GRID SYSTEM
            Visible thin dividing lines form the entire rectangular composition
            ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          style={shouldReduceMotion ? undefined : { opacity: gridBorderOpacity }}
          className="border border-[var(--border)] bg-[var(--bg-base)]"
        >

          {/* ── 1. TOP EDITORIAL HEADER STRIP ── */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: headerY, opacity: headerOpacity }}
            className="border-b border-[var(--border)] px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)] bg-[var(--bg-raised)]/30"
          >
            {/* Left: Indicator Dots (matching • • • in reference) */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-30" />
            </div>

            {/* Center: Role / Entity */}
            <div className="font-medium text-[var(--text-primary)] tracking-[0.25em]">
              SOFTWARE ENGINEERING INTERN
            </div>

            {/* Right: Name */}
            <div className="text-[var(--text-secondary)]">
              MADHUMITHRA M.
            </div>
          </motion.div>


          {/* ── 2. HERO ROW: OVERSIZED EXPERIENCE + TOP-RIGHT EMPTY BLOCK ── */}
          <div className="border-b border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Hero Left: Massive Typographic Headline + Overlapping Script (Span 8) */}
            <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-center overflow-hidden">
              <div className="relative inline-block w-full">
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
                  className="text-[3.25rem] sm:text-[4.75rem] md:text-[5.75rem] lg:text-[6.5rem] xl:text-[7.75rem] font-extrabold uppercase text-[var(--text-primary)] tracking-[-0.04em] leading-[0.85] m-0 font-sans break-normal select-none"
                >
                  EXPERIENCE
                </motion.h2>

                {/* Overlapping Handwritten Script "at PayPal" (Reflecting "Work" in reference) */}
                <motion.span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    ...(shouldReduceMotion
                      ? {}
                      : {
                          x: scriptX,
                          y: scriptY,
                          rotate: scriptRotate,
                          opacity: scriptOpacity,
                        }),
                  }}
                  className="absolute -bottom-3 sm:-bottom-5 md:-bottom-7 right-2 sm:right-6 md:right-10 text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--accent)] tracking-normal normal-case pointer-events-none drop-shadow-[0_4px_16px_rgba(255,87,34,0.35)] select-none whitespace-nowrap z-20"
                >
                  at PayPal
                </motion.span>
              </div>
            </div>

            {/* Top-Right: Empty Editorial Block (Intentional Whitespace) */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: topRightX,
                      y: topRightY,
                      rotate: topRightRotate,
                      opacity: topRightOpacity,
                    }
              }
              className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--bg-raised)]/20 min-h-[140px] lg:min-h-full"
            />

          </div>


          {/* ── 3. LOWER SECTION: 3 HORIZONTAL WORK BLOCKS ON DESKTOP ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-stretch">

            {/* ══════════════════════════════════════════════════════════════
                WORK BLOCK 01 — VIRTUAL TERMINAL (Span 4)
                ══════════════════════════════════════════════════════════════ */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: block01X,
                      y: block01Y,
                      rotate: block01Rotate,
                      opacity: block01Opacity,
                    }
              }
              className="lg:col-span-4 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-b md:border-b-0 border-r-0 md:border-r border-[var(--border)] bg-transparent"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--accent)] font-mono text-sm">✦</span>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--accent)] uppercase font-semibold">
                    PRODUCT ENGINEERING
                  </span>
                </div>

                {/* Work Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
                  01 — Virtual Terminal
                </h3>

                {/* Editorial Visual Motif: LEGACY → NEXT.JS 15 */}
                <div className="mb-6 p-4 border border-[var(--border)] bg-[var(--bg-surface)]/50">
                  <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-2">
                    <span>MIGRATION</span>
                    <span className="text-[var(--accent-sky)] font-medium">NEXT.JS 15</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold tracking-tight">
                    <span className="text-[var(--text-secondary)]">LEGACY</span>
                    <span className="text-[var(--accent)] font-bold">→</span>
                    <span className="text-[var(--text-primary)] border-b-2 border-[var(--accent)] pb-0.5">
                      NEXT.JS 15
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[13.5px] sm:text-[14px] text-[var(--text-secondary)] leading-[1.7] font-normal mb-3">
                  Rebuilt a customer-facing Virtual Terminal in Next.js 15, working across routing, authentication, order-entry, and error handling.
                </p>

                {/* Supporting Line */}
                <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wide mb-6">
                  Testing · Shadow Testing · Traffic Routing
                </p>
              </div>

              {/* Tech Stack Directly Underneath Description */}
              <div className="pt-4 mt-auto border-t border-[var(--border)]">
                <p className="font-mono text-[9.5px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-1.5">
                  STACK
                </p>
                <p className="font-mono text-[11.5px] text-[var(--text-primary)] leading-relaxed">
                  Next.js 15 · React · TypeScript · Jest · Cypress · CI/CD
                </p>
              </div>
            </motion.div>


            {/* ══════════════════════════════════════════════════════════════
                WORK BLOCK 02 — OBSERVABILITY (Span 4)
                ══════════════════════════════════════════════════════════════ */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: block02X,
                      y: block02Y,
                      rotate: block02Rotate,
                      opacity: block02Opacity,
                    }
              }
              className="lg:col-span-4 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-b md:border-b-0 lg:border-r border-[var(--border)] bg-transparent"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--accent-amber)] font-mono text-sm">✦</span>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--accent-amber)] uppercase font-semibold">
                    MONITORING & RELIABILITY
                  </span>
                </div>

                {/* Work Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
                  02 — Observability
                </h3>

                {/* Editorial Visual Motif: 43 WIDGETS + API → METRICS → ALERTS */}
                <div className="mb-6 p-4 border border-[var(--border)] bg-[var(--bg-surface)]/50">
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-mono font-light text-[var(--accent-amber)] leading-none">
                        43
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold">
                        WIDGETS
                      </span>
                    </div>
                    <span className="font-mono text-[9.5px] text-[var(--text-muted)] uppercase tracking-wider">
                      DATADOG
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between font-mono text-[11px] text-[var(--text-secondary)] tracking-wider">
                    <span>API</span>
                    <span className="text-[var(--accent-amber)]">→</span>
                    <span>METRICS</span>
                    <span className="text-[var(--accent-amber)]">→</span>
                    <span className="text-[var(--text-primary)] font-semibold">ALERTS</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[13.5px] sm:text-[14px] text-[var(--text-secondary)] leading-[1.7] font-normal mb-3">
                  Built a Datadog dashboard covering API traffic, authorization rates, and payment dimensions including card country, currency, and brand.
                </p>

                {/* Supporting Line */}
                <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wide mb-6">
                  Threshold Alerts · Drill-down Views
                </p>
              </div>

              {/* Tech Stack Directly Underneath Description */}
              <div className="pt-4 mt-auto border-t border-[var(--border)]">
                <p className="font-mono text-[9.5px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-1.5">
                  STACK
                </p>
                <p className="font-mono text-[11.5px] text-[var(--text-primary)] leading-relaxed">
                  Datadog
                </p>
              </div>
            </motion.div>


            {/* ══════════════════════════════════════════════════════════════
                WORK BLOCK 03 — AI-ASSISTED DEVELOPER TOOLING (Span 4)
                Visual / Content Block matching third block of reference
                ══════════════════════════════════════════════════════════════ */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: block03X,
                      y: block03Y,
                      rotate: block03Rotate,
                      opacity: block03Opacity,
                    }
              }
              className="col-span-1 md:col-span-2 lg:col-span-4 p-6 sm:p-8 md:p-9 flex flex-col justify-between bg-[var(--bg-raised)]/40 relative"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--accent-sky)] font-mono text-sm">✦</span>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--accent-sky)] uppercase font-semibold">
                    DEVELOPER PRODUCTIVITY
                  </span>
                </div>

                {/* Work Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
                  03 — AI-Assisted Developer Tooling
                </h3>

                {/* Editorial Visual Motif: CONFLUENCE → CLAUDE */}
                <div className="mb-6 p-4 border border-[var(--border)] bg-[var(--bg-surface)]/60">
                  <div className="flex items-center justify-between font-mono text-[9.5px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-2">
                    <span>WORKFLOW INTEGRATION</span>
                    <span className="text-[var(--accent-sky)] font-medium">CLAUDE SKILL</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold tracking-tight">
                    <span className="text-[var(--text-secondary)]">CONFLUENCE</span>
                    <span className="text-[var(--accent-sky)] font-bold">→</span>
                    <span className="text-[var(--text-primary)] border-b-2 border-[var(--accent-sky)] pb-0.5">
                      CLAUDE
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[13.5px] sm:text-[14px] text-[var(--text-secondary)] leading-[1.7] font-normal mb-3">
                  Created an internal Claude skill with Confluence integration for migration reports, existing patterns, and internal documentation.
                </p>

                {/* Supporting Line */}
                <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wide mb-6">
                  Initiative beyond assigned work · Near-production ready
                </p>
              </div>

              {/* Tech Stack Directly Underneath Description */}
              <div className="pt-4 mt-auto border-t border-[var(--border)]">
                <p className="font-mono text-[9.5px] tracking-[0.2em] text-[var(--text-muted)] uppercase mb-1.5">
                  STACK
                </p>
                <p className="font-mono text-[11.5px] text-[var(--text-primary)] leading-relaxed">
                  Claude · Confluence
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
