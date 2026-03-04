import React from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Smart India Hackathon 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            Made it to the finalist of SIH 2024, as the top 5 team among 500
            teams across India, worked on a problem statement for the Department
            of Posts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./sih1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./sih2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./sih3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./sih4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "TNWISE 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            Made it to the top 50 finalists in TNWISE 2025 among 400+ teams
            across Tamil Nadu, worked on a problem statement for Women Wellness.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./tnwise1.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./tnwise2.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "HackIT'25",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            Won 1st place in HackIT'25, a hackathon organized by the Anna University, College of Engineering, Guindy, with a Cash Prize of Rs.12,000.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./hackit1.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./hackit2.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nexathon 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
           Won the Best Business Pitch Award at Nexathon 2025 organized by the KCG College of Technology.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./nexathon1.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./nexathon2.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hack'25",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
           Made it to the finals of Hack'25 organized by the IEEE Student Branch of Mar Athanasius College of Engineering.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./hack251.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./hack252.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Published Poetry",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
           Published 3 original poems in two anthologies by Writer's Pocket.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./poetry1.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./poetry3.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./poetry4.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./poetry2.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements Throughout School",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
           Participated and won in scholastic and co-scholastic competitions in school, including Olympiads, creative writing, ,elocution, zonal level abacus etc.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./other1.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
            <img
              src="./other2.jpg"
              alt="startup template"
              width={500}
              height={600}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-80"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 text-white rounded-lg transition-all duration-200 hover:bg-neutral-800/80 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
      <Timeline data={data} />
    </div>
  );
}
