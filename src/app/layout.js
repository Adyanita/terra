import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "TERRA — Fashion & Streetwear",
  description: "Earthy. Raw. Refined. Fashion & streetwear for the modern nomad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ paddingTop: "var(--nav-h)" }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
