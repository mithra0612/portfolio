'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-base)',
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 3rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
        className="footer-inner"
      >
        {/* Left: identity + location */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
            }}
          >
            Madhumithra M.
          </p>
          <p
            className="font-mono"
            style={{
              fontSize: '0.6875rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
            }}
          >
            Tamil Nadu, India · IST (UTC +5:30)
          </p>
        </div>

        {/* Center: copyright */}
        <p
          className="font-mono"
          style={{
            fontSize: '0.6875rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
          }}
        >
          © {new Date().getFullYear()} Madhumithra M.
        </p>

        {/* Right: links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/mithra0612' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mithra0612/' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/mithra_612' },
            { label: 'Resume', href: '/resume.pdf' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
