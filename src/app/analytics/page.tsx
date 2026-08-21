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
  const { demoRole, setDemoRole, entitlements, eventsLog, pricing } = useAppState();

  const funnelSteps = [
    { label: 'Landing Visitors', count: 10000, rate: '100%', drop: '0%' },
    { label: 'Test Starts', count: 3200, rate: '32.0%', drop: '-68.0%' },
    { label: 'Test Completed', count: 2480, rate: '77.5%', drop: '-22.5%' },
    { label: 'Free Reports Viewed', count: 1900, rate: '76.6%', drop: '-23.4%' },
    { label: 'Blueprint Checkouts', count: 420, rate: '22.1%', drop: '-77.9%' },
    { label: 'Blueprint Sales (RM299)', count: 280, rate: '66.7%', drop: '-33.3%', revenue: 280 * pricing.blueprintPrice },
    { label: 'Course Sales (RM899)', count: 96, rate: '34.3%', drop: '-65.7%', revenue: 96 * pricing.coursePrice },
    { label: 'PRO Upgrades (RM99/mo)', count: 41, rate: '14.6%', drop: '-85.4%', revenue: 41 * pricing.proMonthlyPrice * 12 },
    { label: 'Elite Applications (RM3.8k+)', count: 12, rate: '12.5%', drop: '-87.5%', revenue: 12 * pricing.eliteStartingPrice }
  ];

  const totalGrossRevenue =
    280 * pricing.blueprintPrice +
    96 * pricing.coursePrice +
    41 * pricing.proMonthlyPrice * 12 +
    12 * pricing.eliteStartingPrice;

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                COMMERCIAL CONVERSION ENGINE
              </span>
              <span className="text-xs text-slate-400 font-mono">Live Simulation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Conversion & Funnel Analytics
            </h1>
            <p className="text-sm text-slate-300">
              End-to-end commercial tracking from free assessment to Blueprint unlock, Masterclass, PRO MRR, and Elite consulting.
            </p>
          </div>

          {/* Demo Role Switcher Bar */}
          <div className="p-2 rounded-2xl bg-surface-200 border border-brand-champagne/30 flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-brand-champagne uppercase px-2">
              DEMO ROLE:
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
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Top Summary Revenue & KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">Simulated Gross Revenue</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              RM {totalGrossRevenue.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-400 font-mono font-semibold">+18.4% this cohort</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">Test $\rightarrow$ Blueprint Conversion</span>
            <div className="text-2xl sm:text-3xl font-black text-brand-champagne font-mono">
              11.3%
            </div>
            <span className="text-[11px] text-slate-300 font-mono">280 sales / 2,480 tests</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">Blueprint $\rightarrow$ Course Cross-sell</span>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
              34.3%
            </div>
            <span className="text-[11px] text-slate-300 font-mono">96 masterclass buyers</span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">PRO MRR Pipeline</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">
              RM 4,059/mo
            </div>
            <span className="text-[11px] text-slate-300 font-mono">41 active subscribers</span>
          </div>
        </div>

        {/* Funnel Breakdown Table & Visual Waterfall */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                WATERFALL CONVERSION FUNNEL
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">Stage-by-Stage Performance</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Pixel & Event Tracking Ready</span>
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
                      <span className="text-slate-200 font-bold">{step.count.toLocaleString()} users</span>
                      <span className="text-brand-champagne font-bold w-16 text-right">{step.rate}</span>
                      {step.revenue && (
                        <span className="text-emerald-400 font-bold w-24 text-right hidden sm:inline">
                          RM {step.revenue.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual Waterfall Bar */}
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

        {/* Real-time Event Tracking Log */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              DISPATCHED EVENT LOGS (GA4 / META / TIKTOK PIXEL)
            </span>
            <span className="text-xs text-slate-400 font-mono">{eventsLog.length} events logged in session</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 max-h-48 overflow-y-auto font-mono text-[11px] space-y-1.5 text-slate-300">
            {eventsLog.length === 0 ? (
              <span className="text-slate-500">No events logged yet. Navigate through test, report and checkout to see live telemetry.</span>
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
