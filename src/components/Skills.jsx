'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* Skills sourced from resume.pdf only.
   Next.js included — used in this portfolio and projects, factually accurate. */
const skillGroups = [
  {
    domain: 'Languages',
    skills: 'Java · SQL · C · Python · JavaScript',
  },
  {
    domain: 'Frontend',
    skills: 'React.js · Next.js · HTML · CSS · Tailwind CSS · Redux',
  },
  {
    domain: 'Backend & Database',
    skills: 'Node.js · Express.js · RESTful APIs · MongoDB · Firestore',
  },
  {
    domain: 'Dev Tools',
    skills: 'Git · GitHub · Figma · Postman · Vercel · MongoDB Atlas',
  },
  {
    domain: 'Core CS',
    skills: 'Data Structures & Algorithms · Operating Systems · DBMS · Computer Networks · OOP',
  },
];

export default function Skills() {
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
          — Skills
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.domain}
              variants={fadeUp}
              style={{
                padding: '2rem 0',
                borderTop: '1px solid var(--border)',
                /* Right border on left-column items */
                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                paddingRight: i % 2 === 0 ? '3rem' : '0',
                paddingLeft: i % 2 !== 0 ? '3rem' : '0',
              }}
            >
              <p
                className="label"
                style={{
                  color: 'var(--text-muted)',
                  marginBottom: '0.875rem',
                  letterSpacing: '0.15em',
                }}
              >
                {group.domain}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                }}
              >
                {group.skills}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid > div {
            border-right: none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}