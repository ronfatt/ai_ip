'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { DEMO_USER_PROFILE } from '@/lib/mock-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-100/90 border border-brand-champagne/30 text-brand-champagne text-xs font-semibold backdrop-blur-md shadow-lg shadow-brand-champagne/5 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne animate-spin-slow" />
            <span className="tracking-wide">AI-Powered Personal Brand Intelligence SaaS</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Your Personal Brand <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-violet bg-clip-text text-transparent">
              Is Already Inside You.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-wide font-sans">
            不是创造一个人设，而是找出最值得被放大的自己。
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto pt-2 leading-relaxed">
            <strong>ZIWEI IP</strong> turns your natural profile into an actionable strategy for <strong>positioning</strong>, <strong>content architecture</strong>, <strong>inbound influence</strong>, and <strong>high-ticket monetization</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/test"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-extrabold text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2 group"
            >
              <span>Discover My IP (Free Test)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#method"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 border border-white/10 hover:border-white/20 font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-champagne" />
              <span>See How It Works</span>
            </Link>
          </div>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No Fortune-Telling Mysticism</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Strategic SaaS Intelligence</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Built for Consultants & Creators</span>
          </div>
        </div>

        {/* Hero Interactive Visual Dashboard Mockup */}
        <div className="mt-14 sm:mt-16 max-w-5xl mx-auto rounded-2xl bg-surface-200/90 border border-white/10 p-4 sm:p-7 shadow-2xl backdrop-blur-xl relative group">
          {/* Top Bar inside mockup */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                ziwei-ip.io/app/preview/alextan
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne font-bold">
                Strategic Creator
              </span>
              <span className="text-slate-400 hidden sm:inline">| Momentum: 84/100 (+6%)</span>
            </div>
          </div>

          {/* Grid Layout inside mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Radar Chart Visualization */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-surface-300/80 border border-white/5">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-champagne mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 5-Dimension Personal Brand DNA
              </div>
              <RadarChart scores={DEMO_USER_PROFILE.scores} size={280} showLabels={true} />
            </div>

            {/* Right: Scores breakdown & Today's transformation engine */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-surface-100/80 border border-amber-500/20">
                  <span className="text-[11px] text-slate-400 block">Authority (权威)</span>
                  <div className="text-2xl font-black text-amber-400 font-mono">92</div>
                  <span className="text-[10px] text-emerald-400">+12% vs Peers</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100/80 border border-blue-500/20">
                  <span className="text-[11px] text-slate-400 block">Trust (信任)</span>
                  <div className="text-2xl font-black text-blue-400 font-mono">87</div>
                  <span className="text-[10px] text-emerald-400">High Institutional</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100/80 border border-brand-champagne/20">
                  <span className="text-[11px] text-slate-400 block">Monetization (变现)</span>
                  <div className="text-2xl font-black text-brand-champagne font-mono">88</div>
                  <span className="text-[10px] text-emerald-400">RM 4.8k Tier</span>
                </div>
              </div>

              {/* 4 Transformations Mini Preview */}
              <div className="p-4 rounded-xl bg-surface-100/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-brand-gold" />
                    Four Transformations Engine
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Today's Dispatch</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-emerald-300 font-medium truncate">
                      🌟 <strong>LU (Attract)</strong>: Why most professionals fail at personal branding
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-semibold ml-2">Generate</span>
                  </div>

                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                    <span className="text-amber-300 font-medium truncate">
                      👑 <strong>QUAN (Authority)</strong>: 3 things I would never recommend after 15 years
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-semibold ml-2">Generate</span>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="block text-center py-2 rounded-lg bg-surface-50 hover:bg-surface-100 text-xs font-semibold text-brand-champagne border border-brand-champagne/30 transition-colors"
                >
                  Enter Full Interactive SaaS Workspace &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
