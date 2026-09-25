'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Layers, Database, BrainCircuit, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: '01',
    title: 'LANGUAGES',
    accent: '#FF5722',
    icon: Terminal,
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'Python',
      'SQL',
    ],
  },
  {
    id: '02',
    title: 'FRAMEWORKS',
    accent: '#F97316',
    icon: Layers,
    skills: [
      'Next.js',
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },
  {
    id: '03',
    title: 'BACKEND & DATABASES',
    accent: '#EAB308',
    icon: Database,
    skills: [
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Firebase',
      'JWT Authentication',
    ],
  },
  {
    id: '04',
    title: 'AI & DATA',
    accent: '#38BDF8',
    icon: BrainCircuit,
    skills: [
      'RAG Pipelines',
      'LLM Integration',
      'Prompt Engineering',
      'Claude Skills',
      'Hugging Face',
      'Ollama',
    ],
  },
  {
    id: '05',
    title: 'TESTING & TOOLS',
    accent: '#F59E0B',
    icon: Wrench,
    skills: [
      'Jest',
      'Cypress',
      'Git',
      'GitHub',
      'Datadog',
      'Confluence',
      'Vercel',
      'Figma',
    ],
  },
];

// Staggered reveal animation variants for tech stack items
const stackContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const stackItemVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Editorial typewriter component for category titles
 */
function TypewriterHeading({ title, active, speed = 24, accentColor }) {
  const [displayText, setDisplayText] = useState(title);

  useEffect(() => {
    if (!active) {
      setDisplayText(title);
      return;
    }

    let i = 0;
    setDisplayText('');

    const timer = setInterval(() => {
      i++;
      if (i <= title.length) {
        setDisplayText(title.slice(0, i));
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [active, title, speed]);

  if (!active) {
    return (
      <span className="font-sans font-bold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
        {title}
      </span>
    );
  }

  return (
    <span className="inline-flex items-baseline" aria-label={title}>
      <span
        className="font-sans font-bold uppercase tracking-tight transition-colors duration-300"
        style={{ color: accentColor }}
      >
        {displayText}
      </span>
      <span
        className="inline-block ml-1 font-mono animate-pulse select-none text-base sm:text-lg md:text-xl"
        style={{ color: accentColor }}
        aria-hidden="true"
      >
        _
      </span>
    </span>
  );
}

/**
 * Lightweight typewriter text for the section header
 */
function TypewriterHeader({ text, active, speed = 28 }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }

    let i = 0;
    setDisplayText('');

    const timer = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [active, text, speed]);

  return (
    <span>
      {displayText}
      {active && (
        <span className="inline-block ml-0.5 font-mono animate-pulse text-[var(--accent)] select-none">
          |
        </span>
      )}
    </span>
  );
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [sectionHeaderHovered, setSectionHeaderHovered] = useState(false);
  const rowRefs = useRef([]);

  // Detect touch devices and establish scroll-based activation for touch
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    // Scroll calculation for touch devices (targeting ~40%-60% central viewport area)
    const handleScroll = () => {
      if (!isTouchDevice) return;
      const viewportCenter = window.innerHeight * 0.5;
      let closestIdx = null;
      let minDistance = Infinity;

      rowRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenter - viewportCenter);

        // Check if row is within the central 40%-60% interaction zone
        if (rect.bottom >= window.innerHeight * 0.35 && rect.top <= window.innerHeight * 0.65) {
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        }
      });

      setScrollActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTouchDevice]);

  // Determine active row: hover/focus takes precedence on desktop; scroll handles touch
  const activeIndex = hoveredIndex !== null ? hoveredIndex : (isTouchDevice ? scrollActiveIndex : null);

  return (
    <section
      id="skills"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: '7rem 0',
      }}
    >
      {/* Subtle background ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 50% at 20% 30%, rgba(56, 189, 248, 0.035) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(245, 158, 11, 0.03) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 relative">
        {/* Section label with hover typewriter effect */}
        <div
          className="flex items-center gap-3 mb-10 md:mb-14 cursor-default w-fit group"
          onMouseEnter={() => setSectionHeaderHovered(true)}
          onMouseLeave={() => setSectionHeaderHovered(false)}
        >
          <span
            style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent)' }}
            aria-hidden="true"
          />
          <p
            className="label text-xs sm:text-sm tracking-[0.22em] uppercase font-mono m-0 font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            <TypewriterHeader
              text="SKILLS & EXPERTISE"
              active={sectionHeaderHovered}
              speed={28}
            />
          </p>
        </div>

        {/* ── FULL-WIDTH EDITORIAL TECHNICAL INDEX ── */}
        <div
          role="list"
          aria-label="Technical skills index"
          className="w-full border-t border-b border-white/[0.08] divide-y divide-white/[0.08]"
        >
          {SKILL_CATEGORIES.map((cat, i) => {
            const isActive = i === activeIndex;
            const IconComponent = cat.icon;

            return (
              <div
                key={cat.id}
                ref={(el) => (rowRefs.current[i] = el)}
                data-index={i}
                role="listitem"
                tabIndex={0}
                aria-label={`${cat.id} ${cat.title}`}
                onClick={() => setHoveredIndex((prev) => (prev === i ? null : i))}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(i)}
                onBlur={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.018)' : 'transparent',
                }}
                className="group relative w-full py-6 sm:py-9 md:py-10 flex items-start justify-between gap-3 sm:gap-8 md:gap-12 outline-none transition-colors duration-300 select-none cursor-pointer sm:cursor-default focus-visible:bg-white/[0.02]"
              >
                {/* ── LEFT ANCHOR: LARGE EDITORIAL NUMBER ── */}
                <div className="w-12 xs:w-16 sm:w-20 md:w-28 flex-shrink-0 flex items-baseline pt-0.5">
                  <motion.span
                    animate={{
                      color: isActive ? cat.accent : 'rgba(255, 255, 255, 0.22)',
                      y: isActive ? -2 : 0,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none block select-none origin-left"
                  >
                    {cat.id}
                  </motion.span>
                </div>

                {/* ── MIDDLE TRANSFORM AREA: CONFIDENT HEADING + TECHNICAL FIELD ── */}
                <div className="flex-1 min-w-0 flex flex-col justify-start pt-1 sm:pt-1.5 pr-2 sm:pr-6 md:pr-10">
                  {/* Category Title — Remains Large & Bold in Both States */}
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    <TypewriterHeading
                      title={cat.title}
                      active={isActive}
                      speed={22}
                      accentColor={cat.accent}
                    />
                  </div>

                  {/* Active Tech Stack & Extended Editorial Accent Rule */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key={`content-${cat.id}`}
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden w-full"
                      >
                        {/* Staggered Technology Items spanning the full available width */}
                        <motion.div
                          variants={stackContainerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-wrap items-center gap-x-2.5 xs:gap-x-3 gap-y-1.5 font-mono text-[13px] xs:text-sm sm:text-base text-neutral-200 leading-relaxed max-w-full"
                        >
                          {cat.skills.map((skill, sIdx) => (
                            <motion.span
                              key={skill}
                              variants={stackItemVariants}
                              className="inline-flex items-center gap-3"
                            >
                              <span className="text-neutral-200 hover:text-white transition-colors duration-150 cursor-default">
                                {skill}
                              </span>
                              {sIdx < cat.skills.length - 1 && (
                                <span className="text-neutral-600 select-none">·</span>
                              )}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* Extended Editorial Horizontal Accent Rule */}
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 0.3 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                          style={{ backgroundColor: cat.accent, transformOrigin: 'left' }}
                          className="h-[1px] w-full max-w-full sm:max-w-[96%] mt-4"
                          aria-hidden="true"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── RIGHT ANCHOR: RELEVANT LUCIDE ICON ── */}
                <div className="flex-shrink-0 flex items-center justify-center pl-2 pt-1 sm:pt-2">
                  <motion.div
                    animate={{
                      color: isActive ? cat.accent : 'rgba(255, 255, 255, 0.22)',
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center"
                  >
                    <IconComponent
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}