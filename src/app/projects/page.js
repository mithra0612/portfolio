'use client';

import React from 'react';
import Link from 'next/link';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <div className="max-w-[1240px] mx-auto pt-8 px-8">
        <Link
          href="/#projects"
          scroll={false}
          onClick={() => {
            try {
              sessionStorage.setItem('skip_loader', 'true');
              sessionStorage.setItem('target_section', '#projects');
            } catch (e) {}
          }}
          className="label inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
