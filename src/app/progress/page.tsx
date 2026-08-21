'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  LineChart,
  TrendingUp,
  FileCheck,
  Video,
  Users,
  DollarSign,
  GraduationCap,
  Sparkles,
  ArrowRight,
  AlertCircle,
  BarChart3,
  Calendar
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { AnalyticsBar } from '@/components/charts/AnalyticsBar';
import { useAppState } from '@/context/AppStateContext';
import { formatCurrencyRM } from '@/lib/utils';

export default function ProgressPage() {
  const router = useRouter();
  const { businessMetrics, academyModules, userProfile } = useAppState();

  const completedModulesCount = academyModules.filter((m) => m.completed).length;
  const courseCompletionPct = Math.round((completedModulesCount / academyModules.length) * 100);

  const transformationMixItems = [
    {
      label: 'Authority Content (QUAN 权)',
      subLabel: 'Leadership Standards & Contrarian Frameworks',
      value: businessMetrics.transformationMix.authority,
      max: 100,
      barClass: 'bg-amber-400'
    },
    {
      label: 'Trust Content (KE 科)',
      subLabel: 'Diagnostic Case Studies & Proven Results',
      value: businessMetrics.transformationMix.trust,
      max: 100,
      barClass: 'bg-blue-400'
    },
    {
      label: 'Attraction Content (LU 禄)',
      subLabel: 'Resonance & Unspoken Frustrations',
      value: businessMetrics.transformationMix.attraction,
      max: 100,
      barClass: 'bg-emerald-400'
    },
    {
      label: 'Breakthrough Content (JI 忌)',
      subLabel: 'Vulnerability & Blind Spot Teardowns',
      value: businessMetrics.transformationMix.breakthrough,
      max: 100,
      barClass: 'bg-pink-400'
    }
  ];

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                DATA & PERFORMANCE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Progress & Content Intelligence
            </h1>
            <p className="text-sm text-slate-300">
              Audit your content output ratio, audience acquisition metrics, and high-ticket pipeline velocity.
            </p>
          </div>

          <button
            onClick={() => router.push('/studio')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Balance Content in Studio</span>
          </button>
        </div>

        {/* AI Diagnostic Alert */}
        <div className="p-5 rounded-3xl bg-surface-200 border border-brand-champagne/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-brand-champagne/20 text-brand-champagne mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne block">
                AI Coach Strategic Recommendation
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                “Your content mix currently over-relies on Attraction (25%) and lacks enough Case Autopsies (20%). Increase KE (Trust) and QUAN (Authority) next week to accelerate enterprise consultations.”
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push('/studio?trans=KE')}
            className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne text-xs font-bold border border-brand-champagne/30 whitespace-nowrap self-end sm:self-auto"
          >
            Generate KE Case Study &rarr;
          </button>
        </div>

        {/* Top KPI Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-brand-champagne" /> Published
            </span>
            <div className="text-2xl font-black text-white font-mono">{businessMetrics.contentPublishedCount}</div>
            <span className="text-[10px] text-slate-400">Target: {businessMetrics.targetContentCount}</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-purple-400" /> Videos
            </span>
            <div className="text-2xl font-black text-white font-mono">{businessMetrics.videosCreatedCount}</div>
            <span className="text-[10px] text-emerald-400">60s sit-down</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-blue-400" /> Leads
            </span>
            <div className="text-2xl font-black text-white font-mono">{businessMetrics.leads}</div>
            <span className="text-[10px] text-emerald-400">+8 this mo</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Calls
            </span>
            <div className="text-2xl font-black text-white font-mono">{businessMetrics.consultations}</div>
            <span className="text-[10px] text-emerald-400">7 booked</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Revenue
            </span>
            <div className="text-lg sm:text-xl font-black text-brand-champagne font-mono">
              {formatCurrencyRM(businessMetrics.revenueRM)}
            </div>
            <span className="text-[10px] text-emerald-400">+18% MoM</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-pink-400" /> Academy
            </span>
            <div className="text-2xl font-black text-white font-mono">{courseCompletionPct}%</div>
            <span className="text-[10px] text-slate-400">{completedModulesCount} of 8 done</span>
          </div>
        </div>

        {/* Transformation Balance & Content Mix Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Transformation Bar Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                  Transformation Balance
                </span>
                <h3 className="text-lg font-bold text-white">Four Transformations Content Ratio</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">Active 30-Day Mix</span>
            </div>

            <AnalyticsBar items={transformationMixItems} />

            <div className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between text-xs text-slate-300">
              <span>⚖️ <strong>Optimal Mix Guideline:</strong> 35% Authority · 30% Attraction · 20% Trust · 15% Breakthrough</span>
            </div>
          </div>

          {/* Right: Funnel Conversion Velocity */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Funnel Throughput
              </span>
              <h3 className="text-lg font-bold text-white mb-4">From Viewers to Advisory Clients</h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">1. Top Funnel Video Views</span>
                  <span className="font-mono font-bold text-white">48,200</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">2. Free IP Test Completions</span>
                  <span className="font-mono font-bold text-brand-champagne">142</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">3. Diagnostic Strategy Calls</span>
                  <span className="font-mono font-bold text-blue-400">7</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-emerald-300 font-bold">4. High-Ticket Advisory Closed</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">3 (RM 8,400)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push('/business')}
              className="w-full py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-bold border border-white/10 transition-colors text-center"
            >
              Adjust Offer Pricing & Capacity &rarr;
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
