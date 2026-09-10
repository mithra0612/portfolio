'use client';

import { useEffect, useRef } from 'react';

const CELL_SIZE = 65;    // size of each grid square in px
const WARP_RADIUS = 280; // px radius of warp influence
const WARP_STRENGTH = 60; // max px displacement toward cursor
const EASE = 0.025;       // spring smoothing (lower = slower effect)

export default function KineticGrid() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const pointsRef = useRef({ pts: null, cols: 0, rows: 0 }); // smoothed positions & grid size

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildPoints();
    };

    // Build base grid points
    const buildPoints = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cols = Math.ceil(w / CELL_SIZE);
      const rows = Math.ceil(h / CELL_SIZE);
      const arr = [];
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          arr.push({
            bx: c * CELL_SIZE,  // base X
            by: r * CELL_SIZE,  // base Y
            cx: c * CELL_SIZE,  // current (smoothed) X
            cy: r * CELL_SIZE,  // current (smoothed) Y
          });
        }
      }
      pointsRef.current = { pts: arr, cols, rows };
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const { pts, cols, rows } = pointsRef.current;
      if (!pts) { animRef.current = requestAnimationFrame(draw); return; }

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update smoothed positions
      for (const p of pts) {
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let tx = p.bx;
        let ty = p.by;

        if (dist < WARP_RADIUS && dist > 0) {
          const factor = (1 - dist / WARP_RADIUS) * WARP_STRENGTH;
          tx = p.bx - (dx / dist) * factor;
          ty = p.by - (dy / dist) * factor;
        }

        // Spring ease toward target
        p.cx += (tx - p.cx) * EASE;
        p.cy += (ty - p.cy) * EASE;
      }

      const stride = cols + 1;
      ctx.lineWidth = 0.6;

      let lineStyle, dotStyle;
      if (mx > -1000) {
        const glowRadius = 600; // area of higher visibility
        const gradLine = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
        gradLine.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
        gradLine.addColorStop(1, 'rgba(255, 255, 255, 0.03)'); // very translucent base

        const gradDot = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
        gradDot.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
        gradDot.addColorStop(1, 'rgba(255, 255, 255, 0)'); // fully invisible base

        lineStyle = gradLine;
        dotStyle = gradDot;
      } else {
        lineStyle = 'rgba(255, 255, 255, 0.03)';
        dotStyle = 'rgba(255, 255, 255, 0)';
      }

      ctx.strokeStyle = lineStyle;
      ctx.fillStyle   = dotStyle;

      // Draw horizontal lines
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const p = pts[r * stride + c];
          if (c === 0) ctx.moveTo(p.cx, p.cy);
          else ctx.lineTo(p.cx, p.cy);
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        for (let r = 0; r <= rows; r++) {
          const p = pts[r * stride + c];
          if (r === 0) ctx.moveTo(p.cx, p.cy);
          else ctx.lineTo(p.cx, p.cy);
        }
        ctx.stroke();
      }

      // Draw dots at every intersection
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  );
}
