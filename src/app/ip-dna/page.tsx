'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dna,
  Sparkles,
  Compass,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  User,
  Layers,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Play
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { FiveDimensionRadial } from '@/components/charts/FiveDimensionRadial';
import { InfluenceEngineQuadrant } from '@/components/charts/InfluenceEngineQuadrant';
import { ContentMatrixGrid } from '@/components/charts/ContentMatrixGrid';
import { useAppState } from '@/context/AppStateContext';

export default function IpDnaPage() {
  const router = useRouter();
  const { userProfile, addToast } = useAppState();

  const weeklySchedule = [
    { day: 'Monday', trans: 'QUAN', label: 'Authority', topic: 'Industry critique & contrarian standard breakdown', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { day: 'Tuesday', trans: 'KE', label: 'Trust', topic: 'Client before-and-after case autopsy with real numbers', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    { day: 'Wednesday', trans: 'LU', label: 'Attraction', topic: 'Unspoken frustration observation short for founders', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { day: 'Friday', trans: 'JI', label: 'Breakthrough', topic: 'Expensive failure post-mortem & blind spot reframe', color: 'text-pink-400 bg-pink-500/10 border-pink-500/30' },
    { day: 'Sunday', trans: 'KE', label: 'Trust', topic: 'Behind-the-scenes decision logs & process blueprint', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
  ];

  const handleGenerateWeeklyPlan = () => {
    addToast('Weekly Plan synchronized with AI Content Studio!', 'success');
    router.push('/studio?trans=QUAN');
  };

  return (
    <AppShell>
      <div className="space-y-12 animate-fade-in max-w-7xl mx-auto">
        {/* ================= SECTION 1: HEADER & DYNAMIC HERO ================= */}
        <div className="relative pb-8 border-b border-surface-border overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-2.5 py-0.5 rounded-full border border-brand-champagne/30">
                PERSONAL INTELLIGENCE PROFILE
              </span>
              <span className="text-xs text-slate-400 font-mono">v2.6 Live</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              YOUR IP DNA
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              The strategic patterns shaping how you naturally build influence, establish category authority, and command premium pricing.
            </p>
          </div>
        </div>

        {/* ================= SECTION 2: IP ARCHETYPE HERO & TENSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Archetype Hero (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  PRIMARY IP ARCHETYPE
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne font-mono font-bold">
                  70% Core Gravitational Pull
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Strategic Creator
                </h2>
                <div className="text-sm font-semibold text-brand-gold font-mono mt-0.5">
                  策略型破局者 · Advisor / Educator / Challenger
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                You build influence by turning complexity into structure, insight and direction. You don’t compete on superficial volume; your audience is most likely to remember you for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-0.5">
                  <span className="text-brand-champagne font-bold block">01. Clear Judgment</span>
                  <span className="text-slate-300 text-[11px]">Cuts through noise</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-0.5">
                  <span className="text-blue-400 font-bold block">02. Strategic Thinking</span>
                  <span className="text-slate-300 text-[11px]">Systemic blueprints</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-0.5">
                  <span className="text-purple-400 font-bold block">03. Professional Depth</span>
                  <span className="text-slate-300 text-[11px]">Uncompromising standards</span>
                </div>
              </div>
            </div>

            {/* Tri-Archetype Connected Nodes */}
            <div className="p-4 rounded-2xl bg-surface-100/90 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-champagne" />
                <span className="text-white font-bold">Primary: Strategic Creator</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">&rarr;</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-slate-300 font-medium">Secondary: Authority Builder</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">&rarr;</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span className="text-slate-400 font-medium">Supporting: Challenger</span>
              </div>
            </div>
          </div>

          {/* Right: Archetype Tension Analysis (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  ARCHETYPE TENSION
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Divergence Model</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                How Your Archetypes Interact
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Natural Self:</span>
                  <span className="font-bold text-white font-mono">Strategic Creator</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Market Perception:</span>
                  <span className="font-bold text-brand-champagne font-mono">Authority Builder</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-100 border border-purple-500/20 flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">Underused Potential:</span>
                  <span className="font-bold text-purple-400 font-mono">Challenger</span>
                </div>
              </div>

              {/* AI Strategic Explanation */}
              <div className="p-4 rounded-2xl bg-surface-100 border border-brand-champagne/20 space-y-1 text-xs">
                <span className="font-bold text-brand-champagne uppercase tracking-wider text-[10px] font-mono block">
                  AI Tension Diagnosis:
                </span>
                <p className="text-slate-200 leading-relaxed">
                  “Your audience already recognizes your intellectual authority, but your strongest differentiating opinions (Challenger energy) may still be underexpressed out of diplomatic restraint.”
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push('/studio?trans=JI&topic=The%20uncomfortable%20truth%20about%20high-ticket%20consulting')}
              className="w-full py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-purple-300 border border-purple-500/30 text-xs font-bold transition-colors text-center"
            >
              Unleash Challenger Stance in Studio &rarr;
            </button>
          </div>
        </div>

        {/* ================= SECTION 3: FIVE-DIMENSION IP MODEL ================= */}
        <div className="pt-6 border-t border-surface-border">
          <FiveDimensionRadial />
        </div>

        {/* ================= SECTION 4: FOUR TRANSFORMATION ENGINE ================= */}
        <div className="pt-6 border-t border-surface-border space-y-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                CONTENT ENGINE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 font-mono">
                Lu · Quan · Ke · Ji
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Four Transformation Engine
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Four strategic forces shaping how your content attracts, leads, earns trust and breaks through resistance.
            </p>
          </div>

          {/* Influence Engine Quadrant */}
          <InfluenceEngineQuadrant />

          {/* 4x4 Content Matrix Grid */}
          <ContentMatrixGrid />

          {/* This Week's Recommended Content Mix Schedule */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  EXECUTION CALENDAR
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  This Week’s Recommended Content Mix
                </h3>
                <p className="text-xs text-slate-400">
                  Algorithmic dispatch balancing Authority, Trust, Attraction, and Breakthrough.
                </p>
              </div>

              <button
                onClick={handleGenerateWeeklyPlan}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 self-start sm:self-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Generate Weekly Plan in Studio</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs">
              {weeklySchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white font-mono">{item.day}</span>
                      <span className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] border ${item.color}`}>
                        {item.trans}
                      </span>
                    </div>
                    <div className="font-bold text-slate-200 text-xs">{item.label}</div>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.topic}</p>
                  </div>

                  <button
                    onClick={() => router.push(`/studio?trans=${item.trans}&topic=${encodeURIComponent(item.topic)}`)}
                    className="pt-2 text-[11px] text-brand-champagne hover:underline font-bold text-left"
                  >
                    Draft Script &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
