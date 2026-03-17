import { useState, useEffect } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { DisclaimerContext } from '../context/DisclaimerContext.jsx'

export function DisclaimerProvider({ children }) {
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    // Defer state updates to next frame
    const timer = requestAnimationFrame(() => {
      // Check if user has already accepted or rejected the disclaimer
      const disclaimerStatus = localStorage.getItem('disclaimerAccepted')
      
      if (disclaimerStatus === 'true') {
        // User previously accepted, don't show
        setShowDisclaimer(false)
        setAccepted(true)
      } else if (disclaimerStatus === 'false') {
        // User previously rejected, close the page
        setTimeout(() => window.close(), 100)
      }
      // else: First time visitor, show the disclaimer (already true)
    })
    
    return () => cancelAnimationFrame(timer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true')
    setAccepted(true)
    setShowDisclaimer(false)
  }

  return (
    <DisclaimerContext.Provider value={{ accepted }}>
      <AnimatePresence>
        {showDisclaimer && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <Motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              className="bg-surface rounded-2xl shadow-lift w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col border border-secondary/10"
            >
              {/* Header - Minimal */}
              <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white px-6 py-3 border-b border-accent/20">
                <div className="flex items-center gap-3">
                  <img
                    src="/storage/brand/favicon.svg"
                    alt="LegalSupportNow"
                    className="h-6 w-6 rounded flex-shrink-0"
                    loading="eager"
                    decoding="async"
                  />
                  <h2 className="text-lg font-bold tracking-tight text-white">Important Disclaimer</h2>
                </div>
                <div className="w-8 h-0.5 bg-accent rounded-full mt-2 ml-9"></div>
              </div>

              {/* Content - Maximized */}
              <div className="flex-1 overflow-y-auto px-5 py-4 bg-white">
                <div className="space-y-4">
                  <p className="text-secondary leading-relaxed text-sm font-medium">
                    This website is intended solely for informational purposes and does not constitute advertising or solicitation, in accordance with the rules of the Bar Council of India/Bar Counsel of Delhi. By accessing this website, you confirm that you are seeking information about the advocate on your own accord.
                  </p>
                  
                  <div className="bg-accent/15 border-l-4 border-accent p-3 rounded-lg">
                    <p className="text-secondary text-xs leading-relaxed font-semibold">
                      ⚠️ Please read and understand this disclaimer carefully before proceeding.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    <div className="bg-primary/8 p-3 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-primary mb-1 text-xs">📋 Scope</h3>
                      <p className="text-secondary text-xs leading-relaxed font-medium">
                        Information provided is for general legal knowledge only, not specific legal advice.
                      </p>
                    </div>
                    <div className="bg-primary/8 p-3 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-primary mb-1 text-xs">⚖️ Professional Counsel</h3>
                      <p className="text-secondary text-xs leading-relaxed font-medium">
                        For legal matters, consult with a qualified attorney in your jurisdiction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Compact */}
              <div className="bg-background px-5 py-3 border-t border-secondary/10 flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="w-full px-5 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-primary font-bold rounded-lg hover:shadow-glow transition-all duration-300 uppercase tracking-wide text-xs"
                >
                  I Understand & Accept
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
      {children}
    </DisclaimerContext.Provider>
  )
}
