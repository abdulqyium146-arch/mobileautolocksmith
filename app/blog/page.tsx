import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: `Auto Locksmith Advice & Guides | Excalibur Blog`,
  description: `Expert advice on car key replacement, lost keys, transponder programming, and more — from Ian Casson at Excalibur Auto Locksmiths. Call ${SITE.phone}.`,
  alternates: { canonical: '/blog' },
}

const POSTS = [
  {
    slug: 'lost-car-keys-what-to-do-north-west',
    title: "Lost Your Car Keys? Here's Exactly What To Do (North West Guide)",
    excerpt: "Losing your car keys is one of the most stressful situations a driver can face. Here's a step-by-step guide to what to do — and what NOT to do — to get back on the road as fast and cheaply as possible.",
    readTime: '5 min read',
    date: '2024-11-15',
    author: 'Ian Casson',
  },
  {
    slug: 'car-key-replacement-cost-uk-2024',
    title: "How Much Does Car Key Replacement Cost in the UK? (2024 Honest Guide)",
    excerpt: "Car key replacement costs vary enormously — from £45 for a basic cut to £500+ at the main dealer for a smart key. We break down the real costs by key type and show you how to pay much less.",
    readTime: '6 min read',
    date: '2024-10-28',
    author: 'Ian Casson',
  },
  {
    slug: 'locksmith-vs-main-dealer-car-keys',
    title: "Locksmith vs Main Dealer for Car Keys — The Real Cost Comparison",
    excerpt: "Should you call an independent auto locksmith or go straight to the main dealer? We compare wait times, costs, convenience, and quality honestly — with real figures from both sides.",
    readTime: '7 min read',
    date: '2024-09-12',
    author: 'Ian Casson',
  },
  {
    slug: 'transponder-keys-explained',
    title: "What is a Transponder Key and Why Does it Need Programming?",
    excerpt: "Every modern car has a transponder chip in the key that communicates with the immobiliser. Understanding how it works explains why you can't just copy a car key at a locksmith kiosk.",
    readTime: '5 min read',
    date: '2024-08-05',
    author: 'Ian Casson',
  },
]

export default function BlogPage() {
  return (
    <>
      <div className="container">
        <BreadcrumbNav items={[{ name: 'Blog', href: '/blog' }]} />
      </div>

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Advice &amp; Guides
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Honest advice on car key replacement, lost keys, and everything the main dealer
            doesn&apos;t tell you — from Ian Casson at Excalibur.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-8">
            {POSTS.map(post => (
              <article key={post.slug} className="card p-6">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} aria-hidden="true" /> {post.readTime}
                  </span>
                  <span>·</span>
                  <span>By {post.author}</span>
                </div>
                <h2 className="font-heading font-bold text-primary text-xl mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors focus-ring"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted leading-relaxed mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:gap-3 transition-all focus-ring"
                >
                  Read Article <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
