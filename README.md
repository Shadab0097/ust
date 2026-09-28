# U.S.T Enterprises â€“ Next.js site

Next.js 16 (App Router) website for U.S.T Enterprises. Every page is statically pre-rendered (SSG), so Google gets full HTML (products, specs, FAQs, schema) without executing JavaScript.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (35 static pages)
npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (and the Search Console verification token if used).

## Where things live

- `src/data/products.js` â€“ product catalogue. Add a product here â†’ page, sitemap entry, schema and footer link are generated automatically. Optional `priceFrom` (INR number) enables Offer/price in Product schema.
- `src/data/solutions.js` â€“ industry landing pages (`/solutions/<slug>/`) and industries-served per product.
- `src/data/site.js` â€“ business name, address, phones, keywords, service areas (keep NAP identical to Google Business Profile).
- `src/lib/seo.js` â€“ metadata + JSON-LD builders.
- `src/app/sitemap.js`, `robots.js`, `manifest.js`, `og.png/route.jsx` â€“ SEO routes.

## Deploy (Netlify)

The app is at the repository root, so leave **Base directory** empty in Netlify site settings (clear it if it was previously set to `nextjs`); `netlify.toml` handles the rest.

## After go-live

1. Submit `https://ustenterprises.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Use URL Inspection â†’ "Request indexing" for the home page and top product pages.
3. Validate a product page in the Rich Results Test.
4. Keep the Google Business Profile address/phone identical to `site.js`.

## SEO / AEO / GEO maintenance

- **Product copy for search & AI answers:** `src/data/productSeo.js` holds each product's short title (<= 60 chars) and 40-70 word "quick answer" (shown on the page, used in schema, `/llms.txt` and `/llms-full.txt`).
- **After editing content:** bump `CONTENT_UPDATED` in `src/data/site.js` (drives sitemap lastmod + schema dateModified).
- **AI crawlers:** allowed explicitly in `src/app/robots.js`. LLM-friendly summaries at `/llms.txt` and `/llms-full.txt` are generated automatically from the product data.
- **IndexNow (Bing / ChatGPT search / Copilot):** `netlify/plugins/indexnow` submits all sitemap URLs after each production deploy. Key file: `public/fd248058838acaa1b95f8d9fd93b3420.txt` (keep in sync with the plugin).
- **Rich product results (price in Google):** add `priceFrom` (number, INR) to a product in `src/data/products.js` to emit an Offer.
