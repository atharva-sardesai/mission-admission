'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import faqs from '@/data/faqs.json'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#E8F0FF] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about Mission Admission&apos;s counselling services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                aria-expanded={open === faq.id}
              >
                <span className="font-semibold text-[#0A1628] text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#C9A84C] transition-transform duration-200 ${
                    open === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === faq.id && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
