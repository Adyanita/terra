"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./cart.module.css";

export default function CartPage() {
  const { items, total, count, dispatch } = useCart();
  const router = useRouter();

  const shipping = total >= 1999 ? 0 : 149;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </div>
        <h2 className={styles.emptyTitle}>Your cart is empty</h2>
        <p className={styles.emptyText}>
          Looks like you haven't added anything yet.
        </p>
        <Link href="/category/all" className={styles.shopBtn}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <span className={styles.count}>
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      <div className={styles.layout}>
        {/* Items */}
        <div className={styles.items}>
          {items.map((item) => (
            <div key={item.key} className={styles.item}>
              <div className={styles.itemImg}>
                <img src={item.product.images[0]} alt={item.product.name} />
              </div>
              <div className={styles.itemInfo}>
                <p className={styles.itemCat}>{item.product.category}</p>
                <h3 className={styles.itemName}>{item.product.name}</h3>
                <div className={styles.itemMeta}>
                  <span>Size: {item.size}</span>
                  <span
                    className={styles.itemColorDot}
                    style={{
                      background:
                        item.product.colors.find((c) => c.name === item.color)
                          ?.hex || item.color,
                    }}
                    title={item.color}
                  />
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.qtyControl}>
                    <button
                      onClick={() =>
                        item.qty > 1
                          ? dispatch({
                              type: "UPDATE_QTY",
                              key: item.key,
                              qty: item.qty - 1,
                            })
                          : dispatch({ type: "REMOVE_ITEM", key: item.key })
                      }
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QTY",
                          key: item.key,
                          qty: item.qty + 1,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", key: item.key })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className={styles.itemPrice}>
                <span className={styles.lineTotal}>
                  ₹{(item.product.price * item.qty).toLocaleString("en-IN")}
                </span>
                {item.product.originalPrice && (
                  <span className={styles.lineSaved}>
                    Save ₹
                    {(
                      (item.product.originalPrice - item.product.price) *
                      item.qty
                    ).toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>

          <div className={styles.summaryLine}>
            <span>Subtotal</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <div className={styles.summaryLine}>
            <span>Shipping</span>
            <span className={shipping === 0 ? styles.free : ""}>
              {shipping === 0 ? "FREE" : `₹${shipping}`}
            </span>
          </div>
          {shipping > 0 && (
            <p className={styles.shippingNote}>
              Add ₹{(1999 - total).toLocaleString("en-IN")} more for free
              shipping
            </p>
          )}
          <div className={styles.divider} />
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>₹{grandTotal.toLocaleString("en-IN")}</span>
          </div>

          <button
            className={styles.checkoutBtn}
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
          <Link href="/category/all" className={styles.continueShopping}>
            ← Continue Shopping
          </Link>

          <div className={styles.trustBadges}>
            <span>🔒 Secure Checkout</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
