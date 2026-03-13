"use client";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import styles from "./checkout.module.css";

const RAZORPAY_SCRIPT_ID = "razorpay-checkout-js";

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
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [razorpayInstance, setRazorpayInstance] = useState(null);

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

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!key) return;

    // Load script
    if (!document.getElementById(RAZORPAY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = RAZORPAY_SCRIPT_ID;
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById(RAZORPAY_SCRIPT_ID);
      if (script) script.remove();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    if (formData.paymentMethod === "cod") {
      // COD demo
      alert("Order placed with COD! (Demo)");
      dispatch({ type: "CLEAR" });
      router.push("/");
    } else {
      // Razorpay card
      if (
        typeof window !== "undefined" &&
        window.Razorpay &&
        !razorpayInstance
      ) {
        const rzp = new window.Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          handler: async (response) => {
            try {
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              });
              const verify = await verifyRes.json();
              if (verify.success) {
                dispatch({ type: "CLEAR" });
                router.push(
                  `/success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`,
                );
              } else {
                alert("Payment verification failed");
              }
            } catch (err) {
              alert("Error verifying payment");
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          notes: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
          theme: {
            color: "#007bff",
          },
          modal: {
            ondismiss: () => setLoading(false),
          },
        });
        setRazorpayInstance(rzp);
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(grandTotal * 100),
        currency: "INR",
        name: "TERRA Store",
        description: `Order total: ₹${grandTotal.toLocaleString("en-IN")}`,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
        },
        theme: {
          color: "#007bff",
        },
        handler: async (response) => {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verify = await verifyRes.json();
          if (verify.success) {
            dispatch({ type: "CLEAR" });
            router.push(
              `/success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`,
            );
          } else {
            alert("Payment verification failed");
          }
          setLoading(false);
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      if (razorpayInstance) {
        razorpayInstance.open(options);
      } else {
        alert("Razorpay not loaded. Please refresh and try again.");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setIsFormValid(
      formData.name &&
        formData.email &&
        formData.phone &&
        formData.address &&
        formData.city &&
        formData.state &&
        formData.pincode,
    );
  }, [formData]);

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
                    <span>Pay with Razorpay</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={styles.placeOrderBtn}
              >
                {loading
                  ? "Processing..."
                  : "Place Order ₹" + grandTotal.toLocaleString("en-IN")}
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
