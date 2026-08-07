# Devine Health — Website

Website and brand assets for **Devine Health Consumer Directed Services** (Florissant / St. Louis, MO).

> Tagline: **"Empowering Independence Through Compassionate Care."**

**Live:** https://devinehealthcds.com

- Static site (HTML/CSS/JS), hosted on **GitHub Pages**, custom domain via `site/CNAME`.
- **Auto-deploys on every push to `main`** (`.github/workflows/pages.yml`).
- Vernetta Collard owns the **domain** (registered at Squarespace); DNS points the apex + `www` at GitHub Pages.

---

## Local preview

No build step:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

Fonts load from Google Fonts (Cormorant Garamond + Inter), so keep an internet connection for the intended look.

---

## What's included

### `brand/` — logo & brand assets
| File | Use |
|------|-----|
| `logo-mark.svg` | Icon only (gold figure + teal cupped hands). Scalable, transparent. |
| `logo-lockup.svg` | Full logo, **navy** text — for light backgrounds. |
| `logo-lockup-light.svg` | Full logo, **white** text — for navy/dark backgrounds. |
| `favicon.svg`, `favicon-32.png`, `favicon-512.png` | Browser/tab icons. |
| `apple-touch-icon.png` | 180×180 iOS home-screen icon. |
| `logo-mark.png` | 512px transparent mark (PNG). |
| `og-image.png` | 1200×630 social-share image. |
| `colors.md` | Brand color tokens + typography notes. |

The logo is a clean **vector recreation** of the business-card mark (no original source files exist), and is the official logo.

### `site/` — the website
- `index.html` — home (hero, services, why-choose, how-it-works, careers band, contact).
- `about.html` — story, "What is CDS?", values.
- `services.html` — detailed section per service.
- `careers.html` — Become a Caregiver + employment application form.
- `faq.html` — accessible accordion of common CDS questions.
- `contact.html` — contact info, Google Maps directions card, contact form.
- `thank-you.html` — post-submission confirmation (form redirect target).
- `styles.css` — brand-tokened, mobile-first stylesheet (responsive to 320px, WCAG-AA).
- `main.js` — nav toggle, FAQ accordion, footer year, careers day-summary.
- `assets/` — self-contained brand assets + reserved space for real photography.
- `CNAME` — custom domain for GitHub Pages.

Nav: Home · About · Services · Careers · FAQ · Contact (+ "Call Now").

---

## 📧 Forms → email (FormSubmit)
The Contact form (`index.html` + `contact.html`) and the Employment Application (`careers.html`)
POST to **FormSubmit** and deliver to **Devinehands@icloud.com** — free, no account, no API key.

- **⚠️ One-time activation:** the first submission triggers an *"Activate Form"* email to
  **Devinehands@icloud.com**. Vernetta must click it once; after that every submission arrives.
  (One activation covers all forms — they share the same recipient.)
- Submissions redirect to `thank-you.html`; emails use FormSubmit's table template.
- Spam protection: honeypot (`_honey`) + FormSubmit captcha.
- Careers "Days available" is composed into one clean field by `main.js` before submit
  (e.g. `Mon, Wed, Fri`).

---

## Confirmed content
- **Services:** Personal Care Assistance · Homemaker Services · Respite Care · CDS Program Enrollment Support
- **Phone:** (314) 221-3495 · **Email:** Devinehands@icloud.com
- **Contact:** Vernetta Collard
- **Office:** 12405 Halls Ferry Rd, Suite 325, Florissant, MO 63033
- **Hours:** Mon–Fri, 8:00am–4:00pm

## To add later (when the client provides)
- Real **staff/client/office photos** (hero + services + about currently use branded panels).
- Real **testimonials** (the sample section was removed for launch — can be re-added).
- **Social media** links (icons removed until accounts exist).
- Review of **licensing wording** ("Licensed & compliant" / "Missouri CDS standards").

---

## Deploying changes
Edit files in `site/`, commit, and push to `main` — GitHub Actions publishes to
https://devinehealthcds.com within ~30s. Verify against the live URL (append `?cb=<ts>` to bust cache).
