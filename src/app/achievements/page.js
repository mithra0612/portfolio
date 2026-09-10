"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    description:
      "Finalist — top 5 team among 500+ teams across India. Problem statement for the Department of Posts.",
    photos: ["/sih1.jpg", "/sih2.jpg", "/sih3.jpg", "/sih4.jpg"],
  },
  {
    title: "Hack'IT 25",
    description:
      "1st Place — Anna University, College of Engineering, Guindy, Chennai. Cash prize of ₹12,000.",
    photos: ["/hackit1.jpg", "/hackit2.jpg"],
  },
  {
    title: "Nexathon 2025",
    description:
      "Best Business Pitch Award — KCG College of Technology.",
    photos: ["/nexathon1.jpg", "/nexathon2.jpg"],
  },
  {
    title: ".hack();25",
    description:
      "Finalist — IEEE Student Branch, Mar Athanasius College of Engineering, Kerala.",
    photos: ["/hack251.jpg", "/hack252.jpg"],
  },
  {
    title: "TNWISE 2025",
    description:
      "Top 50 finalist among 400+ teams across Tamil Nadu. Problem statement for Women Wellness — Tamil Nadu Centre of Excellence for Advanced Manufacturing.",
    photos: ["/tnwise1.jpg", "/tnwise2.jpg"],
  },
  {
    title: "Published Poetry",
    description:
      "3 original poems published across two anthologies by Writer's Pocket.",
    photos: ["/poetry1.jpg", "/poetry3.jpg", "/poetry4.jpg", "/poetry2.jpg"],
  },
  {
    title: "School Achievements",
    description:
      "National, state, and zonal placements in scholastic and co-scholastic competitions — Olympiads, creative writing, elocution, abacus.",
    photos: ["/other1.jpg", "/other2.jpg"],
  },
];

export default function AchievementsPage() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-base)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        padding: "5rem 3rem 8rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back link */}
        <div style={{ marginBottom: "4rem" }}>
          <Link
            href="/"
            className="font-mono"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--text-secondary)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
          >
            ← Back
          </Link>
        </div>

        {/* Page header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "5rem" }}
        >
          <p
            className="font-mono"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}
          >
            — Achievements
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--text-primary)",
            }}
          >
            Competition &<br />Recognition
          </h1>
        </motion.div>

        {/* Achievement entries */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "3rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  alignItems: "start",
                }}
                className="achievement-row"
              >
                {/* Left: title + description */}
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: "var(--text-primary)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Right: photos */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: item.photos.length === 1 ? "1fr" : "1fr 1fr",
                    gap: "0.5rem",
                  }}
                >
                  {item.photos.map((src, j) => (
                    <div
                      key={j}
                      style={{
                        height: "160px",
                        overflow: "hidden",
                        backgroundColor: "var(--bg-surface)",
                      }}
                    >
                      <img
                        src={src}
                        alt={`${item.title} — photo ${j + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom rule */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .achievement-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
