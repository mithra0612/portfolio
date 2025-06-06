import Head from 'next/head';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Madhumithra | Resume</title>
        <meta name="description" content="Resume of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator." />
      </Head>
      <div style={{ height: '100vh', width: '100vw', background: '#111' }}>
        <iframe
          src="/resume.pdf"
          title="Madhumithra Resume"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </>
  );
}
