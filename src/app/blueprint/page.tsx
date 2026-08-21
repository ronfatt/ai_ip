'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  Edit3,
  CheckCircle2,
  Sliders,
  Video,
  Users,
  Target,
  FileText
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function BlueprintPage() {
  const router = useRouter();
  const { userProfile, setUserProfile, contentPillars, setContentPillars, addToast } = useAppState();

  const [isEditingPositioning, setIsEditingPositioning] = useState(false);
  const [positioningText, setPositioningText] = useState(userProfile.positioningStatement);

  const handleSavePositioning = () => {
    setUserProfile({
      ...userProfile,
      positioningStatement: positioningText
    });
    setIsEditingPositioning(false);
    addToast('商业定位陈述已成功更新！', 'success');
  };

  const updatePillarRatio = (id: string, newRatio: number) => {
    setContentPillars((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ratioPercent: newRatio } : p))
    );
  };

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* 顶部 Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                PERSONAL BRAND OPERATING BLUEPRINT
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              个人商业品牌战略蓝图
            </h1>
            <p className="text-sm text-slate-300">
              指导你日常内容产出、产品定价与高客单客户转化的专属战略总图。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/studio"
              className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>进入 AI 创作工作台</span>
            </Link>
          </div>
        </div>

        {/* 核心定位陈述框 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/40 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              核心商业定位陈述句 (POSITIONING STATEMENT)
            </span>
            <button
              onClick={() => setIsEditingPositioning(!isEditingPositioning)}
              className="text-xs font-mono text-brand-champagne hover:underline flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingPositioning ? '取消编辑' : '修改定位'}</span>
            </button>
          </div>

          {isEditingPositioning ? (
            <div className="space-y-3">
              <textarea
                rows={3}
                value={positioningText}
                onChange={(e) => setPositioningText(e.target.value)}
                className="w-full p-4 rounded-2xl bg-surface-100 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-champagne leading-relaxed"
              />
              <button
                onClick={handleSavePositioning}
                className="px-5 py-2 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
              >
                保存定位修改
              </button>
            </div>
          ) : (
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              “{userProfile.positioningStatement}”
            </p>
          )}
        </div>

        {/* 核心双栏：目标受众反向筛选 + 品牌语态与防坑清单 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 目标受众反向筛选 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                AUDIENCE FILTERING
              </span>
              <span className="text-xs text-slate-400 font-mono">反向客户筛选</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1.5">
                <span className="font-bold text-emerald-400 font-mono text-[10px] uppercase block">
                  🎯 核心理想买家画像：
                </span>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {userProfile.audience.primary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1.5">
                <span className="font-bold text-blue-400 font-mono text-[10px] uppercase block">
                  💡 次要辐射受众：
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {userProfile.audience.secondary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1.5">
                <span className="font-bold text-rose-400 font-mono text-[10px] uppercase block">
                  🚫 坚决主动过滤与排除的人群：
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {userProfile.audience.avoid}
                </p>
              </div>
            </div>
          </div>

          {/* 品牌语态与防坑清单 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                BRAND VOICE & ANTI-TONE
              </span>
              <span className="text-xs text-slate-400 font-mono">语态与红线准则</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
                <span className="font-bold text-brand-champagne font-mono text-[10px] uppercase block">
                  ✓ 核心推荐语态：
                </span>
                <ul className="space-y-1 text-slate-200">
                  {userProfile.brandVoice.map((v, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
                <span className="font-bold text-rose-400 font-mono text-[10px] uppercase block">
                  ✗ 坚决禁止出现的行为与风格（负面清单）：
                </span>
                <ul className="space-y-1 text-slate-300">
                  {userProfile.cameraPersonality.avoid.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4 大核心内容支柱与科学配比滑块 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                CONTENT PILLARS & RATIOS
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">4 大核心内容支柱与发布配比</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">可调节滑块</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-4 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                    <span className="text-[10px] font-mono text-brand-gold">{pillar.chineseTitle}</span>
                  </div>
                  <span className="text-sm font-black text-brand-champagne font-mono">
                    {pillar.ratioPercent}%
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* 滑块 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>调整发布配比</span>
                    <span>{pillar.ratioPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    value={pillar.ratioPercent}
                    onChange={(e) => updatePillarRatio(pillar.id, Number(e.target.value))}
                    className="w-full accent-brand-champagne"
                  />
                </div>

                {/* 选题示例 */}
                <div className="pt-2 border-t border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">精选示例选题：</span>
                  {pillar.examples?.map((ex, idx) => (
                    <div key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="text-brand-champagne font-bold">›</span>
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
