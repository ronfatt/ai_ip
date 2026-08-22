'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: '解码天赋基因',
    zh: '解码天性',
    desc: '完成 7 步深度商业定位测评，精准测绘您的认知优势、表达原型与商业变现基底。'
  },
  {
    step: '02',
    title: '生成专属 IP 资产',
    zh: '生成 IP 资产',
    desc: '算法引擎实时推演五维商业能力得分：权威定力、信任背书、共情引力、表达语态与变现势能。'
  },
  {
    step: '03',
    title: '锁定定位战略蓝图',
    zh: '锁定定位蓝图',
    desc: '确立一句话高客单定位陈述句、精准高净值买家反向筛选画像与坐姿出镜表达指南。'
  },
  {
    step: '04',
    title: '启动四化内容引擎',
    zh: '四化内容引擎',
    desc: '在 AI 创作工作台一键生成涵盖【禄/权/科/忌】的高留存视频脚本、破局钩子与全网分发文案。'
  },
  {
    step: '05',
    title: '构建高客单产品天梯',
    zh: '构建阶梯产品',
    desc: '搭建从“免费引流 $\rightarrow$ 战略蓝图 $\rightarrow$ 核心大师课 $\rightarrow$ 私享陪跑”的 5 阶闭环生态，将播放量转化为真实营收。'
  },
  {
    step: '06',
    title: '数据复盘与实时优化',
    zh: '数据复盘迭代',
    desc: '追踪四化内容生态平衡度与咨询转化通道，全天候向专属 AI 战略教练咨询并实时调整打法。'
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-300/80 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 头部标题区 */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet bg-brand-violet/10 px-3 py-1 rounded-full border border-brand-violet/30">
            6 步商业品牌进化闭环
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ZIWEI IP 运行机制
          </h2>
          <p className="text-base text-slate-400">
            从底层天赋自我认知，跃升为高变现、可持续扩张的个人商业品牌操作系统。
          </p>
        </div>

        {/* 6 步卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 hover:border-brand-champagne/40 transition-all relative group shadow-xl"
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
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 底部 CTA 按钮 */}
        <div className="mt-12 text-center">
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20"
          >
            <span>开启第 1 步：免费 IP 测评</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
