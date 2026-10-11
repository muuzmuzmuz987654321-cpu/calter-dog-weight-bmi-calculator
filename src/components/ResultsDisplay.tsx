"use client";

import React, { useState } from "react";
import { AssessmentResult } from "@/lib/calculator";

interface ResultsDisplayProps {
  result: AssessmentResult | null;
  onReset: () => void;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onReset }) => {
  const [copied, setCopied] = useState(false);

  if (!result) {
    return (
      <div className="results-empty-card" aria-live="polite">
        <div className="results-empty-icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="results-empty-title">Ready for Assessment</h3>
        <p className="results-empty-desc">
          Enter your dog&apos;s current weight and body condition observations on the left to view
          the estimated ideal weight range, breed comparisons, and evidence-based guidance.
        </p>
      </div>
    );
  }

  const {
    inputWeight,
    inputUnit,
    weightKg,
    weightLbs,
    breed,
    bcsScore,
    bcsInfo,
    estimatedIdealMinKg,
    estimatedIdealMaxKg,
    estimatedIdealMinLbs,
    estimatedIdealMaxLbs,
    breedStandardMinKg,
    breedStandardMaxKg,
    breedStandardMinLbs,
    breedStandardMaxLbs,
    percentDeviationFromIdealMin,
    breedComparison,
    clinicalSummary,
    recommendations,
    limitations,
  } = result;

  const isIdeal = bcsScore === 5;
  const isUnderweight = bcsScore < 5;
  const isOverweight = bcsScore > 5;

  let statusBadgeClass = "badge-ideal";
  let statusBadgeLabel = "Ideal Body Condition";
  if (isUnderweight) {
    statusBadgeClass = bcsScore <= 2 ? "badge-severe-under" : "badge-underweight";
    statusBadgeLabel = bcsInfo.label;
  } else if (isOverweight) {
    statusBadgeClass = bcsScore >= 8 ? "badge-severe-over" : "badge-overweight";
    statusBadgeLabel = bcsInfo.label;
  }

  const handleCopySummary = async () => {
    const summaryText = `CALTER Dog Weight & Body Condition Assessment
Breed: ${breed.name}
Current Weight: ${inputWeight} ${inputUnit} (${inputUnit === "kg" ? `${weightLbs} lbs` : `${weightKg} kg`})
Body Condition Score (BCS): ${bcsScore}/9 (${bcsInfo.label})
Estimated Ideal Weight Range: ${
      inputUnit === "kg"
        ? `${estimatedIdealMinKg} – ${estimatedIdealMaxKg} kg`
        : `${estimatedIdealMinLbs} – ${estimatedIdealMaxLbs} lbs`
    }
Breed Standard Reference: ${
      inputUnit === "kg"
        ? `${breedStandardMinKg} – ${breedStandardMaxKg} kg`
        : `${breedStandardMinLbs} – ${breedStandardMaxLbs} lbs`
    }
Target Deviation: ${
      isIdeal
        ? "0% (Within target)"
        : `${percentDeviationFromIdealMin > 0 ? "+" : ""}${percentDeviationFromIdealMin}%`
    }
Assessment Framework: WSAVA 9-Point Scale & Veterinary Morphometrics
Note: Educational preliminary estimation only; consult your veterinarian.`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="results-container" id="assessment-results" aria-live="polite">
      <div className="results-card">
        {/* Header Bar */}
        <div className="results-header">
          <div>
            <span className="results-eyebrow">Preliminary Assessment Result</span>
            <h3 className="results-title">{breed.name}</h3>
          </div>
          <span className={`status-badge ${statusBadgeClass}`}>
            <span className="badge-bullet" aria-hidden="true" />
            {statusBadgeLabel} (BCS {bcsScore}/9)
          </span>
        </div>

        {/* Primary Metric Grid */}
        <div className="metrics-grid">
          {/* Current Recorded Weight */}
          <div className="metric-box">
            <span className="metric-label">Current Weight</span>
            <div className="metric-value">
              {inputWeight}{" "}
              <span className="metric-unit">{inputUnit}</span>
            </div>
            <span className="metric-secondary">
              ≈ {inputUnit === "kg" ? `${weightLbs} lbs` : `${weightKg} kg`}
            </span>
          </div>

          {/* Estimated Ideal Weight Target Range */}
          <div className="metric-box metric-box-highlight">
            <span className="metric-label">Estimated Ideal Weight Target</span>
            <div className="metric-value">
              {inputUnit === "kg"
                ? `${estimatedIdealMinKg}–${estimatedIdealMaxKg}`
                : `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs}`}{" "}
              <span className="metric-unit">{inputUnit}</span>
            </div>
            <span className="metric-secondary">
              ≈{" "}
              {inputUnit === "kg"
                ? `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs} lbs`
                : `${estimatedIdealMinKg}–${estimatedIdealMaxKg} kg`}
            </span>
          </div>

          {/* Body Fat & Target Difference */}
          <div className="metric-box">
            <span className="metric-label">Weight Deviation</span>
            <div
              className={`metric-value ${
                isIdeal
                  ? "text-ideal"
                  : isOverweight
                  ? "text-overweight"
                  : "text-underweight"
              }`}
            >
              {isIdeal
                ? "Target"
                : `${percentDeviationFromIdealMin > 0 ? "+" : ""}${percentDeviationFromIdealMin}%`}
            </div>
            <span className="metric-secondary">
              Est. Body Fat: {bcsInfo.fatPercentEstimate}
            </span>
          </div>
        </div>

        {/* Visual 9-Point BCS Bar */}
        <div className="bcs-meter-section">
          <div className="bcs-meter-header">
            <span className="bcs-meter-title">
              WSAVA Body Condition Position: <strong>{bcsScore} of 9</strong>
            </span>
            <span className="bcs-meter-category-label">
              {bcsInfo.category.toUpperCase()}
            </span>
          </div>

          <div
            className="bcs-segments-bar"
            role="progressbar"
            aria-valuenow={bcsScore}
            aria-valuemin={1}
            aria-valuemax={9}
            aria-valuetext={`Score ${bcsScore} of 9: ${bcsInfo.label}`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
              const isSelected = val === bcsScore;
              let segmentType = "segment-under";
              if (val === 4 || val === 5) segmentType = "segment-ideal";
              else if (val >= 6) segmentType = "segment-over";

              return (
                <div
                  key={val}
                  className={`bcs-segment ${segmentType} ${isSelected ? "segment-active" : ""}`}
                  title={`BCS ${val}: ${val === 5 ? "Ideal" : val < 5 ? "Underweight" : "Overweight"}`}
                >
                  <span className="segment-number">{val}</span>
                  {isSelected && <span className="segment-indicator" aria-hidden="true">▲</span>}
                </div>
              );
            })}
          </div>

          <div className="bcs-segments-legend">
            <span className="legend-item legend-under">1–3 Underweight</span>
            <span className="legend-item legend-ideal">4–5 Ideal Athletic</span>
            <span className="legend-item legend-over">6–7 Overweight</span>
            <span className="legend-item legend-severe">8–9 Obese</span>
          </div>
        </div>

        {/* Breed Comparison Card */}
        <div className="breed-comparison-box">
          <div className="breed-comparison-header">
            <h4 className="breed-comparison-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Breed Reference Comparison: {breed.name}
            </h4>
            <span
              className={`breed-status-tag ${
                breedComparison === "within_breed_standard"
                  ? "tag-standard-in"
                  : breedComparison === "above_breed_standard"
                  ? "tag-standard-high"
                  : "tag-standard-low"
              }`}
            >
              {breedComparison === "within_breed_standard"
                ? "Within Standard Range"
                : breedComparison === "above_breed_standard"
                ? "Above Standard Range"
                : "Below Standard Range"}
            </span>
          </div>

          <p className="breed-comparison-text">
            Standard adult reference range for {breed.name} is{" "}
            <strong>
              {inputUnit === "kg"
                ? `${breedStandardMinKg} to ${breedStandardMaxKg} kg`
                : `${breedStandardMinLbs} to ${breedStandardMaxLbs} lbs`}
            </strong>
            .{" "}
            {breedComparison === "within_breed_standard"
              ? `Your dog's weight (${inputWeight} ${inputUnit}) falls comfortably within standard kennel club benchmarks.`
              : breedComparison === "above_breed_standard"
              ? `Your dog's weight (${inputWeight} ${inputUnit}) is above the typical reference bracket. While large-framed individuals or heavy muscle mass can account for higher weight, high body condition scores require veterinary attention.`
              : `Your dog's weight (${inputWeight} ${inputUnit}) is below typical adult reference ranges. This may be typical for small-framed individuals or younger dogs, but warrants evaluation if body condition is lean.`}
          </p>

          {breed.notes && (
            <p className="breed-notes-callout">
              <strong>Breed Conformation Insight:</strong> {breed.notes}
            </p>
          )}
        </div>

        {/* Plain-Language Clinical Summary */}
        <div className="clinical-summary-box">
          <h4 className="clinical-summary-title">Summary &amp; Interpretation</h4>
          <p className="clinical-summary-content">{clinicalSummary}</p>
        </div>

        {/* Actionable Next Steps */}
        <div className="recommendations-box">
          <h4 className="recommendations-title">Evidence-Based Next Steps</h4>
          <ul className="recommendations-list">
            {recommendations.map((rec, i) => (
              <li key={i} className="recommendation-item">
                <span className="rec-check" aria-hidden="true">✓</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations of Generalized Formulas */}
        <div className="limitations-callout" role="note">
          <div className="limitations-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <strong>Scientific Limitations &amp; Clinical Context</strong>
          </div>
          <ul className="limitations-list">
            {limitations.map((lim, idx) => (
              <li key={idx}>{lim}</li>
            ))}
          </ul>
        </div>

        {/* Formula Explanation Callout */}
        <div className="formula-explanation-box">
          <h5 className="formula-title">How Was This Target Calculated?</h5>
          <p className="formula-desc">
            In veterinary clinical nutrition (WSAVA Nutritional Assessment Guidelines &amp; AAHA Weight Management),
            canine ideal body weight is back-calculated using semi-quantitative 9-point body condition scores. A score
            of 5/9 serves as the physiological ideal baseline (approx. 15–25% body fat). Each score above 5 represents
            an estimated 10% to 15% surplus over ideal body mass (Formula: Ideal Weight = Current Weight ÷ [1 + (BCS - 5) × 0.10 to 0.15]),
            while scores below 5 indicate an estimated 10% deficit per unit. This objective estimation provides a practical starting
            framework for veterinary nutritional planning.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="results-actions">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleCopySummary}
          >
            {copied ? "✓ Assessment Copied to Clipboard" : "📋 Copy Assessment Summary"}
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => window.print()}
          >
            🖨️ Print / Save PDF
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onReset}
          >
            ↺ Reset Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
