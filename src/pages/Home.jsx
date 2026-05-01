import {
  ArrowRight,
  ShieldCheck,
  Shield,
  Gavel,
  Scale,
  BadgeCheck,
  Timer,
  FileText,
  CheckCircle2,
  Monitor,
} from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import Seo from '../components/Seo.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import {getPracticeAreaImage } from '../utils/images.js'
import testimonialsData from '../data/testimonials.json'
import practiceAreasData from '../data/practiceAreas.json'
import { siteConfig } from '../config/site.js'

const iconMap = { Gavel, Scale, ShieldCheck, BadgeCheck, Shield }
const practiceAreas = practiceAreasData.areas.map(area => ({
  ...area,
  icon: iconMap[area.icon] || Gavel,
  focus: area.highlight,
  services: area.services.slice(0, 3),
}))
const testimonials = testimonialsData.items

// DESIGN.md: Stripe shadow
const elevatedShadow = 'rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px'
const ambientShadow  = 'rgba(23,23,23,0.06) 0px 3px 6px 0px'

export default function Home() {
  const { t, lang } = useI18n()
  return (
    <>
      <Seo title={t('home.seoTitle')} description={t('home.seoDesc')} canonicalPath="/" />

      {/* ── HERO — banner.jpg background with dark overlay + white text ── */}
      <section className="relative min-h-[78vh] flex items-center pt-[68px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/banner.jpg"
            alt="Expert Legal Support & Criminal Defense"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          {/* Dark navy gradient overlay — matches brand #0B1C2C */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,28,44,0.88) 0%, rgba(11,28,44,0.78) 55%, rgba(8,21,31,0.85) 100%)' }} />
        </div>

        <div className="container-max py-12 w-full">
          <Motion.div variants={stagger(0.1)} initial="hidden" animate="show"
            className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left: Headline + CTAs */}
            <Motion.div variants={fadeUp}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[11px] font-[400] tracking-[0.12em] uppercase text-[#C8A951]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951] animate-pulse" />
                {t('home.heroEyebrow')}
              </div>

              {/* Hero heading — white on dark */}
              <h1 className="mt-3 text-[clamp(2rem,4vw+1rem,3rem)] font-[500] leading-[1.15] tracking-[-0.96px] text-white">
                {t('home.heroTitle')}
              </h1>
              <p className="mt-3 text-[18px] font-[400] leading-[1.40] text-white/80 max-w-xl">
                {t('home.heroDesc')}
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-row flex-wrap gap-3">
                <Button as="link" to="/contact" variant="accent" className="flex-1 justify-center">
                  {t('home.heroPrimaryCta')} <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${siteConfig.contact.whatsapp.defaultMessage}`}
                  target="_blank" rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-[18px] py-[10px] rounded-[4px] border border-white/30 text-white text-[16px] font-[400] hover:bg-white/10 transition-colors duration-150"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {t('home.heroSecondaryCta')}
                </a>
              </div>

              {/* Stats row — white on dark */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { k: t('home.stats1k'), v: t('home.stats1v') },
                  { k: t('home.stats3k'), v: t('home.stats3v') },
                ].map((s) => (
                  <div key={s.v} className="rounded-[6px] border border-white/15 bg-white/10 backdrop-blur-sm px-3 py-2">
                    <div className="text-[20px] font-[500] leading-none text-white tracking-[-0.22px]">{s.k}</div>
                    <div className="mt-1 text-[11px] font-[400] text-white/70 leading-snug">{s.v}</div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: lang === 'hi' ? 'सत्यापित वकील' : 'Verified Advocate', icon: <BadgeCheck className="h-3.5 w-3.5 text-[#C8A951] shrink-0" /> },
                  { label: lang === 'hi' ? 'कोर्ट-रेडी रणनीति' : 'Court Strategy', icon: <Gavel className="h-3.5 w-3.5 text-[#C8A951] shrink-0" /> },
                  { label: lang === 'hi' ? '100% गोपनीय' : '100% Confidential', icon: <ShieldCheck className="h-3.5 w-3.5 text-[#C8A951] shrink-0" /> },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 rounded-[4px] border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-[400] text-white/80">
                    {b.icon}
                    {b.label}
                  </span>
                ))}
              </div>
            </Motion.div>

            {/* Right: Cards */}
            <Motion.div variants={fadeUp} className="flex flex-col gap-3">
              {/* Metrics card */}
              <div className="rounded-[8px] border border-white/15 bg-white/10 backdrop-blur-md p-5" style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 14px 21px -14px' }}>
                <div className="text-[10px] font-[500] tracking-[0.12em] uppercase text-[#C8A951] mb-3">
                  {lang === 'hi' ? 'सिद्ध ट्रैक रिकॉर्ड' : 'Proven Track Record'}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { k: t('home.successMetric1k'), v: t('home.successMetric1v') },
                    { k: t('home.successMetric2k'), v: t('home.successMetric2v') },
                    { k: t('home.successMetric3k'), v: t('home.successMetric3v') },
                  ].map((m) => (
                    <div key={m.v} className="text-center rounded-[6px] bg-white/10 border border-white/10 px-2 py-2">
                      <div className="text-[16px] font-[500] text-white leading-none">{m.k}</div>
                      <div className="mt-1 text-[9px] font-[400] text-white/60 leading-snug">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {(t('home.successItems') || []).map((x) => (
                    <div key={x} className="flex items-start gap-2 text-[13px] font-[400] text-white/80">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-[#C8A951] shrink-0" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Work */}
              <div className="rounded-[8px] border border-[#C8A951]/30 bg-[rgba(200,169,81,0.08)] backdrop-blur-md p-5">
                <div className="text-[10px] font-[500] tracking-[0.12em] uppercase text-[#C8A951] mb-3">
                  {lang === 'hi' ? 'हम कैसे काम करते हैं' : 'How We Work'}
                </div>
                <div className="space-y-2">
                  {[
                    { n: '01', t: lang === 'hi' ? '10–20 मिनट ट्रायज कॉल' : '10–20 min triage call', d: lang === 'hi' ? 'लोकेशन, सेक्शन, और तात्कालिकता समझना' : 'Understand location, charges & urgency' },
                    { n: '02', t: lang === 'hi' ? 'लिखित दस्तावेज़ चेकलिस्ट' : 'Written document checklist', d: lang === 'hi' ? 'क्या शेयर करें और क्या न करें' : 'What to share and what to withhold' },
                    { n: '03', t: lang === 'hi' ? 'तत्काल मामलों में उसी दिन एक्शन' : 'Same-day action for urgent cases', d: lang === 'hi' ? 'ड्राफ्टिंग, फाइलिंग और कोर्ट तैयारी' : 'Drafting, filing prep & court readiness' },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-2">
                      <span className="text-[9px] font-[400] text-[#0B1C2C] bg-[#C8A951] rounded-[3px] px-1.5 py-0.5 shrink-0 mt-0.5">{step.n}</span>
                      <div>
                        <div className="text-[13px] font-[500] text-white leading-snug">{step.t}</div>
                        <div className="text-[11px] font-[400] text-white/60 mt-0.5">{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <Button as="link" to="/contact" variant="accent" className="w-full justify-center text-[14px]">
                    {t('home.heroPrimaryCta')} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Track Record — white section ── */}
      <section className="bg-white">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading
              eyebrow={t('home.successEyebrow')}
              title={t('home.successTitle')}
              description={t('home.successDesc')}
            />
            <div className="mt-6 grid gap-6 lg:grid-cols-12">
              <Motion.div variants={fadeUp} className="lg:col-span-7">
                <div className="rounded-[6px] border border-[#E5E7EB] bg-white p-6" style={{ boxShadow: elevatedShadow }}>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { k: t('home.successMetric1k'), v: t('home.successMetric1v') },
                      { k: t('home.successMetric2k'), v: t('home.successMetric2v') },
                      { k: t('home.successMetric3k'), v: t('home.successMetric3v') },
                    ].map((m) => (
                      <div key={m.v} className="rounded-[4px] bg-[#F8F9FA] border border-[#E5E7EB] px-5 py-4">
                        <div className="text-[22px] font-[500] text-[#0B1C2C] tracking-[-0.22px]">{m.k}</div>
                        <div className="mt-1 text-[13px] font-[400] text-[#4B5563]">{m.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                    <div className="text-[14px] font-[400] text-[#0B1C2C] mb-3">{t('home.successListTitle')}</div>
                    <div className="grid gap-2">
                      {(t('home.successItems') || []).map((x) => (
                        <div key={x} className="flex items-start gap-2.5 text-[14px] font-[400] text-[#4B5563]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#B8960B] shrink-0" />
                          <span>{x}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>

              {/* DESIGN.md: brand-dark panel inside white section */}
              <Motion.div variants={fadeUp} className="lg:col-span-5">
                <div className="rounded-[6px] bg-[#08151F] p-6 h-full">
                  <div className="text-[11px] font-[500] tracking-[0.12em] uppercase text-[#B8960B] border-l-2 border-[#B8960B] pl-3">{t('home.successPanelEyebrow')}</div>
                  <div className="mt-3 text-[26px] font-[500] text-white leading-[1.12] tracking-[-0.26px]">{t('home.successPanelTitle')}</div>
                  <p className="mt-3 text-[16px] font-[400] text-white/70 leading-[1.40]">{t('home.successPanelDesc')}</p>
                  <div className="mt-5">
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

      {/* ── Cyber Crime Solutions — brand-dark spotlight ── */}
      <section className="bg-[#08151F]">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left: headline + CTA */}
              <Motion.div variants={fadeUp} className="lg:w-[42%] shrink-0">
                <div className="inline-flex items-center gap-2 text-[11px] font-[500] tracking-[0.12em] uppercase text-[#C8A951] border-l-2 border-[#C8A951] pl-3">
                  {lang === 'hi' ? 'साइबर क्राइम सॉल्यूशन • दिल्ली' : 'Cyber Crime Solutions • Delhi'}
                </div>
                <h2 className="mt-3 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] font-[500] text-white leading-[1.12] tracking-[-0.64px]">
                  {lang === 'hi'
                    ? 'UPI फ्रॉड, IT Act 66, सेक्सटॉर्शन — दिल्ली में साइबर वकील'
                    : 'UPI Fraud, IT Act 66, Sextortion — Cyber Crime Vakeel in Delhi'}
                </h2>
                <p className="mt-3 text-[16px] font-[400] text-white/70 leading-[1.40]">
                  {lang === 'hi'
                    ? 'ऑनलाइन फ्रॉड, साइबर उत्पीड़न या अकाउंट हैकिंग का शिकार हैं? LegalSupportNow Delhi का अनुभवी साइबर क्राइम vakeel है जो IT Act प्रावधान और दिल्ली कोर्ट प्रक्रिया दोनों समझता है।'
                    : 'Victim of UPI fraud, cyber harassment, or account hacking? LegalSupportNow is Delhi\'s experienced cyber crime vakeel who understands both IT Act provisions and Delhi court procedure. We document digital evidence, draft cyber complaints, and represent you in Delhi courts.'}
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button as="link" to="/contact" variant="accent">
                    {lang === 'hi' ? 'साइबर केस सहायता लें' : 'Get Cyber Crime Help'} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button as="a" href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent('Hi I need help with a cyber crime case')}`} target="_blank" rel="noreferrer" variant="secondary">
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {lang === 'hi' ? 'व्हाट्सऐप करें' : 'WhatsApp Now'}
                  </Button>
                </div>
              </Motion.div>
              {/* Right: service grid */}
              <Motion.div variants={fadeUp} className="flex-1">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: lang === 'hi' ? 'UPI व बैंक फ्रॉड' : 'UPI & Bank Fraud', desc: lang === 'hi' ? 'खाता फ्रीज ऑर्डर, रिकवरी डॉक्यूमेंटेशन और पुलिस शिकायत' : 'Account freeze orders, recovery documentation & police complaint drafting' },
                    { title: lang === 'hi' ? 'साइबर उत्पीड़न' : 'Cyber Harassment', desc: lang === 'hi' ? 'IT Act 67 केस, ऑनलाइन स्टॉकिंग और धमकी-आधारित शिकायतें' : 'IT Act 67 cases, online stalking, and threat-based complaints' },
                    { title: lang === 'hi' ? 'सेक्सटॉर्शन डिफेंस' : 'Sextortion Defense', desc: lang === 'hi' ? 'आपातकालीन कार्रवाई, लीगल नोटिस और शिकायत दर्ज करना' : 'Emergency response, legal notice drafting, and complaint filing' },
                    { title: lang === 'hi' ? 'हैकिंग व IT Act 66' : 'Hacking & IT Act 66', desc: lang === 'hi' ? 'डिवाइस समझौता, अनाधिकृत पहुँच, Section 66C/66D केस' : 'Device compromise, unauthorized access, and Section 66C/66D cases' },
                    { title: lang === 'hi' ? 'सोशल मीडिया अपराध' : 'Social Media Crimes', desc: lang === 'hi' ? 'मानहानि, प्रतिरूपण और नकली प्रोफाइल की शिकायतें' : 'Defamation, impersonation, and fake profile complaints' },
                    { title: lang === 'hi' ? 'डिजिटल एविडेंस' : 'Digital Evidence', desc: lang === 'hi' ? 'संरक्षण, दस्तावेज़ीकरण और कोर्ट-रेडी एविडेंस फाइलिंग' : 'Preservation, documentation, and court-ready evidence filing' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[6px] border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Monitor className="h-3.5 w-3.5 text-[#C8A951] shrink-0" />
                        <div className="text-[14px] font-[500] text-white">{item.title}</div>
                      </div>
                      <div className="text-[12px] font-[400] text-white/60 leading-snug">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Practice Areas — alt (#F8F9FA) section ── */}
      <section className="bg-[#F8F9FA]">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading eyebrow={t('home.practiceEyebrow')} title={t('home.practiceTitle')} description={t('home.practiceDesc')} />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {practiceAreas.map((a) => {
                const Icon = a.icon
                return (
                  <Motion.div key={a.title} variants={fadeUp}>
                    <div className="rounded-[6px] bg-white border border-[#E5E7EB] overflow-hidden" style={{ boxShadow: elevatedShadow }}>
                      <div className="relative">
                        <img src={getPracticeAreaImage(a.title)} alt={`${a.title} Legal Support`} className="h-44 w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 img-overlay-dark" />
                        {a.focus && (
                          <div className="absolute top-4 right-4 rounded-[4px] bg-[#B8960B] text-white text-[10px] font-[400] tracking-[0.12em] uppercase px-3 py-1">
                            {lang === 'hi' ? 'मुख्य फोकस' : 'Main Focus'}
                          </div>
                        )}
                        <div className="absolute left-5 bottom-5 flex items-center gap-3">
                          <div className="h-10 w-10 rounded-[6px] border border-white/20 bg-white/15 backdrop-blur-md grid place-items-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-[18px] font-[300] text-white">{a.title}</div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[16px] font-[400] text-[#4B5563] leading-[1.40]">{a.description}</p>
                        <ul className="mt-3 grid gap-2">
                          {a.services.map((s) => (
                            <li key={s} className="flex items-center gap-2.5 text-[14px] font-[400] text-[#4B5563]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#B8960B] shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Motion.div>
                )
              })}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Trust & Speed — white section ── */}
      <section className="bg-white">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid gap-8 md:grid-cols-2 items-start">
            <Motion.div variants={fadeUp}>
              <SectionHeading eyebrow={t('home.trustEyebrow')} title={t('home.trustTitle')} description={t('home.trustDesc')} />
              <div className="mt-6 grid gap-4">
                {(t('home.trustBlocks') || []).map((x) => (
                  <div key={x.t} className="rounded-[6px] border border-[#E5E7EB] px-6 py-5" style={{ boxShadow: ambientShadow }}>
                    <div className="text-[16px] font-[500] text-[#0B1C2C]">{x.t}</div>
                    <div className="mt-1 text-[14px] font-[400] text-[#4B5563]">{x.d}</div>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div variants={fadeUp}>
              <div className="rounded-[6px] border border-[#E5E7EB] p-6" style={{ boxShadow: elevatedShadow }}>
                <div className="text-[11px] font-[500] tracking-[0.12em] uppercase text-[#B8960B]">{t('home.speedEyebrow')}</div>
                <div className="mt-3 text-[26px] font-[500] text-[#0B1C2C] leading-[1.12] tracking-[-0.26px]">{t('home.speedTitle')}</div>
                <p className="mt-3 text-[16px] font-[400] text-[#4B5563] leading-[1.40]">{t('home.speedDesc')}</p>
                <div className="mt-4 grid gap-3">
                  {(t('home.speedSteps') || []).map((s) => (
                    <div key={s.t} className="rounded-[4px] bg-[#F8F9FA] border border-[#E5E7EB] px-5 py-4">
                      <div className="text-[14px] font-[500] text-[#0B1C2C]">{s.t}</div>
                      <div className="mt-1 text-[13px] font-[400] text-[#4B5563]">{s.d}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button as="link" to="/contact" variant="accent">
                    {t('home.speedPrimaryCta')} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button as="a" href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${siteConfig.contact.whatsapp.defaultMessage}`} target="_blank" rel="noreferrer" variant="secondary">
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {t('common.whatsapp')}
                  </Button>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Testimonials — brand-dark #08151F section ── */}
      <section className="bg-[#08151F]">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading eyebrow={t('home.testimonialsEyebrow')} title={t('home.testimonialsTitle')} description={t('home.testimonialsDesc')} tone="dark" />
            <Motion.div variants={fadeUp} className="mt-6">
              <TestimonialSlider testimonials={testimonials} />
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ── Final CTA — alt (#F8F9FA) section ── */}
      <section className="bg-[#F8F9FA]">
        <div className="container-max py-8 sm:py-10">
          <Motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="rounded-[8px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ boxShadow: elevatedShadow }}>
              <div>
                <div className="text-[11px] font-[500] tracking-[0.12em] uppercase text-[#B8960B]">{t('home.readyEyebrow')}</div>
                <div className="mt-2 text-[clamp(1.75rem,3vw+0.5rem,2.5rem)] font-[500] text-[#0B1C2C] leading-[1.10] tracking-[-0.64px]">{t('home.readyTitle')}</div>
                <p className="mt-2 text-[16px] font-[400] text-[#4B5563] max-w-xl leading-[1.40]">{t('home.readyDesc')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button as="link" to="/contact" variant="accent" className="w-full sm:w-auto justify-center">
                  {t('home.readyPrimaryCta')} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button as="a" href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${siteConfig.contact.whatsapp.defaultMessage}`} target="_blank" rel="noreferrer" variant="secondary" className="w-full sm:w-auto justify-center">
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
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
