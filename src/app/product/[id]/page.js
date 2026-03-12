"use client";
import { useState } from "react";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import styles from "./product.module.css";

export default function ProductPage({ params }) {
  const product = getProductById(params.id);
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name);
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState("description");

  if (!product)
    return (
      <div className={styles.notFound}>
        <p>Product not found.</p>
        <Link href="/category/all">← Back to all products</Link>
      </div>
    );

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    dispatch({
      type: "ADD_ITEM",
      product,
      size: selectedSize,
      color: selectedColor,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/category/${product.category}`}>{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className={styles.layout}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.thumbs}>
            {product.images.map((src, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${imgIdx === i ? styles.thumbActive : ""}`}
                onClick={() => setImgIdx(i)}
              >
                <img src={src} alt={`View ${i + 1}`} />
              </button>
            ))}
          </div>
          <div className={styles.mainImg}>
            <img src={product.images[imgIdx]} alt={product.name} />
            {product.badge && (
              <span
                className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}
              >
                {product.badge}
              </span>
            )}
            {discount && (
              <span className={styles.discountTag}>−{discount}%</span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <p className={styles.catTag}>{product.category}</p>
          <h1 className={styles.name}>{product.name}</h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <>
                <span className={styles.original}>
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className={styles.saving}>Save {discount}%</span>
              </>
            )}
          </div>

          {/* Colors */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>
              Color <span className={styles.sectionValue}>{selectedColor}</span>
            </p>
            <div className={styles.colorRow}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`${styles.colorBtn} ${selectedColor === color.name ? styles.colorActive : ""}`}
                  style={{ background: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className={styles.section}>
            <div className={styles.sizeHeader}>
              <p className={styles.sectionLabel}>Size</p>
              <Link href="/size-guide" className={styles.sizeGuide}>
                Size Guide
              </Link>
            </div>
            <div className={styles.sizeRow}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeBtnActive : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p className={styles.sizeHint}>
                Please select a size to continue
              </p>
            )}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <button
              className={`${styles.addToCart} ${added ? styles.added : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <Link href="/cart" className={styles.buyNow}>
              Buy Now
            </Link>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {["description", "details", "shipping"].map((t) => (
              <button
                key={t}
                className={`${styles.tabBtn} ${tab === t ? styles.tabActive : ""}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div className={styles.tabContent}>
            {tab === "description" && <p>{product.description}</p>}
            {tab === "details" && (
              <ul>
                <li>
                  Category: <strong>{product.category}</strong>
                </li>
                <li>
                  Available sizes: <strong>{product.sizes.join(", ")}</strong>
                </li>
                <li>
                  Tags: <strong>{product.tags.join(", ")}</strong>
                </li>
                <li>
                  SKU:{" "}
                  <strong>
                    TERRA-{product.id.toString().padStart(4, "0")}
                  </strong>
                </li>
              </ul>
            )}
            {tab === "shipping" && (
              <ul>
                <li>Free shipping on orders above ₹1999</li>
                <li>Estimated delivery: 3–5 business days</li>
                <li>Easy 30-day returns</li>
                <li>Cash on delivery available</li>
              </ul>
            )}
          </div>

          {/* Tags */}
          <div className={styles.tagRow}>
            {product.tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>You May Also Like</h2>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
