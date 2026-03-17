import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { getAllBlogs } from '../utils/blogs.js'
import { formatDate } from '../utils/format.js'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getBlogImage } from '../utils/images.js'

export default function BlogIndex() {
  const { t } = useI18n()
  const blogs = useMemo(() => getAllBlogs(), [])
  const categories = useMemo(() => {
    const set = new Set(blogs.map((b) => b.category))
    return [{ value: '__all__', label: t('blog.all') }, ...Array.from(set).map((c) => ({ value: c, label: c }))]
  }, [blogs, t])
  const [active, setActive] = useState('__all__')

  const filtered = useMemo(() => {
    if (active === '__all__') return blogs
    return blogs.filter((b) => b.category === active)
  }, [active, blogs])

  return (
    <>
      <Seo
        title={t('blog.seoTitle')}
        description={t('blog.seoDesc')}
        canonicalPath="/blog"
      />

      {/* Page header */}
      <section className="bg-primary">
        <div className="container-max py-16 sm:py-20">
          <SectionHeading
            eyebrow={t('blog.eyebrow')}
            title={t('blog.title')}
            description={t('blog.desc')}
            tone="dark"
          />
        </div>
      </section>

      {/* Blog list */}
      <section className="section-alt">
        <div className="container-max py-12 sm:py-16">
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            {/* Category filter */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActive(c.value)}
                  className={[
                    'rounded-full px-4 py-2 text-xs font-bold tracking-[0.1em] transition-all duration-200 border',
                    c.value === active
                      ? 'bg-accent text-primary border-accent shadow-glow'
                      : 'bg-white text-secondary/70 border-black/10 hover:bg-primary hover:text-white hover:border-primary',
                  ].join(' ')}
                >
                  {c.label}
                </button>
              ))}
            </motion.div>

            {/* Blog grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {filtered.map((b) => (
                <motion.div key={b.slug} variants={fadeUp}>
                  <Link to={`/blog/${b.slug}`} className="block group">
                    <div className="bg-white rounded-2xl shadow-card border border-black/[0.07] overflow-hidden hover:shadow-lift transition-shadow duration-300">
                      {/* Thumbnail */}
                      <div className="relative">
                        <img
                          src={getBlogImage(b.slug)}
                          alt={b.title}
                          className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 img-overlay-light" />
                        <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary border border-black/8">
                          {b.category}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl font-bold text-primary leading-snug group-hover:text-accent/90 transition-colors">
                          {b.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-secondary/60">
                          <span>{b.author}</span>
                          <span className="text-secondary/25">•</span>
                          <span>{formatDate(b.date)}</span>
                          <span className="text-secondary/25">•</span>
                          <span>{b.readTime}</span>
                        </div>
                        <p className="mt-4 text-sm text-secondary/75 leading-relaxed line-clamp-3">
                          {b.content?.[0]}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary link-underline">
                          {t('common.readArticle')} <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
