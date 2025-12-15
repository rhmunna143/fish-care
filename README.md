# Allied Fish Care Ltd. - Website

A modern, bilingual (English/Bengali) static website for Allied Fish Care Ltd., a leading provider of sustainable aquaculture solutions.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly across all devices (mobile, tablet, desktop)
- **Bilingual Support** - Toggle between English and Bengali languages
- **Dark Mode** - Built-in dark theme with localStorage persistence
- **Modern UI/UX** - Eye-catching design with smooth animations and transitions
- **SEO Optimized** - Meta tags, sitemap, robots.txt for search engine visibility
- **Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **Performance** - Lightweight, fast-loading pages with lazy-loaded images
- **No Framework Dependencies** - Pure HTML5, CSS3, and Vanilla JavaScript

## 📁 Project Structure

```
fish-care/
│
├── index.html              # Home page
├── about.html              # About company page
├── products.html           # Products listing page  
├── gallery.html            # Image gallery page
├── concerns.html           # Sister concerns page
├── blog.html               # Blog listing page
├── careers.html            # Careers/jobs page
├── contact.html            # Contact form page
├── 404.html                # Error page
├── privacy-policy.html     # Privacy policy page
│
├── css/
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── reset.css           # CSS reset/normalize
│   ├── components.css      # Reusable UI components
│   ├── utilities.css       # Utility classes
│   ├── responsive.css      # Media queries for all breakpoints
│   ├── dark-mode.css       # Dark theme styles
│   └── style.css           # Main stylesheet (imports all above)
│
├── js/
│   ├── main.js             # Core interactions (menu, lightbox, accordion, etc.)
│   ├── dark-mode.js        # Theme toggle functionality
│   └── language.js         # EN/BN language switcher
│
├── images/                 # All website images
│   ├── logo.jpg
│   ├── banner.jpg
│   ├── Fish.jpg
│   ├── veterinary-medicine.jpg
│   └── gallery-1.jpg ... gallery-9.jpg
│
├── robots.txt              # Search engine crawling instructions
├── sitemap.xml             # XML sitemap for SEO
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary:** #0077B6 (Ocean Blue)
- **Primary Dark:** #023E8A
- **Primary Light:** #00B4D8  
- **Accent:** #90E0EF
- **Success:** #2D6A4F
- **Backgrounds:** Light #F8F9FA / Dark #0D1B2A

### Typography
- **Headings:** Poppins (300, 400, 500, 600, 700)
- **Body:** Inter (300, 400, 500, 600)
- **Bengali:** Noto Sans Bengali (300, 400, 500, 600, 700)

### Spacing System
- Base: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px

### Responsive Breakpoints
- Mobile S: 320px
- Mobile M: 375px  
- Mobile L: 425px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1440px+

## 🛠️ Setup & Usage

### Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in a web browser
3. **Use a local server** (recommended) for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js with npx
   npx serve
   
   # Using VS Code Live Server extension
   Right-click index.html → "Open with Live Server"
   ```
4. **Navigate to** `http://localhost:8000` in your browser

### Deployment

**For Static Hosting (Netlify, Vercel, GitHub Pages):**
1. Upload all files to your hosting provider
2. Set `index.html` as the entry point
3. Configure custom domain (optional)
4. Update URLs in `sitemap.xml` to match your domain

**For Traditional Web Hosting:**
1. Upload all files via FTP to your web server
2. Ensure `index.html` is in the root directory
3. Update `sitemap.xml` and meta tags with your domain

## 📝 Content Management

### Adding a New Blog Post

1. Open `blog.html`
2. Copy an existing `.blog-card` element
3. Update the image, title, date, excerpt, and link
4. Add bilingual content (EN and BN)

### Adding a New Product

1. Open `products.html`
2. Copy a `.product-card` element
3. Update image (add to `/images/` folder first)
4. Update title and description in both languages
5. Adjust the "View Details" link

### Updating Contact Information

1. Open any page (or all pages) where contact info appears
2. Search for:
   - Phone: `+880 1718-059696`
   - Email: `alliedfishcare@gmail.com`
   - Address: `Natore Sadar, Natore, Bangladesh`
3. Replace with new information

### Adding Images

1. Add image files to the `/images/` folder
2. Use descriptive filenames (e.g., `product-fish-feed.jpg`)
3. Reference in HTML: `<img src="./images/your-image.jpg" alt="Description">`
4. For gallery, add `data-category` attribute for filtering

## 🌐 Language Toggle

The website supports English (EN) and Bengali (BN):

- Elements with `lang="en"` show in English mode
- Elements with `lang="bn"` show in Bengali mode
- JavaScript automatically toggles visibility
- User preference saved in localStorage

**To add bilingual content:**
```html
<h1 class="title" lang="en">English Title</h1>
<h1 class="title" lang="bn" style="display: none;">বাংলা শিরোনাম</h1>
```

## 🌙 Dark Mode

- Automatic system preference detection
- Manual toggle button in header
- Preference saved in localStorage
- Smooth transitions between themes

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Focus indicators
- Screen reader-friendly
- Color contrast compliance (WCAG AA)

## 🔧 Customization

### Changing Colors

Edit `css/variables.css`:
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-primary-dark: #YOUR_DARK_COLOR;
  /* etc. */
}
```

### Changing Fonts

Update Google Fonts link in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap">
```

Then update in `css/variables.css`:
```css
:root {
  --font-heading: 'Your Font', sans-serif;
}
```

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Update page title, meta description
3. Update breadcrumb navigation
4. Replace main content section
5. Add link to navigation menus (desktop & mobile)
6. Add to `sitemap.xml`

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

## 📞 Support & Contact

**Allied Fish Care Ltd.**
- **Location:** Natore Sadar, Natore, Bangladesh
- **Phone:** +880 1718-059696
- **Email:** alliedfishcare@gmail.com

## 📄 License

© 2024 Allied Fish Care Ltd. All rights reserved.

## 🙏 Credits

- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts (Poppins, Inter, Noto Sans Bengali)
- **Images:** Company-provided images + Unsplash (for placeholders)

---

**Version:** 1.0.0  
**Last Updated:** January 2024  
**Built with:** ❤️ for sustainable aquaculture
