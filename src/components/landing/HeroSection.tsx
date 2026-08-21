'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { DEMO_USER_PROFILE } from '@/lib/mock-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-surface-border">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-violet/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-200 border border-brand-champagne/30 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-brand-champagne animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-champagne">
                AI PERSONAL BRAND INTELLIGENCE PLATFORM
              </span>
            </div>

            {/* Brand Title & Taglines */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Know Your Nature. <br />
                <span className="bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne bg-clip-text text-transparent">
                  Build Your Influence.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 font-sans tracking-wide">
                看懂自己，找到定位，建立影响力。
              </p>
            </div>

            {/* Core Philosophy Statement */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              不是创造一个人设，而是找出最值得被放大的自己。
              Combining Eastern Zi Wei Dou Shu strategic self-discovery with 2026 AI-driven personal branding, content positioning, and high-ticket monetization architecture.
            </p>

            {/* Primary / Secondary CTAs with Microcopy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/test"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2 group"
              >
                <span>Discover My IP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/report?sample=true"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-brand-champagne" />
                <span>See Sample Report</span>
              </Link>
            </div>

            {/* Microcopy Trust Bar */}
            <p className="text-xs text-slate-400 font-mono flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Free • Takes about 3 minutes • No credit card required
            </p>
          </div>

          {/* Right Column: Interactive 5-Axis Score Visualizer Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md p-6 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 shadow-2xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-champagne uppercase">
                    5-AXIS BRAND INTELLIGENCE RADAR
                  </span>
                  <h2 className="text-base font-bold text-white">Strategic Creator DNA</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                  Overall: 84.8
                </span>
              </div>

              <div className="flex justify-center py-2">
                <RadarChart scores={DEMO_USER_PROFILE.scores} size={280} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                <div className="p-2 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono block">Top Superpower:</span>
                  <span className="font-bold text-white">Authority & Judgment (92)</span>
                </div>
                <div className="p-2 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono block">Recommended Move:</span>
                  <span className="font-bold text-brand-champagne">Increase QUAN Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar: Built for People with Real Expertise */}
        <div className="mt-16 pt-8 border-t border-surface-border/50 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            BUILT FOR PEOPLE WITH REAL EXPERTISE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
            {['Consultants', 'Business Owners', 'Coaches', 'Educators', 'Creators', 'Sales Professionals'].map((role) => (
              <div key={role} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-200 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-champagne" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
