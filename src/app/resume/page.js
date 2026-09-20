import Link from 'next/link';

export const metadata = {
  title: 'Resume | Madhumithra M.',
  description: 'Resume of Madhumithra M. – Software Engineer & Full-stack Developer.',
};

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#0a0a0a] text-white">
      {/* Top Bar with Navigation & Actions */}
      <header className="flex items-center justify-between px-6 py-3.5 bg-[#0f172a]/90 border-b border-white/10 backdrop-blur-md z-10 flex-shrink-0">
        <Link
          href="/"
          className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2"
        >
          <span>&larr;</span> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Madhumithra_Resume.pdf"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-all shadow-sm"
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/15"
          >
            Open in New Tab ↗
          </a>
        </div>
      </header>

      {/* PDF Viewport */}
      <main className="flex-1 w-full h-full overflow-hidden relative">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src="/resume.pdf"
            title="Madhumithra Resume"
            className="w-full h-full border-none"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
              <p className="text-white/80">Your browser does not support inline PDF viewing.</p>
              <a
                href="/resume.pdf"
                download="Madhumithra_Resume.pdf"
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium"
              >
                Download Resume PDF
              </a>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}
