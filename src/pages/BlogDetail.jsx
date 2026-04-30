import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
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
        <div className="rounded-[6px] bg-white border border-[#E5E7EB] p-8" style={{boxShadow:'rgba(11,28,44,0.06) 0px 3px 6px 0px'}}>
          <div className="text-[24px] font-[300] text-[#0B1C2C] tracking-[-0.26px]">
            Article not found
          </div>
          <p className="mt-3 text-[16px] font-[300] text-[#4B5563]">
            The article you're looking for doesn't exist or was moved.
          </p>
          <div className="mt-6">
            <Button as="link" to="/blog" variant="ghost">
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
        ogImage={getBlogImage(blog.slug)}
        ogType="article"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "image": `https://legalsupportnow.in${getBlogImage(blog.slug)}`,
            "author": {
              "@type": "Person",
              "name": blog.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "LegalSupportNow",
              "logo": {
                "@type": "ImageObject",
                "url": "https://legalsupportnow.in/logo.svg"
              }
            },
            "datePublished": blog.date,
            "description": blog.content?.[0]
          })}
        </script>
      </Seo>

      <section className="container-max py-12 sm:py-16">
        <Motion.div variants={stagger(0.12)} initial="hidden" animate="show">
          {/* Back link */}
          <Motion.div variants={fadeUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[14px] font-[400] text-[#4B5563] hover:text-[#C8A951] transition-colors duration-150"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('common.backToBlog')}
            </Link>
          </Motion.div>

          {/* Article meta */}
          <Motion.div variants={fadeUp} className="mt-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-[400] tracking-[0.1em] uppercase text-[#C8A951]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
              {blog.category}
            </div>
            <h1 className="mt-4 text-[clamp(2rem,4vw+1rem,3.5rem)] font-[300] tracking-[-1.4px] text-[#0B1C2C] leading-[1.08] max-w-4xl">
              {blog.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-[400] text-[#6B7280]">
              <span>{blog.author}</span>
              <span className="text-[#E5E7EB]">•</span>
              <span>{formatDate(blog.date)}</span>
              <span className="text-[#E5E7EB]">•</span>
              <span>{blog.readTime}</span>
            </div>
          </Motion.div>

          {/* Hero image */}
          <Motion.div variants={fadeUp} className="mt-8">
            <div className="rounded-[8px] overflow-hidden border border-[#E5E7EB]" style={{boxShadow:'rgba(11,28,44,0.08) 0px 15px 35px 0px'}}>
              <img
                src={getBlogImage(blog.slug)}
                alt={blog.title}
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
            </div>
          </Motion.div>

          {/* Article body — DESIGN.md typography */}
          <Motion.article
            variants={fadeUp}
            className="mt-10 bg-white rounded-[6px] border border-[#E5E7EB] p-8 sm:p-12"
            style={{boxShadow:'rgba(11,28,44,0.06) 0px 3px 6px 0px'}}
          >
            <div className="mx-auto max-w-[68ch] prose-clean">
              {blog.content.map((p, i) => (
                <p key={i} className="text-[16px] font-[300] text-[#4B5563] leading-[1.6] mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </Motion.article>

          {/* CTA — DESIGN.md Brand Dark */}
          <Motion.div variants={fadeUp} className="mt-10">
            <div className="rounded-[8px] bg-[#08151F] text-white p-8 sm:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between" style={{boxShadow:'rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px'}}>
              <div>
                <div className="text-[11px] font-[400] tracking-[0.1em] uppercase text-[#E8D38A]">
                  Need help on a similar matter?
                </div>
                <div className="mt-3 text-[32px] font-[300] tracking-[-0.64px] leading-[1.10]">
                  Get a clear next step today.
                </div>
                <p className="mt-3 text-[16px] font-[300] text-white/70 max-w-2xl leading-[1.40]">
                  Share your case type, location, and urgency. We'll reply with a structured
                  checklist and immediate actions where needed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button as="link" to="/contact" variant="primary">
                  Get Legal Help <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href="https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-[20px] py-[10px] rounded-[4px] border border-white/30 text-white text-[16px] font-[400] hover:bg-white/10 transition-colors duration-150"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>
    </>
  )
}

