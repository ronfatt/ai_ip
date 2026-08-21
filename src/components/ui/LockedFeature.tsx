'use client';

import React from 'react';
import { Lock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LockedFeatureProps {
  featureName: string;
  requiredProduct?: 'Blueprint' | 'Course' | 'PRO' | 'Elite';
  previewText: string;
  upgradeCTA?: string;
  priceTag?: string;
  onUpgradeClick?: () => void;
}

export const LockedFeature: React.FC<LockedFeatureProps> = ({
  featureName,
  requiredProduct = 'Blueprint',
  previewText,
  upgradeCTA = 'Unlock Full Blueprint',
  priceTag = 'RM299 one-time',
  onUpgradeClick
}) => {
  const router = useRouter();

  const handleAction = () => {
    if (onUpgradeClick) {
      onUpgradeClick();
    } else if (requiredProduct === 'Blueprint') {
      router.push('/checkout?product=blueprint');
    } else if (requiredProduct === 'Course') {
      router.push('/checkout?product=course');
    } else if (requiredProduct === 'PRO') {
      router.push('/checkout?product=pro');
    } else {
      router.push('/pricing');
    }
  };

  return (
    <div className="relative p-6 sm:p-7 rounded-3xl bg-surface-200/80 border border-white/10 overflow-hidden shadow-lg group">
      {/* Blurred / Teaser Content in Background */}
      <div className="space-y-3 filter blur-[3.5px] select-none opacity-40 transition-all pointer-events-none">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="h-4 w-32 bg-slate-400/50 rounded" />
          <div className="h-3 w-16 bg-slate-400/30 rounded" />
        </div>
        <p className="text-xs text-slate-200 leading-relaxed font-mono">
          {previewText}
        </p>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="h-10 bg-slate-600/30 rounded-xl" />
          <div className="h-10 bg-slate-600/30 rounded-xl" />
        </div>
      </div>

      {/* Lock Overlay Badge & Upgrade Trigger */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-surface-300/75 backdrop-blur-[2px] text-center space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 shadow-lg flex items-center justify-center">
          <div className="w-full h-full bg-surface-200 rounded-[14px] flex items-center justify-center text-brand-champagne">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne block">
            {requiredProduct.toUpperCase()} INTELLIGENCE
          </span>
          <h4 className="text-base font-bold text-white mt-0.5">
            {featureName}
          </h4>
          <p className="text-xs text-slate-300 max-w-sm mt-1 leading-snug">
            {previewText.slice(0, 85)}...
          </p>
        </div>

        <button
          onClick={handleAction}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{upgradeCTA}</span>
          <span className="text-[10px] opacity-75 font-mono">({priceTag})</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
        </button>
      </div>
    </div>
  );
};
