import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { EducationalContent } from "@/components/EducationalContent";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <Calculator />
        <EducationalContent />
      </main>
      <Footer />
    </div>
  );
}
