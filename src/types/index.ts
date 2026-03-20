/**
 * Type Definitions for AWS Ambassador Website
 */

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  locale: string;
  favicon: string;
  ogImage: string;
  author: string;
  social: Record<string, string>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Navigation {
  logo: {
    text: string;
    href: string;
  };
  items: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface FooterContact {
  email: string;
  phone: string;
}

export interface FooterData {
  columns: FooterColumn[];
  contact: FooterContact;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  copyright: string;
}

export interface Statistic {
  number: string;
  label: string;

}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface CTASection {
  title: string;
  description: string;
  primary_cta: {
    label: string;
    href: string;
  };
  secondary_cta?: {
    label: string;
    href: string;
  };
  deadline: string;
}

export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: {
      label: string;
      href: string;
    };
    secondaryCTA: {
      label: string;
      href: string;
    };
    backgroundImage: string;
  };
  statistics: Statistic[];
  features: FeatureCard[];
  pillars: Pillar[];
  testimonials: Testimonial[];
  cta_section: CTASection;
}

export interface Ambassador {
  id: string;
  name: string;
  university: string;
  major: string;
  year: string;
  bio: string;
  achievements: string[];
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  capacity: number;
  registered: number;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiry_type: 'program' | 'event' | 'partnership' | 'other';
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export type DataAdapterType = 'local' | 'mock' | 'rest' | 'gql';

export interface I18nMessages {
  common: Record<string, string>;
  navigation: Record<string, string>;
  hero: Record<string, string>;
  footer: Record<string, string>;
  forms: Record<string, string>;
  [key: string]: Record<string, string>;
}
