'use client';

import React, { useState } from 'react';
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
  Award
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function AcademyPage() {
  const { academyModules, toggleModuleCompletion, updateWorkbookAnswer, addToast } = useAppState();
  const [selectedModuleId, setSelectedModuleId] = useState<string>(academyModules[0].id);

  const currentModule = academyModules.find((m) => m.id === selectedModuleId) || academyModules[0];
  const completedCount = academyModules.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / academyModules.length) * 100);

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                METHODOLOGY MASTERY
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ZIWEI IP Academy
            </h1>
            <p className="text-sm text-slate-300">
              8 Master Modules designed to guide you from cognitive self-discovery to a 6-figure personal brand operating system.
            </p>
          </div>

          {/* Progress Card */}
          <div className="p-3.5 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-4 min-w-[200px]">
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

        {/* Main Grid: Left Module List / Right Active Lesson Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Module Syllabus Navigation */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Course Curriculum
            </span>

            <div className="space-y-2">
              {academyModules.map((mod) => {
                const isSelected = selectedModuleId === mod.id;

                return (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-surface-100 border-brand-champagne shadow-md'
                        : 'bg-surface-200/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                          mod.completed
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : isSelected
                            ? 'bg-brand-champagne text-slate-950'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {mod.completed ? <CheckCircle2 className="w-4 h-4" /> : mod.moduleNumber}
                      </div>

                      <div>
                        <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {mod.title}
                        </div>
                        <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {mod.durationMinutes}m
                          </span>
                          {mod.completed && <span className="text-emerald-400 font-bold">Completed</span>}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-brand-champagne' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Lesson Workspace */}
          <div className="lg:col-span-8 space-y-6">
            {/* Video Placeholder Player */}
            <div className="relative rounded-3xl overflow-hidden bg-surface-300 border border-white/10 aspect-video flex items-center justify-center group shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${currentModule.videoPlaceholderUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-300 via-surface-300/40 to-transparent" />

              {/* Play Button */}
              <button
                onClick={() => addToast(`Playing Module ${currentModule.moduleNumber} Stream...`, 'info')}
                className="relative z-10 w-16 h-16 rounded-full bg-brand-champagne text-slate-950 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
              >
                <Play className="w-7 h-7 fill-current ml-1" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono font-semibold">
                  Module {currentModule.moduleNumber} · {currentModule.durationMinutes} Minutes
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brand-champagne/20 backdrop-blur-md text-brand-champagne font-bold">
                  4K Master Video
                </span>
              </div>
            </div>

            {/* Lesson Title & Completion Toggle */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    LESSON OVERVIEW
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {currentModule.title}
                  </h2>
                  <p className="text-xs text-brand-gold font-medium mt-0.5">{currentModule.subtitle}</p>
                </div>

                <button
                  onClick={() => toggleModuleCompletion(currentModule.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 self-start sm:self-auto ${
                    currentModule.completed
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                      : 'bg-brand-champagne text-slate-950 border-brand-champagne hover:bg-brand-gold'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{currentModule.completed ? 'Marked Completed' : 'Mark as Completed'}</span>
                </button>
              </div>

              {/* Key Insights */}
              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne block">
                  🎯 Core Takeaways:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentModule.keyInsights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-champagne font-bold">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lesson Text */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Lesson Framework Notes</h3>
                <div className="whitespace-pre-line text-xs sm:text-sm text-slate-300 leading-relaxed font-sans p-4 rounded-2xl bg-surface-100 border border-white/5">
                  {currentModule.lessonContent}
                </div>
              </div>

              {/* Action Workbook */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Action Workbook & Exercises</span>
                </h3>

                <div className="space-y-3">
                  {currentModule.workbookPrompts.map((prompt) => (
                    <div key={prompt.id} className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
                      <label className="text-xs font-bold text-slate-200 block">{prompt.question}</label>
                      <textarea
                        rows={2}
                        value={prompt.userAnswer || ''}
                        onChange={(e) => updateWorkbookAnswer(currentModule.id, prompt.id, e.target.value)}
                        placeholder={prompt.placeholder}
                        className="w-full p-3 rounded-xl bg-surface-200 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-champagne"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-brand-champagne/10 border border-brand-champagne/30 text-xs text-slate-200 flex items-center justify-between">
                  <span>
                    ⚡ <strong>Action Task:</strong> {currentModule.actionTask}
                  </span>
                  <button
                    onClick={() => addToast('Workbook progress saved!', 'success')}
                    className="text-brand-champagne hover:underline font-bold text-xs ml-3 flex-shrink-0"
                  >
                    Save Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
