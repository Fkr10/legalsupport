export function formatDate(isoDate) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

