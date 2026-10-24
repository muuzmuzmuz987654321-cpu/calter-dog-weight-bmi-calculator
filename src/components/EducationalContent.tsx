import React from "react";

export const EducationalContent: React.FC = () => {
  return (
    <div className="educational-content-wrapper">
      {/* SECTION 4: How to Use the Dog Weight BMI Calculator */}
      <section className="edu-section" id="how-to-use" aria-labelledby="heading-how-to-use">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Practical Step-by-Step Guide</span>
            <h2 id="heading-how-to-use" className="section-title">
              How to Use the Dog Weight BMI Calculator
            </h2>
            <p className="section-description">
              Follow these veterinary-aligned steps to assess your dog&apos;s physical condition
              and obtain an accurate baseline evaluation.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number" aria-hidden="true">01</div>
              <h3 className="step-title">Gather Current Scale Weight</h3>
              <p className="step-text">
                Weigh your dog on a flat, calibrated digital scale. For small dogs, weigh yourself
                while holding your pet, then subtract your own weight. For medium to giant breeds,
                use a veterinary platform scale or visit your local vet clinic during drop-in weighing hours.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number" aria-hidden="true">02</div>
              <h3 className="step-title">Select Breed &amp; Life Stage</h3>
              <p className="step-text">
                Choose your dog&apos;s breed from our curated kennel club database, or select an
                appropriate mixed-breed frame size (Toy, Small, Medium, Large, or Giant). Select
                their life stage to adjust for puppy growth or senior muscle mass considerations.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number" aria-hidden="true">03</div>
              <h3 className="step-title">Perform Tactile &amp; Visual Check</h3>
              <p className="step-text">
                Run both palms gently across your dog&apos;s ribcage. Look down from directly above to check
                the waistline, and view from the side at eye level to check the abdominal tuck. Use our
                interactive 9-point WSAVA selector or the Guided Palpation tool to match your findings.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number" aria-hidden="true">04</div>
              <h3 className="step-title">Interpret Results &amp; Take Action</h3>
              <p className="step-text">
                Review your dog&apos;s estimated ideal weight target,{' '}
                <a
                  href="https://calculee.io/standard-deviation-calculator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  weight deviation percentage
                </a>
                , and breed comparisons. If the result indicates a score below 4 or above 6, copy or print the
                summary and review it with your veterinarian during your next checkup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Understanding Dog Weight and Body Condition */}
      <section className="edu-section bg-alt" id="understanding-weight" aria-labelledby="heading-understanding">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Veterinary Fundamentals</span>
            <h2 id="heading-understanding" className="section-title">
              Understanding Dog Weight vs. Body Condition
            </h2>
            <p className="section-description">
              Why human Body Mass Index (BMI) formulas fail in dogs, and why veterinarians rely on
              body composition rather than raw scale weight alone.
            </p>
          </div>

          <div className="content-prose-grid">
            <div className="prose-card">
              <h3 className="prose-card-title">Why Can&apos;t Dogs Use Human BMI?</h3>
              <p>
                Human BMI is calculated through a simple mathematical formula: weight in kilograms divided by
                height in meters squared (kg/m²). This metric assumes a relatively uniform skeletal
                proportionality across human populations.
              </p>
              <p>
                In domestic canines (<em>Canis lupus familiaris</em>), selective breeding over centuries has created
                the most morphologically diverse mammal on Earth. An English Bulldog, a Greyhound, and a Dachshund
                may share similar heights or weights, yet possess radically dissimilar skeletal frames, limb-to-body
                ratios, thoracic depths, and muscle compositions. Applying human BMI to a healthy, muscular Bulldog
                would incorrectly categorize it as morbidly obese, while labeling a healthy Sighthound as dangerously
                emaciated.
              </p>
              <p>
                Veterinary consensus is clear: <strong>there is no universal canine BMI equation</strong> that applies
                accurately across all breeds.
              </p>
            </div>

            <div className="prose-card">
              <h3 className="prose-card-title">The Crucial Role of Body Composition</h3>
              <p>
                A number on a bathroom scale only measures total gravitational mass—it does not differentiate between
                lean muscle mass, skeletal bone density, organ weight, hydration status, and adipose tissue (fat).
              </p>
              <p>
                Two Golden Retrievers can both weigh 32 kg (70 lbs). However:
              </p>
              <ul className="custom-bullet-list">
                <li>
                  <strong>Dog A:</strong> A tall, deep-chested agility dog with 18% body fat and dense spinal muscle
                  at an ideal BCS of 5/9.
                </li>
                <li>
                  <strong>Dog B:</strong> A short-framed companion dog with low muscle tone and 35% body fat at an
                  overweight BCS of 7/9.
                </li>
              </ul>
              <p>
                Evaluating body composition alongside weight is the only scientifically defensible way to determine
                whether a dog is carrying excess body fat that compromises their long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How to Assess a Dog's Body Condition (BCS) */}
      <section className="edu-section" id="bcs-guide" aria-labelledby="heading-bcs-guide">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Clinical Palpation Guide</span>
            <h2 id="heading-bcs-guide" className="section-title">
              How to Assess a Dog&apos;s Body Condition (The 3-Point Check)
            </h2>
            <p className="section-description">
              Veterinarians use a standardized 9-point Body Condition Score (BCS) validated by the World Small
              Animal Veterinary Association (WSAVA). Here is how you can perform the evaluation at home.
            </p>
          </div>

          <div className="palpation-trio-grid">
            <div className="palpation-card">
              <div className="palpation-badge">Step 1: Tactile</div>
              <h3 className="palpation-title">The Rib Palpation Test</h3>
              <div className="palpation-icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d5c52" strokeWidth="1.75">
                  <path d="M4 6c4-1 8-1 12 0M4 10c5-1 10-1 15 0M4 14c5-1 10-1 15 0M4 18c4-1 8-1 12 0" />
                </svg>
              </div>
              <p className="palpation-text">
                Place your thumbs along your dog&apos;s spine and spread your fingers over their ribcage. Apply
                very gentle pressure as if petting them.
              </p>
              <div className="palpation-benchmark">
                <strong>The Hand Analogy:</strong>
                <ul>
                  <li><strong>Ideal (BCS 4–5):</strong> Feels like the back of your hand with fingers flat—individual ribs easily felt with slight padding.</li>
                  <li><strong>Underweight (BCS 1–3):</strong> Feels like your knuckles when making a fist—prominent, sharp, zero fat cover.</li>
                  <li><strong>Overweight (BCS 6–9):</strong> Feels like your palm or the fleshy pad beneath your thumb—ribs require firm pressure to feel or cannot be felt at all.</li>
                </ul>
              </div>
            </div>

            <div className="palpation-card">
              <div className="palpation-badge">Step 2: Overhead View</div>
              <h3 className="palpation-title">The Waistline Inspection</h3>
              <div className="palpation-icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d5c52" strokeWidth="1.75">
                  <path d="M12 3c-3 3-5 7-5 11 0 3 2 7 5 7s5-4 5-7c0-4-2-8-5-11z" />
                  <path d="M7 14h10" strokeDasharray="2 2" />
                </svg>
              </div>
              <p className="palpation-text">
                Stand above your dog while they are standing squarely on all four paws. Look straight down along their back from neck to tail.
              </p>
              <div className="palpation-benchmark">
                <strong>Visual Landmarks:</strong>
                <ul>
                  <li><strong>Ideal (BCS 4–5):</strong> Clear, smooth hourglass taper behind the ribs before widening slightly at the hips.</li>
                  <li><strong>Underweight (BCS 1–3):</strong> Severe dramatic constriction behind ribs with bony pelvic wings protruding outward.</li>
                  <li><strong>Overweight (BCS 6–9):</strong> Back line is straight (like a rectangle) or bulges outward into an oval barrel shape.</li>
                </ul>
              </div>
            </div>

            <div className="palpation-card">
              <div className="palpation-badge">Step 3: Profile View</div>
              <h3 className="palpation-title">The Abdominal Tuck Check</h3>
              <div className="palpation-icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d5c52" strokeWidth="1.75">
                  <path d="M3 14c4 0 7-1 10-5 3-4 6-5 8-5" />
                  <path d="M5 20c5 0 9-3 12-8" />
                </svg>
              </div>
              <p className="palpation-text">
                Crouch down beside your dog so you are eye-level with their flank. Observe the bottom contour of their abdomen from chest to groin.
              </p>
              <div className="palpation-benchmark">
                <strong>Profile Landmarks:</strong>
                <ul>
                  <li><strong>Ideal (BCS 4–5):</strong> Visible, graceful upward slope where the belly rises behind the bottom of the ribcage.</li>
                  <li><strong>Underweight (BCS 1–3):</strong> Extreme hollow tuck; steep upward angle with visible spinal tips.</li>
                  <li><strong>Overweight (BCS 6–9):</strong> Flat horizontal line parallel to the floor, or a distended belly sagging downward.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bcs-scale-summary-table-box">
            <h3 className="table-heading">WSAVA 9-Point Body Condition Scoring System Reference</h3>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">Score</th>
                    <th scope="col">Classification</th>
                    <th scope="col">Estimated Body Fat</th>
                    <th scope="col">Clinical Presentation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 / 9</strong></td>
                    <td><span className="table-tag tag-under">Severely Emaciated</span></td>
                    <td>&lt; 5%</td>
                    <td>Ribs, lumbar spine, and pelvic bones visible from distance; severe muscle atrophy; zero palpable fat.</td>
                  </tr>
                  <tr>
                    <td><strong>2 / 9</strong></td>
                    <td><span className="table-tag tag-under">Very Thin</span></td>
                    <td>5% – 10%</td>
                    <td>Ribs easily visible; no fat palpable; severe abdominal tuck and distinct hourglass indentation.</td>
                  </tr>
                  <tr>
                    <td><strong>3 / 9</strong></td>
                    <td><span className="table-tag tag-under">Thin / Underweight</span></td>
                    <td>10% – 15%</td>
                    <td>Ribs easily felt and may be visible; tops of lumbar vertebrae visible; obvious waist and tuck.</td>
                  </tr>
                  <tr>
                    <td><strong>4 / 9</strong></td>
                    <td><span className="table-tag tag-ideal">Lean / Athletic</span></td>
                    <td>15% – 19%</td>
                    <td>Ribs easily palpable with minimal fat layer; waist visible from above; abdominal tuck distinct.</td>
                  </tr>
                  <tr className="row-highlight">
                    <td><strong>5 / 9</strong></td>
                    <td><span className="table-tag tag-ideal-gold">Ideal Condition (Target)</span></td>
                    <td>15% – 25%</td>
                    <td>Ribs easily felt without excess fat; well-proportioned waist behind ribs; graceful abdominal tuck.</td>
                  </tr>
                  <tr>
                    <td><strong>6 / 9</strong></td>
                    <td><span className="table-tag tag-over">Slightly Overweight</span></td>
                    <td>25% – 30%</td>
                    <td>Ribs palpable with slight pressure; waist discernible but softened; slight tuck present.</td>
                  </tr>
                  <tr>
                    <td><strong>7 / 9</strong></td>
                    <td><span className="table-tag tag-over">Heavy / Overweight</span></td>
                    <td>30% – 35%</td>
                    <td>Ribs difficult to palpate; thick fat cover; waist absent or barely visible; no tuck.</td>
                  </tr>
                  <tr>
                    <td><strong>8 / 9</strong></td>
                    <td><span className="table-tag tag-severe">Obese</span></td>
                    <td>35% – 40%</td>
                    <td>Ribs not palpable under thick subcutaneous fat; waist completely absent; pendulous abdominal distention.</td>
                  </tr>
                  <tr>
                    <td><strong>9 / 9</strong></td>
                    <td><span className="table-tag tag-severe">Severely Obese</span></td>
                    <td>&gt; 40%</td>
                    <td>Massive fat pads over spine, neck, thorax, and limbs; abdomen distended; severe mobility impairment.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="table-footnote">
              Source: World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee Body Condition Score Chart (Canine).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Dog Weight by Breed and Life Stage */}
      <section className="edu-section bg-alt" id="breed-standards" aria-labelledby="heading-breeds">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Reference Weight Benchmarks</span>
            <h2 id="heading-breeds" className="section-title">
              Dog Weight by Breed &amp; Life Stage
            </h2>
            <p className="section-description">
              Breed standards published by the American Kennel Club (AKC) and Federation Cynologique
              Internationale (FCI) offer general reference brackets. Individual healthy dogs may naturally
              fall above or below these ranges depending on skeletal frame size and sex.
            </p>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Breed Name</th>
                  <th scope="col">Size Category</th>
                  <th scope="col">Adult Range (kg)</th>
                  <th scope="col">Adult Range (lbs)</th>
                  <th scope="col">Conformation &amp; Frame Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Chihuahua</strong></td>
                  <td>Toy</td>
                  <td>1.5 – 3.0 kg</td>
                  <td>3.3 – 6.6 lbs</td>
                  <td>Delicate bone structure. Even 0.5 kg (1.1 lb) represents ~20% excess mass.</td>
                </tr>
                <tr>
                  <td><strong>French Bulldog</strong></td>
                  <td>Small</td>
                  <td>8.0 – 13.0 kg</td>
                  <td>18 – 28 lbs</td>
                  <td>Compact, heavy bone. Excess weight exacerbates Brachycephalic Obstructive Airway Syndrome (BOAS).</td>
                </tr>
                <tr>
                  <td><strong>Beagle</strong></td>
                  <td>Small / Medium</td>
                  <td>9.0 – 14.0 kg</td>
                  <td>20 – 30 lbs</td>
                  <td>Sturdy hunting hound. Highly food-motivated; high predisposition to weight gain.</td>
                </tr>
                <tr>
                  <td><strong>Border Collie</strong></td>
                  <td>Medium</td>
                  <td>14.0 – 20.0 kg</td>
                  <td>30 – 45 lbs</td>
                  <td>Lean, high-stamina herding frame. Natural waist is naturally prominent.</td>
                </tr>
                <tr>
                  <td><strong>Bulldog (English)</strong></td>
                  <td>Medium</td>
                  <td>18.0 – 25.0 kg</td>
                  <td>40 – 55 lbs</td>
                  <td>Dense, wide-fronted frame. Prone to joint strain and respiratory compromise.</td>
                </tr>
                <tr>
                  <td><strong>Golden Retriever</strong></td>
                  <td>Large</td>
                  <td>25.0 – 34.0 kg</td>
                  <td>55 – 75 lbs</td>
                  <td>Dense sporting dog frame. Males typically 30–34 kg; females 25–29 kg.</td>
                </tr>
                <tr>
                  <td><strong>Labrador Retriever</strong></td>
                  <td>Large</td>
                  <td>25.0 – 36.0 kg</td>
                  <td>55 – 80 lbs</td>
                  <td>Carries POMC gene mutation in ~25% of individuals, impairing satiety signals.</td>
                </tr>
                <tr>
                  <td><strong>German Shepherd</strong></td>
                  <td>Large</td>
                  <td>27.0 – 41.0 kg</td>
                  <td>60 – 90 lbs</td>
                  <td>Deep-chested working build. Lean weight protects against hip/elbow dysplasia.</td>
                </tr>
                <tr>
                  <td><strong>Greyhound</strong></td>
                  <td>Large</td>
                  <td>27.0 – 36.0 kg</td>
                  <td>60 – 80 lbs</td>
                  <td>Sighthound morphology; naturally carries low body fat (13–17%). Lightly visible ribs are normal.</td>
                </tr>
                <tr>
                  <td><strong>Rottweiler</strong></td>
                  <td>Large</td>
                  <td>38.0 – 59.0 kg</td>
                  <td>85 – 130 lbs</td>
                  <td>Heavy-boned working frame. Strict weight control essential for cruciate ligament health.</td>
                </tr>
                <tr>
                  <td><strong>Great Dane</strong></td>
                  <td>Giant</td>
                  <td>50.0 – 80.0 kg</td>
                  <td>110 – 175 lbs</td>
                  <td>Massive skeletal frame. Controlled caloric intake during puppyhood prevents developmental bone disease.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="life-stage-grid">
            <div className="life-stage-card">
              <h4 className="life-stage-title">Puppies (&lt; 12 Months)</h4>
              <p>
                Puppies grow rapidly and change skeletal proportions weekly. Static adult weight targets do
                not apply. Overfeeding puppies (especially large and giant breeds) accelerates bone growth
                faster than joint cartilage can support, dramatically increasing the risk of developmental
                orthopedic diseases like osteochondrosis (OCD) and hip dysplasia. Always use veterinary puppy
                growth charts.
              </p>
            </div>

            <div className="life-stage-card">
              <h4 className="life-stage-title">Senior Dogs (7+ Years)</h4>
              <p>
                Older dogs experience metabolic slowdown (reduced basal metabolic rate) and age-related loss
                of lean muscle mass (sarcopenia). A senior dog may maintain the same number on the scale while
                subtly losing vital muscle and accumulating visceral body fat. Ensuring high-quality digestible
                protein and monitoring the spine for muscle wasting is essential.
              </p>
            </div>

            <div className="life-stage-card">
              <h4 className="life-stage-title">Neutered &amp; Spayed Canines</h4>
              <p>
                Gonadectomy decreases resting energy expenditure by approximately 20% to 30% while increasing
                appetite. Caloric requirements drop immediately following surgery. Portion adjustments should
                be instituted proactively rather than waiting for weight gain to occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Signs That a Dog May Need a Veterinary Assessment */}
      <section className="edu-section" id="vet-signs" aria-labelledby="heading-vet-signs">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Clinical Warning Indicators</span>
            <h2 id="heading-vet-signs" className="section-title">
              Signs That Warrant a Professional Veterinary Examination
            </h2>
            <p className="section-description">
              Body condition changes can be an early indicator of systemic metabolic disease. Never attempt
              unsupervised crash diets or extreme calorie restriction without veterinary oversight.
            </p>
          </div>

          <div className="warning-signs-grid">
            <div className="warning-card warning-red">
              <h3 className="warning-title">Unexplained Weight Loss</h3>
              <p>
                If your dog is losing weight despite eating normal or increased portions, this is a red flag.
                Common medical etiologies include:
              </p>
              <ul>
                <li>Diabetes mellitus (polyuria and polydipsia)</li>
                <li>Exocrine Pancreatic Insufficiency (EPI) or intestinal malabsorption</li>
                <li>Kidney disease or chronic protein-losing nephropathy</li>
                <li>Endoparasites or occult gastrointestinal conditions</li>
                <li>Neoplasia (cancer cachexia)</li>
              </ul>
            </div>

            <div className="warning-card warning-orange">
              <h3 className="warning-title">Rapid or Unresponsive Weight Gain</h3>
              <p>
                Weight gain that occurs rapidly without an increase in calories, or failure to lose weight
                on strict portion control, may stem from endocrine dysfunction:
              </p>
              <ul>
                <li>Hypothyroidism (common in middle-aged dogs; causes sluggish metabolism)</li>
                <li>Hyperadrenocorticism (Cushing&apos;s disease; causes a pot-bellied appearance)</li>
                <li>Fluid retention (ascites from cardiac or hepatic disease mimicking fat)</li>
              </ul>
            </div>

            <div className="warning-card warning-yellow">
              <h3 className="warning-title">Loss of Mobility &amp; Energy</h3>
              <p>
                Excess adipose tissue is not inert storage—it acts as an active endocrine organ that secretes
                inflammatory cytokines (tumor necrosis factor-alpha, IL-6). Warning signs include:
              </p>
              <ul>
                <li>Reluctance to climb stairs or jump into vehicles</li>
                <li>Audible breathing, wheezing, or heat intolerance during mild walks</li>
                <li>Lethargy, sleeping more than usual, or reduced social engagement</li>
              </ul>
            </div>
          </div>

          <div className="safe-rate-callout">
            <div className="safe-rate-icon" aria-hidden="true">💡</div>
            <div className="safe-rate-content">
              <h4 className="safe-rate-title">Safe Canine Weight Loss Rate: 1% to 2% Per Week</h4>
              <p>
                Veterinary nutritionists recommend a safe, steady weight loss target of <strong>1% to 2% of total body weight per week</strong>.
                For a 30 kg dog, this equates to roughly 0.3 kg to 0.6 kg (0.7 to 1.3 lbs) weekly. Starvation diets or sudden severe calorie cuts
                cause rapid loss of vital organ protein, fatigue, and intense begging behaviors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: How Often Should You Monitor a Dog's Weight? */}
      <section className="edu-section bg-alt" id="monitoring" aria-labelledby="heading-monitoring">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Preventative Wellness Habits</span>
            <h2 id="heading-monitoring" className="section-title">
              How Often Should You Monitor Your Dog&apos;s Weight?
            </h2>
            <p className="section-description">
              Establishing consistent measurement protocols prevents creeping weight gain before it impacts
              joint health and life expectancy.
            </p>
          </div>

          <div className="monitoring-schedule-grid">
            <div className="schedule-card">
              <div className="schedule-badge">Puppyhood (0–12 Mo)</div>
              <h3 className="schedule-title">Every 2 to 4 Weeks</h3>
              <p>
                Weigh puppies bi-weekly to ensure steady skeletal development. Adjust daily food grams
                as growth milestones are reached. Bring your puppy to your vet clinic for regular weigh-ins.
              </p>
            </div>

            <div className="schedule-card schedule-highlight">
              <div className="schedule-badge">Healthy Adults (1–7 Yrs)</div>
              <h3 className="schedule-title">Once Every Month</h3>
              <p>
                Perform a 30-second rib palpation and waist inspection monthly. Weigh your dog once per month.
                A change of just 5% in body weight (e.g., 1.5 kg in a 30 kg dog) should prompt a portion review.
              </p>
            </div>

            <div className="schedule-card">
              <div className="schedule-badge">Seniors (7+ Yrs)</div>
              <h3 className="schedule-title">Every 2 to 4 Weeks</h3>
              <p>
                Older dogs are prone to rapid muscle wasting or chronic fluid shifts. Frequent weighing detects
                early disease processes months before clinical symptoms become visible.
              </p>
            </div>

            <div className="schedule-card">
              <div className="schedule-badge">Weight Loss Patients</div>
              <h3 className="schedule-title">Every 2 Weeks</h3>
              <p>
                Dogs on an active veterinary calorie-reduction plan should be weighed every two weeks to
                verify that weight loss is progressing at the safe 1–2% weekly window.
              </p>
            </div>
          </div>

          <div className="protocol-tips-box">
            <h4 className="protocol-tips-title">Best Practices for Consistent Home Weighing</h4>
            <div className="tips-grid">
              <div className="tip-item">
                <span className="tip-icon">⏰</span>
                <div>
                  <strong>Consistent Time:</strong> Weigh first thing in the morning before breakfast and after their first urination/defecation.
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">⚖️</span>
                <div>
                  <strong>Same Scale:</strong> Always use the same digital scale on a hard, level floor (not carpet) to eliminate instrument variance.
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">📝</span>
                <div>
                  <strong>Log Trends:</strong> Keep a simple phone note or calendar log. Subtle upward trends over 3 months are easily missed by eye.
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🥣</span>
                <div>
                  <strong>Use Gram Scales:</strong> Measure kibble with a digital gram kitchen scale. Volumetric measuring cups can have up to 25% error margin.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions (FAQ) */}
      <section className="edu-section" id="faq" aria-labelledby="heading-faq">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">Common Pet Owner Inquiries</span>
            <h2 id="heading-faq" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-description">
              Evidence-based answers to key questions about canine BMI, body condition scoring, and weight management.
            </p>
          </div>

          <div className="faq-accordion-list">
            <details className="faq-item" open>
              <summary className="faq-question">
                <span>Is there a validated BMI calculator for dogs?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  No. In human medicine, BMI utilizes a standard weight-to-height formula (kg/m²). In veterinary medicine,
                  no single mathematical BMI equation is validated or accepted across all domestic dogs. Because dog breeds exhibit
                  extreme anatomical diversity—ranging from long-bodied Dachshunds to deep-chested Greyhounds and stocky Bulldogs—a
                  simplistic height-weight ratio produces false classifications. Instead, veterinarians universally use the
                  <strong> 9-point Body Condition Score (BCS)</strong> system developed by Purina and endorsed by the World Small
                  Animal Veterinary Association (WSAVA), alongside morphometric evaluations.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>How can I tell if my dog is overweight at home?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  You can assess your dog at home using the 3-point veterinary palpation check:
                </p>
                <ol>
                  <li><strong>Feel the ribs:</strong> You should easily feel individual ribs with light finger pressure, covered only by a thin layer of fat (similar to feeling the back of your hand). If you must press firmly, your dog is overweight.</li>
                  <li><strong>Look from above:</strong> You should clearly see a tapered waistline behind the ribcage before the hips. If the back line is straight or bulges outward, your dog is carrying excess fat.</li>
                  <li><strong>View from the side:</strong> The belly should tuck upwards toward the groin behind the ribs. A flat or drooping belly indicates excess weight.</li>
                </ol>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>What is a healthy weight for my dog?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  A healthy weight is the specific body mass at which your individual dog maintains an ideal Body Condition Score
                  of <strong>4/9 to 5/9</strong>, with adequate lean muscle mass and without excess abdominal or subcutaneous fat.
                  While kennel club standards provide general reference brackets (e.g., 25–34 kg for a Golden Retriever), individual
                  dogs with naturally smaller or larger skeletal frames may thrive slightly below or above these published averages.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Can I calculate my dog&apos;s ideal weight using only its breed?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  Not reliably. Breed standards define a broad reference range, but individual variation within any purebred dog can be
                  up to 20% to 30% based on sex, height at the withers, bone density, and working lineage. For mixed-breed dogs, breed
                  standards are even less definitive. Calculating an accurate ideal target requires combining current scale weight with
                  a hands-on Body Condition Score assessment.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Does a dog&apos;s age affect its ideal weight?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes. Growing puppies have continually shifting target weights based on developmental growth curves rather than static adult
                  benchmarks. Senior dogs often suffer from sarcopenia (age-related loss of muscle mass) coupled with a slower metabolic rate.
                  A senior dog may maintain the same scale weight while losing vital muscle tissue and gaining dangerous visceral adipose tissue.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Is a dog Body Condition Score (BCS) the same as human BMI?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  No. Human BMI is a purely mathematical height-to-weight calculation. Canine BCS is a semi-quantitative clinical evaluation
                  combining visual assessment and manual palpation of fat layers over key skeletal landmarks (ribs, spine, pelvic bones).
                  BCS directly estimates body fat percentage: a score of 5/9 represents ~15–25% body fat (ideal), while each point above 5
                  represents approximately 10% to 15% excess body fat over ideal weight.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>How often should I weigh my dog?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  Healthy adult dogs should be weighed once every month, accompanied by a quick hands-on rib check. Growing puppies and dogs
                  enrolled in an active weight-loss program should be weighed every 2 to 4 weeks. Senior dogs with chronic health conditions
                  should also be weighed every 2 to 4 weeks to detect muscle wasting early.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>When should I consult a veterinarian regarding my dog&apos;s weight?</span>
                <span className="faq-toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>
                  You should consult a veterinarian immediately if you observe:
                </p>
                <ul>
                  <li>Unexplained weight loss despite normal or increased food intake.</li>
                  <li>Sudden weight gain without dietary changes.</li>
                  <li>A Body Condition Score of 3/9 or lower, or 7/9 or higher.</li>
                  <li>Exercise intolerance, heavy panting, or reluctance to rise.</li>
                  <li>Abdominal enlargement or distention (which could indicate organ enlargement, ascites, or Cushing&apos;s disease rather than fat).</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 11: Sources and Trust */}
      <section className="edu-section bg-alt" id="sources" aria-labelledby="heading-sources">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Authoritative References</span>
            <h2 id="heading-sources" className="section-title">
              Veterinary Sources &amp; Clinical Methodology
            </h2>
            <p className="section-description">
              The CALTER Canine Assessment Tool is constructed on peer-reviewed veterinary literature,
              clinical nutrition guidelines, and recognized kennel club conformation standards.
            </p>
          </div>

          <div className="sources-list">
            <article className="source-item">
              <div className="source-citation">
                <h3 className="source-title">
                  World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee
                </h3>
                <p className="source-meta">
                  <em>WSAVA Nutritional Assessment Guidelines &amp; Canine Body Condition Score Chart (9-Point System).</em>
                </p>
                <p className="source-desc">
                  Serves as the foundation for our 9-point palpation scoring system, rib evaluation criteria, and
                  the 10%–15% body weight deviation back-calculation model.
                </p>
              </div>
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View WSAVA Guidelines ↗
              </a>
            </article>

            <article className="source-item">
              <div className="source-citation">
                <h3 className="source-title">
                  American Animal Hospital Association (AAHA)
                </h3>
                <p className="source-meta">
                  <em>AAHA Weight Management Guidelines for Dogs and Cats. Journal of the American Animal Hospital Association.</em>
                </p>
                <p className="source-desc">
                  Provides clinical protocols for safe weight-loss rates (1–2% weekly), metabolic calculations,
                  and nutritional management of canine obesity.
                </p>
              </div>
              <a
                href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View AAHA Guidelines ↗
              </a>
            </article>

            <article className="source-item">
              <div className="source-citation">
                <h3 className="source-title">
                  Association for Pet Obesity Prevention (APOP)
                </h3>
                <p className="source-meta">
                  <em>U.S. Pet Obesity Prevalence Survey &amp; Clinical Practice Tools.</em>
                </p>
                <p className="source-desc">
                  Guides our educational content regarding the systemic inflammatory risks of excess adipose tissue
                  and common pet parent perception biases.
                </p>
              </div>
              <a
                href="https://www.petobesityprevention.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View APOP Research ↗
              </a>
            </article>

            <article className="source-item">
              <div className="source-citation">
                <h3 className="source-title">
                  Laflamme, D. P. (1997)
                </h3>
                <p className="source-meta">
                  <em>Development and Validation of a Body Condition Score System for Dogs. Canine Practice, 22(4), 10–15.</em>
                </p>
                <p className="source-desc">
                  Original peer-reviewed validation study correlating the 9-point visual and tactile BCS scale with
                  DEXA (dual-energy X-ray absorptiometry) measured body composition in canines.
                </p>
              </div>
              <span className="source-journal-tag">Peer-Reviewed Study</span>
            </article>

            <article className="source-item">
              <div className="source-citation">
                <h3 className="source-title">
                  American Kennel Club (AKC) &amp; Federation Cynologique Internationale (FCI)
                </h3>
                <p className="source-meta">
                  <em>Official Breed Standard Weight &amp; Height Specifications.</em>
                </p>
                <p className="source-desc">
                  Benchmark weight ranges used in our breed selection database for recognized domestic breeds.
                </p>
              </div>
              <a
                href="https://www.akc.org/dog-breeds/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View AKC Standards ↗
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 12: About CALTER and Disclaimer */}
      <section className="edu-section" id="about-calter" aria-labelledby="heading-about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Transparency &amp; Governance</span>
            <h2 id="heading-about" className="section-title">
              About CALTER &amp; Medical Disclaimer
            </h2>
          </div>

          <div className="about-calter-card">
            <h3 className="about-calter-subtitle">Our Mission &amp; Methodology</h3>
            <p>
              <strong>CALTER</strong> creates evidence-based digital health utilities designed to empower pet
              guardians with clear, scientifically grounded data. We believe pet health decisions should be informed
              by veterinary research rather than commercial gimmicks, arbitrary formulas, or misleading human metrics.
            </p>
            <p>
              This tool bridges the gap between complex veterinary nutritional science and everyday pet care by
              translating the World Small Animal Veterinary Association&apos;s 9-point body condition scoring framework
              into an intuitive, accessible assessment tool.
            </p>

            <div className="formal-disclaimer-box" role="alert">
              <h4 className="formal-disclaimer-title">IMPORTANT MEDICAL &amp; VETERINARY DISCLAIMER</h4>
              <p>
                The CALTER Dog Weight BMI Calculator is provided strictly for educational and informational purposes.
                It is not a medical device, diagnostic instrument, or veterinary consultation. Canine health status
                is multifactorial and depends on comprehensive physical examination, auscultation, clinical pathology
                (blood and urine tests), orthopedic evaluation, and individualized veterinary assessment.
              </p>
              <p>
                Never initiate extreme calorie reduction, crash diets, or medical interventions for your dog without
                prior consultation with a licensed veterinary practitioner. If your dog exhibits signs of acute illness,
                lethargy, respiratory difficulty, or rapid weight fluctuations, contact your veterinarian or local
                emergency veterinary hospital immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
