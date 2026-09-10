'use client';

import React, { useState, useRef, useEffect, cloneElement } from 'react';

export type LimelightLink = {
  id: string | number;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export type NavItem = LimelightLink;

export type LimelightNavProps = {
  items: LimelightLink[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * Minimalist, Frameless Interactive Limelight Social Dock
 * No bounding box outline — blends seamlessly with the page typography & dark aesthetic.
 */
export const LimelightNav = ({
  items = [],
  defaultActiveIndex = 0,
  onTabChange,
  className = '',
  limelightClassName = '',
  iconContainerClassName = '',
  iconClassName = '',
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 38,
    opacity: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updatePosition = (index: number) => {
    const item = itemRefs.current[index];
    const container = containerRef.current;

    if (item && container) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      const left = itemRect.left - containerRect.left;
      const width = itemRect.width;

      setIndicatorStyle({
        left,
        width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    if (items.length === 0) return;
    updatePosition(activeIndex);

    const handleResize = () => updatePosition(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, items.length]);

  if (items.length === 0) return null;

  const handleActivate = (index: number) => {
    setActiveIndex(index);
    updatePosition(index);
    onTabChange?.(index);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '4px',
      }}
      className={`select-none ${className}`}
    >
      {/* ── TOP LIMELIGHT SPOTLIGHT GLOW ── */}
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: `${indicatorStyle.left + indicatorStyle.width / 2 - 16}px`,
          width: '32px',
          height: '2.5px',
          borderRadius: '9999px',
          background: '#38bdf8',
          boxShadow: '0 0 10px 2px #38bdf8, 0 6px 20px 4px rgba(56, 189, 248, 0.7)',
          transition: 'left 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
          opacity: indicatorStyle.opacity,
          pointerEvents: 'none',
          zIndex: 5,
        }}
        className={limelightClassName}
      >
        {/* Soft downward light cone */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '-16px',
            width: '64px',
            height: '38px',
            clipPath: 'polygon(15% 100%, 35% 0, 65% 0, 85% 100%)',
            background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.3), rgba(56, 189, 248, 0.03) 60%, transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── ICONS ROW (FRAMELESS) ── */}
      <nav
        aria-label="Social and Contact Links"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {items.map(({ id, icon, label, href, external, onClick }, index) => {
          const isExternal = external ?? (href.startsWith('http') || href.startsWith('//'));
          const isActive = activeIndex === index;

          return (
            <a
              key={id}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              onMouseEnter={() => handleActivate(index)}
              onFocus={() => handleActivate(index)}
              onClick={onClick}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease, transform 0.2s ease',
                transform: isActive ? 'scale(1.12)' : 'scale(1)',
                cursor: 'pointer',
                outline: 'none',
              }}
              className={`focus-visible:ring-2 focus-visible:ring-sky-400 ${iconContainerClassName}`}
            >
              {cloneElement(icon, {
                style: {
                  width: '20px',
                  height: '20px',
                  transition: 'stroke 0.2s ease, filter 0.2s ease',
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.85))' : 'none',
                },
                className: iconClassName,
              })}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default LimelightNav;
