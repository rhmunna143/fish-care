# Product Requirements Document (PRD)
## Allied Fish Care Ltd. - Corporate Website

**Document Version:** 1.0  
**Date:** December 15, 2025  
**Project Type:** Static Website Development  
**Technology Stack:** HTML5 + CSS3 (Raw, No Frameworks)

---

## 1. Executive Summary

### 1.1 Project Overview
Development of a modern, fully responsive, bilingual (English/Bengali) corporate website for **Allied Fish Care Ltd.**, a leading aquaculture and fisheries management company specializing in sustainable fish farming solutions, fish feed, water treatment products, and aquaculture consultancy services.

### 1.2 Business Objectives
- Establish a strong online presence in both Bangladesh and international markets
- Showcase products and services to fish farmers, distributors, and B2B partners
- Build trust and credibility through professional web presence
- Generate leads through contact forms and WhatsApp integration
- Provide educational content through blog/news section

### 1.3 Target Audience
| Audience Segment | Description | Priority |
|------------------|-------------|----------|
| Fish Farmers | Small to industrial scale fish/shrimp farmers | Primary |
| Distributors | Aquaculture input suppliers and distributors | Primary |
| B2B Partners | Government, NGO aquaculture projects | Secondary |
| Research Institutions | Hatcheries and research facilities | Secondary |
| General Consumers | Export-oriented seafood producers | Tertiary |

### 1.4 Geographic Scope
- **Primary:** Bangladesh market
- **Secondary:** International markets (South Asia, Global)

---

## 2. Technical Requirements

### 2.1 Technology Stack
| Component | Specification |
|-----------|---------------|
| Markup | HTML5 (Semantic) |
| Styling | CSS3 (Raw, No frameworks) |
| JavaScript | Vanilla JS (Minimal, for interactions only) |
| Icons | Font Awesome 6.x |
| Images | Local (`./images/`) + Unsplash (external) |
| Fonts | Google Fonts (System fallbacks) |

### 2.2 Responsive Design Requirements
| Breakpoint | Screen Width | Target Devices |
|------------|--------------|----------------|
| Mobile S | 320px - 374px | Small phones |
| Mobile M | 375px - 424px | Standard phones |
| Mobile L | 425px - 767px | Large phones |
| Tablet | 768px - 1023px | Tablets, iPad |
| Laptop | 1024px - 1439px | Laptops, small desktops |
| Desktop | 1440px+ | Large monitors |

### 2.3 Browser Support
| Browser | Minimum Version |
|---------|-----------------|
| Google Chrome | Latest 2 versions |
| Mozilla Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Microsoft Edge | Latest 2 versions |
| Opera | Latest 2 versions |
| Samsung Internet | Latest version |

### 2.4 Performance Requirements
- Page load time: < 3 seconds on 3G
- First Contentful Paint: < 1.5 seconds
- Cumulative Layout Shift: < 0.1
- Images optimized and lazy-loaded
- CSS minified for production

### 2.5 Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators for interactive elements

---

## 3. Design Specifications

### 3.1 Color Palette
```
Primary Colors:
├── Primary Blue:      #0077B6 (Ocean Blue)
├── Primary Dark:      #023E8A (Deep Sea)
├── Primary Light:     #00B4D8 (Aqua)
└── Primary Accent:    #90E0EF (Light Aqua)

Secondary Colors:
├── Success Green:     #2D6A4F (Sustainable Green)
├── Warning Orange:    #F4A261 (Warm Accent)
└── Error Red:         #E63946 (Alert)

Neutral Colors:
├── White:             #FFFFFF
├── Light Gray:        #F8F9FA
├── Medium Gray:       #6C757D
├── Dark Gray:         #343A40
└── Black:             #212529

Dark Mode Colors:
├── Background:        #0D1B2A
├── Surface:           #1B263B
├── Surface Light:     #415A77
└── Text Primary:      #E0E1DD
```

### 3.2 Typography
```
Headings:
├── Font Family: 'Poppins', sans-serif
├── H1: 48px / 56px line-height / 700 weight
├── H2: 36px / 44px line-height / 600 weight
├── H3: 28px / 36px line-height / 600 weight
├── H4: 24px / 32px line-height / 500 weight
├── H5: 20px / 28px line-height / 500 weight
└── H6: 18px / 24px line-height / 500 weight

Body Text:
├── Font Family: 'Inter', sans-serif
├── Body Large: 18px / 28px line-height / 400 weight
├── Body Regular: 16px / 24px line-height / 400 weight
├── Body Small: 14px / 20px line-height / 400 weight
└── Caption: 12px / 16px line-height / 400 weight

Bengali Text:
├── Font Family: 'Noto Sans Bengali', sans-serif
└── Same size hierarchy as English
```

### 3.3 Spacing System
```
Base Unit: 8px
├── xs:  4px   (0.5 unit)
├── sm:  8px   (1 unit)
├── md:  16px  (2 units)
├── lg:  24px  (3 units)
├── xl:  32px  (4 units)
├── 2xl: 48px  (6 units)
├── 3xl: 64px  (8 units)
└── 4xl: 96px  (12 units)
```

### 3.4 Component Styles
```
Buttons:
├── Border Radius: 8px
├── Padding: 12px 24px
├── Font Weight: 600
├── Transitions: 0.3s ease
└── Hover: Scale 1.02 + Shadow

Cards:
├── Border Radius: 12px
├── Shadow: 0 4px 6px rgba(0,0,0,0.1)
├── Padding: 24px
└── Hover: Elevated shadow + translateY(-4px)

Inputs:
├── Border Radius: 8px
├── Border: 1px solid #E0E0E0
├── Padding: 12px 16px
├── Focus: Border color primary + shadow
└── Height: 48px
```

### 3.5 Logo & Branding
- **Logo Location:** `./images/` folder
- **Logo Variations:** Full logo, Icon only, White version (dark mode)
- **Favicon:** 32x32, 16x16, Apple Touch Icon 180x180

---

## 4. Site Architecture

### 4.1 Page Structure
```
Allied Fish Care Ltd. Website
│
├── 🏠 Home (index.html)
│   ├── Hero Section
│   ├── About Preview
│   ├── Services Overview
│   ├── Products Highlight
│   ├── Statistics Counter
│   ├── Testimonials
│   ├── Latest News/Blog
│   └── CTA Section
│
├── 📖 About Us (about.html)
│   ├── Company Story
│   ├── Mission & Vision
│   ├── Core Values
│   ├── Team Section
│   ├── Company Timeline
│   └── Certifications
│
├── 🛒 Products (products.html)
│   ├── Product Categories
│   │   ├── Fish Feed
│   │   ├── Water Treatment
│   │   ├── Probiotics & Health
│   │   └── Equipment
│   ├── Product Grid/List
│   └── Product Detail Pages (product-detail.html)
│       ├── Product Images
│       ├── Description
│       ├── Specifications
│       ├── Benefits
│       └── Related Products
│
├── 🐟 Fish Farm Gallery (gallery.html)
│   ├── Photo Gallery Grid
│   ├── Filter by Category
│   ├── Lightbox View
│   └── Project Showcases
│
├── 🌱 Our Concerns (concerns.html)
│   ├── Sustainability Initiatives
│   ├── Environmental Protection
│   ├── Community Programs
│   ├── CSR Activities
│   └── Future Goals
│
├── 📰 Blog/News (blog.html)
│   ├── Blog List/Grid
│   ├── Categories
│   ├── Search (visual only)
│   └── Blog Detail Pages (blog-detail.html)
│       ├── Article Content
│       ├── Author Info
│       ├── Share Buttons
│       └── Related Posts
│
├── 💼 Careers (careers.html)
│   ├── Why Join Us
│   ├── Company Culture
│   ├── Open Positions
│   ├── Benefits
│   └── Application Info
│
├── 📞 Contact (contact.html)
│   ├── Contact Form (Static)
│   ├── Contact Information
│   ├── Map Embed
│   ├── Office Hours
│   └── Social Links
│
└── 🔧 Utility Pages
    ├── 404.html (Error Page)
    └── privacy-policy.html
```

### 4.2 Navigation Structure
```
Primary Navigation:
├── Home
├── About Us
├── Products ▼
│   ├── All Products
│   ├── Fish Feed
│   ├── Water Treatment
│   └── Probiotics
├── Fish Farm
├── Our Concerns
├── Blog
├── Careers
└── Contact

Secondary Navigation (Footer):
├── Quick Links
├── Products
├── Support
└── Legal

Utility Navigation:
├── Language Toggle (EN/BN)
├── Dark Mode Toggle
├── Search Icon
└── WhatsApp Button
```

---

## 5. Page Specifications

### 5.1 Home Page (index.html)

#### Hero Section
| Element | Specification |
|---------|---------------|
| Layout | Full-width, min-height 100vh |
| Background | Fish farm image with gradient overlay |
| Headline | "Sustainable Solutions for a Healthier Aquaculture Future" |
| Subheadline | Company brief description |
| CTA Buttons | "Explore Products" + "Contact Us" |
| Animation | Subtle parallax on scroll |

#### About Preview Section
| Element | Specification |
|---------|---------------|
| Layout | Two columns (Image + Content) |
| Content | Company overview, mission highlight |
| Features | 3-4 key highlights with icons |
| CTA | "Learn More About Us" button |

#### Services Overview
| Element | Specification |
|---------|---------------|
| Layout | 4-column grid (responsive) |
| Services | Fish Health, Water Quality, Consultancy, Training |
| Style | Icon + Title + Brief description |
| Interaction | Hover effects with color transition |

#### Products Highlight
| Element | Specification |
|---------|---------------|
| Layout | Carousel/Slider or Grid |
| Products | 4-6 featured products |
| Card Info | Image, Name, Category, Brief |
| CTA | "View All Products" |

#### Statistics Counter
| Element | Specification |
|---------|---------------|
| Layout | 4-column flex |
| Stats | Years Experience, Happy Clients, Products, Projects |
| Animation | Count-up animation on scroll |
| Background | Colored section with pattern |

#### Testimonials
| Element | Specification |
|---------|---------------|
| Layout | Slider/Carousel |
| Content | Client quote, name, designation, photo |
| Style | Card-based with quotation marks |

#### Latest Blog/News
| Element | Specification |
|---------|---------------|
| Layout | 3-column grid |
| Content | 3 latest blog posts |
| Card Info | Image, Date, Title, Excerpt |
| CTA | "Read More" per card + "View All Posts" |

#### CTA Section
| Element | Specification |
|---------|---------------|
| Layout | Full-width colored background |
| Content | Compelling headline + Contact button |
| Style | Gradient background with wave pattern |

---

### 5.2 About Page (about.html)

#### Sections
1. **Page Header** - Title with breadcrumb
2. **Company Story** - Full narrative with images
3. **Mission, Vision, Values** - Three-column cards
4. **Core Values** - Icon-based grid (Sustainability, Innovation, Quality, Partnership, Integrity)
5. **Team Section** - Team member cards with photos
6. **Timeline** - Company milestones
7. **Certifications/Partners** - Logo showcase

---

### 5.3 Products Page (products.html)

#### Product Listing
| Element | Specification |
|---------|---------------|
| Layout | Sidebar + Main content |
| Sidebar | Category filters, Search |
| Grid | 3-column product cards |
| Sorting | Visual dropdown (By name, category) |
| Pagination | Number-based pagination |

#### Product Card
| Element | Specification |
|---------|---------------|
| Image | Product photo with hover zoom |
| Content | Name, Category, Brief description |
| CTA | "View Details" button |
| Badge | "New" or "Popular" badges |

#### Product Detail Page (product-detail.html)
| Element | Specification |
|---------|---------------|
| Gallery | Main image + thumbnails |
| Info | Name, Category, Full description |
| Specs | Table format specifications |
| Benefits | Bullet points or icons |
| Related | 4 related product cards |
| CTA | "Inquire Now" button |

---

### 5.4 Fish Farm Gallery (gallery.html)

| Element | Specification |
|---------|---------------|
| Layout | Masonry or Grid layout |
| Filters | Category tabs (Farms, Ponds, Products, Events) |
| Images | Lazy-loaded with blur placeholder |
| Lightbox | Click to view full size |
| Caption | Image title and description |

---

### 5.5 Our Concerns Page (concerns.html)

#### Sections
1. **Hero** - Mission statement for sustainability
2. **Sustainability** - Environmental initiatives
3. **Community** - Farmer training programs
4. **Environment** - Water resource management
5. **CSR Activities** - Photo grid with descriptions
6. **Future Goals** - Roadmap or timeline

---

### 5.6 Blog Page (blog.html)

#### Blog Listing
| Element | Specification |
|---------|---------------|
| Layout | Main content + Sidebar |
| Grid | 2-column post cards |
| Sidebar | Categories, Recent posts, Tags |
| Card | Image, Date, Category, Title, Excerpt, Author |
| Pagination | Load more or numbered |

#### Blog Detail (blog-detail.html)
| Element | Specification |
|---------|---------------|
| Header | Title, Meta (Date, Author, Category) |
| Featured Image | Full-width hero image |
| Content | Rich text with headings, lists, images |
| Author Box | Photo, Name, Bio |
| Share Buttons | Social media share icons |
| Related Posts | 3 related article cards |
| Navigation | Previous/Next post links |

---

### 5.7 Careers Page (careers.html)

#### Sections
1. **Hero** - "Join Our Team" with company culture image
2. **Why Join Us** - Benefits and perks grid
3. **Company Culture** - Photos and description
4. **Open Positions** - Accordion or cards with job listings
5. **Application Process** - Steps infographic
6. **Contact HR** - Email and instructions

---

### 5.8 Contact Page (contact.html)

#### Contact Form (Static Display)
| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Phone | Tel | Yes |
| Subject | Dropdown | Yes |
| Message | Textarea | Yes |
| Submit | Button | - |

#### Contact Information
| Info | Value |
|------|-------|
| Address | Natore Sadar, Bangladesh |
| Phone | +880 1718-059696 |
| Email | alliedfishcare@gmail.com |
| Hours | Sun-Thu: 9AM-6PM |

#### Additional Elements
- Google Maps embed (Natore location)
- Social media links
- WhatsApp direct link button

---

## 6. Global Components

### 6.1 Header/Navigation
```
Structure:
├── Top Bar (Optional)
│   ├── Contact info
│   ├── Social icons
│   └── Language toggle
│
├── Main Header
│   ├── Logo
│   ├── Primary Navigation
│   ├── Dark Mode Toggle
│   └── Mobile Menu Button
│
└── Mobile Menu (Off-canvas)
    ├── Navigation links
    ├── Language toggle
    └── Close button
```

**Behaviors:**
- Sticky on scroll
- Shrink on scroll (reduce height)
- Transparent on hero, solid on scroll
- Mobile hamburger menu at < 1024px

### 6.2 Footer
```
Structure:
├── Main Footer
│   ├── Column 1: Logo + About brief + Social icons
│   ├── Column 2: Quick Links
│   ├── Column 3: Products
│   ├── Column 4: Contact Info
│   └── Newsletter signup (visual only)
│
└── Bottom Bar
    ├── Copyright text
    ├── Privacy Policy link
    └── Terms link
```

### 6.3 Floating Elements
| Element | Position | Behavior |
|---------|----------|----------|
| WhatsApp Button | Bottom-right | Fixed, pulse animation |
| Back to Top | Bottom-right | Show after 300px scroll |
| Dark Mode Toggle | Header | Persistent state (localStorage) |

### 6.4 Language Toggle
| Language | Code | Flag |
|----------|------|------|
| English | EN | 🇬🇧 |
| Bengali | BN | 🇧🇩 |

**Implementation:** CSS class toggle (`.lang-en`, `.lang-bn`) with hidden/visible content blocks

---

## 7. Dark Mode Specification

### 7.1 Toggle Behavior
- Icon: Sun/Moon toggle
- State: Saved in localStorage
- Default: System preference detection
- Transition: 0.3s smooth color transition

### 7.2 Color Mappings
| Light Mode | Dark Mode |
|------------|-----------|
| #FFFFFF (Background) | #0D1B2A |
| #F8F9FA (Surface) | #1B263B |
| #212529 (Text) | #E0E1DD |
| #0077B6 (Primary) | #00B4D8 |
| Box shadows | Reduced opacity |

---

## 8. SEO Requirements

### 8.1 On-Page SEO
| Element | Requirement |
|---------|-------------|
| Title Tags | Unique per page, 50-60 chars |
| Meta Description | Unique per page, 150-160 chars |
| H1 Tag | One per page, includes keyword |
| URL Structure | Clean, descriptive slugs |
| Image Alt Text | Descriptive, keyword-rich |
| Internal Linking | Contextual links between pages |

### 8.2 Technical SEO
| Element | Requirement |
|---------|-------------|
| Semantic HTML | Proper use of header, main, section, article, aside, footer |
| Schema Markup | Organization, LocalBusiness, Product, Article schemas |
| Open Graph Tags | For social media sharing |
| Twitter Cards | Summary with large image |
| Canonical URLs | Self-referencing canonicals |
| Robots.txt | Allow all crawlers |
| Sitemap.xml | XML sitemap for all pages |

### 8.3 Meta Tags Template
```html
<!-- Primary Meta Tags -->
<title>Page Title | Allied Fish Care Ltd.</title>
<meta name="title" content="Page Title | Allied Fish Care Ltd.">
<meta name="description" content="Page description here...">
<meta name="keywords" content="aquaculture, fish farming, fish feed, Bangladesh">
<meta name="author" content="Allied Fish Care Ltd.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://alliedfishcare.com/page">
<meta property="og:title" content="Page Title | Allied Fish Care Ltd.">
<meta property="og:description" content="Page description here...">
<meta property="og:image" content="https://alliedfishcare.com/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://alliedfishcare.com/page">
<meta property="twitter:title" content="Page Title | Allied Fish Care Ltd.">
<meta property="twitter:description" content="Page description here...">
<meta property="twitter:image" content="https://alliedfishcare.com/images/og-image.jpg">
```

---

## 9. File Structure

```
fish-care/
│
├── index.html                    # Home page
├── about.html                    # About page
├── products.html                 # Products listing
├── product-detail.html           # Product detail template
├── gallery.html                  # Fish Farm gallery
├── concerns.html                 # Our Concerns/CSR
├── blog.html                     # Blog listing
├── blog-detail.html              # Blog post template
├── careers.html                  # Careers page
├── contact.html                  # Contact page
├── 404.html                      # Error page
├── privacy-policy.html           # Privacy policy
│
├── css/
│   ├── style.css                 # Main stylesheet
│   ├── variables.css             # CSS custom properties
│   ├── reset.css                 # CSS reset/normalize
│   ├── components.css            # Reusable components
│   ├── utilities.css             # Utility classes
│   ├── responsive.css            # Media queries
│   └── dark-mode.css             # Dark mode overrides
│
├── js/
│   ├── main.js                   # Main JavaScript
│   ├── dark-mode.js              # Dark mode toggle
│   └── language.js               # Language toggle
│
├── images/
│   ├── logo/                     # Logo variations
│   ├── hero/                     # Hero images
│   ├── products/                 # Product images
│   ├── gallery/                  # Gallery images
│   ├── team/                     # Team photos
│   ├── blog/                     # Blog images
│   └── icons/                    # Custom icons
│
├── fonts/                        # Local font files (optional)
│
├── favicon/
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   └── apple-touch-icon.png
│
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 10. Content Requirements

### 10.1 Text Content (Per Page)
| Page | Word Count | Images Required |
|------|------------|-----------------|
| Home | 800-1000 | 10-15 |
| About | 600-800 | 5-8 |
| Products | 100 per product | 2-3 per product |
| Gallery | Captions only | 20-30 |
| Concerns | 500-700 | 5-8 |
| Blog | 800-1500 per post | 3-5 per post |
| Careers | 400-600 | 3-5 |
| Contact | 200-300 | 1-2 |

### 10.2 Image Requirements
| Type | Dimensions | Format | Max Size |
|------|------------|--------|----------|
| Hero Images | 1920x1080 | WebP/JPG | 200KB |
| Product Images | 800x800 | WebP/JPG | 100KB |
| Gallery Images | 1200x800 | WebP/JPG | 150KB |
| Blog Thumbnails | 600x400 | WebP/JPG | 80KB |
| Team Photos | 400x400 | WebP/JPG | 50KB |
| Logo | SVG preferred | SVG/PNG | 20KB |

### 10.3 External Image Sources
- **Unsplash** for supplementary images
- **Categories needed:** 
  - Fish farming
  - Aquaculture
  - Water/Ocean
  - Agriculture
  - Team/Business
  - Nature/Sustainability

---

## 11. Sample Content (Bengali/English)

### 11.1 Taglines
| English | Bengali |
|---------|---------|
| Sustainable Solutions for a Healthier Aquaculture Future | স্বাস্থ্যকর জলজ চাষের ভবিষ্যতের জন্য টেকসই সমাধান |
| Empowering Fish Farmers | মৎস্য চাষীদের ক্ষমতায়ন |
| Quality You Can Trust | বিশ্বাসযোগ্য মানের পণ্য |

### 11.2 Navigation Labels
| English | Bengali |
|---------|---------|
| Home | হোম |
| About Us | আমাদের সম্পর্কে |
| Products | পণ্যসমূহ |
| Fish Farm | মাছের খামার |
| Our Concerns | আমাদের উদ্বেগ |
| Blog | ব্লগ |
| Careers | ক্যারিয়ার |
| Contact | যোগাযোগ |

---

## 12. Interactions & Animations

### 12.1 CSS Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Page Load | Fade in | 0.5s |
| Scroll Reveal | Slide up + fade | 0.6s |
| Hover (Cards) | Scale + Shadow | 0.3s |
| Hover (Buttons) | Background shift | 0.3s |
| Menu Open | Slide in | 0.4s |
| Image Load | Blur to clear | 0.3s |

### 12.2 Micro-interactions
- Button ripple effect on click
- Input focus glow
- Checkbox/toggle smooth transitions
- Tooltip fade in
- Accordion smooth expand/collapse

---

## 13. Testing Requirements

### 13.1 Device Testing
| Device Type | Specific Devices |
|-------------|------------------|
| Mobile | iPhone SE, iPhone 14, Samsung Galaxy S21 |
| Tablet | iPad, iPad Pro, Samsung Tab |
| Desktop | 1366x768, 1920x1080, 2560x1440 |

### 13.2 Quality Checklist
- [ ] All links working
- [ ] All images loading
- [ ] Forms displaying correctly
- [ ] Responsive at all breakpoints
- [ ] Dark mode working
- [ ] Language toggle working
- [ ] Animations smooth (60fps)
- [ ] No horizontal scroll
- [ ] Footer at bottom
- [ ] SEO meta tags present
- [ ] Accessibility audit passed
- [ ] Cross-browser tested

---

## 14. Delivery Checklist

### 14.1 Final Deliverables
- [ ] All HTML pages
- [ ] Complete CSS files
- [ ] JavaScript files
- [ ] Optimized images
- [ ] Favicon package
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] README documentation

### 14.2 Documentation
- [ ] File structure explanation
- [ ] CSS class naming conventions
- [ ] How to update content
- [ ] How to add new pages
- [ ] How to add new products/blog posts

---

## 15. Future Considerations

### 15.1 Phase 2 Enhancements (Optional)
- Backend integration for contact form
- CMS integration (WordPress/Strapi)
- E-commerce functionality
- User accounts
- Live chat integration
- Multi-currency support
- Advanced search functionality

---

## Appendix A: Company Information

**Company Name:** Allied Fish Care Ltd.  
**Tagline:** "Sustainable Solutions for a Healthier Aquaculture Future"  
**Founded:** [Year to be confirmed]  
**Location:** Natore Sadar, Bangladesh  
**Phone:** +880 1718-059696  
**Email:** alliedfishcare@gmail.com  

**Products & Services:**
1. Fish Feed (Nutrient-balanced feeds for different fish species)
2. Water Treatment Solutions (Testing kits, conditioners, biological enhancers)
3. Fish Health Products (Vitamins, probiotics, medicated feeds)
4. Aquaculture Consultancy (Farm design, system optimization, disease management)
5. Training & Technical Support (Capacity-building programs)

**Core Values:**
1. Sustainability
2. Innovation
3. Quality
4. Partnership
5. Integrity

---

## Appendix B: Competitor Reference (For Design Inspiration)
- Cargill Aqua Nutrition
- Skretting
- BioMar
- Nutreco

---

*End of PRD Document*