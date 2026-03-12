"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/category/tees", label: "Tees" },
  { href: "/category/hoodies", label: "Hoodies" },
  { href: "/category/bottoms", label: "Bottoms" },
  { href: "/category/outerwear", label: "Outerwear" },
  { href: "/category/accessories", label: "Accessories" },
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Announcement ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {["Free shipping on orders above ₹1999","New arrivals every Friday","Sustainable packaging on all orders","Handcrafted in India",
            "Free shipping on orders above ₹1999","New arrivals every Friday","Sustainable packaging on all orders","Handcrafted in India"].map((t, i) => (
            <span key={i}>{t}&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Hamburger */}
          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
            <span className={menuOpen ? styles.burgerOpen : ""}></span>
          </button>

          {/* Desktop links left */}
          <div className={styles.linksLeft}>
            {navLinks.slice(0, 3).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className={styles.logo}>TERRA</Link>

          {/* Desktop links right */}
          <div className={styles.linksRight}>
            {navLinks.slice(3).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && <span className={styles.cartBadge}>{count}</span>}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
