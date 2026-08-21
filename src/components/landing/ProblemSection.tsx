'use client';

import React from 'react';
import { AlertCircle, XCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: '盲目模仿网红，丢弃了专业深度',
      desc: '去学泛娱乐网红跳舞、夸张搞怪或制造情绪焦虑，不仅吸引不来高付费客户，反而严重损耗了自己苦心经营多年的专业声誉。',
      solution: '回归本质：用结构化认知与商业深度直击高客单决策者。'
    },
    {
      title: '按小时计费，陷入低效的时间穷忙',
      desc: '每天忙于单次咨询或杂务，越是专业解决问题越快，按时间收费反而赚得越少，始终无法建立可沉淀的品牌资产。',
      solution: '产品化重塑：将隐性专业能力提炼为标准化 5 阶高客单产品阶梯。'
    },
    {
      title: '内容高点赞，但从来没人买单',
      desc: '发布了大量泛干货与小技巧，吸引了全网大量白嫖党与初学者，但真正有预算的企业主与高净值客户根本不会为你买单。',
      solution: '精准反向过滤：用四化内容飞轮精准筛选并锁定高净值核心买家。'
    }
  ];

  return (
    <section className="py-20 bg-surface-200/50 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            行业痛点剖析
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            为什么 90% 的专业人士做个人品牌以失败告终？
          </h2>
          <p className="text-sm text-slate-300">
            传统的自媒体打法是为流量网红设计的，而专业人士需要的是一套基于天赋与商业价值的影响力转化系统。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-surface-100/90 border border-white/5 space-y-4 hover:border-brand-champagne/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              <div className="pt-3 border-t border-white/5 text-xs text-brand-champagne font-medium flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{p.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
