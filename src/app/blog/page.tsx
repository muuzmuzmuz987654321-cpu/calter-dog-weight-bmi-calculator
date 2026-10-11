import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Human BMI Fails for Dogs (And What Vets Use Instead) | CALTER Blog",
  description:
    "Explore the veterinary science behind canine weight assessment, why human BMI formulas fail in dogs, and how the CALTER Dog Weight & BCS Calculator provides an evidence-based alternative.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main id="main-content" className="info-page-wrapper">
        <div className="section-container">
          <header className="info-page-header">
            <div className="blog-meta-badge">
              <span>Veterinary Science &amp; Health Utilities</span>
              <span>•</span>
              <time dateTime="2026-10">October 2026</time>
              <span>•</span>
              <span>8 Min Read</span>
            </div>
            <h1 className="info-page-title">
              Why Human BMI Fails for Dogs: The Science of Canine Body Condition &amp; Why We Built the CALTER Tool
            </h1>
            <p className="info-page-lead">
              Every month, thousands of dog parents search for a &ldquo;dog BMI calculator.&rdquo; Here is why the math behind human BMI
              breaks down completely for canines—and how modern veterinary nutrition evaluates true body composition instead.
            </p>
          </header>

          <article className="info-page-card blog-article-body">
            <section className="info-section">
              <h2>The Consumer Myth of the &ldquo;Dog BMI Calculator&rdquo;</h2>
              <p>
                In human healthcare, Body Mass Index (BMI) has been a ubiquitous screening tool for over a century. Calculated by dividing
                an individual&apos;s weight in kilograms by height in meters squared (kg/m²), BMI provides a quick, standardized index of
                body fatness for the general adult human population.
              </p>
              <p>
                When loving pet parents notice their dog looking a little stocky or gaining weight after being spayed or neutered, their first
                instinct is natural: open a search engine and look for a <em>dog weight BMI calculator</em>.
              </p>
              <p>
                However, applying human BMI formulas to dogs is not just inaccurate—it is <strong>medically invalid and clinically dangerous</strong>.
              </p>
            </section>

            <section className="info-section">
              <h2>The Extreme Morphological Diversity of Canines</h2>
              <p>
                Domestic dogs (<em>Canis lupus familiaris</em>) represent the most morphologically diverse mammal on Earth. Through centuries
                of selective breeding, canines have developed radically distinct skeletal architectures, thoracic depths, limb-to-body ratios,
                and bone densities:
              </p>
              <div className="comparison-case-grid">
                <div className="case-card">
                  <h3>The English Bulldog</h3>
                  <p>
                    Possesses a wide, low-slung front, short chondrodystrophic limbs, and a dense, muscular chest. A healthy, athletic Bulldog
                    might stand only 15 inches tall while weighing 24 kg (53 lbs). If you calculate their &ldquo;BMI&rdquo; using height squared,
                    the formula will claim they are catastrophically obese, despite carrying optimal lean tissue.
                  </p>
                </div>
                <div className="case-card">
                  <h3>The Greyhound</h3>
                  <p>
                    Possesses a deep thoracic cavity, extremely long slender limbs, and minimal subcutaneous fat padding (often 13%–17% body fat).
                    A Greyhound may stand 28 inches tall while weighing 30 kg (66 lbs). A naive BMI formula will label this dog as severely
                    emaciated, despite them being at the peak of athletic conditioning.
                  </p>
                </div>
              </div>
              <p>
                Because skeletal proportion varies by hundreds of percent across the 200+ recognized domestic dog breeds, there is no single
                universal height-to-weight ratio that works across canines.
              </p>
            </section>

            <section className="info-section">
              <h2>What Veterinary Medicine Uses Instead: The 9-Point BCS Framework</h2>
              <p>
                To accurately assess body fatness without being misled by skeletal conformation, veterinary clinical practice relies on the
                <strong> World Small Animal Veterinary Association (WSAVA) 9-Point Body Condition Scoring (BCS) system</strong>.
              </p>
              <p>
                Validated against DEXA (dual-energy X-ray absorptiometry) scans by Dr. Dottie Laflamme and veterinary nutrition researchers,
                the 9-point scale combines visual inspection with tactile palpation across three anatomical landmarks:
              </p>
              <ol className="blog-ordered-list">
                <li>
                  <strong>Rib Palpation:</strong> In an ideal dog (BCS 5/9), individual ribs can be easily felt with gentle pressure, covered
                  only by a thin, healthy subcutaneous fat blanket (resembling the feel of the back of your hand).
                </li>
                <li>
                  <strong>Overhead Waistline:</strong> Viewed from directly above while standing squarely, an hourglass taper should be clearly
                  visible behind the ribcage before widening at the hips.
                </li>
                <li>
                  <strong>Abdominal Tuck:</strong> Viewed from the side at eye level, the ventral abdominal line should gracefully tuck upwards
                  behind the ribcage toward the groin.
                </li>
              </ol>
              <p>
                Crucially, each point on the 9-point scale above 5 represents an estimated <strong>10% to 15% surplus over ideal body weight</strong>.
                This semi-quantitative relationship allows veterinarians to mathematically back-calculate an accurate target weight range:
              </p>
              <div className="formula-highlight-callout">
                <code>Estimated Ideal Body Weight = Current Weight ÷ [1 + (BCS - 5) × 0.10 to 0.15]</code>
              </div>
            </section>

            <section className="info-section">
              <h2>Why We Built the CALTER Dog Weight Assessment Tool</h2>
              <p>
                Seeing that millions of dog owners search for &ldquo;dog BMI&rdquo; but find low-quality advice, we set out to build an
                interactive tool that bridges the gap between veterinary nutritional science and everyday pet care:
              </p>
              <ul className="custom-bullet-list">
                <li>
                  <strong>Correct the Terminology:</strong> Instead of peddling pseudo-scientific human formulas, our tool explains exactly why
                  human BMI doesn&apos;t apply and teaches dog parents how to assess their pet&apos;s real body condition.
                </li>
                <li>
                  <strong>Interactive Guided Palpation:</strong> Many pet parents don&apos;t know their dog&apos;s BCS number offhand. We created an
                  interactive 3-step tactile questionnaire that maps their observations directly to the validated 9-point scale.
                </li>
                <li>
                  <strong>Breed Standard Integration:</strong> We compiled official adult weight ranges across 60+ recognized breeds from the
                  American Kennel Club (AKC) and Federation Cynologique Internationale (FCI), plus 5 mixed-breed size categories, allowing
                  owners to compare scale weight against standard reference brackets.
                </li>
                <li>
                  <strong>100% Client-Side Privacy:</strong> No signups, no paywalls, and zero storage of pet health records.
                </li>
              </ul>
            </section>

            <section className="info-section">
              <h2>Actionable Takeaway for Pet Guardians</h2>
              <p>
                Canine obesity has reached epidemic proportions, affecting nearly 60% of pet dogs. Left unaddressed, excess adiposity accelerates
                osteoarthritis, exacerbates breathing difficulties, and shortens life expectancy by up to two years.
              </p>
              <p>
                However, healthy weight management does not require crash diets or expensive supplements. It starts with consistent monthly
                weigh-ins, mindful portion control with a digital gram scale, and routine hands-on rib palpation.
              </p>
            </section>

            <div className="info-cta-box">
              <h3>Try the CALTER Dog Weight Assessment Tool</h3>
              <p>
                Ready to evaluate your dog&apos;s physical condition using the WSAVA 9-point framework and official breed benchmarks?
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <Link href="/#calculator" className="btn btn-primary btn-lg">
                  Launch the Calculator →
                </Link>
                <Link href="/about" className="btn btn-secondary btn-lg">
                  Read About CALTER
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
