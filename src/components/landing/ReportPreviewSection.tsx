'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, Sparkles, Shield, ArrowRight, Check } from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { DEMO_USER_PROFILE } from '@/lib/mock-data';

export const ReportPreviewSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
            商业报告预览
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            您的 IP 基因快照报告长什么样
          </h2>
          <p className="text-base text-slate-400">
            专为您量身定制的高认知密度战略情报报告，精准定位您的商业基底。
          </p>
        </div>

        {/* 报告预览大卡片 */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-200 border border-brand-champagne/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-brand-champagne font-bold uppercase tracking-wider">
                  个人商业IP绝密战略档案
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  已验证档案
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">陈志远 — 商业战略顾问</h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block font-mono">综合战略势能指数</span>
              <span className="text-2xl font-black text-brand-champagne font-mono">84.8 / 100</span>
            </div>
          </div>

          {/* 原型与雷达 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center">
            <div className="md:col-span-6 space-y-4 text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">核心定位主原型</span>
                <div className="text-xl font-black text-brand-champagne mt-0.5">
                  策略型破局者 (Strategic Creator)
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  你最自然建立影响力的方式，是通过敏锐洞察、高维结构与清晰框架化解混乱。
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">自然角色定位</span>
                <div className="text-sm font-semibold text-white mt-0.5">
                  战略顾问 / 破局导师 / 行业挑战者
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">受众心智感知</span>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  从容沉稳、逻辑严密、判断果断、坚持高标准
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">最强增长杠杆</span>
                <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                  高密度权威认知拆解与差异化对比模型
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">潜在认知盲点</span>
                <div className="text-sm font-semibold text-pink-400 mt-0.5">
                  在建立情感信任共鸣前，过早进行深度技术细节说理
                </div>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-300 border border-white/5">
              <RadarChart scores={DEMO_USER_PROFILE.scores} size={260} showLabels={true} />
            </div>
          </div>

          {/* 锁定模块网格 */}
          <div className="pt-6 border-t border-white/10 relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 filter blur-[3px] opacity-40 select-none">
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">目标受众反向筛选</span>
                <span className="text-[10px] text-slate-400">高净值客户定位矩阵</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">四化内容矩阵</span>
                <span className="text-[10px] text-slate-400">4 大核心支柱发布排期</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">坐姿镜头出镜人设</span>
                <span className="text-[10px] text-slate-400">黄金语速与发声调优</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">高客单产品阶梯</span>
                <span className="text-[10px] text-slate-400">高客单咨询定价模型</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">破局盲点转化</span>
                <span className="text-[10px] text-slate-400">化阻力为动力的突破策略</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10">
                <span className="text-xs font-bold text-white block">30天落地行动日历</span>
                <span className="text-[10px] text-slate-400">每日落地执行指引</span>
              </div>
            </div>

            {/* 解锁浮层 Callout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface-300/80 backdrop-blur-sm rounded-2xl">
              <div className="p-3 rounded-full bg-brand-champagne/20 text-brand-champagne mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                您的核心高客单变现模式处于锁定状态
              </h4>
              <p className="text-xs text-slate-300 max-w-md mb-4 leading-relaxed">
                解锁专属于您的完整战略蓝图、AI 创作工作台定制脚本与高客单产品设计指南。
              </p>
              <Link
                href="/test"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
              >
                <span>生成我的专属 IP 报告 (3分钟免费测评)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
