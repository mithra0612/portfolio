"use client";
import React from "react";
import {
  Java,
  Python,
  Code,
  React as ReactIcon,
  Node,
  Database,
  Cloud,
  GitBranch,
  Github,
  Figma,
  Postman,
  Server,
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <Java size={48} /> },
        { name: "C", icon: <Code size={48} /> },
        { name: "Python", icon: <Python size={48} /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Next.js", icon: <ReactIcon size={48} /> },
        { name: "React.js", icon: <ReactIcon size={48} /> },
        { name: "Node.js", icon: <Node size={48} /> },
        { name: "Express.js", icon: <Node size={48} /> },
        { name: "NumPy", icon: <Code size={48} /> },
        { name: "Pandas", icon: <Code size={48} /> },
      ],
    },
    {
      category: "Databases & Cloud",
      items: [
        { name: "MongoDB", icon: <Database size={48} /> },
        { name: "MySQL", icon: <Database size={48} /> },
        { name: "GCP", icon: <Cloud size={48} /> },
      ],
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", icon: <GitBranch size={48} /> },
        { name: "GitHub", icon: <Github size={48} /> },
        { name: "Figma", icon: <Figma size={48} /> },
        { name: "Postman", icon: <Postman size={48} /> },
        { name: "Vercel", icon: <Server size={48} /> },
        { name: "Render", icon: <Server size={48} /> },
      ],
    },
  ];

  return (
    <section className="px-6 lg:px-16 py-16 soft-bg">
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className="text-4xl lg:text-6xl font-bold mb-16 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            borderBottom: "2px solid #3b82f6",
            display: "inline-block",
            paddingBottom: "0.25em",
          }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{
                  color: "#fff",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {skill.category}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className="p-4 rounded-full bg-[#10141a] flex items-center justify-center"
                      style={{
                        border: "1px solid #1e293b",
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="mt-2 text-sm"
                      style={{
                        color: "#d1d5db",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;