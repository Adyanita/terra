import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import styles from "./page.module.css";

const featured = products.filter((p) => p.badge === "BESTSELLER").slice(0, 4);
const newArrivals = products.filter((p) => p.badge === "NEW").slice(0, 4);

const lookbookItems = [
  { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80", label: "Minimal Layers" },
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", label: "Earth Tones" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", label: "Utility Style" },
];

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>SS '25 Collection</p>
          <h1 className={styles.heroTitle}>Wear the<br/><em>Earth</em></h1>
          <p className={styles.heroSub}>
            Fashion rooted in natural textures, earthy palettes,<br/>
            and silhouettes built to move with you.
          </p>
          <div className={styles.heroActions}>
            <Link href="/category/all" className={styles.btnPrimary}>Shop Now</Link>
            <Link href="/category/outerwear" className={styles.btnGhost}>View Lookbook</Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgStack}>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85"
              alt="Hero"
              className={styles.heroImg}
            />
            <div className={styles.heroTag}>
              <span className={styles.heroTagLabel}>New Drop</span>
              <span className={styles.heroTagText}>Canyon Heavyweight Hoodie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category strips */}
      <section className={styles.catStrip}>
        <div className={styles.catGrid}>
          {categories.slice(1).map((cat) => (
            <Link key={cat.id} href={`/category/${cat.id}`} className={styles.catTile}>
              <span className={styles.catLabel}>{cat.label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEye}>Curated Picks</p>
            <h2 className={styles.sectionTitle}>Bestsellers</h2>
          </div>
          <Link href="/category/all" className={styles.seeAll}>See All →</Link>
        </div>
        <div className={styles.grid}>
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Lookbook banner */}
      <section className={styles.lookbook}>
        <div className={styles.lookbookHeader}>
          <p className={styles.sectionEye}>Inspiration</p>
          <h2 className={styles.sectionTitle}>The Edit</h2>
        </div>
        <div className={styles.lookbookGrid}>
          {lookbookItems.map((item, i) => (
            <div key={i} className={styles.lookItem}>
              <img src={item.src} alt={item.label} />
              <div className={styles.lookOverlay}>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEye}>Just Dropped</p>
            <h2 className={styles.sectionTitle}>New Arrivals</h2>
          </div>
          <Link href="/category/all" className={styles.seeAll}>See All →</Link>
        </div>
        <div className={styles.grid}>
          {newArrivals.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Trust bar */}
      <section className={styles.trust}>
        {[
          { icon: "🌿", title: "Sustainably Made", desc: "Organic & recycled fabrics" },
          { icon: "🚚", title: "Free Shipping", desc: "On orders above ₹1999" },
          { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free returns" },
          { icon: "🤝", title: "Made in India", desc: "Supporting local artisans" },
        ].map((t) => (
          <div key={t.title} className={styles.trustItem}>
            <span className={styles.trustIcon}>{t.icon}</span>
            <strong>{t.title}</strong>
            <span>{t.desc}</span>
          </div>
        ))}
      </section>

    </div>
  );
}
