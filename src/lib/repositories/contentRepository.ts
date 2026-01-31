import homeData from '@/content/home.json';

export interface HomePageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
    backgroundImage?: string;
  };
  statistics: Array<{
    number: string;
    label: string;
    description: string;
  }>;
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
    cta: { label: string; href: string };
  }>;
  pillars: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    company?: string;
    quote: string;
    avatar?: string;
    rating?: number;
  }>;
  cta_section: {
    title: string;
    description: string;
    primary_cta: { label: string; href: string };
    secondary_cta?: { label: string; href: string };
    deadline?: string;
  };
}

/**
 * Content Repository - 資料存取層
 * 未來可輕鬆替換為 REST API 或 GraphQL
 */
export class ContentRepository {
  /**
   * 取得首頁資料
   */
  async getHomePageData(): Promise<HomePageData> {
    // 目前從 JSON 讀取，未來改為 API call
    return homeData as HomePageData;
  }

  /**
   * 取得導航資料
   */
  async getNavigationData() {
    return {
      logo: {
        text: 'AWS',
        subtitle: 'Educate Ambassador',
      },
      items: homeData.features.map((feature) => ({
        label: feature.title,
        href: feature.cta.href,
      })),
      ctaLabel: '立即申請',
      ctaHref: '/apply',
    };
  }

  /**
   * 取得頁尾資料
   */
  async getFooterData() {
    return {
      copyright: 'AWS Educate Taiwan. All rights reserved.',
      links: [
        { label: '隱私權政策', href: '/privacy' },
        { label: '使用條款', href: '/terms' },
        { label: '聯絡我們', href: '/contact' },
      ],
    };
  }
}

// Singleton instance
export const contentRepository = new ContentRepository();
