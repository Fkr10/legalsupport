import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Gavel,
  Scale,
  BadgeCheck,
  Timer,
  FileText,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getHeroImage } from '../utils/images.js'
import { getPracticeAreaImage } from '../utils/images.js'
import testimonialsData from '../data/testimonials.json'
import practiceAreasData from '../data/practiceAreas.json'

const iconMap = {
  Gavel,
  Scale,
  ShieldCheck,
  BadgeCheck,
}

// Use first 4 practice areas for home page
const practiceAreas = practiceAreasData.areas.slice(0, 4).map(area => ({
  ...area,
  icon: iconMap[area.icon] || Gavel,
  focus: area.highlight,
  services: area.services.slice(0, 3), // Limit services display on home
}))

const testimonials = testimonialsData.items

export default function Home() {
  const { t, lang } = useI18n()
  return (
    <>
      <Seo
        title={t('home.seoTitle')}
        description={t('home.seoDesc')}
        canonicalPath="/"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={getHeroImage()}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50" />
        </div>
        <div className="container-max py-20 sm:py-24 w-full">
          <Motion.div variants={stagger(0.1)} initial="hidden" animate="show">
            <Motion.div variants={fadeUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {t('home.heroEyebrow')}
              </div>

              <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                {t('home.heroTitle')}
              </h1>
              <p className="mt-5 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
                {t('home.heroDesc')}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as="link" to="/contact" variant="accent">
                  {t('home.heroPrimaryCta')} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help"
                  target="_blank"
                  rel="noreferrer"
                  variant="glass"
                  className="bg-white/10 text-white border border-white/25 backdrop-blur-md hover:bg-white/20"
                >
                  {t('home.heroSecondaryCta')}
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { k: t('home.stats1k'), v: t('home.stats1v') },
                  { k: t('home.stats2k'), v: t('home.stats2v') },
                  { k: t('home.stats3k'), v: t('home.stats3v') },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-4"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-white/65">{s.v}</div>
                  </div>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Success / Track Record ── */}
      <section className="section-alt">
        <div className="container-max py-16 sm:py-20">
          <Motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-card border border-black/[0.06]">
              <SectionHeading
                eyebrow={t('home.successEyebrow')}
                title={t('home.successTitle')}
                description={t('home.successDesc')}
              />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <Motion.div variants={fadeUp} className="lg:col-span-7">
                <div className="bg-white border border-black/[0.07] rounded-2xl shadow-card p-7 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { k: t('home.successMetric1k'), v: t('home.successMetric1v') },
                      { k: t('home.successMetric2k'), v: t('home.successMetric2v') },
                      { k: t('home.successMetric3k'), v: t('home.successMetric3v') },
                    ].map((m) => (
                      <div
                        key={m.v}
                        className="rounded-xl bg-background border border-black/8 px-5 py-4"
                      >
                        <div className="text-xl font-bold text-primary">
                          {m.k}
                        </div>
                        <div className="mt-1 text-sm text-secondary/65">{m.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-black/8 pt-6">
                    <div className="text-sm font-bold text-primary">
                      {t('home.successListTitle')}
                    </div>
                    <div className="mt-4 grid gap-3">
                      {(t('home.successItems') || []).map((x) => (
                        <div key={x} className="flex items-start gap-2.5 text-sm text-secondary/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>{x}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>

              <Motion.div variants={fadeUp} className="lg:col-span-5">
                <div className="bg-primary rounded-2xl p-7 sm:p-8 h-full">
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent border-l-2 border-accent pl-3">
                    {t('home.successPanelEyebrow')}
                  </div>
                  <div className="mt-4 text-2xl font-bold text-white">
                    {t('home.successPanelTitle')}
                  </div>
                  <p className="mt-4 text-white/75 leading-relaxed">
                    {t('home.successPanelDesc')}
                  </p>
                  <div className="mt-6">
                    <Button as="link" to="/contact" variant="accent">
                      {t('home.successPanelCta')} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="section-light">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading
              eyebrow={t('home.practiceEyebrow')}
              title={t('home.practiceTitle')}
              description={t('home.practiceDesc')}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {practiceAreas.map((a) => {
                const Icon = a.icon
                return (
                  <Motion.div key={a.title} variants={fadeUp}>
                    <Card className={['p-0 overflow-hidden', a.focus ? 'border-accent/40 ring-1 ring-accent/20' : ''].join(' ')}>
                      {/* Image header with gradient overlay */}
                      <div className="relative">
                        <img
                          src={getPracticeAreaImage(a.title)}
                          alt=""
                          className="h-44 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 img-overlay-dark" />
                        {a.focus && (
                          <div className="absolute top-4 right-4 rounded-full bg-accent text-primary text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                            {lang === 'hi' ? 'मुख्य फोकस' : 'Main Focus'}
                          </div>
                        )}
                        <div className="absolute left-5 bottom-5 flex items-center gap-3">
                          <div className="h-11 w-11 rounded-xl border border-white/20 bg-white/15 backdrop-blur-md grid place-items-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-lg font-bold text-white">{a.title}</div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 sm:p-7">
                        <p className="text-secondary/85 leading-relaxed">{a.description}</p>
                        <ul className="mt-5 grid gap-2 text-sm text-secondary/80">
                          {a.services.map((s) => (
                            <li key={s} className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Motion.div>
                )
              })}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Trust / Speed ── */}
      <section style={{ background: '#F0F2F5' }}>
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid gap-10 md:grid-cols-12 items-start">
            <Motion.div variants={fadeUp} className="md:col-span-6">
              <SectionHeading
                eyebrow={t('home.trustEyebrow')}
                title={t('home.trustTitle')}
                description={t('home.trustDesc')}
              />
              <div className="mt-8 grid gap-4">
                {(t('home.trustBlocks') || []).map((x) => (
                  <div key={x.t} className="bg-white rounded-xl border border-black/8 shadow-soft px-6 py-5">
                    <div className="font-bold text-primary">{x.t}</div>
                    <div className="mt-1 text-sm text-secondary/75">{x.d}</div>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div variants={fadeUp} className="md:col-span-6">
              <div className="bg-white rounded-2xl border border-black/8 shadow-card p-7 sm:p-8">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
                  {t('home.speedEyebrow')}
                </div>
                <div className="mt-3 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  {t('home.speedTitle')}
                </div>
                <p className="mt-4 text-secondary/75 leading-relaxed">
                  {t('home.speedDesc')}
                </p>

                <div className="mt-6 grid gap-3">
                  {(t('home.speedSteps') || []).map((s, idx) => {
                    const icons = [PhoneCall, FileText, Timer]
                    const Icon = icons[idx] || Timer
                    return (
                      <div key={s.t} className="rounded-xl bg-background border border-black/8 px-5 py-4">
                        <div className="flex items-start gap-3">
                          <div className="h-9 w-9 rounded-xl border border-black/8 bg-white shadow-soft grid place-items-center shrink-0">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-primary text-sm">{s.t}</div>
                            <div className="mt-1 text-sm text-secondary/70">{s.d}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button as="link" to="/contact" variant="accent">
                    {t('home.speedPrimaryCta')} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button as="a" href="tel:+917452819652" variant="secondary">
                    {t('common.callNow')}
                  </Button>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-primary">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading
              eyebrow={t('home.testimonialsEyebrow')}
              title={t('home.testimonialsTitle')}
              description={t('home.testimonialsDesc')}
              tone="dark"
            />
            <Motion.div variants={fadeUp} className="mt-10">
              <TestimonialSlider testimonials={testimonials} />
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-alt">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="rounded-2xl bg-white shadow-card border border-black/[0.07] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
                  {t('home.readyEyebrow')}
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                  {t('home.readyTitle')}
                </div>
                <p className="mt-3 text-secondary/70 max-w-2xl leading-relaxed">
                  {t('home.readyDesc')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button as="link" to="/contact" variant="accent" className="w-full sm:w-auto justify-center">
                  {t('home.readyPrimaryCta')} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                >
                  {t('home.readySecondaryCta')}
                </Button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  )
}
