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
    tag?: string;
    cta: { label: string; href: string };
  }>;
  pillars: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
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
