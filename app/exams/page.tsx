import type { Metadata } from 'next'
import { buildWhatsAppLink } from '@/lib/constants'
import exams from '@/data/exams.json'
import examDates from '@/data/examDates.json'
import { sortByDate, isDatePast } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Exams We Cover — JEE, MHT-CET, NEET, BITSAT, VITEEE, CAT & More',
  description:
    'Comprehensive counselling for all major engineering, medical, and MBA entrance exams. Expert guidance for JEE, MHT-CET, NEET, BITSAT, VITEEE, COMED-K, and CAT from Mission Admission Pune.',
}

const iconEmoji: Record<string, string> = {
  calculator: '🧮',
  award: '🏆',
  'book-open': '📖',
  'heart-pulse': '🩺',
  zap: '⚡',
  'graduation-cap': '🎓',
  'map-pin': '📍',
  briefcase: '💼',
}

export default function ExamsPage() {
  const sortedDates = sortByDate(examDates)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Exams We Cover</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Expert Guidance for <span className="text-[#C9A84C]">Every Entrance Exam</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From JEE to NEET, MHT-CET to MBA — we provide personalized counselling for all
            major entrance exams and admission processes in India.
          </p>
        </div>
      </section>

      {/* Exam Calendar */}
      <section className="bg-[#112240] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6">📅 2026 Exam Calendar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-[#C9A84C] font-semibold">Exam</th>
                  <th className="text-left py-3 px-4 text-[#C9A84C] font-semibold">Event</th>
                  <th className="text-left py-3 px-4 text-[#C9A84C] font-semibold">Date</th>
                  <th className="text-left py-3 px-4 text-[#C9A84C] font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedDates.map((item, i) => {
                  const past = isDatePast(item.date)
                  return (
                    <tr key={i} className={`border-b border-white/5 ${past ? 'opacity-40' : ''}`}>
                      <td className="py-3 px-4 text-white font-medium">{item.exam}</td>
                      <td className="py-3 px-4 text-gray-300">{item.event}</td>
                      <td className="py-3 px-4 text-[#C9A84C] font-semibold">{item.displayDate}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            past
                              ? 'bg-gray-700 text-gray-400'
                              : 'bg-[#22C55E]/20 text-[#22C55E]'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${past ? 'bg-gray-500' : 'bg-[#22C55E] animate-pulse'}`} />
                          {past ? 'Completed' : 'Upcoming'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual exam sections */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {exams.map((exam) => (
              <div
                key={exam.id}
                id={exam.id}
                className="bg-[#112240] rounded-2xl p-7 sm:p-9 border border-white/5 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{iconEmoji[exam.icon] || '📚'}</span>
                    <div>
                      <h2 className="text-white font-bold text-2xl">{exam.name}</h2>
                      <p className="text-gray-400 text-sm">{exam.conductedBy}</p>
                    </div>
                  </div>
                  <a
                    href={buildWhatsAppLink(`Hi Mission Admission, I need counselling for ${exam.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors flex-shrink-0"
                  >
                    Get {exam.name} Counselling →
                  </a>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exam.description}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Key Dates */}
                  <div className="bg-[#0A1628] rounded-xl p-4">
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-2">2026 Dates</p>
                    <ul className="space-y-1">
                      {exam.dates2026.map((d, i) => (
                        <li key={i} className="text-sm">
                          <span className="text-gray-400">{d.event}:</span>{' '}
                          <span className={`font-medium ${isDatePast(d.date) ? 'text-gray-500' : 'text-white'}`}>
                            {d.date}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Eligibility */}
                  <div className="bg-[#0A1628] rounded-xl p-4 sm:col-span-1">
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-2">Eligibility</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exam.eligibility}</p>
                  </div>

                  {/* Pattern */}
                  <div className="bg-[#0A1628] rounded-xl p-4">
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-2">Exam Pattern</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exam.pattern}</p>
                  </div>

                  {/* How We Help */}
                  <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-4">
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-2">How We Help</p>
                    <p className="text-gray-200 text-sm leading-relaxed">{exam.howWeHelp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
