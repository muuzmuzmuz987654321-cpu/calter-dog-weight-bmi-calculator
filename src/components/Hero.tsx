import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse-dot" aria-hidden="true" />
            <span>Veterinary-Aligned Canine Health Resource</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Dog Weight BMI Calculator
          </h1>

          <p className="hero-lead">
            Evaluate your dog&apos;s physical condition, compare against recognized breed
            benchmarks, and estimate target healthy weight using the World Small Animal
            Veterinary Association (WSAVA) 9-point body condition scoring framework.
          </p>

          <div className="hero-actions">
            <a href="#calculator" className="btn btn-primary btn-lg">
              Start Free Assessment
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ marginLeft: "8px" }}
              >
                <path
                  d="M10 4V16M10 16L15 11M10 16L5 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how-to-use" className="btn btn-secondary btn-lg">
              How the Assessment Works
            </a>
          </div>

          <div className="hero-disclaimer-box" role="note">
            <div className="disclaimer-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d5c52" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="disclaimer-text">
              <strong>Educational Tool Disclaimer:</strong> This calculator provides preliminary nutritional
              and body condition estimations for informational purposes only. It is not a diagnostic medical
              device and cannot replace an in-person physical examination by a licensed veterinarian.
            </p>
          </div>

          <div className="hero-trust-metrics">
            <div className="trust-metric-item">
              <span className="metric-check">✓</span>
              <span>WSAVA 9-Point Scale</span>
            </div>
            <div className="trust-metric-item">
              <span className="metric-check">✓</span>
              <span>60+ Breed Benchmarks</span>
            </div>
            <div className="trust-metric-item">
              <span className="metric-check">✓</span>
              <span>Metric &amp; Imperial Units</span>
            </div>
            <div className="trust-metric-item">
              <span className="metric-check">✓</span>
              <span>100% Client-Side &amp; Private</span>
            </div>
          </div>
        </div>

        {/* Custom Canine Health Illustration */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-card">
            <svg
              viewBox="0 0 420 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-svg-graphic"
            >
              {/* Background circular halo */}
              <circle cx="210" cy="170" r="140" fill="#e6f4f1" opacity="0.6" />
              <circle cx="210" cy="170" r="110" fill="#d1fae5" opacity="0.4" />

              {/* Stylized Modern Athletic Dog Silhouette in Profile */}
              <path
                d="M120 220 
                   C120 220, 125 180, 140 160 
                   C150 145, 160 135, 175 130 
                   C185 125, 200 115, 205 95 
                   C208 85, 218 80, 225 83 
                   C232 86, 240 85, 248 92 
                   C255 100, 252 110, 245 118 
                   C242 122, 240 128, 242 135 
                   C245 145, 258 152, 275 158 
                   C295 165, 305 180, 310 200 
                   C315 220, 312 245, 310 250 
                   C305 252, 298 250, 295 242 
                   C290 228, 280 215, 265 210 
                   C250 205, 235 212, 220 215 
                   C200 218, 185 225, 175 245 
                   C170 255, 162 255, 155 250 
                   C145 240, 130 235, 120 220 Z"
                fill="#0d5c52"
                opacity="0.9"
              />

              {/* Rib cage palpation zone guideline (tactile indicator) */}
              <path
                d="M185 165 C200 160, 220 162, 235 170"
                stroke="#34d399"
                strokeWidth="3.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              {/* Abdominal tuck indicator */}
              <path
                d="M215 215 C230 205, 245 205, 260 210"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Interactive callout cards */}
              <g transform="translate(40, 60)">
                <rect width="130" height="54" rx="10" fill="#ffffff" filter="drop-shadow(0px 8px 16px rgba(13, 92, 82, 0.12))" />
                <circle cx="24" cy="27" r="10" fill="#ecfdf5" />
                <path d="M20 27L23 30L29 23" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="42" y="24" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="sans-serif">BCS 5 / 9</text>
                <text x="42" y="38" fill="#0d5c52" fontSize="10" fontWeight="500" fontFamily="sans-serif">Ideal Condition</text>
              </g>

              <g transform="translate(260, 40)">
                <rect width="135" height="54" rx="10" fill="#ffffff" filter="drop-shadow(0px 8px 16px rgba(13, 92, 82, 0.12))" />
                <circle cx="24" cy="27" r="10" fill="#f0fdf4" />
                <text x="24" y="32" textAnchor="middle" fill="#047857" fontSize="13" fontWeight="bold">⚖</text>
                <text x="42" y="24" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="sans-serif">Breed Weight</text>
                <text x="42" y="38" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="sans-serif">AKC / FCI Standards</text>
              </g>

              <g transform="translate(230, 245)">
                <rect width="150" height="54" rx="10" fill="#ffffff" filter="drop-shadow(0px 8px 16px rgba(13, 92, 82, 0.12))" />
                <circle cx="24" cy="27" r="10" fill="#fef3c7" />
                <text x="24" y="32" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">ℹ</text>
                <text x="42" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">No Human BMI</text>
                <text x="42" y="38" fill="#64748b" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Morphology Tailored</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
