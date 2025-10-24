'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorFRef = useRef(null);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const pageXRef = useRef(0);
  const pageYRef = useRef(0);
  const clickedRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorF = cursorFRef.current;

    if (!cursor || !cursorF) return;

    // Check for touch device
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      return;
    }

    const lerp = (start, end, amount) => {
      return (1 - amount) * start + amount * end;
    };

    // Mouse move handler (compute center using element sizes so dynamic hover sizes stay centered)
    const handleMouseMove = (e) => {
      pageXRef.current = e.clientX;
      pageYRef.current = e.clientY;
      const cx = Math.round(cursor.offsetWidth / 2) || 4;
      cursor.style.left = `${e.clientX - cx}px`;
      cursor.style.top = `${e.clientY - Math.round(cursor.offsetHeight / 2)}px`;
    };

    // Mouse down handler
    const handleMouseDown = () => {
      clickedRef.current = true;
      cursor.classList.add('clicked');
    };

    // Mouse up handler
    const handleMouseUp = () => {
      clickedRef.current = false;
      cursor.classList.remove('clicked');
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      cursor.classList.add('hidden');
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      cursor.classList.remove('hidden');
    };

    // Animation loop for follower cursor (use offsetWidth/2 so it remains centered when size changes)
    let animationFrameId;
    const loop = () => {
      if (
        cursorXRef.current !== pageXRef.current ||
        cursorYRef.current !== pageYRef.current
      ) {
        cursorXRef.current = lerp(cursorXRef.current, pageXRef.current, 0.2);
        cursorYRef.current = lerp(cursorYRef.current, pageYRef.current, 0.2);
        const fHalfW = Math.round(cursorF.offsetWidth / 2) || 15;
        const fHalfH = Math.round(cursorF.offsetHeight / 2) || 15;
        cursorF.style.left = `${cursorXRef.current - fHalfW}px`;
        cursorF.style.top = `${cursorYRef.current - fHalfH}px`;
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // --- Hover handling for interactive elements (delegated) ---
    // selectors to treat as "interactive" for hover effect
    const hoverSelectors = 'a, button, input, textarea, [data-cursor], .hover-target, label';

    const handleDocMouseOver = (e) => {
      const target = e.target.closest ? e.target.closest(hoverSelectors) : null;
      if (target) {
        cursor.classList.add('hover');
        cursorF.classList.add('hover');
      }
    };

    const handleDocMouseOut = (e) => {
      // if leaving an interactive element, and not entering another interactive element, remove hover
      const from = e.target.closest ? e.target.closest(hoverSelectors) : null;
      const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest(hoverSelectors) : null;
      if (from && !to) {
        cursor.classList.remove('hover');
        cursorF.classList.remove('hover');
      }
    };

    document.addEventListener('mouseover', handleDocMouseOver);
    document.addEventListener('mouseout', handleDocMouseOut);
    // --- end hover handling ---

    // Start animation loop
    loop();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleDocMouseOver);
      document.removeEventListener('mouseout', handleDocMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* use Tailwind text-white to control cursor color (background/border use currentColor) */}
      <div ref={cursorRef} className="custom-cursor text-white">
        <div ref={cursorFRef} className="custom-cursor-f" />
        {/* removed hover label */}
      </div>

      <style jsx>{`
        /* hide native cursor everywhere to ensure only the custom cursor is shown */
        html, body, * { cursor: none !important; }

        @keyframes spin {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.12); }
          70% { transform: scale(1.04); box-shadow: 0 0 18px 6px rgba(255,255,255,0.06); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }

        .custom-cursor {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          /* use currentColor so the Tailwind class (text-white) controls the color */
          background: currentColor;
          mix-blend-mode: normal;
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          transition: opacity 0.2s, transform 0.12s, background-color 0.12s, width 0.18s, height 0.18s;
          top: -30px;
          left: -30px;
        }

        .custom-cursor-f {
          position: fixed;
          border-radius: 50%;
          /* border uses currentColor as well */
          border: 1px dashed currentColor;
          width: 30px;
          height: 30px;
          pointer-events: none;
          animation: spin 2.6s linear infinite paused;
          transition: width 0.18s, height 0.18s, border 0.18s, background-color 0.18s, transform 0.18s, box-shadow 0.18s;
        }

        /* ripple pseudo-element on the follower */
        .custom-cursor-f::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          opacity: 0;
          transition: opacity 0.18s, transform 0.4s, width 0.4s, height 0.4s;
          pointer-events: none;
        }

        /* hovered state: larger follower, solid border, subtle white background */
        /* increase inner and outer diameters on hover (reduced sizes) */
        .custom-cursor.hover {
          width: 12px; /* reduced inner dot diameter */
          height: 12px;
          transform: none; /* use explicit size to keep predictable centering via JS */
          background: currentColor; /* small dot stays visible and white */
          box-shadow: 0 0 6px rgba(255,255,255,0.06);
        }
        .custom-cursor.hover .custom-cursor-f {
          border-style: solid;
          border-width: 2px;
          width: 48px; /* reduced outer/follower diameter */
          height: 48px;
          background-color: rgba(255,255,255,0.06);
          animation-play-state: running;
          transform: translateZ(0);
          box-shadow: 0 6px 24px rgba(255,255,255,0.05);
          animation: pulse 1.6s ease-in-out infinite;
        }
        /* expand ripple to match larger follower (reduced) */
        .custom-cursor.hover .custom-cursor-f::after {
          opacity: 1;
          width: 120px; /* reduced ripple */
          height: 120px;
          transform: translate(-50%, -50%) scale(1);
          transition-duration: 0.45s;
        }

        /* clicked state uses a semi-transparent white */
        .custom-cursor.clicked .custom-cursor-f {
          background-color: rgba(255,255,255,0.12);
          animation-play-state: running;
          transform: scale(0.98);
        }

        .custom-cursor.hidden {
          opacity: 0;
        }
      `}</style>
    </>
  );
}