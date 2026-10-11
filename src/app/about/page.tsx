import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About CALTER | Evidence-Based Canine Health Utilities",
  description:
    "Learn about CALTER, our mission to bridge veterinary nutritional science and pet parenting, and the story behind our Dog Weight BMI & Body Condition assessment tool.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main id="main-content" className="info-page-wrapper">
        <div className="section-container">
          <header className="info-page-header">
            <span className="section-subtitle">About Our Mission</span>
            <h1 className="info-page-title">About CALTER &amp; Our Canine Health Tools</h1>
            <p className="info-page-lead">
              Transforming complex veterinary nutritional data into accessible, evidence-based digital utilities
              that help pet owners safeguard their dog&apos;s longevity and quality of life.
            </p>
          </header>

          <article className="info-page-card">
            <section className="info-section">
              <h2>The Story Behind the Dog Weight BMI Calculator</h2>
              <p>
                Every month, hundreds of thousands of concerned dog owners search for terms like <em>&ldquo;dog weight BMI calculator&rdquo;</em> or 
                <em>&ldquo;how to calculate my dog&apos;s BMI.&rdquo;</em> Unfortunately, many search results provide either generic human BMI equations 
                applied carelessly to canines or thin marketing pages designed solely to sell weight-loss supplements.
              </p>
              <p>
                In veterinary science, <strong>human BMI formulas (kg/m²) do not work for dogs</strong>. Dogs exhibit the most extreme anatomical 
                diversity of any mammalian species—comparing a barrel-chested English Bulldog to a deep-chested Whippet or a short-legged Dachshund 
                using a single height-to-weight ratio creates medically misleading, dangerous results.
              </p>
              <p>
                We built the <strong>CALTER Dog Weight BMI &amp; Body Condition Calculator</strong> to solve this exact problem: providing dog parents 
                with what veterinarians actually use in clinical practice—the World Small Animal Veterinary Association (WSAVA) 9-point 
                Body Condition Score (BCS) framework paired with official kennel club breed standards.
              </p>
            </section>

            <section className="info-section">
              <h2>Our Dedicated Niche: Evidence-Based Pet Health Utilities</h2>
              <p>
                CALTER operates strictly at the intersection of veterinary nutritional science and consumer digital health. 
                Our focus is developing specialized, standalone canine health tools that are:
              </p>
              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-num">01</div>
                  <h3>Scientifically Grounded</h3>
                  <p>
                    Every calculation, target range, and nutritional observation is rooted in published veterinary guidelines, including the 
                    WSAVA Global Nutrition Committee and the American Animal Hospital Association (AAHA) weight management protocols.
                  </p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">02</div>
                  <h3>Transparent &amp; Honest</h3>
                  <p>
                    We never invent proprietary formulas, fabricate arbitrary medical risk percentages, or claim our tools replace in-person 
                    veterinary diagnoses. We state scientific limitations upfront.
                  </p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">03</div>
                  <h3>Private by Design</h3>
                  <p>
                    All health assessments run directly in your browser. We do not require account creation, logins, or saving your pet&apos;s personal 
                    health records to remote servers.
                  </p>
                </div>
              </div>
            </section>

            <section className="info-section">
              <h2>Why Canine Weight Management Matters</h2>
              <p>
                According to clinical surveys conducted by the Association for Pet Obesity Prevention (APOP), over <strong>59% of domestic dogs 
                are classified as overweight or obese</strong>. Excess adipose tissue is not passive storage; it is an active endocrine organ that 
                secretes chronic inflammatory cytokines. Maintaining an ideal body condition can extend a dog&apos;s lifespan by up to 2.5 years, 
                delaying the onset of osteoarthritis, respiratory compromise, and cardiovascular disease.
              </p>
              <p>
                Our goal is to give pet guardians the practical knowledge and hands-on palpation skills needed to catch creeping weight changes 
                months before they become chronic clinical conditions.
              </p>
            </section>

            <div className="info-cta-box">
              <h3>Evaluate Your Dog&apos;s Body Condition Today</h3>
              <p>
                Use our free, private calculator to check your dog&apos;s current weight against breed standards and estimate their ideal body mass target.
              </p>
              <Link href="/#calculator" className="btn btn-primary btn-lg">
                Launch Dog Weight Calculator →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
