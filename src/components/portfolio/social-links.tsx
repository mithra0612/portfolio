'use client';

import React from 'react';
import { Github, Linkedin, Code2, FileText } from 'lucide-react';
import { LimelightNav, type LimelightLink } from '@/components/ui/limelight-nav';

const socialLinks: LimelightLink[] = [
  {
    id: 'resume',
    icon: <FileText strokeWidth={1.75} />,
    label: 'Resume',
    href: '/resume.pdf',
    external: true,
  },
  {
    id: 'linkedin',
    icon: <Linkedin strokeWidth={1.75} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mithra0612/',
    external: true,
  },
  {
    id: 'github',
    icon: <Github strokeWidth={1.75} />,
    label: 'GitHub',
    href: 'https://github.com/mithra0612',
    external: true,
  },
  {
    id: 'leetcode',
    icon: <Code2 strokeWidth={1.75} />,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/mithra_612',
    external: true,
  },
];

export interface SocialLinksProps {
  className?: string;
  limelightClassName?: string;
}

/**
 * Portfolio-specific Social & Contact Links Dock
 */
export function SocialLinks({ className, limelightClassName }: SocialLinksProps) {
  return (
    <LimelightNav
      items={socialLinks}
      defaultActiveIndex={0}
      className={className}
      limelightClassName={limelightClassName}
    />
  );
}

export default SocialLinks;
