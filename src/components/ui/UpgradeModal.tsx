'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Check, Crown, Zap, ShieldCheck, X, ArrowRight } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

export const UpgradeModal: React.FC = () => {
  const router = useRouter();
  const { isUpgradeModalOpen, closeUpgradeModal, upgradeModalFeature, unlockPro, pricing, addToast } = useAppState();
  const [selectedTier, setSelectedTier] = useState<'pro' | 'elite'>('pro');

  if (!isUpgradeModalOpen) return null;

  const handleConfirmUpgrade = () => {
    if (selectedTier === 'pro') {
      unlockPro();
      closeUpgradeModal();
      router.push('/studio');
    } else {
      closeUpgradeModal();
      router.push('/elite');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={closeUpgradeModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE UPGRADE REQUIRED</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {upgradeModalFeature}
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Upgrade your ZIWEI IP tier to unlock unlimited AI Content Studio generations, real-time AI Coach guidance, and the 7-channel repurposing engine.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* PRO Membership */}
          <div
            onClick={() => setSelectedTier('pro')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-3 ${
              selectedTier === 'pro'
                ? 'bg-surface-200 border-brand-champagne shadow-lg scale-102 ring-1 ring-brand-champagne/40'
                : 'bg-surface-300/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-brand-champagne uppercase text-[10px]">PRO MEMBERSHIP</span>
              <span className="text-sm font-black text-white font-mono">RM{pricing.proMonthlyPrice}/mo</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug">
              For active founders and creators building a consistent, high-converting weekly content engine.
            </p>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Unlimited AI Studio Scripts</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 7-Channel Repurpose Engine</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Real-time IP AI Coach</li>
            </ul>
          </div>

          {/* ELITE Advisory */}
          <div
            onClick={() => setSelectedTier('elite')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-3 ${
              selectedTier === 'elite'
                ? 'bg-surface-200 border-brand-champagne shadow-lg scale-102 ring-1 ring-brand-champagne/40'
                : 'bg-surface-300/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-amber-400 uppercase text-[10px]">ELITE ADVISORY</span>
              <span className="text-sm font-black text-white font-mono">RM{pricing.eliteStartingPrice.toLocaleString()}+</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug">
              8–12 week 1-on-1 private guided implementation program with lead brand strategists.
            </p>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 1-on-1 Diagnostic Refinement</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> High-Ticket Offer Architecture</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Direct WhatsApp Strategist Access</li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handleConfirmUpgrade}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
          >
            <span>{selectedTier === 'pro' ? `Upgrade to PRO (RM${pricing.proMonthlyPrice}/month)` : 'Apply for Elite Guided Cohort'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-slate-400 font-mono text-center">
            Cancel anytime in Account Settings. 256-Bit SSL Encrypted checkout.
          </p>
        </div>
      </div>
    </div>
  );
};
