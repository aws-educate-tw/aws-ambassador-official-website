import homeData from '@/content/home.json';

export interface HomePageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
  };
  statistics: Array<{
    number: string;
    label: string;
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
 */
export class ContentRepository {
  /**
   * 取得首頁資料
   */
  async getHomePageData(): Promise<HomePageData> {
    return homeData as HomePageData;
  }
}

// Singleton instance
export const contentRepository = new ContentRepository();
