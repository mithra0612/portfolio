'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, Sparkles, X, ChevronRight, ExternalLink } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 'sih-2024',
    badge: 'NATIONAL FINALIST',
    year: '2024',
    title: 'Smart India Hackathon 2024',
    organization: 'Department of Posts, Govt. of India',
    description:
      'Finalist — selected in top 5 teams nationwide among 500+ competing universities across India. Engineered an AI-driven financial services and demographic intelligence platform for rural postal outreach.',
    photos: ['/sih1.jpg', '/sih2.jpg', '/sih3.jpg', '/sih4.jpg'],
  },
  {
    id: 'hackit-2025',
    badge: '1ST PLACE WINNER',
    year: '2025',
    title: "Hack'IT 25",
    organization: 'College of Engineering, Guindy (CEG), Anna University',
    description:
      'Won 1st Place with a cash prize of ₹12,000. Built Growth Guardian, an AI financial literacy and real-time investment scam detection platform.',
    photos: ['/hackit1.jpg', '/hackit2.jpg'],
  },
  {
    id: 'nexathon-2025',
    badge: 'BEST BUSINESS PITCH',
    year: '2025',
    title: 'Nexathon 2025',
    organization: 'KCG College of Technology',
    description:
      'Awarded Best Business Pitch for viable market architecture, go-to-market strategy, and sustainable revenue modeling under competitive evaluation.',
    photos: ['/nexathon1.jpg', '/nexathon2.jpg'],
  },
  {
    id: 'hack-25',
    badge: 'FINALIST',
    year: '2025',
    title: '.hack();25',
    organization: 'IEEE Student Branch, MACE Kerala',
    description:
      'Finalist in the prestigious 36-hour hackathon. Architected Civic Lens, a transparent civic data and AI-assisted Right to Information (RTI) governance engine.',
    photos: ['/hack251.jpg', '/hack252.jpg'],
  },
  {
    id: 'tnwise-2025',
    badge: 'TOP 50 FINALIST',
    year: '2025',
    title: 'TNWISE 2025',
    organization: 'Tamil Nadu Centre of Excellence for Advanced Manufacturing',
    description:
      'Selected among the top 50 teams out of 400+ entries across Tamil Nadu for Wellcare, an AI-powered personalized wellness and preventive women’s health platform.',
    photos: ['/tnwise1.jpg', '/tnwise2.jpg'],
  },
  {
    id: 'poetry',
    badge: 'LITERATURE & ARTS',
    year: '2024',
    title: 'Published Poetry',
    organization: "Writer's Pocket Anthologies",
    description:
      'Author of three published poems featured across two anthologies. Exploring themes of quiet observation, resilience, human cadence, and introspective rhythm.',
    photos: ['/poetry1.jpg', '/poetry3.jpg', '/poetry4.jpg', '/poetry2.jpg'],
  },
  {
    id: 'scholastic',
    badge: 'FOUNDATIONAL PLACEMENTS',
    year: '2018–2023',
    title: 'Scholastic & Co-Curricular Recognitions',
    organization: 'State & National Competitions',
    description:
      'Consistent podium and zonal placements across competitive mathematics and science Olympiads, creative writing, extempore elocution, and abacus championships.',
    photos: ['/other1.jpg', '/other2.jpg'],
  },
];

export default function AchievementsPage() {
  const containerRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Track subpage visit so returning to home skips the intro loader
  useEffect(() => {
    try {
      sessionStorage.setItem('from_subpage', 'true');
    } catch (e) {}
  }, []);

  // Keyboard shortcut to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Continuous Travelling Light Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 35%', 'end 85%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const lightPosition = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-black text-[#F8FAFC] selection:bg-[var(--accent)] selection:text-black font-sans relative pb-32 overflow-x-hidden">
      {/* Subtle Atmospheric Ambient Lighting */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 85% 15%, rgba(255, 87, 34, 0.035) 0%, transparent 60%), radial-gradient(ellipse 60% 45% at 15% 75%, rgba(56, 189, 248, 0.025) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-10 sm:pt-14">
        {/* ── TOP NAV BAR ── */}
        <div className="mb-12 sm:mb-16">
          <Link
            href="/#about"
            className="group relative inline-flex items-center gap-2 py-1 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none bg-transparent border-none p-0"
          >
            <ArrowLeft
              size={15}
              className="text-[var(--accent)] transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to About</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
          </Link>
        </div>

        {/* ── EDITORIAL PAGE HEADER ── */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[2px] bg-[var(--accent)]" aria-hidden="true" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.24em] text-[var(--accent)] uppercase font-semibold m-0">
              RECOGNITIONS & MILESTONES
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold uppercase text-white tracking-tight leading-tight mb-3 font-sans">
            Competition & Achievements
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-normal font-[var(--font-body)]">
            A chronological timeline of national hackathon podiums, research recognitions, and creative milestones.
          </p>
        </div>

        {/* ── SCROLLABLE TIMELINE CONTAINER WITH TRAVELLING LIGHT EFFECT ── */}
        <div ref={containerRef} className="relative">
          {/* Base Muted Guide Spine Line */}
          <div
            className="absolute left-3.5 sm:left-6 md:left-8 top-3 bottom-8 w-[2px] bg-white/[0.08]"
            aria-hidden="true"
          />

          {/* Glowing Travelling Active Spine Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3.5 sm:left-6 md:left-8 top-3 w-[2px] bg-gradient-to-b from-[var(--accent)] via-orange-400 to-white shadow-[0_0_14px_rgba(255,87,34,0.7)] z-10 origin-top"
            aria-hidden="true"
          />

          {/* Travelling Light Comet Head (Moves physically as you scroll) */}
          <motion.div
            style={{ top: lightPosition }}
            className="absolute left-3.5 sm:left-6 md:left-8 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            aria-hidden="true"
          >
            {/* Pulsing light orb */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-[var(--accent)]/30 animate-ping" />
              <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[var(--accent)] shadow-[0_0_14px_#FF5722,0_0_28px_rgba(255,87,34,0.85)]" />
            </div>
          </motion.div>

          {/* ── TIMELINE NODES ── */}
          <div className="space-y-20 sm:space-y-28">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-16 md:pl-24 group"
              >
                {/* Node Milestone Marker on Timeline Spine */}
                <div
                  className="absolute left-3.5 sm:left-6 md:left-8 -translate-x-1/2 top-2.5 w-3 h-3 rounded-full bg-black border-2 border-white/30 group-hover:border-[var(--accent)] group-hover:scale-125 transition-all duration-300 z-10"
                  aria-hidden="true"
                />

                {/* Header Lockup: Badge, Year & Title */}
                <div className="mb-3">
                  {/* Eyebrow metadata */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono mb-2">
                    <span className="text-[var(--accent)] font-semibold tracking-wider uppercase">
                      {item.badge}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-neutral-400 tracking-widest">
                      {item.year}
                    </span>
                    <span className="text-white/30 hidden sm:inline">•</span>
                    <span className="text-neutral-400 hidden sm:inline tracking-wider">
                      {item.organization}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300 font-sans">
                    {item.title}
                  </h2>
                </div>

                {/* Description - uses full width available without artificial cutoffs */}
                <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] leading-relaxed font-light mb-7 font-[var(--font-body)]">
                  {item.description}
                </p>

                {/* ── RELATED IMAGES: SINGLE HORIZONTAL ROW, ALL IMAGES VISIBLE ── */}
                <div className="relative">
                  <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar select-none">
                    {item.photos.map((src, photoIdx) => (
                      <div
                        key={photoIdx}
                        onClick={() => setSelectedPhoto(src)}
                        className="group/photo relative flex-shrink-0 h-44 sm:h-52 md:h-60 aspect-[4/3] rounded-xl overflow-hidden bg-[#090b10] border border-white/[0.1] hover:border-[var(--accent)]/60 transition-all duration-300 cursor-pointer"
                      >
                        <img
                          src={src}
                          alt={`${item.title} documentation photo ${photoIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 filter brightness-[0.93] contrast-[1.04] group-hover/photo:brightness-100"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subtle horizontal scroll cue for touch / overflow */}
                  {item.photos.length > 3 && (
                    <div className="sm:hidden text-right pt-1 font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      Scroll horizontally →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FULL-SCREEN LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer select-none"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 bg-black cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Enlarged achievement documentation"
                className="w-full h-auto max-h-[85vh] object-contain block"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image modal"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-white border border-white/20 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
