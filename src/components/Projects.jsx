'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Code2,
} from 'lucide-react';

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

export default function Projects() {
  const router = useRouter();

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
        {/* ── SECTION HEADER ── */}
        <div className="mb-12 sm:mb-16">
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

        {/* ── EDITORIAL 2-COLUMN PROJECT GALLERY ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => {
              const meta = PROJECT_METAS[project.slug] || {
                displayName: project.shortTitle,
                Icon: Code2,
              };
              const ProjectIcon = meta.Icon;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col cursor-pointer"
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  {/* Image Container with Brand Lockup on Hover */}
                  <div className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[22px] bg-[#090b10] border border-white/[0.07] block outline-none group-hover:border-white/20 transition-colors duration-300">
                    <img
                      src={project.thumbnail}
                      alt={`${meta.displayName} preview`}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:blur-[6px]"
                      onError={(e) => {
                        e.target.style.opacity = '0.3';
                      }}
                    />

                    {/* Darkening backdrop on hover */}
                    <div
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Brand Lockup */}
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

                  {/* Minimalist Details: Title, Intro on Left, Buttons on Right */}
                  <div className="mt-4 flex flex-col flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug m-0 group-hover:text-[var(--accent)] transition-colors">
                      {meta.displayName}
                    </h3>

                    {/* Row with Intro on the left and Buttons on the right */}
                    <div
                      className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* One-liner Tagline */}
                      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed m-0 flex-1">
                        {project.tagline}
                      </p>

                      {/* Action Links on the right (No outline, growing underline) */}
                      <div className="flex items-center gap-5 shrink-0 self-start sm:self-center">
                        <Link
                          href={`/projects/${project.slug}`}
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
      </div>
    </div>
  );
}