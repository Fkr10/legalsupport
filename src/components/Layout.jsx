import { Outlet, useLocation } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'
import { pageFade } from '../utils/motion.js'

export default function Layout() {
  const location = useLocation()
  const [isBootLoading, setIsBootLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsBootLoading(false), 550)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen app-bg">
      <Navbar />
      <FloatingActions />

      {isBootLoading ? (
        <div className="fixed inset-0 z-[60] grid place-items-center app-bg">
          <div className="w-full max-w-[420px] px-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl glass grid place-items-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-accent" />
            </div>
            <p className="mt-4 text-sm text-white/75">
              Preparing your consultation experience…
            </p>
          </div>
        </div>
      ) : null}

      <Motion.main
        variants={pageFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pt-[68px] md:pt-[104px]"
      >
        <Outlet />
      </Motion.main>
      <Footer />
    </div>
  )
}

