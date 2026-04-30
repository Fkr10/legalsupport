import { motion as Motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30 })

  return (
    <Motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-[#C8A951]"
    />
  )
}

