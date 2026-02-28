import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, '姓名至少 2 個字符').max(50),
  email: z.string().email('請輸入有效的電子郵件地址'),
  subject: z.string().min(5, '主題至少 5 個字符').max(100),
  message: z.string().min(10, '訊息至少 10 個字符').max(1000),
  inquiry_type: z.enum(['program', 'event', 'partnership', 'other']),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const ambassadorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  university: z.string(),
  major: z.string(),
  year: z.string(),
});

export type AmbassadorData = z.infer<typeof ambassadorSchema>;
