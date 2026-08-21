import {
  UserProfile,
  TransformationDetail,
  ContentPillar,
  BusinessOffer,
  AcademyModule,
  BusinessMetrics,
  GeneratedScript
} from '@/types/database';

export const DEMO_USER_PROFILE: UserProfile = {
  id: 'usr_alextan_2026',
  name: 'Alex Tan',
  email: 'alex.tan@ziwei-ip.io',
  role: 'Consultant',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  tier: 'pro',
  momentumScore: 84,
  momentumChange: 6,
  scores: {
    authority: 92,
    trust: 87,
    attraction: 76,
    expression: 81,
    monetization: 88,
  },
  primaryArchetype: {
    id: 'arch_strategic_creator',
    name: 'Strategic Creator',
    titleZh: '策略型破局者 (Strategic Creator)',
    tagline: 'Build authority through structural insight, frameworks, and sharp clarity.',
    description: 'You naturally build influence through insight, structure, and strategic thinking. You distill complicated problems into clean mental models that earn instant respect from high-value decision-makers.',
    naturalRole: 'Advisor / Educator / Challenger',
    audiencePerception: 'Calm, analytical, decisive, uncompromising on standards',
    growthLever: 'High-density authority breakdowns and contrasting frameworks',
    potentialBlindSpot: 'Over-explaining technical nuances before building emotional rapport',
    recommendedFormats: [
      'Sit-down structured breakdown',
      'Contrasting 2x2 matrix analysis',
      'Whiteboard mental model teardown',
      'Client autopsy case study'
    ],
  },
  secondaryArchetype: {
    id: 'arch_authority_builder',
    name: 'Authority Builder',
    titleZh: '权威建构者 (Authority Builder)',
    tagline: 'Command natural leadership by setting industry standards and rules.',
    description: 'You gain trust not by pleasing everyone, but by demonstrating undeniable competence, high conviction, and structured boundary-setting.',
    naturalRole: 'Industry Standard-Setter / Executive Mentor',
    audiencePerception: 'Authoritative, dependable, seasoned veteran',
    growthLever: 'Behind-the-scenes decision teardowns and anti-trend perspectives',
    potentialBlindSpot: 'Appearing unapproachable to beginners who need initial warmth',
    recommendedFormats: [
      'Opinion-led thought leadership',
      'Industry myth-busting',
      'Executive roundtable interviews'
    ],
  },
  supportingArchetype: {
    id: 'arch_system_architect',
    name: 'System Architect',
    titleZh: '系统架构师 (System Architect)',
    tagline: 'Turn scattered tactics into repeatable monetization engines.',
    description: 'You see underlying patterns where others see chaos, building blueprints that scale effortlessly.',
    naturalRole: 'Methodology Designer / Growth Strategist',
    audiencePerception: 'Rigorous, pragmatic, highly systematized',
    growthLever: 'Process transparency & step-by-step methodology frameworks',
    potentialBlindSpot: 'Spending too much time perfecting the system before launching',
    recommendedFormats: ['SaaS teardowns', 'SOP templates', 'Framework walkthroughs'],
  },
  positioningStatement:
    'I help high-ticket consultants and service founders clarify their authentic positioning using structural brand intelligence so they can command premium fees and attract inbound enterprise clients without copying generic creator tactics.',
  brandVoice: ['Direct', 'Analytical', 'Confident', 'Calm', 'Strategic', 'High-conviction'],
  cameraPersonality: {
    recommended: [
      'Sit-down deliberate analysis with clean audio',
      'Visual breakdown with iPad or whiteboard drawings',
      'Case study autopsy with real before/after metrics',
      'High-conviction direct-to-lens perspective shorts',
      'Unscripted tactical Q&A with elite peers'
    ],
    avoid: [
      'Fast-paced viral trend dancing or meme audio lip-syncing',
      'Hyped exaggerated YouTube facial expressions',
      'Generic motivational platitudes with dramatic cinematic music',
      'Vague lifestyle flexing without actionable business value'
    ],
  },
  audience: {
    primary:
      'Established consultants, coaches, and professional firm owners (RM15k - RM80k/mo) struggling to scale inbound trust.',
    secondary:
      'Senior corporate executives & specialists transitioning into high-ticket advisory and independent thought leadership.',
    avoid:
      'Get-rich-quick opportunists, passive spectators looking for magic overnight tricks without real skill.',
  },
};

export const FOUR_TRANSFORMATIONS: Record<string, TransformationDetail> = {
  LU: {
    key: 'LU',
    chineseName: '禄',
    pinyin: 'Lu',
    businessTitle: 'Attraction & Resonance (引力)',
    themeColor: '#10B981',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    iconName: 'Sparkles',
    summary: 'What naturally draws clients to notice, like, and want to learn from you.',
    strategicInsight:
      'For your profile, Attraction does not come from superficial entertainment. It is triggered when you articulate an unspoken frustration your ideal client feels with surgical precision.',
    recommendedContent: [
      '“Why most high-performers feel stuck despite working 14-hour days”',
      '“The invisible trap keeping 6-figure consultants from hitting 7 figures”',
      '“3 signs your positioning is repelling your highest-paying clients”'
    ],
    avoidances: [
      'Clickbait that fails to deliver depth in the first 10 seconds',
      'Trying to appeal to entry-level beginners who are not your buyer'
    ],
    suggestedCTAs: [
      'Comment "IP" to get my private 5-Step Brand Audit Checklist',
      'Save this framework for your next offer overhaul'
    ],
    samplePrompt: 'Why most professionals fail at personal branding by treating it like an Instagram influencer contest.'
  },
  QUAN: {
    key: 'QUAN',
    chineseName: '权',
    pinyin: 'Quan',
    businessTitle: 'Authority & Conviction (定力与领导力)',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderColor: 'border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.2)',
    iconName: 'ShieldCheck',
    summary: 'Where you establish unquestioned leadership, clear boundaries, and industry standards.',
    strategicInsight:
      'Your Quan energy is built on structural critique. When you explain WHY a conventional industry practice is fundamentally flawed and offer a superior alternative, high-paying clients instantly recognize your caliber.',
    recommendedContent: [
      '“3 things I would never recommend after 12 years of consulting”',
      '“Stop charging by the hour: The structural reason value pricing wins”',
      '“The myth of personal branding as an influencer game”'
    ],
    avoidances: [
      'Hedging your opinions with timid disclaimers like "just my personal 2 cents"',
      'Apologizing for charging premium rates or enforcing client boundaries'
    ],
    suggestedCTAs: [
      'Apply for our next private 12-week advisory cohort (Limited to 5)',
      'Read the full whitepaper on High-Ticket Positioning Models'
    ],
    samplePrompt: 'Three counter-intuitive decisions that separated my top 1% advisory clients from the rest.'
  },
  KE: {
    key: 'KE',
    chineseName: '科',
    pinyin: 'Ke',
    businessTitle: 'Trust & Proof (声誉与信任链)',
    themeColor: '#3B82F6',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.2)',
    iconName: 'Award',
    summary: 'What creates deep institutional trust, undeniable client case studies, and enduring reputation.',
    strategicInsight:
      'Your Ke credibility skyrockets when you show the exact mechanics behind a transformation. Rather than just saying "we doubled their revenue", walk through the diagnostic problem, the friction point, and the positioning lever.',
    recommendedContent: [
      '“Client Case Study: How we restructured a RM2,000 offer into a RM18,000 package”',
      '“The exact diagnostic audit I use before onboarding any new advisory client”',
      '“Behind the scenes of our 2026 methodology sprint”'
    ],
    avoidances: [
      'Fake glowing testimonials without concrete business metrics',
      'Hiding the difficulties or trade-offs involved in real success'
    ],
    suggestedCTAs: [
      'DM me "CASE" to see the full confidential case breakdown',
      'Book a 20-minute Diagnostic Strategy Session'
    ],
    samplePrompt: 'A client case study: What changed when an executive coach pivoted from generic life coaching to CEO Brand Advisory.'
  },
  JI: {
    key: 'JI',
    chineseName: '忌',
    pinyin: 'Ji',
    businessTitle: 'Breakthrough & Blind Spot (盲点转化与破局点)',
    themeColor: '#EC4899',
    badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    borderColor: 'border-pink-500/30',
    glowColor: 'rgba(236, 72, 153, 0.2)',
    iconName: 'Zap',
    summary: 'Where friction, self-doubt, or client misunderstanding arises—and how to convert it into a breakthrough.',
    strategicInsight:
      'In traditional metaphysics, Ji is feared; in Personal Brand Intelligence, Ji is your single highest-converting content trigger. When you openly deconstruct your own struggles, mistakes, or intellectual blind spots, you become magnetic.',
    recommendedContent: [
      '“Your deep expertise may be the exact reason your content feels complicated”',
      '“The expensive mistake I made trying to serve everyone in year 2”',
      '“Why smart people make terrible content creators (and how to fix it)”'
    ],
    avoidances: [
      'Toxic positivity that pretends you never face doubts or positioning friction',
      'Venting emotionally without distilling a constructive framework for the audience'
    ],
    suggestedCTAs: [
      'Take the Free 3-Minute IP DNA Assessment to pinpoint your blind spots',
      'Reply with your biggest content hurdle this week'
    ],
    samplePrompt: 'Why having 15 years of industry experience is secretly ruining your short-form video hooks.'
  }
};

export const INITIAL_CONTENT_PILLARS: ContentPillar[] = [
  {
    id: 'pillar_1',
    title: 'High-Conviction Opinion',
    chineseTitle: '行业针砭与认知差',
    description: 'Challenge industry consensus and articulate what 95% of practitioners get wrong about brand equity.',
    ratioPercent: 30,
    transformation: 'QUAN',
    examples: [
      'Why personal branding is not an aesthetic mood board',
      'The death of generic consultation calls',
      'Why low prices attract high-maintenance clients'
    ]
  },
  {
    id: 'pillar_2',
    title: 'Strategic Frameworks',
    chineseTitle: '方法论与底层模型',
    description: 'Deconstruct complex brand positioning into memorable mental models, 2x2 matrices, and step-by-step systems.',
    ratioPercent: 35,
    transformation: 'LU',
    examples: [
      'The 5-Position Identity Radar',
      'Offer Ladder: Free to RM10k architecture',
      'How to write a positioning sentence that converts'
    ]
  },
  {
    id: 'pillar_3',
    title: 'Diagnostic Case Autopsies',
    chineseTitle: '真实案例与实战复盘',
    description: 'Show real transformations with specific before-and-after positioning breakthroughs and client feedback.',
    ratioPercent: 20,
    transformation: 'KE',
    examples: [
      'Rebranding a boutique accounting partner for tech founders',
      'From 0 inbound to RM45k pipeline in 60 days',
      'How fixing the hook doubled consultation requests'
    ]
  },
  {
    id: 'pillar_4',
    title: 'Vulnerability & Blind Spot Teardown',
    chineseTitle: '认知盲区与真实破局',
    description: 'Humanize your authority by candidly dissecting founder bottlenecks, imposter syndrome, and pivot lessons.',
    ratioPercent: 15,
    transformation: 'JI',
    examples: [
      'The time I lost a RM30k deal by over-explaining',
      'Why being too smart is costing you attention',
      'What I wish I knew before leaving corporate leadership'
    ]
  }
];

export const INITIAL_BUSINESS_OFFERS: BusinessOffer[] = [
  {
    id: 'off_free',
    tier: 'Free',
    name: 'Personal Brand IP DNA Scorecard',
    priceFormatted: 'Free / RM 0',
    priceNumeric: 0,
    promise: 'Pinpoint your primary IP Archetype, 5-Score Brand Momentum, and top growth lever in 3 minutes.',
    audience: 'Broad audience of ambitious creators, consultants, and business owners.',
    deliverables: [
      '5-Dimension Brand Radar Score (Authority, Trust, Attraction, Expression, Monetization)',
      'Primary & Secondary Archetype Diagnostic',
      'Top 3 High-Leverage Strategic Directives'
    ],
    cta: 'Take Free IP Test',
    conversionFunnelStage: 'Top of Funnel (Attraction)'
  },
  {
    id: 'off_entry',
    tier: 'Entry',
    name: 'IP Positioning Sprint Workshop',
    priceFormatted: 'RM 69',
    priceNumeric: 69,
    promise: 'A 90-minute live tactical sprint to draft your 1-Sentence High-Converting Positioning Statement and 4 Content Pillars.',
    audience: 'Action-oriented professionals ready to stop wasting time on generic content.',
    deliverables: [
      '90-Minute Interactive Masterclass Recording',
      'The 2026 Brand Positioning Notion Workspace',
      '20 High-Converting Hook Formulas tailored to your archetype'
    ],
    cta: 'Enroll in Sprint (RM69)',
    conversionFunnelStage: 'Tripwire / Front-end Offer'
  },
  {
    id: 'off_core',
    tier: 'Core',
    name: 'ZIWEI IP Blueprint & Studio Pro',
    priceFormatted: 'RM 499 / Year (or RM 99/mo)',
    priceNumeric: 499,
    promise: 'The complete software suite: Automated AI Content Studio, Four Transformations Engine, and Monthly IP Coaching.',
    audience: 'Active creators, solo consultants, and coaches building consistent inbound pipelines.',
    deliverables: [
      'Full Unlocked 15-Page IP DNA Blueprint',
      'Unlimited AI Content Studio Generations (Scripts, Hooks, Shot lists)',
      'Access to 8-Module Video Academy & Downloadable Workbooks',
      '24/7 Context-Aware AI Coach'
    ],
    cta: 'Upgrade to PRO',
    conversionFunnelStage: 'Core SaaS Revenue'
  },
  {
    id: 'off_premium',
    tier: 'Premium',
    name: '1-on-1 Brand Strategy Advisory (12-Week)',
    priceFormatted: 'RM 4,800',
    priceNumeric: 4800,
    promise: 'End-to-end bespoke positioning, offer packaging, and video production direction with Alex Tan.',
    audience: 'Established founders, medical/legal directors, and senior firm partners demanding maximum discretion and ROI.',
    deliverables: [
      'Deep Diagnostic Birth-Profile & Commercial Matrix Audit',
      'High-Ticket Offer Packaging (RM5k - RM30k pricing models)',
      'Bi-weekly 60-Minute 1-on-1 Strategy Calls',
      'Direct WhatsApp Advisory Access'
    ],
    cta: 'Apply for 1-on-1 Advisory',
    conversionFunnelStage: 'High-Ticket Back-End'
  },
  {
    id: 'off_continuity',
    tier: 'Continuity',
    name: 'IP Mastermind Inner Circle',
    priceFormatted: 'RM 149 / Month',
    priceNumeric: 149,
    promise: 'Monthly peer teardowns, algorithm update briefings, and collaborative creator networking.',
    audience: 'Graduates of Core and Premium programs wanting ongoing community and accountability.',
    deliverables: [
      'Monthly Live Strategy & Script Review Hot Seat',
      'Private High-Value Member Directory',
      'Quarterly In-Person Mastermind Dinners in KL'
    ],
    cta: 'Join Inner Circle',
    conversionFunnelStage: 'Recurring Community Revenue'
  }
];

export const ACADEMY_MODULES: AcademyModule[] = [
  {
    id: 'mod_01',
    moduleNumber: '01',
    title: 'You Are Not Missing Positioning, You Are Missing Self-Knowledge',
    subtitle: '为什么普通人做人设会累，而顶级高手只需放大天性',
    durationMinutes: 18,
    completed: true,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Personal branding is NOT about fabricating an artificial internet persona.',
      'The reason creators burn out is energetic misalignment with their natural strengths.',
      'Zi Wei Dou Shu is the ancient science of structural tendency, repurposed as personal IP intelligence.'
    ],
    lessonContent: `Most people fail at personal branding because they try to force themselves into somebody else's template. They see an energetic, bubbly lifestyle influencer and try to act hyper on camera, even when their natural essence is quiet, intellectual, and strategic.

Within this opening module, we establish the core philosophy of ZIWEI IP:
1. Nature over Construction: You do not build a brand from scratch; you reveal what is already within you.
2. The 5 Resonance Points: Identity, Values, Expertise, Public Perception, and Commercial Value.
3. Clarity eliminates competition: When you operate in your natural archetype, no one can replicate your conviction.`,
    workbookPrompts: [
      {
        id: 'q1_1',
        question: 'What type of content has historically drained your energy the most?',
        placeholder: 'e.g., Trying to dance or do overly energetic vlog edits when I prefer deep breakdowns...',
        userAnswer: 'Short hype videos with trending songs. I felt foolish and disingenuous.'
      },
      {
        id: 'q1_2',
        question: 'When do clients naturally say "That made so much sense!" to you?',
        placeholder: 'e.g., Whenever I draw out the business bottlenecks on a notepad during meetings...',
        userAnswer: 'When I diagram their client acquisition pipeline and point out the single leak.'
      }
    ],
    actionTask: 'Complete your 5-Dimension Nature Audit and commit to dropping 1 synthetic content habit this week.'
  },
  {
    id: 'mod_02',
    moduleNumber: '02',
    title: 'Identity & IP Archetype Mapping',
    subtitle: '解码你的命宫与核心能量原型：战略家、赋能者还是开拓者？',
    durationMinutes: 24,
    completed: true,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Every major leader embodies a distinct IP Archetype: Strategic Creator, Authority Builder, Empathic Healer, or Relentless Pioneer.',
      'Your Primary Archetype dictates your core value proposition; your Secondary Archetype adds flavor and edge.',
      'Mismatching your archetype leads to attracting the wrong clients who demand low prices and high maintenance.'
    ],
    lessonContent: `Your primary IP Archetype defines your gravitational pull. When clients encounter your brand, what is the immediate psychological imprint you leave behind?

- The Strategic Creator: Solves chaotic problems through frameworks and clarity.
- The Authority Builder: Establishes uncompromising industry standards and leadership.
- The Empathic Mentor: Guides transformations through emotional safety and deep understanding.
- The Visionary Disruptor: Challenges conventional rules and breaks stale paradigms.`,
    workbookPrompts: [
      {
        id: 'q2_1',
        question: 'How do you want a potential client to describe you to a peer behind your back?',
        placeholder: 'e.g., "Sharp, direct, cuts straight to the root cause without wasting time"...',
        userAnswer: 'The strategist who redesigned our entire commercial engine in one session.'
      }
    ],
    actionTask: 'Refine your Primary Archetype summary and align your LinkedIn/Social headline to match.'
  },
  {
    id: 'mod_03',
    moduleNumber: '03',
    title: 'Values & Brand Soul: What You Truly Stand For',
    subtitle: '价值观不是墙上的口号，而是你在商业冲突中放弃利益的底线',
    durationMinutes: 20,
    completed: true,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'A personal brand without clear boundaries has no spine.',
      'Strong brands are defined as much by who they repel as who they attract.',
      'Polarity done with elegance creates lifetime loyalty.'
    ],
    lessonContent: `Brand values are tested only when money is on the table. If you say you value quality over speed, do you decline rush clients who offer double pay? When your audience sees you honor your boundaries publicly, trust transitions from transactional to unconditional.`,
    workbookPrompts: [
      {
        id: 'q3_1',
        question: 'What is 1 industry practice you refuse to partake in even if it makes quick money?',
        placeholder: 'e.g., Fake revenue screenshots, countdown timer pressure tactics...',
        userAnswer: 'Fabricated income claims and predatory urgency countdowns.'
      }
    ],
    actionTask: 'Draft your "Anti-Pitch" manifesto: 3 things you will never do in your consulting practice.'
  },
  {
    id: 'mod_04',
    moduleNumber: '04',
    title: 'Professional Positioning: Solving High-Value Problems',
    subtitle: '从“什么都会做”到“只解决价值百万元的具体痛点”',
    durationMinutes: 28,
    completed: false,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Generalists compete on price; specialists set the market terms.',
      'The formula for an irresistible positioning statement: Who + Specific Constraint + Proprietary Vehicle + Desired Reality.',
      'Why narrowing your market by 80% increases your revenue by 300%.'
    ],
    lessonContent: `If you say "I help entrepreneurs grow their business", you are competing with 500,000 other people. If you say "I help B2B boutique consulting partners restructure their RM2k hourly model into RM25k retainers using IP Brand Intelligence", you have virtually zero competitors.`,
    workbookPrompts: [
      {
        id: 'q4_1',
        question: 'Fill in your exact positioning statement draft below:',
        placeholder: 'I help [audience] overcome [struggle] using [method] so they can achieve [result]...',
        userAnswer: ''
      }
    ],
    actionTask: 'Test your new positioning statement with 3 existing trusted clients and gather raw feedback.'
  },
  {
    id: 'mod_05',
    moduleNumber: '05',
    title: 'Public Image & Camera Personality: Unlocking Natural Presence',
    subtitle: '面对镜头不僵硬的秘密：找到属于你的表达场景与镜头语态',
    durationMinutes: 22,
    completed: false,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'You do not need to be a theatrical extrovert to dominate video.',
      'Quiet, thoughtful, high-conviction speakers often achieve far higher retention on business content.',
      'Choose the environment that matches your cognitive flow (Desk, Whiteboard, Walk & Talk, Podcast mic).'
    ],
    lessonContent: `The biggest camera mistake is trying to generate false enthusiasm. If your voice is naturally deep and deliberate, use a quality Shure SM7B mic, sit upright in a minimalist studio, and speak with measured authority. Let the silence between your words carry weight.`,
    workbookPrompts: [
      {
        id: 'q5_1',
        question: 'Which physical setup makes you feel the most confident and focused?',
        placeholder: 'e.g., Sitting at my walnut desk with a podcast microphone and iPad notes...',
        userAnswer: ''
      }
    ],
    actionTask: 'Record a 60-second test video following the "Sit-down deliberate analysis" format without editing.'
  },
  {
    id: 'mod_06',
    moduleNumber: '06',
    title: 'The Four Transformations Content Engine (Lu, Quan, Ke, Ji)',
    subtitle: '四化变现模型：引力、定力、背书与破局的内容组合拳',
    durationMinutes: 32,
    completed: false,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Lu attracts attention through resonance.',
      'Quan anchors respect through conviction.',
      'Ke builds proof through evidence and case studies.',
      'Ji converts skepticism into breakthroughs through vulnerability and blind spot awareness.'
    ],
    lessonContent: `A healthy content ecosystem never relies on one single angle. If you only post Lu (Attraction), you get vanity views without buyers. If you only post Quan (Authority), you intimidate people. If you balance all four transformations across your weekly schedule, your audience naturally flows from awareness to buying.`,
    workbookPrompts: [
      {
        id: 'q6_1',
        question: 'Which transformation have you been neglecting the most over the past 3 months?',
        placeholder: 'e.g., Ke (Trust/Case Studies) or Ji (Vulnerability/Blind spots)...',
        userAnswer: ''
      }
    ],
    actionTask: 'Use the AI Content Studio to generate 1 Lu, 1 Quan, 1 Ke, and 1 Ji script for next week.'
  },
  {
    id: 'mod_07',
    moduleNumber: '07',
    title: 'Monetization & Offer Engineering: From Views to Wire Transfers',
    subtitle: '如何构建你的高客单阶梯产品库（从免费诱饵到 RM8,000 旗舰交付）',
    durationMinutes: 26,
    completed: false,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Attention without an offer ladder is just unpaid entertainment.',
      'Design your Free $\\rightarrow$ Entry $\\rightarrow$ Core $\\rightarrow$ Premium ecosystem before producing 100 videos.',
      'How to position a RM4,800 offer so clients feel they are getting RM50,000 of value.'
    ],
    lessonContent: `Your content exists to pre-sell your worldview. When a potential client completes your video, what is the logical next step? An organized offer ladder gives every segment of your audience an appropriate entry point to exchange value with you.`,
    workbookPrompts: [
      {
        id: 'q7_1',
        question: 'What is the primary transformation your Core or Premium offer promises to deliver?',
        placeholder: 'e.g., Transition from chaotic founder-led delivery to a structured 4-pillar IP system...',
        userAnswer: ''
      }
    ],
    actionTask: 'Open the Business Builder tool and configure all 5 tiers of your Offer Ladder.'
  },
  {
    id: 'mod_08',
    moduleNumber: '08',
    title: 'Build Your Ziwei IP 360° Strategy Map & 90-Day Execution',
    subtitle: '从蓝图到实操：90天个人品牌资产落地与自动化获客系统',
    durationMinutes: 30,
    completed: false,
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    keyInsights: [
      'Consistency is not about discipline; it is about having a repeatable system.',
      'The 3-hour weekly creation ritual: Ideate $\\rightarrow$ Generate with Studio $\\rightarrow$ Record $\\rightarrow$ Syndicate.',
      'Measuring what matters: Leads & Revenue over likes and viral metrics.'
    ],
    lessonContent: `In this capstone module, we bring together your Archetype, Brand Voice, Content Pillars, Four Transformations, and Offer Ladder into an airtight 90-Day Execution Map. You will never wake up asking "What should I post today?" again.`,
    workbookPrompts: [
      {
        id: 'q8_1',
        question: 'What day and time will you block out each week for your 3-hour batching ritual?',
        placeholder: 'e.g., Every Monday 9:00 AM - 12:00 PM uninterrupted...',
        userAnswer: ''
      }
    ],
    actionTask: 'Export your complete Brand Blueprint PDF and schedule your first 4 weeks of content.'
  }
];

export const DEMO_BUSINESS_METRICS: BusinessMetrics = {
  leads: 28,
  consultations: 7,
  sales: 3,
  revenueRM: 8400,
  contentPublishedCount: 14,
  videosCreatedCount: 9,
  targetContentCount: 20,
  transformationMix: {
    authority: 38,
    trust: 27,
    attraction: 25,
    breakthrough: 10
  }
};

export const INITIAL_SAVED_SCRIPTS: GeneratedScript[] = [
  {
    id: 'scr_01',
    topic: 'Why business owners should stop copying generic influencers',
    contentType: 'Opinion',
    transformation: 'QUAN',
    hookOptions: [
      {
        text: 'If you have a 7-figure business, copying a 22-year-old lifestyle influencer is costing you clients.',
        score: 96,
        style: 'High-Conviction Polarizing'
      },
      {
        text: 'The fastest way to look cheap in front of enterprise clients is following viral social media advice.',
        score: 91,
        style: 'Direct Warning'
      },
      {
        text: 'Why your 15 years of industry experience is being wasted on generic 10-second TikTok trends.',
        score: 88,
        style: 'Problem Agitation'
      }
    ],
    coreIdea: 'High-ticket buyers judge credibility through restraint, structural insight, and depth—not by how loud or trendy your video looks.',
    script30s: `Most entrepreneurs think personal branding means posting every meal, dancing to trending audio, and shouting at the camera.
If you sell RM500 t-shirts, sure. But if you sell RM20,000 consulting or enterprise advisory, that destroys your perceived value instantly.
Your ideal clients don't buy hype. They buy clarity, conviction, and strategic competence.
Stop trying to be viral. Start being indispensable.
Follow for structured brand intelligence.`,
    script60s: `Here is the painful truth most content coaches will never tell you:
If you are a high-ticket consultant, lawyer, or business founder, trying to look like a viral TikToker makes you look desperate.
When a corporate decision-maker is about to wire RM50,000 for your advice, they are not checking how many dancing videos you published.
They are assessing three specific things:
First: Do you understand the root cause of their bottleneck better than they do?
Second: Do you possess a structured, repeatable methodology, or are you just improvising?
Third: Do you hold your ground with quiet, unshakeable conviction?
Notice that none of these three require you to lip-sync to pop music or use clickbait emojis.
Your personal brand is not an entertainment channel. It is a strategic trust engine.
If you're ready to build influence that converts into high-ticket clients without copying teenagers, comment "IP" and I'll send you our complete Brand Intelligence Blueprint.`,
    cta: 'Comment "IP" below to receive our confidential High-Ticket Positioning Blueprint.',
    caption: `If you have 10+ years of domain expertise, why are you copying 20-year-old viral trends? 🛑

High-value clients don't buy from the loudest person in the room; they buy from the clearest strategist.

In this video, I break down the 3 criteria high-ticket buyers evaluate before wiring 5-figure retainers.

Save this video and review your positioning before your next content sprint. 📌

#PersonalBranding #ConsultingStrategy #BrandIntelligence #HighTicketSales #ZiweiIP #ExecutiveLeadership`,
    thumbnailTitle: 'STOP COPYING INFLUENCERS',
    bRollIdeas: [
      'Slow pan over a sleek laptop showing a clean structural 2x2 framework chart',
      'Over-the-shoulder shot writing notes on an iPad Pro with Apple Pencil',
      'High-contrast shot adjusting a microphone in a clean, modern studio setup'
    ],
    shotSuggestions: [
      '0:00-0:05 - Tight medium close-up, direct eye contact with high conviction',
      '0:06-0:20 - Wide angle at desk, gesturing deliberately to emphasize the 3 trust pillars',
      '0:21-0:45 - Cut to screen capture showing the structural positioning formula',
      '0:46-0:60 - Return to close-up for the final unhurried CTA'
    ],
    createdAt: '2026-08-20T10:15:00Z',
    saved: true
  }
];

export const AI_COACH_KNOWLEDGE_RESPONSES: Record<string, string> = {
  post_today: `Based on your current **Strategic Creator** IP Blueprint and this week's content mix, you are currently at **38% Authority** and **25% Attraction**.

I recommend posting a **KE (Trust & Credibility)** breakdown today to balance your pipeline and drive consultation bookings:

🎯 **Recommended Topic**:
*“Case Study Autopsy: What happened when we repositioned a boutique financial consultant from RM1,500 hourly rates to RM18,000 value-based retainers.”*

💡 **Key Angle**:
Walk through the exact 3 positioning bottlenecks they faced, show the diagnostic framework, and end with an invitation to book a 20-minute Diagnostic Audit.

Would you like me to open the AI Content Studio and generate the 60-second video script and hook options for this topic?`,

  what_to_sell: `Looking at your **Monetization Score of 88** and your Primary Archetype (**Strategic Creator**), your natural sweet spot is high-leverage advisory rather than cheap volume courses.

Here is how your Offer Ladder should be configured:

1. 🆓 **Lead Magnet**: *The 5-Dimension Personal Brand Intelligence Scorecard* (captures qualified consultants).
2. 🚀 **Tripwire (RM69)**: *90-Minute Positioning Sprint Workshop* (converts intent into buying momentum).
3. 💎 **Flagship Core (RM499/yr or RM99/mo)**: *ZIWEI IP Blueprint & AI Studio Access*.
4. 👑 **High-Ticket Advisory (RM4,800)**: *12-Week 1-on-1 Brand Strategy Implementation* (Limit to 5 clients/quarter).

With just 2 new High-Ticket advisory clients and 25 Core members per month, you will generate **RM12,000+ monthly recurring revenue** with minimal delivery strain.`,

  not_converting: `Let's analyze why your content may feel high-view but low-conversion. Looking at your profile's potential blind spot:

⚠️ **Identified Friction Point**: *Over-explaining technical nuances before establishing emotional resonance.*

When you explain every sub-system and jargon upfront:
1. Viewers feel overwhelmed rather than enlightened.
2. They consume the advice intellectually but don't feel the urgent pain of their current bottleneck.
3. Your CTA feels like homework rather than a relief.

🛠️ **Strategic Adjustments for This Week**:
- **Sharpen the Hook**: Start with the cost of inaction (*"This one positioning mistake cost a client RM40k last quarter..."*).
- **Keep the Bridge Simple**: Deliver 1 single takeaway per video rather than 5.
- **Use Direct-Response CTAs**: Prompt for a specific single-word DM (e.g. *Comment "AUDIT"*), rather than asking them to click 3 links.`,

  video_fit: `Given your **Strategic Creator / Authority Builder** archetype, you should avoid hype-heavy, fast-cut editing styles.

Here is your ideal Video Setup:
- **Format**: Sit-down deliberate analysis (Desk or Studio Armchair).
- **Visual Aid**: iPad Pro screen draw or physical whiteboard framework.
- **Audio Tone**: Measured, unhurried, calm, high-conviction.
- **Duration**: 45 to 75 seconds for short-form, 8 to 12 minutes for YouTube / Deep-dives.

🚫 **Avoid at all costs**:
- Fast TikTok auto-captions bouncing across the screen in neon green.
- Pointing at floating text boxes with pop music.
- Fabricated emotional drama.

Your superpower is *intellectual gravity*. Let your depth do the selling.`,

  ideal_audience: `According to your Brand Blueprint, your highest-ROI audience is:

👔 **Primary Profile**:
- Established B2B Consultants, Agency Founders, Executive Coaches, and Senior Specialists earning RM15k - RM80k/month.
- They have 8+ years of real domain expertise but are exhausted from relying solely on unpredictable word-of-mouth.
- They are willing and able to invest RM3,000 to RM10,000 for structured positioning clarity.

❌ **Audience to Intentionally Repel**:
- Absolute beginners looking for "make money online in 7 days" shortcuts.
- Spectators who argue about price rather than implementation speed.`,

  how_to_position: `Based on your **Authority (92)** and **Trust (87)** scores, your positioning formula should be:

*"I help high-ticket service founders clarify their authentic positioning using structural brand intelligence so they can command premium fees and attract inbound enterprise clients without copying generic creator tactics."*

Key pillars to emphasize in every piece of content:
1. **Depth over Volume**: You don't need 100k followers to make RM50k/month.
2. **Methodology over Tricks**: Sustainable influence is engineered, not guessed.
3. **Authentic Nature**: Aligning with your natural archetypal strengths prevents creator burnout.`
};
