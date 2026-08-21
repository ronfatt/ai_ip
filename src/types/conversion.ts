// 商业变现与转化系统类型定义

export type EntitlementRole = 'FREE' | 'BLUEPRINT' | 'COURSE' | 'PRO' | 'ELITE';

export interface UserEntitlements {
  has_blueprint: boolean;      // 战略蓝图 (RM299)
  has_course: boolean;         // 《紫微IP定位学》 课程 (RM899)
  has_pro: boolean;            // PRO 会员 (RM99/月)
  has_elite: boolean;          // 商业IP私享陪跑 (RM3,800+)
}

export interface PricingConfig {
  blueprintPrice: number;       // 299
  coursePrice: number;          // 899
  starterBundlePrice: number;   // 999 (蓝图 + 课程)
  proMonthlyPrice: number;      // 99
  proYearlyPrice: number;       // 899
  orderBumpStarterPack: number; // 49
  upsellCourseBundle: number;   // 699
  eliteStartingPrice: number;   // 3800
}

export const DEFAULT_PRICING: PricingConfig = {
  blueprintPrice: 299,
  coursePrice: 899,
  starterBundlePrice: 999,
  proMonthlyPrice: 99,
  proYearlyPrice: 899,
  orderBumpStarterPack: 49,
  upsellCourseBundle: 699,
  eliteStartingPrice: 3800,
};

export interface FunnelEvent {
  id: string;
  name: string;
  timestamp: string;
  userId?: string;
  metadata?: Record<string, any>;
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
