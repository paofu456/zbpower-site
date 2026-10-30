# ZBPOWER website

Static English company website for Shenzhen ZBPOWER Technology Co., Ltd. The site presents three lithium battery platforms, manufacturing capabilities, quality controls and a static inquiry preview.

## Routes

- `/` — company and product overview
- `/products/` — battery platform index
- `/products/e-mobility-batteries/`
- `/products/lead-acid-replacement-batteries/`
- `/products/home-commercial-energy-storage/`
- `/about/` — manufacturing profile
- `/contact/` — static inquiry preview

## Development

```bash
npm ci --include=optional
npm run dev
npm run verify:quick
npm run verify
```

## Delivery

The site builds to `dist/` as static assets and uses `wrangler.json` for Cloudflare Workers deployment. Preview deployments remain `noindex` and do not use a canonical domain.

The contact form is intentionally static. It validates the fields in the browser, then explains that nothing was sent or stored. Replace it with an approved receiving service before formal launch.
