# Design System — LegalSupportNow

## 1. Visual Theme & Atmosphere

LegalSupportNow is a criminal defense law firm serving Delhi NCR. The design must
communicate **authority, trust, precision, and urgency** — the qualities a client in
legal distress needs to feel instantly. The palette draws from the visual language of
Indian and British legal tradition: deep navy for gravitas, gold for prestige, and pure
white for transparency.

The primary typeface is **Inter** (weight 300 for all headings and body text — a light,
confident weight that reads as authoritative without shouting). The secondary system
uses **Source Code Pro** for tabular figures and legal reference numbers.

**Key Characteristics:**
- Deep Navy (`#0B1C2C`) as the dominant brand and heading color — law, authority, trust
- Gold (`#C8A951`) as the sole interactive/CTA accent — prestige, justice, value
- Pure White (`#FFFFFF`) page background — transparency, clarity, cleanliness
- Dark Navy (`#08151F`) for immersive dark sections — gravitas, night court
- Weight 300 for headlines — confident authority that doesn't need to shout
- Conservative 4–8px border-radius — nothing playful; everything purposeful
- Blue-tinted multi-layer shadows — depth and atmospheric elevation
- No warm reds or techy purples — those undermine legal trust

---

## 2. Color Palette & Roles

### Primary Brand
- **Deep Navy** (`#0B1C2C`): Primary heading color, brand identity, navbar background on dark, body text anchor. The foundation of legal authority.
- **Gold** (`#C8A951`): Primary CTA background, active states, accents, interactive highlights. Communicates prestige and value — not cheap yellow, but warm burnished gold.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, button text on dark.

### Dark & Immersive
- **Dark Navy** (`#08151F`): Used for footer, dark sections, and immersive hero overlays. Deeper than the brand navy.
- **Navy Mid** (`#122233`): Secondary dark for card surfaces within dark sections.

### Gold Scale
- **Gold** (`#C8A951`): Primary interactive — CTAs, links, active indicators.
- **Gold Hover** (`#B8960B`): Darker gold for hover states.
- **Gold Light** (`#E8D38A`): Soft gold for light accents on dark backgrounds.
- **Gold Subtle** (`rgba(200,169,81,0.12)`): Tinted hover surfaces and badge backgrounds.
- **Gold Border** (`rgba(200,169,81,0.25)`): Subtle gold borders for cards on dark sections.

### Text Scale
- **Heading** (`#0B1C2C`): Primary headings on white sections.
- **Label** (`#1F3650`): Secondary labels, sub-headings, form labels.
- **Body** (`#4B5563`): Standard reading text, descriptions.
- **Muted** (`#6B7280`): Captions, metadata, timestamps.

### Surface & Borders
- **Surface** (`#FFFFFF`): Card and panel background.
- **Surface Alt** (`#F8F9FA`): Slightly off-white section backgrounds.
- **Border Default** (`#E5E7EB`): Standard card and input borders.
- **Border Gold** (`rgba(200,169,81,0.30)`): Gold-tinted borders for featured cards.
- **Border Navy** (`rgba(11,28,44,0.12)`): Navy-tinted borders on light surfaces.

### Semantic
- **Success** (`#15BE53`): Positive status, case wins, trust indicators.
- **Success Text** (`#0D7A34`): Text on success badges.
- **Warning** (`#D97706`): Deadlines, urgency indicators.
- **Error** (`#DC2626`): Form errors, critical alerts.

### Shadows
- **Shadow Blue** (`rgba(11,28,44,0.25)`): Navy-tinted primary shadow — on-brand depth.
- **Shadow Ambient** (`rgba(11,28,44,0.06)`): Subtle ambient card lift.
- **Shadow Standard** (`rgba(11,28,44,0.08)`): Standard card elevation.
- **Shadow Gold** (`rgba(200,169,81,0.20)`): Gold glow for CTA buttons on hover.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter` (weight 300, 400 only), fallback: `SF Pro Display`
- **Monospace**: `Source Code Pro`, fallback: `SFMono-Regular`
- **Hindi Locale**: `Noto Sans Devanagari`, weight 300/400

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 56px (clamp 32–56px) | 300 | 1.08 | −1.4px | Large hero headline |
| Display Large | 48px (clamp 28–48px) | 300 | 1.12 | −0.96px | Section hero |
| Section Heading | 32px (clamp 24–32px) | 300 | 1.10 | −0.64px | Section titles |
| Sub-heading | 24px | 300 | 1.12 | −0.26px | Card headings |
| Body Large | 18px | 300 | 1.40 | normal | Feature descriptions |
| Body | 16px | 300–400 | 1.40 | normal | Standard reading |
| Button | 16px | 400 | 1.00 | 0.02em | CTA text |
| Button Small | 14px | 400 | 1.00 | normal | Secondary buttons |
| Nav Link | 14px | 400 | 1.00 | normal | Navigation |
| Caption | 13px | 400 | normal | normal | Labels, metadata |
| Caption Small | 12px | 300 | 1.33 | normal | Fine print |
| Micro | 11px | 400 | 1.15 | 0.1em | Eyebrow labels (uppercase) |

### Principles
- Weight 300 for all headings and body — authority through lightness, not aggression
- Weight 400 only for buttons, nav links, labels, eyebrow tags
- Negative letter-spacing at large sizes: −1.4px at 56px, relaxing to 0 at 16px
- Eyebrow labels: 11px, 400, uppercase, 0.1em tracking — in Gold (#C8A951)

---

## 4. Component Stylings

### Buttons

**Primary Gold**
- Background: `#C8A951`
- Text: `#0B1C2C` (navy on gold — high contrast)
- Padding: `10px 20px`
- Radius: `4px`
- Font: 16px Inter weight 400, letter-spacing 0.02em
- Hover: `#B8960B` background + gold glow shadow
- Shadow: `rgba(200,169,81,0.25) 0px 8px 20px 0px`
- Use: All primary CTAs ("Book Consultation", "Get Help Now")

**Ghost / Outlined**
- Background: transparent
- Text: `#C8A951`
- Padding: `10px 20px`
- Radius: `4px`
- Border: `1px solid rgba(200,169,81,0.40)`
- Hover: `rgba(200,169,81,0.08)` background
- Use: Secondary actions on dark backgrounds

**Navy Solid**
- Background: `#0B1C2C`
- Text: `#FFFFFF`
- Padding: `10px 20px`
- Radius: `4px`
- Hover: opacity 0.88
- Use: Secondary CTAs on white/light sections

**White Outline**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid rgba(255,255,255,0.30)`
- Hover: `rgba(255,255,255,0.08)` background
- Use: Tertiary actions on dark sections

### Cards & Containers

**Light Card (white section)**
- Background: `#FFFFFF`
- Border: `1px solid #E5E7EB`
- Radius: `6px`
- Shadow: `rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px`

**Alt Card (surface-alt section)**
- Background: `#FFFFFF`
- Border: `1px solid rgba(11,28,44,0.08)`
- Radius: `6px`
- Shadow: `rgba(11,28,44,0.06) 0px 3px 6px 0px`

**Dark Card (dark section)**
- Background: `rgba(255,255,255,0.05)`
- Border: `1px solid rgba(255,255,255,0.10)`
- Radius: `6px`

**Featured Card (gold accent)**
- Border: `1px solid rgba(200,169,81,0.30)`
- Background: `rgba(200,169,81,0.06)`
- Radius: `6px`

### Inputs & Forms
- Border: `1px solid #E5E7EB`
- Radius: `4px`
- Focus: border `#C8A951`, ring `rgba(200,169,81,0.15)`
- Label: `#1F3650`, 14px Inter weight 400
- Text: `#0B1C2C`
- Placeholder: `#6B7280`

### Navigation
- Desktop: white sticky header, `rgba(11,28,44,0.06)` shadow
- Links: 14px/400/`#0B1C2C`, hover: `#C8A951`
- Active: gold text + `rgba(200,169,81,0.08)` bg
- CTA: gold primary button right-aligned
- Mobile: dark navy (`#08151F`) drawer
- Radius: 6px for nav container and items

### Badges & Tags
- **Gold Eyebrow**: 11px/400/uppercase/`#C8A951` — section labels
- **Success Badge**: `rgba(21,190,83,0.15)` bg, `#0D7A34` text, `rgba(21,190,83,0.30)` border
- **Neutral Pill**: `#F8F9FA` bg, `#0B1C2C` text, `#E5E7EB` border

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
- Section vertical padding: 80px desktop, 48px mobile

### Grid & Container
- Max content width: 1080px
- Hero: single-column centered, or 2-col split on desktop
- Feature sections: 2–3 column grids
- Full-width dark sections for `#08151F` brand immersion

### Whitespace Philosophy
- Precision spacing — every gap is intentional
- Dense content panels (case types, stats) with generous surrounding chrome
- Section rhythm: white ↔ `#F8F9FA` ↔ `#08151F` alternation

### Border Radius Scale
- Micro (2px): Fine-grained elements
- Standard (4px): Buttons, inputs, badges
- Comfortable (6px): Cards, nav items
- Large (8px): Featured cards, hero panels

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page background |
| Ambient | `rgba(11,28,44,0.06) 0px 3px 6px` | Subtle card lift |
| Standard | `rgba(11,28,44,0.08) 0px 15px 35px` | Standard cards |
| Elevated | `rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px` | Featured cards, dropdowns |
| Deep | `rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px` | Modals |
| Gold Glow | `rgba(200,169,81,0.25) 0px 8px 20px 0px` | Gold CTA hover |
| Focus Ring | `2px solid #C8A951` outline | Keyboard focus |

---

## 7. Do's and Don'ts

### Do
- Use navy (`#0B1C2C`) for headings — authority, trust
- Use gold (`#C8A951`) for all CTAs and interactive elements — prestige
- Use navy-tinted shadows (`rgba(11,28,44,...)`) — on-brand depth
- Keep border-radius 4px–8px — conservative, professional
- Use weight 300 for headings and body — confidence through restraint
- Use dark navy (`#08151F`) for immersive dark sections (footer, hero overlays)
- Use eyebrow labels in gold uppercase for section identification

### Don't
- Don't use techy violet, purple, or bright blue — wrong niche signal
- Don't use warm orange or red as primary interactive — alarm signal, not authority
- Don't use rounded pill shapes (12px+) on cards or buttons — too casual
- Don't use pure black (`#000000`) for anything — navy has warmth
- Don't use weight 600–700 for Inter headings — heavy weight undermines elegance
- Don't use magenta, hot pink, or neon — legal brand poison
- Don't use arbitrary spacing — always use the 8px scale

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Changes |
|------|-------|---------|
| Mobile | <640px | Single column, reduced heading, stacked cards |
| Tablet | 640–1024px | 2-column grids, moderate padding |
| Desktop | 1024–1280px | Full layout, 3-column grids |
| Large | >1280px | Centered content, generous margins |

### Collapsing Strategy
- Hero: 56px → 32px on mobile, weight 300 maintained
- Navigation: horizontal → hamburger drawer (dark navy)
- Cards: 3-col → 2-col → 1-col
- Section spacing: 80px → 48px on mobile
- Typography compresses progressively with `clamp()`

### Touch Targets
- All buttons minimum 44×44px
- Nav links have comfortable tap zones
- Form inputs minimum 44px height

---

## 9. Quick Reference

### Color Tokens
| Token | Value | Use |
|-------|-------|-----|
| `--clr-navy` | `#0B1C2C` | Headings, brand anchor |
| `--clr-navy-dark` | `#08151F` | Dark sections, footer |
| `--clr-navy-mid` | `#122233` | Dark card surfaces |
| `--clr-gold` | `#C8A951` | CTAs, accents, active states |
| `--clr-gold-h` | `#B8960B` | Gold hover |
| `--clr-gold-l` | `#E8D38A` | Light gold on dark |
| `--clr-label` | `#1F3650` | Labels, sub-headings |
| `--clr-body` | `#4B5563` | Body text |
| `--clr-muted` | `#6B7280` | Captions |
| `--clr-surface` | `#FFFFFF` | Page, cards |
| `--clr-surface-alt` | `#F8F9FA` | Alternate sections |
| `--clr-border` | `#E5E7EB` | Standard borders |
| `--clr-success` | `#15BE53` | Success states |

### Shadow Tokens
| Token | Value |
|-------|-------|
| `--shadow-ambient` | `rgba(11,28,44,0.06) 0px 3px 6px 0px` |
| `--shadow-standard` | `rgba(11,28,44,0.08) 0px 15px 35px 0px` |
| `--shadow-elevated` | `rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px` |
| `--shadow-gold` | `rgba(200,169,81,0.25) 0px 8px 20px 0px` |

