'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import testimonials from '@/data/testimonials.json'
import { buildWhatsAppLink, WHATSAPP_MESSAGES, BRAND } from '@/lib/constants'

// Note: metadata export works only in server components. Moving it to a parent or using generateMetadata would be ideal.
// For simplicity, we'll use the layout's default title here.

const filters = ['All', 'JEE', 'MHT-CET', 'NEET', 'MBA']

export default function SuccessStoriesPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.exam.includes(filter))

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Students. <span className="text-[#C9A84C]">Our Pride.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real students. Real colleges. Real results. These are the stories of students who
            trusted Mission Admission with the most important decision of their academic life.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#112240] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-center">
            {[
              { v: '500+', l: 'Students Guided' },
              { v: 'IITs & NITs', l: 'Top Institutes' },
              { v: 'COEP, VJTI', l: 'Top Maharashtra Colleges' },
              { v: '98%', l: 'Success Rate' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-[#C9A84C]">{s.v}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[#E8F0FF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f
                    ? 'bg-[#0A1628] text-[#C9A84C]'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Student grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col"
              >
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center text-[#C9A84C] font-bold text-lg flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1628] text-sm">{t.name}</div>
                    <div className="text-[#FF6B00] text-xs font-semibold">{t.exam}</div>
                  </div>
                </div>

                {/* College */}
                <div className="bg-[#E8F0FF] rounded-lg px-3 py-2 mb-3">
                  <p className="text-[#0A1628] font-semibold text-xs">{t.college}</p>
                </div>

                {/* Score */}
                <p className="text-gray-400 text-xs mb-3">{t.percentile}</p>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* YouTube link */}
                {t.youtubeLink && (
                  <a
                    href={t.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-[#FF0000] text-xs font-semibold hover:gap-2 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch their story
                  </a>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No stories found for {filter}. More coming soon!
            </div>
          )}
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Watch the Full Toppers Talk Series</h2>
          <p className="text-gray-400 mb-8">
            Our YouTube series features in-depth conversations with students who cracked JEE,
            MHT-CET, and NEET. No scripts, no filters — just honest success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
              Watch on YouTube
            </a>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              📞 Be Our Next Success Story
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
