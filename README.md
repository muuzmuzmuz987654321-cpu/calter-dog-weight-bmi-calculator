# CALTER — Dog Weight BMI Calculator & Canine Body Condition Tool

> **Brand:** CALTER  
> **Primary Keyword:** dog weight bmi calculator  
> **Scientific Framework:** World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee 9-Point Body Condition Score (BCS) & Canine Morphometrics  
> **Tech Stack:** Next.js (App Router, Static Site Generation / SSG), TypeScript, Vanilla CSS (Design System Tokens)  
> **Deployment Target:** Vercel (Zero-Config)

---

## 🐾 Executive Overview

**CALTER Dog Weight BMI Calculator** is a production-ready, veterinary-grounded web utility engineered to address consumer search queries for canine BMI while upholding strict veterinary science.

Because domestic canines exhibit extreme morphological diversity (ranging from deep-chested Greyhounds and stocky Bulldogs to long-backed Dachshunds), applying human Body Mass Index formulas ($weight / height^2$) to canines is scientifically invalid and clinically dangerous. 

Instead, CALTER integrates:
1. **The WSAVA 9-Point Body Condition Scoring (BCS) Scale** (validated against DEXA scans by Laflamme et al.).
2. **Semi-Quantitative Ideal Weight Back-Calculation**:
   $$\text{Ideal Body Weight (IBW)} = \frac{\text{Current Weight}}{1 + (\text{BCS} - 5) \times 0.10 \text{ to } 0.15}$$
3. **Curated Kennel Club Breed Reference Benchmarks** (AKC / FCI / UKC standards covering 60+ breeds and 5 mixed-breed size categories).
4. **An Interactive 3-Step Guided Palpation Assistant** enabling pet owners to determine their dog's true BCS through tactile and visual cues.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js 18.x or newer (Tested on Node.js v24.15.0)
- npm 9.x or newer

### Installation
```bash
# Clone or navigate to the directory
cd "dog tool site"

# Install dependencies
npm install

# Start development server
npm run dev
# -> Opens http://localhost:3000
```

### Production Build & Verification
```bash
# Generate static build
npm run build

# Start production server
npm run start
```

### Calculation Unit Test Verification
Run the standalone mathematical validation suite:
```bash
npx tsx scripts/test-calc.ts
```

---

## 🌐 Vercel Deployment Guide

This project is optimized for instant, zero-configuration deployment on Vercel.

### Method 1: Deploy with Vercel CLI
```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Deploy directly from the project directory
vercel

# Deploy to production
vercel --prod
```

### Method 2: Deploy via GitHub / GitLab / Bitbucket
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CALTER Dog Weight BMI Calculator"
   ```
2. Push the repository to your GitHub account.
3. In your Vercel Dashboard, click **"Add New Project"** and import the repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Click **"Deploy"**.

### Central Domain Configuration
All canonical URLs, sitemaps, robots.txt, and Open Graph metadata are managed from a single central configuration file:
👉 [`src/config/site.ts`](src/config/site.ts)

When deploying to a custom domain (e.g. `https://calter.org`):
- Add an environment variable in your Vercel project settings:
  ```env
  NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
  ```
- Or update `siteConfig.url` directly in [`src/config/site.ts`](src/config/site.ts).

---

## 📈 Technical SEO & E-E-A-T Architecture

- **Primary H1:** Exactly one semantic `<h1>` targeting *"Dog Weight BMI Calculator"*.
- **Pre-Rendered HTML (SSG):** All 13 educational sections, breed comparison tables, and FAQ content exist in the raw initial HTML output. Web crawlers (Googlebot, Bingbot) index full content without needing JavaScript execution.
- **Dedicated Route & Clean Slugs:** Supports both `/` and `/dog-weight-bmi-calculator/`.
- **Structured Data:** Valid Schema.org `WebApplication` / `SoftwareApplication` and `WebSite` JSON-LD markup.
- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml` via [`src/app/sitemap.ts`](src/app/sitemap.ts).
- **Dynamic Robots.txt:** Configured at `/robots.txt` via [`src/app/robots.ts`](src/app/robots.ts).
- **Social Sharing:** Dynamic OpenGraph image generation via [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).
- **Brand Favicon:** SVG medical cross generated via [`src/app/icon.tsx`](src/app/icon.tsx).
- **Zero Fabrications:** No fake reviews, no fabricated veterinary endorsements, and no synthetic medical ratings.

---

## 🏥 Scientific Methodology & Citations

1. **World Small Animal Veterinary Association (WSAVA):** *Global Nutrition Assessment Guidelines and Canine Body Condition Score Chart (9-Point System).*
2. **American Animal Hospital Association (AAHA):** *Weight Management Guidelines for Dogs and Cats.*
3. **Laflamme, D. P. (1997):** *Development and Validation of a Body Condition Score System for Dogs. Canine Practice, 22(4), 10–15.*
4. **Association for Pet Obesity Prevention (APOP):** *Clinical Survey on Pet Adiposity and Systemic Inflammation.*
5. **American Kennel Club (AKC) & FCI:** *Official Adult Breed Standard Conformation & Weight Specifications.*

---

## 🔒 Privacy & Performance Standards

- **100% Client-Side Calculations:** No personal pet health data is stored, transmitted, or logged.
- **Accessible (WCAG AA):** Full keyboard navigation, visible focus rings, high contrast colors, screen-reader status announcements, and reduced-motion media query support.
- **Print Friendly:** Dedicated `@media print` stylesheet allowing owners to print or export PDF assessments directly for their vet.
