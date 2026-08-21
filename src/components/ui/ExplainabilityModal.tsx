'use client';

import React from 'react';
import { X, HelpCircle, Sparkles, CheckCircle2, ShieldCheck, Database } from 'lucide-react';

interface ExplainabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  metricName?: string;
}

export const ExplainabilityModal: React.FC<ExplainabilityModalProps> = ({
  isOpen,
  onClose,
  title = 'Why am I seeing this intelligence?',
  metricName = 'IP Momentum & Core Signals'
}) => {
  if (!isOpen) return null;

  const factors = [
    {
      title: '1. Profile Structure & Cognitive Baseline',
      desc: 'Calculated from your birth matrix and Primary Archetype (Strategic Creator), indexing high on structural logic and authority frameworks.'
    },
    {
      title: '2. Calibrated Communication Preferences',
      desc: 'Your preference score (Analytical 25, Direct 15, Teaching 35, Expert-Led 10) dictates an uncompromising, high-conviction delivery tone.'
    },
    {
      title: '3. Current Content & Output Behavior',
      desc: 'Based on your recent 14 published assets, your attraction content is over-indexed (48%) while authority output (21%) lags behind your ideal 30% balance.'
    },
    {
      title: '4. Commercial & High-Ticket Goals',
      desc: 'Your declared objective to acquire RM4.8k+ retainers prioritizes institutional trust (Ke) and boundary setting (Quan) over mass follower volume.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-brand-champagne/20 text-brand-champagne">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
              TRANSPARENT AI EXPLAINABILITY
            </span>
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          ZIWEI IP synthesizes your baseline archetype, behavioral data, and strategic objectives through our transparent 4-Factor Diagnostic Engine:
        </p>

        <div className="space-y-3">
          {factors.map((f, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-surface-200/90 border border-white/5 space-y-1 text-xs">
              <div className="flex items-center gap-2 text-brand-gold font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{f.title}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed pl-5">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
