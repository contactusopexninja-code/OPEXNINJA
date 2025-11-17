# OPEX NINJA — Website

This repository is a static website for OPEX NINJA (Operational Excellence & Continuous Improvement services).

What's included:
- `index.html` — main site
- `css/styles.css` — styles and responsive layout
- `js/main.js` — small interactive scripts (nav toggle, contact form UX)
- `assets/logo.svg` — simple logo (replace with your own high-res logo)
- `LICENSE` — MIT

Quick start (locally)
1. Clone the repo:
   ```
   git clone https://github.com/contactusopexninja-code/website.git
   cd website
   ```
2. Open `index.html` in your browser:
   - Double-click the file or run a local HTTP server:
     ```
     # Python 3
     python -m http.server 8000
     # then visit http://localhost:8000
     ```

Contact form
- The contact form currently posts to Formspree. Replace the `action` attribute value in `index.html` with your Formspree endpoint (or another backend endpoint).
- If you prefer email links or a serverless function, update `js/main.js` and the form `action` accordingly.

Deploy
- Option A: GitHub Pages
  - Push to `main` (or `gh-pages`) and enable Pages in repository settings. The site will be served from `https://<username>.github.io/<repo>/`.
- Option B: Netlify / Vercel
  - Connect the repo and deploy as a static site.

Accessibility & SEO
- The layout includes basic ARIA attributes and structured data (JSON-LD) for improved discovery.
- Replace the placeholder `og:image` and `url` meta tags with real values.

Customize
- Replace `assets/logo.svg` with your brand logo.
- Edit copy in `index.html` to match your value propositions and contact details.
- Add business social links to the JSON-LD `sameAs` array and header/footer.

If you'd like, I can:
- Wire the form to a serverless function (Netlify Functions or AWS Lambda) and store leads.
- Add multilingual support, pricing pages, or a blog (static via Jekyll/Hugo).
- Create higher-fidelity SVG/PNG logos and hero images.