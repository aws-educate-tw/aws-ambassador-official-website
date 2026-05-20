import { Footer } from '@/components/organisms/Footer/Footer';
import { Navigation } from '@/components/organisms/Navigation/Navigation';
import layoutData from '@/content/layout.json';
import '@/styles/animations.css';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aws-educate.tw';

export const viewport: Viewport = {
  themeColor: '#FF9900',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'AWS Educate Taiwan',
  description: 'Student Cloud Ambassador',
  robots: 'index, follow',
  icons: {
    icon: '/images/AWS_Educate_Logo.svg',
  },
  openGraph: {
    title: 'AWS Educate Taiwan',
    description: 'Student Cloud Ambassador',
    url: siteUrl,
    siteName: 'AWS Educate Taiwan',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Educate Taiwan',
    description: 'Student Cloud Ambassador',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
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
