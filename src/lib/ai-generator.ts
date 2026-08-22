import { GeneratedScript, TransformationKey } from '@/types/database';

interface GenerateParams {
  topic: string;
  contentType: 'Opinion' | 'Knowledge' | 'Story' | 'Case Study' | 'Sales' | 'Educational' | 'Behind The Scenes';
  transformation: TransformationKey;
  userName?: string;
  userRole?: string;
  archetype?: string;
}

export function generateScriptContent(params: GenerateParams): GeneratedScript {
  const { topic, contentType, transformation, userName = '陈志远', userRole = '商业战略顾问', archetype = '策略型破局者' } = params;
  const cleanTopic = topic.trim() || '为什么资深专家每天工作14小时却赚不到钱？';
  const id = `scr_${Date.now()}`;
  const now = new Date().toISOString();

  // 四化特定配置
  const transMap: Record<TransformationKey, { prefix: string; hookAngle: string; tone: string; ctaWord: string; ctaText: string }> = {
    LU: {
      prefix: '🌟 禄 (痛点共鸣与引力池)',
      hookAngle: '扎心痛点共鸣 / 情绪深层呼应',
      tone: '温和共情、观察入微、见解独到',
      ctaWord: '蓝图',
      ctaText: '在评论区回复【蓝图】，我将发送给你完整的《5步个人品牌共鸣自测表》。'
    },
    QUAN: {
      prefix: '👑 权 (行业权威与强定力)',
      hookAngle: '逆主流洞察 / 行业伪常识拆解',
      tone: '直接犀利、从容沉稳、高认知定力、权威说服',
      ctaWord: 'IP',
      ctaText: '在评论区回复【IP】，免费获取我们的《高客单商业定位与定价矩阵》。'
    },
    KE: {
      prefix: '🛡️ 科 (信任背书与方法论)',
      hookAngle: '案例复盘剖析 / 数据与实证',
      tone: '逻辑严密、务实落地、证据确凿、公信力强',
      ctaWord: '案例',
      ctaText: '私信我发送【案例】，获取完整的商业案例拆解与诊断底稿。'
    },
    JI: {
      prefix: '⚡ 忌 (认知盲点与破局卡点)',
      hookAngle: '反常识瓶颈警示 / 觉醒破局',
      tone: '直击本质、促人深思、认知升维',
      ctaWord: '体检',
      ctaText: '点击链接完成 3 分钟免费 IP 基因测评，在下次启动前排查出核心盲点。'
    }
  };

  const currentTrans = transMap[transformation] || transMap.QUAN;

  // 动态生成 3 组破局钩子
  const hookOptions = [
    {
      text: `如果你是一名资深的${userRole}，却依然在为“${cleanTopic}”感到焦虑，这根本不是你不够努力，而是你的定位出现了系统性偏差。`,
      score: 96,
      style: '高定力犀利破局'
    },
    {
      text: `年入百万的资深从业者在面对“${cleanTopic}”时最常犯的 1 个隐蔽错误——以及你应该如何正确应对。`,
      score: 92,
      style: '诊断式警示提醒'
    },
    {
      text: `为什么市面上关于“${cleanTopic}”的常规教学，正在悄悄赶走你最优质的高客单客户？`,
      score: 89,
      style: '逆主流反常识洞察'
    }
  ];

  const coreIdea = `作为【${archetype}】，攻克“${cleanTopic}”的核心在于摒弃低效浮夸的泛流量套路，用结构化的认知模型与清晰的交付边界，稳固你天生的行业权威。`;

  const script30s = `绝大多数人以为解决“${cleanTopic}”的办法是多发内容、大声叫卖。
但真相是：真正有支付能力的高净值客户从来不买单嘈杂的噪音，他们只买单确定性与高维洞察。
当你掌握了天生的 IP 原型与核心杠杆，你就不需要讨好算法，而是直接掌握高客单定价权。
停止盲目跟风套路，构建专属于你的高维品牌操作系统。
关注我，每天为你拆解高客单商业品牌底层逻辑。`;

  const script60s = `告诉你一个很多所谓的流量导师从来不敢承认的真相：
在探讨“${cleanTopic}”时，跟着所有人做同样的事，是你在这个市场迅速隐形的最快方式。
如果你有 10 年以上的行业深厚积淀，却尝试靠快节奏的搞笑段子或情绪喧闹来获客，只会让你的专业形象严重贬值。
高净值企业决策者在为高客单咨询买单时，只看 3 个核心信号：
第一：30秒直击问题本质的手术刀级诊断力；
第二：拥有清晰可落地的结构化交付模型，而不是随性发挥；
第三：在所有人低价内卷打折时，依然坚守价值底线的战略定力。
当你将内容与天性深度对齐——运用我们的四化内容飞轮——获客将不再是一场痛苦的挣扎。
你将从被动追逐线索，转变为持续吸引主动认可你价值的精准买家。
如果你准备好重构你的商业定位，${currentTrans.ctaText}`;

  const caption = `别再用泛滥的表面技巧去应对“${cleanTopic}”了。🛑

作为一名${userRole}，你最大的核心壁垒不是泛娱乐播放量，而是你的专业权威与深度信任。

实现高客单跃迁需要的 3 个关键转变：
1️⃣ 用高密度认知诊断取代流水线内容；
2️⃣ 用清晰的客户筛选标准过滤低意向比价人群；
3️⃣ 直接针对愿意为结果买单的企业决策者痛点发声。

关于这个主题，你目前最大的卡点是什么？欢迎在评论区探讨交流。👇

#商业战略 #个人IP #高客单定位 #知识变现 #紫微IP`;

  return {
    id,
    topic: cleanTopic,
    contentType,
    transformation,
    hookOptions,
    coreIdea,
    script30s,
    script60s,
    cta: currentTrans.ctaText,
    caption,
    thumbnailTitle: `为什么高手从来不卷\n${cleanTopic.slice(0, 8)}`,
    bRollIdeas: [
      'iPad 黑暗模式下用 Apple Pencil 绘制商业 2x2 战略矩阵',
      '近景展示简洁现代的实木工作台与专业广播级麦克风',
      '黑白极简风格展示核心战略公式卡片'
    ],
    shotSuggestions: [
      '镜头 01 (0–3秒)：直视镜头，语速沉稳，开门见山抛出破局钩子',
      '镜头 02 (4–15秒)：切至侧机位 45 度角，iPad 屏幕录制同步推演逻辑架构',
      '镜头 03 (16–45秒)：切回正机位中景，结合真实商业案例展开深度剖析',
      '镜头 04 (46–60秒)：保持直接目光接触，发出单一明确的高转化行动指令'
    ],
    createdAt: now,
    saved: false
  };
}
