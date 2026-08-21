'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  Play,
  CheckCircle2,
  Lock,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  FileCheck,
  ChevronRight,
  Award,
  Crown,
  Check
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function AcademyPage() {
  const router = useRouter();
  const { academyModules, toggleModuleCompletion, updateWorkbookAnswer, entitlements, pricing, addToast } = useAppState();

  const [selectedModuleId, setSelectedModuleId] = useState<string>(academyModules[0]?.id || 'mod_01');

  const currentModule = academyModules.find((m) => m.id === selectedModuleId) || academyModules[0];
  const completedCount = academyModules.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / (academyModules.length || 1)) * 100);

  const isCourseUnlocked = entitlements.has_course;

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* ================= 课程销售落地页（未解锁状态） ================= */}
        {!isCourseUnlocked ? (
          <div className="space-y-10">
            {/* 课程主标题与价值主张 */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>旗舰战略大师课</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                将你的定位蓝图转化为具有高辨识度与变现力的商业品牌
              </h1>
              <p className="text-base sm:text-lg font-bold text-slate-200">
                看懂自己只是第一步，真正的价值在于把定位变成内容、影响力与商业成果。
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                《紫微IP定位学》 是一套 8 大模块的战术升级实战体系，旨在手把手指导顾问、创作者与企业主，从底层认知突破到构建出年入百万的个人商业IP操作系统。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/checkout?product=course"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>立即开启体系化学习 (RM{pricing.coursePrice})</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 课程承诺与交付成果清单 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne block text-center">
                完成这门大师课后，你将完整拥有：
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-200">
                {[
                  '一套手术刀般精准的定位陈述句',
                  '高净值买家反向筛选过滤器',
                  '专属定制的品牌语态与红线清单',
                  '从容沉稳的坐姿出镜表达风格',
                  '4大高留存核心内容支柱',
                  '12大永不枯竭的签名爆款选题库',
                  '5阶高客单产品天梯与定价体系',
                  '30天可执行的落地行动日历'
                ].map((p, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 大核心模块大纲预览 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">8 大大师模块课程大纲</h3>
                <span className="text-xs text-slate-400 font-mono">系统化实战课表</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {academyModules.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-xs text-brand-champagne">
                          模块 {mod.moduleNumber}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {mod.durationMinutes} 分钟
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm leading-snug">{mod.title}</h4>
                      <p className="text-[11px] text-brand-gold font-mono mt-0.5">{mod.subtitle}</p>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {mod.keyInsights?.[0] || '系统化商业定位与高客单落地实操框架'}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>配备实战工作手册</span>
                      <Lock className="w-3.5 h-3.5 text-brand-champagne" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ================= 已解锁学习工作台与播放器 ================= */
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    大师实战课已解锁
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  《紫微IP定位学》 课程学习中心
                </h1>
                <p className="text-sm text-slate-300">
                  8 大战略实战模块，带你从底层天赋认知跃升为高客单商业IP操作系统。
                </p>
              </div>

              {/* 进度卡片 */}
              <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-4 min-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center font-bold text-slate-950 text-xs">
                  <div className="w-full h-full bg-surface-300 rounded-[10px] flex items-center justify-center font-black text-brand-champagne font-mono">
                    {progressPercent}%
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">学习总进度</span>
                  <span className="text-xs font-bold text-white">
                    已完成 {completedCount} / {academyModules.length} 个核心模块
                  </span>
                </div>
              </div>
            </div>

            {/* 完课率高触发私享陪跑横幅 (>= 75%) */}
            {progressPercent >= 75 && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-violet/20 via-surface-200 to-surface-200 border border-brand-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-scale-up">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                    你已掌握完整方法论，下一步：深度落地交付
                  </span>
                  <h3 className="text-lg font-black text-white">
                    准备好申请一对一商业IP高阶私享陪跑计划了吗？
                  </h3>
                  <p className="text-xs text-slate-300">
                    由资深品牌战略顾问亲自下场，在 8-12 周内协助您打磨产品阶梯与高客单转化通道。
                  </p>
                </div>
                <Link
                  href="/elite"
                  className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold flex-shrink-0"
                >
                  申请私享席位 &rarr;
                </Link>
              </div>
            )}

            {/* 主交互学习网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 左列：模块目录列表 (lg:col-span-4) */}
              <div className="lg:col-span-4 space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                {academyModules.map((mod) => {
                  const isSelected = mod.id === selectedModuleId;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-surface-100 border-brand-champagne shadow-lg scale-[1.01]'
                          : 'bg-surface-200/80 border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleModuleCompletion(mod.id);
                          }}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                            mod.completed
                              ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                              : 'bg-surface-300 border-white/20 hover:border-brand-champagne'
                          }`}
                        >
                          {mod.completed && <Check className="w-3.5 h-3.5" />}
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-brand-champagne font-bold block">
                            模块 {mod.moduleNumber} · {mod.durationMinutes} 分钟
                          </span>
                          <span className="text-xs font-bold text-white leading-snug">
                            {mod.title}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-brand-champagne' : 'text-slate-600'}`} />
                    </button>
                  );
                })}
              </div>

              {/* 右列：模块视频与实战手册 (lg:col-span-8) */}
              {currentModule && (
                <div className="lg:col-span-8 space-y-6">
                  {/* 视频播放器卡片 */}
                  <div className="relative aspect-video rounded-3xl bg-surface-100 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-300 via-transparent to-transparent opacity-80" />
                    <div className="w-16 h-16 rounded-full bg-brand-champagne text-slate-950 flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                    <div className="relative z-10 mt-4 space-y-1">
                      <span className="text-xs font-mono font-bold text-brand-champagne">
                        模块 {currentModule.moduleNumber} · 视频大师课
                      </span>
                      <h3 className="text-lg font-black text-white">{currentModule.title}</h3>
                    </div>
                  </div>

                  {/* 模块详情与实战手册 */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                      <div>
                        <h3 className="text-xl font-bold text-white">{currentModule.title}</h3>
                        <p className="text-xs text-brand-gold font-mono">{currentModule.subtitle}</p>
                      </div>

                      <button
                        onClick={() => toggleModuleCompletion(currentModule.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                          currentModule.completed
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-brand-champagne text-slate-950 hover:bg-brand-gold shadow-md'
                        }`}
                      >
                        {currentModule.completed ? '✓ 本模块已学完' : '标记为已学完'}
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2 text-xs">
                      <strong className="text-brand-champagne font-mono text-[10px] uppercase block">
                        核心方法论洞察：
                      </strong>
                      <ul className="space-y-1.5 text-slate-300">
                        {currentModule.keyInsights?.map((ins, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-champagne font-bold">•</span>
                            <span>{ins}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 互动工作手册问答 */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" /> 模块互动落地实战手册
                        </span>
                        <button
                          onClick={() => {
                            addToast('手册作答内容已同步至您的战略蓝图！', 'success');
                            router.push('/blueprint');
                          }}
                          className="text-xs text-brand-champagne hover:underline font-mono font-bold"
                        >
                          同步至我的战略蓝图 &rarr;
                        </button>
                      </div>

                      <div className="space-y-4 text-xs">
                        {currentModule.workbookPrompts?.map((prompt, idx) => (
                          <div key={prompt.id || idx} className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
                            <label className="font-bold text-slate-200 block leading-snug">
                              {idx + 1}. {prompt.question}
                            </label>
                            <textarea
                              rows={2}
                              value={prompt.userAnswer || ''}
                              onChange={(e) => updateWorkbookAnswer(currentModule.id, idx, e.target.value)}
                              placeholder={prompt.placeholder || '在此输入您的战略回答与构思...'}
                              className="w-full p-2.5 rounded-xl bg-surface-200 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
