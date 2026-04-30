import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion as Motion } from 'framer-motion'
import { Mail, Phone, MapPin, AlertTriangle, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { useI18n } from '../utils/i18n.js'
import { getConsultationImage } from '../utils/images.js'
import contactData from '../data/contact.json'

const { contact: contactDetails, offices, caseTypes } = contactData

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

      

      {/* Main content */}
      <section className="bg-[#F8F9FA]">
        <div className="container-max py-12 sm:py-16">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <Motion.div variants={fadeUp} className="lg:col-span-7">
                <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-7 sm:p-8" style={{boxShadow:'rgba(11,28,44,0.25) 0px 30px 45px -30px,rgba(0,0,0,0.1) 0px 18px 36px -18px'}}>
                  <div className="text-[20px] font-[400] text-[#0B1C2C] leading-tight">{t('contact.formTitle')}</div>
                  <p className="mt-2 text-[15px] font-[300] text-[#4B5563] leading-[1.5]">{t('contact.formDesc')}</p>

                  <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-[13px] font-[400] text-[#1F3650] mb-2 tracking-[0.01em]">{t('contact.name')}</label>
                        <input
                          className="mt-0 glass-input"
                          placeholder={t('contact.placeholders.name')}
                          {...register('name', { required: t('contact.errors.nameRequired') })}
                        />
                        {errors.name ? (
                          <div className="mt-2 text-xs font-[400] text-[#DC2626]">
                            {errors.name.message}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="block text-[13px] font-[400] text-[#1F3650] mb-2 tracking-[0.01em]">{t('contact.email')}</label>
                        <input
                          className="mt-0 glass-input"
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
                          <div className="mt-2 text-xs font-[400] text-[#DC2626]">
                            {errors.email.message}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-[13px] font-[400] text-[#1F3650] mb-2 tracking-[0.01em]">{t('contact.phone')}</label>
                        <input
                          className="mt-0 glass-input"
                          placeholder={t('contact.placeholders.phone')}
                          {...register('phone', {
                            required: t('contact.errors.phoneRequired'),
                            minLength: { value: 8, message: t('contact.errors.phoneInvalid') },
                          })}
                        />
                        {errors.phone ? (
                          <div className="mt-2 text-xs font-[400] text-[#DC2626]">
                            {errors.phone.message}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="block text-[13px] font-[400] text-[#1F3650] mb-2 tracking-[0.01em]">{t('contact.caseType')}</label>
                        <select
                          className="mt-0 glass-input"
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
                      <label className="block text-[13px] font-[400] text-[#1F3650] mb-2 tracking-[0.01em]">{t('contact.message')}</label>
                      <textarea
                        rows={6}
                        className="mt-0 glass-input"
                        placeholder={t('contact.placeholders.message')}
                        {...register('message', {
                          required: t('contact.errors.messageRequired'),
                          minLength: { value: 25, message: t('contact.errors.messageMore') },
                        })}
                      />
                      {errors.message ? (
                        <div className="mt-2 text-xs font-[400] text-[#DC2626]">
                          {errors.message.message}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center pt-2">
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
                        <WhatsAppIcon className="h-4 w-4 shrink-0" />
                        {t('contact.whatsappInstead')}
                      </Button>
                      {submitted ? (
                        <div className="text-sm font-[400] text-[#0D7A34]">
                          ✓ {t('contact.submitted')}
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>

                {/* Emergency box - improved styling */}
                <div className="mt-6 bg-[#FFFBEB] rounded-[6px] border border-[#FCD34D] p-6">
                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-[6px] bg-[#F59E0B] border border-[#F59E0B] grid place-items-center shrink-0">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-[500] text-[#92400E]">{t('contact.emergencyTitle')}</div>
                      <p className="mt-1 text-[14px] font-[300] text-[#B45309] leading-[1.5]">
                        {t('contact.emergencyDesc')}
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Button as="a" href={contactDetails.phone.tel} variant="dark">
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
                          <WhatsAppIcon className="h-4 w-4 shrink-0" />
                          {t('contact.whatsappUrgent')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>

              {/* Sidebar */}
              <Motion.div variants={fadeUp} className="lg:col-span-5 grid gap-6">
                {/* Consultation image */}
                <div className="rounded-[8px] overflow-hidden shadow-elevated border border-[#E5E7EB]">
                  <img
                    src={getConsultationImage()}
                    alt=""
                    className="w-full h-[280px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Contact details */}
                <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-6 shadow-ambient">
                  <div className="text-[16px] font-[400] text-[#0B1C2C] leading-tight">{t('contact.contactDetails')}</div>
                  <div className="mt-5 grid gap-4 text-[14px] font-[300] text-[#4B5563]">
                    <a className="flex items-center gap-3 hover:text-[#0B1C2C] transition-colors duration-150" href={contactDetails.phone.tel}>
                      <Phone className="h-5 w-5 text-[#C8A951] shrink-0" />
                      {contactDetails.phone.display}
                    </a>
                    <a className="flex items-center gap-3 hover:text-[#0B1C2C] transition-colors duration-150" href={`mailto:${contactDetails.email}`}>
                      <Mail className="h-5 w-5 text-[#C8A951] shrink-0" />
                      {contactDetails.email}
                    </a>
                    <div className="mt-1 flex flex-col gap-3">
                      {offices.map((office) => (
                        <a
                          key={office.id}
                          href={office.mapsLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start gap-3 hover:text-[#0B1C2C] transition-colors duration-150 group"
                        >
                          <MapPin className="mt-0.5 h-5 w-5 text-[#C8A951] shrink-0" />
                          <div>
                            <div className="text-[12px] font-[400] text-[#B8960B] group-hover:text-[#0B1C2C] transition-colors">
                              {office.label}
                            </div>
                            <div className="text-[13px] leading-snug">{office.address}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-[8px] overflow-hidden shadow-elevated border border-[#E5E7EB]">
                  <iframe
                    title="LegalSupportNow Location"
                    src={contactDetails.mapsEmbed}
                    className="w-full h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Privacy note */}
                <div className="bg-white rounded-[6px] border border-[#E5E7EB] shadow-ambient p-6">
                  <div className="flex items-center gap-2 font-[400] text-[#0B1C2C] mb-2">
                    <AlertTriangle className="h-4 w-4 text-[#C8A951] shrink-0" />
                    {t('contact.privacyTitle')}
                  </div>
                  <p className="mt-2 text-sm text-[#4B5563]/75 leading-relaxed">
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
