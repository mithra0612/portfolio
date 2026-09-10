'use client';

import HeroBackground from './HeroBackground';
import KineticGrid from './KineticGrid';
import SocialLinks from './portfolio/social-links';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: 'var(--font-headline)',
      }}
    >
      {/* ── SILK WEBGL BACKGROUND ── */}
      <HeroBackground />

      {/* ── KINETIC GRID OVERLAY ── */}
      <KineticGrid />

      {/* ── MAIN FOREGROUND CONTAINER (Anchored to bottom like reference) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '0 2.8vw 2.2vh',
          boxSizing: 'border-box',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* ── TOP LABEL: CS UG · 2027 (Matches "EST. 2021") ── */}
        <div
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(0.72rem, 0.9vw, 1rem)',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '0.8vw',
            color: '#ffffff',
          }}
        >
          CS UG · 2027
        </div>

        {/* ── ROW 1: "Madhumithra" + Personality List ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {/* Main Headline Line 1 (Matches "Strategic") */}
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(3.5rem, 12.8vw, 13.5rem)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              margin: 0,
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}
          >
            Madhumithra
          </h1>

          {/* Right-Side Capabilities / Personality List (Matches "Brand Identity...") */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              marginTop: '-1.2vw', // shifted up
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            {[
              'Software Engineering',
              'AI Integration & Tools',
              'DSA Problem Solving',
              'Public Speaking & Poetry',
            ].map(item => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(0.75rem, 1.05vw, 1.18rem)',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROW 2: Bio Statement + Limelight Social Dock (Left) & "Software Engineer" (Right) ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            marginTop: 'clamp(0.4rem, 1.2vw, 1.6rem)',
            gap: '1rem',
          }}
        >
          {/* Left: One-line Statement + Limelight Links Dock */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 'clamp(0.4rem, 0.75vw, 0.9rem)',
              maxWidth: 'clamp(260px, 32vw, 440px)',
              flexShrink: 0,
              paddingBottom: '0.2vw',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(0.7rem, 0.82vw, 0.92rem)',
                fontWeight: 500,
                lineHeight: 1.45,
                color: 'rgba(255, 255, 255, 0.82)',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Building intelligent software at the intersection of engineering, AI, and creativity.
            </p>

            <SocialLinks />
          </div>

          {/* Main Headline Line 2 — "Software Engineer" */}
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(2.5rem, 8.4vw, 8.6rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              margin: 0,
              color: '#ffffff',
              textAlign: 'right',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Software Engineer
          </h1>
        </div>
      </div>
    </section>
  );
}
