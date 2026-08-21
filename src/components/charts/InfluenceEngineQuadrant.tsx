'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ShieldCheck, Award, Zap, ArrowRight, Copy, CheckCircle2, AlertTriangle, Play } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import { useAppState } from '@/context/AppStateContext';

interface TransformationInfo {
  key: string;
  nameZh: string;
  title: string;
  score: number;
  color: string;
  borderColor: string;
  badgeBg: string;
  purpose: string;
  currentStrength: string;
  bestContent: string[];
  avoid: string;
  recommendedHook: string;
  ctaText: string;
}

export const TRANSFORMATIONS_DATA: Record<string, TransformationInfo> = {
  QUAN: {
    key: 'QUAN',
    nameZh: '权',
    title: 'Authority & Conviction',
    score: 92,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    purpose: 'Establishes unquestioned judgment, leadership, and expert positioning.',
    currentStrength: 'Decisive contrarian industry critique & structural framework delivery.',
    bestContent: [
      'Strong high-conviction opinions',
      'Industry market teardowns',
      'Proprietary decision frameworks',
      'Strategic executive breakdowns'
    ],
    avoid: 'Hedging with timid disclaimers like "just my personal 2 cents".',
    recommendedHook: '“After working in this field for years, there are three things I would never recommend.”',
    ctaText: 'Generate Authority Content'
  },
  KE: {
    key: 'KE',
    nameZh: '科',
    title: 'Trust & Reputation Proof',
    score: 87,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    purpose: 'Turns abstract expertise into undeniable credibility, social proof, and institutional reputation.',
    currentStrength: 'Forensic client autopsies and detailed before/after positioning metrics.',
    bestContent: [
      'Confidential client case studies',
      'Transformation autopsies',
      'Diagnostic process breakdowns',
      'Documented revenue before/afters'
    ],
    avoid: 'Vague glowing praise without concrete business metrics or trade-off lessons.',
    recommendedHook: '“A client case study: What changed after restructuring from RM1.5k hourly to RM18k retainers.”',
    ctaText: 'Generate Trust Content'
  },
  LU: {
    key: 'LU',
    nameZh: '禄',
    title: 'Attraction & Resonance',
    score: 76,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purpose: 'Helps the right high-value decision-makers notice, like, and approach you.',
    currentStrength: 'Professional relatability and pinpointing unspoken founder struggles.',
    bestContent: [
      'Relatable founder observations',
      'Unspoken industry pain points',
      'Simple practical diagnostic shifts',
      'Anti-hustle positioning truths'
    ],
    avoid: 'Overly academic or technical openings before establishing emotional rapport.',
    recommendedHook: '“You may not have a content problem. You may have a positioning problem.”',
    ctaText: 'Generate LU Content'
  },
  JI: {
    key: 'JI',
    nameZh: '忌',
    title: 'Breakthrough & Blind Spot',
    score: 68,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/40',
    badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    purpose: 'Reveals friction, self-doubt, and areas where stronger vulnerability creates unstoppable differentiation.',
    currentStrength: 'Deconstructing founder intellectual bottlenecks and lessons from expensive failures.',
    bestContent: [
      'Unpopular industry truths',
      'Expensive mistakes post-mortems',
      'Common practitioner misconceptions',
      'Challenging audience blind spots'
    ],
    avoid: 'Venting emotionally without distilling a constructive framework for the audience.',
    recommendedHook: '“Your deep expertise may be the exact reason your content feels too complicated.”',
    ctaText: 'Generate Breakthrough Content'
  }
};

export const InfluenceEngineQuadrant: React.FC = () => {
  const router = useRouter();
  const { addToast } = useAppState();
  const [selectedKey, setSelectedKey] = useState<string>('QUAN');

  const selected = TRANSFORMATIONS_DATA[selectedKey] || TRANSFORMATIONS_DATA.QUAN;
  const list = Object.values(TRANSFORMATIONS_DATA);

  const handleLaunchStudio = (transKey: string, topic: string) => {
    router.push(`/studio?trans=${transKey}&topic=${encodeURIComponent(topic.replace(/[“”]/g, ''))}`);
  };

  const handleCopyHook = (hook: string) => {
    copyToClipboard(hook);
    addToast('Hook copied to clipboard!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* 4 Quadrant Interactive Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {list.map((item) => {
          const isSelected = selectedKey === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setSelectedKey(item.key)}
              className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? `bg-surface-100 ${item.borderColor} shadow-xl scale-[1.03] ring-1 ring-white/10`
                  : 'bg-surface-200/80 border-white/5 text-slate-400 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badgeBg}`}>
                  {item.key} ({item.nameZh})
                </span>
                <span className={`text-base font-black font-mono ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {item.score}
                </span>
              </div>

              <div>
                <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {item.title.split('&')[0]}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {item.purpose.slice(0, 32)}...
                </div>
              </div>

              {isSelected && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-brand-champagne" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Transformation Deep Intelligence Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 shadow-2xl space-y-6 animate-fade-in relative overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${selected.color}`}>
                TRANSFORMATION FORCE: {selected.key} ({selected.nameZh})
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-brand-champagne font-mono font-bold">
                Index {selected.score}/100
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {selected.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {selected.purpose}
            </p>
          </div>

          <button
            onClick={() => handleLaunchStudio(selected.key, selected.recommendedHook)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-extrabold hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>{selected.ctaText}</span>
          </button>
        </div>

        {/* Content & Avoidances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Best Content Formats */}
          <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-3">
            <span className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> High-Retention Content Angles:
            </span>
            <ul className="space-y-2 text-slate-200">
              {selected.bestContent.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Critical Trap to Avoid */}
          <div className="p-5 rounded-2xl bg-surface-100 border border-rose-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-bold text-rose-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-mono">
                <AlertTriangle className="w-3.5 h-3.5" /> Critical Friction to Avoid:
              </span>
              <p className="text-slate-300 leading-relaxed">{selected.avoid}</p>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 font-mono">
              Current Strength: <strong className="text-slate-200">{selected.currentStrength}</strong>
            </div>
          </div>
        </div>

        {/* Recommended Signature Hook Card */}
        <div className="p-4 rounded-2xl bg-brand-champagne/10 border border-brand-champagne/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-brand-champagne uppercase tracking-wider text-[10px] font-mono block">
              Recommended Signature Hook Formula:
            </span>
            <p className="text-sm font-bold text-white italic">{selected.recommendedHook}</p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleCopyHook(selected.recommendedHook)}
              className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-200 font-semibold border border-white/10 flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Copy</span>
            </button>
            <button
              onClick={() => handleLaunchStudio(selected.key, selected.recommendedHook)}
              className="px-3.5 py-1.5 rounded-lg bg-brand-champagne text-slate-950 font-bold flex items-center gap-1"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Use in Studio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
