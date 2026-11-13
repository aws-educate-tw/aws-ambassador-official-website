export const SITE_URL = 'https://www.aws-educate.tw';

// Only builds explicitly marked as production may be indexed, so a missing variable keeps dev out of search results.
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_SITE_ENV === 'production';
