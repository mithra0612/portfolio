'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
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
  ArrowLeft,
  ArrowRight,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  FileText,
  Calendar,
  Code2,
} from 'lucide-react';

const TABS = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'solution', label: 'Problem & Solution', icon: Layers },
  { id: 'ai', label: 'AI & Architecture', icon: Sparkles },
  { id: 'tech', label: 'Tech Stack', icon: Cpu },
  { id: 'impact', label: 'Impact & Archive', icon: Award },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = getProjectBySlug(slug);

  const [activeTab, setActiveTab] = useState('overview');

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  // Filter structured detail sections available for this specific project
  const structuredSections = DETAIL_SECTION_ORDER.filter(
    (key) => project[key] && key !== 'overview' && key !== 'outcome'
  );

  // Group sections into Solution vs AI based on keys
  const solutionSections = structuredSections.filter(
    (key) =>
      !key.toLowerCase().includes('ai') &&
      !key.toLowerCase().includes('query') &&
      !key.toLowerCase().includes('intelligence')
  );

  const aiSections = structuredSections.filter(
    (key) =>
      key.toLowerCase().includes('ai') ||
      key.toLowerCase().includes('query') ||
      key.toLowerCase().includes('intelligence')
  );

  // Gallery photos
  const additionalVisuals = (project.gallery || []).filter(
    (img) => img !== project.thumbnail
  );

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-base)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient glow matching hero palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 40% at 85% 15%, rgba(56, 189, 248, 0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 15% 65%, rgba(255, 87, 34, 0.03) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Top Editorial Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase font-semibold">
              {project.number} / 05
            </span>
          </div>
        </div>
      </header>

      {/* Main Case Study Article */}
      <main className="max-w-[1280px] mx-auto px-6 sm:px-8 py-10 sm:py-14">
        {/* ── PROJECT HEADER ── */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.event && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                <Award size={13} /> {project.event}
              </span>
            )}
            {project.year && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-neutral-400 bg-white/[0.04] border border-white/[0.08]">
                <Calendar size={13} /> {project.year}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
            {project.title}
          </h1>

          {project.tagline && (
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl font-light">
              {project.tagline}
            </p>
          )}

          {/* Direct Action Links Row: View Repo + Live Demo */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 pt-6 border-t border-white/[0.08]">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Github size={14} /> View Repository
              </a>
            )}
          </div>
        </div>

        {/* ── PROJECT SHOWCASE IMAGE ── */}
        <div className="relative w-full aspect-[16/9] max-h-[580px] overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl mb-12">
          <img
            src={project.thumbnail}
            alt={`${project.title} showcase artwork`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── INTERACTIVE CATEGORY TABS ── */}
        <div className="mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-none">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'text-white font-bold bg-white/[0.1] border border-white/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[var(--accent)]' : 'text-neutral-400'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── DYNAMIC TAB CONTENT CONTAINER ── */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      About the Project
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Overview & Mission
                  </h3>
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>

                {project.event && (
                  <div className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-1">
                        Hackathon & Industry Recognition
                      </p>
                      <h4 className="text-lg font-bold text-white mb-1">{project.event}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Evaluated and recognized for technical architecture, practical execution, and real-world applicability.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* 2. PROBLEM & SOLUTION TAB */}
            {activeTab === 'solution' && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutionSections.length > 0 ? (
                    solutionSections.map((sectionKey) => {
                      const value = project[sectionKey];
                      const label = SECTION_LABELS[sectionKey] || sectionKey;
                      if (!value) return null;

                      return (
                        <div
                          key={sectionKey}
                          className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col"
                        >
                          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                            {label}
                          </p>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                            Solution Architecture
                          </h4>

                          {typeof value === 'string' ? (
                            <p className="text-neutral-300 text-sm leading-relaxed">{value}</p>
                          ) : (
                            <ul className="space-y-3 text-sm text-neutral-300 flex-1">
                              {value.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <CheckCircle2
                                    size={16}
                                    className="text-[var(--accent)] flex-shrink-0 mt-0.5"
                                  />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-2 bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-8">
                      <p className="text-neutral-300 leading-relaxed">{project.overview}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* 3. AI & ARCHITECTURE TAB */}
            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-[#38BDF8]" />
                    <p className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                      AI Pipelines & Intelligent Systems
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Intelligent Capabilities
                  </h3>

                  {aiSections.length > 0 ? (
                    <div className="space-y-6">
                      {aiSections.map((sectionKey) => {
                        const value = project[sectionKey];
                        const label = SECTION_LABELS[sectionKey] || sectionKey;
                        if (!value) return null;

                        return (
                          <div key={sectionKey} className="border-t border-white/[0.06] pt-5 first:border-0 first:pt-0">
                            <h4 className="text-base font-bold text-white mb-3 uppercase font-mono text-sm tracking-wider">
                              {label}
                            </h4>
                            {typeof value === 'string' ? (
                              <p className="text-neutral-300 text-sm leading-relaxed">{value}</p>
                            ) : (
                              <ul className="space-y-2.5 text-sm text-neutral-300">
                                {value.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <span className="text-[#38BDF8] mt-1 font-bold">›</span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-neutral-300 leading-relaxed">
                      AI features and automated intelligence workflows integrated across user interactions.
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* 4. TECH STACK TAB */}
            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu size={16} className="text-[var(--accent)]" />
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      Technical Architecture
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Technologies & Dependencies
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {project.tech.map((skill) => (
                      <div
                        key={skill}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 hover:border-white/20 transition-colors"
                      >
                        <Code2 size={16} className="text-[var(--accent)] flex-shrink-0" />
                        <span className="font-mono text-xs sm:text-sm text-neutral-200 font-medium truncate">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. IMPACT & ARCHIVE TAB */}
            {activeTab === 'impact' && (
              <motion.div
                key="impact"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {project.outcome && (
                  <div className="bg-[#0c0f16] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                      Measured Outcomes
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      Real-World Impact
                    </h3>
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                      {project.outcome}
                    </p>
                  </div>
                )}

                {/* Additional Gallery Photos / Hackathon Evidence */}
                {additionalVisuals.length > 0 && (
                  <div className="space-y-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      Documentation & Archive Photos
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {additionalVisuals.map((src, i) => (
                        <div
                          key={i}
                          className="h-64 rounded-xl overflow-hidden border border-white/10 bg-black"
                        >
                          <img
                            src={src}
                            alt={`${project.shortTitle} documentation ${i + 1}`}
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
        </div>

        {/* ── NEXT PROJECT FOOTER NAVIGATION ── */}
        {nextProject && (
          <div className="mt-20 pt-10 border-t border-white/[0.08] flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              ← Back to All Projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Next Project
                </p>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
