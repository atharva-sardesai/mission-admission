import { BRAND } from '@/lib/constants'

// TODO: Replace null with actual YouTube video IDs once available
// e.g. { id: 'ABC123xyz12', student: '...', ... }
// Thumbnail will auto-appear once the real ID is added.
const videos = [
  {
    id: null as string | null,
    title: "Saurabh Wagaj's COEP Journey — JEE + MHT-CET Topper",
    student: 'Saurabh Wagaj',
    college: 'COEP Pune — Computer Engineering',
    exam: 'JEE + MHT-CET',
    initials: 'SW',
  },
  {
    id: null as string | null,
    title: "Shreya Varne's NIT Success Story — JEE Main",
    student: 'Shreya Varne',
    college: 'MANIT Bhopal — CS',
    exam: 'JEE Main',
    initials: 'SV',
  },
  {
    id: null as string | null,
    title: "Hemangi Koli's PICT CAP Round Strategy",
    student: 'Hemangi Koli',
    college: 'PICT Pune — Computer Engineering',
    exam: 'MHT-CET',
    initials: 'HK',
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
              {/* Thumbnail — real YouTube image if ID provided, branded placeholder otherwise */}
              <div className="relative aspect-video overflow-hidden">
                {v.id ? (
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  /* Branded placeholder — replace with real thumbnail once video ID is available */
                  <div className="w-full h-full bg-gradient-to-br from-[#0A1628] to-[#112240] flex flex-col items-center justify-center gap-3 px-4">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] font-bold text-xl">
                      {v.initials}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm leading-snug">{v.student}</p>
                      <p className="text-[#C9A84C] text-xs mt-0.5">{v.exam}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"/>
                      </svg>
                      Watch on YouTube
                    </div>
                  </div>
                )}
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform opacity-90">
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
