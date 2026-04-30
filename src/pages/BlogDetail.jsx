import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { getBlogBySlug } from '../utils/blogs.js'
import { formatDate } from '../utils/format.js'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getBlogImage } from '../utils/images.js'

export default function BlogDetail() {
  const { t } = useI18n()
  const { slug } = useParams()
  const blog = useMemo(() => getBlogBySlug(slug), [slug])

  if (!blog) {
    return (
      <section className="container-max py-16 sm:py-20">
        <div className="rounded-2xl bg-white border border-black/[0.07] shadow-soft p-8">
          <div className="text-2xl font-bold text-primary">
            Article not found
          </div>
          <p className="mt-3 text-secondary/75">
            The article you're looking for doesn't exist or was moved.
          </p>
          <div className="mt-6">
            <Button as="link" to="/blog" variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              {t('common.backToBlog')}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={blog.title}
        description={blog.content?.[0]}
        canonicalPath={`/blog/${blog.slug}`}
        ogImage={`/storage/blogs/${blog.slug}.svg`}
      />

      <section className="container-max py-12 sm:py-16">
        <Motion.div variants={stagger(0.12)} initial="hidden" animate="show">
          {/* Back link */}
          <Motion.div variants={fadeUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary/60 hover:text-primary transition link-underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('common.backToBlog')}
            </Link>
          </Motion.div>

          {/* Article meta */}
          <Motion.div variants={fadeUp} className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/20 px-4 py-1.5 text-xs font-bold text-primary tracking-[0.12em] uppercase">
              {blog.category}
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight max-w-4xl">
              {blog.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-secondary/60">
              <span>{blog.author}</span>
              <span className="text-secondary/30">•</span>
              <span>{formatDate(blog.date)}</span>
              <span className="text-secondary/30">•</span>
              <span>{blog.readTime}</span>
            </div>
          </Motion.div>

          {/* Hero image */}
          <Motion.div variants={fadeUp} className="mt-8">
            <div className="rounded-2xl overflow-hidden shadow-card border border-black/[0.06]">
              <img
                src={getBlogImage(blog.slug)}
                alt={blog.title}
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
            </div>
          </Motion.div>

          {/* Article body — maximum readability */}
          <Motion.article
            variants={fadeUp}
            className="mt-10 bg-white rounded-2xl border border-black/[0.07] shadow-soft p-8 sm:p-12"
          >
            <div className="mx-auto max-w-[68ch] prose-clean">
              {blog.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Motion.article>

          {/* CTA */}
          <Motion.div variants={fadeUp} className="mt-10">
            <div className="rounded-2xl bg-primary text-white p-8 sm:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                  Need help on a similar matter?
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-bold">
                  Get a clear next step today.
                </div>
                <p className="mt-3 text-white/75 max-w-2xl leading-relaxed">
                  Share your case type, location, and urgency. We'll reply with a structured
                  checklist and immediate actions where needed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button as="link" to="/contact" variant="accent">
                  Get Legal Help Now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/919876543210?text=Hi%20I%20need%20legal%20help"
                  target="_blank"
                  rel="noreferrer"
                  variant="glass"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </>
  )
}
