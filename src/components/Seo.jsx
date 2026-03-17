import { Helmet } from 'react-helmet-async'

export default function Seo({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/storage/brand/legalsupportnow-mark.svg',
}) {
  const url = `https://legalsupportnow.in${canonicalPath}`
  const fullTitle = title ? `${title} | LegalSupportNow` : 'LegalSupportNow'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  )
}

