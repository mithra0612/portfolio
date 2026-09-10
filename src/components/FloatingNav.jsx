'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Work',         href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Contact',      href: '#contact' },
  { label: 'Achievements', href: '/achievements' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

export default function FloatingNav() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Hide on scroll down, show on scroll up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(y < lastScrollY || y < 80);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  /* Track active section */
  useEffect(() => {
    const onScroll = () => {
      const current = SECTION_IDS.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (href) => {
    setIsMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(href);
    }
  };

  const isActive = (href) => {
    if (href.startsWith('#')) return activeSection === href.slice(1);
    return false;
  };

  const navBg = lastScrollY > 80
    ? 'rgba(8, 8, 8, 0.92)'
    : 'transparent';

  return (
    <>
      {/* Desktop nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 3rem',
          backgroundColor: navBg,
          borderBottom: lastScrollY > 80 ? '1px solid var(--border)' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
        }}
        className="nav-desktop"
      >
        {/* Name / logo mark */}
        <button
          onClick={() => navigate('#hero')}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          MM.
        </button>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {NAV_ITEMS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => navigate(href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.125rem 0',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive(href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderBottom: isActive(href) ? '1px solid var(--accent)' : '1px solid transparent',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={e => {
                if (!isActive(href)) e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                if (!isActive(href)) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile: hamburger button */}
      <button
        onClick={() => setIsMobileOpen(v => !v)}
        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.5rem',
          zIndex: 60,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
        }}
        className="nav-mobile-btn"
      >
        <span style={{
          display: 'block', width: '22px', height: '1px',
          background: 'var(--text-primary)',
          transform: isMobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          transition: 'transform 0.2s ease',
        }} />
        <span style={{
          display: 'block', width: '22px', height: '1px',
          background: 'var(--text-primary)',
          opacity: isMobileOpen ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }} />
        <span style={{
          display: 'block', width: '22px', height: '1px',
          background: 'var(--text-primary)',
          transform: isMobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          transition: 'transform 0.2s ease',
        }} />
      </button>

      {/* Mobile menu panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '260px',
          backgroundColor: 'var(--bg-raised)',
          borderLeft: '1px solid var(--border)',
          zIndex: 55,
          padding: '5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          transform: isMobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
        className="nav-mobile-panel"
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <button
            key={label}
            onClick={() => navigate(href)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: '1px solid var(--border)',
              cursor: 'pointer',
              padding: '1rem 0',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: isActive(href) ? 'var(--accent)' : 'var(--text-secondary)',
              transition: 'color 0.15s ease',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}