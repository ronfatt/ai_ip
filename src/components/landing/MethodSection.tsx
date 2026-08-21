'use client';

import React, { useState } from 'react';
import { Layers, Sparkles, ShieldCheck, Award, Zap, Briefcase, GraduationCap, Package } from 'lucide-react';
import Link from 'next/link';

export const MethodSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'positions' | 'transformations' | 'monetization'>('transformations');

  return (
    <section id="method" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/30">
            The Strategic Framework
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            One Chart. Five Positions. <br />
            Four Transformations. Three Monetization Paths.
          </h2>
          <p className="text-base text-slate-400">
            A complete, integrated personal brand operating system combining Eastern archetypal wisdom with modern high-ticket SaaS strategy.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'positions'
                  ? 'bg-brand-champagne text-slate-950 shadow-lg shadow-brand-champagne/20'
                  : 'bg-surface-100 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              5 Core Positions (五维定位)
            </button>
            <button
              onClick={() => setActiveTab('transformations')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'transformations'
                  ? 'bg-brand-champagne text-slate-950 shadow-lg shadow-brand-champagne/20'
                  : 'bg-surface-100 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              4 Transformations (四化飞星)
            </button>
            <button
              onClick={() => setActiveTab('monetization')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'monetization'
                  ? 'bg-brand-champagne text-slate-950 shadow-lg shadow-brand-champagne/20'
                  : 'bg-surface-100 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              3 Monetization Paths (三维变现)
            </button>
          </div>
        </div>

        {/* Tab Content 1: Five Positions */}
        {activeTab === 'positions' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-fade-in">
            {[
              { num: '01', title: 'Identity', zh: '核心天性', desc: 'Who you naturally are when no one is watching. Your authentic cognitive baseline.' },
              { num: '02', title: 'Values', zh: '品牌底线', desc: 'What you stand for and the compromises you refuse to make for quick profit.' },
              { num: '03', title: 'Expertise', zh: '专业抓手', desc: 'Where your authority is most easily built without synthetic effort.' },
              { num: '04', title: 'Audience', zh: '精准客群', desc: 'The exact high-ticket decision-makers who already value your perspective.' },
              { num: '05', title: 'Expression', zh: '镜头语态', desc: 'Your natural communication cadence (sit-down analysis vs diagnostic breakdown).' },
            ].map((pos, i) => (
              <div key={i} className="p-5 rounded-2xl bg-surface-200/80 border border-white/10 hover:border-brand-champagne/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-champagne">{pos.num}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{pos.title}</h3>
                  <p className="text-xs text-brand-gold font-medium mb-3">{pos.zh}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{pos.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Four Transformations (Lu, Quan, Ke, Ji) */}
        {activeTab === 'transformations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in">
            <div className="p-6 rounded-2xl bg-surface-200/90 border border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    LU (禄) — Attraction
                  </div>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Natural Resonance</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  What triggers ideal buyers to notice, like, and want to learn from you through unspoken resonance.
                </p>
                <div className="p-3 rounded-xl bg-surface-100 text-[11px] text-emerald-200 border border-emerald-500/20">
                  <strong>Example:</strong> “Why most professionals fail at personal branding by copying generic hype.”
                </div>
              </div>
              <div className="mt-5 text-[11px] text-slate-400">Content Role: Top-of-funnel inbound pull</div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-200/90 border border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                    QUAN (权) — Authority
                  </div>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Command & Leadership</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Where you establish undeniable leadership, high conviction, and industry standards that filter out spectators.
                </p>
                <div className="p-3 rounded-xl bg-surface-100 text-[11px] text-amber-200 border border-amber-500/20">
                  <strong>Example:</strong> “Three things I would never recommend after 15 years in enterprise consulting.”
                </div>
              </div>
              <div className="mt-5 text-[11px] text-slate-400">Content Role: High-ticket boundary setter</div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-200/90 border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                    KE (科) — Trust
                  </div>
                  <Award className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proof & Reputation</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  What builds solid institutional credibility, client case study autopsies, and peer endorsement.
                </p>
                <div className="p-3 rounded-xl bg-surface-100 text-[11px] text-blue-200 border border-blue-500/20">
                  <strong>Example:</strong> “Client Autopsy: How we repositioned an advisory firm from RM2k to RM18k retainers.”
                </div>
              </div>
              <div className="mt-5 text-[11px] text-slate-400">Content Role: Mid-funnel conversion proof</div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-200/90 border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold border border-pink-500/20">
                    JI (忌) — Breakthrough
                  </div>
                  <Zap className="w-4 h-4 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Blind Spot Mastery</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Transforming founder resistance and cognitive blind spots into high-vulnerability breakthrough content.
                </p>
                <div className="p-3 rounded-xl bg-surface-100 text-[11px] text-pink-200 border border-pink-500/20">
                  <strong>Example:</strong> “Your deep expertise may be the exact reason your content feels too complicated.”
                </div>
              </div>
              <div className="mt-5 text-[11px] text-slate-400">Content Role: High-resonance polarity & loyalty</div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Three Monetization Paths */}
        {activeTab === 'monetization' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="p-7 rounded-2xl bg-surface-200/80 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/10 w-fit mb-4">
                  <Briefcase className="w-6 h-6 text-brand-champagne" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Services & Advisory</h3>
                <p className="text-xs text-brand-gold font-medium mb-3">高客单咨询与交付 (RM 2,000 - RM 25,000)</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Bespoke 1-on-1 strategy sprints, corporate retainers, diagnostic audits, and implementation advisory for qualified clients.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                Leverage: Low volume, ultra-high margin
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-surface-200/80 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/10 w-fit mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Knowledge & Sprints</h3>
                <p className="text-xs text-blue-400 font-medium mb-3">知识付费与训练营 (RM 69 - RM 999)</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Interactive workshops, structured video masterclasses, downloadable templates, and cohort methodology sprints.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                Leverage: Medium scale, high automated cashflow
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-surface-200/80 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-surface-100 border border-white/10 w-fit mb-4">
                  <Package className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Software & Community</h3>
                <p className="text-xs text-emerald-400 font-medium mb-3">SaaS 工具与年度会员 (RM 59 - RM 299/mo)</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ZIWEI IP Software tools, AI Content Studio prompt suites, weekly masterminds, and private peer networks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                Leverage: Recurring MRR, compounding lifetime value
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
