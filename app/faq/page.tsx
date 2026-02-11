'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are Veora products suitable for sensitive skin?',
    answer:
      'Yes! All Veora products are dermatologically tested and crafted with gentle, skin-loving ingredients suitable for most skin types, including sensitive skin.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Absolutely. Veora Cosmetics is 100% cruelty-free. We never test on animals.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Orders are processed within 24-48 hours. Delivery typically takes 3-7 business days depending on your location.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship worldwide! Shipping times and costs vary depending on the destination.',
  },
  {
    question: 'What is your return policy?',
    answer:
      "We offer a 14-day hassle-free return policy. If you're not satisfied, contact our support team for assistance.",
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order ships, you will receive an email with tracking details and a tracking link.',
  },
  {
    question: 'Do you offer discounts or loyalty rewards?',
    answer:
      'Yes! Subscribe to our newsletter and join the Veora family to receive exclusive offers and rewards.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about Veora Cosmetics
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ================= SUPPORT CTA ================= */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </div>
  );
}