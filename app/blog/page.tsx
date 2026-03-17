import type { Metadata } from 'next'
import Link from 'next/link'
import blogPosts from '@/data/blogPosts.json'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — Admission Tips, MHT-CET Strategy & CAP Round Guides',
  description:
    'Expert articles on JEE, MHT-CET, NEET preparation, CAP round strategy, college selection, scholarships, and Maharashtra admission processes from Mission Admission Pune.',
}

const categories = ['All', 'MHT-CET Strategy', 'CAP Round Guide', 'JEE Tips', 'NEET Preparation', 'College Reviews', 'Scholarship Info']

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Admission Tips & <span className="text-[#C9A84C]">Expert Guides</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Free resources to help students and parents navigate JEE, MHT-CET, NEET, and
            Maharashtra&apos;s complex admission processes.
          </p>
        </div>
      </section>

      <section className="bg-[#E8F0FF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <span
                key={c}
                className="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#0A1628] hover:text-[#C9A84C] hover:border-[#0A1628] transition-colors"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Featured posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {featured.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                {/* Colored header based on category */}
                <div
                  className={`h-3 ${
                    post.category === 'MHT-CET Strategy'
                      ? 'bg-green-500'
                      : post.category === 'CAP Round Guide'
                      ? 'bg-[#FF6B00]'
                      : post.category === 'College Reviews'
                      ? 'bg-[#C9A84C]'
                      : 'bg-[#0A1628]'
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#E8F0FF] text-[#0A1628] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className={`font-bold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors mb-2 ${i === 0 ? 'text-xl' : 'text-base'}`}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                    <span className="text-[#FF6B00] text-xs font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#0A1628] to-[#C9A84C]" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#E8F0FF] text-[#0A1628] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors mb-2 text-sm">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
