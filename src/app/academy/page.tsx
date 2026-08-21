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
        {/* ================= COURSE SALES LANDING (IF LOCKED) ================= */}
        {!isCourseUnlocked ? (
          <div className="space-y-10">
            {/* Header & Course Pitch */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>FLAGSHIP MASTERCLASS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Turn Your Blueprint Into A Personal Brand People Remember
              </h1>
              <p className="text-base sm:text-lg font-bold text-slate-300">
                看懂自己只是第一步，真正的价值在于把定位变成内容、影响力与商业成果。
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                《紫微IP定位学》 is an 8-module tactical transformation system designed to guide consultants, creators, and business owners from raw self-discovery to a 6-figure personal brand operating system.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/checkout?product=course"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>Start Building My IP (RM{pricing.coursePrice})</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Course Promise Grid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne block text-center">
                BY THE END OF THIS MASTERCLASS, YOU WILL HAVE:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-200">
                {[
                  'A surgical positioning statement',
                  'High-ticket audience filter',
                  'Calibrated brand voice parameters',
                  'Deliberate camera presence style',
                  '4 high-retention content pillars',
                  '12 signature core topics & hooks',
                  '5-tier offer ladder architecture',
                  '30-day executable action calendar'
                ].map((p, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Module Preview Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">8 Master Modules Overview</h3>
                <span className="text-xs text-slate-400 font-mono">Curriculum Syllabus</span>
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
                          Module {mod.moduleNumber}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {mod.durationMinutes} min
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm leading-snug">{mod.title}</h4>
                      <p className="text-[11px] text-brand-gold font-mono mt-0.5">{mod.subtitle}</p>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {mod.keyInsights?.[0] || 'Strategic positioning framework'}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Interactive Workbook</span>
                      <Lock className="w-3.5 h-3.5 text-brand-champagne" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ================= UNLOCKED COURSE DASHBOARD & PLAYER ================= */
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    MASTERCLASS UNLOCKED
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  《紫微IP定位学》 Academy
                </h1>
                <p className="text-sm text-slate-300">
                  8 Master Modules guiding you from cognitive self-discovery to a 6-figure personal brand operating system.
                </p>
              </div>

              {/* Progress Card */}
              <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-4 min-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center font-bold text-slate-950 text-xs">
                  <div className="w-full h-full bg-surface-300 rounded-[10px] flex items-center justify-center font-black text-brand-champagne font-mono">
                    {progressPercent}%
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Course Progress</span>
                  <span className="text-xs font-bold text-white">
                    {completedCount} / {academyModules.length} Modules Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Post-Course Completion Elite Upsell Banner (Visible when >= 75%) */}
            {progressPercent >= 75 && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-violet/20 via-surface-200 to-surface-200 border border-brand-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-scale-up">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                    YOU HAVE THE STRATEGY. NOW IMPLEMENT IT.
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Ready for 1-on-1 Elite Business IP Implementation?
                  </h3>
                  <p className="text-xs text-slate-300">
                    Apply for our 8–12 week private advisory cohort to execute your offer architecture with lead brand strategists.
                  </p>
                </div>
                <Link
                  href="/elite"
                  className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold flex-shrink-0"
                >
                  Apply for Elite &rarr;
                </Link>
              </div>
            )}

            {/* Main Interactive Learning Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Module Syllabus (lg:col-span-4) */}
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
                            Module {mod.moduleNumber} · {mod.durationMinutes} min
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

              {/* Right Column: Module Viewer & Interactive Workbook (lg:col-span-8) */}
              {currentModule && (
                <div className="lg:col-span-8 space-y-6">
                  {/* Video Player Mock */}
                  <div className="relative aspect-video rounded-3xl bg-surface-100 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-300 via-transparent to-transparent opacity-80" />
                    <div className="w-16 h-16 rounded-full bg-brand-champagne text-slate-950 flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                    <div className="relative z-10 mt-4 space-y-1">
                      <span className="text-xs font-mono font-bold text-brand-champagne">
                        Module {currentModule.moduleNumber} · Video Masterclass
                      </span>
                      <h3 className="text-lg font-black text-white">{currentModule.title}</h3>
                    </div>
                  </div>

                  {/* Module Details & Workbook */}
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
                        {currentModule.completed ? '✓ Module Completed' : 'Mark as Completed'}
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2 text-xs">
                      <strong className="text-brand-champagne font-mono text-[10px] uppercase block">
                        Core Methodological Insights:
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

                    {/* Interactive Workbook Prompts */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" /> Interactive Implementation Workbook
                        </span>
                        <button
                          onClick={() => {
                            addToast('Workbook answers synced to your Blueprint!', 'success');
                            router.push('/blueprint');
                          }}
                          className="text-xs text-brand-champagne hover:underline font-mono font-bold"
                        >
                          Apply To My Blueprint &rarr;
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
                              placeholder={prompt.placeholder || 'Type your strategic response here...'}
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
