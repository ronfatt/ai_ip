'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  HelpCircle,
  CheckCircle2,
  Clock,
  Command,
  Search,
  Sliders,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Play
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { MomentumOrbital } from '@/components/charts/MomentumOrbital';
import { BrandRadarMap } from '@/components/charts/BrandRadarMap';
import { ExplainabilityModal } from '@/components/ui/ExplainabilityModal';
import { CommandBarModal } from '@/components/ui/CommandBarModal';
import { useAppState } from '@/context/AppStateContext';

export default function DashboardPage() {
  const router = useRouter();
  const { userProfile, addToast } = useAppState();

  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [isCommandModalOpen, setIsCommandModalOpen] = useState(false);
  const [activeSignalKey, setActiveSignalKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const coreSignals = [
    {
      key: 'authority',
      label: 'AUTHORITY',
      labelZh: '权威定力',
      score: 92,
      trend: '+8%',
      status: 'Strong',
      positive: true,
      color: 'text-amber-400',
      badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'People are increasingly likely to perceive you as someone with seasoned judgment, high conviction, and category leadership.',
      recommended: 'Increase expert opinion content and contrarian frameworks.'
    },
    {
      key: 'trust',
      label: 'TRUST',
      labelZh: '信任背书',
      score: 87,
      trend: '+5%',
      status: 'High Institutional',
      positive: true,
      color: 'text-blue-400',
      badgeClass: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'You build deep credibility through verifiable evidence, transparent process teardowns, and client case autopsies.',
      recommended: 'Publish client transformation autopsies with concrete before/after metrics.'
    },
    {
      key: 'attraction',
      label: 'ATTRACTION',
      labelZh: '共情引力',
      score: 76,
      trend: '-1%',
      status: 'Needs Attention',
      positive: false,
      color: 'text-emerald-400',
      badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'You are respected faster than you are emotionally approached. Lower initial barrier with relatable observation hooks.',
      recommended: 'Open content with unspoken founder pain points before presenting frameworks.'
    },
    {
      key: 'expression',
      label: 'EXPRESSION',
      labelZh: '表达语态',
      score: 81,
      trend: '+3%',
      status: 'Analytical',
      positive: true,
      color: 'text-purple-400',
      badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'Your voice resonates best when breaking down complex concepts into structured 2x2 matrices and deliberate sit-down videos.',
      recommended: 'Use visual whiteboard diagrams on camera.'
    },
    {
      key: 'monetization',
      label: 'MONETIZATION',
      labelZh: '变现势能',
      score: 88,
      trend: '+6%',
      status: 'RM 4.8k Tier',
      positive: true,
      color: 'text-brand-champagne',
      badgeClass: 'bg-brand-champagne/15 text-brand-champagne border-brand-champagne/30',
      description: 'Your pricing power is strongest when selling structured transformation rather than charging by the hour.',
      recommended: 'Package your 12-week bespoke advisory offer to 5 clients.'
    }
  ];

  const currentInsights = [
    {
      tag: 'STRENGTH',
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      headline: 'Clarity of Judgment',
      text: 'Your strongest advantage is not volume of content — it is clarity of judgment and structured frameworks.'
    },
    {
      tag: 'OPPORTUNITY',
      tagColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      headline: 'Resonance Timing',
      text: 'Your Attraction score is lower than Authority, which may cause audiences to respect you before emotionally connecting with you.'
    },
    {
      tag: 'RISK',
      tagColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      headline: 'Cognitive Distance',
      text: 'Your content may sometimes become too analytical before establishing emotional relevance with your audience.'
    },
    {
      tag: 'NEXT MOVE',
      tagColor: 'text-brand-champagne border-brand-champagne/30 bg-brand-champagne/10',
      headline: 'Human Context',
      text: 'Introduce more personal experiences and vulnerability without reducing professional authority.'
    }
  ];

  const nextMoves = [
    {
      number: '01',
      title: 'Publish one Authority (QUAN) post',
      priority: 'HIGH PRIORITY',
      priorityColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      effort: '10 min',
      actionLabel: 'Create now',
      actionUrl: '/studio?trans=QUAN&topic=Why%20most%20businesses%20should%20stop%20copying%20influencers'
    },
    {
      number: '02',
      title: 'Complete Brand Voice parameters',
      priority: 'MEDIUM',
      priorityColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      effort: '5 min',
      actionLabel: 'Review voice',
      actionUrl: '/blueprint'
    },
    {
      number: '03',
      title: 'Review your Core Offer pricing ladder',
      priority: 'MEDIUM',
      priorityColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      effort: '15 min',
      actionLabel: 'Adjust offer',
      actionUrl: '/business'
    }
  ];

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* ================= SECTION 1: HERO INTELLIGENCE AREA ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs">
              <span className="text-[11px] font-mono font-bold text-brand-champagne bg-brand-champagne/10 px-2.5 py-0.5 rounded-full border border-brand-champagne/30">
                PERSONAL BRAND INTELLIGENCE OS
              </span>
              <span className="text-slate-400 font-mono hidden sm:inline">· Strategy updated 2 days ago</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Good Afternoon, {userProfile.name.split(' ')[0]}
            </h1>
            <p className="text-sm text-slate-300">
              Your positioning is becoming clearer. Authority and trust signals are currently leading your growth.
            </p>
          </div>

          {/* Global Command Bar Trigger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsCommandModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <Search className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Ask ZIWEI IP...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* ================= SECTION 2: HERO GRID (IP MOMENTUM & AI PRIORITY) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* IP Momentum Hero Orbital (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <MomentumOrbital
              score={userProfile.momentumScore}
              changePercent={userProfile.momentumChange}
              onOpenExplainability={() => setIsExplainModalOpen(true)}
            />
          </div>

          {/* Today's Strategic Priority Card (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-200/95 via-surface-200/90 to-surface-100/80 border border-brand-champagne/30 shadow-xl flex flex-col justify-between relative space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> TODAY’S STRATEGIC PRIORITY
                </span>
                <span className="text-[11px] font-mono text-slate-400">AI Recommendation</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Build Authority (QUAN)
                </h2>
                <div className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 mt-3 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block">Strategic Rationale:</span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    Your recent content is attracting attention, but your Authority ratio (21%) is below your recommended 30% target mix. High-ticket enterprise decision-makers need high-conviction proof to close.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-100/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Recommended Action Today:</strong> Publish one strong opinion or expert-analysis piece directly challenging a common industry mistake.
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5">
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                Suggested Topic: “Why business owners should stop copying generic influencers”
              </span>

              <button
                onClick={() => router.push('/studio?trans=QUAN&topic=Why%20business%20owners%20should%20stop%20copying%20generic%20influencers')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Create Authority Content</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: YOUR FIVE CORE SIGNALS ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                DIAGNOSTIC MATRIX
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">Your Five Core Signals</h2>
            </div>
            <button
              onClick={() => setIsExplainModalOpen(true)}
              className="text-xs text-slate-400 hover:text-brand-champagne flex items-center gap-1 font-mono transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Why am I seeing this?</span>
            </button>
          </div>

          {/* 5 Core Signals Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {coreSignals.map((signal) => {
              const isSelected = activeSignalKey === signal.key;

              return (
                <div
                  key={signal.key}
                  onClick={() => setActiveSignalKey(isSelected ? null : signal.key)}
                  className={`p-5 rounded-2xl bg-surface-200/90 border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'border-brand-champagne bg-surface-100 shadow-xl scale-[1.02]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 font-mono">{signal.label}</span>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${signal.badgeClass}`}>
                        {signal.status}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-black text-white font-mono">{signal.score}</span>
                      <span className={`text-xs font-bold font-mono flex items-center gap-0.5 ${signal.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {signal.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {signal.trend}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-snug line-clamp-3">
                      {signal.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                    <strong className="text-brand-champagne block mb-0.5">Recommended:</strong>
                    <span className="line-clamp-2 text-slate-200">{signal.recommended}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SECTION 4: BRAND RADAR MAP ================= */}
        <BrandRadarMap />

        {/* ================= SECTION 5: CURRENT INSIGHTS STREAM ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                AI OBSERVATIONS
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">Current Insights</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Personalized AI Synthesis</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentInsights.map((insight, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between hover:border-brand-champagne/30 transition-colors"
              >
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border w-fit block mb-2 ${insight.tagColor}`}>
                    {insight.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1.5">{insight.headline}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{insight.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 6: CONTENT BALANCE & YOUR NEXT 3 MOVES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Content Balance Visualization (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  CONTENT BALANCE
                </span>
                <span className="text-[10px] text-slate-400 font-mono">30-Day Distribution</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Recommended vs Current Output Mix</h3>
              <p className="text-xs text-slate-300 mb-4">
                Maintaining balanced transformation vectors prevents audience fatigue and optimizes inbound consultation volume.
              </p>

              {/* Stacked Bars Comparison */}
              <div className="space-y-3 text-xs">
                {/* Recommended */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Target Mix (30% Lu · 30% Quan · 25% Ke · 15% Ji)</span>
                    <span className="text-brand-champagne font-bold">Optimal</span>
                  </div>
                  <div className="h-3 rounded-full bg-surface-100 flex overflow-hidden p-0.5 border border-white/5">
                    <div style={{ width: '30%' }} className="bg-emerald-400 h-full rounded-l-full" title="30% LU" />
                    <div style={{ width: '30%' }} className="bg-amber-400 h-full" title="30% QUAN" />
                    <div style={{ width: '25%' }} className="bg-blue-400 h-full" title="25% KE" />
                    <div style={{ width: '15%' }} className="bg-pink-400 h-full rounded-r-full" title="15% JI" />
                  </div>
                </div>

                {/* Current */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Current Active Mix (48% Lu · 21% Quan · 23% Ke · 8% Ji)</span>
                    <span className="text-rose-400 font-bold">Imbalanced</span>
                  </div>
                  <div className="h-3 rounded-full bg-surface-100 flex overflow-hidden p-0.5 border border-white/5">
                    <div style={{ width: '48%' }} className="bg-emerald-400 h-full rounded-l-full" title="48% LU" />
                    <div style={{ width: '21%' }} className="bg-amber-400 h-full" title="21% QUAN" />
                    <div style={{ width: '23%' }} className="bg-blue-400 h-full" title="23% KE" />
                    <div style={{ width: '8%' }} className="bg-pink-400 h-full rounded-r-full" title="8% JI" />
                  </div>
                </div>
              </div>

              {/* AI Diagnosis Alert */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs text-slate-200 mt-4 space-y-1">
                <span className="font-bold text-amber-300 font-mono block">⚠️ You are currently over-indexed on Attraction (48%).</span>
                <p className="text-slate-300 leading-snug">
                  Increase Authority (QUAN) and Breakthrough (JI) content over the next 7 days to convert reach into advisory retainers.
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push('/studio?trans=QUAN')}
              className="w-full py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne font-bold text-xs border border-brand-champagne/30 transition-colors text-center"
            >
              Fix My Content Mix in Studio &rarr;
            </button>
          </div>

          {/* Your Next 3 Moves (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  ACTION PLAN
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Intelligent Coaching</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">Your Next 3 Moves</h3>

              <div className="space-y-2.5">
                {nextMoves.map((m) => (
                  <div
                    key={m.number}
                    className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-brand-champagne text-sm">{m.number}</span>
                      <div>
                        <div className="font-bold text-slate-200">{m.title}</div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <span className={`px-1.5 py-0.2 rounded font-mono font-bold ${m.priorityColor}`}>
                            {m.priority}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {m.effort}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => router.push(m.actionUrl)}
                      className="px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30 font-bold text-xs flex-shrink-0 transition-colors"
                    >
                      {m.actionLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-100/60 border border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>🎯 Total estimated weekly execution time: <strong>30 minutes</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Modals */}
      <ExplainabilityModal
        isOpen={isExplainModalOpen}
        onClose={() => setIsExplainModalOpen(false)}
      />

      <CommandBarModal
        isOpen={isCommandModalOpen}
        onClose={() => setIsCommandModalOpen(false)}
      />
    </AppShell>
  );
}
