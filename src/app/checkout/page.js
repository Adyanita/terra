"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const { items, total, dispatch } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const shipping = total >= 1999 ? 0 : 149;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>
          Your cart is empty. <Link href="/cart">Go back to cart</Link>
        </p>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert("Order placed successfully! (This is a demo)");
    dispatch({ type: "CLEAR" });
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Checkout</h1>

        <div className={styles.layout}>
          {/* Form */}
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
              <div className={styles.section}>
                <h2>Contact Information</h2>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.section}>
                <h2>Shipping Address</h2>
                <div className={styles.field}>
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2>Payment Method</h2>
                <div className={styles.paymentOptions}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                    />
                    <span>Credit/Debit Card (Demo)</span>
                  </label>
                </div>
              </div>

              <button type="submit" className={styles.placeOrderBtn}>
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.key} className={styles.item}>
                  <div className={styles.itemImg}>
                    <img src={item.product.images[0]} alt={item.product.name} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h4>{item.product.name}</h4>
                    <p>
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    ₹{(item.product.price * item.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.totals}>
              <div className={styles.totalLine}>
                <span>Subtotal</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className={styles.totalLine}>
                <span>Shipping</span>
                <span className={shipping === 0 ? styles.free : ""}>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
              <div className={styles.divider} />
              <div className={styles.grandTotal}>
                <span>Total</span>
                <span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
