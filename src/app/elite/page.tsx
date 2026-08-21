'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Crown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  Users,
  Target
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function ElitePage() {
  const router = useRouter();
  const { userProfile, submitEliteApplication, pricing } = useAppState();

  const [fullName, setFullName] = useState(userProfile.name);
  const [email, setEmail] = useState('alex@brandstrategy.co');
  const [phone, setPhone] = useState('+60 12-345 6789');
  const [currentBusiness, setCurrentBusiness] = useState('Boutique Brand Strategy Consultancy');
  const [monthlyRevenueRange, setMonthlyRevenueRange] = useState('RM20,000 – RM50,000');
  const [mainChallenge, setMainChallenge] = useState('Converting high-ticket consulting retainers (RM10k+) predictably without trading hours.');
  const [currentAudienceSize, setCurrentAudienceSize] = useState('2,500 – 10,000 followers across LinkedIn & Newsletter');
  const [currentOffer, setCurrentOffer] = useState('1-on-1 Brand Strategy Consultation (RM4,800)');
  const [goalNext90Days, setGoalNext90Days] = useState('Acquire 5 recurring corporate advisory clients and launch 1 signature cohort.');
  const [whyNow, setWhyNow] = useState('I need private executive guidance to transition from general consulting to an authoritative category leader.');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEliteApplication({
      fullName,
      email,
      phone,
      currentBusiness,
      monthlyRevenueRange,
      mainChallenge,
      currentAudienceSize,
      currentOffer,
      goalNext90Days,
      whyNow,
      submittedAt: new Date().toISOString()
    });
    setIsSubmitted(true);
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
            <Crown className="w-3.5 h-3.5" />
            <span>PRIVATE ADVISORY COHORT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ZIWEI BUSINESS IP IMPLEMENTATION
          </h1>
          <p className="text-sm text-slate-300">
            8–12 Week Private Guided Implementation Program for established business owners, consultants, and thought leaders.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-200/90 border border-brand-champagne/40 shadow-2xl text-center space-y-6 max-w-lg mx-auto animate-scale-up">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Application Received</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you, {fullName}. Our executive advisory team reviews each application carefully. We will contact you via WhatsApp or Email within 24 business hours to schedule your Private Strategy Evaluation.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex px-6 py-3 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inclusions Card */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  PROGRAM SCOPE
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  What’s Included:
                </h3>
                <span className="text-xs text-slate-400 font-mono">Investment starting at RM{pricing.eliteStartingPrice.toLocaleString()}</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                {[
                  '1-on-1 Diagnostic & Positioning Refinement',
                  'High-Ticket Offer Architecture & Pricing Design',
                  'Direct Sit-Down Video & Camera Presence Coaching',
                  'Quarterly Four Transformation Content Roadmapping',
                  'Inbound Conversion Funnel & Discovery Call Scripts',
                  'Direct WhatsApp Access to Lead Brand Strategist'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white font-mono text-[10px] uppercase block">Selective Admission:</span>
                <p className="text-[11px] leading-relaxed">
                  We limit each 12-week cohort to 6 clients to ensure intensive, high-touch strategic delivery.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 space-y-6 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Current Monthly Revenue</label>
                    <select
                      value={monthlyRevenueRange}
                      onChange={(e) => setMonthlyRevenueRange(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    >
                      <option value="Under RM10,000">Under RM10,000</option>
                      <option value="RM10,000 – RM20,000">RM10,000 – RM20,000</option>
                      <option value="RM20,000 – RM50,000">RM20,000 – RM50,000</option>
                      <option value="RM50,000 – RM100,000">RM50,000 – RM100,000</option>
                      <option value="RM100,000+">RM100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Current Business & Service Description</label>
                  <input
                    type="text"
                    required
                    value={currentBusiness}
                    onChange={(e) => setCurrentBusiness(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">What is your primary commercial bottleneck right now?</label>
                  <textarea
                    rows={2}
                    required
                    value={mainChallenge}
                    onChange={(e) => setMainChallenge(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Primary Goal for the Next 90 Days</label>
                  <textarea
                    rows={2}
                    required
                    value={goalNext90Days}
                    onChange={(e) => setGoalNext90Days(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application for Review</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
