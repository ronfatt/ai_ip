'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Compass,
  Edit3,
  Check,
  Sparkles,
  Users,
  Volume2,
  Video,
  Layers,
  ArrowRight,
  Plus,
  Trash2,
  Save,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function BlueprintPage() {
  const router = useRouter();
  const { userProfile, setUserProfile, contentPillars, setContentPillars, addToast } = useAppState();

  const [isEditingPositioning, setIsEditingPositioning] = useState(false);
  const [positioningText, setPositioningText] = useState(userProfile.positioningStatement);

  const [newVoiceTag, setNewVoiceTag] = useState('');
  const [isAddingVoice, setIsAddingVoice] = useState(false);

  const handleSavePositioning = () => {
    setUserProfile((prev) => ({
      ...prev,
      positioningStatement: positioningText
    }));
    setIsEditingPositioning(false);
    addToast('Positioning statement updated!', 'success');
  };

  const handleAddVoiceTag = () => {
    if (!newVoiceTag.trim()) return;
    setUserProfile((prev) => ({
      ...prev,
      brandVoice: [...prev.brandVoice, newVoiceTag.trim()]
    }));
    setNewVoiceTag('');
    setIsAddingVoice(false);
    addToast('Brand voice tag added!', 'success');
  };

  const handleRemoveVoiceTag = (tag: string) => {
    setUserProfile((prev) => ({
      ...prev,
      brandVoice: prev.brandVoice.filter((t) => t !== tag)
    }));
  };

  const updatePillarRatio = (id: string, newRatio: number) => {
    setContentPillars((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ratioPercent: newRatio } : p))
    );
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                OPERATIONAL BLUEPRINT
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Your Personal Brand Blueprint
            </h1>
            <p className="text-sm text-slate-300">
              The foundational positioning, audience filter, brand tone, and content matrix for your brand.
            </p>
          </div>

          <button
            onClick={() => router.push('/studio')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Generate from Blueprint</span>
          </button>
        </div>

        {/* Section 1: Positioning Statement */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                1-Sentence Core Positioning
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne font-bold font-mono">
                High-Converting
              </span>
            </div>

            {!isEditingPositioning ? (
              <button
                onClick={() => setIsEditingPositioning(true)}
                className="text-xs text-brand-champagne hover:underline font-semibold flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Statement</span>
              </button>
            ) : (
              <button
                onClick={handleSavePositioning}
                className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 flex items-center gap-1"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            )}
          </div>

          {!isEditingPositioning ? (
            <blockquote className="text-lg sm:text-xl font-bold text-white leading-relaxed border-l-2 border-brand-champagne pl-4 py-1 italic">
              “{userProfile.positioningStatement}”
            </blockquote>
          ) : (
            <textarea
              rows={3}
              value={positioningText}
              onChange={(e) => setPositioningText(e.target.value)}
              className="w-full p-4 rounded-xl bg-surface-100 border border-brand-champagne text-white text-base focus:outline-none leading-relaxed"
            />
          )}

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span>🎯 <strong>Target:</strong> High-Ticket Service Founders</span>
            <span>💡 <strong>Mechanism:</strong> Personal Brand Intelligence</span>
            <span>🏆 <strong>Outcome:</strong> Inbound High-Ticket Retainers</span>
          </div>
        </div>

        {/* Section 2: IP Archetypes Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-champagne" />
              <span>IP Archetype Matrix</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Tri-Archetype System</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Primary */}
            <div className="p-6 rounded-2xl bg-surface-200/90 border border-brand-champagne/40 space-y-3 relative overflow-hidden">
              <div className="px-2.5 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne text-[10px] font-bold uppercase tracking-wider w-fit">
                Primary (70% Pull)
              </div>
              <h3 className="text-lg font-bold text-white">{userProfile.primaryArchetype.name}</h3>
              <p className="text-xs text-brand-gold font-medium">{userProfile.primaryArchetype.titleZh}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.primaryArchetype.description}</p>
              <div className="pt-2 text-[11px] text-slate-400">
                Growth Lever: <strong className="text-emerald-400">{userProfile.primaryArchetype.growthLever.slice(0, 45)}...</strong>
              </div>
            </div>

            {/* Secondary */}
            <div className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 space-y-3">
              <div className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[10px] font-bold uppercase tracking-wider w-fit">
                Secondary (20% Edge)
              </div>
              <h3 className="text-lg font-bold text-white">{userProfile.secondaryArchetype.name}</h3>
              <p className="text-xs text-blue-400 font-medium">{userProfile.secondaryArchetype.titleZh}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.secondaryArchetype.description}</p>
              <div className="pt-2 text-[11px] text-slate-400">
                Growth Lever: <strong className="text-blue-400">{userProfile.secondaryArchetype.growthLever.slice(0, 45)}...</strong>
              </div>
            </div>

            {/* Supporting */}
            <div className="p-6 rounded-2xl bg-surface-200/90 border border-white/10 space-y-3">
              <div className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-400 text-[10px] font-bold uppercase tracking-wider w-fit">
                Supporting (10% Depth)
              </div>
              <h3 className="text-lg font-bold text-white">{userProfile.supportingArchetype?.name || 'System Architect'}</h3>
              <p className="text-xs text-purple-400 font-medium">{userProfile.supportingArchetype?.titleZh || '系统架构师'}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.supportingArchetype?.description}</p>
              <div className="pt-2 text-[11px] text-slate-400">
                Growth Lever: <strong className="text-purple-400">Repeatable SOPs & SaaS Systems</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Ideal Audience Persona */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Ideal Audience Filter & Boundaries</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">Segmentation Matrix</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-surface-100 border border-emerald-500/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Primary Core Buyer
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.audience.primary}</p>
              <div className="pt-2 text-[10px] text-emerald-400 font-mono">Budget Capacity: RM 3k - RM 25k</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-100 border border-blue-500/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                Secondary Growth Audience
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.audience.secondary}</p>
              <div className="pt-2 text-[10px] text-blue-400 font-mono">Transitioning Corporate Specialists</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-100 border border-rose-500/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Intentionally Repel
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{userProfile.audience.avoid}</p>
              <div className="pt-2 text-[10px] text-rose-400 font-mono">Zero-budget spectators</div>
            </div>
          </div>
        </div>

        {/* Section 4: Brand Voice & Camera Personality */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Brand Voice */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-purple-400" />
                  <span>Brand Voice & Cadence</span>
                </h3>
                <button
                  onClick={() => setIsAddingVoice(!isAddingVoice)}
                  className="text-xs text-brand-champagne hover:underline font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Tag
                </button>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                The emotional and intellectual frequency of all published content.
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {userProfile.brandVoice.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl bg-surface-100 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2 group hover:border-brand-champagne/40 transition-colors"
                  >
                    <span>{tag}</span>
                    <button
                      onClick={() => handleRemoveVoiceTag(tag)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>

              {isAddingVoice && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newVoiceTag}
                    onChange={(e) => setNewVoiceTag(e.target.value)}
                    placeholder="e.g. Uncompromising"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-surface-100 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-champagne"
                  />
                  <button
                    onClick={handleAddVoiceTag}
                    className="px-3 py-1.5 rounded-lg bg-brand-champagne text-slate-950 text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-surface-100 text-[11px] text-slate-300 border border-white/5">
              💡 <strong>Tone Rule:</strong> Speak like a trusted advisor giving a private briefing to a CEO.
            </div>
          </div>

          {/* Camera Personality */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Video className="w-4 h-4 text-emerald-400" />
              <span>Camera Personality Directives</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">
                  Recommended Setups:
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {userProfile.cameraPersonality.recommended.map((rec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-rose-400 block uppercase tracking-wider text-[10px]">
                  Avoid at All Costs:
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {userProfile.cameraPersonality.avoid.map((av, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{av}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: 4 Editable Content Pillars */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                Matrix
              </span>
              <h2 className="text-xl font-bold text-white">
                4 Core Content Pillars & Allocation Ratios
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Drag & Adjust % &rarr;
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-2xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-brand-champagne text-[10px] font-mono font-bold">
                      {pillar.transformation}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">{pillar.ratioPercent}%</span>
                  </div>

                  <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">{pillar.chineseTitle}</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Weekly Weight</span>
                    <span className="font-mono">{pillar.ratioPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={pillar.ratioPercent}
                    onChange={(e) => updatePillarRatio(pillar.id, Number(e.target.value))}
                    className="w-full accent-brand-champagne h-1.5 bg-white/10 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
