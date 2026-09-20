'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Code2, FileText } from 'lucide-react';
import DecryptedText from './DecryptedText';

export default function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden select-none bg-[#07131d] font-sans">
      {/* ── BACKGROUND PHOTOGRAPH LAYER ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/heroImg.jpg"
          alt="Madhumithra M."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_0%] sm:object-[82%_0%] md:object-[84%_0%] lg:object-[85%_0%] select-none"
        />

        {/* Soft contrast scrim on left side to guarantee flawless text legibility */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[48%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(5, 14, 22, 0.6) 0%, rgba(5, 14, 22, 0.3) 45%, transparent 100%)',
          }}
        />

        {/* Soft bottom edge blend to transition smoothly into the About section */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(8, 13, 20, 1) 0%, rgba(8, 13, 20, 0.5) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* ── FOREGROUND CONTENT WRAPPER ── */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-6 sm:py-8 max-w-[1720px] mx-auto">
        {/* Top spacer to balance vertical layout with floating nav */}
        <div className="w-full h-12 sm:h-14 pointer-events-none" aria-hidden="true" />

        {/* ── MAIN HERO BODY (Left typography & actions, Right subject space) ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start max-w-2xl pt-10">
            {/* Status Line with Ember Orange Ping */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722] shadow-[0_0_8px_rgba(255,87,34,0.95),0_0_12px_rgba(255,87,34,0.8)]" />
              </span>
              <span className="text-white/80 text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] uppercase font-mono">
                BACKEND & DISTRIBUTED SYSTEMS · AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[-0.03em] m-0 mb-5 sm:mb-6">
              <DecryptedText
                text="Hi, I'm Madhumithra"
                animateOn="view"
                revealDirection="center"
                speed={50}
                maxIterations={15}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="text-white"
                encryptedClassName="text-white"
              />
            </h1>

            {/* Supporting Text */}
            <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[16.5px] font-normal leading-[1.7] max-w-[500px] m-0 mb-8 sm:mb-9">
              I like building things, figuring things out, and trying things I haven't done before.
            </p>

            {/* Dual CTAs: Primary "View My Work" pill + Secondary "Let's Connect →" */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-7 sm:mb-8">
              {/* Primary CTA */}
              <a
                href="#projects"
                style={{ color: '#000000' }}
                className="inline-flex items-center justify-center text-[15px] sm:text-[14px] font-semibold px-7 py-3.5 rounded-full bg-white transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-black/25 tracking-tight"
              >
                View My Work
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center text-[14px] sm:text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
              >
                <span>Let&apos;s Connect</span>
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1 font-light">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Social / Profile Links with Lucide Icons */}
            <div className="flex items-center gap-5 sm:gap-6">
              {[
                {
                  label: 'GitHub',
                  href: 'https://github.com/mithra0612',
                  icon: <Github size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/mithra0612/',
                  icon: <Linkedin size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'LeetCode',
                  href: 'https://leetcode.com/u/mithra_612',
                  icon: <Code2 size={21} strokeWidth={1.9} />,
                },
                {
                  label: 'Resume',
                  href: '/resume.pdf',
                  icon: <FileText size={21} strokeWidth={1.9} />,
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-white hover:text-white/70 transition-all duration-200 hover:scale-115 active:scale-95 flex items-center justify-center p-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right space intentionally left clear for the subject photograph */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

        {/* Bottom counterweight to balance optical vertical centering */}
        <div className="hidden sm:block h-10 md:h-14" />
      </div>
    </div>
  );
}
