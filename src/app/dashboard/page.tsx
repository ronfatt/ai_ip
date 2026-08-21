'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Compass,
  Briefcase,
  Bot,
  Zap,
  Target,
  FileText,
  Activity,
  Layers,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { MomentumOrbital } from '@/components/charts/MomentumOrbital';
import { BrandRadarMap } from '@/components/charts/BrandRadarMap';
import { useAppState } from '@/context/AppStateContext';

export default function DashboardPage() {
  const { userProfile, businessMetrics } = useAppState();
  const [activeSignal, setActiveSignal] = useState<string | null>(null);

  const coreSignals = [
    { key: 'QUAN', label: '权威定力', score: 92, status: '主导杠杆', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { key: 'KE', label: '信任背书', score: 87, status: '稳定输出', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
    { key: 'LU', label: '共情引力', score: 76, status: '良好共振', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { key: 'EXPR', label: '表达穿透', score: 81, status: '高辨识度', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
    { key: 'MON', label: '变现势能', score: 88, status: '高客单区', color: 'text-brand-champagne', bg: 'bg-brand-champagne/15 border-brand-champagne/30' }
  ];

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* 顶部主横幅：今日战略优先级 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-100 via-surface-200 to-surface-100 border border-brand-champagne/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded-full border border-brand-champagne/30">
                今日战略优先指令 · BUILD AUTHORITY
              </span>
              <span className="text-xs text-slate-400 font-mono">2026年第34周</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              巩固权威边界：挑战行业低价内卷
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              基于你本周的内容发布组合，当前权威能量偏高（48%），建议今日在 AI 创作工作台输出一篇关于“按商业价值定价而非按工时收费”的深度案例复盘，以平衡信任转化。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/studio"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>生成今日推荐脚本</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/coach"
              className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-surface-100 hover:bg-surface-50 border border-white/10 text-slate-200 text-xs font-bold transition-all text-center"
            >
              向 AI 战略教练咨询
            </Link>
          </div>
        </div>

        {/* 核心双引擎网格：势能轨道 + 五维雷达 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 左侧：战略势能轨道 (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  STRATEGIC VELOCITY
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">个人品牌战略势能</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                较上周上升 +6%
              </span>
            </div>

            {/* 轨道核心可视化 */}
            <div className="py-2 flex justify-center">
              <MomentumOrbital
                score={userProfile.momentumScore}
                velocity="+6% 增速"
                status="极高战略势能区"
              />
            </div>

            {/* 五大核心信号条 */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-4 border-t border-white/5 text-xs font-mono">
              {coreSignals.map((sig) => (
                <div
                  key={sig.key}
                  onClick={() => setActiveSignal(activeSignal === sig.key ? null : sig.key)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${sig.bg} ${
                    activeSignal === sig.key ? 'ring-1 ring-white/50 scale-105' : 'hover:border-white/20'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 block">{sig.label}</span>
                  <span className={`text-xl font-black ${sig.color}`}>{sig.score}</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{sig.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：五维雷达诊断 (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  5-AXIS RADAR
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">五维品牌能力模型</h3>
              </div>
              <Link href="/ip-dna" className="text-xs text-brand-champagne hover:underline font-mono">
                查看基因 &rarr;
              </Link>
            </div>

            <div className="flex justify-center py-2">
              <BrandRadarMap scores={userProfile.scores} size={260} />
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs text-slate-300 space-y-1 font-medium">
              <span className="text-brand-champagne font-mono font-bold text-[10px] uppercase block">
                核心主导优势：
              </span>
              <p className="text-[11px] leading-relaxed">
                你的权威定力（92）与变现势能（88）处于顶尖梯队，意味着你极具高客单溢价说服力，应当减少低端小课程投入，专注于高端咨询与年度陪跑。
              </p>
            </div>
          </div>
        </div>

        {/* 动态内容平衡与接下来 3 步行动 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左侧：四化内容平衡比例 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  CONTENT BALANCE
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">四化内容生态平衡度</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">本月发布占比 vs 推荐目标</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-bold">
                  <span>权 (Authority 观点)</span>
                  <span className="text-amber-400">48% (推荐目标 30%) - 偏高</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '48%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-bold">
                  <span>科 (Trust 案例复盘)</span>
                  <span className="text-blue-400">23% (推荐目标 25%) - 均衡</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '23%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-bold">
                  <span>禄 (Attraction 痛点共鸣)</span>
                  <span className="text-emerald-400">21% (推荐目标 30%) - 偏低</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '21%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-bold">
                  <span>忌 (Breakthrough 盲点警示)</span>
                  <span className="text-purple-400">8% (推荐目标 15%) - 偏低</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: '8%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：接下来的 3 步战略动作 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  NEXT 3 STRATEGIC MOVES
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">本周战略执行清单</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">优先级排序</span>
            </div>

            <div className="space-y-3 text-xs">
              {[
                {
                  step: '01',
                  title: '发布一篇禄（痛点共鸣）坐姿短视频',
                  desc: '切入“为什么资深专家每天工作14小时却赚不到钱”，补足引力池。',
                  link: '/studio',
                  linkText: '立即生成'
                },
                {
                  step: '02',
                  title: '在商业构建器中确认 5 阶高客单产品定价',
                  desc: '将单次咨询 RM1,500 升级为 RM4,800 私享陪跑方案。',
                  link: '/business',
                  linkText: '调整产品'
                },
                {
                  step: '03',
                  title: '完成《紫微IP定位学》第 3 模块出镜人设打磨',
                  desc: '校准 120 词/分钟的黄金语速与 iPad 手绘架构表达。',
                  link: '/academy',
                  linkText: '前往学习'
                }
              ].map((m) => (
                <div
                  key={m.step}
                  className="p-4 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-brand-champagne">{m.step}</span>
                      <strong className="text-white text-xs">{m.title}</strong>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{m.desc}</p>
                  </div>
                  <Link
                    href={m.link}
                    className="px-3 py-1.5 rounded-xl bg-surface-200 hover:bg-brand-champagne hover:text-slate-950 text-slate-300 font-bold text-[11px] transition-colors flex-shrink-0"
                  >
                    {m.linkText} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
