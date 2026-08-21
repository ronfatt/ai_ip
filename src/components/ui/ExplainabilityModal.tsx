'use client';

import React from 'react';
import { Sparkles, X, ShieldCheck, Database, Layers, ArrowRight } from 'lucide-react';

interface ExplainabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  energySource: string;
  mathematicalReason: string;
  businessApplication: string;
}

export const ExplainabilityModal: React.FC<ExplainabilityModalProps> = ({
  isOpen,
  onClose,
  title,
  energySource,
  mathematicalReason,
  businessApplication,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-5 text-xs">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne text-[10px] font-mono font-bold border border-brand-champagne/30">
            <Sparkles className="w-3 h-3" />
            <span>算法可解释性与底层逻辑</span>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="space-y-3 font-sans">
          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
            <strong className="text-brand-champagne font-mono text-[10px] uppercase block">
              星盘能量来源：
            </strong>
            <p className="text-slate-300 leading-relaxed">{energySource}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
            <strong className="text-blue-400 font-mono text-[10px] uppercase block">
              推演逻辑与数学机理：
            </strong>
            <p className="text-slate-300 leading-relaxed">{mathematicalReason}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
            <strong className="text-emerald-400 font-mono text-[10px] uppercase block">
              现代商业场景应用：
            </strong>
            <p className="text-slate-300 leading-relaxed">{businessApplication}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-surface-200 hover:bg-surface-50 text-white font-bold text-xs transition-colors"
        >
          关闭说明
        </button>
      </div>
    </div>
  );
};
