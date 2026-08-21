import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppStateProvider } from '@/context/AppStateContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZIWEI IP — Know Your Nature. Build Your Influence.',
  description:
    'AI-powered Personal Brand Intelligence platform combining strategic self-discovery with creator positioning, content systems, and high-ticket monetization.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background bg-grid-pattern text-slate-100 antialiased`}>
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
