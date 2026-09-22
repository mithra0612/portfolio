'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import './GooeyNav.css';

const GooeyNav = ({
  items = [],
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex: controlledActiveIndex,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(
    controlledActiveIndex !== undefined ? controlledActiveIndex : initialActiveIndex
  );

  useEffect(() => {
    if (controlledActiveIndex !== undefined && controlledActiveIndex !== activeIndex) {
      setActiveIndex(controlledActiveIndex);
    }
  }, [controlledActiveIndex]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current || !element) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index, item) => {
    const target = e.currentTarget;
    const liEl = target.tagName === 'LI' ? target : (target.closest('li') || target);

    if (activeIndex !== index) {
      setActiveIndex(index);
      updateEffectPosition(liEl);

      if (filterRef.current) {
        const particles = filterRef.current.querySelectorAll('.particle');
        particles.forEach(p => filterRef.current.removeChild(p));
      }

      if (textRef.current) {
        textRef.current.classList.remove('active');
        void textRef.current.offsetWidth;
        textRef.current.classList.add('active');
      }

      if (filterRef.current) {
        makeParticles(filterRef.current);
      }
    }

    if (item && item.href) {
      if (item.href.startsWith('#')) {
        const hash = item.href;
        if (pathname === '/') {
          e.preventDefault();

          // Temporarily pause scroll spy URL update to avoid frame-by-frame jitter during smooth scroll
          if (typeof window !== 'undefined') {
            window.__isNavClicking = true;
            window.history.pushState(null, '', hash);
            setTimeout(() => {
              window.__isNavClicking = false;
            }, 1400);
          }

          if (hash === '#home' || hash === '#hero') {
            if (lenis) {
              lenis.scrollTo(0, { duration: 1.2 });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          } else {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
              if (lenis) {
                lenis.scrollTo(targetSection, { offset: 0, duration: 1.2 });
              } else {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
        } else {
          e.preventDefault();
          router.push('/' + hash);
        }
      } else {
        e.preventDefault();
        router.push(item.href);
      }
    }
  };

  const handleKeyDown = (e, index, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl, preventDefault: () => {} }, index, item);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    if (activeIndex === null || activeIndex === undefined || activeIndex < 0) return;

    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a
                href={item.href}
                onClick={e => handleClick(e, index, item)}
                onKeyDown={e => handleKeyDown(e, index, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />

      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <defs>
          <filter id="gooey-nav-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GooeyNav;
