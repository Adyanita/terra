# VERD — Streetwear & Fashion Store

A full-featured Next.js 14 ecommerce website with earthy/neutral design aesthetic.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, category strip, best sellers, editorial banner, new arrivals, USP |
| `/category/[slug]` | Product listing — filter by tag, sort by price/rating |
| `/product/[slug]` | Product detail — image gallery, color/size selector, add to cart, related products |
| `/cart` | Cart — quantity controls, order summary, promo code, free shipping threshold |

## Categories
`men` · `women` · `oversized` · `hoodies` · `bottoms` · `accessories`

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules** (no Tailwind, zero runtime CSS-in-JS)
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
- **next/image** for optimised images (Unsplash placeholder photos)
- **Context API** for cart state with localStorage persistence

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Data
All product data lives in `src/data/products.js`.  
To add a product, push a new object to the `products` array — no database needed.

## Customisation
- **Brand name**: Search & replace `VERD` across the project
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Products**: Edit `src/data/products.js`
- **Fonts**: Swap Google Fonts import in `globals.css`

## Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout with CartProvider, Navbar, Footer
│   ├── globals.css          # Design tokens, global styles
│   ├── page.js              # Homepage
│   ├── category/[slug]/     # Category listing
│   ├── product/[slug]/      # Product detail
│   └── cart/                # Cart page
├── components/
│   ├── Navbar.js / .css
│   ├── Footer.js / .css
│   └── ProductCard.js / .css
├── context/
│   └── CartContext.js       # useReducer + localStorage
└── data/
    └── products.js          # All product & category data
```
