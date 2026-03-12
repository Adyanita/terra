"use client";
import { useState, useMemo } from "react";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import styles from "./category.module.css";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "discount", label: "Best Discount" },
];

export default function CategoryPage({ params }) {
  const slug = params.slug;
  const [sort, setSort] = useState("featured");
  const [filterSale, setFilterSale] = useState(false);

  const catLabel = slug === "all" ? "All Products" : categories.find(c => c.id === slug)?.label || slug;
  const base = getProductsByCategory(slug);

  const sorted = useMemo(() => {
    let list = [...base];
    if (filterSale) list = list.filter(p => p.originalPrice);
    switch (sort) {
      case "price-asc": return list.sort((a, b) => a.price - b.price);
      case "price-desc": return list.sort((a, b) => b.price - a.price);
      case "discount": return list.sort((a, b) => {
        const dA = a.originalPrice ? a.originalPrice - a.price : 0;
        const dB = b.originalPrice ? b.originalPrice - b.price : 0;
        return dB - dA;
      });
      default: return list;
    }
  }, [base, sort, filterSale]);

  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{catLabel}</span>
          </nav>
          <h1 className={styles.title}>{catLabel}</h1>
          <p className={styles.count}>{sorted.length} products</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className={styles.tabs}>
        <div className={styles.tabsInner}>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/category/${c.id}`}
              className={`${styles.tab} ${c.id === slug ? styles.tabActive : ""}`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        {/* Sidebar filters */}
        <aside className={styles.sidebar}>
          <h3 className={styles.filterTitle}>Filter</h3>
          <div className={styles.filterGroup}>
            <p className={styles.filterLabel}>Availability</p>
            <label className={styles.checkRow}>
              <input type="checkbox" checked={filterSale} onChange={e => setFilterSale(e.target.checked)} />
              <span>On Sale</span>
            </label>
          </div>
          <div className={styles.filterGroup}>
            <p className={styles.filterLabel}>Price Range</p>
            <div className={styles.priceSlider}>
              <span className={styles.priceMin}>₹499</span>
              <div className={styles.sliderTrack}>
                <div className={styles.sliderFill} style={{ width: "80%" }} />
              </div>
              <span className={styles.priceMax}>₹7499</span>
            </div>
          </div>
          <div className={styles.filterGroup}>
            <p className={styles.filterLabel}>Badges</p>
            {["BESTSELLER", "NEW", "SALE"].map(b => (
              <label key={b} className={styles.checkRow}>
                <input type="checkbox" />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Product grid */}
        <div className={styles.main}>
          <div className={styles.toolbar}>
            <p className={styles.toolbarCount}>{sorted.length} results</p>
            <div className={styles.sortWrap}>
              <span className={styles.sortLabel}>Sort:</span>
              <select className={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
                {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {sorted.length === 0 ? (
            <div className={styles.empty}>
              <p>No products found.</p>
              <Link href="/category/all" className={styles.emptyLink}>Browse All →</Link>
            </div>
          ) : (
            <div className={styles.grid}>
              {sorted.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
