import { Helmet } from 'react-helmet-async'

export default function Seo({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/logo.svg',
  ogType = 'website',
  children,
}) {
  const url = `https://legalsupportnow.in${canonicalPath}`
  const fullTitle = title ? `${title} | LegalSupportNow` : 'LegalSupportNow — Premium Legal Support'
  const defaultDesc = 'LegalSupportNow provides expert legal support and criminal defense priority. Fast, clear, and trustworthy legal assistance.'
  const finalDesc = description || defaultDesc

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="LegalSupportNow" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ogType === 'article' ? 'BlogPosting' : 'LegalService',
          "name": "LegalSupportNow",
          "url": url,
          "logo": "https://legalsupportnow.in/logo.svg",
          "description": finalDesc,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Uttarakhand",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7452819652",
            "contactType": "emergency helpline",
            "email": "support@legalsupportnow.in"
          }
        })}
      </script>

      {children}
    </Helmet>
  )
}

