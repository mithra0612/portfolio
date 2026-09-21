'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const SKILL_CATEGORIES = [
  {
    id: '01',
    title: 'DEVELOPMENT',
    accent: '#FF5722',
    countLabel: '12 SKILLS',
    subgroups: [
      {
        name: 'LANGUAGES',
        skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS'],
      },
      {
        name: 'FRAMEWORKS',
        skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'shadcn/ui'],
      },
    ],
  },
  {
    id: '02',
    title: 'DATA & BACKEND',
    accent: '#F59E0B',
    countLabel: '06 SKILLS',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'REST APIs', 'JWT'],
  },
  {
    id: '03',
    title: 'AI',
    accent: '#38BDF8',
    countLabel: '05 SKILLS',
    skills: ['LLM Integration', 'RAG', 'Prompt Engineering', 'Hugging Face', 'Ollama'],
  },
  {
    id: '04',
    title: 'TOOLS',
    accent: '#FF5722',
    countLabel: '08 SKILLS',
    skills: ['Git', 'GitHub', 'Jest', 'Cypress', 'Figma', 'VS Code', 'Datadog', 'Vercel'],
  },
  {
    id: '05',
    title: 'FOUNDATIONS',
    accent: '#94A3B8',
    countLabel: '05 SKILLS',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const activeContentRefs = useRef([]);
  const collapsedContentRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);

  const count = SKILL_CATEGORIES.length;
  // Controlled expansion ratio: active takes ~36%, each inactive panel takes ~16%
  const expandRatio = 0.36;
  const duration = 0.45;
  const ease = 'power3.out';

  const checkIsMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Only switch to vertical on small phone screens (<520px); remains horizontal on all desktop/split-screen views
      setIsMobile(window.innerWidth < 520);
    }
  }, []);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [checkIsMobile]);

  const applyDesktopLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;
      if (!panels.length || isMobile) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.5);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      const prefersReduced =
        typeof window !== 'undefined' && window.matchMedia
          ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
          : false;

      tlRef.current?.kill();

      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const activeContent = activeContentRefs.current[i];
        const collapsedContent = collapsedContentRefs.current[i];

        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            backgroundColor: isActive ? '#111111' : '#000000',
            duration: dur,
            ease,
          },
          0
        );

        if (activeContent) {
          if (isActive) {
            tl.to(
              activeContent,
              {
                opacity: 1,
                y: 0,
                duration: dur * 0.85,
                ease,
                delay: dur * 0.15,
                display: 'flex',
              },
              0
            );
          } else {
            tl.to(
              activeContent,
              {
                opacity: 0,
                y: 8,
                duration: dur * 0.35,
                ease,
                display: 'none',
              },
              0
            );
          }
        }

        if (collapsedContent) {
          if (isActive) {
            tl.to(
              collapsedContent,
              {
                opacity: 0,
                duration: dur * 0.25,
                ease,
                display: 'none',
              },
              0
            );
          } else {
            tl.to(
              collapsedContent,
              {
                opacity: 1,
                duration: dur * 0.55,
                ease,
                delay: dur * 0.2,
                display: 'flex',
              },
              0
            );
          }
        }
      });

      tlRef.current = tl;
    },
    [active, count, expandRatio, duration, ease, isMobile]
  );

  useEffect(() => {
    if (!isMobile) {
      applyDesktopLayout(!firstRunRef.current);
      firstRunRef.current = false;
    }
  }, [applyDesktopLayout, isMobile]);

  useEffect(() => {
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(count - 1);
    }
  };

  return (
    <section
      id="skills"
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: '8rem 3rem',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient lighting matching hero palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 65% 45% at 15% 30%, rgba(56, 189, 248, 0.05) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 90% 70%, rgba(245, 158, 11, 0.04) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section label — preserved exactly */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
          }}
        >
          <span
            style={{ width: '20px', height: '1px', backgroundColor: 'var(--accent)' }}
            aria-hidden="true"
          />
          <p className="label" style={{ margin: 0, letterSpacing: '0.22em' }}>
            SKILLS & EXPERTISE
          </p>
        </div>

        {/* Horizontal Technical Skills Accordion */}
        {!isMobile ? (
          <div
            ref={rootRef}
            className="skills-accordion-frame"
            role="tablist"
            aria-label="Technical skills categorized archive"
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: '490px',
              backgroundColor: '#000000',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            {SKILL_CATEGORIES.map((cat, i) => {
              const isActive = i === active;
              return (
                <div
                  key={cat.id}
                  ref={(el) => (panelRefs.current[i] = el)}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  style={{
                    flex: '1 1 0%',
                    minWidth: '0px',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: i < count - 1 ? '1px solid var(--border)' : 'none',
                    outline: 'none',
                    userSelect: 'none',
                    overflow: 'hidden',
                  }}
                  className={`skills-panel ${isActive ? 'is-active' : ''}`}
                >
                  {/* Thin structural accent indicator on top */}
                  <div
                    style={{
                      height: '2px',
                      width: '100%',
                      backgroundColor: isActive ? cat.accent : 'transparent',
                      transition: 'background-color 0.3s ease',
                    }}
                    aria-hidden="true"
                  />

                  {/* ── COLLAPSED VIEW (When inactive) ── */}
                  <div
                    ref={(el) => (collapsedContentRefs.current[i] = el)}
                    style={{
                      display: isActive ? 'none' : 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      padding: '1.75rem 1.15rem',
                      opacity: isActive ? 0 : 1,
                      pointerEvents: isActive ? 'none' : 'auto',
                    }}
                  >
                    {/* Index header */}
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {cat.id}
                      </span>
                    </div>

                    {/* Middle: Category Title */}
                    <div style={{ margin: 'auto 0' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-headline, sans-serif)',
                          fontSize: '0.92rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          lineHeight: 1.45,
                          color: 'var(--text-secondary)',
                          textTransform: 'uppercase',
                          margin: 0,
                          transition: 'color 0.2s ease',
                        }}
                        className="panel-collapsed-title"
                      >
                        {cat.title}
                      </h3>
                    </div>

                    {/* Bottom: Plain Editorial Metadata (no pills/badges) */}
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.68rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {cat.countLabel}
                      </span>
                    </div>
                  </div>

                  {/* ── EXPANDED VIEW (When active) ── */}
                  <div
                    ref={(el) => (activeContentRefs.current[i] = el)}
                    id={`panel-${cat.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${cat.id}`}
                    style={{
                      display: isActive ? 'flex' : 'none',
                      flexDirection: 'column',
                      height: '100%',
                      padding: '1.75rem 2rem',
                      opacity: isActive ? 1 : 0,
                      overflowY: 'auto',
                    }}
                  >
                    {/* Panel Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        paddingBottom: '1.15rem',
                        borderBottom: '1px solid var(--border)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: cat.accent,
                            letterSpacing: '0.1em',
                          }}
                        >
                          {cat.id}
                        </span>
                        <h3
                          style={{
                            fontFamily: 'var(--font-headline, sans-serif)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            color: 'var(--text-primary)',
                            margin: 0,
                            textTransform: 'uppercase',
                          }}
                        >
                          {cat.title}
                        </h3>
                      </div>

                      {/* Plain editorial metadata */}
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.14em',
                        }}
                      >
                        {cat.countLabel}
                      </span>
                    </div>

                    {/* Purely Typographic Editorial Content — zero icons */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {cat.subgroups ? (
                        cat.subgroups.map((group) => (
                          <div key={group.name}>
                            <p
                              style={{
                                fontFamily: 'var(--font-mono, monospace)',
                                fontSize: '0.68rem',
                                color: 'var(--text-muted)',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                              }}
                            >
                              {group.name}
                            </p>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                                columnGap: '1.25rem',
                                rowGap: '0.65rem',
                              }}
                            >
                              {group.skills.map((skillName) => (
                                <SkillTypoItem key={skillName} name={skillName} />
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                            columnGap: '1.25rem',
                            rowGap: '0.85rem',
                            marginTop: '0.5rem',
                          }}
                        >
                          {cat.skills.map((skillName) => (
                            <SkillTypoItem key={skillName} name={skillName} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Mobile Stacked Accordion (<520px only) */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              backgroundColor: '#000000',
              overflow: 'hidden',
            }}
          >
            {SKILL_CATEGORIES.map((cat, i) => {
              const isActive = i === active;
              return (
                <div
                  key={cat.id}
                  style={{
                    borderBottom: i < count - 1 ? '1px solid var(--border)' : 'none',
                    backgroundColor: isActive ? '#111111' : '#000000',
                    transition: 'background-color 0.25s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? -1 : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.25rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    aria-expanded={isActive}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.8rem',
                          color: isActive ? cat.accent : 'var(--text-muted)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {cat.id}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-headline, sans-serif)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {cat.title}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.68rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {cat.countLabel}
                      </span>
                      <span
                        style={{
                          color: isActive ? cat.accent : 'var(--text-muted)',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono, monospace)',
                        }}
                      >
                        {isActive ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {isActive && (
                    <div
                      style={{
                        padding: '0 1.25rem 1.25rem 1.25rem',
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1rem',
                      }}
                    >
                      {cat.subgroups ? (
                        cat.subgroups.map((group) => (
                          <div key={group.name} style={{ marginBottom: '1rem' }}>
                            <p
                              style={{
                                fontFamily: 'var(--font-mono, monospace)',
                                fontSize: '0.65rem',
                                color: 'var(--text-muted)',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                marginBottom: '0.5rem',
                              }}
                            >
                              {group.name}
                            </p>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                gap: '0.5rem',
                              }}
                            >
                              {group.skills.map((skillName) => (
                                <SkillTypoItem key={skillName} name={skillName} />
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                            gap: '0.65rem',
                          }}
                        >
                          {cat.skills.map((skillName) => (
                            <SkillTypoItem key={skillName} name={skillName} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .skills-panel:hover .panel-collapsed-title {
          color: var(--text-primary) !important;
        }
        .skills-panel:focus-visible {
          box-shadow: inset 0 0 0 1px var(--accent-sky);
        }
        .skill-typo-item {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding: 0.25rem 0;
          transition: color 0.15s ease, transform 0.15s ease;
        }
        .skill-typo-item:hover {
          transform: translateX(2px);
        }
        .skill-typo-item:hover .skill-name-label {
          color: #FFFFFF !important;
        }
        .skill-dash {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          color: var(--text-muted);
          user-select: none;
        }
        .skill-name-label {
          font-family: var(--font-body, sans-serif);
          font-size: 0.86rem;
          color: var(--text-secondary);
          lineHeight: 1.35;
          letter-spacing: 0.01em;
          transition: color 0.15s ease;
        }
      `}</style>
    </section>
  );
}

function SkillTypoItem({ name }) {
  return (
    <div className="skill-typo-item">
      <span className="skill-dash" aria-hidden="true">—</span>
      <span className="skill-name-label">{name}</span>
    </div>
  );
}