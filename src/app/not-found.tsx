import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="section-container" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#0f172a" }}>404 - Page Not Found</h1>
        <p style={{ fontSize: "1.1rem", color: "#64748b", marginBottom: "28px" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Return to Dog Weight BMI Calculator
        </Link>
      </main>
      <Footer />
    </div>
  );
}
