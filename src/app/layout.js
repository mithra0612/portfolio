import { Inter, Syne, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import SmoothScroll from '@/components/SmoothScroll';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Madhumithra M. — Software Engineer',
  description: 'Portfolio of Madhumithra M. — Computer Science undergraduate, full-stack developer, and problem solver. View projects, experience, and contact.',
  openGraph: {
    title: 'Madhumithra M. — Software Engineer',
    description: 'Portfolio of Madhumithra M. — Computer Science undergraduate, full-stack developer, and problem solver.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
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
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}