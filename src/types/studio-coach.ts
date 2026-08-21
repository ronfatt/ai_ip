import { TransformationKey } from './database';

export type ContentIntent =
  | 'authority_breakdown'
  | 'contrarian_view'
  | 'case_autopsy'
  | 'checklist_audit'
  | 'unspoken_frustration'
  | 'behind_the_scenes'
  | 'blind_spot_warning'
  | 'offer_invitation';

export interface IntentConfig {
  id: ContentIntent;
  title: string;
  titleZh: string;
  transformation: TransformationKey;
  badgeColor: string;
  description: string;
  defaultFormula: string;
}

export type FormatDuration = '30s' | '60s' | '90s' | 'deep_dive';

export type TonePreset = 'direct_sharp' | 'calm_strategic' | 'diagnostic_challenger';

export type AudiencePreset = 'established_founders' | 'consultants_coaches' | 'senior_specialists';

export interface HookOption {
  id: string;
  text: string;
  score: number;
  style: string;
  reasonZh: string;
}

export interface ScriptBlock {
  id: string;
  timestampRange: string;
  stageName: string;
  content: string;
  screenGuidance: string;
}

export interface ScriptDraft {
  id: string;
  topic: string;
  intent: ContentIntent;
  transformation: TransformationKey;
  formatDuration: FormatDuration;
  tone: TonePreset;
  audience: AudiencePreset;
  readinessScore: number;
  brandFitScore: number;
  similarityAlert?: string;
  hookOptions: HookOption[];
  selectedHookId: string;
  structuredAngle: string;
  blocks: ScriptBlock[];
  deliveryCoach: {
    pace: string;
    energy: string;
    pauses: string;
    posture: string;
  };
  shotPlan: string[];
  bRollIdeas: string[];
  thumbnailTitles: string[];
  selectedThumbnailIndex: number;
  captionText: string;
  createdAt: string;
}

export interface RepurposedChannel {
  platform: string;
  content: string;
}

export interface RepurposedContent {
  linkedin: RepurposedChannel;
  xiaohongshu: RepurposedChannel;
  wechatArticle: RepurposedChannel;
  newsletter: RepurposedChannel;
  podcastOutline: RepurposedChannel;
  communityPrompt: RepurposedChannel;
  salesAngle: RepurposedChannel;
}

export interface SeriesDay {
  dayNumber: number;
  title: string;
  transformation: TransformationKey;
  focus: string;
}

export interface SeriesCampaign {
  campaignTitle: string;
  themeZh: string;
  days: SeriesDay[];
}

export interface IdeaCard {
  id: string;
  topic: string;
  intent: ContentIntent;
  transformation: TransformationKey;
  matchScore: number;
  reasonZh: string;
  hookSample: string;
}

export type CoachMode = 'Strategy' | 'Content' | 'Business' | 'Camera' | 'Positioning' | 'daily_strategy';

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
}
