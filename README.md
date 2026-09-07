# VIYUGAM 2K26

Astro, TypeScript, SCSS, GSAP, Lenis, and Three.js website for the PPG Institute of Technology national-level technical symposium.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
```

## Structure

- `src/pages`: connected public routes and generated event detail routes
- `src/components`: reusable layout, home, event, department, animation, and form components
- `src/data`: typed event, department, and site configuration
- `src/services`: Google Sheets and payment submission boundaries
- `src/styles`: global SCSS and theme variables
- `public/images`: public assets, including the migrated hero car image

## Configuration

Copy `.env.example` to `.env` and set `PUBLIC_GOOGLE_SHEETS_ENDPOINT` to the deployed Google Apps Script Web App URL. Registration, payment references, and contact messages are sent with a `sheet` field so Apps Script can route records to separate sheets.

The payment flow intentionally reports `Pending Verification`; configure the official QR asset and verification process before launch.
