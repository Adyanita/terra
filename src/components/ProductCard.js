"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, index = 0 }) {
  const [imgIdx, setImgIdx] = useState(0);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link
      href={`/product/${product.id}`}
      className={styles.card}
      style={{ animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => product.images[1] && setImgIdx(1)}
      onMouseLeave={() => setImgIdx(0)}
    >
      <div className={styles.imgWrap}>
        <img
          src={product.images[imgIdx]}
          alt={product.name}
          className={styles.img}
        />
        {product.badge && (
          <span
            className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}
          >
            {product.badge}
          </span>
        )}
        {discount && <span className={styles.discount}>−{discount}%</span>}
        <div className={styles.colorDots}>
          {product.colors.map((c, i) => (
            <span
              key={c.name}
              className={styles.dot}
              style={{ background: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.pricing}>
          <span className={styles.price}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className={styles.original}>
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
