'use client';

import React, { useRef, useEffect } from 'react';

export const CanvasRevealEffect = ({
  animationSpeed = 3.5,
  colors = [[255, 87, 34]],
  dotSize = 2.0,
  gridSpacing = 7,
  containerClassName = '',
  mousePosRef,
  radius = 260,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let startTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const colorPalette = colors.length > 0 ? colors : [[255, 87, 34]];

    const render = (now) => {
      const time = (now - startTime) * 0.001 * animationSpeed;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const mx = mousePosRef?.current?.x ?? width / 2;
      const my = mousePosRef?.current?.y ?? height / 2;

      // Render crisp, delicate pixel dot matrix
      for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
          const dx = x - mx;
          const dy = y - my;
          const distSq = dx * dx + dy * dy;
          const radSq = radius * radius;

          if (distSq < radSq) {
            const dist = Math.sqrt(distSq);
            // Smooth distance falloff from cursor
            const falloff = Math.pow(1 - dist / radius, 1.25);

            // Dynamic procedural wave & twinkle
            const wave = Math.sin(x * 0.12 + y * 0.18 + time * 2.2);
            const twinkle = Math.sin(time * 4.5 + (x * 47.1 + y * 93.7)) * 0.5 + 0.5;
            const shimmer = 0.4 + 0.6 * twinkle;

            // Controlled opacity (max ~0.55) to maintain high contrast without obstructing text readability
            const alpha = falloff * shimmer * 0.55;

            if (alpha > 0.03) {
              const colorIdx = Math.abs(Math.floor((wave + 1) * 0.5 * colorPalette.length)) % colorPalette.length;
              const [r, g, b] = colorPalette[colorIdx];

              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
              
              // Crisp micro-square pixel
              const half = dotSize / 2;
              ctx.fillRect(x - half, y - half, dotSize, dotSize);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, [colors, dotSize, gridSpacing, animationSpeed, mousePosRef, radius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${containerClassName}`}
    />
  );
};
