'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  Copy,
  Bookmark,
  RefreshCw,
  Download,
  Share2,
  Check,
  Video,
  FileText,
  Layers,
  Sliders,
  Maximize2
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { TransformationKey, GeneratedScript } from '@/types/database';
import { generateScriptContent } from '@/lib/ai-generator';
import { copyToClipboard, triggerConfetti } from '@/lib/utils';

const CONTENT_TYPES: ('Opinion' | 'Knowledge' | 'Story' | 'Case Study' | 'Sales' | 'Educational' | 'Behind The Scenes')[] = [
  'Opinion',
  'Knowledge',
  'Story',
  'Case Study',
  'Sales',
  'Educational',
  'Behind The Scenes'
];

const PRESET_TOPICS = [
  'Why business owners should stop copying generic influencers',
  'How to restructure an RM1,500 hourly rate into an RM18,000 retainer',
  'The invisible positioning trap keeping senior consultants underpriced',
  'Why having 15 years experience is secretly ruining your short-form video hooks',
  'The exact 3-step diagnostic audit I run before taking any new client'
];

function StudioContent() {
  const searchParams = useSearchParams();
  const { userProfile, savedScripts, saveScript, addToast } = useAppState();

  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState<'Opinion' | 'Knowledge' | 'Story' | 'Case Study' | 'Sales' | 'Educational' | 'Behind The Scenes'>('Opinion');
  const [transformation, setTransformation] = useState<TransformationKey>('QUAN');

  const [isGenerating, setIsGenerating] = useState(false);
  const [currentScript, setCurrentScript] = useState<GeneratedScript | null>(null);
  const [activeOutputTab, setActiveOutputTab] = useState<'scripts' | 'hooks' | 'broll' | 'caption'>('scripts');
  const [scriptLengthTab, setScriptLengthTab] = useState<'60s' | '30s'>('60s');

  useEffect(() => {
    const urlTrans = searchParams?.get('trans') as TransformationKey | null;
    const urlTopic = searchParams?.get('topic');

    if (urlTrans && ['LU', 'QUAN', 'KE', 'JI'].includes(urlTrans)) {
      setTransformation(urlTrans);
    }
    if (urlTopic) {
      setTopic(decodeURIComponent(urlTopic));
    } else if (savedScripts.length > 0 && !currentScript) {
      setCurrentScript(savedScripts[0]);
    }
  }, [searchParams]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentScript(null);

    setTimeout(() => {
      const generated = generateScriptContent({
        topic: topic || PRESET_TOPICS[0],
        contentType,
        transformation,
        userName: userProfile.name,
        userRole: userProfile.role,
        archetype: userProfile.primaryArchetype.name
      });

      setCurrentScript(generated);
      setIsGenerating(false);
      triggerConfetti();
      addToast('AI Script generated successfully!', 'success');
    }, 1200);
  };

  const handleCopyText = (text: string, label: string) => {
    copyToClipboard(text);
    addToast(`${label} copied to clipboard!`, 'success');
  };

  const handleSaveToLibrary = () => {
    if (!currentScript) return;
    saveScript({ ...currentScript, saved: true });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-violet bg-brand-violet/10 px-2.5 py-0.5 rounded-full border border-brand-violet/30">
              CREATOR WORKSPACE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            AI Content Studio
          </h1>
          <p className="text-sm text-slate-300">
            Transform your domain expertise into high-converting scripts, hooks, and shot lists tailored to your IP Archetype.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono">
            Model: <strong className="text-brand-champagne">Strategic Creator v2.6</strong>
          </span>
        </div>
      </div>

      {/* Studio Input Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6">
        {/* Main Topic Input */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-white flex items-center justify-between">
            <span>What do you want to talk about today?</span>
            <span className="text-xs text-brand-champagne font-normal font-mono">Topic / Proposition</span>
          </label>
          <div className="relative">
            <textarea
              rows={2}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Why business owners should stop copying generic influencers..."
              className="w-full p-4 rounded-2xl bg-surface-100 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne transition-colors text-sm sm:text-base leading-relaxed"
            />
          </div>

          {/* Quick Topic Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] text-slate-400 font-semibold">Presets:</span>
            {PRESET_TOPICS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setTopic(preset)}
                className="px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-surface-50 text-[11px] text-slate-300 hover:text-white border border-white/5 transition-colors truncate max-w-xs"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Selectors Grid: Content Type & Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 border-t border-white/5">
          {/* Content Type Selector */}
          <div className="md:col-span-6 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              1. Select Content Format
            </label>
            <div className="flex flex-wrap gap-1.5">
              {CONTENT_TYPES.map((type) => {
                const isSelected = contentType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setContentType(type)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-brand-violet text-white shadow-md'
                        : 'bg-surface-100 text-slate-400 hover:text-slate-200 border border-white/5'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transformation Selector */}
          <div className="md:col-span-6 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              2. Select Transformation Engine (四化)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'LU', name: 'LU (Attract)', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
                { key: 'QUAN', name: 'QUAN (Authority)', color: 'border-amber-500/40 text-amber-300 bg-amber-500/10' },
                { key: 'KE', name: 'KE (Trust)', color: 'border-blue-500/40 text-blue-300 bg-blue-500/10' },
                { key: 'JI', name: 'JI (Breakthrough)', color: 'border-pink-500/40 text-pink-300 bg-pink-500/10' },
              ].map((t) => {
                const isSelected = transformation === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setTransformation(t.key as TransformationKey)}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      isSelected
                        ? `${t.color} ring-2 ring-brand-champagne/40 scale-105 shadow-md`
                        : 'bg-surface-100 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {t.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Archetype: <strong className="text-slate-200">{userProfile.primaryArchetype.name}</strong> · Authority {userProfile.scores.authority}
          </span>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Synthesizing High-Ticket Script...</span>
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Generate Full Script & Hooks</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* AI Output Workspace */}
      {currentScript && (
        <div className="space-y-6 animate-fade-in">
          {/* Output Navigation & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-200 border border-white/10">
            {/* Output Tabs */}
            <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-xl border border-white/5 overflow-x-auto">
              <button
                onClick={() => setActiveOutputTab('scripts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeOutputTab === 'scripts' ? 'bg-brand-champagne text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🎬 Video Scripts
              </button>
              <button
                onClick={() => setActiveOutputTab('hooks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeOutputTab === 'hooks' ? 'bg-brand-champagne text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🪝 3 Hook Variations
              </button>
              <button
                onClick={() => setActiveOutputTab('broll')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeOutputTab === 'broll' ? 'bg-brand-champagne text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🎥 B-Roll & Shots
              </button>
              <button
                onClick={() => setActiveOutputTab('caption')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeOutputTab === 'caption' ? 'bg-brand-champagne text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                📝 Caption & Thumbnail
              </button>
            </div>

            {/* Utility Actions */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handleSaveToLibrary}
                className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <Bookmark className="w-3.5 h-3.5 text-brand-champagne" />
                <span>Save to Library</span>
              </button>

              <button
                onClick={handleGenerate}
                className="p-2 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-400 hover:text-white border border-white/10 transition-colors"
                title="Regenerate"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TAB 1: SCRIPTS */}
          {activeOutputTab === 'scripts' && (
            <div className="space-y-6">
              {/* Core Idea Card */}
              <div className="p-5 rounded-2xl bg-surface-200 border border-brand-champagne/30 space-y-1 text-xs">
                <span className="font-bold uppercase tracking-wider text-brand-champagne block">
                  💡 Core Intellectual Premise:
                </span>
                <p className="text-slate-200 font-medium text-sm leading-relaxed">{currentScript.coreIdea}</p>
              </div>

              {/* Length Switcher & Script Content */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-white/10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setScriptLengthTab('60s')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        scriptLengthTab === '60s'
                          ? 'bg-brand-violet text-white'
                          : 'bg-surface-100 text-slate-400 hover:text-white'
                      }`}
                    >
                      60-Second In-Depth Script
                    </button>
                    <button
                      onClick={() => setScriptLengthTab('30s')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        scriptLengthTab === '30s'
                          ? 'bg-brand-violet text-white'
                          : 'bg-surface-100 text-slate-400 hover:text-white'
                      }`}
                    >
                      30-Second Punchy Script
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      handleCopyText(
                        scriptLengthTab === '60s' ? currentScript.script60s : currentScript.script30s,
                        'Script'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-bold border border-white/10 flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5 text-brand-champagne" />
                    <span>Copy Full Script</span>
                  </button>
                </div>

                <div className="whitespace-pre-line text-sm sm:text-base text-slate-200 leading-loose font-sans p-4 rounded-2xl bg-surface-300 border border-white/5">
                  {scriptLengthTab === '60s' ? currentScript.script60s : currentScript.script30s}
                </div>

                {/* High-Converting CTA Box */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-emerald-400 block mb-0.5">Recommended Call To Action (CTA):</span>
                    <p className="text-slate-200 font-medium">{currentScript.cta}</p>
                  </div>
                  <button
                    onClick={() => handleCopyText(currentScript.cta, 'CTA')}
                    className="text-emerald-300 hover:underline font-bold ml-4 flex-shrink-0"
                  >
                    Copy CTA
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOOKS */}
          {activeOutputTab === 'hooks' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-white/10 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">3 Tailored High-Retention Hook Formulas</h3>
                <span className="text-xs text-slate-400 font-mono">Calibrated for {currentScript.transformation}</span>
              </div>

              <div className="space-y-3">
                {currentScript.hookOptions.map((hook, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-surface-100 border border-white/5 hover:border-brand-champagne/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-champagne/15 text-brand-champagne font-bold">
                          Hook 0{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{hook.style}</span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">Retention: {hook.score}%</span>
                      </div>
                      <p className="text-sm font-medium text-slate-200 leading-snug">“{hook.text}”</p>
                    </div>

                    <button
                      onClick={() => handleCopyText(hook.text, `Hook 0${idx + 1}`)}
                      className="px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-slate-300 text-xs font-semibold border border-white/10 flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Copy className="w-3.5 h-3.5 text-brand-champagne" />
                      <span>Copy</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: B-ROLL & SHOT LIST */}
          {activeOutputTab === 'broll' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* B-Roll Ideas */}
              <div className="p-6 rounded-3xl bg-surface-200 border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span>Visual B-Roll Ideas (No Hype)</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {currentScript.bRollIdeas.map((idea, i) => (
                    <li key={i} className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-start gap-2">
                      <span className="text-brand-violet font-bold">🎬</span>
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shot List Suggestions */}
              <div className="p-6 rounded-3xl bg-surface-200 border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>60-Second Framing & Cut Timing</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {currentScript.shotSuggestions.map((shot, i) => (
                    <li key={i} className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">⏱️</span>
                      <span>{shot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: CAPTION & THUMBNAIL */}
          {activeOutputTab === 'caption' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Thumbnail Title */}
              <div className="md:col-span-5 p-6 rounded-3xl bg-surface-200 border border-white/10 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">High-CTR Thumbnail Title</h3>
                  <div className="p-6 rounded-2xl bg-surface-300 border border-brand-champagne/30 text-center space-y-2">
                    <span className="text-[10px] font-mono uppercase text-brand-champagne tracking-widest block">
                      COVER TEXT
                    </span>
                    <h4 className="text-2xl font-black text-white font-mono tracking-tight">
                      {currentScript.thumbnailTitle}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyText(currentScript.thumbnailTitle, 'Thumbnail Title')}
                  className="w-full py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-bold border border-white/10 flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-brand-champagne" />
                  <span>Copy Thumbnail Text</span>
                </button>
              </div>

              {/* Social Caption */}
              <div className="md:col-span-7 p-6 rounded-3xl bg-surface-200 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">Social Media Caption & Hashtags</h3>
                  <button
                    onClick={() => handleCopyText(currentScript.caption, 'Social Caption')}
                    className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-bold border border-white/10 flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5 text-brand-champagne" />
                    <span>Copy Caption</span>
                  </button>
                </div>

                <div className="whitespace-pre-line text-xs text-slate-300 leading-relaxed p-4 rounded-2xl bg-surface-300 border border-white/5 max-h-72 overflow-y-auto">
                  {currentScript.caption}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function StudioPage() {
  return (
    <AppShell>
      <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading AI Studio...</div>}>
        <StudioContent />
      </Suspense>
    </AppShell>
  );
}
