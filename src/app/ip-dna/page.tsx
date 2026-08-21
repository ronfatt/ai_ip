'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Dna,
  Sparkles,
  ShieldCheck,
  Award,
  Zap,
  Target,
  ArrowRight,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { FiveDimensionRadial } from '@/components/charts/FiveDimensionRadial';
import { InfluenceEngineQuadrant } from '@/components/charts/InfluenceEngineQuadrant';
import { ContentMatrixGrid } from '@/components/charts/ContentMatrixGrid';
import { useAppState } from '@/context/AppStateContext';

export default function IpDnaPage() {
  const { userProfile } = useAppState();

  const archetypes = [
    {
      type: '主要定位原型',
      name: userProfile.primaryArchetype.name,
      titleZh: userProfile.primaryArchetype.titleZh,
      tagline: userProfile.primaryArchetype.tagline,
      desc: userProfile.primaryArchetype.description,
      role: userProfile.primaryArchetype.naturalRole,
      perception: userProfile.primaryArchetype.audiencePerception,
      lever: userProfile.primaryArchetype.growthLever,
      blindSpot: userProfile.primaryArchetype.potentialBlindSpot,
      bg: 'bg-surface-100 border-brand-champagne/40 shadow-xl'
    },
    {
      type: '次要支撑原型',
      name: userProfile.secondaryArchetype.name,
      titleZh: userProfile.secondaryArchetype.titleZh,
      tagline: userProfile.secondaryArchetype.tagline,
      desc: userProfile.secondaryArchetype.description,
      role: userProfile.secondaryArchetype.naturalRole,
      perception: userProfile.secondaryArchetype.audiencePerception,
      lever: userProfile.secondaryArchetype.growthLever,
      blindSpot: userProfile.secondaryArchetype.potentialBlindSpot,
      bg: 'bg-surface-200/80 border-white/10'
    },
    {
      type: '辅助表达原型',
      name: userProfile.supportingArchetype?.name || '认知提炼者 (Clarity Synthesizer)',
      titleZh: userProfile.supportingArchetype?.titleZh || '认知提炼者',
      tagline: userProfile.supportingArchetype?.tagline || '化繁为简，将海量信息转化为直击本质的行动指南。',
      desc: userProfile.supportingArchetype?.description || '你拥有出色的降维表达能力，能把晦涩的专业知识翻译成可立即落地的清单。',
      role: userProfile.supportingArchetype?.naturalRole || '方法论架构师 / 知识产品设计师',
      perception: userProfile.supportingArchetype?.audiencePerception || '条理分明、清晰高效、实用落地',
      lever: userProfile.supportingArchetype?.growthLever || '诊断自测清单与商业工具模板',
      blindSpot: userProfile.supportingArchetype?.potentialBlindSpot || '过于聚焦工具而弱化了个人独特哲学',
      bg: 'bg-surface-300/80 border-white/5'
    }
  ];

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* 顶部 Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                COGNITIVE ARCHETYPE MATRIX
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              我的 IP 基因与复合原型
            </h1>
            <p className="text-sm text-slate-300">
              基于紫微命盘能量矩阵推演的核心原型架构、内在张力平衡与五维表达模型。
            </p>
          </div>

          <Link
            href="/blueprint"
            className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center gap-1.5 self-start sm:self-auto shadow-md"
          >
            <span>查看完整战略蓝图</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 重复合定位原型卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {archetypes.map((arch, idx) => (
            <div
              key={arch.type}
              className={`p-7 rounded-3xl border space-y-5 flex flex-col justify-between ${arch.bg}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-2.5 py-0.5 rounded-full border border-brand-champagne/20">
                    {arch.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">{arch.titleZh}</h3>
                  <p className="text-xs text-brand-gold font-mono mt-0.5">{arch.name}</p>
                </div>

                <p className="text-xs text-slate-200 italic font-medium leading-relaxed">
                  “{arch.tagline}”
                </p>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {arch.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">自然角色：</span>
                  <span className="text-white font-bold">{arch.role}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">受众心智感知：</span>
                  <span className="text-slate-300">{arch.perception}</span>
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400 font-mono block font-bold">核心增长杠杆：</span>
                  <span className="text-slate-200">{arch.lever}</span>
                </div>
                <div>
                  <span className="text-[10px] text-rose-400 font-mono block font-bold">潜在认知盲点：</span>
                  <span className="text-slate-300">{arch.blindSpot}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 原型内在张力平衡模型 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                ARCHETYPE TENSION MODEL
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">原型内在张力平衡机制</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">复合能量协同</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
              <strong className="text-white text-sm block">破局者（锐利洞察） vs 权威建构者（行业定力）</strong>
              <p>
                你的主要原型【策略型破局者】赋予了你极强的敏锐度，擅长打破旧认知；而次要原型【权威建构者】则为你注入了沉稳威严的行业定力。这种张力让你的内容既有穿透力，又不会显得轻浮随风倒。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
              <strong className="text-white text-sm block">如何化解潜在盲点</strong>
              <p>
                在进行高密度认知输出前，先用 5 秒钟还原目标受众真实的痛苦场景（禄），建立情绪共鸣后再展开逻辑推演，避免因直接输出深度方法论而让初级受众产生距离感。
              </p>
            </div>
          </div>
        </div>

        {/* 五维深度雷达 + 四象限影响力引擎 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 左侧：五维能力深度图谱 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                FIVE-DIMENSION RADIAL
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">五维个人品牌能力图谱</h3>
              <p className="text-xs text-slate-400 mt-1">
                权威 (92) · 信任 (87) · 变现 (88) · 表达 (81) · 吸引 (76)
              </p>
            </div>

            <div className="py-2 flex justify-center">
              <FiveDimensionRadial scores={userProfile.scores} size={300} />
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs text-slate-300">
              <span className="text-brand-champagne font-mono font-bold text-[10px] uppercase block mb-1">
                战略优化建议：
              </span>
              <p className="leading-relaxed">
                当前【权威定力】与【商业变现】处于绝对高位，表明你天生适合高客单战略咨询。适度提升【共情引力】，可让高净值客户更快产生情感托付感。
              </p>
            </div>
          </div>

          {/* 右侧：四象限内容矩阵 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                INFLUENCE ENGINE
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">四象限商业影响力引擎</h3>
              <p className="text-xs text-slate-400 mt-1">
                认知广度 vs 商业深度 · 情绪共振 vs 逻辑确定性
              </p>
            </div>

            <div className="py-2 flex justify-center">
              <InfluenceEngineQuadrant />
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs text-slate-300">
              <span className="text-brand-champagne font-mono font-bold text-[10px] uppercase block mb-1">
                主战场定位：
              </span>
              <p className="leading-relaxed">
                你的核心内容主战场位于【第一象限：高确定性·高认知深度】（深度案例复盘与高维商业模型拆解）。
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
