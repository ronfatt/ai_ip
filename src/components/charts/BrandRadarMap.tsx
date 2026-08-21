'use client';

import React, { useState } from 'react';
import { Sparkles, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight, Lightbulb } from 'lucide-react';
import { IPScores } from '@/types/database';

interface RadarNodeDetail {
  key: string;
  label: string;
  labelZh: string;
  score: number;
  color: string;
  headline: string;
  description: string;
  bestExpressions: string[];
  recommendedAction: string;
}

export const RADAR_NODES_DATA: Record<string, RadarNodeDetail> = {
  expertise: {
    key: 'expertise',
    label: 'Expertise',
    labelZh: '专业定位',
    score: 92,
    color: '#F59E0B',
    headline: '你最自然建立公信力的方式是通过结构化分析、认知模型与实战商业判断。',
    description: '你的领域权威密度极高。当你解释问题背后的底层机理而非浮于表面技巧时，企业高管与决策者会瞬间识别出你的大师段位。',
    bestExpressions: [
      '商业案例深度复盘与客户尸检',
      '独创 2x2 矩阵与决策逻辑',
      '逆主流独立观点与行业伪共识拆解',
      '高客单战略工作坊与私享会'
    ],
    recommendedAction: '将你的诊断方法论封装为 1 套专属视觉模型。'
  },
  identity: {
    key: 'identity',
    label: 'Identity',
    labelZh: '核心天性',
    score: 89,
    color: '#8B5CF6',
    headline: '定位为战略解读者与破局导师，而非浮于表面的娱乐网红。',
    description: '你拥有与生俱来的架构设计本能。当你将复杂混乱的系统梳理成清晰可复制的落地路线图时，认知能量最高。',
    bestExpressions: [
      '坐姿结构化深度视频',
      '方法论推演长文',
      '白板战略私享会',
      '沉稳无台本战术复盘'
    ],
    recommendedAction: '在输出高维方法论前，先用 5 秒自身真实案例建立情感信任。'
  },
  values: {
    key: 'values',
    label: 'Values',
    labelZh: '价值底线',
    score: 87,
    color: '#3B82F6',
    headline: '坚守专业底线，认知实质重于虚假营销，拥有明确的客户筛选边界。',
    description: '你的受众高度敬重你不搞虚假倒计时、不制造贩卖焦虑、不炫耀虚浮奢靡生活的纯粹专业态度。你的边界感就是你最强大的信任过滤器。',
    bestExpressions: [
      '反向客户筛选宣言',
      '重大战略转型背后的决策底层逻辑',
      '为什么我们拒绝高额但不匹配的客户'
    ],
    recommendedAction: '公开发布你的目标客户反向过滤与淘汰标准。'
  },
  audience: {
    key: 'audience',
    label: 'Audience',
    labelZh: '精准买家',
    score: 84,
    color: '#10B981',
    headline: '成熟企业主、独立顾问与有深厚专业沉淀的高管。',
    description: '你的内容能够直接穿透泛粉，直击具有真金白银支付能力的高净值客户。他们厌恶花哨说辞，只买单确定性与实战经验。',
    bestExpressions: [
      'B2B 商业体检自测清单',
      '同行转型避坑案例复盘',
      '高管认知跃迁对话'
    ],
    recommendedAction: '在每期视频结尾植入单一高意向线索动作（回复【蓝图】）。'
  },
  delivery: {
    key: 'delivery',
    label: 'Delivery',
    labelZh: '出镜表达',
    score: 81,
    color: '#E5C07B',
    headline: '从容克制、不疾不徐、字句铿锵的坐姿专家风范。',
    description: '无需刻意表现亢奋或假装热情。沉稳克制的语调搭配清晰的手绘逻辑推演，反而能展现强大的大师气场。',
    bestExpressions: [
      '120-130 词/分钟沉稳慢速讲解',
      'iPad 屏幕手绘架构分步推演',
      '深度留白停顿强化认知吸收'
    ],
    recommendedAction: '保持极简现代书房布景与高品质专业收音质感。'
  }
};

interface BrandRadarMapProps {
  scores?: IPScores;
  size?: number;
}

export const BrandRadarMap: React.FC<BrandRadarMapProps> = ({ size = 260 }) => {
  const [selectedNodeKey, setSelectedNodeKey] = useState<string>('expertise');
  const selectedNode = RADAR_NODES_DATA[selectedNodeKey];

  const axes = [
    { key: 'expertise', labelZh: '专业定位', score: 92, angleDeg: -90, color: '#F59E0B' },
    { key: 'identity', labelZh: '核心天性', score: 89, angleDeg: -18, color: '#8B5CF6' },
    { key: 'values', labelZh: '价值底线', score: 87, angleDeg: 54, color: '#3B82F6' },
    { key: 'audience', labelZh: '精准买家', score: 84, angleDeg: 126, color: '#10B981' },
    { key: 'delivery', labelZh: '出镜表达', score: 81, angleDeg: 198, color: '#E5C07B' },
  ];

  const center = size / 2;
  const radius = (size / 2) * 0.72;

  const polarToCartesian = (angleDeg: number, ratio: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = radius * ratio;
    return {
      x: center + r * Math.cos(angleRad),
      y: center + r * Math.sin(angleRad),
    };
  };

  const polygonPoints = axes
    .map((axis) => {
      const { x, y } = polarToCartesian(axis.angleDeg, axis.score / 100);
      return `${x},${y}`;
    })
    .join(' ');

  const gridRings = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <svg width={size} height={size} className="overflow-visible select-none">
        <defs>
          <linearGradient id="brandRadarGlowZh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F3D59B" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* 蛛网同心多边形 */}
        {gridRings.map((ring, idx) => {
          const ringPoints = axes
            .map((axis) => {
              const { x, y } = polarToCartesian(axis.angleDeg, ring);
              return `${x},${y}`;
            })
            .join(' ');
          return (
            <polygon
              key={idx}
              points={ringPoints}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* 轴线 */}
        {axes.map((axis) => {
          const { x, y } = polarToCartesian(axis.angleDeg, 1.0);
          return (
            <line
              key={axis.key}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          );
        })}

        {/* 填充多边形 */}
        <polygon
          points={polygonPoints}
          fill="url(#brandRadarGlowZh)"
          stroke="#F3D59B"
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out drop-shadow-[0_0_12px_rgba(243,213,155,0.3)]"
        />

        {/* 交互式节点 */}
        {axes.map((axis) => {
          const { x, y } = polarToCartesian(axis.angleDeg, axis.score / 100);
          const isSelected = selectedNodeKey === axis.key;
          const { x: labelX, y: labelY } = polarToCartesian(axis.angleDeg, 1.22);

          return (
            <g key={axis.key} className="cursor-pointer" onClick={() => setSelectedNodeKey(axis.key)}>
              {isSelected && (
                <circle cx={x} cy={y} r="12" fill={axis.color} opacity="0.25" className="animate-ping" />
              )}
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 6 : 4}
                fill={axis.color}
                stroke="#090B10"
                strokeWidth="2"
                className="transition-transform duration-200 hover:scale-125"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isSelected ? '#F3D59B' : '#94A3B8'}
                fontSize="11"
                fontWeight={isSelected ? 'bold' : 'normal'}
                className="font-sans transition-colors"
              >
                {axis.labelZh} ({axis.score})
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
