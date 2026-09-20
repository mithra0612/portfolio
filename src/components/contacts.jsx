'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, FileText, Copy, CheckCheck, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mithramadhu005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
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
          — Contact
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: statement + email as anchor */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              Open to new<br />opportunities.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '420px',
              }}
            >
              Available for full-time roles, internships, and meaningful
              engineering projects. Response within 24 hours.
            </p>

            {/* Email — functional, no decoration */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p className="label" style={{ color: 'var(--text-muted)' }}>Email</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a
                  href="mailto:mithramadhu005@gmail.com"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  mithramadhu005@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: copied ? 'var(--accent)' : 'var(--text-muted)',
                    transition: 'color 0.15s ease',
                    lineHeight: 0,
                    padding: 0,
                  }}
                >
                  {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Social links — Lucide React icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '0.5rem' }}>
              {[
                {
                  label: 'GitHub',
                  href: 'https://github.com/mithra0612',
                  icon: <Github size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/mithra0612/',
                  icon: <Linkedin size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'LeetCode',
                  href: 'https://leetcode.com/u/mithra_612',
                  icon: <Code2 size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'Resume',
                  href: '/resume.pdf',
                  icon: <FileText size={21} strokeWidth={1.9} />,
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-white hover:text-white/70 transition-all duration-200 hover:scale-115 active:scale-95 flex items-center justify-center p-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: logistics */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            {[
              {
                label: 'Location',
                value: 'Tamil Nadu, India',
                sub: 'IST (UTC +5:30)',
              },
              {
                label: 'Response',
                value: 'Within 24 hours',
                sub: null,
              },
              {
                label: 'Schedule',
                value: 'Book a 30-min call',
                href: 'https://cal.com/madhumithra-m/30min?user=madhumithra-m',
              },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--text-primary)',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    {item.value} ↗
                  </a>
                ) : (
                  <>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem', letterSpacing: '0.05em' }}>
                        {item.sub}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}