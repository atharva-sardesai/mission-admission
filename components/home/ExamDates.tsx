import Link from 'next/link'
import examDates from '@/data/examDates.json'
import { isDatePast, sortByDate } from '@/lib/utils'

export default function ExamDates() {
  const sorted = sortByDate(examDates)
  const upcoming = sorted.filter((e) => !isDatePast(e.date)).slice(0, 8)
  const past = sorted.filter((e) => isDatePast(e.date)).slice(-2)
  const display = [...past, ...upcoming].slice(0, 8)

  return (
    <section className="bg-[#0A1628] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">
              Important Dates
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Upcoming Exam Dates & Deadlines
            </h2>
          </div>
          <Link
            href="/exams"
            className="text-[#C9A84C] font-semibold text-sm hover:underline flex-shrink-0"
          >
            See Full Exam Calendar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {display.map((item, i) => {
            const past = isDatePast(item.date)
            return (
              <div
                key={i}
                className={`rounded-xl p-5 border transition-all ${
                  past
                    ? 'bg-white/5 border-white/5 opacity-50'
                    : 'bg-[#112240] border-white/10 hover:border-[#C9A84C]/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      past ? 'bg-gray-500' : 'bg-[#22C55E] animate-pulse'
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      past ? 'text-gray-500' : 'text-[#22C55E]'
                    }`}
                  >
                    {past ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <h3 className={`font-bold text-sm mb-1 ${past ? 'text-gray-500' : 'text-white'}`}>
                  {item.exam}
                </h3>
                <p className={`text-xs mb-2 ${past ? 'text-gray-600' : 'text-gray-400'}`}>
                  {item.event}
                </p>
                <p
                  className={`text-sm font-semibold ${past ? 'text-gray-600' : 'text-[#C9A84C]'}`}
                >
                  {item.displayDate}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
