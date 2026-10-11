import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | CALTER",
  description:
    "Read the CALTER Privacy Policy. Learn how our 100% client-side calculator protects your privacy with zero personal data collection or tracking.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="page-wrapper">
      <Header />
      <main id="main-content" className="info-page-wrapper">
        <div className="section-container">
          <header className="info-page-header">
            <span className="section-subtitle">Data Governance</span>
            <h1 className="info-page-title">Privacy Policy</h1>
            <p className="info-page-lead">
              At CALTER, we believe pet health tools should be transparent, accessible, and completely private.
              Learn how we handle your data and why our calculator requires zero personal information.
            </p>
            <p className="info-meta-date">Last Updated: {lastUpdated}</p>
          </header>

          <article className="info-page-card">
            <section className="info-section">
              <h2>1. Summary: Private by Architecture</h2>
              <div className="privacy-highlight-box">
                <p>
                  <strong>In short:</strong> We do not collect your name, email address, physical location, or your pet&apos;s
                  personal details. When you enter your dog&apos;s weight, breed, or body condition observations into our calculator,
                  that computation happens entirely inside your web browser. Nothing you type into the calculator is transmitted to,
                  saved on, or analyzed by our servers.
                </p>
              </div>
            </section>

            <section className="info-section">
              <h2>2. Information We Do NOT Collect</h2>
              <p>
                Unlike many commercial pet wellness apps, CALTER is designed without user databases or personal tracking:
              </p>
              <ul className="custom-bullet-list">
                <li><strong>No Account Creation:</strong> You do not need to register, log in, or provide credentials to use our tool.</li>
                <li><strong>No Pet Profiles:</strong> We do not store your dog&apos;s name, medical history, age, or weight logs on any database.</li>
                <li><strong>No Marketing Tracking:</strong> We do not sell, rent, trade, or share your pet&apos;s data with pet food manufacturers, advertisers, or third-party data brokers.</li>
                <li><strong>No Intrusive Permissions:</strong> We do not request access to your device camera, microphone, contacts, or GPS location.</li>
              </ul>
            </section>

            <section className="info-section">
              <h2>3. Client-Side Execution</h2>
              <p>
                The CALTER Dog Weight BMI &amp; Body Condition Calculator runs purely as client-side JavaScript. The mathematical
                formulas and WSAVA body condition back-calculations execute in your browser&apos;s local runtime memory. When you close or
                refresh your browser tab, your entered inputs are cleared automatically unless you choose to copy or print them.
              </p>
            </section>

            <section className="info-section">
              <h2>4. Server Logs &amp; Hosting Infrastructure</h2>
              <p>
                This website is hosted on Vercel Inc. Like almost all web hosting providers, Vercel may process standard, temporary
                server connection logs for technical security, DDoS mitigation, and reliability monitoring. These logs may include:
              </p>
              <ul className="custom-bullet-list">
                <li>Internet Protocol (IP) address</li>
                <li>Browser user-agent string and operating system type</li>
                <li>Date and time of requests</li>
                <li>Uniform Resource Identifiers (URIs) accessed (e.g., &ldquo;/&rdquo; or &ldquo;/about&rdquo;)</li>
              </ul>
              <p>
                These infrastructure logs are used strictly for site performance, rate limiting, and technical maintenance. They are
                not connected to individual pet owners or calculator inputs.
              </p>
            </section>

            <section className="info-section">
              <h2>5. Cookies &amp; Local Storage</h2>
              <p>
                CALTER does not use third-party advertising cookies, cross-site trackers, or behavioral profiling scripts. We do not
                load invasive third-party analytics pixels that monitor your activity across the web.
              </p>
            </section>

            <section className="info-section">
              <h2>6. External Veterinary Links</h2>
              <p>
                Our educational guides and methodology sections include outbound citations to authoritative veterinary resources such
                as the World Small Animal Veterinary Association (WSAVA), the American Animal Hospital Association (AAHA), and the
                American Kennel Club (AKC). When you click an external link, you leave our site and become subject to that external
                organization&apos;s respective privacy terms.
              </p>
            </section>

            <section className="info-section">
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may periodically update this policy if new health utilities or features are deployed. Any changes will be posted
                directly to this page with an updated revision date.
              </p>
            </section>

            <div className="info-cta-box">
              <h3>Ready to Calculate Your Dog&apos;s Body Condition?</h3>
              <p>
                Enjoy our completely private, client-side calculator without worrying about your data being tracked.
              </p>
              <Link href="/#calculator" className="btn btn-primary btn-lg">
                Go to Calculator →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
