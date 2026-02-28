# TadeDerhbi — Data Analyst Portfolio

A fully responsive, dark-themed personal portfolio website built for **Oreoluwa Deborah Oguntade**, a Data Analyst specializing in business intelligence, data visualization, and analytical strategy.

---

## 🔗 Live Preview

> Add your GitHub Pages or hosting link here once deployed.

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── projects.html       # Dedicated projects page with category filtering
├── style.css           # Global styles (shared across both pages)
├── projects.css        # Styles specific to the projects page
├── smart.js            # Main JavaScript (cursor, scroll effects, animations)
├── projects.js         # Projects page tab filtering logic
└── outlook.jpg         # Portrait photo
```

---

## ✨ Features

**Main Portfolio (`index.html`)**
- Custom animated cursor with follower
- Sticky header that turns frosted glass on scroll
- Hero section with animated data dashboard visual, floating tool badges, and a live stat counter
- About section with tools grid and key highlights
- Skills section with scroll-triggered progress bars
- Projects teaser linking to the full projects page
- Education timeline with staggered animations
- Contact form with loading state and success feedback
- Active nav link tracking as you scroll
- Fully responsive down to mobile

**Projects Page (`projects.html`)**
- Sticky tab bar with four filterable categories
- Each category has a distinct accent color revealed on selection
- 16 projects total — 4 per category
- Staggered card entrance animation on category switch
- Each card shows the project type, description, key result metric, and tool stack
- GitHub and live report links per project

---

## 🎨 Design

| Property | Value |
|---|---|
| Color Scheme | Dark plum-black with burgundy-rose accents |
| Primary Accent | `#b5476e` |
| Background | `#100d10` |
| Display Font | Playfair Display |
| Body Font | DM Sans |
| Monospace Font | DM Mono |

**Category Colors**
| Category | Color |
|---|---|
| Sales & Business | `#b5476e` — Burgundy Rose |
| Financial Analysis | `#c47a5a` — Warm Amber |
| Impact & Policy | `#8a5a8a` — Dusty Plum |
| Operational Analysis | `#5a7a8a` — Slate Teal |

---

## 🛠️ Tech Stack

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations, IntersectionObserver-triggered transitions
- **Vanilla JS** — scroll effects, tab filtering, counter animations, form handling
- **Boxicons** — icon library (via CDN)
- **Google Fonts** — Playfair Display, DM Sans, DM Mono (via CDN)

---

## 🚀 Getting Started

No installation or build step needed. Just clone and open.

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Then open `index.html` in your browser. All files reference each other relatively, so the folder structure must stay intact.

---

## 🖼️ Adding Your Photo

Place your portrait image in the root folder and update the `src` in `index.html`:

```html
<!-- In the About section: -->
<img src="your-photo.jpg" alt="Oreoluwa Deborah">
```

---

## ✏️ Customization Guide

**To update your projects** — open `projects.html` and find the relevant `category-group` block. Each `.proj-card` contains:
- `<h3>` — project title
- `<p>` — description
- `.proj-metric` — key result or impact stat
- `.proj-tech` — tool/technology pills
- `.proj-card-links a` — GitHub and live report `href` values

**To update contact details** — find the `.contact-details` block in `index.html` and update the `href` and text of each `.contact-link`.

**To update social links** — search for `href="#"` inside `.socials` and `.socials-contact` and replace with your actual URLs.

---

## 🌐 Deployment

This site can be deployed on any static hosting platform:

- **GitHub Pages** — push to a repo, go to Settings → Pages → select main branch
- **Netlify** — drag and drop the folder into netlify.com/drop
- **Vercel** — connect your GitHub repo and deploy in one click

---

## 📄 License

This project is personal portfolio work. Feel free to use it as inspiration, but please do not deploy it as-is with the original owner's name and content.

---

*Designed and coded by Oreoluwa Deborah Oguntade — 2025*
