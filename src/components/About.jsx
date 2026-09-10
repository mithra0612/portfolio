'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: '8rem 3rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section label */}
        <motion.p
          className="label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: '4rem' }}
        >
          — About
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* ── LEFT: Photo + Education ── */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Profile photo */}
            <div
              style={{
                width: '260px',
                height: '320px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/profile.png"
                alt="Madhumithra M."
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
                  display: 'block',
                }}
              />
            </div>

            {/* Education — below photo, no card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                Bannari Amman Institute<br />of Technology
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  marginTop: '0.15rem',
                }}
              >
                Computer Science & Engineering
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  marginTop: '0.25rem',
                }}
              >
                2023 – 2027 · CGPA 9.04 / 10
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Bio + Stats + Link ── */}
          <motion.div
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            {/* Bio */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                }}
              >
                A full-stack developer and CS student, versed in building end-to-end
                web applications with the MERN stack and incorporating AI into
                practical systems. Comfortable across the stack — from backend APIs
                to frontend experiences — with a habit of solving problems through
                logic, structure, and care.
              </p>
            </motion.div>

            {/* Stats — 2×2 grid, text-only */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem 3rem',
              }}
            >
              {[
                { value: '550+', label: 'DSA Problems Solved' },
                { value: '5',    label: 'Projects Shipped' },
                { value: '5',    label: 'Competition Results' },
                { value: '3',    label: 'Published Poems' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.375rem',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Link */}
            <motion.div variants={fadeUp}>
              <a
                href="/achievements"
                className="label"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color 0.15s ease',
                  letterSpacing: '0.15em',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                View Achievements →
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile responsive: stack columns */}
      <style>{`
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .about-grid > div:first-child {
            align-items: center;
          }
          .about-grid img {
            width: 220px !important;
            height: 270px !important;
          }
        }
      `}</style>
    </section>
  );
}