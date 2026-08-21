'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { DEMO_USER_PROFILE } from '@/lib/mock-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-surface-border">
      {/* 背景柔和光晕 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-violet/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧：核心价值主张 */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* 分类标签 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-200 border border-brand-champagne/30 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-brand-champagne animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-champagne">
                AI 个人商业品牌智能操作系统
              </span>
            </div>

            {/* 品牌主标题与核心哲学 */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                看懂自己。 <br />
                <span className="bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne bg-clip-text text-transparent">
                  找到定位，建立影响力。
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 font-sans tracking-wide">
                不是创造一个人设，而是找出最值得被放大的自己。
              </p>
            </div>

            {/* 核心价值阐述 */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              融合东方紫微斗数战略自我认知框架与 2026 AI 个人品牌智能算法，为顾问、教练与企业主提供从天赋诊断、商业定位、内容创作到高客单变现的一站式操作系统。
            </p>

            {/* 主行动按钮与微文案 */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/test"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2 group"
              >
                <span>立即开始免费测试</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/report?sample=true"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-brand-champagne" />
                <span>查看完整示例报告</span>
              </Link>
            </div>

            {/* 信任微文案 */}
            <p className="text-xs text-slate-400 font-mono flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              免费测评 • 全程耗时约 3 分钟 • 无需绑定信用卡
            </p>
          </div>

          {/* 右侧：五维雷达动态图表预览 */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md p-6 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 shadow-2xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-champagne uppercase">
                    五维个人商业品牌雷达
                  </span>
                  <h2 className="text-base font-bold text-white">策略型破局者 (IP DNA)</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                  综合势能: 84.8
                </span>
              </div>

              <div className="flex justify-center py-2">
                <RadarChart scores={DEMO_USER_PROFILE.scores} size={280} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                <div className="p-2 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono block">最强天赋杠杆:</span>
                  <span className="font-bold text-white">权威定力与商业判断 (92)</span>
                </div>
                <div className="p-2 rounded-xl bg-surface-100 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono block">本周战略指令:</span>
                  <span className="font-bold text-brand-champagne">增加权 (观点型) 内容</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部信任背书：专为具有真实专业经验的人士打造 */}
        <div className="mt-16 pt-8 border-t border-surface-border/50 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            专为具有真实专业经验的实战家量身打造
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
            {['商业顾问', '实体企业主', '高管教练', '资深讲师', '知识创作者', '专业销售领袖'].map((role) => (
              <div key={role} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-200 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-champagne" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
