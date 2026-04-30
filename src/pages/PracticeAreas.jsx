import { motion as Motion } from 'framer-motion'
import {
  Gavel,
  Scale,
  Building2,
  HeartHandshake,
  Home as HomeIcon,
  Shield,
  ArrowRight,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getPracticeAreaImage, getPracticeHeaderImage } from '../utils/images.js'
import practiceAreasData from '../data/practiceAreas.json'

const iconMap = {
  Gavel,
  Scale,
  Building2,
  HeartHandshake,
  Home: HomeIcon,
  Shield,
}

const practiceAreasWithIcons = practiceAreasData.areas.map(area => ({
  ...area,
  icon: iconMap[area.icon] || Gavel,
}))

export default function PracticeAreas() {
  const { t } = useI18n()
  return (
    <>
      <Seo
        title={t('practice.seoTitle')}
        description={t('practice.seoDesc')}
        canonicalPath="/practice-areas"
      />

      {/* Page header */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={getPracticeHeaderImage()}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08151F]/90 via-[#08151F]/75 to-[#08151F]/60" />
        </div>
        <div className="container-max py-20 sm:py-24">
          <SectionHeading
            eyebrow={t('practice.eyebrow')}
            title={t('practice.title')}
            description={t('practice.desc')}
            tone="dark"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#F8F9FA]">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-6 md:grid-cols-2">
              {practiceAreasWithIcons.map((p) => {
                const Icon = p.icon
                return (
                  <Motion.div key={p.title} variants={fadeUp}>
                    <div
                      className={[
                        'bg-white rounded-[6px] overflow-hidden border transition-all duration-300 h-full flex flex-col',
                        p.highlight ? 'border-[#C8A951]/40 ring-1 ring-[#C8A951]/20' : 'border-[#E5E7EB]',
                      ].join(' ')}
                      style={{ boxShadow: p.highlight ? 'rgba(200,169,81,0.12) 0px 8px 24px 0px' : 'rgba(11,28,44,0.06) 0px 3px 6px 0px' }}
                    >
                      {/* Image with gradient overlay */}
                      <div className="relative">
                        <img
                          src={getPracticeAreaImage(p.title)}
                          alt=""
                          className="h-44 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,28,44,0.85) 0%, rgba(11,28,44,0.30) 60%, transparent 100%)' }} />
                        {p.highlight && (
                          <div className="absolute top-4 right-4 rounded-[4px] bg-[#C8A951] text-[#0B1C2C] text-[10px] font-[400] tracking-[0.1em] uppercase px-2 py-1 shadow-md">
                            {t('practice.mainFocus')}
                          </div>
                        )}
                        <div className="absolute left-5 bottom-5 flex items-center gap-3">
                          <div className="h-11 w-11 rounded-[6px] border border-white/20 bg-white/10 backdrop-blur-md grid place-items-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-[20px] font-[300] tracking-[-0.2px] text-white">{p.title}</div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col">
                        <p className="text-[16px] font-[300] text-[#4B5563] leading-[1.40] flex-1">{p.description}</p>
                        <div className="mt-5 grid gap-2 pt-5 border-t border-[#E5E7EB]">
                          {p.services.map((s) => (
                            <div key={s} className="flex items-center gap-2.5 text-[14px] font-[300] text-[#6B7280]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951] shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                )
              })}
            </div>

            {/* CTA banner */}
            <Motion.div variants={fadeUp} className="mt-12">
              <div className="bg-[#08151F] rounded-[8px] p-8 sm:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between" style={{boxShadow:'rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px'}}>
                <div>
                  <div className="text-[11px] font-[400] tracking-[0.1em] uppercase text-[#C8A951] border-l-2 border-[#C8A951] pl-3">
                    {t('practice.ctaEyebrow')}
                  </div>
                  <div className="mt-3 text-[32px] font-[300] tracking-[-0.64px] text-white leading-[1.10]">
                    {t('practice.ctaTitle')}
                  </div>
                  <p className="mt-3 text-[16px] font-[300] text-white/70 max-w-2xl leading-[1.40]">
                    {t('practice.ctaDesc')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button as="link" to="/contact" variant="primary">
                    {t('practice.ctaPrimary')} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <a
                    href="https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-[20px] py-[10px] rounded-[4px] border border-white/30 text-white text-[16px] font-[400] hover:bg-white/10 transition-colors duration-150"
                  >
                    {t('common.whatsapp')}
                  </a>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </>
  )
}

