/**
 * 全域 CTA（Call To Action）文案與連結的單一來源。
 * 首頁、/program、/alumni 頁面最下方的 CTASection 皆從這裡讀取，
 */

interface CTAContent {
  title: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
}

export const CTA_CONTENT: Record<'home' | 'program' | 'alumni', CTAContent> = {
  home: {
    title: '準備好開始了嗎？',
    description: '加入 AWS Educate 第八屆雲端校園大使，與我們一起創造影響力！',
    primaryCTA: {
      label: '立即申請成為大使',
      href: 'https://awsedu.tw/2026-9th-ambassador',
    },
  },
  program: {
    title: '準備好加入了嗎？',
    description: '加入 AWS Educate Taiwan 雲端校園大使，與我們一起探索雲端世界！',
    primaryCTA: {
      label: '立即申請成為大使',
      href: 'https://awsedu.tw/2026-9th-ambassador',
    },
  },
  alumni: {
    title: '想加入這個優秀的校友網絡嗎？',
    description: '填寫報名表單，成為下一位發光發熱的大使！',
    primaryCTA: {
      label: '立即申請成為大使',
      href: 'https://awsedu.tw/2026-9th-ambassador',
    },
  },
};
