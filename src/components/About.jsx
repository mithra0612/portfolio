import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-0 md:pt-32 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 z-10 overflow-hidden"
    >
      {/* ── LEFT COLUMN (PORTRAIT): Anchored to the absolute floor ── */}
      <div className="relative md:col-span-5 order-2 md:order-1 w-full h-[450px] sm:h-[550px] md:h-full min-h-[480px] md:min-h-[640px] lg:min-h-[780px] flex items-end justify-center self-end">
        <div className="relative w-full h-full min-h-[450px] sm:min-h-[550px] md:min-h-[640px] lg:min-h-[780px]">
          <Image
            src="/placeholder-portrait.jpg"
            alt="Portrait Placeholder"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-bottom pointer-events-none select-none"
          />
        </div>
      </div>

      {/* ── RIGHT COLUMN (CONTENT): Centered typography & placeholder sign-off ── */}
      <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center px-8 md:pr-16 lg:pr-32 pb-24 self-center">
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8 text-white font-[var(--font-headline)]">
          Built for digital experiences that expect more from engineering.
        </h2>

        {/* Body Paragraph */}
        <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-xl font-[var(--font-body)]">
          A dedicated engineering mindset integrated into creative interfaces.
          Focused on clarity, precision, and consistency. Built to handle complex
          full-stack architecture and high-value UI work without compromising on
          quality or performance.
        </p>

        {/* Sign-off Block (Placeholder) */}
        <div className="flex flex-col gap-1">
          <span className="text-white text-lg md:text-xl font-medium tracking-tight font-[var(--font-body)]">
            Firstname Lastname
          </span>
          <span className="text-neutral-500 text-sm md:text-base font-normal tracking-wide font-[var(--font-body)]">
            Software Engineer / Creative Technologist
          </span>
        </div>
      </div>
    </section>
  );
}