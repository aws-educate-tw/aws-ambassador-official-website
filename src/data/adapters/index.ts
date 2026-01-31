/**
 * Data Adapters Factory
 * 支援切換不同的資料來源
 */

import { FooterData, HomePage, I18nMessages, Navigation, SiteConfig } from '@/types';

export interface DataAdapter {
  getHomePage(): Promise<HomePage>;
  getNavigation(): Promise<Navigation>;
  getFooter(): Promise<FooterData>;
  getSiteConfig(): Promise<SiteConfig>;
  getMessages(locale: string): Promise<I18nMessages>;
}

/**
 * Local Adapter - 從 JSON 檔案讀取
 */
class LocalAdapter implements DataAdapter {
  async getHomePage(): Promise<HomePage> {
    const data = await import('@/content/home.json');
    return data.default;
  }

  async getNavigation(): Promise<Navigation> {
    const data = await import('@/content/navigation.json');
    return data.default;
  }

  async getFooter(): Promise<FooterData> {
    const data = await import('@/content/footer.json');
    return data.default;
  }

  async getSiteConfig(): Promise<SiteConfig> {
    const data = await import('@/content/site.json');
    return data.default;
  }

  async getMessages(locale: string): Promise<I18nMessages> {
    const data = await import(`@/content/locales/${locale}.json`);
    return data.default;
  }
}

/**
 * Mock Adapter - MSW 模擬 API
 */
class MockAdapter implements DataAdapter {
  async getHomePage(): Promise<HomePage> {
    const response = await fetch('/api/pages/home');
    if (!response.ok) throw new Error('Failed to fetch home page');
    return response.json();
  }

  async getNavigation(): Promise<Navigation> {
    const response = await fetch('/api/navigation');
    if (!response.ok) throw new Error('Failed to fetch navigation');
    return response.json();
  }

  async getFooter(): Promise<FooterData> {
    const response = await fetch('/api/footer');
    if (!response.ok) throw new Error('Failed to fetch footer');
    return response.json();
  }

  async getSiteConfig(): Promise<SiteConfig> {
    const response = await fetch('/api/site-config');
    if (!response.ok) throw new Error('Failed to fetch site config');
    return response.json();
  }

  async getMessages(locale: string): Promise<I18nMessages> {
    const response = await fetch(`/api/messages/${locale}`);
    if (!response.ok) throw new Error('Failed to fetch messages');
    return response.json();
  }
}

/**
 * REST Adapter - 未來使用 REST API
 */
class RestAdapter implements DataAdapter {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || '') {
    this.baseUrl = baseUrl;
  }

  async getHomePage(): Promise<HomePage> {
    const response = await fetch(`${this.baseUrl}/pages/home`);
    if (!response.ok) throw new Error('Failed to fetch home page from REST API');
    return response.json();
  }

  async getNavigation(): Promise<Navigation> {
    const response = await fetch(`${this.baseUrl}/navigation`);
    if (!response.ok) throw new Error('Failed to fetch navigation from REST API');
    return response.json();
  }

  async getFooter(): Promise<FooterData> {
    const response = await fetch(`${this.baseUrl}/footer`);
    if (!response.ok) throw new Error('Failed to fetch footer from REST API');
    return response.json();
  }

  async getSiteConfig(): Promise<SiteConfig> {
    const response = await fetch(`${this.baseUrl}/site-config`);
    if (!response.ok) throw new Error('Failed to fetch site config from REST API');
    return response.json();
  }

  async getMessages(locale: string): Promise<I18nMessages> {
    const response = await fetch(`${this.baseUrl}/messages/${locale}`);
    if (!response.ok) throw new Error('Failed to fetch messages from REST API');
    return response.json();
  }
}

/**
 * 適配器工廠函數
 */
export function getDataAdapter(type?: string): DataAdapter {
  const adapterType = type || process.env.NEXT_PUBLIC_DATA_ADAPTER || 'local';

  switch (adapterType) {
    case 'mock':
      return new MockAdapter();
    case 'rest':
      return new RestAdapter();
    case 'local':
    default:
      return new LocalAdapter();
  }
}

export { LocalAdapter, MockAdapter, RestAdapter };
