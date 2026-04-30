import { motion } from 'framer-motion'
import { Briefcase, MapPin, Award, GraduationCap, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { fadeUp, stagger } from '../utils/motion.js'
import { getLawyerPortrait, getOfficeImage, getConsultationImage, getAboutHeaderImage } from '../utils/images.js'
import lawyerData from '../data/lawyer.json'

const lawyerProfile = {
  ...lawyerData.profile,
  photo: getLawyerPortrait(),
}

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Meet the counsel behind LegalSupportNow—criminal defense focused, evidence-first, and built around clear strategy and fast action."
        canonicalPath="/about"
      />

      {/* Page header */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={getAboutHeaderImage()}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/55" />
        </div>
        <div className="container-max py-20 sm:py-24">
          <SectionHeading
            eyebrow="About"
            title="Built for clarity under pressure"
            description="LegalSupportNow is designed for people who need decisive legal guidance—especially in criminal matters. Our goal: reduce confusion, document correctly, and move with urgency."
            tone="dark"
          />
        </div>
      </section>

      {/* Main content */}
      <section className="section-alt">
        <div className="container-max py-16 sm:py-20">
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Lawyer portrait */}
              <motion.div variants={fadeUp} className="lg:col-span-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lift border border-black/[0.07]">
                  <img
                    src={lawyerProfile.photo}
                    alt={lawyerProfile.name}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="text-2xl font-bold text-primary">
                      {lawyerProfile.name}
                    </div>
                    <div className="mt-1 text-sm font-medium text-secondary/65">
                      {lawyerProfile.title}
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-secondary/75">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent shrink-0" />
                        {lawyerProfile.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent shrink-0" />
                        {lawyerProfile.experience} in practice
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2.5">
                      <Button as="link" to="/contact" variant="accent" className="w-full justify-center">
                        Schedule a consultation
                      </Button>
                      <Button
                        as="a"
                        href="https://wa.me/919876543210?text=Hi%20I%20need%20legal%20help"
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="w-full justify-center"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content grid */}
              <motion.div variants={fadeUp} className="lg:col-span-8">
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
                  <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-7">
                    <div className="text-xl font-bold text-primary">Mission</div>
                    <p className="mt-3 text-secondary/80 leading-relaxed">
                      Provide premium legal support with a criminal-first focus—built on
                      documentation, strategy, and clear decision points. We help clients
                      act quickly without acting blindly.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-7">
                    <div className="text-xl font-bold text-primary">Vision</div>
                    <p className="mt-3 text-secondary/80 leading-relaxed">
                      A modern legal experience where clients feel informed, protected,
                      and prepared—without clutter, jargon overload, or uncertainty.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="text-xl font-bold text-primary">
                        What you can expect
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-secondary/40 bg-black/5 rounded-full px-3 py-1.5">
                        Strategy-first
                      </div>
                    </div>
                    <p className="mt-2 text-secondary/70 text-sm">
                      A disciplined process designed for real court timelines.
                    </p>
                    <ul className="mt-5 grid gap-3">
                      {lawyerProfile.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-secondary/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience + Education */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-6">
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <Award className="h-5 w-5 text-accent shrink-0" />
                        Experience
                      </div>
                      <p className="mt-2 text-sm text-secondary/75 leading-relaxed">
                        {lawyerProfile.experience} across criminal defense, litigation,
                        and urgent representation in Delhi NCR.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-black/[0.07] shadow-soft p-6">
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <GraduationCap className="h-5 w-5 text-accent shrink-0" />
                        Education
                      </div>
                      <ul className="mt-2 text-sm text-secondary/75 grid gap-2">
                        {lawyerProfile.education.map((e) => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
