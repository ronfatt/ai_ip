'use client';

import React from 'react';
import { Compass, Sparkles, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '看懂自己 (Discover)',
      desc: '借助紫微命盘数学矩阵，精准测算出你的五维天赋能力与核心主辅原型，拒绝随波逐流。'
    },
    {
      step: '02',
      title: '找到定位 (Position)',
      desc: '明确商业主战场，确立品牌语态、镜头出镜风格与目标受众反向筛选标准。'
    },
    {
      step: '03',
      title: '持续表达 (Express)',
      desc: '启用 AI 创作工作台与四化内容飞轮，源源不断输出高转化、高认知密度的专业内容。'
    },
    {
      step: '04',
      title: '建立影响 (Influence)',
      desc: '在细分领域树立无可替代的行业权威与客户口碑，成为高净值客户心中的首选专家。'
    },
    {
      step: '05',
      title: '商业变现 (Monetize)',
      desc: '搭建 5 阶高客单产品天梯，从单次咨询升级为高客单陪跑与高复购商业资产。'
    }
  ];

  return (
    <section className="py-20 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/15 px-3 py-1 rounded-full border border-brand-champagne/30">
            方法论闭环
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            五步打造专属于你的高客单个人商业品牌
          </h2>
          <p className="text-sm text-slate-300">
            从底层认知到高客单变现，一套完整、严谨且可落地的战略增长飞轮。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-2xl font-black text-brand-champagne font-mono block">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
