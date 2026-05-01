import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../config/site.js'

export default function Seo({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/banner.jpg', // Better default image for social sharing
  ogType = 'website',
  children,
}) {
  const url = `${siteConfig.url}${canonicalPath}`
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — Premium Legal Support`
  const finalDesc = description || siteConfig.description

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteConfig.url}${ogImage}`} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={`${siteConfig.url}${ogImage}`} />

      {/* Schema.org JSON-LD - Enhanced for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ogType === 'article' ? 'BlogPosting' : 'LegalService',
          "name": siteConfig.name,
          "legalName": siteConfig.schema.lawyerName || siteConfig.name,
          "url": url,
          "logo": `${siteConfig.url}/logo.svg`,
          "image": `${siteConfig.url}${ogImage}`,
          "description": finalDesc,
          "telephone": siteConfig.contact.phone,
          "email": siteConfig.contact.email,
          "foundingDate": siteConfig.schema.foundingYear,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.address,
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Delhi" },
            { "@type": "City", "name": "New Delhi" },
            { "@type": "City", "name": "Gurugram" },
            { "@type": "City", "name": "Noida" }
          ],
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.contact.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
          },
          "sameAs": [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.linkedin
          ].filter(Boolean)
        })}
      </script>

      {children}
    </Helmet>
  )
}

