import { motion as Motion } from 'framer-motion'
import { Briefcase, MapPin, Award, GraduationCap, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import OfficesMap from '../components/OfficesMap.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { getLawyerPortrait, getOfficeImage, getConsultationImage } from '../utils/images.js'
import lawyerData from '../data/lawyer.json'

const lawyerProfile = {
  ...lawyerData.profile,
  photo: getLawyerPortrait(),
}

export default function About() {
  return (
    <>
      <Seo
        title="About Adv. Aasif Ali — Criminal Defense & Cyber Crime Advocate in Delhi NCR"
        description="Meet Adv. Aasif Ali — Delhi NCR's criminal defense advocate with 7+ years of expertise in bail applications, FIR strategy, cyber crime cases, and urgent legal support."
        canonicalPath="/about"
      />

      {/* Page header — banner-old.jpg */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="/banner-old.jpg" alt="About LegalSupportNow" className="h-full w-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,28,44,0.88) 0%, rgba(11,28,44,0.78) 55%, rgba(8,21,31,0.90) 100%)' }} />
        </div>
        <div className="container-max py-20 sm:py-24">
          <SectionHeading eyebrow="About" title="Criminal Defense Advocate in Delhi NCR | Clarity & Strategy" description="LegalSupportNow is designed for people who need decisive legal guidance—especially in criminal matters and cyber crime cases. Our goal: reduce confusion, document correctly, and move with urgency." tone="dark" />
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#F8F9FA]">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Lawyer portrait */}
              <Motion.div variants={fadeUp} className="lg:col-span-4">
                <div className="bg-white rounded-[6px] overflow-hidden border border-[#E5E7EB]" style={{boxShadow:'rgba(11,28,44,0.25) 0px 30px 45px -30px,rgba(0,0,0,0.1) 0px 18px 36px -18px'}}>
                  <img
                    src={lawyerProfile.photo}
                    alt={lawyerProfile.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="text-[22px] font-[300] text-[#0B1C2C] tracking-[-0.22px]">
                      {lawyerProfile.name}
                    </div>
                    <div className="mt-1 text-[14px] font-[300] text-[#4B5563]">
                      {lawyerProfile.title}
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-[#4B5563]/75">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#C8A951] shrink-0" />
                        {lawyerProfile.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[#C8A951] shrink-0" />
                        {lawyerProfile.experience} in practice
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2.5">
                      <Button as="link" to="/contact" variant="accent" className="w-full justify-center">
                        Schedule a consultation
                      </Button>
                      <Button
                        as="a"
                        href="https://wa.me/917452819652?text=Hi%20I%20need%20legal%20help"
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="w-full justify-center"
                      >
                        <WhatsAppIcon className="h-4 w-4 shrink-0" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Motion.div>

              {/* Content grid */}
              <Motion.div variants={fadeUp} className="lg:col-span-8">
                <div className="grid gap-6">
                  {/* Office photos */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl overflow-hidden shadow-card border border-black/[0.06]">
                      <img
                        src={getOfficeImage()}
                        alt=""
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-card border border-black/[0.06]">
                      <img
                        src={getConsultationImage()}
                        alt=""
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-7" style={{boxShadow:'rgba(23,23,23,0.06) 0px 3px 6px 0px'}}>
                    <div className="text-[18px] font-[400] text-[#0B1C2C]">Mission</div>
                    <p className="mt-3 text-[16px] font-[300] text-[#4B5563] leading-[1.40]">
                      Provide premium legal support with a criminal-first focus—built on documentation, strategy, and clear decision points.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-7" style={{boxShadow:'rgba(23,23,23,0.06) 0px 3px 6px 0px'}}>
                    <div className="text-[18px] font-[400] text-[#0B1C2C]">Vision</div>
                    <p className="mt-3 text-[16px] font-[300] text-[#4B5563] leading-[1.40]">
                      A modern legal experience where clients feel informed, protected, and prepared—without clutter or uncertainty.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="text-xl font-bold text-[#0B1C2C]">
                        What you can expect
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#4B5563]/40 bg-black/5 rounded-full px-3 py-1.5">
                        Strategy-first
                      </div>
                    </div>
                    <p className="mt-2 text-[#4B5563]/70 text-sm">
                      A disciplined process designed for real court timelines.
                    </p>
                    <ul className="mt-5 grid gap-3">
                      {lawyerProfile.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-[#4B5563]/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#C8A951] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience + Education */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-6" style={{boxShadow:'rgba(23,23,23,0.06) 0px 3px 6px 0px'}}>
                      <div className="flex items-center gap-2 text-[14px] font-[400] text-[#0B1C2C]">
                        <Award className="h-5 w-5 text-[#C8A951] shrink-0" />
                        Experience
                      </div>
                      <p className="mt-2 text-[14px] font-[300] text-[#4B5563] leading-[1.40]">
                        {lawyerProfile.experience} across criminal defense, litigation,
                        and urgent representation in Delhi NCR.
                      </p>
                    </div>
                    <div className="bg-white rounded-[6px] border border-[#E5E7EB] p-6" style={{boxShadow:'rgba(23,23,23,0.06) 0px 3px 6px 0px'}}>
                      <div className="flex items-center gap-2 text-[14px] font-[400] text-[#0B1C2C]">
                        <GraduationCap className="h-5 w-5 text-[#C8A951] shrink-0" />
                        Education
                      </div>
                      <ul className="mt-2 text-[14px] font-[300] text-[#4B5563] grid gap-2">
                        {lawyerProfile.education.map((e) => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C8A951] shrink-0" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Office Locations — white section ── */}
      <section className="bg-white">
        <div className="container-max py-16 sm:py-20">
          <Motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeading
              eyebrow="Our Offices"
              title="4 Locations Across Delhi"
              description="We operate from four key Delhi locations — court chambers, client offices, and metro-accessible consultation centres — to ensure we're always reachable when you need us."
            />
            <Motion.div variants={fadeUp} className="mt-10">
              <OfficesMap />
            </Motion.div>

            {/* All addresses in a clean grid */}
            <Motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Karkardooma Court (Principal)', address: 'CH F-214, Karkardooma Court, Delhi \u2013 110032', tag: 'Principal' },
                { label: 'Shahadara \u2014 Aditya Mega Mall', address: 'S-54, Aditya Mega Mall, Shahadara, Delhi \u2013 110032', tag: 'Client Office' },
                { label: 'Saket Court', address: 'CH 165, Lawyer Block, Saket Court, Delhi \u2013 110017', tag: 'Court Chamber' },
                { label: 'Keshav Puram (North West Delhi)', address: 'Opp. Keshav Puram Metro Station, 2nd Floor, Commercial Building, North West Delhi \u2013 110035', tag: 'Metro Access' },
              ].map((loc) => (
                <div key={loc.label} className="rounded-[6px] bg-[#F8F9FA] border border-[#E5E7EB] p-5">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-[400] tracking-[0.1em] uppercase text-[#C8A951] mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
                    {loc.tag}
                  </div>
                  <div className="text-[14px] font-[400] text-[#0B1C2C]">{loc.label}</div>
                  <div className="mt-1.5 text-[13px] font-[300] text-[#4B5563] leading-snug">{loc.address}</div>
                </div>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </>
  )
}
