# La Prestige Auto Group — Website

A single-page site for a used car dealership + new car brokerage business.

## Run it locally

No Node/Python required. From this folder:

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open http://localhost:8080 in a browser. (Opening `index.html` directly as a file also works, but some browsers restrict `fetch`/relative-asset loading over `file://`, so the server is the reliable option.)

## Tests

A couple of sanity checks for the inventory data and price formatting live in `tests/script.test.js` (plain Node, no dependencies):

```bash
npm test
```

## What's in here

- `index.html` — all page content and structure (hero, services, inventory, brokerage explainer, testimonials, contact form, footer)
- `css/style.css` — black/gold "prestige" theme, fully responsive (desktop/tablet/mobile with a hamburger menu)
- `js/script.js` — renders the inventory grid from a data array, handles the category filter buttons, mobile nav toggle, and contact form validation
- `serve.ps1` — a zero-dependency local static file server (uses .NET's HttpListener) so relative CSS/JS/image paths resolve correctly
- `tests/script.test.js` — basic tests for `formatPrice()` and the `CARS` inventory data

## To make this your real site

1. **Replace placeholder business info** in `index.html`: phone number, email, address, hours (search for `(555) 018-2947`, `info@laprestigeauto.com`, `1200 Prestige Way`).
2. **Replace sample inventory** in `js/script.js` — the `CARS` array. Swap in real vehicles, prices, mileage, and (ideally) real photos instead of the emoji/gradient placeholders in `.car-media`.
3. **Wire up the contact form** — it currently only validates and shows a success message client-side; it doesn't send anywhere. Easiest options:
   - [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/) — add their endpoint to the `<form>` action, minimal code change
   - Or a small backend endpoint if you want submissions in your own database/CRM
4. **Add real photos** — replace the emoji car icons and gradients in `.car-media` with `<img>` tags once you have vehicle photos.
5. **Host it** — this is static HTML/CSS/JS, so it deploys as-is to Netlify, Vercel, GitHub Pages, or any static host. Just upload the whole folder.

## Notes

- Testimonials, stats (500+ vehicles, 4.9★, etc.), and inventory are placeholder content — swap for real numbers before launch.
- Legal/compliance: dealer sites often require specific disclosures (financing terms, "as-is" language, licensing info) depending on your state — worth a quick check before going live.
