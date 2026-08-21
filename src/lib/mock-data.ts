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
  name: '陈志远 (Alex Tan)',
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
    name: '策略型破局者 (Strategic Creator)',
    titleZh: '策略型破局者',
    tagline: '用结构化洞察、高维认知与清晰框架建立不可替代的行业权威。',
    description: '你天生具备强大的洞察力与战略思维，擅长将极其复杂的商业与认知难题提炼为清晰易懂的思维模型，能在极短时间内赢得高客单决策者的深度信任与专业尊重。',
    naturalRole: '商业顾问 / 认知导师 / 破局挑战者',
    audiencePerception: '沉着冷静、逻辑严密、洞察深刻、对专业标准绝不妥协',
    growthLever: '高密度认知拆解、对比思维模型与商业实战复盘',
    potentialBlindSpot: '在建立情感连接前过早阐述底层技术细节与复杂逻辑',
    recommendedFormats: [
      '坐姿结构化深度拆解视频',
      '2x2 对比定位矩阵剖析',
      '白板/iPad 思维导图推演',
      '高客单客户真实案例尸检'
    ],
  },
  secondaryArchetype: {
    id: 'arch_authority_builder',
    name: '权威建构者 (Authority Builder)',
    titleZh: '权威建构者',
    tagline: '通过制定行业标准与规则，建立天然的领导力与话语权。',
    description: '你赢得信任的方式从来不是迎合所有人，而是展现无法反驳的专业实力、强烈的战略定力以及清晰的边界感。',
    naturalRole: '行业标准制定者 / 高管导师',
    audiencePerception: '威严沉稳、值得托付、经验深厚的大师级专家',
    growthLever: '幕后决策逻辑拆解与逆主流趋势的独立观点',
    potentialBlindSpot: '对需要基础引导的小白用户可能显得过于严肃或有距离感',
    recommendedFormats: [
      '强观点型思想领导力内容',
      '行业迷思与伪概念辟谣',
      '高管圆桌与深度访谈'
    ],
  },
  supportingArchetype: {
    id: 'arch_clarity_synthesizer',
    name: '认知提炼者 (Clarity Synthesizer)',
    titleZh: '认知提炼者',
    tagline: '化繁为简，将海量信息转化为直击本质的行动指南。',
    description: '你拥有出色的降维表达能力，能够把晦涩的专业知识翻译成可立即落地的执行清单，让受众产生“醍醐灌顶”的顿悟感。',
    naturalRole: '方法论架构师 / 知识产品设计师',
    audiencePerception: '条理分明、清晰高效、实用落地',
    growthLever: '诊断自测清单与即插即用的商业工具模板',
    potentialBlindSpot: '可能过于聚焦工具层面，而弱化了自身的个人魅力与独家哲学',
    recommendedFormats: [
      '10分钟结构化大师课',
      '可落地的操作清单（Checklist）拆解',
      '方法论演进图谱'
    ],
  },
  positioningStatement:
    '帮助专业顾问、高管与企业主，将隐性专业经验转化为高辨识度的个人商业IP，摆脱低效内卷，建立持续获取高客单客户的影响力系统。',
  brandVoice: [
    '直接且富有战略定力（不绕弯子，直击商业本质）',
    '高信息密度（拒绝空洞鸡汤，每句话都有认知增量）',
    '冷静克制（拒绝夸张煽情与过度营销）',
    '专业顾问视角（以解决问题为导向，而非纯娱乐）'
  ],
  cameraPersonality: {
    recommended: [
      '坐姿深度对镜头讲解（书房/极简现代办公场景）',
      '语速保持 120-130 词/分钟，留白沉稳有力量',
      '配合 iPad/白板 手绘结构图进行认知拆解',
      '使用广播级麦克风（如 Shure SM7B），突出沉稳音频质感'
    ],
    avoid: [
      '抖音常见的快节奏蹦跳字幕与浮夸背景音效',
      '在屏幕前跟随流行音乐跳舞或夸张表演',
      '虚假的情感戏剧化与制造焦虑式营销',
      '无信息量的话题蹭热点'
    ],
  },
  audience: {
    primary:
      '年营收 RM200k - RM2M 的中小企业主、B2B 专业顾问、资深教练与高管，具备深厚专业积累，渴望建立个人品牌获取高客单客户。',
    secondary:
      '处于转型期的资深专业人士（律师、精算师、企业培训师），希望将自身经验产品化并建立行业话语权。',
    avoid:
      '寻找“7天快速暴富”的投机者、只看价格不重落地的伸手党、缺乏实操经验的纯理论讨论者。',
  },
};

export const FOUR_TRANSFORMATIONS: Record<string, TransformationDetail> = {
  LU: {
    key: 'LU',
    chineseName: '禄 (吸引引力)',
    chineseChar: '禄',
    pinyin: 'Lu',
    businessTitle: '共情吸引与商业引力 (Attraction)',
    themeColor: '#10B981',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    iconName: 'Sparkles',
    summary: '你天生吸引客户关注、产生共鸣并主动寻求合作的引力源泉。',
    strategicInsight:
      '对你的定位而言，吸引力并非来自搞笑娱乐，而是源于你能够精准用一句话说出目标客户心中多年未解的商业痛点。',
    recommendedContent: [
      '“为什么绝大多数资深顾问每天工作14小时，却始终突破不了收入瓶颈？”',
      '“年入百万与千万顾问之间，差的不是专业技能，而是这套定位底层逻辑”',
      '“你的专业能力很强，但客户为什么总觉得你和普通同行没区别？”'
    ],
    avoidances: [
      '前10秒缺乏认知密度的标题党点击诱饵',
      '试图讨好预算不足且非目标画像的初级小白'
    ],
    suggestedCTAs: [
      '在评论区回复【诊断】，免费领取《5步个人品牌定位体检清单》',
      '建议收藏本期框架，下次优化服务报价时对照使用'
    ],
    samplePrompt: '为什么大多数专业人士做个人IP会失败？因为他们把商业定位当成了网红发帖。'
  },
  QUAN: {
    key: 'QUAN',
    chineseName: '权 (权威定力)',
    chineseChar: '权',
    pinyin: 'Quan',
    businessTitle: '专业权威与领导定力 (Authority)',
    themeColor: '#F59E0B',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderColor: 'border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.2)',
    iconName: 'ShieldCheck',
    summary: '树立行业标准、确立专业边界并掌控议价主导权的核心能量。',
    strategicInsight:
      '权威不是靠自夸，而是通过敢于公开挑战行业伪共识、输出高穿透力见解来建立的。',
    recommendedContent: [
      '“公开唱反调：为什么我建议年营收低于50万的顾问千万不要做低价引流课？”',
      '“深度复盘：我们如何把一位财务顾问的客单价从 RM1,500 提升至 RM18,000 咨询年框”',
      '“真正的高客单客户在买单时，真正看重的3个核心决策信号”'
    ],
    avoidances: [
      '为了讨好大众而模糊自己的专业边界',
      '跟风模仿没有根据的网络流行观点'
    ],
    suggestedCTAs: [
      '若你的业务目前面临同样的定位瓶颈，欢迎预约一对一深度诊断',
      '转发给正在重塑商业模式的合伙人'
    ],
    samplePrompt: '低价竞争是认知懒惰的避难所：专业人士如何跳出小时计费陷阱？'
  },
  KE: {
    key: 'KE',
    chineseName: '科 (信任背书)',
    chineseChar: '科',
    pinyin: 'Ke',
    businessTitle: '信任背书与专业口碑 (Trust & Proof)',
    themeColor: '#3B82F6',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.2)',
    iconName: 'Award',
    summary: '将客户的疑虑转化为确定性，建立长期高复购信任资产。',
    strategicInsight:
      '用真实客户案例实战拆解、逻辑闭环与交付过程透明化，构建坚不可摧的专业信用护城河。',
    recommendedContent: [
      '“实操全过程拆解：从0到1构建高转化个人商业IP的8个关键里程碑”',
      '“我们为某B2B企业设计的客户筛选问卷与成交话术SOP”',
      '“一位企业高管转型独立顾问的前90天真实经历与避坑指南”'
    ],
    avoidances: [
      '只展示炫耀式收入截图，而没有交付逻辑与实战方法',
      '使用模糊无法验证的虚假客户评价'
    ],
    suggestedCTAs: [
      '点击主页链接，查阅完整客户交付案例库与白皮书',
      '在后台私信【蓝图】，获取完整实操文档'
    ],
    samplePrompt: '拆解一个真实商业案例：如何将10年隐性专业经验提炼为标准产品？'
  },
  JI: {
    key: 'JI',
    chineseName: '忌 (盲点突破)',
    chineseChar: '忌',
    pinyin: 'Ji',
    businessTitle: '认知盲点与危机突破 (Breakthrough)',
    themeColor: '#8B5CF6',
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(139, 92, 246, 0.2)',
    iconName: 'AlertTriangle',
    summary: '揭示最致命的认知陷阱与战略误区，帮助受众避坑避险。',
    strategicInsight:
      '指出客户看不见但正在造成巨大隐性损失的致命盲区，能瞬间建立无可替代的高价值顾问认知。',
    recommendedContent: [
      '“90%的专家在做自媒体时最常犯的3个致命定位错误”',
      '“为什么你输出的内容点赞很高，却从来没有高净值客户找你咨询？”',
      '“盲目追求粉丝量是很多实体老板转型做IP最大的时间陷阱”'
    ],
    avoidances: [
      '只指出问题却不给解决方案，导致受众产生绝望感',
      '过度自责或攻击同行的攻击性言论'
    ],
    suggestedCTAs: [
      '对照自测：这3个定位盲区中，你目前占了几个？',
      '立即预约私人诊断，排查当前商业定位中的致命阻碍'
    ],
    samplePrompt: '为什么高点赞量反而可能毁掉你的高客单咨询业务？'
  }
};

export const INITIAL_CONTENT_PILLARS: ContentPillar[] = [
  {
    id: 'pillar_01',
    title: '高客单商业案例深度尸检',
    chineseTitle: '商业案例深度复盘',
    description: '深度解剖高客单客户的真实转型过程，剖析核心痛点、定位重塑与业绩增长的底层逻辑。',
    ratioPercent: 35,
    transformation: 'QUAN',
    examples: [
      '“从单次 RM1,500 到年框 RM18,000 的定位升级全复盘”',
      '“传统B2B企业主如何用个人IP拿下300万大单”'
    ]
  },
  {
    id: 'pillar_02',
    title: '高穿透力逆主流观点',
    chineseTitle: '逆主流认知洞察',
    description: '挑战行业流行但无效的表面做法，树立独特的专业观点与权威边界。',
    ratioPercent: 30,
    transformation: 'QUAN',
    examples: [
      '“为什么你不需要10万粉丝也能年入百万？”',
      '“低价引流课正在杀死专业顾问的商业信誉”'
    ]
  },
  {
    id: 'pillar_03',
    title: '认知诊断与自测清单',
    chineseTitle: '定位体检与工具清单',
    description: '提供结构化的自我排查工具与评估模型，让潜在客户在互动中感知专业差距。',
    ratioPercent: 20,
    transformation: 'KE',
    examples: [
      '“5分钟自测：你的个人IP具备高客单变现力吗？”',
      '“专业顾问服务产品化自检清单（20条关键指标）”'
    ]
  },
  {
    id: 'pillar_04',
    title: '幕后战略决策实录',
    chineseTitle: '幕后决策思考',
    description: '真实分享作为商业顾问在战略制定、客户筛选与产品迭代时的深度思考。',
    ratioPercent: 15,
    transformation: 'LU',
    examples: [
      '“为什么我们拒绝了一个年付10万的客户？”',
      '“我们在设计2026年商业模式时的3个核心假设”'
    ]
  }
];

export const INITIAL_BUSINESS_OFFERS: BusinessOffer[] = [
  {
    id: 'offer_lead_magnet',
    tier: 'Free',
    name: '五维个人商业IP智能体检问卷',
    priceFormatted: '免费 (Free)',
    priceNumeric: 0,
    promise: '3分钟获取专属IP定位快照与5大维度诊断得分，看清天然核心优势。',
    audience: '渴望看清自我定位与商业路径的顾问、企业主与创作者。',
    deliverables: [
      '专属主辅IP原型分析报告',
      '5大维度能力得分（权威/信任/吸引/表达/变现）',
      '前3条核心破局战略建议',
      '高清可分享原型卡片'
    ],
    cta: '立即免费测试',
    conversionFunnelStage: '流量引流与认知破冰'
  },
  {
    id: 'offer_tripwire',
    tier: 'Entry',
    name: '紫微IP定位战略蓝图',
    priceFormatted: 'RM 299 (一次性)',
    priceNumeric: 299,
    promise: '获得一套完整的个人品牌战略地图与30天内容落地引擎。',
    audience: '准备认真把个人经验变现为商业影响力的专业人士。',
    deliverables: [
      '完整五维IP模型与深层张力解析',
      '精准目标受众筛选与反向过滤标准',
      '定制化品牌语态与防坑准则',
      '四化内容飞轮分配比例与4大核心内容支柱',
      '高客单产品阶梯设计与30天行动日历'
    ],
    cta: '解锁完整战略蓝图',
    conversionFunnelStage: '付费转化与意向筛选'
  },
  {
    id: 'offer_core_masterclass',
    tier: 'Core',
    name: '《紫微IP定位学》 核心大师课',
    priceFormatted: 'RM 899 (一次性)',
    priceNumeric: 899,
    promise: '8大战略实战模块，带你从底层认知到构建完整的高客单商业闭环。',
    audience: '需要手把手建立内容与商业操作系统的顾问、教练与创始人。',
    deliverables: [
      '8大核心视频实战模块（终身有效）',
      '即插即用的实战工作手册与模板工具',
      '与战略蓝图实时同步的个人资产库',
      '社群交流与后续更新权益'
    ],
    cta: '开启体系化学习',
    conversionFunnelStage: '核心知识交付与能力赋能'
  },
  {
    id: 'offer_pro_membership',
    tier: 'Continuity',
    name: 'ZIWEI IP PRO 会员',
    priceFormatted: 'RM 99 / 月 (或 RM 899 / 年)',
    priceNumeric: 99,
    promise: '无限次调用 AI 创作工作室与 AI 专属战略教练，保持每周高效产出。',
    audience: '每周持续发布内容、需要高质量灵感与即时战略反馈的创作者与顾问。',
    deliverables: [
      '无限次 AI 脚本与爆款选题生成',
      '7大平台一键智能内容分发重构引擎',
      '7天主题战役连载内容生成器',
      '24/7 上下文感知的 AI 专属战略教练',
      '每周自动化发布数据与策略复盘'
    ],
    cta: '升级为 PRO 会员',
    conversionFunnelStage: '高频日常使用与订阅留存'
  },
  {
    id: 'offer_elite_coaching',
    tier: 'Premium',
    name: '商业IP高阶私享陪跑计划',
    priceFormatted: 'RM 3,800+ (8-12周)',
    priceNumeric: 3800,
    promise: '由资深品牌战略顾问一对一深度指导，打造专属于你的高客单商业IP交付系统。',
    audience: '月营收 RM20k 以上、希望彻底摆脱低效内卷的企业主、头部顾问与高管。',
    deliverables: [
      '一对一深度认知诊断与商业定位重塑',
      '高客单产品结构设计与定价阶梯制定',
      '坐姿视频出镜表现力与表达节奏一对一调优',
      '季度四化内容路线图与引流话术设计',
      '专属战略顾问微信直接沟通答疑通道'
    ],
    cta: '申请私享陪跑席位',
    conversionFunnelStage: '高客单咨询转化与深度交付'
  }
];

export const ACADEMY_MODULES: AcademyModule[] = [
  {
    id: 'mod_01',
    moduleNumber: '01',
    title: '第一模块：看懂天赋本性，确立商业定位',
    subtitle: 'Nature & Positioning Calibration',
    durationMinutes: 45,
    completed: true,
    keyInsights: [
      '为什么从“我是谁”出发做个人品牌，比盲目迎合市场流行快10倍且永不内耗。',
      '主辅原型的战略张力：如何在权威沉稳与共情亲和之间找到完美平衡点。',
      '定位的核心不是给自己贴标签，而是清晰定义你的“商业主战场”与“不做什么”。'
    ],
    lessonContent: '在本模块中，我们将结合紫微命盘的核心星盘能量，精准提炼出你最值得放大的个人天赋，并将其转化为高辨识度的商业定位陈述句。',
    workbookPrompts: [
      {
        id: 'q1_1',
        question: '用一句话写出你的专属商业定位（我是谁 + 帮助谁 + 解决什么核心问题 + 带来什么结果）：',
        placeholder: '例如：我帮助年营收50万以上的中小企业主，通过结构化IP打造高客单引流系统...',
        userAnswer: '帮助专业顾问、高管与企业主，将隐性专业经验转化为高辨识度的个人商业IP，摆脱低效内卷，建立持续获取高客单客户的影响力系统。'
      },
      {
        id: 'q2_1',
        question: '列出3个你在行业中绝对不服务、主动过滤的客户画像：',
        placeholder: '例如：只看价格的投机者、没有实操经验的理论党...',
        userAnswer: '1. 寻找快速暴富捷径的小白；2. 习惯比价的伸手党；3. 缺乏执行力只想听鸡汤的人。'
      }
    ],
    actionTask: '完成定位陈述句并在学员群中进行同行压力测试。'
  },
  {
    id: 'mod_02',
    moduleNumber: '02',
    title: '第二模块：目标客户画像与反向过滤法则',
    subtitle: 'Audience Disqualification & Filtering',
    durationMinutes: 50,
    completed: true,
    keyInsights: [
      '高客单客户买单的3个隐性心理门槛：确定性、专业共鸣、边界感。',
      '反向营销的力量：敢于公开拒绝不匹配的客户，反而会让优质客户对你深信不疑。',
      '设计你的“防小白”内容过滤器，让每一次咨询都是高质量意向客户。'
    ],
    lessonContent: '学习如何精准识别真正有付费能力且懂得尊重专业价值的高价值客户，并在所有前端内容中植入自然的筛选机制。',
    workbookPrompts: [
      {
        id: 'q2_1_mod2',
        question: '你的理想核心买家目前最难以忍受的3个商业痛点是什么？',
        placeholder: '写下他们夜不能寐的核心焦虑...',
        userAnswer: '1. 收入过度依赖不稳定的人脉转介绍；2. 专业实力强但在市场上缺乏知名度；3. 咨询单价低导致精力耗尽。'
      }
    ],
    actionTask: '优化个人主页简介，植入清晰的受众反向过滤话术。'
  },
  {
    id: 'mod_03',
    moduleNumber: '03',
    title: '第三模块：个人品牌语态与出镜镜头人设',
    subtitle: 'Brand Voice & Camera Presence',
    durationMinutes: 40,
    completed: false,
    keyInsights: [
      '为什么专业人士不需要假装热情奔放：安静的力量如何转化高客单决策者。',
      '坐姿深度视频录制的4大黄金法则：布景、语速留白、眼神与手势。',
      '定义你的品牌负面清单：哪些词汇、语气与套路永远不要出现在你的内容中。'
    ],
    lessonContent: '告别镜头恐惧与虚假表演，找到最舒适、最具穿透力的自然表达状态，让屏幕前的受众感受到强大的专业气场。',
    workbookPrompts: [
      {
        id: 'q3_1',
        question: '写下3条你在镜头表达中坚决禁止的负面行为（Anti-Tone）：',
        placeholder: '例如：禁止使用夸张震惊体、禁止在短视频中跟随音乐跳舞...',
        userAnswer: '1. 坚决不用快节奏弹幕与制造焦虑的话术；2. 绝不迎合泛娱乐流行梗；3. 绝不讲未经实操验证的大道理。'
      }
    ],
    actionTask: '录制一段60秒坐姿出镜短视频并上传至作业区进行导师批改。'
  },
  {
    id: 'mod_04',
    moduleNumber: '04',
    title: '第四模块：四化内容飞轮运转体系',
    subtitle: 'Four Transformation Content Engine',
    durationMinutes: 60,
    completed: false,
    keyInsights: [
      '禄（吸引）、权（权威）、科（信任）、忌（盲点）的科学配比逻辑。',
      '如何避免账号沦为纯教学账号或纯鸡汤账号的失衡陷阱。',
      '打造季度内容飞轮：每周4篇内容如何协同推动潜在客户完成购买决策。'
    ],
    lessonContent: '掌握紫微四化在现代内容战略中的深度应用，让每一篇内容都承担明确的商业使命。',
    workbookPrompts: [
      {
        id: 'q4_1',
        question: '规划你下周的4篇内容主题（禄/权/科/忌各1篇）：',
        placeholder: '禄：吸引共鸣话题；权：权威观点；科：案例复盘；忌：误区排查...',
        userAnswer: ''
      }
    ],
    actionTask: '在 AI 创作工作室中生成完整的下周4篇脚本初稿。'
  },
  {
    id: 'mod_05',
    moduleNumber: '05',
    title: '第五模块：4大核心内容支柱与爆款选题库',
    subtitle: 'Content Pillars & Endless Topic Ideation',
    durationMinutes: 55,
    completed: false,
    keyInsights: [
      '建立永不枯竭的12大签名选题库（Signature Topics）。',
      '从客户日常咨询与交付现场中提取高价值选题的方法论。',
      '爆款钩子（Hook）的3大公式：认知反差、代价前置、结构化对比。'
    ],
    lessonContent: '搭建专属于你的内容支柱资产库，告别每天抓耳挠腮想选题的创作痛苦。',
    workbookPrompts: [
      {
        id: 'q5_1',
        question: '提炼属于你的3个核心签名话题：',
        placeholder: '这是任何人提到你都会瞬间想到的专业领域...',
        userAnswer: ''
      }
    ],
    actionTask: '在系统内收藏并整理出属于你的12个高优先级选题。'
  },
  {
    id: 'mod_06',
    moduleNumber: '06',
    title: '第六模块：高客单产品阶梯与定价设计',
    subtitle: 'Offer Ladder & Pricing Architecture',
    durationMinutes: 65,
    completed: false,
    keyInsights: [
      '五阶产品天梯模型：免费引流 $\rightarrow$ 低门槛破冰 $\rightarrow$ 核心课程 $\rightarrow$ 持续会员 $\rightarrow$ 私享高客单。',
      '基于价值而非时间的定价心法：如何自信报出 RM5,000+ 的咨询费。',
      '如何将非标的服务经验包装成客户一眼能看懂的标准交付方案。'
    ],
    lessonContent: '重新梳理你的知识与经验资产，设计出一套层层递进、自然转化的商业产品阶梯。',
    workbookPrompts: [
      {
        id: 'q6_1',
        question: '设计你的高客单核心产品名称、价格与交付承诺：',
        placeholder: '例如：12周一对一商业定位陪跑，售价 RM4,800...',
        userAnswer: ''
      }
    ],
    actionTask: '在商业构建器中完成5阶产品阶梯的配置与更新。'
  },
  {
    id: 'mod_07',
    moduleNumber: '07',
    title: '第七模块：高转化私域承接与咨询闭环',
    subtitle: 'Inbound Conversion & Sales Funnel',
    durationMinutes: 50,
    completed: false,
    keyInsights: [
      '从公域短视频到私域微信/领英的无痕引流路径设计。',
      '20分钟战略诊断对话框架：不推销也能让客户主动追问如何合作。',
      '异议处理心法：当客户说“价格太贵”时，高段位顾问该如何优雅应对。'
    ],
    lessonContent: '打通从公域流量到私域成交的最后一公里，让内容带来的影响力真正转化为真金白银的商业回报。',
    workbookPrompts: [
      {
        id: 'q7_1',
        question: '写下你的核心引流话术（Lead Magnet CTA）：',
        placeholder: '在每期视频结尾你将如何引导客户产生互动...',
        userAnswer: ''
      }
    ],
    actionTask: '编写并演练一段20分钟的客户初次诊断问答脚本。'
  },
  {
    id: 'mod_08',
    moduleNumber: '08',
    title: '第八模块：30天个人商业IP启动与执行飞轮',
    subtitle: '30-Day Launch & Operating Cadence',
    durationMinutes: 45,
    completed: false,
    keyInsights: [
      '周发布节奏表：如何用每周3小时的时间精力维持高品质IP运营。',
      '核心数据追踪：摆脱泛点赞焦虑，只看咨询量、线索量与成交转化率。',
      '长期主义心法：如何在6-12个月内建立不可撼动的行业细分领袖地位。'
    ],
    lessonContent: '制定清晰的30天执行里程碑，将所有学到的策略落地为日常可执行的创作者工作流。',
    workbookPrompts: [
      {
        id: 'q8_1',
        question: '你的未来30天核心执行目标（视频发布数量 + 获取线索数量 + 目标营收）：',
        placeholder: '写下具体数字与截止日期...',
        userAnswer: ''
      }
    ],
    actionTask: '生成并导出你的30天落地行动计划日历。'
  }
];

export const DEMO_BUSINESS_METRICS: BusinessMetrics = {
  leads: 142,
  consultations: 28,
  sales: 14,
  revenueRM: 48600,
  contentPublishedCount: 16,
  videosCreatedCount: 12,
  targetContentCount: 20,
  transformationMix: {
    authority: 48,
    trust: 23,
    attraction: 21,
    breakthrough: 8
  }
};

export const INITIAL_SAVED_SCRIPTS: GeneratedScript[] = [
  {
    id: 'script_01',
    topic: '为什么年薪百万的顾问从来不卖小时咨询？',
    contentType: 'Opinion',
    transformation: 'QUAN',
    hookOptions: [
      { text: '如果你还在按小时计费，说明你根本没有找到自己的商业杠杆。', score: 96, style: '高定力挑战' },
      { text: '一位年入百万的资深顾问，绝不会把时间卖给任何人。', score: 91, style: '对比悬念' },
      { text: '小时计费是专业人士通往财务自由最大的陷阱。', score: 88, style: '代价警示' }
    ],
    coreIdea: '按小时计费惩罚了专业效率，只有将专业能力产品化、按解决问题的商业价值收费，才能跳出时间穷忙陷阱。',
    script30s: '如果你还在按小时收费，说明你的商业模式还在石器时代。真正的顶级顾问卖的从来不是时间，而是确定性与商业结果。当你能帮客户多赚100万，收10万咨询费就是理所当然。关注我，教你将专业经验转化为高客单商业IP。',
    script60s: '为什么绝大多数专业顾问每天工作14个小时，收入却始终突破不了瓶颈？因为你在按小时计费。当你越专业，解决问题越快，按小时收费反而赚得越少——这在商业逻辑上是极其荒谬的。真正聪明的做法只有一种：将隐性专业能力提炼为标准化的方法论资产，按商业价值定价。评论区回复【蓝图】，获取完整的高客单产品阶梯设计指南。',
    cta: '在评论区回复【蓝图】，获取完整的高客单产品阶梯设计指南。',
    caption: '按小时计费正在悄悄惩罚你的专业效率。专业人士如何跳出时间陷阱？本期深度拆解。 #个人商业IP #商业模式 #高客单变现',
    thumbnailTitle: '告别小时计费\n年入百万的商业底层逻辑',
    bRollIdeas: ['特写：在 iPad 上勾画产品价值阶梯', '中景：沉稳坐姿对镜头直视表达'],
    shotSuggestions: ['0-10s 镜头推近强调挑战观点', '10-45s 配合白板图表分步推演', '45-60s 定焦收尾给出行动指令'],
    createdAt: '2026-08-20T14:30:00Z',
    saved: true
  }
];

export const AI_COACH_KNOWLEDGE_RESPONSES: Record<string, string> = {
  post_today: `根据你的 **策略型破局者 (Strategic Creator)** 蓝图与本周发布数据，你当前的能量配比为 **48% 权威 (QUAN)** 与 **21% 吸引 (LU)**。

建议你今天发布一篇 **科 (KE 信任背书)** 类型的实战复盘，以平衡内容生态并带动高客单咨询转化：

🎯 **推荐核心选题**：
*“真实案例复盘：我们如何把一位精品财务顾问的客单价，从 RM1,500 单次收费提升至 RM18,000 咨询年框？”*

💡 **战略切入角度**：
详细拆解他们面临的3大定位瓶颈，展示前后对比矩阵图，并在结尾引导预约 20 分钟战略定位体检。

需要我立即为你打开 AI 创作工作室并生成 60 秒的视频脚本和 3 组高转化钩子吗？`,

  what_to_sell: `结合你 **88分的变现势能** 与 **策略型破局者** 主原型，你的天然盈利区间是高客单深度交付，而非靠低价走量课走弯路。

建议你的产品阶梯按如下方式配置：

1. 🆓 **引流钩子 (免费)**：《五维个人商业IP智能体检问卷》（筛选有认知基础的潜在客户）。
2. 🚀 **低门槛破冰 (RM299)**：《紫微IP定位战略蓝图》（过滤高意向付费买家）。
3. 💎 **核心大师课 (RM899)**：《紫微IP定位学》8大实战模块。
4. 👑 **私享高客单 (RM3,800+)**：8-12周一对一商业IP落地陪跑（每季度严格限制6席）。

每月只需新增 2 位私享陪跑客户与 20 位大师课学员，即可轻松实现 **RM20,000+ 稳健月营收**。`,

  not_converting: `深入排查你的内容“高点赞但低转化”的底层原因。结合你的原型盲点分析：

⚠️ **核心摩擦点**：*在建立情感共鸣前，过早且过度阐述复杂的技术细节与专业术语。*

当你在内容一开始就堆砌过多方法论框架时：
1. 受众在理智上觉得你很厉害，但并没有感受到自身当前痛点的紧迫代价。
2. 你的结尾行动指令（CTA）显得像是在给他们布置课后作业，而非提供解药。

🛠️ **本周3大立竿见影的调整策略**：
- **钩子前置代价**：从不改变的商业损失切入（“这个定位误区让一位学员上季度白白损失了 RM40k...”）。
- **单篇只讲一个核心突破点**：每期视频只聚焦 1 个顿悟，拒绝一期讲 5 个大点。
- **使用极简指令型 CTA**：提示回复单一词汇（如：在评论区回复【诊断】），降低行动门槛。`,

  video_fit: `基于你的 **策略型破局者 / 权威建构者** 复合原型，你应当坚决避开泛娱乐、快节奏与浮夸的网红风格。

你的黄金镜头配置：
- **场景**：极简现代书房、实木大桌或极简办公扶手椅。
- **视觉辅助**：iPad Pro 屏幕手绘思维导图或物理白板推演。
- **音频质感**：沉稳、不疾不徐、咬字清晰有力量。
- **时长**：短视频控制在 45-75 秒，深度长视频 8-12 分钟。

🚫 **坚决禁止**：
- 屏幕上方花哨跳动的荧光绿字幕。
- 跟着流行音乐指点空中弹出的文本框。
- 制造夸张的情感闹剧。

你的核心武器是**认知重力**。让你的深度替你完成高客单成交。`,

  ideal_audience: `根据你的商业战略蓝图，你 ROI 最高的目标客户画像为：

👔 **核心买家画像**：
- 年营收在 RM200k - RM2M 的中小企业主、B2B 资深顾问、高管教练与专业人士。
- 拥有 8 年以上的真实行业经验，但受够了完全依赖不稳定的人脉转介绍。
- 具备充足的支付能力与强烈的付费意愿（乐意为清晰的战略定位投资 RM3k - RM10k）。

❌ **主动过滤的非目标人群**：
- 渴望“7天快速暴富”的小白群体。
- 习惯性比价、索要免费资料却从不行动的看客。`,

  how_to_position: `结合你的 **权威定力 (92)** 与 **信任背书 (87)**，你的黄金定位公式应为：

*“我帮助专业顾问、高管与企业主，将隐性专业经验转化为高辨识度的个人商业IP，摆脱低效内卷，建立持续获取高客单客户的影响力系统。”*

在每一篇内容中反复锚定的3大核心理念：
1. **深度胜过泛流量**：你不需要10万泛粉，也能实现年入百万。
2. **方法论重于技巧**：持续的影响力是系统工程，绝非碰运气。
3. **顺应本性自然发光**：顺应天赋做IP，才能长久且不内耗。`
};
