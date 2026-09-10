'use client';

import dynamic from 'next/dynamic';

/* Dynamically import the Silk canvas so it is only rendered on the client.
   R3F + WebGL requires a browser environment — SSR would crash. */
const Silk = dynamic(() => import('./Silk'), { ssr: false });

export default function HeroBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: '#0a0e2a',
      }}
      aria-hidden="true"
    >

      <Silk
        speed={6}
        scale={1}
        color="#2345d7"
        noiseIntensity={1}
        rotation={3.5}
      />
    </div>
  );
}
