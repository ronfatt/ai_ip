'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, HelpCircle, Sparkles, TrendingUp, Info } from 'lucide-react';

interface MomentumOrbitalProps {
  score: number; // e.g. 84
  changePercent?: number; // e.g. 6
  velocity?: string;
  status?: string;
  onOpenExplainability?: () => void;
}

export const MomentumOrbital: React.FC<MomentumOrbitalProps> = ({
  score = 84,
  changePercent = 6,
  velocity = '+6% 增速',
  status = '极高战略势能区',
  onOpenExplainability
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const breakdown = [
    { label: '权威定力', change: '+8%', positive: true, current: 92 },
    { label: '信任背书', change: '+5%', positive: true, current: 87 },
    { label: '表达穿透', change: '+3%', positive: true, current: 81 },
    { label: '共情引力', change: '-1%', positive: false, current: 76 },
  ];

  const size = 190;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-between h-full w-full">
      {/* 顶部元数据条 */}
      <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
        <span className="font-bold uppercase tracking-wider text-slate-300 text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-champagne animate-pulse" />
          战略势能轨道
        </span>
        <button
          onClick={onOpenExplainability}
          className="text-[10px] text-slate-400 hover:text-brand-champagne flex items-center gap-1 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          <span>算法原理</span>
        </button>
      </div>

      {/* 圆环核心 */}
      <div className="relative flex items-center justify-center my-2">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* 背景底环 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-surface-100/60"
          />
          {/* 进度主环 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#momentumGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="momentumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#C6A868" />
            </linearGradient>
          </defs>
        </svg>

        {/* 环内核心数据 */}
        <div className="absolute flex flex-col items-center justify-center text-center select-none">
          <span className="text-4xl font-black tracking-tight text-white font-mono">
            {score}
          </span>
          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest mt-0.5">
            综合势能指数
          </span>
          <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
            <ArrowUpRight className="w-3 h-3" />
            <span>+{changePercent}% 本周</span>
          </div>
        </div>
      </div>

      {/* 展开 7 天子项动量速度按钮 */}
      <div className="w-full mt-3 pt-3 border-t border-white/5">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
        >
          <span>7 天各维度动量明细</span>
          <ChevronRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isExpanded ? 'rotate-90 text-brand-champagne' : ''
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-1.5 animate-fade-in text-[11px] font-mono">
            {breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-100/50">
                <span className="text-slate-300">{item.label} ({item.current})</span>
                <span className={`font-bold ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
