import { Inter } from 'next/font/google';
import './globals.css';
import { Caveat } from 'next/font/google';
import Script from 'next/script';

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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JZ8RGLRC2M"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZ8RGLRC2M');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}