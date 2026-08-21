'use client';

import React, { useState } from 'react';
import {
  User,
  Heart,
  Briefcase,
  Users,
  Video,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';

interface DimensionDetail {
  id: string;
  order: string;
  name: string;
  nameZh: string;
  score: number;
  status: string;
  icon: any;
  color: string;
  borderColor: string;
  coreInsight: string;
  strengths: string[];
  risk: string;
  action: string;
}

export const FIVE_DIMENSIONS_DATA: Record<string, DimensionDetail> = {
  identity: {
    id: 'identity',
    order: '01',
    name: 'IDENTITY',
    nameZh: '核心天性',
    score: 89,
    status: 'Highly Defined',
    icon: User,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    coreInsight: 'You operate most naturally as a strategic interpreter and architectural guide rather than a pure entertainer.',
    strengths: ['Clarity under ambiguity', 'Structural pattern recognition', 'Decisive prioritization'],
    risk: 'Can appear distant or intimidating when communication becomes overly rational and dry.',
    action: 'Add 1 relatable personal context story before launching into your expert diagnostic frameworks.'
  },
  values: {
    id: 'values',
    order: '02',
    name: 'VALUES',
    nameZh: '价值底线',
    score: 91,
    status: 'High Conviction',
    icon: Heart,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    coreInsight: 'Depth over vanity, intellectual honesty, and refusal of manipulative sales pressure tactics.',
    strengths: ['Ethical boundary setting', 'Anti-pitch transparency', 'Unshakeable client trust retention'],
    risk: 'May hesitate to push direct-response sales aggressively out of fear of looking transactional.',
    action: 'Anchor a public "Anti-Scarcity Manifesto" so high-ticket buyers clearly understand what you stand against.'
  },
  expertise: {
    id: 'expertise',
    order: '03',
    name: 'EXPERTISE',
    nameZh: '专业抓手',
    score: 92,
    status: 'Category Leading',
    icon: Briefcase,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    coreInsight: 'High-ticket positioning, commercial offer restructuring, and systematic IP frameworks.',
    strengths: ['Forensic business autopsies', '2x2 proprietary decision matrices', 'High-ticket pricing power'],
    risk: 'Over-explaining technical nuances before establishing emotional resonance with the buyer.',
    action: 'Distill your 5-step client transformation into 1 memorable visual diagram.'
  },
  audience: {
    id: 'audience',
    order: '04',
    name: 'AUDIENCE',
    nameZh: '精准客群',
    score: 79,
    status: 'Focused Segment',
    icon: Users,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    coreInsight: 'Established boutique consulting partners, agency founders, and transitioning senior corporate executives.',
    strengths: ['Attracts high-budget buyers (RM5k-30k)', 'Low support overhead', 'High executive referral rate'],
    risk: 'Excludes aspiring beginners who could benefit from lower-priced tripwire products.',
    action: 'Maintain an accessible RM69 live sprint workshop to capture emerging talent before upselling.'
  },
  expression: {
    id: 'expression',
    order: '05',
    name: 'EXPRESSION',
    nameZh: '镜头语态',
    score: 84,
    status: 'Controlled & Deliberate',
    icon: Video,
    color: 'text-brand-champagne',
    borderColor: 'border-brand-champagne/40',
    coreInsight: 'Sit-down structured analysis, clean podcast mic delivery, iPad screen diagrams, and zero-hype cadence.',
    strengths: ['High intellectual retention', 'Quiet unhurried conviction', 'Natural elder-advisor resonance'],
    risk: 'Can feel overly rigid if attempting to copy fast-cut viral TikTok trend templates.',
    action: 'Stick to unscripted whiteboard breakdowns with direct lens focus and measured pauses.'
  }
};

export const FiveDimensionRadial: React.FC = () => {
  const [activeDimId, setActiveDimId] = useState<string>('identity');

  const activeDim = FIVE_DIMENSIONS_DATA[activeDimId] || FIVE_DIMENSIONS_DATA.identity;
  const dimensionsList = Object.values(FIVE_DIMENSIONS_DATA);

  const relationships = [
    {
      pair: 'Identity × Expertise',
      desc: 'Your strongest authority emerges when innate strategic thinking is translated into practical visual frameworks.'
    },
    {
      pair: 'Values × Audience',
      desc: 'Your audience responds more strongly when your content clearly states what industry practices you reject.'
    },
    {
      pair: 'Expertise × Expression',
      desc: 'Your knowledge performs at peak retention in structured teardown formats rather than spontaneous entertainment.'
    },
    {
      pair: 'Audience × Monetization',
      desc: 'Enterprise buyers eagerly pay 5-figure retainers when your offer is positioned as bespoke diagnostic clarity.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header & Subtitle */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
            STRATEGIC FRAMEWORK
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 font-mono">
            5 Connected Nodes
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Five-Dimension IP Model
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl">
          Your personal brand is not a single attribute. It is an interconnected system of five distinct strategic dimensions.
        </p>
      </div>

      {/* Connected 5-Node Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {dimensionsList.map((dim) => {
          const Icon = dim.icon;
          const isSelected = activeDimId === dim.id;

          return (
            <button
              key={dim.id}
              onClick={() => setActiveDimId(dim.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between relative group ${
                isSelected
                  ? `bg-surface-100 ${dim.borderColor} shadow-xl scale-[1.03] ring-1 ring-white/10`
                  : 'bg-surface-200/80 border-white/5 text-slate-400 hover:border-white/20 hover:bg-surface-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">{dim.order}</span>
                <span className={`text-xs font-black font-mono ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {dim.score}
                </span>
              </div>

              <div>
                <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {dim.name}
                </div>
                <div className="text-[10px] text-brand-gold font-mono">{dim.nameZh}</div>
              </div>

              {isSelected && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-brand-champagne" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Dimension Deep Detail Card (Positioning Core) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 shadow-2xl space-y-6 animate-fade-in relative overflow-hidden">
        {/* Subtle Ambient Background Mesh */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-champagne/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Detail Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${activeDim.color}`}>
                DIMENSION {activeDim.order} · {activeDim.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-brand-gold font-mono font-bold">
                {activeDim.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {activeDim.name} ({activeDim.nameZh}) — Score {activeDim.score}
            </h3>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block">Status Calibration</span>
            <span className="text-xs font-extrabold text-emerald-400 font-mono">Optimized for High-Ticket</span>
          </div>
        </div>

        {/* Core Insight */}
        <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-1 relative z-10">
          <span className="text-[11px] uppercase font-bold text-brand-champagne font-mono block">
            Core Strategic Insight:
          </span>
          <p className="text-base font-bold text-slate-100 leading-snug">
            “{activeDim.coreInsight}”
          </p>
        </div>

        {/* Strengths / Risk / Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 text-xs">
          {/* Strengths */}
          <div className="p-4 rounded-2xl bg-surface-100/80 border border-emerald-500/20 space-y-2">
            <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> CORE STRENGTHS
            </span>
            <ul className="space-y-1.5 text-slate-200">
              {activeDim.strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risk / Friction */}
          <div className="p-4 rounded-2xl bg-surface-100/80 border border-rose-500/20 space-y-2">
            <span className="font-bold text-rose-400 uppercase tracking-wider text-[10px] flex items-center gap-1 font-mono">
              <ShieldAlert className="w-3.5 h-3.5" /> IDENTIFIED RISK
            </span>
            <p className="text-slate-300 leading-relaxed">{activeDim.risk}</p>
          </div>

          {/* Recommended Action */}
          <div className="p-4 rounded-2xl bg-surface-100/80 border border-brand-champagne/30 space-y-2">
            <span className="font-bold text-brand-champagne uppercase tracking-wider text-[10px] flex items-center gap-1 font-mono">
              <Zap className="w-3.5 h-3.5" /> STRATEGIC ACTION
            </span>
            <p className="text-slate-200 font-medium leading-relaxed">{activeDim.action}</p>
          </div>
        </div>
      </div>

      {/* Section: How Your Dimensions Work Together */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/80 border border-white/10 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              SYSTEMIC SYNERGY
            </span>
            <h3 className="text-lg font-bold text-white">How Your Dimensions Work Together</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">Non-Isolated Intelligence</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {relationships.map((rel, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-100 border border-white/5 hover:border-brand-champagne/30 transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-champagne font-mono text-xs">{rel.pair}</span>
                <span className="text-[10px] text-slate-400 font-mono">Factor 0{idx + 1}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{rel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
