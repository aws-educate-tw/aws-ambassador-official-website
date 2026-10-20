# AWS Educate Taiwan Student Cloud Ambassador Official Website

The official website of the AWS Educate Taiwan Student Cloud Ambassador program.

- Production: https://www.aws-educate.tw/

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- CSS Modules + design tokens (`src/styles/tokens.css`)
- Framer Motion, lucide-react

## Local Development

Requires Node.js 18+ and npm. No environment variables are needed.

```bash
npm install
npm run dev          # http://localhost:3000
```

### Scripts

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the development server                    |
| `npm run build`        | Production build; static files output to `out/` |
| `npm run lint`         | ESLint + TypeScript type check                  |
| `npm run format`       | Format `src/` with Prettier                     |
| `npm run format:check` | Check formatting only                           |

## Project Structure

```
public/images/       Images (ambassador headshots, alumni story photos, page backgrounds, ...)
src/
  app/               Routes; each folder is a page
  components/        Components, organized as atoms / molecules / organisms
  content/           Copy for the home page and navigation (JSON)
  data/              Alumni stories, ambassador directory, CTA copy
  styles/            Global styles and design tokens
```
