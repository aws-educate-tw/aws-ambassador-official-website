'use client';

import { motion } from '@/lib/motion';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: 'Q1: 申請履歷要用中文還是英文撰寫？',
    answer:
      '沒有特別限制！你可以選擇自己最擅長的語言來表達。如果你有外語能力優勢，不妨在履歷中特別標註，這也是一個展現個人特色的機會。',
  },
  {
    question: 'Q2: 如果住在中南部，需要經常往返台北嗎？',
    answer:
      '除了實體面試和上任活動這兩個重要時刻需要到台北外，大部分活動都可以透過線上方式參與。我們也鼓勵大使在自己的學校或地區推廣 AWS 雲端技術。',
  },
  {
    question: 'Q3: 支援線下活動是指要參加所有 AWS 校園活動嗎？',
    answer:
      'AWS Educate 不會要求大使參與所有活動。成為大使後，你會收到官方或學生社群活動的支援需求，可以根據自己的時間與興趣彈性選擇參加。',
  },
  {
    question: 'Q4: 成為大使後會有什麼培訓計畫？',
    answer: '我們有完整的培訓規劃！具體內容會在上任時詳細說明。',
  },
  {
    question: 'Q5: 該如何準備面試中關於雲端方面的問題？',
    answer:
      '註冊 AWS Educate 帳號，運用裡面的教學資源了解雲端運算的概念以及 AWS 核心服務。',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          常見問題 FAQ
        </motion.h2>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`${styles.chevron} ${openIndex === index ? styles.open : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
