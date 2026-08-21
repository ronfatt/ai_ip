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

export interface TransformationDetail {
  key: TransformationKey;
  chineseName: string;
  pinyin: string;
  businessTitle: string;
  themeColor: string;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  iconName: string;
  summary: string;
  strategicInsight: string;
  recommendedContent: string[];
  avoidances: string[];
  suggestedCTAs: string[];
  samplePrompt: string;
}

export interface IPScores {
  authority: number; // e.g. 92
  trust: number;     // e.g. 87
  attraction: number; // e.g. 76
  expression: number; // e.g. 81
  monetization: number; // e.g. 88
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
  birthProfile: BirthProfile;
  currentRole: UserRole;
  currentChallenges: string[];
  businessGoals: string[];
  communicationPrefs: {
    analyticalVsEmotional: number; // 0-100 (0=Analytical, 100=Emotional)
    directVsGentle: number;         // 0-100
    structuredVsSpontaneous: number; // 0-100
    teachingVsStorytelling: number;  // 0-100
    expertVsLifestyle: number;      // 0-100
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
