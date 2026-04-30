# Quick Start Guide - LegalSupportNow v2.0

## For Developers

### Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Open in browser: http://localhost:5173
```

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## For Deployment with Docker

### Quick Docker Setup

```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run
# or using docker-compose:
npm run docker:compose:up

# Access at http://localhost:8080
```

### Stop and Clean

```bash
npm run docker:compose:down
```

## For Content Managers

### Updating Content

All static content is now in `src/data/` directory. Edit these JSON files:

- **Navigation**: `src/data/navigation.json`
- **Testimonials**: `src/data/testimonials.json`
- **Practice Areas**: `src/data/practiceAreas.json`
- **Contact Info**: `src/data/contact.json`
- **Footer**: `src/data/footer.json`
- **Lawyer Profile**: `src/data/lawyer.json`
- **Blog Posts**: `src/data/blogs/*.json`

After editing, the development server will auto-refresh. For production, rebuild and redeploy.

### Example: Adding a Testimonial

1. Open `src/data/testimonials.json`
2. Add a new entry to the `items` array:

```json
{
  "name": "Your Client Name",
  "context": "Case Type (City)",
  "quote": "Your testimonial text here...",
  "rating": 5
}
```

3. Save the file - it will appear immediately in development

## Project Structure

```
legalsupportnow/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components (Home, About, etc.)
│   ├── data/               # JSON content files
│   ├── utils/              # Helper functions and utilities
│   ├── context/            # React context for state
│   ├── routes/             # Router configuration
│   ├── App.jsx             # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx            # Entry point
├── public/
│   └── storage/            # Image assets
├── nginx/
│   └── legalsupportnow.conf # Nginx configuration
├── Dockerfile              # Docker build configuration
├── docker-compose.yml      # Docker Compose setup
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

## Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: Custom translation system (English & Hindi)
- **Forms**: React Hook Form
- **Routing**: React Router v7
- **Server**: Nginx (Docker production)
- **Containerization**: Docker + Docker Compose

## Available NPM Scripts

```bash
npm run dev              # Start development server (http://localhost:5173)
npm run build           # Build for production
npm run start           # Serve production build locally
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run docker:build    # Build Docker image
npm run docker:run      # Run Docker container
npm run docker:compose:up    # Start with Docker Compose
npm run docker:compose:down  # Stop Docker Compose
npm run docker:compose:logs  # View Docker Compose logs
```

## Configuration Files

### Environment Variables

Development: Auto-configured by Vite
Production: Set in `.env.docker`

### Tailwind Configuration

Customization in `tailwind.config.js`:
- Custom colors (primary, secondary, accent)
- Custom shadows and utilities
- Responsive breakpoints

### Vite Configuration

Build optimization in `vite.config.js`:
- React Fast Refresh
- Optimized chunk splitting

## Responsive Design

The app is fully responsive:

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | 375-540px | Single column |
| Tablet | 640-1024px | 2-3 columns |
| Desktop | 1025px+ | Full layout |

Test different screen sizes in browser DevTools.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Performance Features

✅ **Build**: Vite provides instant build and HMR  
✅ **CSS**: Tailwind CSS with tree-shaking  
✅ **Images**: Lazy loading with responsive sizes  
✅ **Compression**: Gzip enabled in production  
✅ **Caching**: Static assets cached for 1 year  
✅ **Docker**: Multi-stage build, ~50MB image  

## Common Tasks

### Add a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/routes/AppRoutes.jsx`
3. Update navigation in `src/data/navigation.json`

### Add a Blog Post

1. Create `src/data/blogs/new-article.json`
2. Add image to `public/storage/blogs/`
3. Update `src/utils/images.js` if needed

### Change Colors

Edit `tailwind.config.js`:
- `primary`: Main brand color
- `secondary`: Text color
- `accent`: Highlight color

### Customize Typography

Edit `src/index.css` for base styles and `src/components/SectionHeading.jsx` for components.

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Docker Container Won't Start
```bash
# Check logs
docker logs legalsupportnow-app

# Verify port is free
lsof -i :8080
```

### Build Fails
```bash
# Check for linting errors
npm run lint

# Clear Vite cache
rm -rf dist .vite
npm run build
```

## Documentation

Detailed guides available:

- **[IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md)** - Complete list of improvements made
- **[DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)** - Docker setup and deployment guide
- **[RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md)** - Responsive design implementation details
- **[JSON_CONTENT_GUIDE.md](./JSON_CONTENT_GUIDE.md)** - How to manage JSON content files

## Next Steps

1. **Customize Content**: Update JSON files with your information
2. **Test Locally**: Run `npm run dev` and test in browser
3. **Deploy**: Use `npm run docker:compose:up` for production

## Support

For issues or questions:

1. Check the relevant documentation file
2. Review console errors (`npm run dev` terminal or browser DevTools)
3. Check Docker logs (`npm run docker:compose:logs`)

## Version Info

- **Version**: 2.0.0
- **Last Updated**: April 30, 2026
- **Node Version**: >=18.19.1
- **Docker**: Nginx Alpine + Node Alpine

---

**Ready to build something amazing!** 🚀
