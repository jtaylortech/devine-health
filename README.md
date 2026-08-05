# Devine Health — Website Design Package

Initial design and brand assets for **Devine Health Consumer Directed Services**
(St. Louis, MO). Built to be rebuilt on **Squarespace** — the client owns the
Squarespace account, domain, and billing; this repo is the design + asset source.

> Tagline: **"Empowering Independence Through Compassionate Care."**

---

## Preview the homepage

No build step — it's a static page. From this folder:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

Or just open `site/index.html` directly in a browser. Fonts load from Google
Fonts (Cormorant Garamond + Inter), so keep an internet connection for the
intended look.

---

## What's included

### `brand/` — logo & brand assets
| File | Use |
|------|-----|
| `logo-mark.svg` | Icon only (gold figure + teal cupped hands). Scalable, transparent. |
| `logo-lockup.svg` | Full logo, **navy** text — for light backgrounds. |
| `logo-lockup-light.svg` | Full logo, **white** text — for navy/dark backgrounds. |
| `favicon.svg` | Browser/tab icon (SVG). |
| `favicon-32.png`, `favicon-512.png` | Raster favicons. |
| `apple-touch-icon.png` | 180×180 iOS home-screen icon. |
| `logo-mark.png` | 512px transparent mark for uploads that need PNG. |
| `og-image.png` | 1200×630 social-share image (navy, logo + tagline). |
| `colors.md` | Brand color tokens + typography notes. |

### `site/` — homepage prototype
- `index.html` — full responsive homepage (single page, anchor navigation).
- `styles.css` — brand-tokened, mobile-first stylesheet (responsive to 320px, WCAG-AA contrast).
- `assets/` — reserved for real photography when supplied.

### Homepage sections
Header (sticky) · Hero · Services (4 cards) · Why Choose Devine · How It Works
· Testimonials · Careers / "Become a Caregiver" · Contact (info + form + map) · Footer.

---

## ⚠️ Content to confirm before launch
These are flagged in the page with a small **highlighted badge**:

- **ZIP code** for 12405 Halls Ferry Rd, Suite 325 (assumed St. Louis, MO).
- **Business hours** (placeholder: Mon–Fri 9am–5pm).
- **Testimonials** — currently sample text. Replace with real client/caregiver reviews.
- **Hero + service photos** — placeholders shown. Supply real photos or approve stock.
- **Social links** — footer icons point to `#` until real URLs are provided.
- **Map** — placeholder; live site embeds Google Maps pinned to the office.
- **Licensing wording** — "Licensed & compliant" / "Missouri CDS standards" should be
  reviewed by Vernetta for accuracy before publishing.

Confirmed facts used (from the business card):
- Services: Personal Care Assistance · Homemaker Services · Respite Care · CDS Program Enrollment Support
- Phone: (314) 221-3495 · Email: Devinehands@icloud.com
- Contact: Vernetta Collard · Address: 12405 Halls Ferry Rd, Suite 325

---

## Squarespace handoff notes
- **Logo:** upload `logo-lockup-light.svg` (or `logo-mark.svg` + live text) for a navy
  header; use `logo-lockup.svg` on light headers.
- **Favicon:** upload `favicon-512.png` (Design → Logo & Title → Browser Icon).
- **Social image:** upload `og-image.png` (Settings → Social Sharing).
- **Colors:** enter the hex values from `brand/colors.md` into the Squarespace color palette.
- **Fonts:** set headings to Cormorant Garamond, body to Inter.
- **Contact form:** rebuild with a native Squarespace Form block so submissions email
  Devinehands@icloud.com. (The prototype form is intentionally non-sending.)
- This HTML/CSS is the **design reference**; Squarespace pages are rebuilt with blocks,
  not by pasting this code.

---

## Notes
- The prototype contact form does not submit anywhere (static preview). No backend,
  no data collection.
- The logo is a clean vector **recreation** of the business-card mark. If the original
  designer has source files (AI/EPS/SVG), those remain the ideal master; this vector is
  production-ready in the meantime.
