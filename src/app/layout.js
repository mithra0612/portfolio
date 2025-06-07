import { Inter } from 'next/font/google';
import './globals.css';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Madhumithra | Portfolio',
  description: 'Portfolio of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator. View resume, projects, and contact info.',
  openGraph: {
    title: 'Madhumithra | Portfolio',
    description: 'Portfolio of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator. View resume, projects, and contact info.'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}