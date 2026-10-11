export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  title: string;
  description: string;
  primaryKeyword: string;
  url: string;
  slug: string;
  locale: string;
  author: string;
  themeColor: string;
  socialImage: string;
}

export const siteConfig: SiteConfig = {
  name: "CALTER",
  shortName: "CALTER",
  tagline: "Evidence-Based Canine Weight & Body Condition Assessment",
  title: "Dog Weight BMI Calculator | Canine Body Condition & Ideal Weight Assessment",
  description:
    "Free, evidence-based dog weight calculator and canine body condition assessment tool. Estimate your dog's ideal weight using WSAVA 9-point BCS guidelines and breed reference benchmarks.",
  primaryKeyword: "dog weight bmi calculator",
  // Single central URL configuration - change this single variable when deploying to a custom domain
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://calter-dog-weight-bmi-calculator.vercel.app",
  slug: "/dog-weight-bmi-calculator/",
  locale: "en_US",
  author: "CALTER Canine Health Tools",
  themeColor: "#0d5c52",
  socialImage: "/og-image.png",
};
