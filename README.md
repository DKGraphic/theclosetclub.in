# The Closet Club — Website

A premium, editorial-style e-commerce storefront for **The Closet Club Clothing Co.** built with React, Vite and Bootstrap 5 (grid/utilities only — no Tailwind).

Instagram: [@theclosetclub.in](https://www.instagram.com/theclosetclub.in) · WhatsApp: +91 94441 31591

## Stack

- React 19 + Vite 5
- React Router 7
- Bootstrap 5 (grid + utility classes only; all visual styling is custom CSS)
- CSS variables for design tokens (`src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/   Reusable UI building blocks (Navbar, Hero, ProductCard, CartDrawer, ...)
  pages/        Route-level pages (Home, Shop, Product, Cart, Checkout, ...)
  context/      ShopContext — cart, wishlist, drawer/search state
  data/         Mock product catalog + curated imagery
  hooks/        Shared hooks (scroll-reveal)
```

## Catalog

The Closet Club sells women's ethnic wear only, organised as:

- **Short Kurtis** — Sleeveless, Full Sleeve
- **Long Kurtis** — Side Open, Umbrella, 3 Pcs Set (Top/Pant/Shawl), 2 Pcs Set (Top/Pant)
- **Skirts** — newly launched, listed online but not yet open for direct checkout. Skirt products use `orderMode: 'whatsapp'` in `src/data/products.js`, which swaps every Add to Bag / Buy Now control for an "Enquire on WhatsApp" button with a prefilled message (see `src/data/whatsapp.js`).

Most Short Kurti photos in `src/assets/products/` are real product photos pulled from the [@theclosetclub.in](https://www.instagram.com/theclosetclub.in) Instagram (saved locally since Instagram's CDN URLs are signed and expire). Long Kurti co-ord sets still use Unsplash stock placeholders (`STOCK` in `src/data/images.js`) — swap these for real photography as it's shot.

## Notes

- Checkout is a front-end demo flow (no payment gateway wired up yet).
- Brand purple (`--brand-purple: #5f3b8d`) is sampled directly from the logo.
