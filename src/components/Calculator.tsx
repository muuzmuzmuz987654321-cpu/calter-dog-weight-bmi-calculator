"use client";

import React, { useState, useId } from "react";
import { DOG_BREEDS } from "@/data/breeds";
import {
  WeightUnit,
  AgeCategory,
  WSAVA_BCS_SCALE,
  calculateDogWeightAssessment,
  AssessmentResult,
  kgToLbs,
  lbsToKg,
} from "@/lib/calculator";
import { ResultsDisplay } from "./ResultsDisplay";

export const Calculator: React.FC = () => {
  // Form State
  const [unit, setUnit] = useState<WeightUnit>("kg");
  const [weightInput, setWeightInput] = useState<string>("28");
  const [breedId, setBreedId] = useState<string>("labrador-retriever");
  const [ageCategory, setAgeCategory] = useState<AgeCategory>("adult");
  const [bcsScore, setBcsScore] = useState<number>(6); // Default 6 (common slightly overweight starting point for demonstration)

  // Guided Assistant Mode State
  const [guidedModeOpen, setGuidedModeOpen] = useState<boolean>(false);
  const [guidedRibs, setGuidedRibs] = useState<string>("slight_pressure");
  const [guidedWaist, setGuidedWaist] = useState<string>("softened");
  const [guidedTuck, setGuidedTuck] = useState<string>("reduced");

  // Error State & Results State
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AssessmentResult | null>(() => {
    try {
      return calculateDogWeightAssessment({
        weight: 28,
        unit: "kg",
        breedId: "labrador-retriever",
        bcsScore: 6,
        ageCategory: "adult",
      });
    } catch {
      return null;
    }
  });

  // Unique IDs for accessibility
  const weightInputId = useId();
  const breedSelectId = useId();
  const ageSelectId = useId();

  // Unit Switcher Handler with value conversion
  const handleUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === unit) return;
    const currentVal = parseFloat(weightInput);
    let convertedStr = weightInput;
    if (!isNaN(currentVal) && currentVal > 0) {
      if (newUnit === "lbs") {
        convertedStr = kgToLbs(currentVal).toString();
      } else {
        convertedStr = lbsToKg(currentVal).toString();
      }
      setWeightInput(convertedStr);
    }
    setUnit(newUnit);
    if (!isNaN(currentVal) && currentVal > 0) {
      handleCalculate(undefined, convertedStr, undefined, undefined, newUnit);
    }
  };

  // Run calculation
  const handleCalculate = (
    overrideBcs?: number,
    overrideWeight?: string,
    overrideBreed?: string,
    overrideAge?: AgeCategory,
    overrideUnit?: WeightUnit
  ) => {
    const rawW = overrideWeight !== undefined ? overrideWeight : weightInput;
    const currentUnit = overrideUnit !== undefined ? overrideUnit : unit;
    const currentBreed = overrideBreed !== undefined ? overrideBreed : breedId;
    const currentAge = overrideAge !== undefined ? overrideAge : ageCategory;
    const currentBcs = overrideBcs !== undefined ? overrideBcs : bcsScore;

    const parsedWeight = parseFloat(rawW);

    if (isNaN(parsedWeight) || parsedWeight <= 0) {
      setError("Please enter a valid positive number for your dog's weight.");
      setResult(null);
      return;
    }

    const maxAllowed = currentUnit === "kg" ? 150 : 330;
    if (parsedWeight > maxAllowed) {
      setError(`Weight cannot exceed ${maxAllowed} ${currentUnit}. Please enter a realistic canine weight.`);
      setResult(null);
      return;
    }

    setError(null);
    try {
      const calcResult = calculateDogWeightAssessment({
        weight: parsedWeight,
        unit: currentUnit,
        breedId: currentBreed,
        bcsScore: currentBcs,
        ageCategory: currentAge,
      });
      setResult(calcResult);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected calculation error occurred.");
      }
      setResult(null);
    }
  };

  // Interactive BCS Click Handler
  const handleSelectBCS = (score: number) => {
    setBcsScore(score);
    handleCalculate(score);
  };

  // Guided Assistant Solver
  const applyGuidedBCS = () => {
    // Scoring logic based on tactile questions
    let score = 5;
    if (guidedRibs === "prominent" || guidedWaist === "severe_hourglass" || guidedTuck === "extreme_tuck") {
      score = guidedRibs === "prominent" ? 2 : 3;
    } else if (guidedRibs === "firm_pressure" || guidedWaist === "softened" || guidedTuck === "reduced") {
      score = 6;
      if (guidedWaist === "absent" || guidedTuck === "flat") score = 7;
    } else if (guidedRibs === "impossible" || guidedWaist === "bulging" || guidedTuck === "pendulous") {
      score = 8;
      if (guidedWaist === "bulging" && guidedTuck === "pendulous") score = 9;
    } else if (guidedRibs === "lean_minimal") {
      score = 4;
    } else {
      score = 5;
    }

    setBcsScore(score);
    setGuidedModeOpen(false);
    handleCalculate(score);
  };

  // Reset form
  const handleReset = () => {
    setUnit("kg");
    setWeightInput("");
    setBreedId("mixed-medium");
    setAgeCategory("adult");
    setBcsScore(5);
    setError(null);
    setResult(null);
  };

  const selectedBcsDetails = WSAVA_BCS_SCALE[bcsScore] || WSAVA_BCS_SCALE[5];

  return (
    <section className="calculator-section" id="calculator" aria-labelledby="calc-heading">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-subtitle">Interactive Assessment Tool</span>
          <h2 id="calc-heading" className="section-title">
            Canine Body Condition &amp; Weight Assessment
          </h2>
          <p className="section-description">
            Complete the form below to assess your dog&apos;s physical condition against the
            WSAVA 9-point scale and compare weight against breed standards.
          </p>
        </div>

        <div className="calculator-grid">
          {/* Input Form Column */}
          <div className="calculator-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCalculate();
              }}
              noValidate
            >
              {/* Unit Toggle */}
              <div className="form-group">
                <fieldset className="unit-fieldset">
                  <legend className="form-label">Measurement Unit</legend>
                  <div className="unit-toggle-group" role="radiogroup" aria-label="Weight measurement unit">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={unit === "kg"}
                      className={`unit-toggle-btn ${unit === "kg" ? "active" : ""}`}
                      onClick={() => handleUnitChange("kg")}
                    >
                      Kilograms (kg)
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={unit === "lbs"}
                      className={`unit-toggle-btn ${unit === "lbs" ? "active" : ""}`}
                      onClick={() => handleUnitChange("lbs")}
                    >
                      Pounds (lbs)
                    </button>
                  </div>
                </fieldset>
              </div>

              {/* Weight Input */}
              <div className="form-group">
                <label htmlFor={weightInputId} className="form-label">
                  Dog&apos;s Current Weight <span className="text-danger">*</span>
                </label>
                <div className="input-with-unit">
                  <input
                    id={weightInputId}
                    type="number"
                    step="0.1"
                    min="0.5"
                    max={unit === "kg" ? 150 : 330}
                    value={weightInput}
                    onChange={(e) => {
                      setWeightInput(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder={`e.g. ${unit === "kg" ? "28.5" : "62.8"}`}
                    className={`form-input ${error ? "input-error" : ""}`}
                    required
                    aria-describedby={error ? "weight-error-msg" : "weight-hint"}
                  />
                  <span className="input-unit-badge">{unit}</span>
                </div>
                {error ? (
                  <p id="weight-error-msg" className="form-error" role="alert">
                    {error}
                  </p>
                ) : (
                  <p id="weight-hint" className="form-hint">
                    Enter your dog&apos;s most recent scale measurement.
                  </p>
                )}
              </div>

              {/* Breed Selector */}
              <div className="form-group">
                <label htmlFor={breedSelectId} className="form-label">
                  Breed or Size Category <span className="text-danger">*</span>
                </label>
                <select
                  id={breedSelectId}
                  value={breedId}
                  onChange={(e) => {
                    setBreedId(e.target.value);
                    handleCalculate(undefined, undefined, e.target.value);
                  }}
                  className="form-select"
                >
                  <optgroup label="Mixed Breed &amp; Size Frameworks">
                    {DOG_BREEDS.filter((b) => b.id.startsWith("mixed-")).map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Recognized Breeds (AKC / FCI)">
                    {DOG_BREEDS.filter((b) => !b.id.startsWith("mixed-")).map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.category} • {unit === "kg" ? `${b.minWeightKg}–${b.maxWeightKg} kg` : `${b.minWeightLbs}–${b.maxWeightLbs} lbs`})
                      </option>
                    ))}
                  </optgroup>
                </select>
                <p className="form-hint">
                  Used for kennel club benchmark comparison. If your dog is a mix, select by adult frame size.
                </p>
              </div>

              {/* Age Category */}
              <div className="form-group">
                <label htmlFor={ageSelectId} className="form-label">
                  Life Stage
                </label>
                <select
                  id={ageSelectId}
                  value={ageCategory}
                  onChange={(e) => {
                    const newAge = e.target.value as AgeCategory;
                    setAgeCategory(newAge);
                    handleCalculate(undefined, undefined, undefined, newAge);
                  }}
                  className="form-select"
                >
                  <option value="adult">Adult Dog (1 to 7 Years)</option>
                  <option value="puppy">Puppy (&lt; 12 Months) — Rapid Growth Phase</option>
                  <option value="senior">Senior Dog (7+ Years)</option>
                </select>
              </div>

              {/* WSAVA 9-Point BCS Selector */}
              <div className="form-group">
                <div className="bcs-selector-header">
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    Body Condition Score (BCS 1–9) <span className="text-danger">*</span>
                  </label>
                  <button
                    type="button"
                    className="guided-helper-btn"
                    onClick={() => setGuidedModeOpen(!guidedModeOpen)}
                  >
                    {guidedModeOpen ? "✕ Close Helper" : "❓ Unsure? Use Guided Palpation"}
                  </button>
                </div>

                {/* Guided Palpation Accordion */}
                {guidedModeOpen && (
                  <div className="guided-helper-box" role="region" aria-label="Guided Palpation Assistant">
                    <h4 className="guided-helper-title">
                      3-Step Veterinary Palpation Assistant
                    </h4>
                    <p className="guided-helper-desc">
                      Answer how your dog looks and feels right now. We will map your answers
                      directly to the WSAVA scale:
                    </p>

                    <div className="guided-question">
                      <label className="guided-question-label">
                        1. Feel along the ribcage: How easily can you feel the ribs?
                      </label>
                      <select
                        value={guidedRibs}
                        onChange={(e) => setGuidedRibs(e.target.value)}
                        className="form-select form-select-sm"
                      >
                        <option value="prominent">Prominently protruding / sharp; zero fat padding (BCS 1–2)</option>
                        <option value="lean_minimal">Easily felt with minimal fat cover (BCS 3–4)</option>
                        <option value="easily_felt">Easily palpable without pressure, thin fat layer (BCS 5 - Ideal)</option>
                        <option value="slight_pressure">Palpable with mild/slight pressure (BCS 6)</option>
                        <option value="firm_pressure">Difficult to feel; requires firm pressure (BCS 7)</option>
                        <option value="impossible">Cannot feel ribs under heavy fat padding (BCS 8–9)</option>
                      </select>
                    </div>

                    <div className="guided-question">
                      <label className="guided-question-label">
                        2. Look down from above: Is a waistline visible behind the ribs?
                      </label>
                      <select
                        value={guidedWaist}
                        onChange={(e) => setGuidedWaist(e.target.value)}
                        className="form-select form-select-sm"
                      >
                        <option value="severe_hourglass">Severe, sharp hourglass indentation (BCS 1–3)</option>
                        <option value="clear_waist">Distinct, well-proportioned waist clearly visible (BCS 4–5 - Ideal)</option>
                        <option value="softened">Waist is visible but softened / less distinct (BCS 6)</option>
                        <option value="absent">Waist is absent; back line is broad and flat (BCS 7–8)</option>
                        <option value="bulging">Waist bulges outward like a barrel (BCS 9)</option>
                      </select>
                    </div>

                    <div className="guided-question">
                      <label className="guided-question-label">
                        3. Look from the side: Does the abdomen tuck up towards the hind legs?
                      </label>
                      <select
                        value={guidedTuck}
                        onChange={(e) => setGuidedTuck(e.target.value)}
                        className="form-select form-select-sm"
                      >
                        <option value="extreme_tuck">Severe, hollow upward tuck (BCS 1–3)</option>
                        <option value="gentle_tuck">Smooth, clear upward tuck behind ribs (BCS 4–5 - Ideal)</option>
                        <option value="reduced">Abdominal tuck is slight or reduced (BCS 6)</option>
                        <option value="flat">No tuck; stomach line runs flat (BCS 7)</option>
                        <option value="pendulous">Abdomen hangs or sags pendulously (BCS 8–9)</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-full"
                      onClick={applyGuidedBCS}
                    >
                      Apply Guided Observations
                    </button>
                  </div>
                )}

                {/* Score Button Selector Grid */}
                <div className="bcs-buttons-grid" role="radiogroup" aria-label="WSAVA Body Condition Score 1 through 9">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => {
                    const isSelected = score === bcsScore;
                    let toneClass = "bcs-btn-under";
                    if (score === 4 || score === 5) toneClass = "bcs-btn-ideal";
                    else if (score >= 6) toneClass = "bcs-btn-over";

                    return (
                      <button
                        key={score}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        className={`bcs-btn ${toneClass} ${isSelected ? "bcs-btn-selected" : ""}`}
                        onClick={() => handleSelectBCS(score)}
                      >
                        <span className="bcs-btn-score">{score}</span>
                        <span className="bcs-btn-tag">
                          {score === 5 ? "Ideal" : score < 5 ? "Under" : score <= 7 ? "Over" : "Obese"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Real-Time Selected BCS Anatomy Card */}
                <div className="bcs-detail-preview">
                  <div className="bcs-preview-header">
                    <span className="bcs-preview-score">
                      Score {selectedBcsDetails.score} / 9:
                    </span>
                    <strong className="bcs-preview-label">{selectedBcsDetails.label}</strong>
                  </div>
                  <p className="bcs-preview-desc">{selectedBcsDetails.description}</p>
                  <div className="bcs-preview-cues">
                    <div className="cue-item">
                      <strong>Ribs:</strong> {selectedBcsDetails.ribPalpation}
                    </div>
                    <div className="cue-item">
                      <strong>Waist (Overhead):</strong> {selectedBcsDetails.waistView}
                    </div>
                    <div className="cue-item">
                      <strong>Tuck (Side):</strong> {selectedBcsDetails.abdominalTuck}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit & Reset Bar */}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Calculate Assessment
                </button>
              </div>
            </form>
          </div>

          {/* Results Output Column */}
          <div className="calculator-results-col">
            <ResultsDisplay result={result} onReset={handleReset} />
          </div>
        </div>
      </div>
    </section>
  );
};
