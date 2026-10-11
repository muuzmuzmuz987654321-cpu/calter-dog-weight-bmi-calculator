import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-brand-wrap">
            <Link href="/" className="footer-brand-link" aria-label="CALTER Home">
              <Logo size={36} />
            </Link>
            <p className="footer-brand-desc">
              CALTER provides evidence-based canine health tools and nutritional assessment resources
              grounded in peer-reviewed veterinary science.
            </p>
            <div className="footer-status-pill">
              <span className="status-indicator-dot" />
              <span>WSAVA Guidelines Aligned</span>
            </div>
          </div>

          {/* Navigation Links to Pages */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <h4 className="footer-nav-title">Explore CALTER</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  Dog Weight Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-nav-link">
                  Canine Health Blog
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="footer-nav-link">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-nav-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} CALTER. All rights reserved. Designed for educational use only.
          </p>
          <p className="footer-legal-notice">
            Not a substitute for professional veterinary clinical diagnosis, advice, or medical treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};
