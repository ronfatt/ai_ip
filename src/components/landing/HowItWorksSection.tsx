'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const STEPS = [
  { step: '01', title: 'Discover Your Nature', zh: '解码天性', desc: 'Complete the 6-step questionnaire to map your cognitive strengths, voice archetype, and commercial baseline.' },
  { step: '02', title: 'Generate Your IP DNA', zh: '生成 IP 资产', desc: 'Our AI engine calculates your 5-Dimension scores: Authority, Trust, Attraction, Expression, and Monetization.' },
  { step: '03', title: 'Build Brand Blueprint', zh: '锁定定位蓝图', desc: 'Establish your 1-Sentence High-Ticket Positioning Statement, Audience Persona, and Camera Guidelines.' },
  { step: '04', title: 'Deploy Content Engine', zh: '四化内容引擎', desc: 'Generate high-retention video scripts, hooks, and captions across Lu, Quan, Ke, and Ji in the AI Studio.' },
  { step: '05', title: 'Design Offer Ladder', zh: '构建阶梯产品', desc: 'Structure your Free $\\rightarrow$ Entry $\\rightarrow$ Core $\\rightarrow$ High-Ticket RM4.8k ecosystem to convert views to wire transfers.' },
  { step: '06', title: 'Track & Optimize', zh: '数据复盘迭代', desc: 'Track content balance, consultation pipeline, and consult with the 24/7 AI Coach for real-time adjustments.' },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-300/80 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet bg-brand-violet/10 px-3 py-1 rounded-full border border-brand-violet/30">
            6-Step Systematic Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How ZIWEI IP Works
          </h2>
          <p className="text-base text-slate-400">
            From initial self-discovery to a scalable, high-converting personal brand monetization engine.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 hover:border-brand-champagne/40 transition-all relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-brand-champagne/80 group-hover:text-brand-champagne transition-colors">
                  {item.step}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {item.zh}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20"
          >
            <span>Start Step 01: Free IP Test</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
