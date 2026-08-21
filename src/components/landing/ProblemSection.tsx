'use client';

import React from 'react';
import { HelpCircle, EyeOff, CopyCheck, Coins, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PAIN_POINTS = [
  {
    icon: HelpCircle,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    title: '“I know a lot, but people don\'t know what I am best at.”',
    chinese: '专业很多很杂，但客户不知道你到底哪项最强。',
    description: 'You suffer from the Generalist Curse. Without sharp structural positioning, your 10+ years of deep domain wisdom gets priced like entry-level commodity work.'
  },
  {
    icon: EyeOff,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    title: '“I create content, but nobody remembers me.”',
    chinese: '天天发短视频写文章，观众看一眼就滑走，毫无辨识度。',
    description: 'Generic tips and templated hooks produce zero emotional imprint. High-ticket buyers remember structured worldviews and contrarian conviction, not volume.'
  },
  {
    icon: CopyCheck,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    title: '“I copy successful creators and feel less like myself.”',
    chinese: '模仿爆款网感越做越别扭，不仅身心俱疲，还引来白嫖客。',
    description: 'Forcing yourself into unnatural archetypes (e.g. hyper video dancing when you are naturally an analytical advisor) drains your energy and repels high-value clients.'
  },
  {
    icon: Coins,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    title: '“I have expertise but no clear product or monetization path.”',
    chinese: '有真本事，却只能靠零星熟人转介绍，缺乏高客单产品矩阵。',
    description: 'Attention without an engineered Offer Ladder is unpaid entertainment. You need a systematic progression from Free lead magnets to RM4,800+ premium retainers.'
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-300/60 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            The Positioning Bottleneck
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            You may not have a content problem. <br />
            <span className="text-brand-champagne">You may have a positioning problem.</span>
          </h2>
          <p className="text-base text-slate-400">
            Hard work in the wrong positioning direction only creates creator burnout. True leverage comes from aligning with your natural commercial DNA.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl bg-surface-200/80 border ${item.borderColor} hover:border-white/20 transition-all hover:translate-y-[-2px] shadow-lg flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-surface-100 border border-white/10">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">Friction Pattern 0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-brand-champagne mb-4">
                    {item.chinese}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>ZIWEI IP Solution:</span>
                  <Link href="/test" className="text-brand-champagne hover:underline font-semibold flex items-center gap-1">
                    Solve with IP DNA &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
