import {
  FullStudioResult,
  ContentIntent,
  ContentFormat,
  VideoDuration,
  ToneStyle,
  ScriptBlock,
  RepurposedEcosystem,
  DaySeriesItem,
  IdeaVaultItem,
  StructuredCoachResponse,
  CoachMode
} from '@/types/studio-coach';
import { TransformationKey, UserProfile } from '@/types/database';

export const DEFAULT_IDEA_VAULT: IdeaVaultItem[] = [
  {
    id: 'vault_1',
    topic: 'Why deep expertise can secretly hurt your short-form content hooks',
    tag: 'Opinion',
    transformation: 'JI',
    createdAt: '2026-08-20'
  },
  {
    id: 'vault_2',
    topic: 'Three types of high-paying clients I would immediately refuse to work with',
    tag: 'Case',
    transformation: 'QUAN',
    createdAt: '2026-08-19'
  },
  {
    id: 'vault_3',
    topic: 'Behind every RM10k retainer is a founder who mastered boundary setting',
    tag: 'Story',
    transformation: 'KE',
    createdAt: '2026-08-18'
  },
  {
    id: 'vault_4',
    topic: 'The 1-sentence positioning test: Can a 12-year old understand your value?',
    tag: 'Education',
    transformation: 'LU',
    createdAt: '2026-08-17'
  }
];

export function detectStrategyFromTopic(topic: string): {
  recommendedTrans: TransformationKey;
  recommendedIntent: ContentIntent;
  confidence: number;
  reason: string;
  alternatives: { trans: TransformationKey; score: number }[];
} {
  const lower = topic.toLowerCase();

  if (lower.includes('stop') || lower.includes('never') || lower.includes('mistake') || lower.includes('fail') || lower.includes('copying') || lower.includes('rule')) {
    return {
      recommendedTrans: 'QUAN',
      recommendedIntent: 'Build Authority',
      confidence: 88,
      reason: 'This topic is strongest when positioned as an expert judgment and boundary-setting framework rather than a general educational post.',
      alternatives: [
        { trans: 'KE', score: 72 },
        { trans: 'JI', score: 65 }
      ]
    };
  }

  if (lower.includes('case') || lower.includes('client') || lower.includes('how we') || lower.includes('result') || lower.includes('pipeline') || lower.includes('from 0')) {
    return {
      recommendedTrans: 'KE',
      recommendedIntent: 'Build Trust',
      confidence: 92,
      reason: 'This topic demonstrates proven transformation and forensic evidence, maximizing institutional trust and credibility.',
      alternatives: [
        { trans: 'QUAN', score: 76 },
        { trans: 'LU', score: 60 }
      ]
    };
  }

  if (lower.includes('why') || lower.includes('struggle') || lower.includes('trap') || lower.includes('feel') || lower.includes('frustrated')) {
    return {
      recommendedTrans: 'LU',
      recommendedIntent: 'Attract Attention',
      confidence: 84,
      reason: 'This topic taps into unspoken founder frustrations, making ideal clients feel seen and understood before you introduce solutions.',
      alternatives: [
        { trans: 'JI', score: 78 },
        { trans: 'QUAN', score: 64 }
      ]
    };
  }

  return {
    recommendedTrans: 'JI',
    recommendedIntent: 'Challenge Assumptions',
    confidence: 81,
    reason: 'This topic uncovers hidden cognitive blind spots and converts friction into a breakthrough perspective shift.',
    alternatives: [
      { trans: 'QUAN', score: 74 },
      { trans: 'LU', score: 68 }
    ]
  };
}

export function buildCompleteStudioResult(params: {
  topic: string;
  intent?: ContentIntent;
  transformation?: TransformationKey;
  format?: ContentFormat;
  duration?: VideoDuration;
  tone?: ToneStyle;
  audience?: string;
  userProfile: UserProfile;
}): FullStudioResult {
  const {
    topic,
    userProfile,
    intent = 'Build Authority',
    transformation = 'QUAN',
    format = 'Short Video',
    duration = '45s',
    tone = 'My Brand Voice',
    audience = 'SME Owners & Knowledge-Based Entrepreneurs'
  } = params;

  const cleanTopic = topic.trim() || 'Why most professionals fail at personal branding.';
  const id = `gen_${Date.now()}`;

  // Check similar topic in history simulation
  const isSimilar = cleanTopic.toLowerCase().includes('fail') || cleanTopic.toLowerCase().includes('influencer');

  const strategicAngle =
    transformation === 'QUAN'
      ? 'Position the problem as a positioning and standard-setting failure, not a content production failure.'
      : transformation === 'KE'
      ? 'Walk through the diagnostic before-and-after autopsy to prove the methodology.'
      : transformation === 'LU'
      ? 'Resonate with the silent fatigue of copying others before introducing authentic clarity.'
      : 'Deconstruct why high expertise secretly creates content friction and how to simplify it.';

  const primaryHook =
    transformation === 'QUAN'
      ? 'Most professionals don’t have a visibility problem. They have a positioning problem.'
      : transformation === 'KE'
      ? 'Here is the exact diagnostic audit that took an advisory firm from RM1,500 hourly rates to RM18,000 retainers.'
      : transformation === 'LU'
      ? 'You probably don’t need to create more content. You need a clearer reason for people to remember you.'
      : 'Having 15 years of deep domain experience may be the exact reason your content feels too complicated.';

  const hookOptions = [
    {
      id: 'h1',
      text: primaryHook,
      style: 'Direct & Polarizing' as const,
      retentionScore: 94
    },
    {
      id: 'h2',
      text: `If you are selling high-ticket services to ${audience.toLowerCase()}, copying 20-year-old viral influencer trends is costing you clients.`,
      style: 'Diagnostic Question' as const,
      retentionScore: 89
    },
    {
      id: 'h3',
      text: `The single counter-intuitive shift that separates high-status advisors from commodity freelancers.`,
      style: 'Counter-Intuitive' as const,
      retentionScore: 86
    }
  ];

  const coreMessage = `Your audience does not need to hear everything you know. They need a clear reason to associate you with solving one high-value commercial bottleneck.`;

  const scriptBlocks: ScriptBlock[] = [
    {
      id: 'blk_1',
      type: 'HOOK',
      timestamp: '0–3s',
      title: 'Hook & Pattern Interrupt',
      content: primaryHook
    },
    {
      id: 'blk_2',
      type: 'PROBLEM',
      timestamp: '3–12s',
      title: 'Problem & False Consensus',
      content: `Most entrepreneurs think building influence means shouting louder, dancing to trending audio, and posting 5 times a day.
If you sell RM50 products, sure. But if you sell 5-figure advisory or consulting, that immediately destroys your perceived pricing power.`
    },
    {
      id: 'blk_3',
      type: 'INSIGHT',
      timestamp: '12–30s',
      title: 'Diagnostic Insight & Framework',
      content: `Enterprise decision-makers don’t buy noise. They look for 3 specific signals:
1. Deep Diagnostic Precision: Can you pinpoint their bottleneck in 30 seconds?
2. Methodological Restraint: Do you have a structured framework, or are you just guessing?
3. Unshakable Conviction: Do you hold your ground on standards?`
    },
    {
      id: 'blk_4',
      type: 'EXAMPLE',
      timestamp: '30–40s',
      title: 'Real-World Proof & Case Analogy',
      content: `When we repositioned a boutique advisory founder from generic "growth consulting" to "IP Brand Intelligence", their consultation requests doubled—while their fees tripled.`
    },
    {
      id: 'blk_5',
      type: 'CTA',
      timestamp: '40–45s',
      title: 'High-Converting Action Trigger',
      content: `Stop copying generic tactics. If you want our complete High-Ticket Positioning Framework, comment "IP" below and I’ll send you the confidential blueprint.`
    }
  ];

  const shotPlan = [
    { number: 'SHOT 01', framing: 'Medium close-up (Eye level)', action: 'Direct eye contact · Deliver hook with quiet conviction', duration: '3s' },
    { number: 'SHOT 02', framing: '45-degree angle desk shot', action: 'Explain problem and why conventional industry advice fails', duration: '9s' },
    { number: 'SHOT 03', framing: 'Cutaway / Over-the-shoulder', action: 'iPad screen draw showing the 3 structural trust pillars', duration: '18s' },
    { number: 'SHOT 04', framing: 'Return to center eye-level', action: 'Final takeaway & unhurried call to action', duration: '15s' }
  ];

  const bRollIdeas = [
    'Overhead desk view drawing a 3-part framework on an iPad Pro in dark mode',
    'Tight close-up of handwritten strategic notes with a fountain pen',
    'Adjusting a podcast microphone in a minimalist, warm-lit studio',
    'Reviewing an IP DNA Radar chart on a MacBook screen with quiet focus',
    'Walking into a modern minimalist office boardroom'
  ];

  const thumbnailTitles = [
    'STOP COPYING INFLUENCERS',
    'YOUR CONTENT ISN’T THE PROBLEM',
    'WHY NOBODY REMEMBERS YOU',
    'POSITIONING > VOLUME',
    'YOU’RE SAYING TOO MUCH'
  ];

  const captions = {
    short: `Most professionals don’t have a visibility problem. They have a positioning problem. 🛑

If you sell 5-figure consulting, trying to look like a viral influencer destroys your pricing power.

Save this video and review your positioning before your next content sprint. 📌

Comment "IP" to get our confidential High-Ticket Positioning Blueprint.`,
    story: `Three years ago, I met a consultant who was publishing 7 videos a day. He was completely exhausted, but his bank account was flat.

When I looked at his content, the problem was obvious: He was copying 20-year-old lifestyle creators. 

High-ticket corporate clients weren’t taking him seriously because his brand looked like entertainment, not expertise.

The moment we stripped away the hype and anchored his natural ${userProfile.primaryArchetype.name} strengths, he closed a RM36k retainer in 3 weeks.

Stop competing on volume. Start competing on structural clarity.

Comment "IP" below for the full framework.`,
    conversion: `Are you tired of publishing content that gets likes but zero qualified inquiries?

As an experienced practitioner, your greatest commercial asset isn’t viral reach—it’s intellectual authority.

In this 45-second breakdown, I share the 3 criteria enterprise decision-makers evaluate before wiring 5-figure retainers.

👉 Comment "IP" below and I’ll send you the complete 5-Step Brand Architecture Dossier.`
  };

  const discoveryKeywords = [
    'Personal Branding Strategy',
    'High-Ticket Positioning',
    'Consulting Pricing Power',
    'Authority Content Engine',
    'Brand Intelligence Blueprint',
    'Executive Thought Leadership'
  ];

  const repurposeEcosystem: RepurposedEcosystem = {
    reelScript: `0-3s: Most professionals don't have a content problem. They have a positioning problem.
3-15s: When you copy viral influencers, high-ticket clients assume you are an amateur.
15-35s: Enterprise decision makers look for 3 things: Diagnostic precision, methodological restraint, and quiet conviction.
35-45s: Comment "IP" to get our private High-Ticket Positioning Model.`,
    facebookPost: `Why most business owners should stop copying social media influencers:

If you sell high-ticket services (RM5k - RM50k), following viral trend advice is secretly repelling your highest-paying clients.

Here is the difference:
• Influencers monetize attention volume.
• Strategists monetize trust density.

When you switch from "trying to be popular" to "being indispensable to a specific decision-maker", your entire business changes.

What is your biggest content bottleneck right now? Drop your thoughts below.`,
    linkedInPost: `A contrarian observation from 10+ years of advisory work:

The most successful consultants rarely have 100k followers. 

What they have instead:
1. Surgical positioning that disqualifies price-shoppers upfront.
2. Proprietary frameworks that make complex problems look simple.
3. Unshakable boundary setting on pricing and scope.

Stop optimizing for vanity views. Optimize for inbound trust.

#PersonalBranding #ConsultingStrategy #ExecutiveLeadership #BrandPositioning`,
    carouselSlides: [
      { slideNumber: 1, title: 'Why Most Professionals Fail at Personal Branding', body: 'The invisible mistake keeping 6-figure practitioners commoditized.' },
      { slideNumber: 2, title: 'Mistake #1: The Generalist Trap', body: 'Trying to help everyone with everything makes you interchangeable.' },
      { slideNumber: 3, title: 'Mistake #2: Copying Influencer Playbooks', body: 'Viral hype attracts spectators; structured depth attracts buyers.' },
      { slideNumber: 4, title: 'The 3 Trust Signals of High-Ticket Brands', body: '1. Diagnostic Precision\n2. Methodological Restraint\n3. Quiet Conviction' },
      { slideNumber: 5, title: 'The Next Step', body: 'Save this guide and comment "IP" for the complete Brand Intelligence Blueprint.' }
    ],
    threeStories: [
      { storyNumber: 1, hook: 'Quick question for consultants: Are you still pricing by the hour?', action: 'Poll: Yes / No' },
      { storyNumber: 2, hook: 'Here is why value pricing requires structured brand positioning first...', action: 'Slider: 100% Agree' },
      { storyNumber: 3, hook: 'I just broke down the full 3-step model in today’s new video. DM "IP" to watch.', action: 'Link Sticker' }
    ],
    emailNewsletter: {
      subject: 'Why your expertise might be hurting your content...',
      preview: 'The difference between talking like a practitioner vs an advisor.',
      body: `Hey ${userProfile.name.split(' ')[0]},

Most smart professionals make one fatal mistake when creating content:

They try to teach everything they know in one post.

The result? The content feels dense, overwhelming, and difficult for busy clients to act upon.

High-ticket buyers don't hire you because you gave them a 40-page textbook. They hire you because you gave them a 1-page diagnostic lens that made their problem crystal clear.

In today's dispatch, I break down the 3 criteria high-value decision-makers evaluate before signing 5-figure retainers.

Read the full breakdown on the blog [link].

Best,
Alex`
    },
    fiveShortHooks: [
      'Stop copying 20-year-old influencers if you sell B2B consulting.',
      'Why having 15 years experience is secretly ruining your video hooks.',
      'You don’t have a visibility problem. You have a positioning problem.',
      'Three things I would never recommend after a decade in consulting.',
      'The single reason 6-figure founders fail to scale inbound authority.'
    ]
  };

  const sevenDaySeries: DaySeriesItem[] = [
    { dayNumber: 1, dayName: 'Day 1 (Monday)', transformation: 'QUAN', theme: 'Core Opinion & Contrarian Stance', hookIdea: 'Why business owners must stop copying generic creators.', format: '60s Sit-down Video' },
    { dayNumber: 2, dayName: 'Day 2 (Tuesday)', transformation: 'JI', theme: 'Common Industry Mistake & Reframe', hookIdea: 'The expensive mistake I made trying to serve everyone in year 2.', format: 'Narrative Short' },
    { dayNumber: 3, dayName: 'Day 3 (Wednesday)', transformation: 'KE', theme: 'Client Case Study & Autopsy', hookIdea: 'How we restructured a RM1.5k hourly rate into an RM18k retainer.', format: 'Client Breakdown' },
    { dayNumber: 4, dayName: 'Day 4 (Thursday)', transformation: 'LU', theme: 'Behind The Scenes & Resonance', hookIdea: 'What my private weekly advisory review actually looks like.', format: 'BTS Vlog Reel' },
    { dayNumber: 5, dayName: 'Day 5 (Friday)', transformation: 'QUAN', theme: 'Educational Framework Breakdown', hookIdea: 'The 5-Position Brand Radar: How to price with conviction.', format: 'Whiteboard Tutorial' },
    { dayNumber: 6, dayName: 'Day 6 (Saturday)', transformation: 'JI', theme: 'Contrarian Viewpoint & Blind Spot', hookIdea: 'Why more knowledge won’t fix your client acquisition leaks.', format: 'Direct Perspective' },
    { dayNumber: 7, dayName: 'Day 7 (Sunday)', transformation: 'KE', theme: 'Offer Showcase & Clear CTA', hookIdea: 'How to work with us on your 2026 Brand Intelligence Blueprint.', format: 'Offer Post & Link' }
  ];

  return {
    id,
    topic: cleanTopic,
    intent,
    transformation,
    format,
    duration,
    tone,
    audience,
    confidenceScore: 88,
    alternativeStrategies: [
      { trans: 'KE', score: 72 },
      { trans: 'JI', score: 65 }
    ],
    strategicAngle,
    primaryHook,
    hookOptions,
    coreMessage,
    scriptBlocks,
    deliveryCoach: {
      delivery: 'Calm, measured, and in total control. Do not rush words.',
      pace: 'Medium-slow (approx 120-130 words per minute).',
      eyeContact: 'Direct into the camera lens with unwavering focus.',
      pause: 'Hold a 1.5-second deliberate pause after the opening hook.',
      avoid: 'Avoid over-explaining technical jargon before establishing emotional context.',
      bodyLanguage: 'Minimal, deliberate hand movements. Keep shoulders relaxed and square.',
      camera: 'Medium close-up framing with clean depth of field and soft side lighting.'
    },
    shotPlan,
    bRollIdeas,
    visualDirection: {
      recommended: [
        'Clean, minimalist studio background with walnut or charcoal tones',
        'Neutral color palette (black, dark navy, charcoal, crisp white)',
        'Medium-contrast key lighting with subtle warm edge separation',
        'Professional broadcast mic visible on desk (e.g. Shure SM7B)'
      ],
      avoid: [
        'Fast-paced flashing text transitions and auto-bouncing green subtitles',
        'Loud viral meme audio tracks or dramatic Hollywood soundtrack swells',
        'Exaggerated theatrical facial expressions or pointing at floating text bubbles'
      ]
    },
    thumbnailTitles,
    selectedThumbnail: thumbnailTitles[0],
    captions,
    selectedCaptionStyle: 'short',
    ctaChoice: 'Comment "IP"',
    discoveryKeywords,
    optionalHashtags: ['#PersonalBranding', '#ConsultingStrategy', '#BrandIntelligence', '#HighTicketSales', '#ThoughtLeadership'],
    repurposeEcosystem,
    sevenDaySeries,
    qualityScore: {
      overall: 86,
      breakdown: {
        hookStrength: 91,
        brandFit: 94,
        audienceRelevance: 87,
        authority: 90,
        clarity: 81,
        ctaStrength: 73
      },
      recommendation: 'Your CTA is currently weaker than your hook. Consider specifying an exact single-word DM trigger like Comment "IP".'
    },
    brandAlignment: {
      percentage: 94,
      matches: [
        'Matches Brand Voice (Direct, Strategic, Calm, Confident)',
        'Aligns with Authority Positioning (QUAN)',
        'Targets SME Owners & Knowledge-Based Entrepreneurs',
        'Reinforces High-Ticket Advisory Offer'
      ],
      potentialIssue: 'The hook is slightly more aggressive than your usual calm tone. You can soften it or keep the polarity.'
    },
    createdAt: new Date().toISOString(),
    status: 'Ready',
    similarTopicWarning: isSimilar
      ? {
          topic: 'Why professionals fail at personal branding',
          daysAgo: 12,
          suggestions: [
            'Use a forensic case study angle instead of general critique',
            'Contrast with a client transformation from last month',
            'Address the specific fear of losing corporate credibility'
          ]
        }
      : undefined
  };
}

export function generateTwelveSmartIdeas(userProfile: UserProfile): {
  trans: TransformationKey;
  label: string;
  ideas: { topic: string; angle: string }[];
}[] {
  return [
    {
      trans: 'LU',
      label: 'LU — Attraction & Resonance',
      ideas: [
        { topic: '3 things high-paying clients secretly wish consultants explained better', angle: 'Empathic insight into unspoken buyer frustration' },
        { topic: 'Why working 14 hours a day is a positioning failure, not a work ethic issue', angle: 'Validates exhausted founders with strategic reframe' },
        { topic: 'The quiet reason introverted experts often build the most loyal audiences', angle: 'Celebrates depth over loud extroverted hype' }
      ]
    },
    {
      trans: 'QUAN',
      label: 'QUAN — Authority & Conviction',
      ideas: [
        { topic: 'Three things I would never recommend after 12 years in brand consulting', angle: 'High-conviction boundary setting and anti-trends' },
        { topic: 'Why charging by the hour is mathematically broken for elite advisors', angle: 'Definitive mathematical proof of value pricing' },
        { topic: 'The unwritten rules of enterprise deal-making in the AI era', angle: 'Establishes executive category leadership' }
      ]
    },
    {
      trans: 'KE',
      label: 'KE — Trust & Proof',
      ideas: [
        { topic: 'Case Autopsy: How we turned a RM1.5k hourly rate into RM18k retainers', angle: 'Step-by-step diagnostic breakdown with real metrics' },
        { topic: 'The exact 3-step audit I run before accepting any new advisory client', angle: 'Demonstrates surgical process and exclusivity' },
        { topic: 'Behind the scenes: The positioning framework that generated RM84k pipeline', angle: 'Transparent documentation of methodology in action' }
      ]
    },
    {
      trans: 'JI',
      label: 'JI — Breakthrough & Blind Spot',
      ideas: [
        { topic: 'Why the advice everyone repeats about content volume is secretly ruining you', angle: 'Directly challenges consensus and creates breakthrough' },
        { topic: 'The expensive mistake I made trying to serve everyone in year 2', angle: 'High-vulnerability founder lesson that builds magnetic loyalty' },
        { topic: 'Why being too smart is costing you attention and high-ticket clients', angle: 'Reframes intellectual over-complication into simple clarity' }
      ]
    }
  ];
}

export function generateCoachStructuredResponse(query: string, mode: CoachMode, userProfile: UserProfile): StructuredCoachResponse {
  const lower = query.toLowerCase();

  if (lower.includes('/today') || lower.includes('post today') || lower.includes('what to post')) {
    return {
      observation: 'Your content currently over-indexes on Attraction (48%) and underuses Authority (21%).',
      whyItMatters: 'People may enjoy and resonate with your content, but without strong QUAN authority pieces, they may hesitate to wire 5-figure advisory retainers.',
      recommendation: 'Publish one high-conviction expert opinion video directly challenging a common industry misconception today.',
      nextAction: {
        label: 'Generate QUAN Authority Script',
        url: '/studio?trans=QUAN&topic=Why%20most%20businesses%20should%20stop%20copying%20influencer%20marketing',
        transPreset: 'QUAN',
        topicPreset: 'Why most businesses should stop copying influencer marketing'
      }
    };
  }

  if (lower.includes('/week') || lower.includes('weekly review') || lower.includes('review')) {
    return {
      observation: 'You published 4 pieces this week. Three were Attraction-led, one was Trust-led, and zero were Authority-led.',
      whyItMatters: 'Inbound consultation velocity accelerates when you pair high-reach hooks (Lu) with hard standard-setting boundaries (Quan).',
      recommendation: 'Deploy a 7-day balanced series starting with a core contrarian stance on Monday and a case study on Wednesday.',
      nextAction: {
        label: 'Launch 7-Day Series in Studio',
        url: '/studio?mode=series&trans=QUAN',
        transPreset: 'QUAN'
      }
    };
  }

  if (lower.includes('/offer') || lower.includes('sell') || lower.includes('monetiz')) {
    return {
      observation: 'Your Monetization Score is 88, and your Primary Archetype is Strategic Creator.',
      whyItMatters: 'Selling low-ticket RM49 volume courses dilutes your executive positioning and creates heavy customer support drag.',
      recommendation: 'Focus on a 5-tier Offer Ladder anchored by a RM4,800 12-Week Strategic Advisory Sprint, supported by a RM69 tripwire workshop.',
      nextAction: {
        label: 'Configure Offer Ladder in Business Builder',
        url: '/business'
      }
    };
  }

  if (lower.includes('audience') || lower.includes('target') || lower.includes('who to target')) {
    return {
      observation: 'Your Blueprint currently targets Established SME Owners & Knowledge-Based Entrepreneurs.',
      whyItMatters: 'This group has high willingness to pay (RM5k - RM30k) and immediately appreciates structural frameworks over hype.',
      recommendation: 'Filter out spectators by stating your premium fee ranges and non-negotiables in your content.',
      nextAction: {
        label: 'Review Audience Filter in Blueprint',
        url: '/blueprint'
      },
      inlineProfileUpdate: lower.includes('change') || lower.includes('new')
        ? {
            field: 'Target Audience',
            currentValue: 'New Entrepreneurs & Beginners',
            proposedValue: 'Established SME Owners & Knowledge-Based Founders'
          }
        : undefined
    };
  }

  if (lower.includes('camera') || lower.includes('video') || lower.includes('film')) {
    return {
      observation: 'Your Camera Personality is calibrated as "Sit-down Deliberate Analysis with Whiteboard / iPad Notes".',
      whyItMatters: 'Extroverted hyper-acting drains your cognitive battery and looks performative to high-ticket corporate buyers.',
      recommendation: 'Use a clean broadcast mic, sit comfortably upright, and let the quiet weight of your frameworks do the selling.',
      nextAction: {
        label: 'View Camera Directives in Blueprint',
        url: '/blueprint'
      }
    };
  }

  // Default Structured Response
  return {
    observation: `Based on your **${userProfile.primaryArchetype.name}** profile with an Authority score of **${userProfile.scores.authority}**:`,
    whyItMatters: 'Your greatest competitive advantage is diagnostic depth and structural clarity—not internet entertainment.',
    recommendation: `Translate "${query}" into a 3-part framework: Identify the root cause, show the structural flaw in conventional thinking, and provide your proprietary solution.`,
    nextAction: {
      label: 'Build This Content in Studio',
      url: `/studio?topic=${encodeURIComponent(query)}&trans=QUAN`,
      transPreset: 'QUAN',
      topicPreset: query
    }
  };
}
