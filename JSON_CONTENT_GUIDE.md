# JSON Content Management Guide

## Overview

The application now uses JSON files to manage dynamic content, making it easier to update and maintain without modifying React components. This approach provides:

- **Centralized Content Management**: All content in one place
- **Easy Updates**: Edit JSON files instead of components
- **Reusability**: Content can be shared across pages
- **Consistency**: Ensures consistent data structure
- **Scalability**: Easy to add new content types

## JSON Files Structure

### Data Directory

```
src/data/
├── navigation.json          # Navigation menu items
├── testimonials.json        # Client testimonials
├── practiceAreas.json       # Practice areas/services
├── contact.json             # Contact information
├── footer.json              # Footer content
├── lawyer.json              # Lawyer profile information
└── blogs/
    ├── bail-process-india.json
    ├── cyber-fraud-first-steps.json
    ├── property-due-diligence-checklist.json
    └── mutual-consent-divorce-timeline.json
```

## File Specifications

### 1. Navigation (`navigation.json`)

**Purpose**: Define all navigation menu items

**Structure**:
```json
{
  "primary": [
    {
      "key": "nav.home",          // i18n translation key
      "to": "/",                  // Route path
      "end": true                 // Active route matching
    }
  ],
  "footer": [
    {
      "key": "nav.practice",
      "to": "/practice-areas"
    }
  ]
}
```

**Usage**: 
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`

### 2. Testimonials (`testimonials.json`)

**Purpose**: Store client testimonials for display

**Structure**:
```json
{
  "items": [
    {
      "name": "Client Name",
      "context": "Case Type (City)",
      "quote": "Testimonial text...",
      "rating": 5
    }
  ]
}
```

**Usage**:
- `src/pages/Home.jsx`
- `src/components/TestimonialSlider.jsx`

**Fields**:
- `name`: Client's name
- `context`: Brief case description with location
- `quote`: Testimonial text (max 200 characters)
- `rating`: Star rating (1-5)

### 3. Practice Areas (`practiceAreas.json`)

**Purpose**: Define all legal practice areas

**Structure**:
```json
{
  "areas": [
    {
      "id": "criminal",
      "title": "Criminal Law",
      "icon": "Gavel",              // Lucide icon name
      "highlight": true,            // Featured area
      "description": "Description...",
      "services": [
        "Service 1",
        "Service 2"
      ]
    }
  ]
}
```

**Usage**:
- `src/pages/Home.jsx`
- `src/pages/PracticeAreas.jsx`

**Icon Names** (from lucide-react):
- `Gavel` - Criminal Law
- `Scale` - Civil Law
- `Building2` - Corporate Law
- `HeartHandshake` - Family Law
- `Home` - Property Law
- `Shield` - Cyber Law

### 4. Contact (`contact.json`)

**Purpose**: Store contact information and form options

**Structure**:
```json
{
  "contact": {
    "phone": {
      "display": "+91 XXXXXXXXXX",
      "tel": "tel:+91XXXXXXXXXX"
    },
    "whatsapp": "https://wa.me/9XXXXXXXXXX?text=...",
    "email": "email@domain.com",
    "address": "Full address",
    "mapsEmbed": "https://www.google.com/maps?q=..."
  },
  "caseTypes": [
    "Criminal (Bail / FIR / Trial)",
    "Cyber (Online Fraud / Impersonation)",
    "Property (Dispute / Documentation)",
    "Family (Divorce / Custody / Maintenance)",
    "Civil (Recovery / Injunction / Consumer)",
    "Corporate (Contracts / Notices / Advisory)",
    "Other / Not sure"
  ]
}
```

**Usage**:
- `src/pages/Contact.jsx`

### 5. Footer (`footer.json`)

**Purpose**: Footer content and links

**Structure**:
```json
{
  "company": {
    "name": "LegalSupportNow",
    "phone": {
      "display": "+91 XXXXXXXXXX",
      "tel": "tel:+91XXXXXXXXXX"
    },
    "email": "email@domain.com",
    "address": "Full address"
  },
  "quickLinks": [
    {
      "key": "nav.practice",
      "to": "/practice-areas"
    }
  ]
}
```

**Usage**:
- `src/components/Footer.jsx`

### 6. Lawyer (`lawyer.json`)

**Purpose**: Lawyer profile information

**Structure**:
```json
{
  "profile": {
    "name": "Adv. Name",
    "title": "Professional Title",
    "location": "City",
    "experience": "12+ years",
    "highlights": [
      "Key strength 1",
      "Key strength 2"
    ],
    "education": [
      "Degree 1",
      "Degree 2"
    ]
  }
}
```

**Usage**:
- `src/pages/About.jsx`

**Note**: Photo URL is handled dynamically in the component using `getLawyerPortrait()`

### 7. Blog Posts (`blogs/*.json`)

**Purpose**: Individual blog post content

**Structure**:
```json
{
  "title": "Article Title",
  "slug": "article-slug",
  "category": "Criminal Law",
  "author": "Author Name",
  "date": "2025-02-10",
  "readTime": "6 min",
  "content": [
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3..."
  ]
}
```

**Usage**:
- `src/pages/BlogIndex.jsx`
- `src/pages/BlogDetail.jsx`

## How to Edit Content

### 1. Update Navigation

Edit `src/data/navigation.json`:
```json
{
  "primary": [
    { "key": "nav.home", "to": "/", "end": true },
    { "key": "nav.newPage", "to": "/new-page", "end": false }
  ]
}
```

Then restart the development server.

### 2. Add a Testimonial

Edit `src/data/testimonials.json`:
```json
{
  "items": [
    {
      "name": "New Client",
      "context": "Case Type (City)",
      "quote": "Their service was excellent...",
      "rating": 5
    }
  ]
}
```

Changes appear immediately after save (if hot reload is enabled).

### 3. Add a Practice Area

Edit `src/data/practiceAreas.json`:
```json
{
  "areas": [
    {
      "id": "newarea",
      "title": "New Legal Area",
      "icon": "LucideIconName",
      "highlight": false,
      "description": "Description of the area",
      "services": ["Service 1", "Service 2", "Service 3"]
    }
  ]
}
```

### 4. Update Contact Info

Edit `src/data/contact.json`:
```json
{
  "contact": {
    "phone": {
      "display": "+91 NEW NUMBER",
      "tel": "tel:+91NEWNUMBER"
    },
    "email": "newemail@domain.com",
    "address": "New address"
  }
}
```

### 5. Add a Blog Post

Create `src/data/blogs/new-article.json`:
```json
{
  "title": "New Article Title",
  "slug": "new-article",
  "category": "Civil Law",
  "author": "Author Name",
  "date": "2025-03-15",
  "readTime": "8 min",
  "content": [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ]
}
```

Then add an image at `public/storage/blogs/new-article.svg` or update `src/utils/images.js` to map the image.

## Integration with Components

### Example 1: Using Navigation Data

**Component**: `src/components/Navbar.jsx`

```jsx
import navigationData from '../data/navigation.json'

const navItems = navigationData.primary

// Usage:
{navItems.map((item) => (
  <NavLink key={item.to} to={item.to} end={item.end}>
    {t(item.key)}
  </NavLink>
))}
```

### Example 2: Using Testimonials

**Component**: `src/pages/Home.jsx`

```jsx
import testimonialsData from '../data/testimonials.json'

const testimonials = testimonialsData.items

// Usage:
<TestimonialSlider testimonials={testimonials} />
```

### Example 3: Using Practice Areas

**Component**: `src/pages/PracticeAreas.jsx`

```jsx
import practiceAreasData from '../data/practiceAreas.json'

const iconMap = {
  Gavel: Gavel,
  Scale: Scale,
  // ... other icons
}

const practiceAreasWithIcons = practiceAreasData.areas.map(area => ({
  ...area,
  icon: iconMap[area.icon] || Gavel,
}))

// Usage:
{practiceAreasWithIcons.map((area) => (
  <Card key={area.id}>
    {/* Render area */}
  </Card>
))}
```

## Best Practices

### 1. Keep Content Concise
- Navigation labels: 1-2 words
- Testimonials: 100-150 characters
- Descriptions: 2-3 sentences

### 2. Consistency
- Use consistent naming conventions
- Maintain parallel structure in arrays
- Use consistent date formats (YYYY-MM-DD)

### 3. SEO Optimization
- Use descriptive titles for blog posts
- Include relevant keywords in descriptions
- Maintain proper slug format (lowercase, hyphens)

### 4. Internationalization (i18n)
- Use translation keys for text that needs localization
- Store only non-translatable data in JSON
- Example: `"key": "nav.home"` → translates to "Home" or "होम"

### 5. Validation
- Phone numbers should include country code
- Dates must be YYYY-MM-DD format
- Icon names must match lucide-react exports
- URLs should be complete and valid

## Adding New JSON Files

To add new content types:

1. Create file in `src/data/new-content.json`
2. Define structure with proper types
3. Import in appropriate component
4. Map to component props
5. Update this documentation

## Troubleshooting

### Issue: Changes not appearing
- **Solution**: Clear cache and restart dev server
- **Solution**: Check JSON syntax with online validator

### Issue: Invalid JSON error
- **Solution**: Use proper JSON format (quotes, commas)
- **Solution**: Check for trailing commas in last array item

### Issue: Icon not rendering
- **Solution**: Verify icon name matches lucide-react exports
- **Solution**: Check spelling (case-sensitive)

### Issue: Links broken
- **Solution**: Verify route paths exist in `AppRoutes.jsx`
- **Solution**: Check "to" field matches navigation routes

## Performance Considerations

### Optimization Tips
1. Keep JSON files under 100KB
2. Use lazy loading for blog images
3. Limit testimonial items to 5-10
4. Cache JSON in service worker if needed

### Bundle Size
- JSON files are included in the bundle
- Consider moving large datasets to API endpoints
- Use dynamic imports for optional content

## Version Control

### Recommended Workflow
1. Edit JSON files in feature branch
2. Test changes locally
3. Create pull request
4. Review content changes
5. Merge to main
6. Deploy

### Backup Strategy
- Commit changes to git
- Tag releases with version numbers
- Maintain changelog in CHANGELOG.md

## Migration from Hardcoded to JSON

Files already migrated:
- ✅ Navigation items
- ✅ Testimonials
- ✅ Practice areas
- ✅ Contact information
- ✅ Footer content
- ✅ Lawyer profile

Files still in components (can migrate):
- Contact form field labels (i18n keys)
- Home page stats (could be in JSON)
- Blog categories (generated from blog data)

## Future Enhancements

1. **API Integration**: Fetch JSON from CMS
2. **Database**: Store content in database
3. **Admin Panel**: UI for managing content
4. **Validation Schema**: JSON schema validation
5. **Versioning**: Content version control
6. **CDN**: Serve JSON from CDN for faster loading
