import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import { useI18n } from '../utils/i18n.js'

export default function NotFound() {
  const { lang } = useI18n()
  return (
    <>
      <Seo
        title={lang === 'hi' ? 'पेज नहीं मिला' : 'Page not found'}
        description={lang === 'hi' ? 'आपका अनुरोधित पेज उपलब्ध नहीं है।' : 'The page you requested was not found.'}
        canonicalPath="/404"
      />
      <section className="container-max py-16 sm:py-20">
        <div className="glass-strong rounded-2xl p-10">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
            404
          </div>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            {lang === 'hi' ? 'पेज नहीं मिला' : 'Page not found'}
          </h1>
          <p className="mt-4 text-secondary/75 max-w-2xl">
            {lang === 'hi'
              ? 'यह पेज मौजूद नहीं है या स्थानांतरित कर दिया गया है। ऊपर दिए गए नेविगेशन का उपयोग करें या होम पेज पर वापस जाएँ।'
              : 'The page you’re looking for doesn’t exist or was moved. Use the navigation above or go back to the homepage.'}
          </p>
          <div className="mt-8">
            <Button as="link" to="/" variant="accent">
              {lang === 'hi' ? 'होम पर जाएँ' : 'Back to Home'}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

