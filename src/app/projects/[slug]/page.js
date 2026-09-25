'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter, notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getProjectBySlug,
  getNextProject,
  SECTION_LABELS,
  DETAIL_SECTION_ORDER,
} from '@/lib/projectsData';
import {
  ExternalLink,
  Github,
  X,
  Lightbulb,
  Layers,
  Award,
  ArrowRight,
  ArrowLeft,
  Workflow,
  Sparkles,
} from 'lucide-react';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'impact', label: 'Impact' },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const project = getProjectBySlug(slug);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Track subpage visit so returning to home skips the intro loader
  useEffect(() => {
    try {
      sessionStorage.setItem('from_subpage', 'true');
    } catch (e) {}
  }, []);

  // Keyboard shortcut: Pressing ESC returns to #projects smoothly without reload
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        router.push('/#projects');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  const structuredSections = DETAIL_SECTION_ORDER.filter(
    (key) => project[key] && key !== 'overview' && key !== 'outcome'
  );

  const solutionSections = structuredSections.filter(
    (key) =>
      !key.toLowerCase().includes('ai') &&
      !key.toLowerCase().includes('query') &&
      !key.toLowerCase().includes('intelligence')
  );

  const galleryImages = project.gallery || [project.thumbnail];

  const highlights = project.pillars || [
    {
      label: 'AI Assistant',
      title: 'Contextual Query Assistant',
      description: 'Conversational agent for automated rules and scheme guidance.',
    },
    {
      label: 'Recommendation Engine',
      title: 'Targeted Intelligence',
      description: 'Machine learning algorithms matching seasonal and demographic patterns.',
    },
    {
      label: 'Automation Pipeline',
      title: 'Operational Workflows',
      description: 'Automated data discovery and event outreach pipelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#F8FAFC] font-sans relative selection:bg-[var(--accent)]/30 selection:text-white pb-20">
      {/* ── EDGE-TO-EDGE FULL-BLEED IMAGE HERO (STARTS AND ENDS AT PAGE EDGES) ── */}
      <section className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden bg-black">
        {/* Full width image spanning entire browser left to right */}
        <img
          src={project.thumbnail}
          alt={`${project.title} showcase`}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-95 filter contrast-[1.02] brightness-[0.92]"
        />

        {/* Minimal gradient only at the bottom and left so the image remains clearly visible */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* ── BACK TO PROJECTS BUTTON ON TOP LEFT ── */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-30">
          <Link
            href="/#projects"
            id="back-to-projects-btn"
            className="group relative inline-flex items-center gap-2 py-1 text-neutral-200 hover:text-white font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors outline-none cursor-pointer bg-transparent border-none p-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            <ArrowLeft
              size={15}
              className="text-[var(--accent)] transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
          </Link>
        </div>

        {/* Overlay Project Title & Info: Constrained inside max-w-6xl */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex flex-col justify-end pb-8 pointer-events-none">
          <div className="pointer-events-auto max-w-3xl">
            {/* Category Tag with Accent Dot (No outline box) */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent)] mb-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              <span>{project.categoryBadge || 'Decision Support System'}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none font-sans drop-shadow-md mb-2">
              {project.shortTitle || project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 font-normal leading-relaxed max-w-2xl mb-4 line-clamp-2">
              {project.subtitle || project.tagline || project.title}
            </p>

            {/* Action Links: NO outlines, growing underline matching project section */}
            <div className="flex items-center gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-1.5 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                >
                  <Github size={14} className="transition-transform duration-300 group-hover/btn:scale-110" />
                  <span>GitHub</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/btn:w-full" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/live relative inline-flex items-center gap-1.5 py-1 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                >
                  <ExternalLink
                    size={14}
                    className="text-[var(--accent)] transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                  />
                  <span>Live Demo</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover/live:w-full" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MINIMAL UNDERLINE TABS (NO BOXES, NO OUTLINES) ── */}
      <nav className="max-w-6xl mx-auto px-6 mt-8 mb-8 border-b border-white/[0.08]">
        <div className="flex items-center gap-5 sm:gap-8 pb-3 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-1 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer outline-none bg-transparent border-none p-0 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[var(--accent)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── CLEAN OPEN EDITORIAL CONTENT: NO BOXES, NO CARD CLUTTER ── */}
      <main className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {/* ═══════════ TAB 1: OVERVIEW (CLEAN OPEN TYPOGRAPHY, NO BOXES) ═══════════ */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              {/* Challenge & Tech Stack (Open 2-Column Layout, Zero Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* The Challenge */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                    <Lightbulb size={16} />
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light mt-3">
                    {project.challenge || project.overview}
                  </p>
                </div>

                {/* Tech Stack & Honors */}
                <div className="md:col-span-5 md:pl-6 md:border-l md:border-white/[0.08] space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-white">
                      <Layers size={16} className="text-[var(--accent-sky)]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                        Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(project.techHighlight || project.tech).map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono text-neutral-300 bg-white/[0.04] px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.event && (
                    <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2.5 text-neutral-300">
                      <Award size={16} className="text-[var(--accent)] shrink-0" />
                      <span className="text-xs font-mono tracking-wide">
                        {project.event}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Core Capabilities (Clean Minimal List, Zero Card Boxes) */}
              <div className="pt-8 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 mb-6 text-neutral-400">
                  <Sparkles size={16} className="text-[var(--accent)]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Core Architecture Highlights
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <p className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider">
                        0{idx + 1} / {item.label}
                      </p>
                      <h4 className="text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ═══════════ TAB 2: SOLUTION (CLEAN OPEN LIST, NO BOXES) ═══════════ */}
          {activeTab === 'solution' && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutionSections.length > 0 ? (
                  solutionSections.slice(0, 2).map((sectionKey) => {
                    const value = project[sectionKey];
                    const label = SECTION_LABELS[sectionKey] || sectionKey;
                    if (!value) return null;

                    return (
                      <div key={sectionKey} className="space-y-3">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                          {label}
                        </h4>

                        {typeof value === 'string' ? (
                          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                            {value}
                          </p>
                        ) : (
                          <ul className="space-y-3 text-sm text-neutral-300 font-light">
                            {value.slice(0, 4).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <p className="text-neutral-300 text-base leading-relaxed font-light">
                      {project.overview}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ═══════════ TAB 3: ARCHITECTURE (CLEAN WORKFLOW, NO BOXES) ═══════════ */}
          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                <Workflow size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Technical Architecture
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                    01 / Ingestion
                  </span>
                  <h5 className="text-base font-bold text-white">Data Pipeline</h5>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    Periodic scraping and dataset consolidation across public records, demographic data, and scheme circulars.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                    02 / Intelligence
                  </span>
                  <h5 className="text-base font-bold text-white">Machine Learning Engine</h5>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    Inference models evaluate seasonal harvest cycles and demographic indicators to rank recommendations.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                    03 / Interface
                  </span>
                  <h5 className="text-base font-bold text-white">Targeted Delivery</h5>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    Role-based portals deliver actionable demographic insights directly to field staff and administrators.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ═══════════ TAB 4: IMPACT (RECOGNITION & OUTCOMES, NO BOXES) ═══════════ */}
          {activeTab === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {project.event && (
                <div className="flex items-start gap-3">
                  <Award size={22} className="text-[var(--accent)] shrink-0 mt-1" />
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                      Recognition
                    </span>
                    <h4 className="text-xl font-bold text-white mt-0.5 mb-1">{project.event}</h4>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                      Evaluated for architectural feasibility, real-world utility, and domain impact.
                    </p>
                  </div>
                </div>
              )}

              {project.outcome && (
                <div className="pt-4 border-t border-white/[0.08]">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Key Outcomes
                  </h4>
                  <p className="text-neutral-300 text-base leading-relaxed font-light">
                    {project.outcome}
                  </p>
                </div>
              )}

              {galleryImages.length > 1 && (
                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-3">
                    Gallery & Documentation
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {galleryImages.slice(0, 4).map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedPhoto(src)}
                        className="h-28 rounded-lg overflow-hidden bg-neutral-900 cursor-pointer hover:opacity-85 transition-opacity"
                      >
                        <img
                          src={src}
                          alt="Gallery item"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FOOTER (NO OUTLINES, GROWING UNDERLINES) ── */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/#projects"
            className="group relative inline-flex items-center gap-1.5 py-1 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            <ArrowLeft size={13} className="text-[var(--accent)] transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group relative inline-flex items-center gap-2 py-1 text-right text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              <span>Next: {nextProject.shortTitle || nextProject.title}</span>
              <ArrowRight
                size={13}
                className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover:w-full" />
            </Link>
          )}
        </div>
      </main>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden border border-white/20">
            <img
              src={selectedPhoto}
              alt="Expanded view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/80 text-white border border-white/20 hover:bg-neutral-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
