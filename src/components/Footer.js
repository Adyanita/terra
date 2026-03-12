import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>TERRA</h2>
          <p className={styles.tagline}>Earthy. Raw. Refined.<br/>Handcrafted in India.</p>
          <div className={styles.socials}>
            {["Instagram","Pinterest","Twitter"].map(s => (
              <a key={s} href="#" className={styles.social}>{s}</a>
            ))}
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.col}>
            <h4>Shop</h4>
            {["Tees","Hoodies","Bottoms","Outerwear","Accessories"].map(c => (
              <Link key={c} href={`/category/${c.toLowerCase()}`}>{c}</Link>
            ))}
          </div>
          <div className={styles.col}>
            <h4>Help</h4>
            {["Size Guide","Shipping","Returns","FAQ","Contact Us"].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
          <div className={styles.col}>
            <h4>About</h4>
            {["Our Story","Sustainability","Careers","Press","Wholesale"].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 TERRA. All rights reserved.</span>
        <span className={styles.legal}>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}
