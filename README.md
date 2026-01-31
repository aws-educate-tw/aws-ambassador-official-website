# AWS Educate TW Campus Ambassador - Official Website

## 📋 概述 (Overview)

這是 **AWS Educate 台灣校園大使計畫** 的正式官網，採用現代化前端技術棧打造，提供高效能、可維護的 MVP 級別生產就緒網站。

**Technology Stack:**

- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + CSS Variables (Design Tokens)
- **Animations**: Framer Motion + Lottie
- **Forms**: React Hook Form + Zod Validation
- **State Management**: React Query + Zustand
- **i18n**: next-intl (Traditional Chinese + English)
- **Build Tools**: ESLint, Prettier, Husky, lint-staged
- **Testing**: Jest + Playwright
- **Deployment**: Vercel (Primary) + Docker Support

---

## 🎯 關鍵特性 (Key Features)

### ✨ 設計與動畫

- ✅ 從 Figma 設計稿完整轉換
- ✅ 流暢的頁面轉換與元件動畫 (Framer Motion)
- ✅ 尊重 prefers-reduced-motion (無障礙動畫設定)
- ✅ CSS 變數系統支援主題切換

### 📝 內容管理

- ✅ **完全外部化**: 所有文案存儲在 `/src/content/*.json`
- ✅ **零硬編碼**: 無任何文字內容在組件中
- ✅ **易於維護**: 編輯 JSON 無需重新部署代碼
- ✅ **多語言支援**: zh-TW, en (可擴展)

### 🏗️ 架構模式

- ✅ **適配器模式**:
  - Local JSON 資料
  - MSW 模擬 API
  - REST API (未來)
  - GraphQL (未來)
- ✅ **環境變數切換**: `DATA_ADAPTER=local|mock|rest|gql`
- ✅ **類型安全**: TypeScript 完全覆蓋

### ♿ 無障礙與性能

- ✅ WCAG 2.1 AA 無障礙標準
- ✅ 語義化 HTML
- ✅ 鍵盤導航支援
- ✅ 圖片最佳化 (WebP, AVIF)

### 🔒 代碼品質

- ✅ ESLint + Prettier 強制規範
- ✅ TypeScript strict mode
- ✅ Husky + lint-staged (pre-commit hooks)
- ✅ Jest + Playwright 測試

---

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 本地開發

```bash
npm run dev
# 訪問: http://localhost:3000
```

### 環境配置

複製 `.env.example` 至 `.env.local` 並編輯

### 代碼品質檢查

```bash
npm run type-check      # TypeScript
npm run lint            # ESLint + Prettier
npm run format          # 自動格式化
```

### 生產構建

```bash
npm run build
npm start
```

---

## 📝 內容管理指南

編輯 `/src/content/` 中的 JSON 檔案:

- `navigation.json` - 導航菜單
- `footer.json` - 尾部內容
- `home.json` - 首頁內容
- `locales/` - 多語言文案

---

## ⚠️ 待補資訊 (Missing Information)

| 項目         | 預設值                    | 調整位置                  |
| ------------ | ------------------------- | ------------------------- |
| 大使頭像圖片 | Unsplash 佔位圖           | `src/content/home.json`   |
| 活動時間表   | 未定義                    | `src/content/events.json` |
| 聯絡表單後端 | 模擬 MSW                  | `mocks/handlers.ts`       |
| API 端點 URL | http://localhost:3000/api | `.env.local`              |

---

## 📚 詳細文檔

查閱 [完整文檔](./docs) 了解:

- 專案結構詳解
- 設計代幣與樣式
- 資料適配器模式
- 動畫與 Framer Motion
- 多語言支援
- 部署指南

---

© 2024 AWS Educate Taiwan.
