'use client';

import React from 'react';
import Link from 'next/link';
import {
  LineChart,
  TrendingUp,
  Award,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function ProgressPage() {
  const { businessMetrics, academyModules, userProfile } = useAppState();

  const completedCount = academyModules.filter((m) => m.completed).length;
  const courseCompletionPct = Math.round((completedCount / (academyModules.length || 1)) * 100);

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                GROWTH & REVENUE TELEMETRY
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              个人品牌商业成长进度看板
            </h1>
            <p className="text-sm text-slate-300">
              追踪内容生产密度、高质量线索获取、咨询预约量与总成交营收增长。
            </p>
          </div>

          <Link
            href="/studio"
            className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center gap-1.5 self-start sm:self-auto shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>进入创作台发布新内容</span>
          </Link>
        </div>

        {/* 核心 4 大商业指标卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">累计总变现金额</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              RM {businessMetrics.revenueRM.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-400 font-mono font-semibold">+24.5% 本月增长</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">精准高客单线索量</span>
            <div className="text-2xl sm:text-3xl font-black text-brand-champagne font-mono">
              {businessMetrics.leads} 条
            </div>
            <span className="text-[11px] text-slate-300 font-mono">线索转化率: 19.7%</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">战略诊断咨询预约</span>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
              {businessMetrics.consultations} 场
            </div>
            <span className="text-[11px] text-slate-300 font-mono">成交转化: {businessMetrics.sales} 单</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">大师课完课进度</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">
              {courseCompletionPct}%
            </div>
            <span className="text-[11px] text-slate-300 font-mono">已学完 {completedCount}/8 模块</span>
          </div>
        </div>

        {/* 内容生产与四化配比健康度 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                PUBLISHING CADENCE
              </span>
              <span className="text-xs text-slate-400 font-mono">月度目标达成</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between">
                <div>
                  <strong className="text-white text-sm block">已发布深度视频脚本</strong>
                  <span className="text-slate-400 text-[10px]">月度目标：20 篇高密度视频</span>
                </div>
                <span className="text-2xl font-black text-brand-champagne">
                  {businessMetrics.videosCreatedCount} / 20
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between">
                <div>
                  <strong className="text-white text-sm block">多平台一键分发内容数</strong>
                  <span className="text-slate-400 text-[10px]">领英 / 小红书 / 公众号 / 邮件</span>
                </div>
                <span className="text-2xl font-black text-emerald-400">
                  {businessMetrics.contentPublishedCount} 篇
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                TRANSFORMATION MIX
              </span>
              <span className="text-xs text-slate-400 font-mono">内容生态均衡指标</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>权 (Authority 权威观点)</span>
                <span className="text-amber-400 font-bold">{businessMetrics.transformationMix.authority}%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>科 (Trust 案例实证)</span>
                <span className="text-blue-400 font-bold">{businessMetrics.transformationMix.trust}%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>禄 (Attraction 痛点共鸣)</span>
                <span className="text-emerald-400 font-bold">{businessMetrics.transformationMix.attraction}%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>忌 (Breakthrough 盲点警示)</span>
                <span className="text-purple-400 font-bold">{businessMetrics.transformationMix.breakthrough}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
