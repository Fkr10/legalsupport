import { motion } from 'framer-motion'
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
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getPracticeAreaImage, getPracticeHeaderImage } from '../utils/images.js'

const practiceAreas = [
  {
    title: 'Criminal Law',
    icon: Gavel,
    highlight: true,
    description:
      'Urgent representation for bail, FIR strategy, investigation support, and trial preparation.',
    services: [
      'Anticipatory & Regular Bail',
      'FIR review, drafting & strategy',
      'Quashing petitions (case-specific)',
      'Court appearances & hearings',
      'Trial preparation & appeals',
    ],
  },
  {
    title: 'Civil Law',
    icon: Scale,
    description:
      'Practical dispute resolution for individuals and businesses with clear documentation and timelines.',
    services: ['Injunctions', 'Recovery matters', 'Consumer disputes', 'Legal notices'],
  },
  {
    title: 'Corporate Law',
    icon: Building2,
    description:
      'Contracts, compliance, and advisory for founders, SMEs, and service businesses.',
    services: [
      'Contract drafting & review',
      'Vendor/customer dispute support',
      'Retainer advisory (monthly)',
      'Compliance basics & documentation',
    ],
  },
  {
    title: 'Family Law',
    icon: HeartHandshake,
    description:
      'Sensitive guidance for divorce, custody, and maintenance with careful handling of evidence and communication.',
    services: [
      'Divorce (mutual/contested)',
      'Child custody & visitation',
      'Maintenance & alimony',
      'Domestic violence matters',
    ],
  },
  {
    title: 'Property Law',
    icon: HomeIcon,
    description:
      'Property disputes, documentation review, and notices with a focus on risk reduction.',
    services: [
      'Title & document review',
      'Builder/homebuyer disputes',
      'Possession & injunction',
      'Partition & inheritance matters',
    ],
  },
  {
    title: 'Cyber Law',
    icon: Shield,
    description:
      'Guidance for cyber complaints, account compromise, online fraud documentation, and safe communication.',
    services: [
      'Online fraud documentation',
      'Cyber complaint guidance',
      'Defamation/impersonation cases',
      'Digital evidence preservation',
    ],
  },
]

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
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50" />
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
      <section className="section-alt">
        <div className="container-max py-16 sm:py-20">
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-6 md:grid-cols-2">
              {practiceAreas.map((p) => {
                const Icon = p.icon
                return (
                  <motion.div key={p.title} variants={fadeUp}>
                    <Card
                      className={[
                        'overflow-hidden',
                        p.highlight ? 'border-accent/40 ring-1 ring-accent/20' : '',
                      ].join(' ')}
                    >
                      {/* Image with gradient overlay */}
                      <div className="relative">
                        <img
                          src={getPracticeAreaImage(p.title)}
                          alt=""
                          className="h-44 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 img-overlay-dark" />
                        {p.highlight && (
                          <div className="absolute top-4 right-4 rounded-full bg-accent text-primary text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                            {t('practice.mainFocus')}
                          </div>
                        )}
                        <div className="absolute left-5 bottom-5 flex items-center gap-3">
                          <div className="h-11 w-11 rounded-xl border border-white/20 bg-white/15 backdrop-blur-md grid place-items-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-lg font-bold text-white">{p.title}</div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 sm:p-7">
                        <p className="text-secondary/85 leading-relaxed">{p.description}</p>
                        <div className="mt-5 grid gap-2">
                          {p.services.map((s) => (
                            <div key={s} className="flex items-center gap-2.5 text-sm text-secondary/80">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA banner */}
            <motion.div variants={fadeUp} className="mt-12">
              <div className="bg-primary rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent border-l-2 border-accent pl-3">
                    {t('practice.ctaEyebrow')}
                  </div>
                  <div className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                    {t('practice.ctaTitle')}
                  </div>
                  <p className="mt-3 text-white/75 max-w-2xl leading-relaxed">
                    {t('practice.ctaDesc')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button as="link" to="/contact" variant="accent">
                    {t('practice.ctaPrimary')} <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    as="a"
                    href="https://wa.me/919876543210?text=Hi%20I%20need%20legal%20help"
                    target="_blank"
                    rel="noreferrer"
                    variant="glass"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    {t('common.whatsapp')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
