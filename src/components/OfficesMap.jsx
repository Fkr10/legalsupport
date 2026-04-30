import { useState } from 'react'
import { MapPin, ExternalLink, ChevronRight } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import contactData from '../data/contact.json'

const offices = contactData.offices

// Badge for principal office
const PRINCIPAL_ID = 'karkardooma'

export default function OfficesMap() {
  const [active, setActive] = useState(offices[0].id)
  const current = offices.find((o) => o.id === active) || offices[0]

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* ── Sidebar list ── */}
      <div className="lg:col-span-2 flex flex-col gap-2">
        {offices.map((office) => {
          const isActive = office.id === active
          return (
            <button
              key={office.id}
              onClick={() => setActive(office.id)}
              className={[
                'w-full text-left rounded-[6px] border px-5 py-4 transition-all duration-150',
                isActive
                  ? 'bg-[#C8A951] border-[#C8A951] shadow-[rgba(200,169,81,0.30)_0px_8px_24px_0px]'
                  : 'bg-white border-[#E5E7EB] hover:border-[#E8D38A] shadow-[rgba(23,23,23,0.06)_0px_3px_6px_0px]',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <MapPin
                    className={[
                      'h-4 w-4 mt-0.5 shrink-0',
                      isActive ? 'text-white' : 'text-[#C8A951]',
                    ].join(' ')}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          'text-[14px] font-[400] leading-snug',
                          isActive ? 'text-white' : 'text-[#0B1C2C]',
                        ].join(' ')}
                      >
                        {office.label}
                      </span>
                      {office.id === PRINCIPAL_ID && (
                        <span
                          className={[
                            'text-[10px] font-[400] tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-[3px]',
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-[rgba(200,169,81,0.08)] text-[#C8A951]',
                          ].join(' ')}
                        >
                          Principal
                        </span>
                      )}
                    </div>
                    <div
                      className={[
                        'mt-1 text-[12px] font-[300] leading-snug',
                        isActive ? 'text-white/75' : 'text-[#4B5563]',
                      ].join(' ')}
                    >
                      {office.address}
                    </div>
                  </div>
                </div>
                <ChevronRight
                  className={[
                    'h-4 w-4 shrink-0 mt-0.5 transition-transform',
                    isActive ? 'text-white rotate-90' : 'text-[#4B5563]',
                  ].join(' ')}
                />
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Map embed ── */}
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <Motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-[6px] overflow-hidden border border-[#E5E7EB]"
            style={{ boxShadow: 'rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px' }}
          >
            {/* Header bar */}
            <div className="bg-white border-b border-[#E5E7EB] px-5 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C8A951] shrink-0" />
                <span className="text-[14px] font-[400] text-[#0B1C2C]">{current.label}</span>
              </div>
              <a
                href={current.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-[400] text-[#C8A951] hover:text-[#B8960B] transition-colors"
              >
                Open in Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Embed */}
            <iframe
              src={current.mapsEmbed}
              title={`Map for ${current.label}`}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Address footer */}
            <div className="bg-[#F8F9FA] border-t border-[#E5E7EB] px-5 py-3">
              <p className="text-[13px] font-[300] text-[#4B5563]">{current.address}</p>
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
