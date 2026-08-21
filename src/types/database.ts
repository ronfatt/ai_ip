export type UserRole =
  | 'Consultant'
  | 'Coach'
  | 'Educator'
  | 'Creator'
  | 'Business Owner'
  | 'Sales Professional'
  | 'Freelancer'
  | 'Professional Service'
  | 'Other';

export type TransformationKey = 'LU' | 'QUAN' | 'KE' | 'JI';
export type PlanTier = 'free' | 'pro' | 'elite';

export interface IPScores {
  authority: number; // 0-100 (QUAN)
  trust: number;     // 0-100 (KE)
  attraction: number;// 0-100 (LU)
  expression: number;// 0-100 (Clarity/Delivery)
  monetization: number; // 0-100 (Pricing Power/Offer)
}

export interface TransformationDetail {
  key: TransformationKey;
  chineseName?: string;
  chineseChar?: string;
  pinyin?: string;
  businessTitle?: string;
  nameEn?: string;
  themeColor?: string;
  badgeBg?: string;
  borderColor?: string;
  glowColor?: string;
  iconName?: string;
  summary?: string;
  strategicInsight?: string;
  recommendedContent?: string[];
  avoidances?: string[];
  suggestedCTAs?: string[];
  samplePrompt?: string;
  score?: number;
  definition?: string;
  purpose?: string;
  bestContentFormats?: string[];
  recommendedHookFormula?: string;
  avoidPitfall?: string;
  distributionRatio?: number; // e.g. 30%
}

export interface IPArchetype {
  id: string;
  name: string;
  titleZh: string;
  tagline: string;
  description: string;
  naturalRole: string;
  audiencePerception: string;
  growthLever: string;
  potentialBlindSpot: string;
  recommendedFormats: string[];
}

export interface BirthProfile {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  gender?: 'male' | 'female' | 'other';
  calendarType?: 'solar' | 'lunar';
}

export interface TestAnswers {
  name?: string;
  birthDate?: string;
  birthTime?: string;
  birthLocation?: string;
  role?: string;
  challenges?: string[];
  primaryGoal?: string;
  businessModels?: string[];
  contentFrequency?: string;
  platforms?: string[];
  birthProfile?: BirthProfile;
  currentRole?: UserRole;
  currentChallenges?: string[];
  businessGoals?: string[];
  communicationPrefs?: {
    analyticalVsEmotional?: number;
    directVsGentle?: number;
    structuredVsSpontaneous?: number;
    teachingVsStorytelling?: number;
    expertVsLifestyle?: number;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  tier: 'free' | 'snapshot' | 'pro' | 'elite';
  momentumScore: number;
  momentumChange: number; // e.g. +6
  scores: IPScores;
  primaryArchetype: IPArchetype;
  secondaryArchetype: IPArchetype;
  supportingArchetype?: IPArchetype;
  positioningStatement: string;
  brandVoice: string[];
  cameraPersonality: {
    recommended: string[];
    avoid: string[];
  };
  audience: {
    primary: string;
    secondary: string;
    avoid: string;
  };
}

export interface ContentPillar {
  id: string;
  title: string;
  chineseTitle: string;
  description: string;
  ratioPercent: number; // e.g. 35
  transformation: TransformationKey;
  examples: string[];
}

export interface GeneratedScript {
  id: string;
  topic: string;
  contentType: 'Opinion' | 'Knowledge' | 'Story' | 'Case Study' | 'Sales' | 'Educational' | 'Behind The Scenes';
  transformation: TransformationKey;
  hookOptions: { text: string; score: number; style: string }[];
  coreIdea: string;
  script30s: string;
  script60s: string;
  cta: string;
  caption: string;
  thumbnailTitle: string;
  bRollIdeas: string[];
  shotSuggestions: string[];
  createdAt: string;
  saved?: boolean;
}

export interface SavedScript {
  id: string;
  topic: string;
  contentType: string;
  transformation: TransformationKey;
  hookOptions: { text: string; score: number; style: string }[];
  coreIdea: string;
  script30s: string;
  script60s: string;
  cta: string;
  caption: string;
  thumbnailTitle: string;
  bRollIdeas: string[];
  shotSuggestions: string[];
  createdAt: string;
  saved?: boolean;
}

export interface OfferTier {
  id: string;
  tier: 'Free' | 'Entry' | 'Core' | 'Premium' | 'Continuity';
  name: string;
  priceFormatted: string;
  priceNumeric: number;
  promise: string;
  audience: string;
  deliverables: string[];
  cta: string;
  conversionFunnelStage: string;
}

export interface BusinessOffer {
  id: string;
  tier: 'Free' | 'Entry' | 'Core' | 'Premium' | 'Continuity';
  name: string;
  priceFormatted: string;
  priceNumeric: number;
  promise: string;
  audience: string;
  deliverables: string[];
  cta: string;
  conversionFunnelStage: string;
}

export interface AcademyModule {
  id: string;
  moduleNumber: string; // "01", "02"
  title: string;
  subtitle: string;
  durationMinutes: number;
  completed: boolean;
  videoPlaceholderUrl?: string;
  keyInsights: string[];
  lessonContent: string;
  workbookPrompts: {
    id: string;
    question: string;
    placeholder: string;
    userAnswer?: string;
  }[];
  actionTask: string;
}

export interface CoachMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  contextRef?: string;
  actions?: {
    label: string;
    linkUrl: string;
  }[];
}

export interface BusinessMetrics {
  leads: number;
  consultations: number;
  sales: number;
  revenueRM: number;
  contentPublishedCount: number;
  videosCreatedCount: number;
  targetContentCount: number;
  transformationMix: {
    authority: number; // percent
    trust: number;
    attraction: number;
    breakthrough: number;
  };
}
