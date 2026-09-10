'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* All content verified against resume.pdf */
const roles = [
  {
    company: 'eGaiSoft',
    role: 'Software Engineering Intern',
    period: 'Sept 2025 – Oct 2025',
    location: 'Remote',
    description:
      'Developed the frontend interface for an automated body measurement platform — image upload workflow, user inputs, and real-time measurement display. Designed backend REST APIs that integrated the ML-based measurement calculation system with the frontend.',
    stack: 'React.js · Node.js · Express.js · RESTful APIs',
  },
  {
    company: 'eGaiSoft',
    role: 'UI/UX Intern',
    period: 'Nov 2023 – Dec 2023',
    location: 'Remote',
    description:
      'Designed the user interface for Elai Fashion, a tailoring service platform — covering login and sign-up flows, clothing selection, and the checkout experience.',
    stack: 'Figma',
  },
];

export default function Experience() {
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
          — Experience
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {roles.map((entry, i) => (
            <motion.div key={i} variants={fadeUp}>
              {/* Top rule */}
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  padding: '2.5rem 0',
                  alignItems: 'start',
                }}
                className="exp-row"
              >
                {/* Left: company, role, description, stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '680px' }}>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        letterSpacing: '-0.02em',
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                      }}
                    >
                      {entry.company}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.25rem',
                      }}
                    >
                      {entry.role}
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {entry.description}
                  </p>

                  <p
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {entry.stack}
                  </p>
                </div>

                {/* Right: period + location */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      lineHeight: 1.8,
                    }}
                  >
                    {entry.period}
                  </p>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {entry.location}
                  </p>
                </div>
              </div>

              {/* Bottom rule on last item */}
              {i === roles.length - 1 && (
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          .exp-row > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
