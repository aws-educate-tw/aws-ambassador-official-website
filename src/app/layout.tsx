import '@/styles/animations.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AWS Educate Campus Ambassador Program',
  description:
    'Empower the next generation of cloud leaders through AWS Educate Campus Ambassador Program',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AWS Educate Campus Ambassador',
    description: 'Join the global community of AWS Campus Ambassadors',
    url: 'https://aws-ambassador-tw.example.com',
    siteName: 'AWS Educate TW',
    images: [
      {
        url: 'https://aws-ambassador-tw.example.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Educate Campus Ambassador',
    description: 'Join the global community of AWS Campus Ambassadors',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF9900" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-white text-neutral-900">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
