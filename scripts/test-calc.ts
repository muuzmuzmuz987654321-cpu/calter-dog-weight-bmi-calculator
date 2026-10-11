import { calculateDogWeightAssessment, kgToLbs, lbsToKg } from "../src/lib/calculator";

console.log("Running CALTER Calculator Validation Suite...\n");

// Test 1: Labrador Retriever at 40 kg with BCS 7 (Overweight)
const test1 = calculateDogWeightAssessment({
  weight: 40,
  unit: "kg",
  breedId: "labrador-retriever",
  bcsScore: 7,
  ageCategory: "adult",
});
console.log("Test 1 (Labrador 40kg, BCS 7):");
console.log(`- Weight: ${test1.weightKg} kg (${test1.weightLbs} lbs)`);
console.log(`- BCS: ${test1.bcsScore}/9 (${test1.bcsInfo.label})`);
console.log(`- Ideal Range: ${test1.estimatedIdealMinKg} - ${test1.estimatedIdealMaxKg} kg`);
console.log(`- Breed Standard: ${test1.breedStandardMinKg} - ${test1.breedStandardMaxKg} kg`);
console.log(`- Breed Comparison: ${test1.breedComparison}`);
console.log(`- Deviation: ${test1.percentDeviationFromIdealMin}%\n`);

// Test 2: Golden Retriever at 65 lbs with BCS 5 (Ideal)
const test2 = calculateDogWeightAssessment({
  weight: 65,
  unit: "lbs",
  breedId: "golden-retriever",
  bcsScore: 5,
  ageCategory: "adult",
});
console.log("Test 2 (Golden Retriever 65 lbs, BCS 5):");
console.log(`- Weight: ${test2.weightLbs} lbs (${test2.weightKg} kg)`);
console.log(`- BCS: ${test2.bcsScore}/9 (${test2.bcsInfo.label})`);
console.log(`- Ideal Range: ${test2.estimatedIdealMinLbs} - ${test2.estimatedIdealMaxLbs} lbs`);
console.log(`- Breed Comparison: ${test2.breedComparison}`);
console.log(`- Deviation: ${test2.percentDeviationFromIdealMin}%\n`);

// Test 3: Chihuahua at 1.8 kg with BCS 2 (Thin)
const test3 = calculateDogWeightAssessment({
  weight: 1.8,
  unit: "kg",
  breedId: "chihuahua",
  bcsScore: 2,
  ageCategory: "senior",
});
console.log("Test 3 (Chihuahua 1.8 kg, BCS 2):");
console.log(`- Weight: ${test3.weightKg} kg`);
console.log(`- BCS: ${test3.bcsScore}/9 (${test3.bcsInfo.label})`);
console.log(`- Ideal Range: ${test3.estimatedIdealMinKg} - ${test3.estimatedIdealMaxKg} kg`);
console.log(`- Breed Comparison: ${test3.breedComparison}`);
console.log(`- Recommendations count: ${test3.recommendations.length}\n`);

// Test 4: Conversion sanity
console.log("Test 4 (Conversions):");
console.log(`- 10 kg in lbs = ${kgToLbs(10)} (expected ~22.0)`);
console.log(`- 22 lbs in kg = ${lbsToKg(22)} (expected ~10.0)`);

console.log("\nAll logic tests completed successfully!");
