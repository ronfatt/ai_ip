'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

interface LockedFeatureProps {
  featureName: string;
  requiredProduct?: 'Blueprint' | 'Course' | 'Pro' | 'Elite';
  previewText: string;
}

export const LockedFeature: React.FC<LockedFeatureProps> = ({
  featureName,
  requiredProduct = 'Blueprint',
  previewText,
}) => {
  const { openUpgradeModal } = useAppState();

  const productTarget =
    requiredProduct === 'Course' ? '/checkout?product=course' : '/checkout?product=blueprint';

  return (
    <div className="relative p-6 rounded-3xl bg-surface-200/90 border border-white/10 overflow-hidden group shadow-xl">
      {/* 模糊效果遮罩 */}
      <div className="select-none filter blur-[4.5px] opacity-40 pointer-events-none space-y-2">
        <h4 className="font-bold text-white text-sm">{featureName}</h4>
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
          {previewText}
        </p>
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/5 rounded w-1/2" />
      </div>

      {/* 居中解锁提示浮层 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface-300/80 backdrop-blur-sm space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-brand-champagne/15 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center shadow-lg">
          <Lock className="w-4 h-4" />
        </div>

        <div className="space-y-1">
          <h4 className="text-sm font-black text-white">{featureName}</h4>
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block">
            需要解锁完整战略蓝图
          </span>
        </div>

        <Link
          href={productTarget}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>立即解锁 (RM299)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
