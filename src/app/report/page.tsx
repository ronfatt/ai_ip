'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Crown,
  LayoutDashboard,
  Zap,
  TrendingUp,
  Download
} from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { useAppState } from '@/context/AppStateContext';
import { UpgradeModal } from '@/components/ui/UpgradeModal';

export default function ReportPage() {
  const { userProfile, openUpgradeModal } = useAppState();

  const strengths = [
    { title: 'Structural Strategy', desc: 'Ability to turn chaotic business bottlenecks into clean mental models and frameworks.' },
    { title: 'Institutional Credibility', desc: 'Quiet conviction and boundary-setting that earns immediate respect from 7-figure founders.' },
    { title: 'Decisive Positioning', desc: 'Natural instinct for high-ticket offer pricing and refusal of low-margin commodity work.' },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-100 py-8 px-4 sm:px-6">
      {/* Top Floating Bar */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-6 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center shadow-md">
            <div className="w-full h-full bg-surface-300 rounded-[8px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <span className="font-extrabold text-base text-white tracking-tight">ZIWEI IP</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1.5"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Open Dashboard</span>
          </Link>
          <button
            onClick={() => openUpgradeModal('Unlock Complete 15-Page Blueprint Dossier')}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Unlock Full Blueprint</span>
          </button>
        </div>
      </div>

      {/* Main Dossier View */}
      <div className="max-w-4xl mx-auto my-8 space-y-8 animate-fade-in">
        {/* Banner Alert */}
        <div className="p-4 rounded-2xl bg-brand-champagne/10 border border-brand-champagne/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-brand-champagne flex-shrink-0" />
            <span className="text-slate-200">
              <strong>Free Report Generated</strong> for <strong>{userProfile.name}</strong> ({userProfile.role}). Partial analysis revealed below.
            </span>
          </div>
          <button
            onClick={() => openUpgradeModal('Instant PDF Report Download')}
            className="text-brand-champagne hover:underline font-bold font-mono text-[11px] flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            Export Summary (PDF)
          </button>
        </div>

        {/* Hero Report Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Archetype details */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-bold tracking-wide uppercase border border-brand-champagne/30">
                <Crown className="w-3.5 h-3.5" /> Primary IP Archetype
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {userProfile.primaryArchetype.name}
              </h1>
              <p className="text-sm font-medium text-brand-gold font-sans">
                {userProfile.primaryArchetype.titleZh}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {userProfile.primaryArchetype.description}
              </p>

              {/* Natural Role & Perception */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 text-xs">
                  <span className="text-slate-400 block font-semibold">Natural Role</span>
                  <span className="text-slate-100 font-bold mt-0.5 block">{userProfile.primaryArchetype.naturalRole}</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 text-xs">
                  <span className="text-slate-400 block font-semibold">Audience Perception</span>
                  <span className="text-slate-100 font-bold mt-0.5 block">{userProfile.primaryArchetype.audiencePerception}</span>
                </div>
              </div>
            </div>

            {/* Right: Radar Chart */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-300 border border-white/5">
              <div className="text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                5-Score IP Momentum
              </div>
              <RadarChart scores={userProfile.scores} size={250} showLabels={true} />
            </div>
          </div>
        </div>

        {/* Section: Top Strengths */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Core Leverage
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">Top 3 Strategic Strengths</h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              High Natural Aptitude
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {strengths.map((str, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-100 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white">{str.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{str.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Pro Sections Paywall */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-brand-champagne/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-champagne" />
              <span>Full Brand Blueprint & Monetization Systems (Locked)</span>
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-brand-champagne/10 text-brand-champagne border border-brand-champagne/30">
              PRO Tier Exclusive
            </span>
          </div>

          {/* Blurred preview cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 filter blur-[4px] opacity-40 select-none pointer-events-none mb-6">
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">Ideal Audience Strategy</div>
              <div className="text-[11px] text-slate-400">High-ticket persona segmentation matrix</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">4 Content Pillars Engine</div>
              <div className="text-[11px] text-slate-400">Exact weekly ratio for Lu/Quan/Ke/Ji</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">Camera & Voice Personality</div>
              <div className="text-[11px] text-slate-400">Filming environment & speech cadence</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">RM 4,800 Offer Ladder</div>
              <div className="text-[11px] text-slate-400">5-Tier pricing & deliverables map</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">Blind Spot (Ji) Mastery</div>
              <div className="text-[11px] text-slate-400">Converting intellectual resistance to polarity</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-100 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-white">30-Day Launch Roadmap</div>
              <div className="text-[11px] text-slate-400">Day-by-day creator execution checklist</div>
            </div>
          </div>

          {/* Locked Overlay CTA */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-surface-100/95 to-surface-300/95 border border-brand-champagne/40 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-brand-champagne/20 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center mx-auto">
              <Crown className="w-6 h-6" />
            </div>

            <div className="max-w-md mx-auto space-y-1">
              <h4 className="text-xl font-extrabold text-white">
                Unlock Your Complete ZIWEI IP Blueprint
              </h4>
              <p className="text-xs text-slate-300">
                Unlock all 6 locked strategy sections, full AI Content Studio script generators, and the proprietary Offer Builder.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openUpgradeModal('Unlock Blueprint & Studio from Free Report')}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
              >
                <span>Unlock Full Blueprint (RM 99/mo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-50 hover:bg-surface-100 text-slate-200 border border-white/10 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Live Workspace Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global Upgrade Modal */}
      <UpgradeModal />
    </div>
  );
}
