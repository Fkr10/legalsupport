// Direct Unsplash photo IDs — reliable, specific images (no source.unsplash.com which is deprecated)
const photo = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export function getHeroImage() {
  // Law books on desk with professional background
  return photo('1505664194859-b0cd35786ee5', 1600, 900)
}

export function getPracticeHeaderImage() {
  // Courtroom / scales of justice
  return photo('1589829545856-d10d557cf95f', 1600, 900)
}

export function getBlogImage(slug) {
  const map = {
    'bail-process-india':
      photo('1505664194859-b0cd35786ee5', 1200, 800),
    'cyber-fraud-first-steps':
      photo('1563986768609-322da13575f3', 1200, 800),
    'property-due-diligence-checklist':
      photo('1560518883-ce09059eeffa', 1200, 800),
    'mutual-consent-divorce-timeline':
      photo('1450101499163-c8848c66ca85', 1200, 800),
  }
  return map[slug] || photo('1524634126442-357e0eac3c14', 1200, 800)
}

export function getAboutHeaderImage() {
  // Law library / legal books
  return photo('1524634126442-357e0eac3c14', 1600, 900)
}

export function getLawyerPortrait() {
  // Professional portrait / legal professional
  return photo('1589829085413-56de8ae18c73', 600, 800)
}

export function getOfficeImage() {
  // Modern office / conference room
  return photo('1497366216548-37526070297c', 800, 600)
}

export function getConsultationImage() {
  // Two people at office desk in consultation
  return photo('1450101499163-c8848c66ca85', 800, 600)
}

export function getPracticeAreaImage(areaTitle) {
  const map = {
    'Criminal Law':
      photo('1589829545856-d10d557cf95f', 800, 500),
    'Civil Law':
      photo('1450101499163-c8848c66ca85', 800, 500),
    'Corporate Law':
      photo('1497366216548-37526070297c', 800, 500),
    'Family Law':
      photo('1491013516836-7db643ee125a', 800, 500),
    'Property Law':
      photo('1560518883-ce09059eeffa', 800, 500),
    'Cyber Law':
      photo('1563986768609-322da13575f3', 800, 500),
  }
  return map[areaTitle] || photo('1524634126442-357e0eac3c14', 800, 500)
}

export function getTestimonialsBg() {
  return photo('1524634126442-357e0eac3c14', 1600, 900)
}
