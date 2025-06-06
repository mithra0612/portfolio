import { Inter } from 'next/font/google'
import './globals.css'
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Madhumithra | Portfolio',
  description: 'Portfolio of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator. View resume, projects, and contact info.',
  openGraph: {
    title: 'Madhumithra | Portfolio',
    description: 'Portfolio of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator. View resume, projects, and contact info.'
  },
  // Custom titles for specific routes
  other: {
    '/resume': {
      title: 'Madhumithra | Resume',
      description: 'Resume of Madhumithra – Full-stack Developer, Problem Solver, Creative Designer, UI/UX Enthusiast, and Tech Innovator.'
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}