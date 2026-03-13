"use client";
import { useEffect, useRef } from "react";

export default function RazorpayCheckout({
  grandTotal,
  formData,
  items,
  dispatch,
  router,
}) {
  const razorpayRef = useRef(null);
  const [razorpayInstance, setRazorpayInstance] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!key) {
      console.error(
        "Razorpay key not found. Add NEXT_PUBLIC_RAZORPAY_KEY_ID to .env.local",
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setRazorpayInstance(
        new window.Razorpay({
          key,
          modal: { ondismiss: handleDismiss },
          theme: { color: "#007bff" },
        }),
      );
    };
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector(
        'script[src=\"https://checkout.razorpay.com/v1/checkout.js\"]',
      );
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  const handlePayment = () => {
    if (!razorpayInstance) return;

    const orderData = {
      amount: Math.round(grandTotal * 100), // paise
      currency: "INR",
      receipt: `receipt#${Date.now()}`,
      notes: { customer_name: formData.name },
    };

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "TERRA Store",
      description: `Order for ₹${grandTotal.toLocaleString("en-IN")}`,
      order_id: orderData.receipt, // demo fake order_id
      handler: async (response) => {
        setLoading(true);
        try {
          // Verify payment client-side (basic)
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
          alert("Verification error");
        }
        setLoading(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
        city: formData.city,
      },
      theme: {
        color: "#007bff",
      },
    };

    razorpayInstance.open(options);
  };

  const handleDismiss = () => {
    // Handle modal dismiss
  };

  return { loading, handlePayment };
}
