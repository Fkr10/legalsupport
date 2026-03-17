import { motion } from 'framer-motion'
import GlassCard from './GlassCard.jsx'

export default function Card({ className = '', children }) {
  // Keep existing `Card` API, render as glass (light) for readability.
  return (
    <GlassCard variant="light" className={className}>
      {children}
    </GlassCard>
  )
}

