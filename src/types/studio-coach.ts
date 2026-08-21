import { TransformationKey } from './database';

export type ContentIntent =
  | 'Attract Attention'
  | 'Build Authority'
  | 'Build Trust'
  | 'Challenge Assumptions'
  | 'Generate Leads'
  | 'Sell an Offer'
  | 'Educate'
  | 'Tell a Story';

export type ContentFormat =
  | 'Short Video'
  | 'Reel / TikTok'
  | 'Talking Head'
  | 'Carousel'
  | 'Facebook Post'
  | 'LinkedIn Post'
  | 'Long Caption'
  | 'Story'
  | 'Email'
  | 'Live Topic'
  | 'YouTube Short'
  | 'YouTube Video';

export type VideoDuration = '15s' | '30s' | '45s' | '60s' | '90s';

export type ToneStyle =
  | 'My Brand Voice'
  | 'Direct'
  | 'Strategic'
  | 'Calm'
  | 'Confident'
  | 'Warm'
  | 'Sharp'
  | 'Provocative'
  | 'Educational'
  | 'Emotional'
  | 'Conversational'
  | 'Premium'
  | 'Humorous';

export interface ScriptBlock {
  id: string;
  type: 'HOOK' | 'PROBLEM' | 'INSIGHT' | 'EXAMPLE' | 'TAKEAWAY' | 'CTA';
  timestamp: string; // e.g. "0–3s"
  title: string;
  content: string;
}

export interface HookVariation {
  id: string;
  text: string;
  style: 'Direct & Polarizing' | 'Diagnostic Question' | 'Counter-Intuitive' | 'Story Opening';
  retentionScore: number;
}

export interface ShotItem {
  number: string; // "SHOT 01"
  framing: string; // "Medium close-up"
  action: string;  // "Direct eye contact · Deliver hook"
  duration: string; // "3s"
}

export interface RepurposedEcosystem {
  reelScript: string;
  facebookPost: string;
  linkedInPost: string;
  carouselSlides: { slideNumber: number; title: string; body: string }[];
  threeStories: { storyNumber: number; hook: string; action: string }[];
  emailNewsletter: { subject: string; preview: string; body: string };
  fiveShortHooks: string[];
}

export interface DaySeriesItem {
  dayNumber: number;
  dayName: string;
  transformation: TransformationKey;
  theme: string;
  hookIdea: string;
  format: string;
}

export interface ContentQualityScore {
  overall: number; // 86
  breakdown: {
    hookStrength: number; // 91
    brandFit: number;      // 94
    audienceRelevance: number; // 87
    authority: number;     // 90
    clarity: number;       // 81
    ctaStrength: number;   // 73
  };
  recommendation: string;
}

export interface FullStudioResult {
  id: string;
  topic: string;
  intent: ContentIntent;
  transformation: TransformationKey;
  format: ContentFormat;
  duration: VideoDuration;
  tone: ToneStyle;
  audience: string;
  confidenceScore: number; // e.g. 88
  alternativeStrategies: { trans: TransformationKey; score: number }[];
  strategicAngle: string;
  primaryHook: string;
  hookOptions: HookVariation[];
  coreMessage: string;
  scriptBlocks: ScriptBlock[];
  deliveryCoach: {
    delivery: string;
    pace: string;
    eyeContact: string;
    pause: string;
    avoid: string;
    bodyLanguage: string;
    camera: string;
  };
  shotPlan: ShotItem[];
  bRollIdeas: string[];
  visualDirection: {
    recommended: string[];
    avoid: string[];
  };
  thumbnailTitles: string[];
  selectedThumbnail: string;
  captions: {
    short: string;
    story: string;
    conversion: string;
  };
  selectedCaptionStyle: 'short' | 'story' | 'conversion';
  ctaChoice: string;
  discoveryKeywords: string[];
  optionalHashtags: string[];
  repurposeEcosystem: RepurposedEcosystem;
  sevenDaySeries: DaySeriesItem[];
  qualityScore: ContentQualityScore;
  brandAlignment: {
    percentage: number;
    matches: string[];
    potentialIssue: string;
  };
  createdAt: string;
  status: 'Draft' | 'Ready' | 'Published' | 'Archived';
  similarTopicWarning?: {
    topic: string;
    daysAgo: number;
    suggestions: string[];
  };
}

export interface IdeaVaultItem {
  id: string;
  topic: string;
  tag: 'Opinion' | 'Story' | 'Case' | 'Sales' | 'Education';
  transformation: TransformationKey;
  createdAt: string;
}

export type CoachMode = 'Strategy' | 'Content' | 'Business' | 'Camera' | 'Positioning';

export interface StructuredCoachResponse {
  observation: string;
  whyItMatters: string;
  recommendation: string;
  nextAction: {
    label: string;
    url: string;
    transPreset?: TransformationKey;
    topicPreset?: string;
  };
  inlineProfileUpdate?: {
    field: string;
    currentValue: string;
    proposedValue: string;
  };
}
