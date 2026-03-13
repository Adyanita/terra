"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./success.module.css"; // Create if needed

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>✅ Payment Successful!</h1>
        <p>Thank you for your order.</p>
        {paymentId && <p>Payment ID: {paymentId}</p>}
        {orderId && <p>Order ID: {orderId}</p>}
        <Link href="/" className={styles.btn}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
