'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X,
  Crown,
  Sparkles,
  Shield,
  Rocket,
  Zap,
  Lock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { triggerConfetti } from '@/lib/utils';

export default function PricingPage() {
  const { activePlan, setActivePlan, openUpgradeModal, addToast } = useAppState();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const handleSelectPlan = (tier: 'free' | 'snapshot' | 'pro' | 'elite') => {
    if (tier === 'free') {
      setActivePlan('free');
      addToast('Switched to Free Tier', 'info');
      return;
    }
    openUpgradeModal(`Selected ${tier.toUpperCase()} plan`);
  };

  return (
    <AppShell>
      <div className="space-y-12 animate-fade-in max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/30 text-brand-champagne text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" /> Investment Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Positioning. <br />
            <span className="bg-gradient-to-r from-brand-champagne to-brand-gold bg-clip-text text-transparent">
              Compounding Inbound Influence.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Choose the tier that matches your current personal brand stage—from self-discovery to full 12-week advisory implementation.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-medium ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-400'}`}>
              Monthly Billing
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
              Annual Billing <span className="px-2 py-0.5 text-[10px] bg-brand-gold/20 text-brand-gold rounded-full border border-brand-gold/30">Save 40%</span>
            </span>
          </div>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Plan 1: FREE */}
          <div className="p-6 rounded-3xl bg-surface-200/80 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Free IP Test</h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">STARTER</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">Discover your primary archetype and initial momentum baseline.</p>
              <div className="text-3xl font-black text-white font-mono mb-4">
                RM 0 <span className="text-xs font-normal text-slate-400">/ forever</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 6-Step Cognitive IP Assessment</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Primary Archetype Diagnosis</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Basic IP Momentum Score</li>
                <li className="flex items-center gap-2 text-slate-600"><X className="w-3.5 h-3.5 flex-shrink-0" /> AI Content Studio access</li>
                <li className="flex items-center gap-2 text-slate-600"><X className="w-3.5 h-3.5 flex-shrink-0" /> Offer Ladder architecture</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('free')}
              className="w-full py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
            >
              Current / Free Tier
            </button>
          </div>

          {/* Plan 2: SNAPSHOT */}
          <div className="p-6 rounded-3xl bg-surface-200/80 border border-blue-500/30 hover:border-blue-500/60 flex flex-col justify-between space-y-6 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-blue-400">IP Snapshot</h3>
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Full 10-page diagnostic PDF dossier with personal recommendations.</p>
              <div className="text-3xl font-black text-white font-mono mb-4">
                RM 49 <span className="text-xs font-normal text-slate-400">/ one-time</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Full 5-Score IP DNA Analysis</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Primary & Secondary Archetype breakdown</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Downloadable 10-Page Dossier PDF</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Core Strengths & Blind Spot map</li>
                <li className="flex items-center gap-2 text-slate-600"><X className="w-3.5 h-3.5 flex-shrink-0" /> AI Content Studio access</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('snapshot')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Get Snapshot (RM49)
            </button>
          </div>

          {/* Plan 3: PRO (Featured) */}
          <div className="p-6 rounded-3xl bg-surface-200 border-2 border-brand-champagne shadow-2xl relative flex flex-col justify-between space-y-6 scale-[1.03]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-champagne text-slate-950 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" /> Most Recommended
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 mt-1">
                <h3 className="text-base font-bold text-brand-champagne">PRO Blueprint & Studio</h3>
                <Crown className="w-4 h-4 text-brand-champagne" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Complete creator & advisory OS: AI studio, four transformations, & offer engine.</p>
              <div className="text-3xl font-black text-white font-mono mb-4">
                {billingCycle === 'yearly' ? 'RM 59' : 'RM 99'} <span className="text-xs font-normal text-slate-400">/ mo</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Full Brand Blueprint Access</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Unlimited AI Content Studio</strong> (Scripts & Hooks)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Four Transformations Content Engine</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>Business Builder Offer Ladder</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>24/7 Context-Aware AI Coach</strong></li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" /> <strong>8-Module Video Academy</strong></li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('pro')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-extrabold text-xs hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20"
            >
              Start PRO Membership
            </button>
          </div>

          {/* Plan 4: ELITE */}
          <div className="p-6 rounded-3xl bg-surface-200/80 border border-brand-violet/40 hover:border-brand-violet/80 flex flex-col justify-between space-y-6 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-brand-violet">12-Week Elite</h3>
                <Rocket className="w-4 h-4 text-brand-violet" />
              </div>
              <p className="text-xs text-slate-400 mb-4">Done-with-you high-ticket positioning & private brand consulting cohort.</p>
              <div className="text-3xl font-black text-white font-mono mb-4">
                RM 3,800 <span className="text-xs font-normal text-slate-400">/ 12 wks</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Everything in PRO included</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> 1-on-1 Deep Birth & Commercial Audit</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> High-Ticket Offer Architecture (RM5k-30k)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Bi-weekly 1-on-1 Consulting Calls</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Direct WhatsApp Review Access</li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan('elite')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Apply for Elite Advisory
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400">Everything you need to know about ZIWEI IP positioning intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 pt-4">
            <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
              <span className="font-bold text-white block">Is this traditional Chinese fortune-telling?</span>
              <p className="text-slate-400 leading-relaxed">
                No. ZIWEI IP treats the ancient Zi Wei Dou Shu framework strictly as a cognitive and behavioral classification tool—similar to MBTI or Enneagram, but enhanced with actionable positioning and creator strategy.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
              <span className="font-bold text-white block">Can I cancel my subscription anytime?</span>
              <p className="text-slate-400 leading-relaxed">
                Yes. You can cancel your PRO subscription with a single click inside your Account settings. You will retain full access until the end of your billing cycle.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
              <span className="font-bold text-white block">How does the AI Content Studio generate scripts?</span>
              <p className="text-slate-400 leading-relaxed">
                Our model synthesizes your Primary IP Archetype, 5-Score Momentum, and the selected Transformation (Lu, Quan, Ke, Ji) into scripts that sound like an authentic high-ticket advisor rather than generic internet noise.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
              <span className="font-bold text-white block">How is the 12-Week Elite cohort structured?</span>
              <p className="text-slate-400 leading-relaxed">
                The Elite program is limited to 5 high-performing consultants per quarter. It includes direct 1-on-1 positioning audits, bespoke high-ticket packaging, and bi-weekly advisory sessions with Alex Tan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
