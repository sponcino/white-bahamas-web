'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/data/company';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  items: FaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-[#0099ff]/50 bg-white shadow-sm'
                : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4"
            >
              <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                {item.question}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'rotate-180 bg-[#0099ff] text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
