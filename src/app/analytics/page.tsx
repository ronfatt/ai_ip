'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Activity,
  Layers,
  Database
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { EntitlementRole } from '@/types/conversion';

export default function AnalyticsPage() {
  const { demoRole, setDemoRole, eventsLog, pricing } = useAppState();

  const funnelSteps = [
    { label: '访客访问首页', count: 10000, rate: '100%', drop: '0%' },
    { label: '开始免费测评', count: 3200, rate: '32.0%', drop: '-68.0%' },
    { label: '完成测评问卷', count: 2480, rate: '77.5%', drop: '-22.5%' },
    { label: '查看专属快照报告', count: 1900, rate: '76.6%', drop: '-23.4%' },
    { label: '进入收银结算台', count: 420, rate: '22.1%', drop: '-77.9%' },
    { label: '解锁战略蓝图 (RM299)', count: 280, rate: '66.7%', drop: '-33.3%', revenue: 280 * pricing.blueprintPrice },
    { label: '加购大师课 (RM899)', count: 96, rate: '34.3%', drop: '-65.7%', revenue: 96 * pricing.coursePrice },
    { label: '开通 PRO 会员 (RM99/月)', count: 41, rate: '14.6%', drop: '-85.4%', revenue: 41 * pricing.proMonthlyPrice * 12 },
    { label: '申请私享陪跑 (RM3,800+)', count: 12, rate: '12.5%', drop: '-87.5%', revenue: 12 * pricing.eliteStartingPrice }
  ];

  const totalGrossRevenue =
    280 * pricing.blueprintPrice +
    96 * pricing.coursePrice +
    41 * pricing.proMonthlyPrice * 12 +
    12 * pricing.eliteStartingPrice;

  const roleNameMap: Record<string, string> = {
    FREE: '免费测试',
    BLUEPRINT: '战略蓝图',
    COURSE: '大师课',
    PRO: 'PRO会员',
    ELITE: '私享陪跑'
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                商业转化监控中心
              </span>
              <span className="text-xs text-slate-400 font-mono">实时转化遥测</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              商业转化与全链路漏斗分析
            </h1>
            <p className="text-sm text-slate-300">
              从免费测试引流到蓝图解锁、大师课购买、PRO 会员订阅及私享陪跑的全流程数据追踪。
            </p>
          </div>

          {/* 演示角色切换器 */}
          <div className="p-2 rounded-2xl bg-surface-200 border border-brand-champagne/30 flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-brand-champagne uppercase px-2">
              测试身份:
            </span>
            {(['FREE', 'BLUEPRINT', 'COURSE', 'PRO', 'ELITE'] as EntitlementRole[]).map((role) => (
              <button
                key={role}
                onClick={() => setDemoRole(role)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  demoRole === role
                    ? 'bg-brand-champagne text-slate-950 shadow-md scale-105'
                    : 'bg-surface-100 text-slate-400 hover:text-white'
                }`}
              >
                {roleNameMap[role] || role}
              </button>
            ))}
          </div>
        </div>

        {/* 顶部营收指标卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">模拟总成交金额 (Gross Revenue)</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              RM {totalGrossRevenue.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-400 font-mono font-semibold">+18.4% 本期增长</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">测试 $\rightarrow$ 蓝图付费转化率</span>
            <div className="text-2xl sm:text-3xl font-black text-brand-champagne font-mono">
              11.3%
            </div>
            <span className="text-[11px] text-slate-300 font-mono">280 单 / 2,480 完测</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">蓝图 $\rightarrow$ 大师课加购率</span>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
              34.3%
            </div>
            <span className="text-[11px] text-slate-300 font-mono">96 位大师课学员</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">PRO 会员月度订阅流水</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">
              RM 4,059 / 月
            </div>
            <span className="text-[11px] text-slate-300 font-mono">41 位活跃订阅会员</span>
          </div>
        </div>

        {/* 瀑布流漏斗表现 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                WATERFALL CONVERSION FUNNEL
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">全链路漏斗逐级转化率</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Pixel 像素事件已打通</span>
          </div>

          <div className="space-y-3">
            {funnelSteps.map((step, idx) => {
              const barWidth = Math.max(8, (step.count / 10000) * 100);

              return (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-surface-100 flex items-center justify-center font-mono text-[10px] text-slate-400">
                        {idx + 1}
                      </span>
                      {step.label}
                    </span>

                    <div className="flex items-center gap-4 font-mono text-[11px]">
                      <span className="text-slate-200 font-bold">{step.count.toLocaleString()} 人</span>
                      <span className="text-brand-champagne font-bold w-16 text-right">{step.rate}</span>
                      {step.revenue && (
                        <span className="text-emerald-400 font-bold w-24 text-right hidden sm:inline">
                          RM {step.revenue.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 瀑布条 */}
                  <div className="h-2.5 rounded-full bg-surface-100 overflow-hidden border border-white/5">
                    <div
                      style={{ width: `${barWidth}%` }}
                      className="h-full bg-gradient-to-r from-brand-violet via-brand-blue to-brand-champagne rounded-full transition-all duration-700"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 实时事件埋点日志 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              实时数据埋点事件 (GA4 / META / 微信 PIXEL 兼容)
            </span>
            <span className="text-xs text-slate-400 font-mono">当前会话已记录 {eventsLog.length} 条事件</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 max-h-48 overflow-y-auto font-mono text-[11px] space-y-1.5 text-slate-300">
            {eventsLog.length === 0 ? (
              <span className="text-slate-500">暂无事件记录。在页面中进行测试、查看报告与结算将产生实时埋点。</span>
            ) : (
              eventsLog.map((evt) => (
                <div key={evt.id} className="flex items-center justify-between text-slate-300 hover:text-white">
                  <span className="text-brand-champagne">[{evt.timestamp.split('T')[1].slice(0, 8)}] {evt.name}</span>
                  <span className="text-slate-500 truncate max-w-xs">{JSON.stringify(evt.metadata || {})}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
