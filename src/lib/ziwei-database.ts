import {
  ZiweiMajorStar,
  ZiweiPalace,
  StemTransformation,
  ZiweiAuxiliaryStar,
  ZiweiClassicPattern
} from '@/types/ziwei-database';

export const ZIWEI_MAJOR_STARS: ZiweiMajorStar[] = [
  {
    id: 'star_ziwei',
    nameZh: '紫微',
    nameEn: 'Zi Wei (The Emperor)',
    pinyin: 'Zǐ Wēi',
    element: 'Earth',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '万星之主 · 帝王星',
    ipArchetype: 'The Sovereign Leader / High-Ticket Industry Standard Setter',
    temperament: 'Dignified, authoritative, strategic, high-status, noble, self-demanding.',
    businessTranslation: {
      corePositioning: 'Natural high-end positioning. Commands premium prices through institutional stature, prestige, and executive presence.',
      naturalAuthorityLever: 'Setting industry standards, creating master-level frameworks, and refusing low-end commodity price wars.',
      monetizationStrength: 'High-Ticket Executive Retainers (RM5,000 - RM50,000) and Closed-Door Masterminds.',
      cameraAndVoiceStyle: 'Measured, unhurried, upright posture, direct eye contact, minimalist high-contrast studio setting.',
      idealAudience: 'CEOs, founders, senior decision-makers who respect stature and demand uncompromised quality.',
      potentialBlindSpot: 'Aloofness, appearing unapproachable to beginners, or relying on status before establishing raw practical utility.',
      signatureContentAngles: [
        '“Why enterprise leaders never compete on price: The anatomy of high-ticket pricing power”',
        '“The unwritten rules of executive decision making in uncertain markets”',
        '“What separates a high-status advisor from an interchangeable freelancer”'
      ],
      sampleHooks: [
        'If you want corporate CEOs to pay you RM30k without blinking, stop acting like a hungry vendor.',
        'The moment you lower your fee to win a deal, you destroy your perceived authority in the buyer’s mind.'
      ],
      recommendedOfferTier: 'Premium 1-on-1 Advisory & Executive Mastermind'
    },
    transformations: {
      canTransformLu: false,
      canTransformQuan: true,
      canTransformKe: true,
      canTransformJi: false,
      transformationNotes: 'Turns into 化权 (Quan) under Ren stem (Supreme Command) and 化科 (Ke) under Yi stem (Academic/Institutional Reputation).'
    },
    palaceAffinity: {
      bestPalaces: ['命宫', '官禄宫', '财帛宫', '迁移宫'],
      challengingPalaces: ['交友宫', '疾厄宫']
    }
  },
  {
    id: 'star_tianji',
    nameZh: '天机',
    nameEn: 'Tian Ji (The Strategist)',
    pinyin: 'Tiān Jī',
    element: 'Wood',
    yinYang: 'Yin',
    category: 'SouthDipper',
    symbolicTitle: '谋略之星 · 智慧之枢',
    ipArchetype: 'The Strategic Architect / Deep Methodologist & Thinker',
    temperament: 'Analytical, agile, detail-oriented, algorithmic, adaptable, intellectual.',
    businessTranslation: {
      corePositioning: 'The brain behind the operation. Distills chaotic market dynamics into elegant 2x2 matrices, SOPs, and actionable blueprints.',
      naturalAuthorityLever: 'Diagnostic teardowns, algorithmic thinking, and structural problem-solving.',
      monetizationStrength: 'Diagnostic Strategy Audits, SaaS tools, and Productized Knowledge Sprints (RM300 - RM3,000).',
      cameraAndVoiceStyle: 'Engaged, articulate, uses visual aids (whiteboard, iPad screen recordings, Notion systems).',
      idealAudience: 'Operators, agency founders, and technical professionals looking for structural efficiency.',
      potentialBlindSpot: 'Analysis paralysis, over-complicating simple concepts, or constantly changing plans before executing.',
      signatureContentAngles: [
        '“The 4-stage diagnostic blueprint I use to identify client revenue bottlenecks”',
        '“Why your business problem is not traffic, but a broken conversion logic”',
        '“SaaS and automation teardown: How to save 20 hours per week”'
      ],
      sampleHooks: [
        'Most people think this is a sales problem. Here is the structural model showing why it’s actually a positioning leak.',
        'Let me map out the 3 logic gates that determine whether your consulting offer scales or stalls.'
      ],
      recommendedOfferTier: 'Productized Blueprint Workshops & Diagnostic Retainers'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: true,
      canTransformJi: true,
      transformationNotes: 'Transforms under Yi (Lu), Bing (Quan), Ding (Ke), and Wu/Ming (Ji). High flexibility.'
    },
    palaceAffinity: {
      bestPalaces: ['命宫', '官禄宫', '迁移宫', '田宅宫'],
      challengingPalaces: ['疾厄宫', '夫妻宫']
    }
  },
  {
    id: 'star_taiyang',
    nameZh: '太阳',
    nameEn: 'Tai Yang (The Luminary)',
    pinyin: 'Tài Yáng',
    element: 'Fire',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '光明之星 · 普照四方',
    ipArchetype: 'The Public Visionary / Global Thought Leader & Evangelist',
    temperament: 'Magnanimous, charismatic, articulate, inspiring, energetic, transparent.',
    businessTranslation: {
      corePositioning: 'Mainstream thought leader and mission-driven pioneer. Radiates visibility, inspiration, and cross-border appeal.',
      naturalAuthorityLever: 'Public speaking, large-scale community mobilization, and inspiring vision narratives.',
      monetizationStrength: 'High-Volume Keynotes, Large Group Cohorts, Media IP, and Strategic Brand Sponsorships.',
      cameraAndVoiceStyle: 'Vibrant, projected vocal resonance, wide open gestures, cinematic lighting, engaging warmth.',
      idealAudience: 'Broad ambitious audience, aspiring founders, international communities seeking clarity and motivation.',
      potentialBlindSpot: 'Burning out by giving away too much for free; failing to build tight monetization back-ends.',
      signatureContentAngles: [
        '“The future of our industry in 2026 and how to position yourself ahead of time”',
        '“Why transparency is the ultimate competitive advantage in the AI era”',
        '“How to build an authentic personal brand with international reach”'
      ],
      sampleHooks: [
        'The era of secretive gatekeeping is over. Here is the transparent roadmap to dominating your niche.',
        'If your message only speaks to people in your city, you are missing 90% of your commercial potential.'
      ],
      recommendedOfferTier: 'Masterclasses, High-Ticket Cohort Summits & Media Licensing'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: false,
      canTransformJi: true,
      transformationNotes: 'Transforms into Lu under Geng stem (Global Outreach) and Ji under Jia stem (Exhaustion/Vision Strain).'
    },
    palaceAffinity: {
      bestPalaces: ['命宫', '官禄宫', '迁移宫', '福德宫'],
      challengingPalaces: ['田宅宫', '疾厄宫']
    }
  },
  {
    id: 'star_wuqu',
    nameZh: '武曲',
    nameEn: 'Wu Qu (The Executive Wealth Builder)',
    pinyin: 'Wǔ Qū',
    element: 'Metal',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '财帛之主 · 刚毅实战星',
    ipArchetype: 'The Pragmatic Closer / Financial & Operational Heavyweight',
    temperament: 'Decisive, pragmatic, disciplined, no-nonsense, financially astute, results-driven.',
    businessTranslation: {
      corePositioning: 'The hard-dollar ROI specialist. Cuts through fluff and guarantees concrete, measurable business results.',
      naturalAuthorityLever: 'Financial metrics, hard numbers, unshakeable discipline, and real transaction track records.',
      monetizationStrength: 'Performance-Based Deals, Deal-Making Equity Rev-Share, and High-Yield Retainers.',
      cameraAndVoiceStyle: 'Concise, direct to the point, zero fluff, sharp edits, high conviction, unhesitating delivery.',
      idealAudience: 'CFOs, investors, serious business owners who only care about net profit and cash flow.',
      potentialBlindSpot: 'Appearing cold, transaction-obsessed, or lacking initial emotional warmth for early-stage prospects.',
      signatureContentAngles: [
        '“How we restructured client cash flows to unlock RM100k in 90 days”',
        '“Stop looking at follower count: The only 3 financial metrics that matter for creators”',
        '“How to negotiate performance-based retainers with zero risk”'
      ],
      sampleHooks: [
        'If your content is getting views but your bank account is empty, you don’t have a reach problem—you have an offer pricing problem.',
        'Here is the exact financial formula I use to evaluate any consulting deal.'
      ],
      recommendedOfferTier: 'Performance Retainers & High-Ticket Commercial Consulting'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: true,
      canTransformJi: true,
      transformationNotes: 'Transforms under Ji (Lu), Geng (Quan), Jia (Ke), and Ren (Ji).'
    },
    palaceAffinity: {
      bestPalaces: ['财帛宫', '命宫', '官禄宫', '田宅宫'],
      challengingPalaces: ['交友宫', '夫妻宫']
    }
  },
  {
    id: 'star_tiantong',
    nameZh: '天同',
    nameEn: 'Tian Tong (The Harmonizer)',
    pinyin: 'Tiān Tóng',
    element: 'Water',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '福德之主 · 亲和柔和星',
    ipArchetype: 'The Empathic Community Builder / Lifestyle & Wellness Mentor',
    temperament: 'Warm, approachable, peace-loving, empathic, restorative, joyful.',
    businessTranslation: {
      corePositioning: 'The soulful guide who makes transformation feel safe, joyful, and sustainable without toxic hustle culture.',
      naturalAuthorityLever: 'High emotional intelligence, deep listening, community cohesion, and genuine empathy.',
      monetizationStrength: 'Thriving Subscription Communities, Retreats, Mindfulness / Coaching Programs (RM99/mo - RM3,000).',
      cameraAndVoiceStyle: 'Gentle, soothing tone, lifestyle studio backdrop, storytelling cadence, warm inviting lighting.',
      idealAudience: 'Stressed high-achievers, coaches, wellness seekers, and creators burned out by hyper-aggressive tactics.',
      potentialBlindSpot: 'Procrastination, hesitation to sell assertively, or setting weak boundaries with energy vampires.',
      signatureContentAngles: [
        '“Why anti-hustle personal branding actually generates more sustainable revenue”',
        '“How to build a loyal paid community that feels like a family”',
        '“The gentle framework to overcome imposter syndrome as an introvert”'
      ],
      sampleHooks: [
        'You don’t need to shout, posture, or burn out to build a thriving 6-figure personal brand.',
        'What if the secret to magnetic attraction was simply creating a space where people felt genuinely understood?'
      ],
      recommendedOfferTier: 'Paid Membership Circles & Experiential Retreats'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: false,
      canTransformJi: true,
      transformationNotes: 'Transforms into Lu under Bing stem, Quan under Ding stem, and Ji under Geng stem.'
    },
    palaceAffinity: {
      bestPalaces: ['福德宫', '命宫', '交友宫', '子女宫'],
      challengingPalaces: ['官禄宫', '财帛宫']
    }
  },
  {
    id: 'star_lianzhen',
    nameZh: '廉贞',
    nameEn: 'Lian Zhen (The Strategic Maverick)',
    pinyin: 'Lián Zhēn',
    element: 'Fire',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '次桃花 · 变异与自律之星',
    ipArchetype: 'The High-Stakes Disruptor / Polarizing Brand Icon',
    temperament: 'Intense, charismatic, disciplined, sharp-eyed, politically astute, polarizing.',
    businessTranslation: {
      corePositioning: 'Polarity done with sophistication. Uncompromising aesthetic standards and high-stakes market differentiation.',
      naturalAuthorityLever: 'Sharp critique, high aesthetic taste, proprietary culture creation, and fierce client loyalty.',
      monetizationStrength: 'High-Ticket Brand Positioning, Luxury Consulting, and Exclusive Inner Circles.',
      cameraAndVoiceStyle: 'High contrast, dramatic angles, sharp direct gaze, intellectual edge, high production value.',
      idealAudience: 'Visionary disruptors, high-end creative agency founders, and ambitious executives looking for an edge.',
      potentialBlindSpot: 'Emotional volatility, over-sensitivity to criticism, or provoking unnecessary conflict.',
      signatureContentAngles: [
        '“Why being universally liked is the fastest way to build an invisible brand”',
        '“The subtle boundary between luxury branding and tacky influencer flexing”',
        '“The counter-intuitive psychology of high-ticket customer desire”'
      ],
      sampleHooks: [
        'If your brand doesn’t actively repel 50% of the market, you will never command premium pricing from the other 50%.',
        'Stop trying to be polite on LinkedIn. High-paying clients want conviction, not corporate pleasantries.'
      ],
      recommendedOfferTier: 'High-Ticket Positioning Sprint & Private Advisory'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: false,
      canTransformKe: false,
      canTransformJi: true,
      transformationNotes: 'Transforms into Lu under Jia stem (Strategic Attraction) and Ji under Bing stem (Friction/Legal Bottleneck).'
    },
    palaceAffinity: {
      bestPalaces: ['官禄宫', '命宫', '迁移宫', '财帛宫'],
      challengingPalaces: ['交友宫', '夫妻宫']
    }
  },
  {
    id: 'star_tianfu',
    nameZh: '天府',
    nameEn: 'Tian Fu (The Treasury Master)',
    pinyin: 'Tiān Fǔ',
    element: 'Earth',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '南斗之主 · 财帛与资源总库',
    ipArchetype: 'The Ecosystem Architect / Platform & Asset Allocator',
    temperament: 'Steady, prudent, resourceful, inclusive, conservative, institutional.',
    businessTranslation: {
      corePositioning: 'The enterprise safe-haven. Builds enduring commercial moats, recurring software models, and stable asset infrastructure.',
      naturalAuthorityLever: 'Risk mitigation, resource allocation, enterprise stability, and enduring track records.',
      monetizationStrength: 'High-Yield SaaS Platforms, Institutional Retainers, and Long-Term Ecosystem Memberships.',
      cameraAndVoiceStyle: 'Calm, reassuring, authoritative, solid posture, premium institutional backdrop.',
      idealAudience: 'Conservative enterprise clients, established business owners, and institutions demanding reliability.',
      potentialBlindSpot: 'Over-conservatism, reluctance to innovate quickly, or missing fast viral trends.',
      signatureContentAngles: [
        '“How to build a personal brand that lasts 10 years instead of 10 months”',
        '“The asset-first creator strategy: Turning ephemeral attention into owned digital equity”',
        '“Enterprise risk management for independent boutique consulting firms”'
      ],
      sampleHooks: [
        'Most creators build sandcastles on rented social media land. Here is how to build digital real estate you truly own.',
        'Why the most profitable business models are the ones that look boring from the outside.'
      ],
      recommendedOfferTier: 'Enterprise Retainers & Annual SaaS Subscriptions'
    },
    transformations: {
      canTransformLu: false,
      canTransformQuan: false,
      canTransformKe: true,
      canTransformJi: false,
      transformationNotes: 'Does not transform into Lu/Quan/Ji. Governs the treasury; transforms into Ke under Ren stem in some traditions.'
    },
    palaceAffinity: {
      bestPalaces: ['田宅宫', '财帛宫', '命宫', '官禄宫'],
      challengingPalaces: ['疾厄宫']
    }
  },
  {
    id: 'star_taiyin',
    nameZh: '太阴',
    nameEn: 'Tai Yin (The Intuitive Asset Cultivator)',
    pinyin: 'Tài Yīn',
    element: 'Water',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '月亮之星 · 润物无声之财',
    ipArchetype: 'The Strategic Cultivator / Deep Content & Evergreen Asset Builder',
    temperament: 'Intuitive, refined, meticulous, contemplative, patient, detail-oriented.',
    businessTranslation: {
      corePositioning: 'The quiet compounding genius. Excels in newsletter ecosystem design, evergreen search SEO, and deep client nurturing.',
      naturalAuthorityLever: 'Subtle long-form depth, meticulous attention to client experience, and compounding asset growth.',
      monetizationStrength: 'High-Ticket Back-End Funnels, Real Estate / Wealth Consulting, Paid Newsletters.',
      cameraAndVoiceStyle: 'Soft-spoken, articulate, thoughtful pauses, elegant typography overlays, dark minimal studio.',
      idealAudience: 'Refined practitioners, private wealth clients, and individuals who value discretion and depth.',
      potentialBlindSpot: 'Over-sensitivity, internalizing negative comments, or holding back public visibility.',
      signatureContentAngles: [
        '“The silent compounding effect of a dedicated private email list”',
        '“How to nurture RM50k consulting clients without making high-pressure sales calls”',
        '“The art of sub-conscious positioning: How quiet authority wins in noisy markets”'
      ],
      sampleHooks: [
        'The most profitable clients rarely comment on your public posts. They lurk silently until your back-end email converts them.',
        'Why aggressive direct pitching is costing you your highest-net-worth prospects.'
      ],
      recommendedOfferTier: 'Bespoke Private Advisory & Evergreen Asset Sprints'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: true,
      canTransformJi: true,
      transformationNotes: 'Transforms under Ding (Lu), Wu (Quan), Geng/Gui (Ke), and Yi (Ji).'
    },
    palaceAffinity: {
      bestPalaces: ['田宅宫', '财帛宫', '命宫', '福德宫'],
      challengingPalaces: ['迁移宫', '官禄宫']
    }
  },
  {
    id: 'star_tanlang',
    nameZh: '贪狼',
    nameEn: 'Tan Lang (The Creative Catalyst)',
    pinyin: 'Tān Láng',
    element: 'Wood/Water',
    yinYang: 'Yang',
    category: 'NorthDipper',
    symbolicTitle: '欲望之源 · 多才多艺之始',
    ipArchetype: 'The Multi-Hyphenate Trend Pioneer / Viral Catalyst & Dealmaker',
    temperament: 'Magnetic, inventive, multifaceted, culturally attuned, socially agile, ambitious.',
    businessTranslation: {
      corePositioning: 'The cultural pioneer. Connects unexpected industries (e.g. AI + Ancient Wisdom, Web3 + Luxury) with effortless charisma.',
      naturalAuthorityLever: 'Cross-industry synthesis, viral hook agility, storytelling magnetism, and rapid networking.',
      monetizationStrength: 'High-Converting Launches, Experiential Workshops, Affiliate Partnerships, and Creative Advisory.',
      cameraAndVoiceStyle: 'Highly dynamic, engaging, storytelling-led, expressive, trend-savvy, fast-paced.',
      idealAudience: 'Early adopters, innovators, creators, and entrepreneurs looking for high-leverage growth hacks.',
      potentialBlindSpot: 'Shiny object syndrome, starting 10 projects without finishing 1, or losing long-term focus.',
      signatureContentAngles: [
        '“How to blend ancient mental models with modern AI creator workflows”',
        '“The psychological anatomy of viral creator hooks that actually convert”',
        '“Cross-industry arbitrage: How to take ideas from one niche and dominate another”'
      ],
      sampleHooks: [
        'What happens when you combine a 1,000-year-old self-discovery framework with modern generative AI?',
        'Stop niching down into a tiny boring box. Here is how to build a multi-hyphenate brand that commands attention.'
      ],
      recommendedOfferTier: 'High-Impact Launch Workshops & Creative Advisory Sprints'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: false,
      canTransformJi: true,
      transformationNotes: 'Transforms into Lu under Wu stem (Creative Wealth), Quan under Ji stem (Mastery), and Ji under Gui stem (Distraction).'
    },
    palaceAffinity: {
      bestPalaces: ['命宫', '迁移宫', '官禄宫', '交友宫'],
      challengingPalaces: ['福德宫', '疾厄宫']
    }
  },
  {
    id: 'star_jumen',
    nameZh: '巨门',
    nameEn: 'Ju Men (The Diagnostic Orator)',
    pinyin: 'Jù Mén',
    element: 'Water',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '口才之神 · 暗星与辨析之门',
    ipArchetype: 'The Diagnostic Orator / Investigative Critic & Gatekeeper',
    temperament: 'Critical, investigative, articulate, skeptical, deep-probing, persuasive.',
    businessTranslation: {
      corePositioning: 'The truth-teller. Unpacks what everyone else is thinking but afraid to say out loud. Excels in debates, podcasts, and diagnostic audits.',
      naturalAuthorityLever: 'Uncompromising forensic critique, deep vocal articulation, and pinpointing invisible industry scams.',
      monetizationStrength: 'Diagnostic Audits, Keynote Speeches, Podcast Sponsorships, and Legal/PR Crisis Advisory.',
      cameraAndVoiceStyle: 'Podcast mic close-up, piercing focus, deliberate articulation, rhetoric questions, debate format.',
      idealAudience: 'Skeptical buyers, intelligent operators tired of fake hype, and clients looking for forensic honesty.',
      potentialBlindSpot: 'Over-criticism, provoking unnecessary controversy, or sounding overly pessimistic.',
      signatureContentAngles: [
        '“The 3 hidden lies every personal branding agency tells you”',
        '“Forensic teardown of a failed RM1M marketing launch: What went wrong”',
        '“Why 90% of business coaches give advice they don’t follow themselves”'
      ],
      sampleHooks: [
        'I am about to say something that will upset a lot of marketing gurus, but someone needs to tell you the truth.',
        'Before you spend another RM10,000 on a generic video course, let me show you the hidden flaw in their model.'
      ],
      recommendedOfferTier: 'Forensic Diagnostic Audits & High-Impact Speaking'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: false,
      canTransformJi: true,
      transformationNotes: 'Transforms into Lu under Xin stem, Quan under Gui stem, and Ji under Ding stem (Verbal Dispute).'
    },
    palaceAffinity: {
      bestPalaces: ['官禄宫', '迁移宫', '命宫', '父母宫'],
      challengingPalaces: ['兄弟宫', '夫妻宫']
    }
  },
  {
    id: 'star_tianxiang',
    nameZh: '天相',
    nameEn: 'Tian Xiang (The Premier & Seal Bearer)',
    pinyin: 'Tiān Xiàng',
    element: 'Water',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '掌印之星 · 宰相与信托之主',
    ipArchetype: 'The Trusted Chief of Staff / Brand Partner & Elite Seal-Bearer',
    temperament: 'Impeccable, diplomatic, balanced, high-integrity, collaborative, supportive.',
    businessTranslation: {
      corePositioning: 'The ultimate trusted operator and right-hand advisor. Bridges visionaries with real-world institutional execution.',
      naturalAuthorityLever: 'Institutional credibility, impeccable professional etiquette, and executive endorsement.',
      monetizationStrength: 'Fractional COO / CMO Retainers, High-Stakes Partnership Brokering, Brand Deal Architecture.',
      cameraAndVoiceStyle: 'Polished, professional business attire, balanced tone, executive boardroom setting.',
      idealAudience: 'Founders who need an elite operational counterpart to translate their vision into repeatable profit.',
      potentialBlindSpot: 'Relying too much on other people’s platforms rather than building independent brand ownership.',
      signatureContentAngles: [
        '“How to structure high-trust strategic alliances that generate 7-figure deals”',
        '“The operational framework of a world-class Fractional Executive”',
        '“Why professional integrity is your single highest-converting sales asset”'
      ],
      sampleHooks: [
        'The best business deals are never won on aggressive sales tactics—they are won on unshakeable institutional trust.',
        'Here is the behind-the-scenes framework we use to manage executive operations across 3 international firms.'
      ],
      recommendedOfferTier: 'Fractional Executive Retainers & Strategic Alliance Advisory'
    },
    transformations: {
      canTransformLu: false,
      canTransformQuan: false,
      canTransformKe: false,
      canTransformJi: false,
      transformationNotes: 'Does not transform into 4 transformations directly; acts as the balance-keeper and amplifier of adjacent stars.'
    },
    palaceAffinity: {
      bestPalaces: ['官禄宫', '命宫', '财帛宫', '交友宫'],
      challengingPalaces: ['疾厄宫']
    }
  },
  {
    id: 'star_tianliang',
    nameZh: '天梁',
    nameEn: 'Tian Liang (The Elder Sage & Protector)',
    pinyin: 'Tiān Liáng',
    element: 'Earth',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '荫星 · 寿星 · 庇护与原则之神',
    ipArchetype: 'The Elder Statesman / Master Mentor & Industry Sage',
    temperament: 'Principled, philanthropic, wise, experienced, protective, high-morality.',
    businessTranslation: {
      corePositioning: 'The venerable advisor. Solves complex crises and passes down timeless, battle-tested wisdom to the next generation.',
      naturalAuthorityLever: 'Decades of domain seasoning, crisis-resolving acumen, and moral ethical leadership.',
      monetizationStrength: 'High-Ticket Mentorship, Retainer Advisory Boards, and Legacy Leadership Programs.',
      cameraAndVoiceStyle: 'Deep, calm, resonant, storytelling from real crisis experience, warm elder presence.',
      idealAudience: 'Rising leaders, corporate directors, and practitioners seeking genuine long-term mentorship.',
      potentialBlindSpot: 'Coming across as patronizing or overly preachy to younger, fast-paced audiences.',
      signatureContentAngles: [
        '“What 20 years of business failures taught me about crisis management”',
        '“The single principle that saved our company during the market downturn”',
        '“Mentorship breakdown: How to build generational career resilience”'
      ],
      sampleHooks: [
        'After 20 years in this industry, I have seen hundreds of trendy tactics come and go. Only 3 fundamentals always survive.',
        'When your business faces a catastrophic crisis, here is the exact protocol to protect your brand reputation.'
      ],
      recommendedOfferTier: 'Executive Advisory Board Seats & Master Mentorships'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: true,
      canTransformJi: false,
      transformationNotes: 'Transforms into Lu under Ren stem, Quan under Yi stem, and Ke under Ji stem.'
    },
    palaceAffinity: {
      bestPalaces: ['父母宫', '官禄宫', '命宫', '福德宫'],
      challengingPalaces: ['财帛宫']
    }
  },
  {
    id: 'star_qisha',
    nameZh: '七杀',
    nameEn: 'Qi Sha (The Pioneer Commander)',
    pinyin: 'Qī Shā',
    element: 'Metal/Fire',
    yinYang: 'Yang',
    category: 'SouthDipper',
    symbolicTitle: '将星 · 孤克与破局先锋',
    ipArchetype: 'The Solo Pioneer / High-Velocity Breakthrough Commander',
    temperament: 'Bold, independent, fearless, decisive, aggressive, relentless.',
    businessTranslation: {
      corePositioning: 'The single-minded executor. Known for conquering competitive markets, launching bold ventures, and blazing trails.',
      naturalAuthorityLever: 'Unmatched speed of execution, raw courage, and decisive market conquests.',
      monetizationStrength: 'High-Ticket Turnaround Sprints, Venture Building Advisory, and 0-to-1 Launch Retainers.',
      cameraAndVoiceStyle: 'Direct to lens, intense focus, crisp concise sentences, high kinetic energy, action-oriented.',
      idealAudience: 'Hardcore founders, solo builders, and companies needing radical turnaround acceleration.',
      potentialBlindSpot: 'Impatience with slower team members, burning bridges, or taking excessive solo risks.',
      signatureContentAngles: [
        '“How we executed a 0-to-1 product launch in 14 days without a team”',
        '“The turnaround playbook: How to save a sinking project in 30 days”',
        '“Why speed of implementation is the only moat that matters in 2026”'
      ],
      sampleHooks: [
        'Stop spending 6 months planning your business. If you can’t validate it in 72 hours, kill it.',
        'While everyone else is debating, here is how we launched, tested, and generated RM50k in two weeks.'
      ],
      recommendedOfferTier: 'Turnaround Sprints & High-Impact Venture Building'
    },
    transformations: {
      canTransformLu: false,
      canTransformQuan: false,
      canTransformKe: false,
      canTransformJi: false,
      transformationNotes: 'Does not transform directly; serves as the leading general of the 杀破狼 (Disruptor) configuration.'
    },
    palaceAffinity: {
      bestPalaces: ['官禄宫', '命宫', '迁移宫', '财帛宫'],
      challengingPalaces: ['交友宫', '夫妻宫', '福德宫']
    }
  },
  {
    id: 'star_pojun',
    nameZh: '破军',
    nameEn: 'Po Jun (The Revolutionary Reformer)',
    pinyin: 'Pò Jūn',
    element: 'Water',
    yinYang: 'Yin',
    category: 'NorthDipper',
    symbolicTitle: '耗星 · 破旧立新之变鼎',
    ipArchetype: 'The Market Revolutionary / Creative Destructor & Paradigm Shifter',
    temperament: 'Radical, avant-garde, rebellious, relentless, transformational, visionary.',
    businessTranslation: {
      corePositioning: 'The paradigm destroyer and rebuilder. Destroys outdated industry models to introduce the next evolution.',
      naturalAuthorityLever: 'Radical product innovation, tearing down obsolete paradigms, and fearless reinvention.',
      monetizationStrength: 'Disruptive Product Sprints, Venture Incubators, and Radical Repositioning Consulting.',
      cameraAndVoiceStyle: 'Unconventional framing, bold polarizing stances, high dynamic editing, intellectual rebellion.',
      idealAudience: 'Innovators, early adopters, restless professionals seeking radical reinvention.',
      potentialBlindSpot: 'Discarding working systems too quickly in search of novelty, or exhausting resources.',
      signatureContentAngles: [
        '“Why the traditional consulting business model is dead (and what is replacing it)”',
        '“The destructive innovation playbook: How to obsolete your competitors”',
        '“How to completely reinvent your personal brand in 90 days”'
      ],
      sampleHooks: [
        'Everything you were taught about building an agency in 2020 is now a direct liability. Here is what replaced it.',
        'I tore down our entire 7-figure product line to build something 10x better. Here is the post-mortem.'
      ],
      recommendedOfferTier: 'Radical Brand Reinvention Sprints & Innovation Advisory'
    },
    transformations: {
      canTransformLu: true,
      canTransformQuan: true,
      canTransformKe: false,
      canTransformJi: false,
      transformationNotes: 'Transforms into Lu under Gui stem (Creative Wealth) and Quan under Jia stem (Revolutionary Authority).'
    },
    palaceAffinity: {
      bestPalaces: ['命宫', '官禄宫', '迁移宫'],
      challengingPalaces: ['田宅宫', '财帛宫', '夫妻宫']
    }
  }
];

export const ZIWEI_PALACES: ZiweiPalace[] = [
  {
    id: 'palace_ming',
    nameZh: '命宫',
    nameEn: 'Life Palace (Core Identity)',
    pinyin: 'Mìng Gōng',
    palaceOrder: 1,
    traditionalMeaning: 'The master core of the entire chart. Dictates innate temperament, cognitive architecture, destiny ceiling, and natural gravitational pull.',
    businessIpMeaning: 'Your Authentic Founder Persona & Core IP Archetype. Who you naturally are when no one is watching.',
    strategicQuestions: [
      'What is your effortless cognitive superpower?',
      'What is the fundamental worldview that informs all your work?',
      'What archetype makes you feel completely energized rather than performative?'
    ],
    operationalDirectives: {
      forPositioning: 'Anchor your primary brand archetype here. Never fabricate an artificial persona that contradicts your Life Palace.',
      forContentStrategy: 'Dictates your baseline tone (e.g. Emperor Ziwei vs Reformer Po Jun).',
      forMonetization: 'Determines whether you command high-ticket 1-on-1 prestige or high-scale community ecosystems.'
    },
    keyIndicatorsWhenActive: ['Primary Archetype', 'Core Cognitive Model', 'Natural Charisma']
  },
  {
    id: 'palace_xiongdi',
    nameZh: '兄弟宫',
    nameEn: 'Siblings & Peer Network Palace',
    pinyin: 'Xiōng Dì Gōng',
    palaceOrder: 2,
    traditionalMeaning: 'Siblings, close partners, cash liquidity reservoir (田宅之财帛), financial buffer.',
    businessIpMeaning: 'Peer Synergy, Mastermind Collaborators & Cash Flow Liquidity.',
    strategicQuestions: [
      'Who are your non-competing peer allies for collaborative launches?',
      'How stable is your operating cashflow buffer?'
    ],
    operationalDirectives: {
      forPositioning: 'Co-branding, collaborative podcasts, and joint-venture webinars.',
      forContentStrategy: 'Roundtable discussions and peer intellectual hot seats.',
      forMonetization: 'Affiliate syndication and reciprocal audience cross-pollination.'
    },
    keyIndicatorsWhenActive: ['Co-Marketing Partners', 'Cash Buffer', 'Peer Masterminds']
  },
  {
    id: 'palace_fuqi',
    nameZh: '夫妻宫',
    nameEn: 'Spouse & Strategic Partnership Palace',
    pinyin: 'Fū Qī Gōng',
    palaceOrder: 3,
    traditionalMeaning: 'Marriage, high-stakes 1-on-1 long term partnerships, mirror reflection of the self.',
    businessIpMeaning: 'Core Equity Co-Founders, Strategic Business Alliances & 1-on-1 High-Stakes Client Chemistry.',
    strategicQuestions: [
      'What complementary skills must your co-founder or strategic partner possess?',
      'How do you handle 1-on-1 conflict and boundary setting in long-term advisory contracts?'
    ],
    operationalDirectives: {
      forPositioning: 'Align complementary archetypes (e.g. The Visionary paired with The Operator).',
      forContentStrategy: 'Behind-the-scenes partnership dynamics and founder balance.',
      forMonetization: 'High-ticket retainer contracts and equity joint ventures.'
    },
    keyIndicatorsWhenActive: ['Co-Founder Compatibility', 'High-Ticket 1-on-1 Chemistry']
  },
  {
    id: 'palace_zinu',
    nameZh: '子女宫',
    nameEn: 'Children & Disciple/Cohort Palace',
    pinyin: 'Zǐ Nǚ Gōng',
    palaceOrder: 4,
    traditionalMeaning: 'Offspring, subordinates, disciples, creative vitality, junior cohorts.',
    businessIpMeaning: 'Student Cohorts, Sub-Audiences, Community Members & Digital Intellectual Offspring.',
    strategicQuestions: [
      'How do you nurture entry-level students into high-ticket enterprise clients?',
      'What productized frameworks can be passed down as proprietary training assets?'
    ],
    operationalDirectives: {
      forPositioning: 'Design your mentorship and pedagogical framework.',
      forContentStrategy: 'Teaching breakdowns, student transformations, and Q&A masterclasses.',
      forMonetization: 'Course cohorts, apprentice programs, and certification academies.'
    },
    keyIndicatorsWhenActive: ['Student Retention', 'Cohort Lifetime Value', 'Mentorship Model']
  },
  {
    id: 'palace_caibo',
    nameZh: '财帛宫',
    nameEn: 'Wealth & Monetization Palace',
    pinyin: 'Cái Bó Gōng',
    palaceOrder: 5,
    traditionalMeaning: 'Flow of cash, wealth acquisition method, transaction style, commercial instincts.',
    businessIpMeaning: 'Your Commercial Monetization Vehicle & Pricing Power.',
    strategicQuestions: [
      'What is your natural cashflow generation mechanism (high-ticket, recurring, or automated volume)?',
      'What pricing structure feels natural and frictionless to you?'
    ],
    operationalDirectives: {
      forPositioning: 'Align your pricing model directly with the star in this palace (e.g. Wu Qu = Value Retainers, Tan Lang = Multi-offer Launches).',
      forContentStrategy: 'Sales content, value-focused breakdowns, and commercial ROI demonstrations.',
      forMonetization: 'The core engine of your 5-tier Offer Ladder.'
    },
    keyIndicatorsWhenActive: ['Pricing Model', 'Cashflow Velocity', 'Deal Structure']
  },
  {
    id: 'palace_jie',
    nameZh: '疾厄宫',
    nameEn: 'Health & Subconscious Stress Palace',
    pinyin: 'Jí È Gōng',
    palaceOrder: 6,
    traditionalMeaning: 'Physical constitution, hidden vulnerabilities, deep subconscious friction, work-rest balance.',
    businessIpMeaning: 'Founder Energy Management, Burnout Triggers & Subconscious Content Friction.',
    strategicQuestions: [
      'What content tasks deplete your energetic battery the fastest?',
      'Where do subconscious fears and imposter syndrome manifest in your client delivery?'
    ],
    operationalDirectives: {
      forPositioning: 'Identify what styles to eliminate (e.g. Stop video dancing if it creates severe cognitive fatigue).',
      forContentStrategy: 'Ji (Breakthrough) vulnerability teardowns based on overcome friction.',
      forMonetization: 'Automate or delegate delivery tasks that drain your physical health.'
    },
    keyIndicatorsWhenActive: ['Burnout Resistance', 'Delivery Strain', 'Inner Friction']
  },
  {
    id: 'palace_qianyi',
    nameZh: '迁移宫',
    nameEn: 'Travel & Public Persona Palace',
    pinyin: 'Qiān Yí Gōng',
    palaceOrder: 7,
    traditionalMeaning: 'External world reputation, travel, opportunities abroad, public social image.',
    businessIpMeaning: 'Your Public Front-End Persona, Social Media Inbound Magnet & Video Presence.',
    strategicQuestions: [
      'How are people psychologically primed to perceive you within the first 5 seconds?',
      'What external environment (studio, stage, whiteboard) maximizes your visual authority?'
    ],
    operationalDirectives: {
      forPositioning: 'The lens through which the world discovers you (Directly opposite the Life Palace).',
      forContentStrategy: 'Hook formulas, top-of-funnel shorts, viral reels, and public keynotes.',
      forMonetization: 'Top-of-funnel inbound traffic and initial lead magnet discovery.'
    },
    keyIndicatorsWhenActive: ['Inbound Magnetism', 'Public First Impression', 'Platform Reach']
  },
  {
    id: 'palace_jiaoyou',
    nameZh: '交友宫 (仆役宫)',
    nameEn: 'Friends & Audience/Fanbase Palace',
    pinyin: 'Jiāo Yǒu Gōng',
    palaceOrder: 8,
    traditionalMeaning: 'Subordinates, broader social circles, public fans, market reception.',
    businessIpMeaning: 'Your Total Addressable Fanbase, Free Audience Segmentation & Community Culture.',
    strategicQuestions: [
      'What demographic does your brand naturally attract (and whom should you filter out)?',
      'How do you turn passive spectators into dedicated brand advocates?'
    ],
    operationalDirectives: {
      forPositioning: 'Build strong audience boundaries and anti-pitch filters.',
      forContentStrategy: 'High-resonance Lu (Attraction) content addressing unspoken frustrations.',
      forMonetization: 'Low-ticket tripwires and community memberships.'
    },
    keyIndicatorsWhenActive: ['Fanbase Loyalty', 'Audience Quality Filter', 'Community Velocity']
  },
  {
    id: 'palace_guanlu',
    nameZh: '官禄宫 (事业宫)',
    nameEn: 'Career & Industry Authority Palace',
    pinyin: 'Guān Lù Gōng',
    palaceOrder: 9,
    traditionalMeaning: 'Vocation, industry status, operational capacity, professional enterprise ambition.',
    businessIpMeaning: 'Your Core Industry Standing, Strategic Methodology & Enterprise Operations.',
    strategicQuestions: [
      'What is the proprietary method that establishes your industry category ownership?',
      'How do you scale delivery from solo craft to institutional authority?'
    ],
    operationalDirectives: {
      forPositioning: 'Your 1-sentence positioning statement is anchored in this palace’s strengths.',
      forContentStrategy: 'Deep frameworks, authority thought leadership (Quan), and operational autopsies.',
      forMonetization: 'Core flagships, B2B retainers, and proprietary licensing.'
    },
    keyIndicatorsWhenActive: ['Industry Standing', 'Proprietary Methodology', 'Enterprise Scaling']
  },
  {
    id: 'palace_tianzhai',
    nameZh: '田宅宫',
    nameEn: 'Property & Digital IP Assets Palace',
    pinyin: 'Tián Zhái Gōng',
    palaceOrder: 10,
    traditionalMeaning: 'Real estate, family legacy, wealth vault, company headquarters, asset storage.',
    businessIpMeaning: 'Owned Digital Real Estate: Websites, Email Lists, IP Trademark Assets & Software Equity.',
    strategicQuestions: [
      'What percentage of your audience is on owned channels (email/SaaS) vs rented algorithms?',
      'What compounding digital assets are you building this quarter?'
    ],
    operationalDirectives: {
      forPositioning: 'Position as a lasting institution with owned methodology assets.',
      forContentStrategy: 'Case archives, long-form resource hubs, and intellectual property dossiers.',
      forMonetization: 'Evergreen product libraries and digital equity valuation.'
    },
    keyIndicatorsWhenActive: ['Owned Audience Assets', 'Email List Equity', 'IP Vault']
  },
  {
    id: 'palace_fude',
    nameZh: '福德宫',
    nameEn: 'Mental Soul & Vision Palace',
    pinyin: 'Fú Dé Gōng',
    palaceOrder: 11,
    traditionalMeaning: 'Spiritual well-being, psychological resilience, subconscious vision, long-term fortune.',
    businessIpMeaning: 'Founder Conviction, Brand Soul, Psychological Fortitude & Visionary Tenacity.',
    strategicQuestions: [
      'What is your spiritual ‘why’ that keeps you building during dark quarters?',
      'What ethical lines will you never cross regardless of the financial incentive?'
    ],
    operationalDirectives: {
      forPositioning: 'The soul of your brand manifesto and ethical boundaries.',
      forContentStrategy: 'High-conviction philosophical perspectives and vision manifestos.',
      forMonetization: 'Ensures pricing reflects deep personal alignment rather than anxiety.'
    },
    keyIndicatorsWhenActive: ['Founder Tenacity', 'Brand Soul', 'Ethical Backbone']
  },
  {
    id: 'palace_fumu',
    nameZh: '父母宫',
    nameEn: 'Mentors & Institutional Backing Palace',
    pinyin: 'Fù Mǔ Gōng',
    palaceOrder: 12,
    traditionalMeaning: 'Parents, elders, government, institutional authorities, legal regulations, documents.',
    businessIpMeaning: 'Institutional Certifications, Regulatory Compliance, Elite Mentors & Brand Heritage.',
    strategicQuestions: [
      'What institutional credentials or industry endorsements amplify your credibility?',
      'How do you leverage the prestige of recognized standard-setting bodies?'
    ],
    operationalDirectives: {
      forPositioning: 'Institutional validation, certifications, and compliance backing.',
      forContentStrategy: 'Ke (Trust) proof points, master endorsements, and whitepaper releases.',
      forMonetization: 'Enterprise procurement compliance and institutional certifications.'
    },
    keyIndicatorsWhenActive: ['Institutional Credibility', 'Regulatory Trust', 'Master Lineage']
  }
];

export const STEM_TRANSFORMATIONS: StemTransformation[] = [
  {
    stemZh: '甲干',
    stemEn: 'Jia Stem',
    pinyin: 'Jiǎ',
    luStar: '廉贞 (Lian Zhen)',
    quanStar: '破军 (Po Jun)',
    keStar: '武曲 (Wu Qu)',
    jiStar: '太阳 (Tai Yang)',
    mnemonic: '廉破武阳 (Lian-Po-Wu-Yang)',
    annualEnergyTheme: 'Radical Breakthrough & High-Stakes Commercial Innovation',
    commercialStrategy: {
      luInsight: 'Attract high-paying buyers through magnetic aesthetic polarity and bold cultural stance (Lian Zhen Lu).',
      quanInsight: 'Command industry authority by aggressively destroying and rebuilding obsolete business models (Po Jun Quan).',
      keInsight: 'Anchor trust with hard financial data, ROI audits, and bulletproof metrics (Wu Qu Ke).',
      jiInsight: 'Beware of vision fatigue, over-promising public claims, or burning out your team in the spotlight (Tai Yang Ji).'
    }
  },
  {
    stemZh: '乙干',
    stemEn: 'Yi Stem',
    pinyin: 'Yǐ',
    luStar: '天机 (Tian Ji)',
    quanStar: '天梁 (Tian Liang)',
    keStar: '紫微 (Zi Wei)',
    jiStar: '太阴 (Tai Yin)',
    mnemonic: '机梁紫阴 (Ji-Liang-Zi-Yin)',
    annualEnergyTheme: 'Strategic Methodologies, Standard-Setting & Institutional Wisdom',
    commercialStrategy: {
      luInsight: 'Attract clients with sharp cognitive models, frameworks, and structural efficiency hacks (Tian Ji Lu).',
      quanInsight: 'Establish unshakeable leadership as an industry elder sage solving crisis bottlenecks (Tian Liang Quan).',
      keInsight: 'Earn top-tier academic and institutional prestige by setting gold standards (Zi Wei Ke).',
      jiInsight: 'Watch out for back-end communication leaks, hidden emotional friction, or private cashflow delays (Tai Yin Ji).'
    }
  },
  {
    stemZh: '丙干',
    stemEn: 'Bing Stem',
    pinyin: 'Bǐng',
    luStar: '天同 (Tian Tong)',
    quanStar: '天机 (Tian Ji)',
    keStar: '文昌 (Wen Chang)',
    jiStar: '廉贞 (Lian Zhen)',
    mnemonic: '同机昌廉 (Tong-Ji-Chang-Lian)',
    annualEnergyTheme: 'Empathetic Community Growth & Algorithmic Optimization',
    commercialStrategy: {
      luInsight: 'Attraction flourishes through warm community culture, gentle empathy, and anti-hustle narratives (Tian Tong Lu).',
      quanInsight: 'Command respect by optimizing marketing funnels and strategic logic systems (Tian Ji Quan).',
      keInsight: 'Build authority with eloquent long-form writing, published books, and structured articles (Wen Chang Ke).',
      jiInsight: 'High risk of emotional conflict, contract disputes, or compliance friction if boundaries are sloppy (Lian Zhen Ji).'
    }
  },
  {
    stemZh: '丁干',
    stemEn: 'Ding Stem',
    pinyin: 'Dīng',
    luStar: '太阴 (Tai Yin)',
    quanStar: '天同 (Tian Tong)',
    keStar: '天机 (Tian Ji)',
    jiStar: '巨门 (Ju Men)',
    mnemonic: '阴同机巨 (Yin-Tong-Ji-Ju)',
    annualEnergyTheme: 'Quiet Asset Compounding & Deep Strategic Refinement',
    commercialStrategy: {
      luInsight: 'Attract wealthy private clients through discreet, elegant back-end nurturing funnels (Tai Yin Lu).',
      quanInsight: 'Lead with emotional intelligence and sustainable wellness-first leadership (Tian Tong Quan).',
      keInsight: 'Establish credibility through forensic blueprint teardowns and strategic diagrams (Tian Ji Ke).',
      jiInsight: 'Watch your words carefully; high risk of misinterpretation, public backlash, or rumor attacks (Ju Men Ji).'
    }
  },
  {
    stemZh: '戊干',
    stemEn: 'Wu Stem',
    pinyin: 'Wù',
    luStar: '贪狼 (Tan Lang)',
    quanStar: '太阴 (Tai Yin)',
    keStar: '右弼 (You Bi)',
    jiStar: '天机 (Tian Ji)',
    mnemonic: '贪阴弼机 (Tan-Yin-Bi-Ji)',
    annualEnergyTheme: 'Creative Market Catalysis & High-Leverage Partnerships',
    commercialStrategy: {
      luInsight: 'Attraction explodes through cross-industry innovation, viral storytelling, and charisma (Tan Lang Lu).',
      quanInsight: 'Anchor wealth in real estate, owned software assets, and recurring memberships (Tai Yin Quan).',
      keInsight: 'Gain massive credibility through strategic joint ventures and noble peer endorsements (You Bi Ke).',
      jiInsight: 'Beware of mental exhaustion, overthinking, or changing strategy too rapidly (Tian Ji Ji).'
    }
  },
  {
    stemZh: '己干',
    stemEn: 'Ji Stem',
    pinyin: 'Jǐ',
    luStar: '武曲 (Wu Qu)',
    quanStar: '贪狼 (Tan Lang)',
    keStar: '天梁 (Tian Liang)',
    jiStar: '文曲 (Wen Qu)',
    mnemonic: '武贪梁曲 (Wu-Tan-Liang-Qu)',
    annualEnergyTheme: 'Hard Commercial Monetization & Real Cash Flow Dominance',
    commercialStrategy: {
      luInsight: 'Direct financial monetization: Convert every piece of content into immediate cashflow deals (Wu Qu Lu).',
      quanInsight: 'Dominate negotiations and deal-making with aggressive creative ambition (Tan Lang Quan).',
      keInsight: 'Reputation is anchored by elder mentors and certified institutional backing (Tian Liang Ke).',
      jiInsight: 'Watch out for contract drafting errors, false marketing claims, or sloppy paperwork (Wen Qu Ji).'
    }
  },
  {
    stemZh: '庚干',
    stemEn: 'Geng Stem',
    pinyin: 'Gēng',
    luStar: '太阳 (Tai Yang)',
    quanStar: '武曲 (Wu Qu)',
    keStar: '太阴 (Tai Yin)',
    jiStar: '天同 (Tian Tong)',
    mnemonic: '日武阴同 (Ri-Wu-Yin-Tong)',
    annualEnergyTheme: 'Global Brand Outreach & Pragmatic Financial Closes',
    commercialStrategy: {
      luInsight: 'Global visibility: Broadcast your message across international platforms and major media (Tai Yang Lu).',
      quanInsight: 'Enforce strict financial terms and premium value pricing on enterprise retainers (Wu Qu Quan).',
      keInsight: 'Earn trust through quiet, refined case studies and long-term asset cultivation (Tai Yin Ke).',
      jiInsight: 'Risk of emotional complacency, loss of drive, or struggling to push through final delivery (Tian Tong Ji).'
    }
  },
  {
    stemZh: '辛干',
    stemEn: 'Xin Stem',
    pinyin: 'Xīn',
    luStar: '巨门 (Ju Men)',
    quanStar: '太阳 (Tai Yang)',
    keStar: '文曲 (Wen Qu)',
    jiStar: '文昌 (Wen Chang)',
    mnemonic: '巨日曲昌 (Ju-Ri-Qu-Chang)',
    annualEnergyTheme: 'Verbal Mastery, Public Oratory & High-Impact Thought Leadership',
    commercialStrategy: {
      luInsight: 'Attraction through verbal eloquence, forensic debate, and unveiling hidden truths (Ju Men Lu).',
      quanInsight: 'Lead from the front on public stages and international podcast appearances (Tai Yang Quan).',
      keInsight: 'Build authority through magnetic storytelling, audio podcasts, and video presentations (Wen Qu Ke).',
      jiInsight: 'Double-check all contracts, copyright agreements, and published articles for legal slip-ups (Wen Chang Ji).'
    }
  },
  {
    stemZh: '壬干',
    stemEn: 'Ren Stem',
    pinyin: 'Rén',
    luStar: '天梁 (Tian Liang)',
    quanStar: '紫微 (Zi Wei)',
    keStar: '左辅 (Zuo Fu)',
    jiStar: '武曲 (Wu Qu)',
    mnemonic: '梁紫辅武 (Liang-Zi-Fu-Wu)',
    annualEnergyTheme: 'Master Mentorship, Sovereign Leadership & Institutional Alliance',
    commercialStrategy: {
      luInsight: 'Attract premium followers through philanthropic wisdom and crisis-tested mentorship (Tian Liang Lu).',
      quanInsight: 'Command the market as the undisputed sovereign category king (Zi Wei Quan).',
      keInsight: 'Gain undeniable credibility through high-level executive partnerships and team synergy (Zuo Fu Ke).',
      jiInsight: 'Watch out for sudden cashflow crunches, capital freeze, or broken financial transactions (Wu Qu Ji).'
    }
  },
  {
    stemZh: '癸干',
    stemEn: 'Gui Stem',
    pinyin: 'Guǐ',
    luStar: '破军 (Po Jun)',
    quanStar: '巨门 (Ju Men)',
    keStar: '太阴 (Tai Yin)',
    jiStar: '贪狼 (Tan Lang)',
    mnemonic: '破巨阴贪 (Po-Ju-Yin-Tan)',
    annualEnergyTheme: 'Revolutionary Market Re-Positioning & Oratory Dominance',
    commercialStrategy: {
      luInsight: 'Massive monetization through radical innovation and brand reinvention (Po Jun Lu).',
      quanInsight: 'Crush industry consensus through sharp, forensic oratory and uncompromising debate (Ju Men Quan).',
      keInsight: 'Nurture enterprise trust through quiet, compounding digital real estate (Tai Yin Ke).',
      jiInsight: 'Beware of chasing shiny distractions, indulging in unaligned side projects, or losing focus (Tan Lang Ji).'
    }
  }
];

export const ZIWEI_AUXILIARY_STARS: ZiweiAuxiliaryStar[] = [
  {
    id: 'aux_zuofu',
    nameZh: '左辅',
    nameEn: 'Zuo Fu (The Chief Operating Partner)',
    pinyin: 'Zuǒ Fǔ',
    category: 'Lucky6',
    element: 'Earth',
    symbolism: 'Strategic alliances, loyal second-in-command, operational backup.',
    businessTranslation: {
      superpowerOrBottleneck: 'Effortlessly attracts high-caliber operational partners and loyal team members.',
      contentStrategyImpact: 'Greatly benefits from co-hosted shows, guest interviews, and roundtable discussions.',
      monetizationImpact: 'Enables scaling beyond solo consulting into agency or firm models.',
      recommendedAction: 'Build a dedicated co-founder or COO partnership to multiply your delivery capacity.'
    }
  },
  {
    id: 'aux_youbi',
    nameZh: '右弼',
    nameEn: 'You Bi (The Strategic Coordinator)',
    pinyin: 'Yòu Bì',
    category: 'Lucky6',
    element: 'Water',
    symbolism: 'Social diplomacy, resource bridging, strategic cheerleading.',
    businessTranslation: {
      superpowerOrBottleneck: 'Exceptional cross-industry networking and resource mobilization skills.',
      contentStrategyImpact: 'High audience affinity across diverse demographics and platforms.',
      monetizationImpact: 'Excels at joint-venture commission deals and ecosystem monetization.',
      recommendedAction: 'Act as the strategic super-connector within your private client ecosystem.'
    }
  },
  {
    id: 'aux_wenchang',
    nameZh: '文昌',
    nameEn: 'Wen Chang (The Academic Author)',
    pinyin: 'Wén Chāng',
    category: 'Lucky6',
    element: 'Metal',
    symbolism: 'Formal credentials, books, structured curriculum, academic prestige.',
    businessTranslation: {
      superpowerOrBottleneck: 'Natural ability to write authoritative books, whitepapers, and accredited curricula.',
      contentStrategyImpact: 'High-performing long-form newsletters, LinkedIn articles, and published books.',
      monetizationImpact: 'High-ticket certification licensing and institutional author royalties.',
      recommendedAction: 'Publish a definitive industry book or comprehensive curriculum to anchor category authority.'
    }
  },
  {
    id: 'aux_wenqu',
    nameZh: '文曲',
    nameEn: 'Wen Qu (The Creative Storyteller)',
    pinyin: 'Wén Qū',
    category: 'Lucky6',
    element: 'Water',
    symbolism: 'Eloquent speech, charisma, audio-visual storytelling, artistic flair.',
    businessTranslation: {
      superpowerOrBottleneck: 'Irresistible spoken magnetism, viral podcast presence, and creative copywriting.',
      contentStrategyImpact: 'High viewer retention on short-form video, podcasts, and persuasive sales letters.',
      monetizationImpact: 'High conversion on webinars, live launches, and video sales letters (VSLs).',
      recommendedAction: 'Invest in high-grade podcast audio and deliver story-driven video essays.'
    }
  },
  {
    id: 'aux_tiankui',
    nameZh: '天魁',
    nameEn: 'Tian Kui (The Noble Patron / Daylight Benefactor)',
    pinyin: 'Tiān Kuí',
    category: 'Lucky6',
    element: 'Fire',
    symbolism: 'Senior mentors, explicit endorsements, public high-status benefactors.',
    businessTranslation: {
      superpowerOrBottleneck: 'Naturally gains direct introductions and public endorsements from senior industry leaders.',
      contentStrategyImpact: 'Feature high-status mentor testimonials and executive co-endorsements.',
      monetizationImpact: 'Bypasses gatekeepers to win enterprise CEO consulting retainers.',
      recommendedAction: 'Proactively seek out recognized industry masters for public mentorship alignments.'
    }
  },
  {
    id: 'aux_tianyue',
    nameZh: '天钺',
    nameEn: 'Tian Yue (The Hidden Benefactor / Nighttime Patron)',
    pinyin: 'Tiān Yuè',
    category: 'Lucky6',
    element: 'Fire',
    symbolism: 'Quiet behind-the-scenes support, unexpected opportunities, subtle favors.',
    businessTranslation: {
      superpowerOrBottleneck: 'Unexpected inbound client referrals and private introductions from silent champions.',
      contentStrategyImpact: 'Deep resonance with understated, high-net-worth decision makers.',
      monetizationImpact: 'High-ticket confidential advisory retainers with non-disclosure agreements.',
      recommendedAction: 'Maintain an immaculate reputation and build private relationship nurturing channels.'
    }
  },
  {
    id: 'aux_qingyang',
    nameZh: '擎羊',
    nameEn: 'Qing Yang (The Tactical Spearhead / Aggressive Driver)',
    pinyin: 'Qíng Yáng',
    category: 'Sha6',
    element: 'Metal',
    symbolism: 'Decisive execution, sharpness, surgical cuts, risk of friction.',
    businessTranslation: {
      superpowerOrBottleneck: 'Fierce execution speed and willingness to make tough decisions, but risks burning relationships.',
      contentStrategyImpact: 'High-conviction polarizing takes; cuts straight through industry fluff.',
      monetizationImpact: 'Excels at rapid turnaround consulting and crisis restructuring.',
      recommendedAction: 'Channel this aggressive energy into ruthless product quality while softening interpersonal delivery.'
    }
  },
  {
    id: 'aux_tuoluo',
    nameZh: '陀罗',
    nameEn: 'Tuo Luo (The Persistent Grinder / Resistance Loop)',
    pinyin: 'Tuó Luó',
    category: 'Sha6',
    element: 'Metal',
    symbolism: 'Obstinate persistence, deep refinement, delayed breakthroughs, repetitive friction.',
    businessTranslation: {
      superpowerOrBottleneck: 'Unmatched stamina to refine complex systems, but risks getting stuck in endless perfectionist loops.',
      contentStrategyImpact: 'Deep, multi-part investigative series and long-term methodology updates.',
      monetizationImpact: 'Takes longer to launch, but builds durable, difficult-to-replicate moats.',
      recommendedAction: 'Set strict hard deadlines to prevent perfectionist delay from killing launch momentum.'
    }
  },
  {
    id: 'aux_huoxing',
    nameZh: '火星',
    nameEn: 'Huo Xing (The Explosive Spark / Sudden Surge)',
    pinyin: 'Huǒ Xīng',
    category: 'Sha6',
    element: 'Fire',
    symbolism: 'Instant explosion, viral spikes, intense drive, volatility.',
    businessTranslation: {
      superpowerOrBottleneck: 'Generates overnight viral attention and sudden cashflow spikes, but lacks patience.',
      contentStrategyImpact: 'High-performing reactive content riding breaking industry news.',
      monetizationImpact: 'Flash launches, limited-time drop offers, and intense sprint cohorts.',
      recommendedAction: 'Pair explosive launch spikes with a stable recurring back-end to avoid feast-or-famine cycles.'
    }
  },
  {
    id: 'aux_lingxing',
    nameZh: '铃星',
    nameEn: 'Ling Xing (The Strategic Flame / Deep Focus)',
    pinyin: 'Líng Xīng',
    category: 'Sha6',
    element: 'Fire',
    symbolism: 'Quiet intensity, hidden strategy, deep grudge, relentless focus.',
    businessTranslation: {
      superpowerOrBottleneck: 'Quiet, laser-focused strategic execution that catches competitors completely off guard.',
      contentStrategyImpact: 'Thought-provoking contrarian essays with profound psychological depth.',
      monetizationImpact: 'Bespoke strategic consulting requiring deep discretion and stealth.',
      recommendedAction: 'Use this quiet tenacity to build breakthrough proprietary models behind closed doors.'
    }
  },
  {
    id: 'aux_dikong',
    nameZh: '地空',
    nameEn: 'Di Kong (The Metaphysical Innovator / Void Thinker)',
    pinyin: 'Dì Kōng',
    category: 'Sha6',
    element: 'Fire',
    symbolism: 'Unconventional creativity, breaking traditional logic, spiritual intuition, sudden reset.',
    businessTranslation: {
      superpowerOrBottleneck: 'Wildly unconventional thinking and paradigm-shifting creativity, but risks financial impracticality.',
      contentStrategyImpact: 'Avant-garde frameworks, philosophical essays, and disruptive concepts.',
      monetizationImpact: 'High-value intellectual breakthroughs when paired with a pragmatic operational partner.',
      recommendedAction: 'Always pair radical creative vision with strict cashflow controls and pragmatic milestones.'
    }
  },
  {
    id: 'aux_dijie',
    nameZh: '地劫',
    nameEn: 'Di Jie (The Contrarian Disruptor / Asset Transformer)',
    pinyin: 'Dì Jié',
    category: 'Sha6',
    element: 'Fire',
    symbolism: 'Non-linear career pivots, breaking established rules, resilience through loss.',
    businessTranslation: {
      superpowerOrBottleneck: 'Fearless ability to pivot and capitalize on market disruptions where others panic.',
      contentStrategyImpact: 'Raw vulnerability post-mortems: What failure taught me about success.',
      monetizationImpact: 'Pioneering completely new product categories before the market catches on.',
      recommendedAction: 'Embrace non-linear growth and avoid rigid 5-year corporate plans.'
    }
  }
];

export const ZIWEI_CLASSIC_PATTERNS: ZiweiClassicPattern[] = [
  {
    id: 'pattern_zifu',
    nameZh: '紫府同宫格',
    nameEn: 'The Dual Monarch (Zi Wei + Tian Fu in Life Palace)',
    pinyin: 'Zǐ Fǔ Tóng Gōng Gé',
    configurationDescription: 'Zi Wei and Tian Fu co-exist in the Life Palace (寅 or 申 palace). North and South Dipper Emperors combined.',
    starComposition: ['紫微 (Zi Wei)', '天府 (Tian Fu)'],
    traditionalAppraisal: '“紫府同宫，终身福厚” — The ultimate sovereign and treasury combination, naturally commanding wealth, respect, and high position.',
    modernIpModel: {
      commercialArchetype: 'The Platform Sovereign & Enterprise Ecosystem Builder',
      coreCompetitiveAdvantage: 'High institutional stature paired with deep operational stability and asset accumulation.',
      highestRoiOfferModel: 'Executive Advisory Retainers (RM10k-50k/mo) & Enterprise SaaS Platforms.',
      contentDistributionBlueprint: 'High-density institutional frameworks, board-level perspectives, and minimalist luxury video production.',
      riskMitigation: 'Avoid indecisiveness caused by competing desires for aggressive leadership (Zi Wei) and conservative comfort (Tian Fu).',
      realWorldAnalogy: 'Like Ray Dalio or Jensen Huang: Blends visionary category leadership with airtight institutional discipline.'
    }
  },
  {
    id: 'pattern_shapolang',
    nameZh: '杀破狼格',
    nameEn: 'The Disruptor Pioneer (Qi Sha + Po Jun + Tan Lang in San Fang)',
    pinyin: 'Shā Pò Láng Gé',
    configurationDescription: 'Qi Sha, Po Jun, and Tan Lang occupy the Life, Career, and Wealth palaces respectively.',
    starComposition: ['七杀 (Qi Sha)', '破军 (Po Jun)', '贪狼 (Tan Lang)'],
    traditionalAppraisal: '“杀破狼主一生多变，开创力极强” — The hallmark of pioneers, reformers, and transformational commanders.',
    modernIpModel: {
      commercialArchetype: 'The High-Velocity Disruptor & 0-to-1 Venture Builder',
      coreCompetitiveAdvantage: 'Unstoppable execution speed, fearlessness in dynamic markets, and magnetic charismatic launches.',
      highestRoiOfferModel: 'Turnaround Sprints, Rapid Launch Cohorts, and Venture Incubation Retainers.',
      contentDistributionBlueprint: 'Real-time building in public, unfiltered turnaround case studies, and contrarian industry challenges.',
      riskMitigation: 'Install a strong operational COO to capture and retain the value created during explosive launches.',
      realWorldAnalogy: 'Like Elon Musk or Alex Hormozi: Relentless iteration, radical honesty, and massive commercial gravity.'
    }
  },
  {
    id: 'pattern_jiyuetongliang',
    nameZh: '机月同梁格',
    nameEn: 'The Advisory Mastermind (Tian Ji + Tai Yin + Tian Tong + Tian Liang)',
    pinyin: 'Jī Yuè Tóng Liáng Gé',
    configurationDescription: 'Tian Ji, Tai Yin, Tian Tong, and Tian Liang interact harmoniously across the San Fang Si Zheng.',
    starComposition: ['天机 (Tian Ji)', '太阴 (Tai Yin)', '天同 (Tian Tong)', '天梁 (Tian Liang)'],
    traditionalAppraisal: '“机月同梁作吏人” — Traditionally top government counselors, prime ministers, and institutional architects.',
    modernIpModel: {
      commercialArchetype: 'The Boutique Strategy Consultant & Methodology Designer',
      coreCompetitiveAdvantage: 'Deep structural clarity, risk mitigation, sophisticated client nurturing, and airtight SOPs.',
      highestRoiOfferModel: 'Productized Brand Blueprints, Retainer Strategy Audits, and Private Mastermind Guilds.',
      contentDistributionBlueprint: '2x2 matrices, diagrammatic video teardowns, thoughtful newsletter essays, and case autopsies.',
      riskMitigation: 'Avoid being trapped in low-margin execution; constantly elevate to high-ticket strategic architecture.',
      realWorldAnalogy: 'Like McKinsey partners or top business authors (e.g. Jim Collins): Deep research, clean models, enduring trust.'
    }
  },
  {
    id: 'pattern_juri',
    nameZh: '巨日同宫格',
    nameEn: 'The Global Orator (Ju Men + Tai Yang in Yin Palace)',
    pinyin: 'Jù Rì Tóng Gōng Gé',
    configurationDescription: 'Ju Men and Tai Yang sit together in the Life Palace at 寅 (Yin), illuminating the gatekeeper with sunlight.',
    starComposition: ['巨门 (Ju Men)', '太阳 (Tai Yang)'],
    traditionalAppraisal: '“巨日同宫，官封三品” — The luminary dissipates darkness; world-class verbal persuasion and global fame.',
    modernIpModel: {
      commercialArchetype: 'The International Thought Leader & Forensic Keynote Speaker',
      coreCompetitiveAdvantage: 'Compelling verbal eloquence, forensic industry critique, and charismatic cross-border reach.',
      highestRoiOfferModel: 'High-Fee Keynotes (RM15k-50k), Global Masterclasses, and High-Impact Podcast Media.',
      contentDistributionBlueprint: 'High-production podcast debates, thought-provoking monologues, and international stage speeches.',
      riskMitigation: 'Ensure verbal critique remains constructive and supported by actionable frameworks to avoid toxic drama.',
      realWorldAnalogy: 'Like Simon Sinek or Chris Voss: Converts deep psychological insights into memorable, viral spoken doctrines.'
    }
  },
  {
    id: 'pattern_yangliangchanglu',
    nameZh: '阳梁昌禄格',
    nameEn: 'The Institutional Authority (Tai Yang + Tian Liang + Wen Chang + Lu Cun)',
    pinyin: 'Yáng Liáng Chāng Lù Gé',
    configurationDescription: 'Tai Yang and Tian Liang meet Wen Chang and Lu Cun in harmonious triangular combination.',
    starComposition: ['太阳 (Tai Yang)', '天梁 (Tian Liang)', '文昌 (Wen Chang)', '禄存 (Lu Cun)'],
    traditionalAppraisal: '“阳梁昌禄，胪传第一名” — Top imperial scholar; unquestioned official credentials and institutional glory.',
    modernIpModel: {
      commercialArchetype: 'The Certified Standard Setter & High-Ticket Academic Authority',
      coreCompetitiveAdvantage: 'Impeccable institutional credibility, bestselling book status, and industry accreditation power.',
      highestRoiOfferModel: 'Official Certification Programs, Corporate Training Licensing, and Executive Board Seats.',
      contentDistributionBlueprint: 'Whitepaper releases, accredited frameworks, academic keynote speeches, and definitive textbooks.',
      riskMitigation: 'Maintain approachable, real-world commercial pragmatism so academic rigor translates into immediate ROI.',
      realWorldAnalogy: 'Like Michael Porter or Harvard Business Review authors: The definitive textbook authority in their category.'
    }
  },
  {
    id: 'pattern_wutan',
    nameZh: '武贪同行格',
    nameEn: 'The High-Ticket Dealmaker (Wu Qu + Tan Lang in Chou/Wei Palace)',
    pinyin: 'Wǔ Tān Tóng Xíng Gé',
    configurationDescription: 'Wu Qu and Tan Lang combine in 丑 (Chou) or 未 (Wei). Metal and Wood/Water create dynamic commercial energy.',
    starComposition: ['武曲 (Wu Qu)', '贪狼 (Tan Lang)'],
    traditionalAppraisal: '“武贪同行，威镇边夷，晚发之格” — Late-blooming commercial titan; explodes with wealth and power in mature career.',
    modernIpModel: {
      commercialArchetype: 'The Seasoned Dealmaker & High-Yield Equity Strategist',
      coreCompetitiveAdvantage: 'Blends hard financial calculation (Wu Qu) with magnetic social deal-making (Tan Lang).',
      highestRoiOfferModel: 'Equity-Share Brand Advisory, M&A Packaging, and Performance-Based Revenue Retainers.',
      contentDistributionBlueprint: 'Unfiltered deal autopsies, commercial negotiation lessons, and high-stakes founder stories.',
      riskMitigation: 'Avoid impetuous get-rich-quick shortcuts in early career; build solid domain mastery for the inevitable late-stage boom.',
      realWorldAnalogy: 'Like Warren Buffett / Charlie Munger or seasoned private equity partners: Compounding wisdom and closing mastery.'
    }
  }
];
