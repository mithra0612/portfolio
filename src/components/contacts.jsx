'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Initialize Cal.com modal popup with dark editorial styling
  useEffect(() => {
    (async function () {
      try {
        const { getCalApi } = await import('@calcom/embed-react');
        const cal = await getCalApi({ namespace: '30min' });
        cal('ui', {
          theme: 'dark',
          styles: {
            branding: { brandColor: '#FF5722' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Failed to init Cal embed:', err);
      }
    })();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('mithramadhu005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-[#F8FAFC] py-20 sm:py-32 lg:py-36 border-t border-b border-white/[0.08] select-none"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-12 xl:gap-16 items-start">

          {/* ═══════════════ LEFT COLUMN: EDITORIAL STATEMENT ═══════════════ */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-[var(--accent)] uppercase font-semibold m-0">
                CONTACT & COLLABORATION
              </p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 sm:mb-10 text-xs font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[11px] text-neutral-300 font-medium">
                OPEN TO FULL-TIME ROLES & INTERNSHIPS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[2.2rem] xs:text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[4.75rem] font-black text-white uppercase tracking-tight leading-[0.98] mb-8 font-sans">
              LET'S BUILD<br />
              SOMETHING<br />
              EXTRAORDINARY.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg mb-8">
              Have a project, engineering opportunity, or idea worth discussing?
            </p>

            {/* Status footnote */}
            <div className="hidden lg:flex items-center gap-3 pt-6 text-xs font-mono text-neutral-500">
              <span>Based in Tamil Nadu, India</span>
              <span className="text-neutral-700">/</span>
              <span>Available for Remote & Relocation</span>
            </div>
          </div>

          {/* ═══════════════ RIGHT COLUMN: ACTION & CONTACT CHANNELS ═══════════════ */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between space-y-10 pt-10 border-t border-white/[0.08] lg:border-t-0 lg:pt-0 lg:pl-10 xl:pl-14 lg:border-l">

            {/* Block 1: Schedule A Call */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-px bg-[var(--accent)]" aria-hidden="true" />
                <p className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase font-semibold m-0">
                  SCHEDULE A CONVERSATION
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[var(--accent)] font-medium">30 min</span>
                <span className="text-white/20">·</span>
                <span className="text-neutral-300">Google Meet</span>
              </div>

              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
                Direct discussion regarding engineering roles, AI systems, or full-stack collaborations.
              </p>

              <div className="pt-2">
                <button
                  data-cal-namespace="30min"
                  data-cal-link="madhumithra-m/30min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  onClick={() => {
                    if (typeof window !== 'undefined' && !window.Cal) {
                      window.open('https://cal.com/madhumithra-m/30min', '_blank');
                    }
                  }}
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 bg-transparent hover:bg-white/[0.04] text-white hover:text-[var(--accent)] border border-white/[0.18] hover:border-[var(--accent)] font-mono text-xs sm:text-[13px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 group cursor-pointer"
                >
                  <span>SCHEDULE A CALL</span>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-400 group-hover:text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>

            {/* Block 2: Direct Email */}
            <div className="pt-8 border-t border-white/[0.08] space-y-3">
              <p className="font-mono text-xs tracking-[0.22em] text-neutral-500 uppercase font-semibold m-0">
                DIRECT EMAIL
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="mailto:mithramadhu005@gmail.com"
                  className="text-base xs:text-lg sm:text-xl md:text-2xl font-mono text-white hover:text-[var(--accent)] transition-colors tracking-tight font-medium break-all sm:break-normal"
                >
                  mithramadhu005@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="text-neutral-400" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Block 3: Elsewhere Links & Footnote */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <p className="font-mono text-xs tracking-[0.22em] text-neutral-500 uppercase font-semibold m-0">
                ELSEWHERE
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {[
                  { label: 'GITHUB', href: 'https://github.com/mithra0612' },
                  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mithra0612/' },
                  { label: 'LEETCODE', href: 'https://leetcode.com/u/mithra_612' },
                  // { label: 'RESUME', href: '/resume.pdf' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs sm:text-sm font-mono tracking-[0.16em] uppercase text-neutral-300 hover:text-white transition-colors py-0.5"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-neutral-500 group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>

              {/* Location Footnote */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span>Tamil Nadu, India</span>
                <span className="text-neutral-700">·</span>
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}