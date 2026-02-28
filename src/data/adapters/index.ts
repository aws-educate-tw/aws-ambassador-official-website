/**
 * Data Adapters Factory
 * 支援切換不同的資料來源
 */

import { HomePage } from '@/types';

export interface DataAdapter {
  getHomePage(): Promise<HomePage>;
}

/**
 * Local Adapter - 從 JSON 檔案讀取
 */
class LocalAdapter implements DataAdapter {
  async getHomePage(): Promise<HomePage> {
    const data = await import('@/content/home.json');
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
}

/**
 * REST Adapter - 未來使用 REST API
 */
class RestAdapter implements DataAdapter {
  private readonly baseUrl: string;

  constructor(baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || '') {
    this.baseUrl = baseUrl;
  }

  async getHomePage(): Promise<HomePage> {
    const response = await fetch(`${this.baseUrl}/pages/home`);
    if (!response.ok) throw new Error('Failed to fetch home page from REST API');
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
