'use client';

import React, { useState } from 'react';
import { useAppState } from '@/context/AppStateContext';
import { Check, Sparkles, X, Lock, Crown, Zap, Shield, Rocket } from 'lucide-react';
import { triggerConfetti } from '@/lib/utils';

export const UpgradeModal: React.FC = () => {
  const { isUpgradeModalOpen, setIsUpgradeModalOpen, upgradeModalTriggerReason, setActivePlan, addToast } = useAppState();
  const [selectedTier, setSelectedTier] = useState<'pro' | 'snapshot' | 'elite'>('pro');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [isUpgrading, setIsUpgrading] = useState(false);

  if (!isUpgradeModalOpen) return null;

  const handleUpgrade = () => {
    setIsUpgrading(true);
    setTimeout(() => {
      setIsUpgrading(false);
      setActivePlan(selectedTier);
      setIsUpgradeModalOpen(false);
      triggerConfetti();
      addToast(`🎉 Congratulations! You have unlocked the ${selectedTier.toUpperCase()} Plan!`, 'success');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-100 border border-brand-champagne/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={() => setIsUpgradeModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/30 text-brand-champagne text-xs font-semibold tracking-wide uppercase">
            <Crown className="w-3.5 h-3.5" />
            <span>Unlock Full IP Blueprint & AI Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Stop Guessing Your Positioning. Build Inbound Authority.
          </h2>
          <p className="text-sm text-slate-300">
            {upgradeModalTriggerReason || 'Access full 15-page IP DNA, unlimited AI Content Studio generations, and proprietary Offer Ladder.'}
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-medium ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-12 h-6 rounded-full bg-surface-50 p-1 border border-white/10 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-4 h-4 rounded-full bg-brand-champagne transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-brand-champagne font-bold' : 'text-slate-400'}`}>
              Annual Billing <span className="px-1.5 py-0.5 text-[10px] bg-brand-gold/20 text-brand-gold rounded-full border border-brand-gold/30">Save 40%</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Plan 1: SNAPSHOT */}
          <div
            onClick={() => setSelectedTier('snapshot')}
            className={`cursor-pointer rounded-xl p-5 border transition-all relative flex flex-col justify-between ${
              selectedTier === 'snapshot'
                ? 'bg-surface-50 border-brand-blue shadow-lg shadow-blue-500/10'
                : 'bg-surface-200/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-200">IP Snapshot Report</span>
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Complete 10-page diagnostic report of your IP profile and score analysis.</p>
              <div className="text-2xl font-black text-white mb-4">
                RM 49 <span className="text-xs font-normal text-slate-400">/ one-time</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Full 5-Score IP DNA Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Primary & Secondary Archetype breakdown</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Downloadable PDF Diagnostic Dossier</li>
                <li className="flex items-center gap-2 text-slate-500"><X className="w-3.5 h-3.5 flex-shrink-0" /> AI Content Studio access</li>
              </ul>
            </div>
            <button
              onClick={() => setSelectedTier('snapshot')}
              className={`w-full mt-5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                selectedTier === 'snapshot'
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              Select Snapshot
            </button>
          </div>

          {/* Plan 2: PRO (Featured) */}
          <div
            onClick={() => setSelectedTier('pro')}
            className={`cursor-pointer rounded-xl p-5 border-2 transition-all relative flex flex-col justify-between ${
              selectedTier === 'pro'
                ? 'bg-surface-50 border-brand-champagne shadow-xl shadow-brand-champagne/10 scale-105'
                : 'bg-surface-200/60 border-brand-champagne/40 hover:border-brand-champagne/70'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-champagne text-slate-950 text-[11px] font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Most Recommended
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 mt-1">
                <span className="text-sm font-bold text-brand-champagne">PRO Blueprint & Studio</span>
                <Crown className="w-4 h-4 text-brand-champagne" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Complete creator & advisory OS: AI studio, four transformations, & offer engine.</p>
              <div className="text-2xl font-black text-white mb-4">
                {billingCycle === 'yearly' ? 'RM 59' : 'RM 99'} <span className="text-xs font-normal text-slate-400">/ month</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Full Unlocked Brand Blueprint</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Unlimited AI Content Studio</strong> (Scripts & Hooks)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Four Transformation Engine</strong> (Lu/Quan/Ke/Ji)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Business Builder Offer Ladder</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>24/7 Context-Aware AI Coach</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> Full 8-Module Video Academy</li>
              </ul>
            </div>
            <button
              onClick={() => setSelectedTier('pro')}
              className={`w-full mt-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md ${
                selectedTier === 'pro'
                  ? 'bg-brand-champagne text-slate-950 hover:bg-brand-gold'
                  : 'bg-white/10 text-brand-champagne border border-brand-champagne/40'
              }`}
            >
              Select PRO Plan
            </button>
          </div>

          {/* Plan 3: ELITE */}
          <div
            onClick={() => setSelectedTier('elite')}
            className={`cursor-pointer rounded-xl p-5 border transition-all relative flex flex-col justify-between ${
              selectedTier === 'elite'
                ? 'bg-surface-50 border-brand-violet shadow-lg shadow-violet-500/10'
                : 'bg-surface-200/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-200">12-Week Guided Elite</span>
                <Rocket className="w-4 h-4 text-brand-violet" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Done-with-you high-ticket positioning & private brand consulting cohort.</p>
              <div className="text-2xl font-black text-white mb-4">
                RM 3,800 <span className="text-xs font-normal text-slate-400">/ 12 weeks</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Everything in PRO included</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> 1-on-1 Deep Birth & Commercial Audit</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Custom High-Ticket Offer Architecture</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Bi-weekly 1-on-1 Consulting Calls</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Direct WhatsApp Review Access</li>
              </ul>
            </div>
            <button
              onClick={() => setSelectedTier('elite')}
              className={`w-full mt-5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                selectedTier === 'elite'
                  ? 'bg-purple-600 text-white border-purple-500'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              Select Elite
            </button>
          </div>
        </div>

        {/* Action Button & Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>256-Bit SSL Encrypted. Instant Access. Cancel anytime with 1-click.</span>
          </div>

          <button
            onClick={handleUpgrade}
            disabled={isUpgrading}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
          >
            {isUpgrading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                Upgrading Account...
              </span>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-current" />
                <span>Confirm & Upgrade to {selectedTier.toUpperCase()}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
