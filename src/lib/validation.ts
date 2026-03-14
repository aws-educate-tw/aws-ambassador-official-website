/**
 * Zod Validation Schemas
 */

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '姓名至少需要 2 個字符' })
    .max(50, { message: '姓名不能超過 50 個字符' }),
  email: z.string().email({ message: '請輸入有效的電子郵件地址' }),
  subject: z
    .string()
    .min(5, { message: '主題至少需要 5 個字符' })
    .max(100, { message: '主題不能超過 100 個字符' }),
  message: z
    .string()
    .min(10, { message: '訊息至少需要 10 個字符' })
    .max(1000, { message: '訊息不能超過 1000 個字符' }),
  inquiry_type: z.enum(['program', 'event', 'partnership', 'other'], {
    errorMap: () => ({ message: '請選擇有效的查詢類型' }),
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: '請輸入有效的電子郵件地址' }),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const applySchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  university: z.string().min(2).max(100),
  major: z.string().min(2).max(100),
  year: z.enum(['一年級', '二年級', '三年級', '四年級', '碩士', '博士']),
  motivation: z.string().min(50).max(1000),
  experience: z.string().min(10).max(1000),
  availability: z.string().min(5).max(500),
});

export type ApplyFormInput = z.infer<typeof applySchema>;
