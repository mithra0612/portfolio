'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projectsData';

export default function Projects() {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient lighting harmonized with hero palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 50% at 85% 25%, rgba(56, 189, 248, 0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 15% 75%, rgba(255, 87, 34, 0.03) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '7rem 2rem 9rem',
          position: 'relative',
        }}
      >
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '4rem',
          }}
        >
          <span
            style={{
              width: '20px',
              height: '1px',
              backgroundColor: 'var(--accent)',
            }}
            aria-hidden="true"
          />
          <p className="label" style={{ margin: 0, letterSpacing: '0.22em' }}>
            SELECTED WORK & PROJECTS
          </p>
        </motion.div>

        {/* 2-Column Editorial Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 lg:gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block w-full outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] transition-shadow duration-300"
                aria-label={`View project details for ${project.shortTitle}`}
              >
                {/* ── 1. DOMINANT IMAGE CONTAINER ── */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-surface)]">
                  <img
                    src={project.thumbnail}
                    alt={`${project.shortTitle} preview artwork`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                    onError={(e) => {
                      e.target.style.opacity = '0.3';
                    }}
                  />

                  {/* ── 2. SUBTLE HOVER OVERLAY ── */}
                  <div
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* ── 3. OVER-IMAGE EDITORIAL TITLE ON HOVER ── */}
                  <div
                    className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="transform translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2">
                      <span className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
                        {project.shortTitle}
                      </span>
                      <span className="text-white/80 font-mono text-lg sm:text-xl lg:text-2xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── 4. RESTRAINED EDITORIAL INFO BELOW IMAGE ── */}
                <div className="mt-4 sm:mt-5 flex items-start gap-3 sm:gap-4">
                  {/* Subtle editorial index */}
                  <span
                    className="font-mono text-xs sm:text-sm text-[var(--text-muted)] tracking-wider pt-0.5 select-none"
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>

                  {/* Project Title & Short Tagline */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight uppercase group-hover:text-white transition-colors duration-200">
                      {project.shortTitle}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 sm:mt-1 leading-snug line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}