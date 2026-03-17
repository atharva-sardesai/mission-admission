import Link from 'next/link'
import exams from '@/data/exams.json'

const iconMap: Record<string, string> = {
  calculator: '🧮',
  award: '🏆',
  'book-open': '📖',
  'heart-pulse': '🩺',
  zap: '⚡',
  'graduation-cap': '🎓',
  'map-pin': '📍',
  briefcase: '💼',
}

export default function ExamsGrid() {
  return (
    <section className="bg-[#E8F0FF] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-2">
            Expert Guidance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Expert Guidance for Every Major Entrance Exam
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From JEE to NEET, MHT-CET to MBA — we provide personalized counselling for all major
            entrance exams and admission processes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {exams.map((exam) => (
            <Link
              key={exam.id}
              href={`/exams#${exam.id}`}
              className="bg-white rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group border border-transparent hover:border-[#C9A84C]/30"
            >
              <div className="text-3xl mb-3">{iconMap[exam.icon] || '📚'}</div>
              <h3 className="font-bold text-[#0A1628] text-sm sm:text-base mb-1 group-hover:text-[#C9A84C] transition-colors">
                {exam.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug">{exam.description}</p>
              <span className="inline-flex items-center gap-1 text-[#FF6B00] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                Learn More <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
