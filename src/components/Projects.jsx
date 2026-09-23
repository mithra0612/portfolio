'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/projectsData';
import {
  ExternalLink,
  Github,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  HeartPulse,
  Compass,
  Eye,
  Award,
  Layers,
  Cpu,
  Sparkles,
  CheckCircle2,
  FileText,
  Calendar,
  Code2,
} from 'lucide-react';

// Bespoke branding vibes and icons matching the inspiration layout
const PROJECT_METAS = {
  finvista: {
    displayName: 'FinVista',
    Icon: TrendingUp,
  },
  growthguardian: {
    displayName: 'Growth Guardian',
    Icon: ShieldCheck,
  },
  wellcare: {
    displayName: 'Wellcare',
    Icon: HeartPulse,
  },
  vanadhikar: {
    displayName: 'VanAdhikar',
    Icon: Compass,
  },
  civiclens: {
    displayName: 'Civic Lens',
    Icon: Eye,
  },
};

const CATEGORIES = ['All', 'AI/ML', 'Full-Stack'];

const CASE_STUDY_TABS = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'solution', label: 'Problem & Solution', icon: Layers },
  { id: 'tech', label: 'Tech Stack', icon: Cpu },
  { id: 'features', label: 'AI & Core Features', icon: Sparkles },
  { id: 'impact', label: 'Impact & Outcome', icon: Award },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSlug, setSelectedSlug] = useState('finvista');
  const [activeTab, setActiveTab] = useState('overview');
  const caseStudyRef = useRef(null);

  // Filter projects by category tab
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI/ML') {
      return (
        project.tech.some((t) =>
          ['Python', 'LightGBM', 'Hugging Face', 'LangChain', 'RAG', 'PyTorch', 'scikit-learn', 'OpenCV', 'Tesseract OCR'].some(
            (ai) => t.toLowerCase().includes(ai.toLowerCase())
          )
        ) || project.aiCapabilities
      );
    }
    if (activeCategory === 'Full-Stack') {
      return project.tech.some((t) =>
        ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firestore'].some(
          (fs) => t.toLowerCase().includes(fs.toLowerCase())
        )
      );
    }
    return true;
  });

  const selectedProject =
    projects.find((p) => p.slug === selectedSlug) || projects[0];
  const selectedMeta = PROJECT_METAS[selectedProject.slug] || {
    displayName: selectedProject.shortTitle,
    Icon: Code2,
  };
  const SelectedIcon = selectedMeta.Icon;

  const scrollToCaseStudy = (slug) => {
    setSelectedSlug(slug);
    if (caseStudyRef.current) {
      caseStudyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to extract feature sections for Solution vs AI
  const getProjectSections = (project) => {
    const sections = [];
    const keys = Object.keys(project);
    keys.forEach((key) => {
      if (
        Array.isArray(project[key]) &&
        key !== 'tech' &&
        key !== 'gallery'
      ) {
        sections.push({ key, items: project[key] });
      }
    });
    return sections;
  };

  const projectSections = getProjectSections(selectedProject);
  const solutionSections = projectSections.filter(
    (s) =>
      !s.key.toLowerCase().includes('ai') &&
      !s.key.toLowerCase().includes('query') &&
      !s.key.toLowerCase().includes('intelligence')
  );
  const aiSections = projectSections.filter(
    (s) =>
      s.key.toLowerCase().includes('ai') ||
      s.key.toLowerCase().includes('query') ||
      s.key.toLowerCase().includes('intelligence')
  );

  return (
    <div
      id="projects"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 50% at 85% 25%, rgba(56, 189, 248, 0.035) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 15% 75%, rgba(255, 87, 34, 0.025) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '6rem 1.5rem 8rem',
          position: 'relative',
        }}
      >
        {/* ── SECTION HEADER & CATEGORY TABS ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[var(--text-secondary)] uppercase">
                FEATURED WORK
              </p>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none m-0 font-sans select-none">
              PROJECTS
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md self-start md:self-end">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── EDITORIAL 2-COLUMN PROJECT GALLERY (INSPO REPLICATION) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const meta = PROJECT_METAS[project.slug] || {
                displayName: project.shortTitle,
                Icon: Code2,
              };
              const ProjectIcon = meta.Icon;
              const isSelected = selectedSlug === project.slug;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col cursor-pointer"
                  onClick={() => window.open(`/projects/${project.slug}`, '_blank')}
                >
                  {/* ── 1. DOMINANT IMAGE CONTAINER WITH INSPO-STYLE BRAND LOCKUP HOVER ── */}
                  <div className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[22px] bg-[#090b10] border border-white/[0.07] block outline-none group-hover:border-white/20 transition-colors duration-300">
                    <img
                      src={project.thumbnail}
                      alt={`${meta.displayName} preview`}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:blur-[6px]"
                      onError={(e) => {
                        e.target.style.opacity = '0.3';
                      }}
                    />

                    {/* Mild darkening backdrop on hover */}
                    <div
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* INSPO BRAND LOCKUP: Icon on left, Title Case Name on right */}
                    <div
                      className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-95 group-hover:scale-100"
                      aria-hidden="true"
                    >
                      <div className="flex items-center justify-center gap-3.5 sm:gap-4 select-none">
                        <ProjectIcon
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white shrink-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                          strokeWidth={2.4}
                        />
                        <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                          {meta.displayName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── 2. MINIMALIST DETAILS: TITLE, INTRO ON LEFT, BUTTONS ON RIGHT ── */}
                  <div className="mt-4 flex flex-col flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug m-0 group-hover:text-[var(--accent)] transition-colors">
                      {meta.displayName}
                    </h3>

                    {/* Row with Intro on the left and Buttons on the right */}
                    <div
                      className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Clean one-liner intro line on the left */}
                      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed m-0 flex-1">
                        {project.tagline}
                      </p>

                      {/* Action Links on the right (No outline, growing underline left-to-right) */}
                      <div className="flex items-center gap-5 shrink-0 self-start sm:self-center">
                        <Link
                          href={`/projects/${project.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex items-center gap-1.5 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                        >
                          <span>Case Study</span>
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/btn:w-full" />
                        </Link>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex items-center gap-1.5 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                          >
                            <span>Live Demo</span>
                            <ExternalLink
                              size={13}
                              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/btn:w-full" />
                          </a>
                        )}

                        {project.github && !project.live && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex items-center gap-1.5 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                          >
                            <span>GitHub</span>
                            <Github
                              size={13}
                              className="transition-transform duration-300 group-hover/btn:scale-110"
                            />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/btn:w-full" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── 3. DIRECT FULL CASE STUDY (NO POP UP) ── */}
        <div ref={caseStudyRef} className="mt-24 sm:mt-32 pt-16 border-t border-white/[0.1]">
          {/* Eyebrow and Quick Project Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-px bg-[var(--accent)]" />
                <span className="font-mono text-xs tracking-[0.24em] text-[var(--accent)] uppercase font-semibold">
                  DETAILED CASE STUDY
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight m-0">
                {selectedProject.title}
              </h3>
            </div>

            {/* Quick Switcher across all projects */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {projects.map((p) => {
                const isCurrent = p.slug === selectedSlug;
                const meta = PROJECT_METAS[p.slug];
                const Icon = meta?.Icon || Code2;
                return (
                  <button
                    key={p.slug}
                    onClick={() => setSelectedSlug(p.slug)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
                      isCurrent
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{meta?.displayName || p.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Links Bar: Badges, Year, Live Link, View Repo */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#090b10] border border-white/[0.08] mb-8">
            <div className="flex flex-wrap items-center gap-3">
              {/* Award / Hackathon Badge (Only in Detailed Case Study) */}
              {selectedProject.event && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold">
                  <Award size={14} className="text-amber-400" />
                  <span>{selectedProject.event}</span>
                </div>
              )}

              {selectedProject.year && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
                  <Calendar size={13} />
                  <span>{selectedProject.year}</span>
                </div>
              )}
            </div>

            {/* Repository & Live Demo with Icons (No outline, growing underline) */}
            <div className="flex items-center gap-6">
              <Link
                href={`/projects/${selectedProject.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/full relative inline-flex items-center gap-2 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
              >
                <ExternalLink size={14} className="transition-transform duration-300 group-hover/full:translate-x-0.5 group-hover/full:-translate-y-0.5" />
                <span>Open Full Page</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/full:w-full" />
              </Link>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/repo relative inline-flex items-center gap-2 py-1 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                >
                  <Github size={15} className="transition-transform duration-300 group-hover/repo:scale-110" />
                  <span>View Repo</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left group-hover/repo:w-full" />
                </a>
              )}

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/live relative inline-flex items-center gap-2 py-1 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors outline-none cursor-pointer bg-transparent border-none p-0"
                >
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                  <span>Live Demo</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out origin-left group-hover/live:w-full" />
                </a>
              )}
            </div>
          </div>

          {/* Showcase Project Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] overflow-hidden bg-[#090b10] border border-white/[0.08] mb-10 shadow-2xl relative">
            <img
              src={selectedProject.thumbnail}
              alt={`${selectedProject.title} showcase`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-neutral-400 text-xs uppercase font-mono tracking-wider mb-1">
                  CASE STUDY ARCHIVE
                </p>
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight m-0">
                  {selectedMeta.displayName}
                </h4>
              </div>
            </div>
          </div>

          {/* ── CASE STUDY CATEGORY TABS ── */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.1] pb-4 mb-8">
            {CASE_STUDY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <TabIcon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ── TAB CONTENT DISPLAY ── */}
          <div className="bg-[#090b10] rounded-[24px] border border-white/[0.08] p-6 sm:p-10 min-h-[300px]">
            <AnimatePresence mode="wait">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                      About the Project
                    </h5>
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {selectedProject.event && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-2xl">
                      <p className="font-mono text-xs uppercase text-neutral-400 mb-1">
                        Hackathon & Recognition
                      </p>
                      <p className="text-white font-medium text-base">
                        {selectedProject.event} ({selectedProject.year})
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 2: PROBLEM & SOLUTION */}
              {activeTab === 'solution' && (
                <motion.div
                  key="solution"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {solutionSections.length > 0 ? (
                    solutionSections.map((sec) => (
                      <div key={sec.key}>
                        <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3 capitalize">
                          {sec.key.replace(/([A-Z])/g, ' $1').trim()}
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {sec.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-neutral-300 text-sm leading-relaxed"
                            >
                              <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-neutral-400 text-sm">
                      Details for problem & solution architecture available in project documentation.
                    </p>
                  )}
                </motion.div>
              )}

              {/* TAB 3: TECH STACK */}
              {activeTab === 'tech' && (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">
                    Technologies & Frameworks
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 text-white font-mono text-xs transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: AI & CORE FEATURES */}
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {aiSections.length > 0 ? (
                    aiSections.map((sec) => (
                      <div key={sec.key}>
                        <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3 capitalize">
                          {sec.key.replace(/([A-Z])/g, ' $1').trim()}
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {sec.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-neutral-300 text-sm leading-relaxed"
                            >
                              <Sparkles size={16} className="text-sky-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 rounded-xl bg-white/[0.03] text-neutral-400 text-sm">
                      Core intelligent systems integrated seamlessly across the application architecture.
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 5: IMPACT & OUTCOME */}
              {activeTab === 'impact' && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                    Measurable Impact & Results
                  </h5>
                  <p className="text-neutral-200 text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
                    {selectedProject.outcome}
                  </p>

                  {selectedProject.event && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
                      <Award size={18} className="text-amber-400 shrink-0" />
                      <span>Recognized as: <strong>{selectedProject.event}</strong></span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}