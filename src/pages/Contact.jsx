import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion as Motion } from 'framer-motion'
import { Mail, Phone, MapPin, AlertTriangle, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getConsultationImage } from '../utils/images.js'

const contactDetails = {
  phoneDisplay: '+91 7452819652',
  phoneTel: 'tel:+917452819652',
  whatsapp:
    'https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help',
  email: 'aasifahmadnahalvi11@gmail.com',
  address: 'Masuri Ghaziabad, near thana masuri, ghaziabad, Uttar Pradesh, India 201015',
  mapsEmbed:
    'https://www.google.com/maps?q=DLF%20Plaza%20M.G.%20Road%20Gurugram&output=embed',
}

const caseTypes = [
  'Criminal (Bail / FIR / Trial)',
  'Cyber (Online Fraud / Impersonation)',
  'Property (Dispute / Documentation)',
  'Family (Divorce / Custody / Maintenance)',
  'Civil (Recovery / Injunction / Consumer)',
  'Corporate (Contracts / Notices / Advisory)',
  'Other / Not sure',
]

export default function Contact() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)

  const defaultValues = useMemo(
    () => ({ name: '', email: '', phone: '', caseType: caseTypes[0], message: '' }),
    [],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues })

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500))
    console.log('Contact form submission (static):', values)
    setSubmitted(true)
    reset(defaultValues)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <>
      <Seo
        title={t('contact.seoTitle')}
        description={t('contact.seoDesc')}
        canonicalPath="/contact"
      />

      {/* Page header */}
      <section className="bg-primary">
        <div className="container-max py-16 sm:py-20">
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            description={t('contact.desc')}
            tone="dark"
          />
        </div>
      </section>

      {/* Main content */}
      <section className="section-alt">
        <div className="container-max py-12 sm:py-16">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Form column */}
              <Motion.div variants={fadeUp} className="lg:col-span-7">
                {/* Contact form */}
                <div className="bg-white rounded-2xl border border-black/[0.07] shadow-card p-7 sm:p-8">
                  <div className="text-xl font-bold text-primary">
                    {t('contact.formTitle')}
                  </div>
                  <p className="mt-2 text-sm text-secondary/70">
                    {t('contact.formDesc')}
                  </p>

                  <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-bold text-primary">{t('contact.name')}</label>
                        <input
                          className="mt-2 glass-input"
                          placeholder={t('contact.placeholders.name')}
                          {...register('name', { required: t('contact.errors.nameRequired') })}
                        />
                        {errors.name ? (
                          <div className="mt-1 text-xs font-semibold text-red-600">
                            {errors.name.message}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="text-sm font-bold text-primary">{t('contact.email')}</label>
                        <input
                          className="mt-2 glass-input"
                          placeholder={t('contact.placeholders.email')}
                          {...register('email', {
                            required: t('contact.errors.emailRequired'),
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: t('contact.errors.emailInvalid'),
                            },
                          })}
                        />
                        {errors.email ? (
                          <div className="mt-1 text-xs font-semibold text-red-600">
                            {errors.email.message}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-bold text-primary">{t('contact.phone')}</label>
                        <input
                          className="mt-2 glass-input"
                          placeholder={t('contact.placeholders.phone')}
                          {...register('phone', {
                            required: t('contact.errors.phoneRequired'),
                            minLength: { value: 8, message: t('contact.errors.phoneInvalid') },
                          })}
                        />
                        {errors.phone ? (
                          <div className="mt-1 text-xs font-semibold text-red-600">
                            {errors.phone.message}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="text-sm font-bold text-primary">{t('contact.caseType')}</label>
                        <select
                          className="mt-2 glass-input"
                          {...register('caseType')}
                        >
                          {caseTypes.map((ct) => (
                            <option key={ct} value={ct}>
                              {ct}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold text-primary">{t('contact.message')}</label>
                      <textarea
                        rows={6}
                        className="mt-2 glass-input"
                        placeholder={t('contact.placeholders.message')}
                        {...register('message', {
                          required: t('contact.errors.messageRequired'),
                          minLength: { value: 25, message: t('contact.errors.messageMore') },
                        })}
                      />
                      {errors.message ? (
                        <div className="mt-1 text-xs font-semibold text-red-600">
                          {errors.message.message}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      <Button type="submit" disabled={isSubmitting} variant="accent">
                        {isSubmitting ? t('contact.sending') : t('contact.submit')} <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button
                        as="a"
                        href={contactDetails.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        {t('contact.whatsappInstead')}
                      </Button>
                      {submitted ? (
                        <div className="text-sm font-bold text-primary">
                          ✓ {t('contact.submitted')}
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>

                {/* Emergency box */}
                <div className="mt-5 bg-amber-50 rounded-2xl border border-amber-200 p-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-100 border border-amber-200 grid place-items-center shrink-0">
                      <AlertTriangle className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="font-bold text-amber-900">{t('contact.emergencyTitle')}</div>
                      <p className="mt-1 text-sm text-amber-800/80">
                        {t('contact.emergencyDesc')}
                      </p>
                      <div className="mt-3 flex flex-col sm:flex-row gap-2">
                        <Button as="a" href={contactDetails.phoneTel} variant="dark">
                          <Phone className="h-4 w-4" />
                          {t('common.callNow')}
                        </Button>
                        <Button
                          as="a"
                          href={contactDetails.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          variant="secondary"
                        >
                          {t('contact.whatsappUrgent')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>

              {/* Sidebar */}
              <Motion.div variants={fadeUp} className="lg:col-span-5 grid gap-5">
                {/* Consultation image */}
                <div className="rounded-2xl overflow-hidden shadow-card border border-black/[0.06]">
                  <img
                    src={getConsultationImage()}
                    alt=""
                    className="w-full h-[200px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Contact details */}
                <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-6">
                  <div className="text-lg font-bold text-primary">
                    {t('contact.contactDetails')}
                  </div>
                  <div className="mt-5 grid gap-3.5 text-sm text-secondary/75">
                    <a className="flex items-center gap-3 hover:text-primary transition-colors" href={contactDetails.phoneTel}>
                      <Phone className="h-4 w-4 text-accent shrink-0" />
                      {contactDetails.phoneDisplay}
                    </a>
                    <a className="flex items-center gap-3 hover:text-primary transition-colors" href={`mailto:${contactDetails.email}`}>
                      <Mail className="h-4 w-4 text-accent shrink-0" />
                      {contactDetails.email}
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                      <span>{contactDetails.address}</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-card border border-black/[0.06]">
                  <iframe
                    title="LegalSupportNow Location"
                    src={contactDetails.mapsEmbed}
                    className="w-full h-[280px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Privacy note */}
                <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-6">
                  <div className="flex items-center gap-2 font-bold text-primary">
                    <AlertTriangle className="h-4 w-4 text-accent shrink-0" />
                    {t('contact.privacyTitle')}
                  </div>
                  <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                    {t('contact.privacyDesc')}
                  </p>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  )
}
