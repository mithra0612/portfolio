'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
  Mail,
  Copy,
  Check,
  Calendar,
  Clock,
  MapPin,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  FileText,
} from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Dynamically import Cal component with SSR disabled for clean client rendering
const Cal = dynamic(() => import('@calcom/embed-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[470px] flex items-center justify-center text-xs font-mono text-neutral-500 bg-transparent">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
        <span>Loading calendar...</span>
      </div>
    </div>
  ),
});

// Reusable directional stretch wrapper hook
function useDirectionalStretch(strength = 1) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const skewX = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 110, mass: 1.0 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const smoothScaleX = useSpring(scaleX, springConfig);
  const smoothScaleY = useSpring(scaleY, springConfig);
  const smoothSkewX = useSpring(skewX, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
    const normY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));

    x.set(normX * 14 * strength);
    y.set(normY * 8 * strength);
    scaleX.set(1 + Math.abs(normX) * 0.035 * strength);
    scaleY.set(1 + Math.abs(normY) * 0.02 * strength);
    skewX.set(-normX * 1.5 * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleX.set(1);
    scaleY.set(1);
    skewX.set(0);
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
    style: {
      x: smoothX,
      y: smoothY,
      scaleX: smoothScaleX,
      scaleY: smoothScaleY,
      skewX: smoothSkewX,
      transformOrigin: 'center center',
    },
  };
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const canvasRef = useRef(null);

  // Directional stretch for Left Content Block
  const leftStretch = useDirectionalStretch(1.1);

  // Directional stretch for Right Schedule Card (subtle to ensure calendar click precision)
  const rightStretch = useDirectionalStretch(0.4);

  // Initialize Cal.com UI theme, brand color & transparent background
  useEffect(() => {
    (async function () {
      try {
        const { getCalApi } = await import('@calcom/embed-react');
        const cal = await getCalApi();
        cal('ui', {
          theme: 'dark',
          styles: {
            branding: { brandColor: '#FF5722' },
            body: { background: 'transparent' },
            eventTypeListItem: { background: 'transparent' },
          },
          hideEventTypeDetails: true,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Failed to init Cal embed:', err);
      }
    })();
  }, []);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Floating Ember Particles Canvas (Atmospheric, NO gradients)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 32 delicate ember particles
    const particleCount = 32;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.55 + 0.15,
      fadeSpeed: Math.random() * 0.006 + 0.002,
      rising: true,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.rising) {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= 0.75) p.rising = false;
        } else {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.1) p.rising = true;
        }

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 87, 34, ${p.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('mithramadhu005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-[#F8FAFC] py-24 sm:py-32 px-6 sm:px-12 border-t border-white/[0.08] overflow-hidden select-none"
    >
      {/* ── FLOATING EMBER CANVAS (NO GRADIENTS) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
          <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--accent)] uppercase font-semibold m-0">
            CONTACT & COLLABORATION
          </p>
        </div>

        {/* ── KINETIC SPLIT GRID WITH STRETCH EFFECTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ═══════════ LEFT COLUMN: STATEMENT WITH DIRECTIONAL STRETCH ═══════════ */}
          <div className="lg:col-span-7">
            <motion.div
              ref={leftStretch.ref}
              onMouseMove={leftStretch.handleMouseMove}
              onMouseLeave={leftStretch.handleMouseLeave}
              style={leftStretch.style}
              className="flex flex-col justify-start will-change-transform"
            >
              {/* Live Availability Status */}
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-neutral-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for full-time roles & internships</span>
              </div>

              {/* High-Impact Headline */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6 font-sans">
                LET'S BUILD SOMETHING EXTRAORDINARY.
              </h2>

              {/* Direct Email Action Trigger */}
              <div className="mt-2 mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Direct Email
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:mithramadhu005@gmail.com"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-[var(--accent)] transition-colors tracking-tight font-sans"
                  >
                    mithramadhu005@gmail.com
                  </a>

                  <button
                    onClick={copyEmail}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer border-none"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} className="text-neutral-400 group-hover:text-white" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Borderless Social Links with Growing Underline */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">
                  Connect & Profiles
                </p>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {[
                    {
                      label: 'GitHub',
                      href: 'https://github.com/mithra0612',
                      icon: <Github size={14} />,
                    },
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/mithra0612/',
                      icon: <Linkedin size={14} />,
                    },
                    {
                      label: 'LeetCode',
                      href: 'https://leetcode.com/u/mithra_612',
                      icon: <Code2 size={14} />,
                    },
                    {
                      label: 'Resume',
                      href: '/resume.pdf',
                      icon: <FileText size={14} />,
                    },
                  ].map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-1.5 py-1 text-neutral-300 hover:text-white text-xs sm:text-sm font-mono uppercase tracking-wider transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                    >
                      <span>{label}</span>
                      <ArrowUpRight
                        size={13}
                        className="text-neutral-400 group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ═══════════ RIGHT COLUMN: ARCHITECTURAL CALENDAR (SEAMLESS EDITORIAL INTEGRATION) ═══════════ */}
          <div className="lg:col-span-5 flex flex-col pt-8 lg:pt-0 lg:border-l border-white/[0.08] lg:pl-10 xl:pl-14">
            <motion.div
              ref={rightStretch.ref}
              onMouseMove={rightStretch.handleMouseMove}
              onMouseLeave={rightStretch.handleMouseLeave}
              style={rightStretch.style}
              className="flex flex-col justify-start will-change-transform"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
                <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--accent)] uppercase m-0 font-medium">
                  SCHEDULE A CONVERSATION
                </p>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans tracking-tight">
                Book a 30-Min Intro Call
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Direct discussion regarding engineering roles, AI systems architecture, or full-stack project collaborations.
              </p>

              {/* Embedded Cal.com interactive calendar — borderless, transparent, seamless */}
              <div className="w-full h-[480px] sm:h-[510px] bg-transparent overflow-hidden">
                <Cal
                  calLink="madhumithra-m/30min"
                  style={{ width: '100%', height: '100%', overflow: 'auto', background: 'transparent' }}
                  config={{
                    layout: 'month_view',
                    theme: 'dark',
                    hideEventTypeDetails: true,
                  }}
                />
              </div>

              {/* Status details footer */}
              <div className="pt-4 mt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2">
                  <Clock size={13} className="text-[var(--accent)]" />
                  <span className="text-neutral-300 font-semibold">{currentTime || 'IST'}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-neutral-500" />
                  <span>Tamil Nadu, India</span>
                </span>
                <a
                  href="https://cal.com/madhumithra-m/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[var(--accent)] hover:text-white uppercase tracking-wider text-[11px] transition-colors"
                >
                  <span>Full View</span>
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}