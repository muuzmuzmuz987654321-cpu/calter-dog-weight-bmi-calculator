"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Automatically scroll to target hash anchor when navigating from other pages (e.g., /about -> /#calculator)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Handle in-page vs cross-page anchor navigation smoothly
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    // If not on "/", Next.js Link navigates to `/#${targetId}`, and the effect above scrolls smoothly to it
  };

  return (
    <>
      <Link
        href="/#calculator"
        className="skip-link"
        onClick={(e) => handleAnchorClick(e, "calculator")}
      >
        Skip to calculator
      </Link>

      <header className="site-header">
        <div className="site-header-container">
          <Link
            href="/"
            className="site-brand-link"
            aria-label="CALTER Canine Health Tools Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo size={36} />
          </Link>

          <nav className="site-nav-desktop" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <Link
                  href="/#calculator"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "calculator")}
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-to-use"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "how-to-use")}
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link
                  href="/#bcs-guide"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "bcs-guide")}
                >
                  Body Condition (BCS)
                </Link>
              </li>
              <li>
                <Link
                  href="/#breed-standards"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "breed-standards")}
                >
                  Breed Weights
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "faq")}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#sources"
                  className="nav-link"
                  onClick={(e) => handleAnchorClick(e, "sources")}
                >
                  Sources
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-action-group">
            <Link
              href="/#calculator"
              className="btn btn-primary btn-sm"
              onClick={(e) => handleAnchorClick(e, "calculator")}
            >
              Assess Your Dog
            </Link>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="site-nav-mobile" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li>
                <Link
                  href="/#calculator"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "calculator")}
                >
                  Weight Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-to-use"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "how-to-use")}
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link
                  href="/#bcs-guide"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "bcs-guide")}
                >
                  Body Condition Score (BCS)
                </Link>
              </li>
              <li>
                <Link
                  href="/#breed-standards"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "breed-standards")}
                >
                  Breed Standards & Weights
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Canine Health Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About CALTER
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "faq")}
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/#sources"
                  className="mobile-nav-link"
                  onClick={(e) => handleAnchorClick(e, "sources")}
                >
                  Veterinary Sources & Trust
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
