# 🎨 Design System Quick Reference

## Color Palette

### Primary Brand Colors
```
Deep Navy:    #0B1C2C  (headings, body text, brand identity)
Gold:         #C8A951  (CTAs, interactive, prestige)
Dark Navy:    #08151F  (footer, dark sections)
Navy Mid:     #122233  (dark section cards)
```

### Text Colors
```
Heading:      #0B1C2C  (h1, h2, h3, h4)
Label:        #1F3650  (form labels, secondary text)
Body:         #4B5563  (standard reading text)
Muted:        #6B7280  (captions, metadata)
```

### Gold Scale
```
Gold:         #C8A951  (primary interactive)
Gold Hover:   #B8960B  (hover states)
Gold Light:   #E8D38A  (on dark sections)
Gold Subtle:  rgba(200,169,81,0.12)  (hover surfaces)
Gold Border:  rgba(200,169,81,0.30)  (featured cards)
```

### Surfaces & Borders
```
Surface:      #FFFFFF  (cards, panels)
Surface Alt:  #F8F9FA  (alternate sections)
Border:       #E5E7EB  (card borders)
Border Navy:  rgba(11,28,44,0.12)  (navy-tinted)
```

### Semantic
```
Success:      #15BE53  (positive status)
Warning:      #D97706  (deadlines, urgency)
Error:        #DC2626  (form errors)
```

## Typography Scale

| Use | Size | Weight | Line Height | Letter Spacing |
|-----|------|--------|-------------|----------------|
| H1 | 56px (clamp 32–56px) | 300 | 1.08 | −1.4px |
| H2 | 48px (clamp 28–48px) | 300 | 1.12 | −0.96px |
| H3 | 32px (clamp 24–32px) | 300 | 1.10 | −0.64px |
| H4 | 24px | 300 | 1.12 | −0.26px |
| Body Large | 18px | 300 | 1.40 | normal |
| Body | 16px | 300–400 | 1.40 | normal |
| Button | 16px | 400 | 1.00 | 0.02em |
| Nav Link | 14px | 400 | 1.00 | normal |
| Label | 13px | 400 | 1.00 | 0.01em |
| Caption | 12px | 300 | 1.33 | normal |

**Font Family:**
- Primary: `Inter` (weights 300, 400)
- Monospace: `Source Code Pro`
- Hindi: `Noto Sans Devanagari`

## Shadows

```
Ambient:   rgba(11,28,44,0.06) 0px 3px 6px 0px
Standard:  rgba(11,28,44,0.08) 0px 15px 35px 0px
Elevated:  rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px
Deep:      rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px
Gold Glow: rgba(200,169,81,0.25) 0px 8px 20px 0px
```

## Border Radius

```
Micro: 1px
Small: 4px    (buttons)
Medium: 5px
Default: 6px  (cards)
Large: 8px    (max per DESIGN.md)
```

## Buttons

### Primary Button
```jsx
<Button variant="accent">
  Text here
</Button>
```
- Background: Gold (#C8A951)
- Text: Navy (#0B1C2C)
- Hover: Dark gold (#B8960B) + gold glow shadow

### Ghost Button
```jsx
<Button variant="ghost">
  Text here
</Button>
```
- Background: Transparent
- Text: Gold (#C8A951)
- Border: Gold border
- Hover: Light gold background

### Dark Button
```jsx
<Button variant="dark">
  Text here
</Button>
```
- Background: Navy (#0B1C2C)
- Text: White (#FFFFFF)
- Hover: Opacity 0.88

### Secondary Button
```jsx
<Button variant="secondary">
  Text here
</Button>
```
- Background: White (#FFFFFF)
- Text: Navy (#0B1C2C)
- Border: Gray border (#E5E7EB)

## Form Elements

### Label
```html
<label class="block text-[13px] font-[400] text-[#1F3650] mb-2">
  Label text
</label>
```

### Input
```html
<input class="glass-input" type="text" placeholder="..." />
```
- Border: #E5E7EB
- Focus: Gold border + gold shadow ring
- Min-height: 44px (accessibility)

### Error Message
```html
<div class="text-xs font-[400] text-[#DC2626]">
  Error message
</div>
```

## Spacing Scale

```
4px   (xs)
8px   (sm)
12px  (md)
16px  (lg)
20px  (xl)
24px  (2xl)
32px  (3xl)
40px  (4xl)
48px  (5xl)
64px  (6xl)
80px  (7xl)
96px  (8xl)
```

## Sections

### Light Section (default)
```html
<section class="bg-white">
  <div class="container-max py-16 sm:py-20">
    <!-- content -->
  </div>
</section>
```

### Alt Section
```html
<section class="bg-[#F8F9FA]">
  <div class="container-max py-16 sm:py-20">
    <!-- content -->
  </div>
</section>
```

### Dark Section
```html
<section class="bg-[#08151F] text-white">
  <div class="container-max py-16 sm:py-20">
    <!-- content with gold accents -->
  </div>
</section>
```

## Cards

### Standard Card
```html
<div class="bg-white rounded-[6px] border border-[#E5E7EB] p-6 shadow-elevated">
  <!-- content -->
</div>
```

### Dark Card (in dark sections)
```html
<div class="bg-white/5 rounded-[6px] border border-white/10">
  <!-- white text content -->
</div>
```

### Featured Card
```html
<div class="bg-white rounded-[6px] border border-[#C8A951]/30 shadow-elevated">
  <!-- gold-accented content -->
</div>
```

## Common Patterns

### Section Heading
```jsx
<SectionHeading
  eyebrow="Label"
  title="Section Title"
  description="Description text"
  tone="light" // or "dark"
/>
```

### Eyebrow Label
```html
<div class="inline-flex items-center gap-2 text-[11px] font-[400] tracking-[0.12em] uppercase text-[#C8A951]">
  <span class="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
  Eyebrow text
</div>
```

### Authority Badge
```html
<span class="inline-flex items-center gap-1.5 rounded-[4px] bg-[rgba(200,169,81,0.1)] border border-[rgba(200,169,81,0.2)] px-3 py-1 text-[10px] font-[400] tracking-[0.05em] uppercase text-[#C8A951]">
  Badge text
</span>
```

### CTA Row
```jsx
<div className="flex flex-col sm:flex-row gap-3">
  <Button as="link" to="/contact" variant="accent">
    Primary CTA
  </Button>
  <a href="..." className="btn-ghost">
    Secondary CTA
  </a>
</div>
```

## Accessibility Standards

- ✅ Minimum touch target: 44px
- ✅ Focus ring: Gold outline (2px)
- ✅ Contrast: WCAG AA (4.5:1 or higher)
- ✅ Color alone: Never used to convey information
- ✅ Semantic HTML: Proper heading hierarchy

## CSS Variables (src/index.css)

```css
--clr-navy          #0B1C2C
--clr-navy-dark     #08151F
--clr-navy-mid      #122233
--clr-label         #1F3650
--clr-body          #4B5563
--clr-muted         #6B7280

--clr-gold          #C8A951
--clr-gold-h        #B8960B
--clr-gold-l        #E8D38A
--clr-gold-sub      rgba(200,169,81,0.12)
--clr-gold-border   rgba(200,169,81,0.30)

--clr-surface       #FFFFFF
--clr-surface-alt   #F8F9FA
--clr-border        #E5E7EB
--clr-border-navy   rgba(11,28,44,0.12)

--clr-success       #15BE53
--clr-success-txt   #0D7A34
--clr-warning       #D97706
--clr-error         #DC2626

--shadow-ambient    rgba(11,28,44,0.06) 0px 3px 6px 0px
--shadow-standard   rgba(11,28,44,0.08) 0px 15px 35px 0px
--shadow-elevated   rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px
--shadow-deep       rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px
--shadow-gold       rgba(200,169,81,0.25) 0px 8px 20px 0px

--radius-sm         4px
--radius-md         5px
--radius-lg         6px
--radius-xl         8px
```

## Utility Classes

```css
.container-max          /* max-width 1080px centered */
.section-light          /* white background */
.section-alt            /* light gray background */
.section-dark           /* dark navy background, white text */
.stripe-card            /* white card with elevated shadow */
.stripe-card-dark       /* dark semi-transparent card */
.stripe-card-gold       /* gold-featured card */
.badge-eyebrow          /* uppercase gold label */
.link-underline         /* hover underline effect */
.prose-clean            /* blog post paragraph styling */
.high-contrast          /* navy bg, white text, gold headings */
.authority-badge        /* gold semantic badge */
```

---

**For complete specification, see:** `DESIGN.md`  
**For detailed changes, see:** `DESIGN_IMPROVEMENTS_SUMMARY.md`
