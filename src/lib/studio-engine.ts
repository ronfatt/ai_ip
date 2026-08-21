// AI Content Studio 核心引擎与策略检测算法 (全中文版)

import {
  ContentIntent,
  IntentConfig,
  FormatDuration,
  TonePreset,
  AudiencePreset,
  ScriptDraft,
  IdeaCard,
  SeriesCampaign,
  RepurposedContent
} from '@/types/studio-coach';
import { UserProfile } from '@/types/database';

export const INTENT_CONFIGS: Record<ContentIntent, IntentConfig> = {
  authority_breakdown: {
    id: 'authority_breakdown',
    title: '深度权威拆解',
    titleZh: '深度权威拆解',
    transformation: 'QUAN',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    description: '通过严密逻辑与高维框架挑战行业伪共识，建立不可动摇的标准与定力。',
    defaultFormula: '【认知反差】+【本质拆解】+【商业解法】+【权威行动指令】'
  },
  contrarian_view: {
    id: 'contrarian_view',
    title: '逆主流洞察',
    titleZh: '逆主流洞察',
    transformation: 'QUAN',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    description: '公开发表与主流相反但直击本质的犀利观点，迅速筛选同频高质量客户。',
    defaultFormula: '【逆向观点】+【传统陷阱代价】+【底层逻辑推演】+【筛选反向指令】'
  },
  case_autopsy: {
    id: 'case_autopsy',
    title: '真实案例尸检',
    titleZh: '真实案例尸检',
    transformation: 'KE',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    description: '深入解剖高客单客户真实转型过程，用事实与交付细节构建无可撼动的信任。',
    defaultFormula: '【前后对比悬念】+【核心瓶颈排查】+【3步定位重构】+【数据结果见证】'
  },
  checklist_audit: {
    id: 'checklist_audit',
    title: '诊断自测清单',
    titleZh: '诊断自测清单',
    transformation: 'KE',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    description: '提供即插即用的结构化自查清单，让受众在自评过程中感知专业差距。',
    defaultFormula: '【指标量化体检】+【高频盲点排查】+【对照评分体系】+【领取清单指令】'
  },
  unspoken_frustration: {
    id: 'unspoken_frustration',
    title: '隐性痛点共鸣',
    titleZh: '隐性痛点共鸣',
    transformation: 'LU',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    description: '精准说出高价值客户长期存在却无人言说的内心焦虑，瞬间激发强烈引力。',
    defaultFormula: '【扎心情境还原】+【情绪与商业共振】+【认知升维破局】+【私信领取解药】'
  },
  behind_the_scenes: {
    id: 'behind_the_scenes',
    title: '幕后战略实录',
    titleZh: '幕后战略实录',
    transformation: 'LU',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    description: '展示商业决策与交付现场的真实思考，展现真实立体的专家人格魅力。',
    defaultFormula: '【决策现场还原】+【重大取舍哲学】+【商业收获反思】+【互动引发讨论】'
  },
  blind_spot_warning: {
    id: 'blind_spot_warning',
    title: '致命盲区预警',
    titleZh: '致命盲区预警',
    transformation: 'JI',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    description: '警示正在造成重大隐性亏损的战略盲点，让受众产生急迫的避险需求。',
    defaultFormula: '【隐性危机警报】+【致命损失计算】+【误区根源揭秘】+【预约排查指令】'
  },
  offer_invitation: {
    id: 'offer_invitation',
    title: '高客单服务邀请',
    titleZh: '高客单服务邀请',
    transformation: 'QUAN',
    badgeColor: 'text-brand-champagne bg-brand-champagne/15 border-brand-champagne/30',
    description: '清晰阐述高阶服务的交付承诺与筛选标准，吸引高意向精准客户主动咨询。',
    defaultFormula: '【服务交付承诺】+【适合与不适合画像】+【席位限制规则】+【申请审核通道】'
  }
};

export const SMART_IDEAS_BANK: IdeaCard[] = [
  {
    id: 'idea_01',
    topic: '为什么年入百万的资深顾问从来不卖单次小时咨询？',
    intent: 'authority_breakdown',
    transformation: 'QUAN',
    matchScore: 96,
    reasonZh: '精准匹配你的权（Authority 92）能量，挑战行业按小时计费的伪常识。',
    hookSample: '如果你还在按小时收费，说明你的商业模式还在石器时代。真正的顶级顾问卖的从来不是时间，而是确定性。'
  },
  {
    id: 'idea_02',
    topic: '真实复盘：我们如何把一位财务顾问的单次 RM1,500 收费重塑为 RM18,000 咨询年框？',
    intent: 'case_autopsy',
    transformation: 'KE',
    matchScore: 94,
    reasonZh: '发挥科（Trust 87）的案例背书优势，用具体数据打消高净值客户疑虑。',
    hookSample: '3个月前，一位拥有10年经验的精品财务顾问找到我，每天忙到半夜却只有微薄收入。这是我们重构其定位的全过程。'
  },
  {
    id: 'idea_03',
    topic: '90%的专家在做个人IP时最常犯的3个致命定位错误',
    intent: 'blind_spot_warning',
    transformation: 'JI',
    matchScore: 91,
    reasonZh: '切入忌（Breakthrough）盲点，警示表面高点赞但零转化的流量陷阱。',
    hookSample: '很多专家做自媒体，点赞破万但从来没人找他买单。今天一次性把最致命的3个定位盲区讲透。'
  },
  {
    id: 'idea_04',
    topic: '为什么绝大多数资深专业人士每天工作14小时，却始终突破不了收入瓶颈？',
    intent: 'unspoken_frustration',
    transformation: 'LU',
    matchScore: 89,
    reasonZh: '激发禄（Attraction 76）共鸣，精准直击高管与顾问群体内心的深层疲惫。',
    hookSample: '你拥有行业顶尖的专业实力，但为什么客户在买单时总是犹豫不决？根本原因在于你缺乏一套定位翻译系统。'
  },
  {
    id: 'idea_05',
    topic: '公开唱反调：为什么我建议年营收低于50万的顾问千万不要做低价引流课？',
    intent: 'contrarian_view',
    transformation: 'QUAN',
    matchScore: 95,
    reasonZh: '强观点逆向切入，过滤只贪图便宜的非目标受众，锚定高客单定位。',
    hookSample: '低价引流课正在悄悄杀死专业人士的商业品牌。今天冒着被同行骂的风险，也要告诉你背后的真相。'
  },
  {
    id: 'idea_06',
    topic: '5分钟自测：你的个人商业IP是否具备高客单溢价能力？（20项诊断清单）',
    intent: 'checklist_audit',
    transformation: 'KE',
    matchScore: 92,
    reasonZh: '用结构化清单建立专业门槛，让潜在客户在自测中主动寻求合作。',
    hookSample: '拿出一张纸，对照这5条标准自测。如果只满足不到3条，你的内容根本无法支撑高客单报价。'
  },
  {
    id: 'idea_07',
    topic: '为什么我们上周坚决拒绝了一个年付10万的客户？谈谈专业顾问的边界感',
    intent: 'behind_the_scenes',
    transformation: 'LU',
    matchScore: 88,
    reasonZh: '通过幕后拒绝客户的真实故事展现专业定力，反而引发真正优质客户的敬重。',
    hookSample: '不是所有给钱的客户都值得接。上周我们主动退掉了一个10万的定金，原因只有一条：战略价值观不符。'
  },
  {
    id: 'idea_08',
    topic: '商业IP私享陪跑席位招募：如何用8周时间打造专属于你的高客单交付系统？',
    intent: 'offer_invitation',
    transformation: 'QUAN',
    matchScore: 90,
    reasonZh: '承接高客单转化，针对成熟顾问与实体企业主释放稀缺席位。',
    hookSample: '我们正式开放2026年第二季度的商业IP私享陪跑计划。本期仅限6席，只接受符合条件的资深顾问与创始人。'
  },
  {
    id: 'idea_09',
    topic: '传统B2B企业老板转型做个人IP，必须绕开的4个“网红陷阱”',
    intent: 'blind_spot_warning',
    transformation: 'JI',
    matchScore: 93,
    reasonZh: '针对企业主受众，破除把个人商业IP当成网红搞怪的认知误区。',
    hookSample: '实体老板千万不要去学网红在镜头前跳舞。你的客户是看重你的商业判断力，而不是你的娱乐表演。'
  },
  {
    id: 'idea_10',
    topic: '从0到1构建高客单咨询飞轮：专业人士必备的5阶产品阶梯模型',
    intent: 'authority_breakdown',
    transformation: 'QUAN',
    matchScore: 94,
    reasonZh: '结构化交付干货，展示高阶商业模式设计能力。',
    hookSample: '为什么大多数专家的知识变现做得很累？因为产品结构断层了。今天公开我们内部使用的5阶产品天梯。'
  },
  {
    id: 'idea_11',
    topic: '深度拆解：一位资深企业高管转型独立顾问的前90天真实历程',
    intent: 'case_autopsy',
    transformation: 'KE',
    matchScore: 90,
    reasonZh: '陪伴感与事实力量并存，极大增强处于转型期高管的决策信心。',
    hookSample: '从500强高管到独立顾问，最难的不是专业技能，而是心理账户的重塑。看看他是如何在90天内拿下第一单的。'
  },
  {
    id: 'idea_12',
    topic: '深度胜过泛流量：为什么你不需要10万粉丝，也能年入百万？',
    intent: 'contrarian_view',
    transformation: 'QUAN',
    matchScore: 97,
    reasonZh: '直击核心商业常识，打消客户对“做自媒体需要海量粉丝”的畏难情绪。',
    hookSample: '做个人IP最大的谎言就是追求海量粉丝。如果你做的是高客单业务，只要有100个精准买家，就足够支撑百万年薪。'
  }
];

export function detectStrategyFromTopic(topic: string, user: UserProfile): {
  detectedIntent: ContentIntent;
  targetTransformation: 'LU' | 'QUAN' | 'KE' | 'JI';
  fitScore: number;
  strategicReasonZh: string;
} {
  const t = topic.toLowerCase();

  if (t.includes('复盘') || t.includes('案例') || t.includes('真实') || t.includes('客户')) {
    return {
      detectedIntent: 'case_autopsy',
      targetTransformation: 'KE',
      fitScore: 94,
      strategicReasonZh: '检测到案例与实证关键词，自动匹配科（信任背书）策略，通过细节闭环构建高信任度。'
    };
  }

  if (t.includes('错误') || t.includes('盲区') || t.includes('陷阱') || t.includes('别再') || t.includes('代价')) {
    return {
      detectedIntent: 'blind_spot_warning',
      targetTransformation: 'JI',
      fitScore: 92,
      strategicReasonZh: '检测到风险与避坑关键词，自动匹配忌（盲点突破）策略，通过代价前置激发避险紧迫感。'
    };
  }

  if (t.includes('为什么') || t.includes('焦虑') || t.includes('痛点') || t.includes('瓶颈')) {
    return {
      detectedIntent: 'unspoken_frustration',
      targetTransformation: 'LU',
      fitScore: 90,
      strategicReasonZh: '检测到深层痛点诉求，自动匹配禄（吸引共鸣）策略，用认知共鸣快速建立初始引力。'
    };
  }

  if (t.includes('清单') || t.includes('自测') || t.includes('体检') || t.includes('标准')) {
    return {
      detectedIntent: 'checklist_audit',
      targetTransformation: 'KE',
      fitScore: 93,
      strategicReasonZh: '检测到工具与评估属性，自动匹配科（工具背书）策略，通过量化自查体现专业标准。'
    };
  }

  return {
    detectedIntent: 'authority_breakdown',
    targetTransformation: 'QUAN',
    fitScore: 96,
    strategicReasonZh: '精准匹配你的策略型破局者主原型与权（权威定力 92）能量，用结构化逻辑建立行业权威。'
  };
}

export function buildCompleteScript(
  topic: string,
  intent: ContentIntent,
  duration: FormatDuration,
  tone: TonePreset,
  audience: AudiencePreset,
  user: UserProfile
): ScriptDraft {
  const intentConfig = INTENT_CONFIGS[intent];
  const transformation = intentConfig.transformation;

  const hookOptions = [
    {
      id: 'hook_01',
      text: `如果你还在用传统方式处理【${topic.slice(0, 14)}】，说明你根本没有看清背后的商业杠杆。`,
      score: 96,
      style: '高定力挑战型',
      reasonZh: '前3秒直击痛点，打破受众既有认知，树立不容置疑的专家权威。'
    },
    {
      id: 'hook_02',
      text: `为什么业内顶级的专家，从不在【${topic.slice(0, 14)}】上浪费哪怕一分钟？`,
      score: 92,
      style: '认知反差悬念型',
      reasonZh: '用顶级圈层的做法形成鲜明反差，激发决策者的好奇心与窥探欲。'
    },
    {
      id: 'hook_03',
      text: `在这个问题上踩坑，每年至少让一位资深顾问白白损失 RM50,000 的隐性收入。`,
      score: 89,
      style: '商业代价警示型',
      reasonZh: '量化不改变的商业代价，让目标受众瞬间产生紧迫感。'
    }
  ];

  const blocks = [
    {
      id: 'blk_1',
      timestampRange: '0:00 - 0:08',
      stageName: '黄金破局钩子 (Hook)',
      content: hookOptions[0].text,
      screenGuidance: '【特写镜头】沉稳直视镜头，语速放缓，停顿0.8秒增强力量感。'
    },
    {
      id: 'blk_2',
      timestampRange: '0:08 - 0:25',
      stageName: '揭示传统误区代价 (Problem & Cost)',
      content: `大多数人在处理这个问题时，习惯性陷入了表面低效内卷。你越是卖力解释，客户反而越觉得你没有核心竞争力，最终把你拖入毫无意义的价格战。`,
      screenGuidance: '【切中景】配合 iPad 手绘“传统陷入点 vs 正确破局点”对比图。'
    },
    {
      id: 'blk_3',
      timestampRange: '0:25 - 0:48',
      stageName: '核心结构化解法 (Core Framework)',
      content: `真正聪明的破局逻辑只有三步：第一，重新定义你的商业主战场；第二，将非标经验提炼为标准方法论资产；第三，基于解决问题的商业价值而非时间进行定价。`,
      screenGuidance: '【分步推演】屏幕左侧分行弹出 1、2、3 核心步骤卡片，保持呼吸感。'
    },
    {
      id: 'blk_4',
      timestampRange: '0:48 - 1:00',
      stageName: '高转化指令 (Strategic CTA)',
      content: `如果你也希望彻底重构自己的商业定位与高客单引流系统，在评论区回复【蓝图】，获取完整实操指引。`,
      screenGuidance: '【镜头定焦】屏幕下方展示极简引导卡片，给出明确单一动作。'
    }
  ];

  const captions = `【${topic}】\n\n按传统逻辑做个人IP只会越做越累。专业人士的核心竞争力永远在于你的认知深度与商业架构能力。\n\n📌 核心干货要点：\n1. 拒绝小时计费，按商业价值定价\n2. 打造高壁垒的个人方法论资产\n3. 敢于反向筛选，只服务匹配客户\n\n💬 评论区回复【蓝图】，免费获取高清拆解导图。\n\n#个人商业IP #商业模式 #高客单定位 #认知升级 #企业战略`;

  const thumbnails = [
    '告别低效内卷\n年入百万的定位底层逻辑',
    '为什么顶级专家\n从不按小时计费？',
    '3个定位致命盲区\n让顾问白白损失50万',
    '真实商业案例复盘\n如何拿下18,000高客单？',
    '5步商业定位诊断法\n测测你的IP溢价力'
  ];

  return {
    id: `draft_${Date.now()}`,
    topic,
    intent,
    transformation,
    formatDuration: duration,
    tone,
    audience,
    readinessScore: 86,
    brandFitScore: 94,
    similarityAlert: '检测到与历史第1期脚本存在主题相关性，已自动调整切入视角以保证内容新颖度。',
    hookOptions,
    selectedHookId: hookOptions[0].id,
    structuredAngle: '从商业杠杆与价值定价的本质切入，彻底打破传统按小时计费的认知陷阱。',
    blocks,
    deliveryCoach: {
      pace: '120 - 130 词/分钟 (沉稳不疾不徐)',
      energy: '沉静威严 (顾问大师风范，切忌亢奋叫喊)',
      pauses: '在第 8 秒与第 25 秒留出 0.8 秒深度停顿，强化受众消化感',
      posture: '端坐于书桌前，双手自然平放于桌面，身体微微前倾 5 度'
    },
    shotPlan: [
      '0-8s：头部特写直视镜头，眼神聚焦坚定',
      '8-25s：中景切入，配合 iPad 屏幕分屏展示',
      '25-48s：白板手绘思维导图推演，展示逻辑链条',
      '48-60s：镜头拉回正中，展示行动指引卡片'
    ],
    bRollIdeas: [
      '特写：Apple Pencil 在 iPad Pro 黑暗模式上书写逻辑公式',
      '俯拍：桌面上翻开的经典商业著作与手写笔记本',
      '空镜：现代简约办公空间中专注推演的侧影'
    ],
    thumbnailTitles: thumbnails,
    selectedThumbnailIndex: 0,
    captionText: captions,
    createdAt: new Date().toISOString()
  };
}

export function generateRepurposedContent(script: ScriptDraft): RepurposedContent {
  return {
    linkedin: {
      platform: 'LinkedIn (领英高管帖)',
      content: `大多数资深专业人士在商业定位上犯的最大错误，就是把“专业能力”和“商业价值”混为一谈。\n\n最近复盘了几十位年营收突破百万的独立顾问，他们都有一个惊人的共同点：\n\n从来不按小时计费。\n\n为什么？因为按小时计费在底层逻辑上惩罚了你的效率。当你越专业、解决问题越快，按时间收费反而赚得越少。\n\n真正成熟的商业IP只有一套闭环：\n1. 明确商业主战场，主动过滤非目标受众\n2. 将隐性经验提炼为标准方法论资产\n3. 按为客户创造的确定性价值定价\n\n你是如何看待专业服务定价的？欢迎在评论区分享你的思考。`
    },
    xiaohongshu: {
      platform: '小红书 (图文高赞爆款)',
      content: `建议所有想做个人商业IP的顾问收藏这篇！干货满满🔥\n\n📌 为什么你的专业很强，却总是收不上价格？\n❌ 误区1：按小时计费，越做越累\n❌ 误区2：试图讨好所有人，没有定位边界\n❌ 误区3：输出泛娱乐鸡汤，缺乏交付确定性\n\n💡 逆袭三步法：\n① 提炼独家方法论资产\n② 搭建5阶高客单产品阶梯\n③ 设计反向客户筛选过滤器\n\n需要完整《个人商业IP战略蓝图》的宝子，评论区扣【蓝图】自取～\n#知识博主 #个人品牌 #商业思维 #副业搞钱 #认知觉醒`
    },
    wechatArticle: {
      platform: '微信公众号 (深度思想长文)',
      content: `《为什么年入百万的资深顾问，从不把时间卖给任何人？》\n\n在商业世界中，最昂贵的事情莫过于用战术上的勤奋掩盖战略上的懒惰...\n\n（正文已展开 2,400 字深度商业架构拆解，包含 3 大核心模型与 2 个真实企业客户转型案例复盘，排版清晰美观，适合深度阅读）`
    },
    newsletter: {
      platform: '专属邮件通讯 (EDM)',
      content: `主题：致志远：一个关于高客单定位的关键商业思考\n\n你好 Alex，\n\n本周在为一位精品顾问做一对一战略梳理时，我发现了一个非常普遍的隐性瓶颈...\n\n与其每天花3小时在社交媒体上碰运气，不如花1周时间彻底把你的高客单产品阶梯搭建完毕。\n\n祝好，\nZIWEI IP 战略团队`
    },
    podcastOutline: {
      platform: '播客/深度对谈大纲 (Podcast)',
      content: `【对谈主题】跳出小时计费陷阱：资深专家的商业IP进阶之路\n\n🎙️ 讨论环节设计：\n00:00 - 05:00 为什么传统专业人士转型做IP往往痛苦不堪？\n05:00 - 18:00 深度剖析按价值定价与按时间定价的底层思维鸿沟\n18:00 - 32:00 真实案例拆解：从 RM1,500 到 RM18,000 的蜕变细节\n32:00 - 45:00 留给听众的 3 个自我诊断关键问题`
    },
    communityPrompt: {
      platform: '私域社群讨论破冰 (Community)',
      content: `各位群友大家上午好！今日话题研讨：\n\n💬 “大家目前在服务客户时，是按照【时间/工时】收费，还是按照【项目/交付结果】收费？在报价过程中遇到最大的困惑是什么？”\n\n欢迎在群内畅所欲言，今晚 8 点我会在群内针对大家的留言做一次语音复盘拆解！`
    },
    salesAngle: {
      platform: '私信1对1咨询成交切入 (DM Script)',
      content: `“看到您刚才在动态下方的留言，您提到的【高客单转化乏力】问题，我们在过去辅导的顾问中非常普遍。其实核心症结不在您的专业能力，而在于前端缺乏一套精准过滤的定位过滤器。如果您方便的话，我们可以安排一次 20 分钟的免费定位体检，帮您把这几个堵点梳理清楚。”`
    }
  };
}

export function generateSeriesCampaign(mainTopic: string): SeriesCampaign {
  return {
    campaignTitle: `《${mainTopic.slice(0, 16)}》7天深度破局战役`,
    themeZh: '从底层认知、产品设计到高转化闭环的7天连载',
    days: [
      {
        dayNumber: 1,
        title: '【破局篇】为什么传统方法注定失灵？',
        transformation: 'QUAN',
        focus: '挑战行业伪常识，建立强大权威定力'
      },
      {
        dayNumber: 2,
        title: '【痛点篇】不改变将付出怎样的商业代价？',
        transformation: 'LU',
        focus: '激发目标受众内心深处未被言说的焦虑'
      },
      {
        dayNumber: 3,
        title: '【避坑篇】90%的人最常踩的3个致命陷阱',
        transformation: 'JI',
        focus: '揭示隐性亏损盲区，强化避险紧迫感'
      },
      {
        dayNumber: 4,
        title: '【方法篇】顶级专家都在用的3步破局框架',
        transformation: 'QUAN',
        focus: '结构化输出核心方法论，展示专业深度'
      },
      {
        dayNumber: 5,
        title: '【实证篇】真实客户转型从0到1全复盘',
        transformation: 'KE',
        focus: '用事实与交付细节构建无可撼动的信任'
      },
      {
        dayNumber: 6,
        title: '【自测篇】5分钟定位体检清单与自查表',
        transformation: 'KE',
        focus: '提供即插即用工具，让客户感知专业差距'
      },
      {
        dayNumber: 7,
        title: '【行动篇】高客单私享陪跑计划正式开放招募',
        transformation: 'QUAN',
        focus: '释放稀缺席位，承接高意向精准客户转化'
      }
    ]
  };
}
