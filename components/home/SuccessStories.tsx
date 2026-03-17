'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import testimonials from '@/data/testimonials.json'
import { BRAND, COLLEGE_LOGOS } from '@/lib/constants'

export default function SuccessStories() {
  const [idx, setIdx] = useState(0)
  const featured = testimonials.filter((t) => t.featured)

  const prev = () => setIdx((i) => (i === 0 ? featured.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === featured.length - 1 ? 0 : i + 1))

  const t = featured[idx]

  return (
    <section className="bg-[#E8F0FF] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-2">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Our Students. Our Pride.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students who trusted Mission Admission with the most important decision of
            their academic life — and landed their dream colleges.
          </p>
        </div>

        {/* College logo badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {COLLEGE_LOGOS.map((college) => (
            <span
              key={college.short}
              className="bg-white border border-gray-200 text-[#0A1628] font-bold text-sm px-4 py-2 rounded-full shadow-sm"
            >
              {college.short}
            </span>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 relative">
          {/* Quote */}
          <div className="text-[#C9A84C] text-6xl font-serif leading-none mb-4">&ldquo;</div>
          <p className="text-[#0A1628] text-lg sm:text-xl font-medium leading-relaxed mb-6">
            {t.quote}
          </p>

          {/* Student info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center text-[#C9A84C] font-bold text-lg flex-shrink-0">
              {t.initials}
            </div>
            <div>
              <div className="font-bold text-[#0A1628]">{t.name}</div>
              <div className="text-[#FF6B00] text-sm font-semibold">{t.college}</div>
              <div className="text-gray-500 text-xs">{t.percentile}</div>
            </div>
            <span className="ml-auto bg-[#0A1628] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {t.exam}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === idx ? 'bg-[#C9A84C] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* YouTube CTA */}
        <div className="text-center mt-10">
          <a
            href={BRAND.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
            Watch All Toppers Talk Episodes →
          </a>
        </div>
      </div>
    </section>
  )
}
