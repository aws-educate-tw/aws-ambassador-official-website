'use client';

import homeData from '@/content/home.json';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Figma 生成的首頁組件
 * 自 AWS Educate TW Campus Ambassador 設計轉換
 * 完整的設計忠實度與動畫整合
 */

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary-500">AWS</div>
              <span className="hidden text-sm font-semibold text-neutral-700 sm:inline">
                Educate Ambassador
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden gap-8 md:flex">
              {homeData.features.map((feature) => (
                <Link
                  key={feature.id}
                  href={feature.cta.href}
                  className="text-sm font-medium text-neutral-600 transition hover:text-primary-500"
                >
                  {feature.title}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/apply"
              className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-600"
            >
              立即申請
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-600 to-surface-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-400 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {homeData.hero.title}
          </h1>
          <p className="mt-6 text-xl text-white/80 sm:text-2xl">{homeData.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:mx-auto">
            {homeData.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={homeData.hero.primaryCTA.href}
              className="rounded-lg bg-primary-500 px-8 py-3 font-semibold text-white transition hover:bg-primary-600"
            >
              {homeData.hero.primaryCTA.label}
            </Link>
            <a
              href={homeData.hero.secondaryCTA.href}
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {homeData.hero.secondaryCTA.label}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {homeData.statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-lg border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 text-center"
              >
                <div className="text-4xl font-bold text-primary-500">{stat.number}</div>
                <div className="mt-2 font-semibold text-neutral-900">{stat.label}</div>
                <div className="mt-1 text-sm text-neutral-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-neutral-900">主要資訊</h2>
            <p className="mt-4 text-lg text-neutral-600">探索大使計畫的各個方面</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {homeData.features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="group overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl">
                  {/* 圖標佔位符 */}
                  📌
                </div>
                <h3 className="font-bold text-neutral-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
                <Link
                  href={feature.cta.href}
                  className="mt-4 inline-block text-sm font-semibold text-primary-500 transition group-hover:text-primary-600"
                >
                  {feature.cta.label} →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-neutral-900">四大支柱</h2>
            <p className="mt-4 text-lg text-neutral-600">成為大使的核心價值</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {homeData.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-8"
              >
                <div className="mb-4 text-4xl">
                  {pillar.title === 'Learn' && '📚'}
                  {pillar.title === 'Build' && '🔨'}
                  {pillar.title === 'Share' && '🤝'}
                  {pillar.title === 'Lead' && '👑'}
                </div>
                <h3 className="font-bold text-neutral-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-neutral-900">成功故事</h2>
            <p className="mt-4 text-lg text-neutral-600">聆聽我們的大使怎麼說</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-neutral-200" />
                <div>
                  <div className="font-bold text-neutral-900">
                    {homeData.testimonials[activeTestimonial]?.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {homeData.testimonials[activeTestimonial]?.role}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg italic text-neutral-700">
                "{homeData.testimonials[activeTestimonial]?.quote}"
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {homeData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={cn(
                      'h-2 w-2 rounded-full transition',
                      index === activeTestimonial ? 'bg-primary-500' : 'bg-neutral-300',
                    )}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold">{homeData.cta_section.title}</h2>
          <p className="mt-4 text-lg text-white/90">{homeData.cta_section.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={homeData.cta_section.primary_cta.href}
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition hover:bg-neutral-100"
            >
              {homeData.cta_section.primary_cta.label}
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/70">{homeData.cta_section.deadline}</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-neutral-400">
            © 2024 AWS Educate Taiwan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
