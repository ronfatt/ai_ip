'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, Sparkles, Shield, ArrowRight, Check } from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { DEMO_USER_PROFILE } from '@/lib/mock-data';

export const ReportPreviewSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
            Dossier Preview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What Your IP DNA Report Looks Like
          </h2>
          <p className="text-base text-slate-400">
            A high-density strategic intelligence report tailored to your exact cognitive baseline.
          </p>
        </div>

        {/* Report Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-200 border border-brand-champagne/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-brand-champagne font-bold uppercase tracking-wider">
                  CONFIDENTIAL STRATEGIC DOSSIER
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  VERIFIED PROFILE
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">Alex Tan — Brand Consultant</h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">Calculated IP Momentum</span>
              <span className="text-2xl font-black text-brand-champagne font-mono">84 / 100</span>
            </div>
          </div>

          {/* Archetypes & Radar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center">
            <div className="md:col-span-6 space-y-4 text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Archetype</span>
                <div className="text-xl font-black text-brand-champagne mt-0.5">
                  Strategic Creator (策略型破局者)
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  You naturally build influence through insight, structure, and strategic frameworks that distill chaos into clarity.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Natural Role</span>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Advisor / Educator / Challenger
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Audience Perception</span>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  Calm, analytical, decisive, uncompromising on standards
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Strongest Growth Lever</span>
                <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                  High-density authority breakdowns & contrasting frameworks
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Potential Blind Spot</span>
                <div className="text-sm font-semibold text-pink-400 mt-0.5">
                  Over-explaining technical nuances before building emotional rapport
                </div>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-300 border border-white/5">
              <RadarChart scores={DEMO_USER_PROFILE.scores} size={260} showLabels={true} />
            </div>
          </div>

          {/* Locked Sections Grid */}
          <div className="pt-6 border-t border-white/10 relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 filter blur-[3px] opacity-40 select-none">
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">Audience Strategy</span>
                <span className="text-[10px] text-slate-400">Target segmentation matrix</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">Content Matrix</span>
                <span className="text-[10px] text-slate-400">4-pillar weekly distribution</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">Camera Personality</span>
                <span className="text-[10px] text-slate-400">Ideal filming cadence</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">Offer Ladder</span>
                <span className="text-[10px] text-slate-400">RM 4.8k pricing models</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">Blind Spot Mastery</span>
                <span className="text-[10px] text-slate-400">Ji conversion blueprint</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">30-Day Launch Plan</span>
                <span className="text-[10px] text-slate-400">Step-by-step roadmap</span>
              </div>
            </div>

            {/* Unlock Overlay Callout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface-300/80 backdrop-blur-sm rounded-2xl">
              <div className="p-3 rounded-full bg-brand-champagne/20 text-brand-champagne mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Your Strongest High-Ticket Monetization Pattern Is Locked
              </h4>
              <p className="text-xs text-slate-300 max-w-md mb-4">
                Discover your full 15-page dossier, AI Content Studio prompt suites, and exact Offer Ladder architecture.
              </p>
              <Link
                href="/test"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Generate My IP Report (Free 3-Min Test)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
