'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  getProjectBySlug,
  getNextProject,
  SECTION_LABELS,
  DETAIL_SECTION_ORDER,
} from '@/lib/projectsData';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  // Filter structured detail sections available for this specific project
  const structuredSections = DETAIL_SECTION_ORDER.filter(
    (key) => project[key] && key !== 'overview' && key !== 'outcome'
  );

  // Gallery photos (excluding primary thumbnail if duplicate)
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
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <Link
            href="/#projects"
            className="label"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            ← ALL PROJECTS
          </Link>

          <span
            className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase select-none"
            aria-hidden="true"
          >
            {project.number} / 05
          </span>
        </div>
      </header>

      {/* Main Case Study Article */}
      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '3.5rem 2rem 8rem' }}>
        {/* Editorial Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ marginBottom: '3.5rem' }}
        >
          {/* Subtle index & Event */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{ width: '16px', height: '1px', backgroundColor: 'var(--accent)' }}
              aria-hidden="true"
            />
            <p className="label" style={{ margin: 0 }}>
              CASE STUDY · {project.number}
              {project.year ? ` · ${project.year}` : ''}
            </p>
          </div>

          {/* Project Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}
          >
            {project.title}
          </h1>

          {/* Tagline / Subtitle */}
          {project.tagline && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '850px',
              }}
            >
              {project.tagline}
            </p>
          )}

          {/* Metadata Row: Rendered ONLY if fields exist */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.5rem 2.5rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {project.event && (
              <div>
                <p className="label" style={{ margin: 0, marginBottom: '0.25rem' }}>
                  Recognition
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', margin: 0 }}
                >
                  {project.event}
                </p>
              </div>
            )}

            {project.year && (
              <div>
                <p className="label" style={{ margin: 0, marginBottom: '0.25rem' }}>
                  Year
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', margin: 0 }}
                >
                  {project.year}
                </p>
              </div>
            )}

            <div>
              <p className="label" style={{ margin: 0, marginBottom: '0.25rem' }}>
                Availability
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: '0.8125rem',
                  color: project.live ? 'var(--accent-sky)' : 'var(--accent)',
                  margin: 0,
                }}
              >
                {project.live ? 'Live Deployment' : 'Source Available'}
              </p>
            </div>

            {/* Links rendered if existing */}
            {(project.live || project.github) && (
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '1.75rem' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label"
                    style={{
                      color: 'var(--text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label"
                    style={{
                      color: 'var(--text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    GitHub Source ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Cinematic Large Project Hero Artwork */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: '4.5rem',
            width: '100%',
            aspectRatio: '16/9',
            maxHeight: '560px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          <img
            src={project.thumbnail}
            alt={`${project.title} hero artwork`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Editorial Case Study Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Column: Overview & Specific Structured Capabilities */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            {/* Overview */}
            {project.overview && (
              <section style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <p className="label" style={{ marginBottom: '1.25rem' }}>
                  OVERVIEW
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {project.overview}
                </p>
              </section>
            )}

            {/* Project-Specific Structured Sections (Adapts dynamically without fabrication) */}
            {structuredSections.map((sectionKey) => {
              const value = project[sectionKey];
              const label = SECTION_LABELS[sectionKey] || sectionKey;
              if (!value) return null;

              return (
                <section
                  key={sectionKey}
                  style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}
                >
                  <p className="label" style={{ marginBottom: '1.25rem' }}>
                    {label.toUpperCase()}
                  </p>

                  {typeof value === 'string' ? (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {value}
                    </p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {value.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            paddingLeft: '1.25rem',
                            borderLeft: '1px solid var(--border)',
                          }}
                        >
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.9375rem',
                              lineHeight: 1.7,
                              color: 'var(--text-secondary)',
                              margin: 0,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}

            {/* Impact / Outcome Section */}
            {project.outcome && (
              <section style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <p className="label" style={{ marginBottom: '1.25rem' }}>
                  IMPACT & OUTCOME
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {project.outcome}
                </p>
              </section>
            )}

            {/* Additional Project Photos / Hackathon Evidence (only if existing) */}
            {additionalVisuals.length > 0 && (
              <section style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <p className="label" style={{ marginBottom: '1.5rem' }}>
                  PROJECT ARCHIVE & DOCUMENTATION
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {additionalVisuals.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        height: '200px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-surface)',
                      }}
                    >
                      <img
                        src={src}
                        alt={`${project.shortTitle} documentation ${i + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column: Technology Stack (Editorial typography, NO pills) */}
          <div className="lg:col-span-4">
            <div
              style={{
                position: 'sticky',
                top: '6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
              }}
            >
              {/* Technology Stack: Clean editorial typography with · separators */}
              {project.tech && project.tech.length > 0 && (
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                  <p className="label" style={{ marginBottom: '1.25rem' }}>
                    TECHNOLOGY STACK
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-neutral-200 leading-relaxed">
                    {project.tech.map((skill, sIdx) => (
                      <span key={skill} className="inline-flex items-center gap-3">
                        <span className="text-neutral-200 hover:text-white transition-colors duration-150 cursor-default">
                          {skill}
                        </span>
                        {sIdx < project.tech.length - 1 && (
                          <span className="text-neutral-600 select-none" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Links Sidebar Section */}
              {(project.live || project.github) && (
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                  <p className="label" style={{ marginBottom: '1.25rem' }}>
                    PROJECT LINKS
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                      >
                        Live Application ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                      >
                        GitHub Repository ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Case Study Navigation: Next Project & Return */}
        <section
          style={{
            marginTop: '8rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              smDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2.5rem',
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: '0.75rem' }}>
                CONTINUE EXPLORING
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex flex-col"
                style={{ textDecoration: 'none' }}
              >
                <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-1">
                  NEXT PROJECT ({nextProject.number})
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] group-hover:text-white transition-colors duration-200 inline-flex items-center gap-3">
                  {nextProject.shortTitle}
                  <span className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </div>

            <div style={{ alignSelf: 'flex-start' }}>
              <Link
                href="/#projects"
                className="label inline-flex items-center gap-2"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                ← RETURN TO ALL PROJECTS
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
