const modules = import.meta.glob('../data/blogs/*.json', { eager: true })

function normalizeBlog(raw) {
  const blog = raw?.default || raw
  return {
    title: blog.title,
    slug: blog.slug,
    category: blog.category,
    author: blog.author,
    date: blog.date,
    readTime: blog.readTime,
    content: Array.isArray(blog.content) ? blog.content : [],
  }
}

export function getAllBlogs() {
  const list = Object.values(modules).map(normalizeBlog)
  list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return list
}

export function getBlogBySlug(slug) {
  return getAllBlogs().find((b) => b.slug === slug) || null
}

