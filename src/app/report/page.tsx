'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Lock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Share2,
  X,
  Mail,
  Zap,
  Check
} from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { LockedFeature } from '@/components/ui/LockedFeature';
import { ShareableArchetypeCard } from '@/components/ui/ShareableArchetypeCard';
import { useAppState } from '@/context/AppStateContext';

function ReportContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userProfile, pricing, trackEvent, addToast } = useAppState();

  const isSample = searchParams?.get('sample') === 'true';

  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');

  useEffect(() => {
    trackEvent('report_viewed', { isSample });

    // Desktop Exit Intent Handler
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isExitIntentOpen && !isSample) {
        setIsExitIntentOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isExitIntentOpen, isSample]);

  const handleSaveSnapshotEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitEmail.trim()) return;
    addToast('Your IP Snapshot has been emailed to you!', 'success');
    setIsExitIntentOpen(false);
  };

  const freeScores = [
    { label: 'Authority', score: 92, labelZh: '权威定力', color: 'text-amber-400' },
    { label: 'Trust', score: 87, labelZh: '信任背书', color: 'text-blue-400' },
    { label: 'Attraction', score: 76, labelZh: '共情引力', color: 'text-emerald-400' },
    { label: 'Expression', score: 81, labelZh: '表达语态', color: 'text-purple-400' },
    { label: 'Monetization', score: 88, labelZh: '变现势能', color: 'text-brand-champagne' },
  ];

  const topThreeInsights = [
    {
      number: '01',
      title: 'YOUR EDGE: Judgment over Entertainment',
      desc: 'People are likely to trust your strategic judgment faster than they emotionally connect with you. You convert high-ticket buyers best when delivering deep diagnostic clarity.'
    },
    {
      number: '02',
      title: 'YOUR OPPORTUNITY: Differentiating Opinions',
      desc: 'Your expertise is strong, but your positioning can become 10x easier to remember by publicly challenging 2-3 conventional practices in your industry.'
    },
    {
      number: '03',
      title: 'YOUR NEXT MOVE: Opinion-Led Framing',
      desc: 'Use more opinion-led content (QUAN) rather than basic tutorial tips to convert passive views into qualified high-ticket consultations.'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-300 text-white selection:bg-brand-champagne selection:text-slate-950">
      {/* Navigation Topbar */}
      <header className="border-b border-surface-border bg-surface-300/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold text-white">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne flex items-center justify-center font-mono font-black text-slate-950 text-xs">
              ZW
            </span>
            <span className="font-extrabold tracking-tight">ZIWEI IP</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/checkout?product=blueprint"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Unlock Full Blueprint (RM{pricing.blueprintPrice})</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-14 space-y-14">
        {/* ================= SECTION 1: HEADER & ARCHETYPE REVEAL ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/30 text-brand-champagne text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL IP DOSSIER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            YOUR IP SNAPSHOT
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            A first strategic look at how you naturally build influence, earn executive trust, and command high-ticket pricing.
          </p>
        </div>

        {/* Archetype Reveal Showcase Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-surface-200 to-surface-100 border border-brand-champagne/40 shadow-2xl space-y-6 text-center relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-champagne">
              PRIMARY IP ARCHETYPE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Strategic Creator
            </h2>
            <span className="text-xs sm:text-sm text-brand-gold font-mono font-bold block">
              Secondary Archetype: Authority Builder
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed font-medium relative z-10">
            “You build influence by turning complexity into clarity, structure and direction.”
          </p>

          {/* 5-Axis Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 text-xs font-mono relative z-10">
            {freeScores.map((s) => (
              <div key={s.label} className="p-3 rounded-2xl bg-surface-300/80 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[10px] block">{s.label}</span>
                <span className={`text-2xl font-black ${s.color}`}>{s.score}</span>
                <span className="text-[10px] text-slate-500 block">{s.labelZh}</span>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 font-mono relative z-10">
            *AI strategic estimate based on cognitive baseline and communication calibration.
          </div>
        </div>

        {/* ================= SECTION 2: TOP 3 STRATEGIC INSIGHTS ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                DIAGNOSTIC SYNTHESIS
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">Top 3 Unlocked Insights</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Free Snapshot Tier</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            {topThreeInsights.map((ins) => (
              <div
                key={ins.number}
                className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono font-black text-brand-champagne text-base block">{ins.number}</span>
                  <h4 className="font-bold text-white text-sm">{ins.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 3: SHAREABLE SOCIAL ARCHETYPE CARD ================= */}
        <div className="pt-4 space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              SOCIAL ASSET
            </span>
            <h3 className="text-xl font-bold text-white">Share Your IP Archetype</h3>
            <p className="text-xs text-slate-400">Export high-resolution badge to LinkedIn, Instagram or WhatsApp.</p>
          </div>

          <ShareableArchetypeCard
            archetypeName="Strategic Creator"
            secondaryArchetype="Authority Builder"
            tagline="“I turn complexity into clarity, structure and direction.”"
          />
        </div>

        {/* ================= SECTION 4: LOCKED INTELLIGENCE SECTIONS ================= */}
        <div className="space-y-6 pt-6 border-t border-surface-border">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              LOCKED INTELLIGENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              What You Are Missing in the Free Snapshot
            </h3>
            <p className="text-xs text-slate-300">
              The free snapshot gives you diagnosis. The Full Blueprint provides your exact execution roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LockedFeature
              featureName="Audience Filter & Disqualification Strategy"
              requiredProduct="Blueprint"
              previewText="Your strongest market response comes from established SME owners who value structural integrity. To repel price-shoppers, anchor your anti-pitch..."
            />
            <LockedFeature
              featureName="Custom Brand Voice & Anti-Tone Parameters"
              requiredProduct="Blueprint"
              previewText="Tone Calibration: Direct (90%), Strategic (95%), Calm (85%). Never use fast-talking hype, manufactured countdown urgency, or TikTok memes..."
            />
            <LockedFeature
              featureName="Camera Personality & Sit-Down Filming Directives"
              requiredProduct="Blueprint"
              previewText="Best Delivery Cadence: 120-130 wpm with unhurried pauses. Use clean Shure SM7B broadcast mic and iPad dark mode diagrams to retain high-ticket buyers..."
            />
            <LockedFeature
              featureName="Four Transformation Influence Engine (LU/QUAN/KE/JI)"
              requiredProduct="Blueprint"
              previewText="Complete quarterly content balance ratios: 30% LU Attraction, 30% QUAN Authority, 25% KE Trust Proof, 15% JI Blind Spot Breakthrough..."
            />
            <LockedFeature
              featureName="4 High-Retention Content Pillars & Ratio Sliders"
              requiredProduct="Blueprint"
              previewText="1. Forensic Business Case Autopsies (35%)\n2. High-Conviction Contrarian Frameworks (30%)\n3. Diagnostic Audit Checklists (20%)\n4. Behind-The-Scenes Decision Logs (15%)"
            />
            <LockedFeature
              featureName="High-Ticket Offer Architecture & Pricing Ladder"
              requiredProduct="Blueprint"
              previewText="Package your knowledge into 5 tiers: Free Scorecard $\rightarrow$ RM69 Entry Sprint $\rightarrow$ RM899 Masterclass $\rightarrow$ RM4,800 Bespoke Advisory Sprint..."
            />
          </div>
        </div>

        {/* ================= SECTION 5: PRIMARY FULL BLUEPRINT PAYWALL ================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-surface-200 via-surface-100 to-surface-200 border-2 border-brand-champagne shadow-2xl space-y-8 relative overflow-hidden">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30 inline-block">
              COMPLETE STRATEGY UPGRADE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Unlock My Full Blueprint
            </h2>
            <p className="text-sm text-slate-300">
              Turn your profile into a complete, executable personal brand blueprint and 30-day content engine.
            </p>
          </div>

          {/* Value Comparison Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Free Snapshot */}
            <div className="p-5 rounded-2xl bg-surface-300/60 border border-white/5 space-y-3">
              <span className="font-mono font-bold text-slate-400 uppercase text-[10px] block">
                FREE SNAPSHOT (CURRENT)
              </span>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> Primary Archetype Reveal
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> 5 Basic Diagnostic Scores
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> Top 3 General Insights
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <X className="w-4 h-4" /> Full Audience & Offer Blueprint
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <X className="w-4 h-4" /> Four Transformation Content Engine
                </li>
              </ul>
            </div>

            {/* Full Blueprint */}
            <div className="p-5 rounded-2xl bg-surface-100 border border-brand-champagne/40 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-brand-champagne uppercase text-[10px] block">
                  FULL ZIWEI IP BLUEPRINT
                </span>
                <span className="text-xs font-black text-emerald-400 font-mono">RM{pricing.blueprintPrice} One-Time</span>
              </div>
              <ul className="space-y-2 text-slate-100 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Complete IP DNA & Five-Dimension Model
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Audience Disqualification & Brand Voice
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4 Content Pillars & Ratio Sliders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Four Transformation (LU/QUAN/KE/JI) Engine
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> High-Ticket Offer Direction & 30-Day Plan
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing & Checkout CTA */}
          <div className="text-center space-y-4 pt-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">RM{pricing.blueprintPrice}</span>
              <span className="text-xs text-slate-400 font-mono">one-time investment · instant lifetime access</span>
            </div>

            <Link
              href="/checkout?product=blueprint"
              className="inline-flex w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/30 items-center justify-center gap-2"
            >
              <span>Unlock Full Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-[11px] text-slate-400 font-mono max-w-md mx-auto leading-relaxed">
              ZIWEI IP provides strategic self-reflection and business positioning guidance. Recommendations should be tested against real audience response and market feedback.
            </p>
          </div>
        </div>

        {/* ================= SECTION 6: FAQ ================= */}
        <div className="space-y-4 max-w-2xl mx-auto pt-6 border-t border-surface-border text-xs">
          <h3 className="text-lg font-bold text-white text-center mb-4">Frequently Asked Questions</h3>

          <div className="space-y-3">
            {[
              {
                q: 'How is this different from traditional astrology or fortune-telling?',
                a: 'ZIWEI IP strips away superstitious fatalism. We use the mathematical Zi Wei matrix as a strategic self-discovery lens to help experts find their natural positioning, high-ticket pricing leverage, and camera voice.'
              },
              {
                q: 'What happens immediately after I unlock the Blueprint?',
                a: 'You receive instant access to your full interactive Blueprint, complete 5-dimension model, 4 transformation engine, and customized 30-day action plan.'
              },
              {
                q: 'Is there a recurring subscription fee for the Blueprint?',
                a: 'No. The ZIWEI IP Blueprint is a one-time investment of RM299 with lifetime access.'
              }
            ].map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <strong className="text-white block">{faq.q}</strong>
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Exit Intent Modal (Desktop Only) */}
      {isExitIntentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4">
            <button
              onClick={() => setIsExitIntentOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-champagne/20 text-brand-champagne flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Save Your IP Snapshot</h3>
              <p className="text-xs text-slate-300">
                Enter your email address to save your Strategic Creator archetype and top insights before you leave.
              </p>
            </div>

            <form onSubmit={handleSaveSnapshotEmail} className="space-y-3 pt-2">
              <input
                type="email"
                required
                value={exitEmail}
                onChange={(e) => setExitEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-champagne"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
              >
                Send Me My Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading IP Snapshot...</div>}>
      <ReportContent />
    </Suspense>
  );
}
