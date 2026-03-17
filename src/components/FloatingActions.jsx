import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const PHONE = '+919876543210'
const PHONE_TEL = 'tel:+919876543210'
const WA = 'https://wa.me/919876543210?text=Hi%20I%20need%20legal%20help'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-[55] flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <motion.a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group flex items-center gap-2.5 h-14 px-4 rounded-full bg-[#25D366] text-white shadow-lift hover:shadow-glow transition-all duration-200"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="hidden sm:block text-sm font-semibold pr-0.5">WhatsApp</span>
      </motion.a>

      {/* Call */}
      <motion.a
        href={PHONE_TEL}
        aria-label={`Call ${PHONE}`}
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center gap-2.5 h-14 px-4 rounded-full bg-accent text-primary shadow-glow hover:brightness-105 transition-all duration-200"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-accent/30 pointer-events-none" />
        <Phone className="relative h-5 w-5 shrink-0" />
        <span className="relative hidden sm:block text-sm font-semibold pr-0.5">Call Now</span>
      </motion.a>
    </div>
  )
}


