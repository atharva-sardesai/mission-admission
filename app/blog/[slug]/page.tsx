import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import blogPosts from '@/data/blogPosts.json'
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <div className="pt-16 bg-[#E8F0FF] min-h-screen">
      {/* Header */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-[#C9A84C] text-sm hover:underline">
              ← Blog
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400 text-sm">{post.category}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0A1628] font-bold text-sm">
              MA
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Mission Admission Team</p>
              <p className="text-gray-400 text-xs">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 mb-8">
            {/* Placeholder content — in production, use MDX */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl font-medium text-[#0A1628] mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="bg-[#E8F0FF] border-l-4 border-[#C9A84C] p-5 rounded-r-xl mb-8">
                <p className="font-semibold text-[#0A1628] text-sm mb-1">💡 Expert Tip</p>
                <p className="text-gray-700 text-sm">
                  This article covers key strategies for {post.category.toLowerCase()}. For
                  personalized guidance based on your specific score and target colleges,{' '}
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B00] font-semibold hover:underline"
                  >
                    book a free consultation with our counsellors
                  </a>
                  .
                </p>
              </div>

              <p>{post.content}</p>

              <p className="text-gray-500 mt-8 text-sm italic">
                This article is regularly updated to reflect the latest exam dates, cutoffs, and admission
                processes. For the most accurate, personalized guidance, contact Mission Admission directly.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#0A1628] rounded-2xl p-8 text-center mb-8">
            <h3 className="text-white font-bold text-2xl mb-3">
              Need Personalized Guidance?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Reading articles is a great start, but personalized one-on-one counselling is what
              actually gets students into their dream colleges. Book a free 15-minute consultation today.
            </p>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0BF6F] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              📞 Book Free Consultation on WhatsApp
            </a>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h3 className="text-[#0A1628] font-bold text-xl mb-4">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="text-xs bg-[#E8F0FF] text-[#0A1628] px-2 py-0.5 rounded-full font-semibold">
                      {r.category}
                    </span>
                    <h4 className="text-[#0A1628] font-semibold text-sm mt-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">{r.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
