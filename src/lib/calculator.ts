import { DOG_BREEDS, BreedData } from "@/data/breeds";

export type WeightUnit = "kg" | "lbs";

export type AgeCategory = "puppy" | "adult" | "senior";

export interface BCSDefinition {
  score: number;
  label: string;
  category: "underweight" | "ideal" | "overweight" | "obese";
  description: string;
  ribPalpation: string;
  waistView: string;
  abdominalTuck: string;
  fatPercentEstimate: string;
  weightDeviationRange: string;
}

export const WSAVA_BCS_SCALE: Record<number, BCSDefinition> = {
  1: {
    score: 1,
    label: "Severely Emaciated",
    category: "underweight",
    description: "Extremely thin with prominent skeletal structures, muscle wasting, and no palpable body fat.",
    ribPalpation: "Ribs, spine, and pelvic bones easily visible with no fat cover.",
    waistView: "Severe hourglass shape with dramatic skeletal protrusion.",
    abdominalTuck: "Extreme abdominal tuck; abdomen hollowed out.",
    fatPercentEstimate: "< 5% body fat",
    weightDeviationRange: "~35% to 40% below ideal",
  },
  2: {
    score: 2,
    label: "Very Thin",
    category: "underweight",
    description: "Ribs easily visible with no palpable fat cover. Evident loss of muscle mass.",
    ribPalpation: "Ribs and lumbar vertebrae easily visible from a distance.",
    waistView: "Marked hourglass indentation behind ribs.",
    abdominalTuck: "Severe upward tuck behind the ribcage.",
    fatPercentEstimate: "~5% to 10% body fat",
    weightDeviationRange: "~25% to 30% below ideal",
  },
  3: {
    score: 3,
    label: "Thin / Underweight",
    category: "underweight",
    description: "Ribs easily felt and may be visible with negligible subcutaneous fat layer.",
    ribPalpation: "Ribs felt immediately with zero skin pressure; tops of vertebrae visible.",
    waistView: "Obvious waist visible from above.",
    abdominalTuck: "Clear abdominal tuck evident from profile.",
    fatPercentEstimate: "~10% to 15% body fat",
    weightDeviationRange: "~15% to 20% below ideal",
  },
  4: {
    score: 4,
    label: "Lean / Slightly Underweight",
    category: "underweight",
    description: "Ribs easily palpable with minimal fat covering. Waist easily noted from above.",
    ribPalpation: "Ribs easily palpable with very thin fat cover.",
    waistView: "Waist easily seen behind ribs from overhead.",
    abdominalTuck: "Abdominal tuck visible and distinct.",
    fatPercentEstimate: "~15% to 19% body fat",
    weightDeviationRange: "~5% to 10% below ideal",
  },
  5: {
    score: 5,
    label: "Ideal Body Condition",
    category: "ideal",
    description: "Proportional, healthy balance. Ribs easily felt without excess fat cover. Waist and tuck clearly visible.",
    ribPalpation: "Ribs easily palpable with a slight, healthy subcutaneous fat cover.",
    waistView: "Well-proportioned waist clearly visible behind ribs from above.",
    abdominalTuck: "Smooth, natural abdominal tuck visible from side view.",
    fatPercentEstimate: "~15% to 25% body fat (optimal)",
    weightDeviationRange: "0% (Within target ideal weight)",
  },
  6: {
    score: 6,
    label: "Slightly Overweight",
    category: "overweight",
    description: "Ribs palpable with slight excess fat cover. Waist discernible but not prominent.",
    ribPalpation: "Ribs palpable, but requires mild pressure through a light fat blanket.",
    waistView: "Waist is discernible from above, but noticeably softened.",
    abdominalTuck: "Abdominal tuck is present but reduced.",
    fatPercentEstimate: "~25% to 30% body fat",
    weightDeviationRange: "~10% to 15% above ideal",
  },
  7: {
    score: 7,
    label: "Overweight / Heavy",
    category: "overweight",
    description: "Ribs palpable only with firm pressure. Heavy fat cover over back, neck, and tail base.",
    ribPalpation: "Ribs difficult to palpate; covered by thick layer of fat.",
    waistView: "Waist is absent or barely discernible from above.",
    abdominalTuck: "Abdominal tuck is largely absent or rounded.",
    fatPercentEstimate: "~30% to 35% body fat",
    weightDeviationRange: "~20% to 30% above ideal",
  },
  8: {
    score: 8,
    label: "Obese",
    category: "obese",
    description: "Ribs not palpable without heavy force. Thick fat pads on back and tail base. Distended abdomen.",
    ribPalpation: "Ribs not palpable under thick subcutaneous fat layer.",
    waistView: "Waist completely absent; back line is broad and flat.",
    abdominalTuck: "No abdominal tuck; abdomen sags noticeably.",
    fatPercentEstimate: "~35% to 40% body fat",
    weightDeviationRange: "~30% to 40% above ideal",
  },
  9: {
    score: 9,
    label: "Severely Obese",
    category: "obese",
    description: "Massive fat deposits over thorax, spine, neck, and limbs. Pronounced abdominal enlargement.",
    ribPalpation: "Ribs impossible to palpate; dense fat layers across thoracic wall.",
    waistView: "Waistline completely bulging outwards.",
    abdominalTuck: "Abdominal tuck entirely replaced by pendulous fat distention.",
    fatPercentEstimate: "> 40% body fat",
    weightDeviationRange: "> 40% above ideal",
  },
};

export interface AssessmentResult {
  inputWeight: number;
  inputUnit: WeightUnit;
  weightKg: number;
  weightLbs: number;
  breed: BreedData;
  ageCategory: AgeCategory;
  bcsScore: number;
  bcsInfo: BCSDefinition;
  estimatedIdealMinKg: number;
  estimatedIdealMaxKg: number;
  estimatedIdealMinLbs: number;
  estimatedIdealMaxLbs: number;
  breedStandardMinKg: number;
  breedStandardMaxKg: number;
  breedStandardMinLbs: number;
  breedStandardMaxLbs: number;
  percentDeviationFromIdealMin: number;
  percentDeviationFromIdealMax: number;
  breedComparison: "below_breed_standard" | "within_breed_standard" | "above_breed_standard";
  clinicalSummary: string;
  recommendations: string[];
  limitations: string[];
}

export function kgToLbs(kg: number): number {
  return Number((kg * 2.20462).toFixed(1));
}

export function lbsToKg(lbs: number): number {
  return Number((lbs / 2.20462).toFixed(1));
}

export function calculateDogWeightAssessment(params: {
  weight: number;
  unit: WeightUnit;
  breedId: string;
  bcsScore: number;
  ageCategory: AgeCategory;
}): AssessmentResult {
  const { weight, unit, breedId, bcsScore, ageCategory } = params;

  // Validation
  if (isNaN(weight) || weight <= 0) {
    throw new Error("Please enter a valid positive weight greater than zero.");
  }
  if (weight > (unit === "kg" ? 150 : 330)) {
    throw new Error("The entered weight exceeds known biological limits for domestic canines.");
  }
  if (bcsScore < 1 || bcsScore > 9) {
    throw new Error("Body Condition Score must be between 1 and 9.");
  }

  const breed = DOG_BREEDS.find((b) => b.id === breedId) || DOG_BREEDS[2]; // Default to medium mix
  const bcsInfo = WSAVA_BCS_SCALE[bcsScore] || WSAVA_BCS_SCALE[5];

  const weightKg = unit === "kg" ? weight : lbsToKg(weight);
  const weightLbs = unit === "lbs" ? weight : kgToLbs(weight);

  // Ideal weight back-calculation based on WSAVA / AAHA linear body condition model:
  // Each point above 5 represents ~10% to 15% excess weight over ideal.
  // Each point below 5 represents ~10% deficit from ideal.
  let estimatedIdealMinKg: number;
  let estimatedIdealMaxKg: number;

  if (bcsScore === 5) {
    // Already ideal: provide narrow range (+/- 3%) acknowledging healthy daily hydration/digestive variance
    estimatedIdealMinKg = Number((weightKg * 0.97).toFixed(1));
    estimatedIdealMaxKg = Number((weightKg * 1.03).toFixed(1));
  } else if (bcsScore > 5) {
    const pointsAbove = bcsScore - 5;
    // Upper divisor uses 15% per point (lower bound of ideal weight)
    // Lower divisor uses 10% per point (upper bound of ideal weight)
    const factorLower = 1 + pointsAbove * 0.15;
    const factorUpper = 1 + pointsAbove * 0.10;
    estimatedIdealMinKg = Number((weightKg / factorLower).toFixed(1));
    estimatedIdealMaxKg = Number((weightKg / factorUpper).toFixed(1));
  } else {
    // bcsScore < 5
    const pointsBelow = 5 - bcsScore;
    const factor = Math.max(0.5, 1 - pointsBelow * 0.10);
    // Ideal weight was higher than current weight
    const targetBase = weightKg / factor;
    estimatedIdealMinKg = Number((targetBase * 0.96).toFixed(1));
    estimatedIdealMaxKg = Number((targetBase * 1.04).toFixed(1));
  }

  const estimatedIdealMinLbs = kgToLbs(estimatedIdealMinKg);
  const estimatedIdealMaxLbs = kgToLbs(estimatedIdealMaxKg);

  // Percent deviation from mid-range ideal weight
  const midIdealKg = (estimatedIdealMinKg + estimatedIdealMaxKg) / 2;
  const deviationRaw = ((weightKg - midIdealKg) / midIdealKg) * 100;
  const percentDeviationFromIdealMin = Number(deviationRaw.toFixed(1));
  const percentDeviationFromIdealMax = Number(deviationRaw.toFixed(1));

  // Breed Standard Comparison
  let breedComparison: "below_breed_standard" | "within_breed_standard" | "above_breed_standard";
  if (weightKg < breed.minWeightKg) {
    breedComparison = "below_breed_standard";
  } else if (weightKg > breed.maxWeightKg) {
    breedComparison = "above_breed_standard";
  } else {
    breedComparison = "within_breed_standard";
  }

  // Clinical Summary & Actionable Recommendations
  const recommendations: string[] = [];
  const limitations: string[] = [
    "A numerical weight assessment cannot replace veterinary palpation and clinical bloodwork.",
    "Individual frame size within a breed can vary by up to 25% without representing pathology.",
    "Growing puppies (<12 months) and lactating or pregnant dogs require customized developmental growth charts, not static adult formulas.",
    "Heavy musculature (e.g. in working Staffordshire Terriers or Greyhounds) has higher density than fat, requiring veterinary differentiation.",
  ];

  let clinicalSummary = "";

  if (bcsScore === 5) {
    clinicalSummary = `Your dog demonstrates an Ideal Body Condition (BCS 5/9) with a current weight of ${
      unit === "kg" ? `${weightKg} kg` : `${weightLbs} lbs`
    }. Ribs are easily palpable without excess fat, and both a visible waist and abdominal tuck are evident.`;
    recommendations.push("Maintain current daily caloric intake and regular physical exercise routine.");
    recommendations.push("Re-check weight and rib palpability monthly to catch subtle seasonal fluctuations early.");
    recommendations.push("Adjust portions slightly if exercise levels decrease (e.g., during harsh winter months or recovery).");
  } else if (bcsScore === 4) {
    clinicalSummary = `Your dog is in a Lean / Slightly Underweight condition (BCS 4/9). An estimated ideal weight target is approximately ${
      unit === "kg" ? `${estimatedIdealMinKg}–${estimatedIdealMaxKg} kg` : `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs} lbs`
    }.`;
    recommendations.push("In athletic or working breeds (e.g., Sighthounds, Border Collies), BCS 4 may be an acceptable athletic condition upon veterinary agreement.");
    recommendations.push("Review daily caloric density; consider a mild 5–10% increase in balanced food if low energy is observed.");
    recommendations.push("Consult your veterinarian if weight loss occurred without a deliberate change in diet or exercise.");
  } else if (bcsScore <= 3) {
    clinicalSummary = `Your dog is currently Underweight (BCS ${bcsScore}/9: ${bcsInfo.label}). Estimated healthy ideal weight is approximately ${
      unit === "kg" ? `${estimatedIdealMinKg}–${estimatedIdealMaxKg} kg` : `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs} lbs`
    } (~${Math.abs(percentDeviationFromIdealMin)}% below estimated target).`;
    recommendations.push("Schedule a professional veterinary examination to rule out underlying systemic causes (e.g. parasites, dental pain, malabsorption, metabolic conditions).");
    recommendations.push("Do not abruptly overfeed high-fat scraps, which can trigger acute pancreatitis.");
    recommendations.push("Evaluate protein quality and digestive tolerance with your veterinarian.");
  } else if (bcsScore === 6) {
    clinicalSummary = `Your dog is Slightly Overweight (BCS 6/9), approximately 10–15% above estimated ideal body weight (${
      unit === "kg" ? `${estimatedIdealMinKg}–${estimatedIdealMaxKg} kg` : `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs} lbs`
    }).`;
    recommendations.push("Measure all daily meals using an accurate digital kitchen scale or level measuring cup rather than free-pouring.");
    recommendations.push("Account for treats, training rewards, and table scraps, which should never exceed 10% of total daily calories.");
    recommendations.push("Introduce daily 20–30 minute moderate leashed walks to safely increase energy expenditure.");
  } else {
    // bcsScore >= 7
    clinicalSummary = `Your dog is in an Overweight/Obese category (BCS ${bcsScore}/9: ${bcsInfo.label}). Estimated ideal weight is approximately ${
      unit === "kg" ? `${estimatedIdealMinKg}–${estimatedIdealMaxKg} kg` : `${estimatedIdealMinLbs}–${estimatedIdealMaxLbs} lbs`
    } (carrying approximately +${percentDeviationFromIdealMin}% excess weight).`;
    recommendations.push("Partner with your veterinarian to formulate a structured, calorie-controlled weight reduction program.");
    recommendations.push("Excess adiposity secretes pro-inflammatory cytokines that exacerbate canine osteoarthritis, respiratory strain, and cardiovascular load.");
    recommendations.push("Aim for a safe, gradual weight loss rate of 1% to 2% of total body weight per week. Never crash-diet a dog.");
    recommendations.push("Substitute high-calorie biscuits with fresh vet-approved crunchy vegetables like carrot sticks, cucumber slices, or plain green beans.");
  }

  if (ageCategory === "puppy") {
    recommendations.unshift("Note: For puppies under 12 months, weight increases rapidly during skeletal development. Use puppy growth percentiles with your veterinarian rather than adult targets.");
  } else if (ageCategory === "senior") {
    recommendations.push("Senior dog note: Watch for loss of muscle mass (sarcopenia) along the spine, which can mask fat accumulation. Ensure adequate dietary amino acid profile.");
  }

  return {
    inputWeight: weight,
    inputUnit: unit,
    weightKg,
    weightLbs,
    breed,
    ageCategory,
    bcsScore,
    bcsInfo,
    estimatedIdealMinKg,
    estimatedIdealMaxKg,
    estimatedIdealMinLbs,
    estimatedIdealMaxLbs,
    breedStandardMinKg: breed.minWeightKg,
    breedStandardMaxKg: breed.maxWeightKg,
    breedStandardMinLbs: breed.minWeightLbs,
    breedStandardMaxLbs: breed.maxWeightLbs,
    percentDeviationFromIdealMin,
    percentDeviationFromIdealMax,
    breedComparison,
    clinicalSummary,
    recommendations,
    limitations,
  };
}
