'use client'

import { useState } from 'react'
import { buildWhatsAppLink, BRAND } from '@/lib/constants'

const examOptions = ['JEE Main', 'JEE Advanced', 'MHT-CET', 'NEET', 'BITSAT', 'VITEEE', 'CAT/MBA', 'NRI Quota', 'Other']
const scoreOptions = ['Below 50 percentile', '50–70 percentile', '70–85 percentile', '85–95 percentile', '95+ percentile', "Haven't taken exam yet"]

export default function LeadForm() {
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    exams: [] as string[],
    scoreRange: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleExam = (exam: string) => {
    setForm((f) => ({
      ...f,
      exams: f.exams.includes(exam) ? f.exams.filter((e) => e !== exam) : [...f.exams, exam],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Mission Admission! Here are my details:
Student: ${form.studentName}
Parent: ${form.parentName}
Phone: ${form.phone}
Email: ${form.email || 'Not provided'}
Exams: ${form.exams.join(', ') || 'Not specified'}
Score Range: ${form.scoreRange || 'Not specified'}
Message: ${form.message || 'None'}

Please contact me for counselling.`
    setSubmitted(true)
    window.open(buildWhatsAppLink(msg), '_blank')
  }

  if (submitted) {
    return (
      <section className="bg-[#0A1628] py-16 sm:py-20" id="enquiry">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">We got your enquiry!</h2>
          <p className="text-gray-300 mb-8">
            WhatsApp opened with your details. We&apos;ll respond within a few hours. You can also
            call us directly at{' '}
            <a href={`tel:${BRAND.phone.primary}`} className="text-[#C9A84C] font-semibold">
              {BRAND.phone.primary}
            </a>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-gray-400 hover:text-white text-sm underline"
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#0A1628] py-16 sm:py-20" id="enquiry">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-gray-400">
            Fill this form and we&apos;ll send your details directly to WhatsApp. We respond within
            a few hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#112240] rounded-2xl p-7 sm:p-9 space-y-5 border border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-white text-sm font-medium mb-1.5">
                Student Name <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.studentName}
                onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                placeholder="Enter student's name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1.5">Parent Name</label>
              <input
                type="text"
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                placeholder="Enter parent's name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-white text-sm font-medium mb-1.5">
                WhatsApp Number <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1.5">Email (optional)</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="student@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Exams Interested In
            </label>
            <div className="flex flex-wrap gap-2">
              {examOptions.map((exam) => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => toggleExam(exam)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    form.exams.includes(exam)
                      ? 'bg-[#C9A84C] border-[#C9A84C] text-[#0A1628]'
                      : 'border-white/20 text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-1.5">
              Expected Score / Percentile Range
            </label>
            <select
              value={form.scoreRange}
              onChange={(e) => setForm({ ...form, scoreRange: e.target.value })}
              className="w-full bg-[#0A1628] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
            >
              <option value="">Select range</option>
              {scoreOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-1.5">
              Message (optional)
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Any specific questions or concerns? (e.g., interested in COEP CS, confused between JEE and CET strategy...)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B00] hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-base transition-colors"
          >
            📲 Send via WhatsApp & Book Session
          </button>

          <p className="text-center text-gray-500 text-xs">
            By submitting, you agree to be contacted by Mission Admission via WhatsApp/phone.
          </p>
        </form>
      </div>
    </section>
  )
}
