import { UserProfile, IPScores, IPArchetype, ContentPillar, BusinessOffer, TestAnswers, UserRole } from '@/types/database';
import { TransformationKey } from '@/types/database';

// 14 主星核心定位原型库
export interface StarArchetypeData {
  starName: string;
  pinyin: string;
  titleZh: string;
  nameEn: string;
  tagline: string;
  description: string;
  naturalRole: string;
  audiencePerception: string;
  growthLever: string;
  potentialBlindSpot: string;
  baseScores: {
    authority: number;
    trust: number;
    attraction: number;
    expression: number;
    monetization: number;
  };
  recommendedTone: string[];
  cameraPace: string;
  idealOffer: string;
}

export const STAR_ARCHETYPES: Record<string, StarArchetypeData> = {
  ziwei: {
    starName: '紫微',
    pinyin: 'Zǐ Wēi',
    titleZh: '行业标杆领袖',
    nameEn: 'The Sovereign Leader',
    tagline: '定义行业高维标准，以尊贵气场与无可挑剔的品质赢得高净值决策者托付。',
    description: '你拥有天然的领袖气场与高规格战略格局。你不需要讨好大众，而是通过树立行业最高交付标准，自然吸引愿意为顶尖品质买单的企业家与高管。',
    naturalRole: '行业标准制定者 / 高客单战略导师 / 商业领袖顾问',
    audiencePerception: '威严沉稳、格局宏大、值得托付、大师段位',
    growthLever: '高客单私享会、闭门领袖工作坊与独创行业评估标准体系',
    potentialBlindSpot: '容易给人高高在上的距离感，需适度展示真实业务场景拉近信任',
    baseScores: { authority: 96, trust: 90, attraction: 75, expression: 82, monetization: 95 },
    recommendedTone: ['沉稳克制 (95%)', '高规格尊崇 (90%)', '战略定力 (95%)'],
    cameraPace: '110-120 词/分钟，字句从容，气场稳健',
    idealOffer: 'RM10,000 - RM50,000 企业家私享战略顾问年框'
  },
  tianji: {
    starName: '天机',
    pinyin: 'Tiān Jī',
    titleZh: '策略型破局者',
    nameEn: 'The Strategic Architect',
    tagline: '化繁为简，将错综复杂的商业困局提炼为手术刀般精准的方法论与破局路线图。',
    description: '你拥有极强的结构化思维与敏锐的战略洞察力。当你拆解问题背后的底层运转机理而非浮于表面套路时，高认知买家会瞬间识别出你的不可替代性。',
    naturalRole: '方法论架构师 / 商业破局顾问 / 战略咨询专家',
    audiencePerception: '逻辑缜密、洞察锐利、条理清晰、实战落地',
    growthLever: '商业案例深度复盘、独创 2x2 决策矩阵与高密度逆主流认知拆解',
    potentialBlindSpot: '容易陷入技术细节推演，需在输出方法论前先用 5 秒场景引发共鸣',
    baseScores: { authority: 92, trust: 88, attraction: 76, expression: 84, monetization: 88 },
    recommendedTone: ['直接犀利 (90%)', '冷静沉稳 (95%)', '结构化推演 (92%)'],
    cameraPace: '120-130 词/分钟，留白清晰，搭配 iPad 手绘图',
    idealOffer: 'RM4,800 - RM15,000 商业定位重塑与高客单落地陪跑'
  },
  taiyang: {
    starName: '太阳',
    pinyin: 'Tài Yáng',
    titleZh: '启蒙布道先锋',
    nameEn: 'The Visionary Evangelist',
    tagline: '点亮行业前行方向，以宏大视野、普惠情怀与强大号召力引领时代浪潮。',
    description: '你天生具备强大的公众影响力与思想感染力。你擅长站在行业未来演进的高维视角，为迷茫的从业者指明趋势，是极具号召力的时代布道者。',
    naturalRole: '行业布道师 / 趋势引领者 / 知识领袖',
    audiencePerception: '胸怀宽广、充满激情、光明磊落、高瞻远瞩',
    growthLever: '万人公开演讲、年度行业趋势白皮书与规模化社群裂变',
    potentialBlindSpot: '容易在宏观愿景上过度消耗精力，需强化后端的标准化高客单转化交付',
    baseScores: { authority: 90, trust: 85, attraction: 94, expression: 96, monetization: 82 },
    recommendedTone: ['热情开朗 (92%)', '高瞻远瞩 (95%)', '感召力强 (90%)'],
    cameraPace: '135-145 词/分钟，抑扬顿挫，眼神坚定有神',
    idealOffer: 'RM899 大师实战课 + RM9,800 年度会员影响力俱乐部'
  },
  wuqu: {
    starName: '武曲',
    pinyin: 'Wǔ Qǔ',
    titleZh: '硬核实战操盘手',
    nameEn: 'The Pragmatic Master',
    tagline: '不讲空洞理论，用铁血执行与可量化的真金白银商业结果说话。',
    description: '你是一位极其务实的商业实战派。你厌恶花哨的说辞和虚无的玄学，只聚焦于投入产出比、可量化的交付数据与扎实的业务现金流闭环。',
    naturalRole: '商业操盘手 / 营收增长顾问 / 财税投资实战家',
    audiencePerception: '务实干练、结果导向、说到做到、硬核可信',
    growthLever: '真实利润增长数据复盘、可复制的业务 SOP 模板与对赌型交付方案',
    potentialBlindSpot: '表达容易过于干练硬朗缺乏温度，需增加真实团队管理的人性化故事',
    baseScores: { authority: 91, trust: 92, attraction: 70, expression: 78, monetization: 96 },
    recommendedTone: ['干脆利落 (95%)', '务实直接 (92%)', '结果至上 (90%)'],
    cameraPace: '125-135 词/分钟，字句铿锵，不带废话',
    idealOffer: 'RM8,000 - RM30,000 营收增长操盘与业务系统搭建'
  },
  tiantong: {
    starName: '天同',
    pinyin: 'Tiān Tóng',
    titleZh: '治愈型共情导师',
    nameEn: 'The Empathetic Resonator',
    tagline: '看见内心的脆弱，以温柔坚定的共情力化解焦虑，陪伴客户实现长期成长。',
    description: '你拥有非凡的同理心与情绪洞察力。你能够精准捕捉到高压职场人与创业者内心深处未被言说的痛苦，让客户在高度被理解中产生极深的信任依赖。',
    naturalRole: '高管心理教练 / 个人成长导师 / 温暖社群主理人',
    audiencePerception: '温润如玉、善解人意、充满疗愈感、值得倾诉',
    growthLever: '深度一对一对话实录、情绪共鸣微电影式短视频与高粘性私密社群',
    potentialBlindSpot: '容易因过度共情而不忍拒绝低价消耗型客户，需建立严格的筛选边界',
    baseScores: { authority: 75, trust: 94, attraction: 95, expression: 88, monetization: 78 },
    recommendedTone: ['温和真诚 (96%)', '循循善诱 (90%)', '深层共鸣 (95%)'],
    cameraPace: '110-120 词/分钟，慢速温和，留白深情',
    idealOffer: 'RM3,800 - RM12,000 深度蜕变一对一教练与年度成长陪伴'
  },
  lianzhen: {
    starName: '廉贞',
    pinyin: 'Lián Zhēn',
    titleZh: '敏锐破局先锋',
    nameEn: 'The Disruptive Innovator',
    tagline: '洞察人性欲望与市场缝隙，以极具个性魅力的先锋审美颠覆传统认知。',
    description: '你是一位兼具敏锐商业嗅觉与独特个人魅力的创新者。你擅长在看似饱和的红海市场中切出极具辨识度的垂直细分品类，让人一眼难忘。',
    naturalRole: '新消费品牌操盘手 / 潮流主理人 / 破局先锋顾问',
    audiencePerception: '个性鲜明、审美前沿、不落俗套、极具张力',
    growthLever: '高视觉质感内容包装、逆主流美学输出与跨界联名爆款事件',
    potentialBlindSpot: '情绪起伏容易影响内容产出稳定性，需建立标准化的生产工作流',
    baseScores: { authority: 86, trust: 82, attraction: 92, expression: 90, monetization: 89 },
    recommendedTone: ['锋芒毕露 (88%)', '审美前沿 (94%)', '个性独具 (90%)'],
    cameraPace: '130-140 词/分钟，张弛有度，镜头感极佳',
    idealOffer: 'RM5,000 - RM20,000 品牌美学重塑与爆款单品孵化'
  },
  tianfu: {
    starName: '天府',
    pinyin: 'Tiān Fǔ',
    titleZh: '稳健系统构建者',
    nameEn: 'The Institutional Architect',
    tagline: '厚积薄发，构建抗周期的高现金流商业闭环与稳如磐石的组织系统。',
    description: '你具有卓越的资源整合能力与组织架构天赋。你擅长帮客户搭建无需依赖个人过度耗竭的标准化运营系统，让商业运转如同精密的瑞士钟表。',
    naturalRole: '商业系统架构师 / 家族财富顾问 / 企业运营导师',
    audiencePerception: '沉稳厚重、系统严密、值得重托、从容不迫',
    growthLever: '全景式商业系统图谱、企业中台搭建案例与高净值私董会',
    potentialBlindSpot: '偏好稳健可能导致在面对新兴流量机遇时反应偏慢，需适度拥抱前沿工具',
    baseScores: { authority: 94, trust: 95, attraction: 74, expression: 80, monetization: 95 },
    recommendedTone: ['从容稳健 (95%)', '系统严密 (92%)', '底蕴深厚 (90%)'],
    cameraPace: '115-125 词/分钟，字正腔圆，条理分明',
    idealOffer: 'RM15,000 - RM60,000 企业商业系统落地与私董会会籍'
  },
  taiyin: {
    starName: '太阴',
    pinyin: 'Tài Yīn',
    titleZh: '深度认知提炼者',
    nameEn: 'The Intuitive Analyst',
    tagline: '静水流深，在海量信息中提炼直击本质的底层逻辑与长期财富智慧。',
    description: '你擅长用细腻而深刻的洞察力解析复杂的商业环境。你善于将隐性认知提炼为直击人心的文字长文或深度图表，在润物细无声中建立强大的思想话语权。',
    naturalRole: '商业智库主笔 / 资产配置专家 / 深度内容创作者',
    audiencePerception: '内敛睿智、深思熟虑、见解深刻、极具品位',
    growthLever: '高质量万字深度长文、付费专栏与沉浸式高维私享沙龙',
    potentialBlindSpot: '容易在公开镜头前感到能量消耗，建议主打坐姿书房场景或图文播客',
    baseScores: { authority: 88, trust: 92, attraction: 82, expression: 85, monetization: 90 },
    recommendedTone: ['静水流深 (95%)', '知性深邃 (92%)', '细腻严谨 (90%)'],
    cameraPace: '110-120 词/分钟，语调柔和从容，极具书卷气',
    idealOffer: 'RM3,800 - RM15,000 深度商业复盘咨询与认知年度专栏'
  },
  tanlang: {
    starName: '贪狼',
    pinyin: 'Tān Láng',
    titleZh: '破圈跨界先锋',
    nameEn: 'The Charismatic Rainmaker',
    tagline: '破除行业边界，用跨界融合与致命吸引力掀起病毒式裂变狂潮。',
    description: '你是天生的超级链接者与破圈高手。你能够将完全不相干的两个领域巧妙嫁接，制造出极具话题度与吸金能力的全新商业模式。',
    naturalRole: '跨界商业策划师 / 超级个体导师 / 社交商业操盘手',
    audiencePerception: '充满魅力、破圈敏锐、玩法前沿、极度吸睛',
    growthLever: '跨界联名合作、高互动性短视频直播与现象级破圈活动',
    potentialBlindSpot: '兴趣过于广泛容易导致战线过长，需聚焦 1 款核心高客单产品做深做透',
    baseScores: { authority: 82, trust: 80, attraction: 98, expression: 95, monetization: 91 },
    recommendedTone: ['生动幽默 (92%)', '跨界前沿 (94%)', '引人入胜 (90%)'],
    cameraPace: '135-145 词/分钟，节奏多变，感染力极强',
    idealOffer: 'RM4,800 - RM18,000 个人商业破圈策划与超级个体孵化'
  },
  jumen: {
    starName: '巨门',
    pinyin: 'Jù Mén',
    titleZh: '深度辨析者',
    nameEn: 'The Forensic Challenger',
    tagline: '直击伪共识，用手术刀般的犀利辩析与深度揭秘建立不可替代的权威声量。',
    description: '你拥有一副能够穿透所有营销谎言的犀利嘴笔。当你公开对行业内的低效常识或假大空现象进行体检式剖析时，专业决策者会为你超群的清醒度深深折服。',
    naturalRole: '商业打假分析师 / 深度评测专家 / 辩证战略顾问',
    audiencePerception: '一针见血、敢说真话、清醒敏锐、逻辑硬核',
    growthLever: '行业伪常识深度“尸检”、真假方案对比测评与白皮书报告',
    potentialBlindSpot: '言语容易过于辛辣引发对立，需在抨击问题后立即给出建设性破局方案',
    baseScores: { authority: 93, trust: 86, attraction: 80, expression: 96, monetization: 85 },
    recommendedTone: ['一针见血 (95%)', '敢言犀利 (92%)', '逻辑严密 (90%)'],
    cameraPace: '130-140 词/分钟，字句清晰，重音明确',
    idealOffer: 'RM3,800 - RM12,800 商业风险排查体检与商业决策顾问'
  },
  tianxiang: {
    starName: '天相',
    pinyin: 'Tiān Xiàng',
    titleZh: '信任中枢与品牌管家',
    nameEn: 'The Trusted Consigliere',
    tagline: '化身核心决策者的军师中枢，以得体周全的专业度赢得百倍信任。',
    description: '你是一位天生的幕后核心智囊。你形象专业得体、处事周全妥帖，极擅长协助大客户处理关键公关、品牌定位与资源撮合事务。',
    naturalRole: '品牌公关幕僚 / 商务谈判智囊 / 资源整合管家',
    audiencePerception: '得体专业、周到可信、资源丰富、大方从容',
    growthLever: '标杆企业公关实战案例、高层谈判沟通方法论与高端品牌联谊',
    potentialBlindSpot: '容易过于注重各方平衡而弱化个人独特锐度，需在大是大非上有鲜明立场',
    baseScores: { authority: 86, trust: 96, attraction: 84, expression: 88, monetization: 89 },
    recommendedTone: ['得体得当 (95%)', '温润专业 (92%)', '值得托付 (90%)'],
    cameraPace: '120-130 词/分钟，语调优雅，举止从容',
    idealOffer: 'RM6,800 - RM25,000 企业品牌声誉顾问与高层商务私享'
  },
  tianliang: {
    starName: '天梁',
    pinyin: 'Tiān Liáng',
    titleZh: '德高望重导师',
    nameEn: 'The Senior Sage',
    tagline: '传承行业心法与底层道法，以深厚阅历为迷茫者指点迷津、排忧解难。',
    description: '你拥有天然的长者风范与行业教父气质。客户在遇到重大职业危机或战略转型困境时，本能地希望向你寻求点拨，获得安抚与确定性。',
    naturalRole: '资深行业教父 / 转型避坑导师 / 职业发展终身顾问',
    audiencePerception: '厚德载物、阅历丰富、睿智通透、指点迷津',
    growthLever: '中年转型避坑指南、行业历史兴衰深度复盘与师徒制闭门传承',
    potentialBlindSpot: '容易陷入说教语气，需结合当下最新的年轻化商业案例保持鲜活感',
    baseScores: { authority: 95, trust: 96, attraction: 75, expression: 85, monetization: 88 },
    recommendedTone: ['睿智通透 (95%)', '循循善诱 (92%)', '风范厚重 (90%)'],
    cameraPace: '110-120 词/分钟，从容不迫，充满智慧感',
    idealOffer: 'RM8,800 - RM35,000 战略转型闭门一对一与终身私享导师'
  },
  qisha: {
    starName: '七杀',
    pinyin: 'Qī Shā',
    titleZh: '绝地破局统帅',
    nameEn: 'The Relentless Vanguard',
    tagline: '独行天下，勇闯无人之境，以惊人魄力带领客户突破看似不可能的增长极限。',
    description: '你是一位极具杀伐决断力的开拓型统帅。你擅长打硬仗、攻坚克难，在别人犹豫不决时敢于力挽狂澜，为客户杀出一条全新生路。',
    naturalRole: '业务攻坚统帅 / 危机拯救专家 / 0到1破局教练',
    audiencePerception: '魄力超群、敢打硬仗、执行极强、气场强大',
    growthLever: '从0到1极限破局战役实录、危机逆袭案例复盘与高强度对赌交付',
    potentialBlindSpot: '单兵作战能力过强容易导致团队交付压力过大，需尽早搭建标准化交付班底',
    baseScores: { authority: 96, trust: 84, attraction: 78, expression: 82, monetization: 94 },
    recommendedTone: ['坚决果断 (96%)', '气吞山河 (92%)', '直击要害 (90%)'],
    cameraPace: '130-140 词/分钟，字句果断，目光如炬',
    idealOffer: 'RM10,000 - RM40,000 战略攻坚对赌陪跑与增长战役操盘'
  },
  pojun: {
    starName: '破军',
    pinyin: 'Pò Jūn',
    titleZh: '颠覆性创新者',
    nameEn: 'The Revolutionary Reformer',
    tagline: '打破旧枷锁，重塑新秩序，以毁灭旧模式的勇气催生下一代商业新物种。',
    description: '你对陈旧、低效的传统规则有着天然的不耐烦。你总是在寻找颠覆现有商业范式的机会，是用全新技术与商业逻辑重写行业游戏规则的革命者。',
    naturalRole: '商业模式颠覆者 / AI工具先锋赋能者 / 创新实验家',
    audiencePerception: '颠覆传统、先锋前卫、不破不立、极具创新力',
    growthLever: '传统模式解构挑战、下一代 AI 自动化实战应用与前沿实验性产品',
    potentialBlindSpot: '过快迭代容易让传统保守客户产生不安感，需在颠覆的同时给出确定性的落地保障',
    baseScores: { authority: 90, trust: 80, attraction: 92, expression: 92, monetization: 91 },
    recommendedTone: ['先锋前卫 (94%)', '颠覆创新 (92%)', '激情破旧 (90%)'],
    cameraPace: '135-145 词/分钟，语调激昂，思维跳跃极富感染力',
    idealOffer: 'RM6,800 - RM28,000 商业模式重构与前沿 AI 流程升级陪跑'
  }
};

// 10 天干生年四化映射表
export const STEM_TRANSFORMATION_MAP: Record<string, { lu: string; quan: string; ke: string; ji: string; flavor: string }> = {
  甲: { lu: '廉贞', quan: '破军', ke: '武曲', ji: '太阳', flavor: '先锋颠覆与硬核破局型' },
  乙: { lu: '天机', quan: '天梁', ke: '紫微', ji: '太阴', flavor: '高维策略与方法论架构型' },
  丙: { lu: '天同', quan: '天机', ke: '文昌', ji: '廉贞', flavor: '共情引力与认知重构型' },
  丁: { lu: '太阴', quan: '天同', ke: '天机', ji: '巨门', flavor: '深度洞察与细分破局型' },
  戊: { lu: '贪狼', quan: '太阴', ke: '右弼', ji: '天机', flavor: '跨界融合与商业裂变型' },
  己: { lu: '武曲', quan: '贪狼', ke: '天梁', ji: '文曲', flavor: '实战营收与系统操盘型' },
  庚: { lu: '太阳', quan: '武曲', ke: '太阴', ji: '天同', flavor: '行业公信力与标杆引领型' },
  辛: { lu: '巨门', quan: '太阳', ke: '文曲', ji: '文昌', flavor: '深度辩析与话语权破圈型' },
  壬: { lu: '天梁', quan: '紫微', ke: '左辅', ji: '武曲', flavor: '尊荣权威与导师传承型' },
  癸: { lu: '破军', quan: '巨门', ke: '太阴', ji: '贪狼', flavor: '模式创新与深度突围型' }
};

const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const STAR_KEYS = Object.keys(STAR_ARCHETYPES);

// 核心推演主函数：根据用户输入的真实数据动态生成专属画像
export function generateDynamicUserProfile(answers: Partial<TestAnswers>): UserProfile {
  const userName = answers.name?.trim() || '志远';
  const birthDate = answers.birthDate || '1990-05-18';
  const birthTime = answers.birthTime || '14:30';
  const birthLocation = answers.birthLocation || '吉隆坡';
  const userRole: UserRole = (answers.role as UserRole) || '商业顾问 / 战略顾问';
  const bottleneck = answers.challenges?.[0] || '按小时计费，缺乏高客单产品，收入与时间严重绑定';
  const goal = answers.primaryGoal || '打造年营收突破百万的高客单个人商业IP';

  // 1. 解析出生年月日时推演天干地支
  const dateObj = new Date(birthDate);
  const year = isNaN(dateObj.getFullYear()) ? 1990 : dateObj.getFullYear();
  const month = isNaN(dateObj.getMonth()) ? 5 : dateObj.getMonth() + 1;
  const day = isNaN(dateObj.getDate()) ? 18 : dateObj.getDate();

  // 根据年份计算年干
  const stemIndex = (year - 4) % 10;
  const yearStem = STEMS[stemIndex >= 0 ? stemIndex : 0];
  const yearBranch = BRANCHES[(year - 4) % 12 >= 0 ? (year - 4) % 12 : 0];

  // 时辰计算
  const [hourStr] = birthTime.split(':');
  const hour = parseInt(hourStr || '12', 10);
  const hourBranchIndex = Math.floor(((hour + 1) % 24) / 2);
  const hourBranch = BRANCHES[hourBranchIndex];

  // 2. 根据命盘参数稳定匹配主星与辅星
  const primaryStarIndex = Math.abs((year * 3 + month * 7 + day * 11 + hourBranchIndex * 13) % STAR_KEYS.length);
  const secondaryStarIndex = (primaryStarIndex + 4) % STAR_KEYS.length;
  const supportingStarIndex = (primaryStarIndex + 8) % STAR_KEYS.length;

  const primaryData = STAR_ARCHETYPES[STAR_KEYS[primaryStarIndex]];
  const secondaryData = STAR_ARCHETYPES[STAR_KEYS[secondaryStarIndex]];
  const supportingData = STAR_ARCHETYPES[STAR_KEYS[supportingStarIndex]];

  // 3. 结合用户 5 大表达偏好滑块动态计算雷达得分
  const analyticalVsEmotional = answers.communicationPrefs?.analyticalVsEmotional ?? 20;
  const directVsGentle = answers.communicationPrefs?.directVsGentle ?? 15;
  const structuredVsSpontaneous = answers.communicationPrefs?.structuredVsSpontaneous ?? 10;
  const teachingVsStorytelling = answers.communicationPrefs?.teachingVsStorytelling ?? 25;
  const expertVsLifestyle = answers.communicationPrefs?.expertVsLifestyle ?? 10;

  // 五维计算模型（基础分 + 用户偏好加权修正）
  const authorityScore = Math.min(
    98,
    Math.max(65, Math.round(primaryData.baseScores.authority + (50 - directVsGentle) * 0.12 + (50 - analyticalVsEmotional) * 0.08))
  );

  const trustScore = Math.min(
    98,
    Math.max(65, Math.round(primaryData.baseScores.trust + (50 - structuredVsSpontaneous) * 0.15 + (50 - teachingVsStorytelling) * 0.05))
  );

  const attractionScore = Math.min(
    98,
    Math.max(65, Math.round(primaryData.baseScores.attraction + (analyticalVsEmotional - 50) * 0.18 + (teachingVsStorytelling - 50) * 0.12))
  );

  const expressionScore = Math.min(
    98,
    Math.max(65, Math.round(primaryData.baseScores.expression + (50 - structuredVsSpontaneous) * 0.08 + (directVsGentle - 50) * 0.08))
  );

  const monetizationScore = Math.min(
    98,
    Math.max(65, Math.round(primaryData.baseScores.monetization + (50 - expertVsLifestyle) * 0.14 + (50 - teachingVsStorytelling) * 0.06))
  );

  const calculatedScores: IPScores = {
    authority: authorityScore,
    trust: trustScore,
    attraction: attractionScore,
    expression: expressionScore,
    monetization: monetizationScore
  };

  const calculatedMomentum = Math.round(
    authorityScore * 0.25 + trustScore * 0.25 + monetizationScore * 0.25 + expressionScore * 0.15 + attractionScore * 0.10
  );

  // 4. 构建针对用户的个性化定位陈述与反向受众画像
  const primaryArchetype: IPArchetype = {
    id: `arch_${primaryData.starName}`,
    name: `${primaryData.titleZh} (${primaryData.nameEn})`,
    titleZh: primaryData.titleZh,
    tagline: primaryData.tagline,
    description: primaryData.description,
    naturalRole: primaryData.naturalRole,
    audiencePerception: primaryData.audiencePerception,
    growthLever: primaryData.growthLever,
    potentialBlindSpot: primaryData.potentialBlindSpot,
    recommendedFormats: ['深度商业案例剖析', '独创2x2矩阵长文', '白板推演视频']
  };

  const secondaryArchetype: IPArchetype = {
    id: `arch_${secondaryData.starName}`,
    name: `${secondaryData.titleZh} (${secondaryData.nameEn})`,
    titleZh: secondaryData.titleZh,
    tagline: secondaryData.tagline,
    description: secondaryData.description,
    naturalRole: secondaryData.naturalRole,
    audiencePerception: secondaryData.audiencePerception,
    growthLever: secondaryData.growthLever,
    potentialBlindSpot: secondaryData.potentialBlindSpot,
    recommendedFormats: ['方法论拆解长图', '诊断体检清单', '高维私享沙龙']
  };

  const supportingArchetype: IPArchetype = {
    id: `arch_${supportingData.starName}`,
    name: `${supportingData.titleZh} (${supportingData.nameEn})`,
    titleZh: supportingData.titleZh,
    tagline: supportingData.tagline,
    description: supportingData.description,
    naturalRole: supportingData.naturalRole,
    audiencePerception: supportingData.audiencePerception,
    growthLever: supportingData.growthLever,
    potentialBlindSpot: supportingData.potentialBlindSpot,
    recommendedFormats: ['行业趋势白皮书', '避坑指南清单']
  };

  const positioningStatement = `为追求确定性增长的决策者，通过${primaryData.naturalRole.split('/')[0]}的深度交付，打破${bottleneck.slice(0, 14)}瓶颈，实现${goal.slice(0, 16)}。`;

  return {
    id: `usr_${Date.now()}`,
    name: userName,
    email: `${userName.toLowerCase().replace(/\s+/g, '') || 'user'}@ziwei-ip.io`,
    role: userRole,
    tier: 'pro',
    primaryArchetype,
    secondaryArchetype,
    supportingArchetype,
    scores: calculatedScores,
    momentumScore: calculatedMomentum,
    momentumChange: 6,
    positioningStatement,
    audience: {
      primary: `有明确付费预算的中小企业主、垂直行业高管与成熟独立从业者（痛点紧迫、尊重专业价值、决策链短）。`,
      secondary: `处于转型期需要系统方法论赋能的资深专家、咨询顾问与高阶知识创作者。`,
      avoid: `缺乏明确业务场景的泛流量围观者、低价过度比价者与期待“一夜暴富速成”的投机客。`
    },
    brandVoice: primaryData.recommendedTone,
    cameraPersonality: {
      pace: primaryData.cameraPace,
      posture: '坐姿挺拔沉稳，眼神专注注视镜头，手部动作自然克制',
      setting: '极简现代书房、高品质专业收音麦克风、深色背景光晕',
      recommended: [
        primaryData.cameraPace,
        '坐姿挺拔沉稳，眼神专注注视镜头',
        '极简现代书房背景与高品质麦克风'
      ],
      avoid: ['制造焦虑', '浮夸快剪特效', '泛娱乐搞怪', '虚假倒计时逼单']
    }
  };
}

// 动态生成前 3 大破局洞察
export function generateDynamicInsights(userProfile: UserProfile, answers: Partial<TestAnswers>) {
  const primary = userProfile.primaryArchetype;
  const scores = userProfile.scores;

  const bottleneck = answers.challenges?.[0] || '按小时计费，缺乏高客单产品，收入与时间严重绑定';

  return [
    {
      number: '01',
      title: `核心优势：${primary.titleZh}天然自带高客单说服力`,
      desc: `您的【权威定力 (${scores.authority})】与【信任背书 (${scores.trust})】处于高位。高净值客户在接触你的瞬间，对你专业判断与逻辑框架产生信任的速度，远快于对你的情绪依赖。`
    },
    {
      number: '02',
      title: `突破卡点：${bottleneck.slice(0, 20)}`,
      desc: `根据您的 IP 基因模型，解决该卡点的关键是立即停止兜售零散的小时咨询，转而将隐性经验封装为【${primary.growthLever.split('、')[0]}】。`
    },
    {
      number: '03',
      title: `本周战略指令：校准内容飞轮配比`,
      desc: `在公开内容中，建议保持 ${scores.authority > 85 ? '30% 权（观点型）' : '35% 权'} 与 30% 禄（痛点共鸣），同时坚守【${primary.tagline.slice(0, 18)}】的品牌语态。`
    }
  ];
}
