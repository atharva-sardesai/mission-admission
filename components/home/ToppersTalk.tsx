import { BRAND } from '@/lib/constants'

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: "Saurabh Wagaj's COEP Journey — JEE + MHT-CET Topper",
    student: 'Saurabh Wagaj',
    college: 'COEP Pune — Computer Engineering',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: "Shreya Varne's NIT Success Story — JEE Main",
    student: 'Shreya Varne',
    college: 'MANIT Bhopal — CS',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: "Hemangi Koli's PICT CAP Round Strategy",
    student: 'Hemangi Koli',
    college: 'PICT Pune — Computer Engineering',
  },
]

export default function ToppersTalk() {
  return (
    <section className="bg-[#E8F0FF] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-2">
            Toppers Talk Series
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Real Stories. Real Results.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from students who cracked JEE, MHT-CET, and NEET with Mission
            Admission&apos;s guidance. Every video is an honest conversation — no scripts, no
            filters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videos.map((v) => (
            <a
              key={v.title}
              href={BRAND.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-[#0A1628] flex items-center justify-center overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#0A1628] text-sm mb-1 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-xs">{v.college}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BRAND.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            Watch All Episodes on YouTube →
          </a>
        </div>
      </div>
    </section>
  )
}
