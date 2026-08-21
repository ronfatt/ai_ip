export interface PricingConfig {
  blueprintPrice: number;        // 299
  coursePrice: number;           // 899
  proMonthlyPrice: number;       // 99
  eliteStartingPrice: number;    // 3800
  starterBundlePrice: number;    // 999
  orderBumpStarterPack: number;  // 49
  upsellCourseBundle: number;    // 699
}

export const DEFAULT_PRICING: PricingConfig = {
  blueprintPrice: 299,
  coursePrice: 899,
  proMonthlyPrice: 99,
  eliteStartingPrice: 3800,
  starterBundlePrice: 999,
  orderBumpStarterPack: 49,
  upsellCourseBundle: 699,
};

export type EntitlementRole = 'FREE' | 'BLUEPRINT' | 'COURSE' | 'PRO' | 'ELITE';

export interface UserEntitlements {
  has_blueprint: boolean;
  has_course: boolean;
  has_pro: boolean;
  has_elite: boolean;
}

export interface FunnelEvent {
  id: string;
  name: string;
  timestamp: string;
  userId?: string;
  metadata?: Record<string, any>;
}

export interface FunnelMetricsData {
  visitors: number;           // 10,000
  testStarts: number;         // 3,200
  testCompletions: number;    // 2,480
  reportsViewed: number;      // 1,900
  blueprintCheckouts: number; // 420
  blueprintSales: number;     // 280
  courseSales: number;        // 96
  proUpgrades: number;        // 41
  eliteApplications: number;  // 12
}

export interface EliteApplicationData {
  fullName: string;
  email: string;
  phone: string;
  currentBusiness: string;
  monthlyRevenueRange: string;
  mainChallenge: string;
  currentAudienceSize: string;
  currentOffer: string;
  goalNext90Days: string;
  whyNow: string;
  submittedAt: string;
}
