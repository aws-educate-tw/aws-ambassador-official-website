import { Footer } from '@/components/organisms/Footer/Footer';
import { Navigation } from '@/components/organisms/Navigation/Navigation';
import layoutData from '@/content/layout.json';
import '@/styles/animations.css';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

export const viewport: Viewport = {
  themeColor: '#FF9900',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'AWS Educate Campus Ambassador Program',
  description:
    'Empower the next generation of cloud leaders through AWS Educate Campus Ambassador Program',
  robots: 'index, follow',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="%23FF9900"/><text x="50%" y="50%" font-size="40" fill="white" text-anchor="middle" dy=".3em" font-weight="bold">A</text></svg>',
  },
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF9900" />
      </head>
      <body className="bg-white text-neutral-900">
        <div className="flex min-h-screen flex-col">
          <Navigation {...layoutData.navigation} />
          <main className="flex-1">{children}</main>
          <Footer {...layoutData.footer} />
        </div>
      </body>
    </html>
  );
}
