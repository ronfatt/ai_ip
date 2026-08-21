'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Database,
  Sparkles,
  Search,
  Filter,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  BookOpen,
  ArrowRight,
  Copy,
  Check,
  Compass,
  X,
  ExternalLink
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import {
  ZIWEI_MAJOR_STARS,
  ZIWEI_PALACES,
  STEM_TRANSFORMATIONS,
  ZIWEI_AUXILIARY_STARS,
  ZIWEI_CLASSIC_PATTERNS
} from '@/lib/ziwei-database';
import { ZiweiMajorStar, ZiweiPalace, StemTransformation, ZiweiAuxiliaryStar, ZiweiClassicPattern } from '@/types/ziwei-database';
import { copyToClipboard } from '@/lib/utils';
import { useAppState } from '@/context/AppStateContext';

export default function DatabasePage() {
  const router = useRouter();
  const { addToast } = useAppState();

  const [activeCategory, setActiveCategory] = useState<'stars' | 'palaces' | 'stems' | 'auxiliary' | 'patterns'>('stars');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('all');

  // Drawer / Modal detail inspector
  const [selectedStar, setSelectedStar] = useState<ZiweiMajorStar | null>(null);
  const [selectedPalace, setSelectedPalace] = useState<ZiweiPalace | null>(null);
  const [selectedPattern, setSelectedPattern] = useState<ZiweiClassicPattern | null>(null);

  const handleCopy = (text: string, label: string) => {
    copyToClipboard(text);
    addToast(`${label} copied!`, 'success');
  };

  const handleSendToStudio = (topic: string) => {
    router.push(`/studio?topic=${encodeURIComponent(topic)}`);
  };

  // Filtered stars
  const filteredStars = ZIWEI_MAJOR_STARS.filter((star) => {
    const matchesSearch =
      star.nameZh.includes(searchQuery) ||
      star.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      star.ipArchetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
      star.symbolicTitle.includes(searchQuery);
    const matchesElement = selectedElement === 'all' || star.element === selectedElement;
    return matchesSearch && matchesElement;
  });

  // Filtered palaces
  const filteredPalaces = ZIWEI_PALACES.filter((p) =>
    p.nameZh.includes(searchQuery) ||
    p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.businessIpMeaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtered auxiliary stars
  const filteredAux = ZIWEI_AUXILIARY_STARS.filter((a) =>
    a.nameZh.includes(searchQuery) ||
    a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.symbolism.includes(searchQuery)
  );

  // Filtered patterns
  const filteredPatterns = ZIWEI_CLASSIC_PATTERNS.filter((pat) =>
    pat.nameZh.includes(searchQuery) ||
    pat.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pat.modernIpModel.commercialArchetype.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-2.5 py-0.5 rounded-full border border-brand-champagne/30">
                STRATEGIC METAPHYSICS KNOWLEDGE BASE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Professional Zi Wei Dou Shu Database
            </h1>
            <p className="text-sm text-slate-300">
              Complete reference library mapping 14 Major Stars, 12 Palaces, 10 Heavenly Stems 4-Transformations, and Classic IP Patterns into high-ticket business strategy.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">
              Database Records: <strong className="text-brand-champagne">14 Stars · 12 Palaces · 10 Stems · 12 Aux</strong>
            </span>
          </div>
        </div>

        {/* Category Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-surface-200 p-1.5 rounded-2xl border border-white/10">
            {[
              { id: 'stars', label: '14 Major Stars (十四正星)' },
              { id: 'palaces', label: '12 Palaces (十二宫位)' },
              { id: 'stems', label: '10 Stems 4-Transformations (十天干四化)' },
              { id: 'auxiliary', label: 'Auxiliary Stars (吉星与煞星)' },
              { id: 'patterns', label: 'Classic IP Patterns (经典商业格局)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setSearchQuery('');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-brand-champagne text-slate-950 shadow-md scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search star, palace, keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-200 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-champagne"
            />
          </div>
        </div>

        {/* ===================== TAB 1: 14 MAJOR STARS ===================== */}
        {activeCategory === 'stars' && (
          <div className="space-y-6">
            {/* Five Elements Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-semibold text-[11px] flex items-center gap-1">
                <Filter className="w-3 h-3 text-brand-champagne" /> Element Filter:
              </span>
              {['all', 'Wood', 'Fire', 'Earth', 'Metal', 'Water'].map((elem) => (
                <button
                  key={elem}
                  onClick={() => setSelectedElement(elem)}
                  className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all ${
                    selectedElement === elem
                      ? 'bg-brand-violet text-white border-brand-violet'
                      : 'bg-surface-200 text-slate-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  {elem === 'all' ? 'All (全部五行)' : elem}
                </button>
              ))}
            </div>

            {/* Stars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredStars.map((star) => (
                <div
                  key={star.id}
                  onClick={() => setSelectedStar(star)}
                  className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 hover:border-brand-champagne/50 transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:translate-y-[-2px] shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-9 h-9 rounded-xl bg-surface-100 border border-white/10 flex items-center justify-center font-black text-brand-champagne text-base group-hover:scale-105 transition-transform">
                          {star.nameZh}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-brand-champagne transition-colors">
                            {star.nameEn}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {star.pinyin} · {star.element} ({star.yinYang})
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono">
                        {star.category}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-brand-gold mt-1 mb-2">
                      {star.symbolicTitle}
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-100/90 border border-white/5 space-y-1 mb-3">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">IP Archetype:</span>
                      <p className="text-xs font-bold text-slate-200 leading-snug">{star.ipArchetype}</p>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {star.businessTranslation.corePositioning}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] text-emerald-400 font-mono">
                      {star.businessTranslation.recommendedOfferTier.split('&')[0]}
                    </span>
                    <span className="text-brand-champagne font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 2: 12 PALACES ===================== */}
        {activeCategory === 'palaces' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPalaces.map((palace) => (
              <div
                key={palace.id}
                onClick={() => setSelectedPalace(palace)}
                className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 hover:border-brand-champagne/50 transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:translate-y-[-2px] shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-champagne">
                      Palace 0{palace.palaceOrder}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      12 Core Sectors
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-brand-champagne transition-colors">
                    {palace.nameZh} ({palace.nameEn.split(' ')[0]})
                  </h3>
                  <div className="text-xs font-semibold text-brand-gold mt-0.5 mb-2">
                    {palace.businessIpMeaning}
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3">
                    {palace.traditionalMeaning}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">Directives: Positioning · Content · Offer</span>
                  <span className="text-brand-champagne font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===================== TAB 3: 10 STEMS 4-TRANSFORMATIONS ===================== */}
        {activeCategory === 'stems' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-surface-200 border border-brand-champagne/30 text-xs text-slate-300 leading-relaxed">
              💡 <strong>The Four Transformations System (十天干四化):</strong> Each of the 10 Heavenly Stems activates 4 specific stars into <strong>Lu (禄 - Attraction)</strong>, <strong>Quan (权 - Authority)</strong>, <strong>Ke (科 - Trust)</strong>, and <strong>Ji (忌 - Blind Spot Breakthrough)</strong>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STEM_TRANSFORMATIONS.map((stem) => (
                <div
                  key={stem.stemZh}
                  className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 shadow-lg"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-brand-champagne font-mono">
                        {stem.stemZh} ({stem.stemEn})
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold">
                        {stem.mnemonic}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{stem.pinyin}</span>
                  </div>

                  <div className="text-xs font-bold text-white">
                    Annual Strategy Theme: <span className="text-brand-gold">{stem.annualEnergyTheme}</span>
                  </div>

                  {/* 4 Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <span className="font-bold text-emerald-400 block font-mono">🌟 LU (禄) — {stem.luStar}</span>
                      <p className="text-slate-300 text-[11px] leading-snug">{stem.commercialStrategy.luInsight}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                      <span className="font-bold text-amber-400 block font-mono">👑 QUAN (权) — {stem.quanStar}</span>
                      <p className="text-slate-300 text-[11px] leading-snug">{stem.commercialStrategy.quanInsight}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                      <span className="font-bold text-blue-400 block font-mono">🛡️ KE (科) — {stem.keStar}</span>
                      <p className="text-slate-300 text-[11px] leading-snug">{stem.commercialStrategy.keInsight}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 space-y-1">
                      <span className="font-bold text-pink-400 block font-mono">⚡ JI (忌) — {stem.jiStar}</span>
                      <p className="text-slate-300 text-[11px] leading-snug">{stem.commercialStrategy.jiInsight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 4: AUXILIARY STARS ===================== */}
        {activeCategory === 'auxiliary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAux.map((aux) => (
              <div
                key={aux.id}
                className={`p-6 rounded-3xl bg-surface-200/90 border transition-all space-y-4 shadow-lg ${
                  aux.category === 'Lucky6' ? 'border-emerald-500/30' : 'border-amber-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center font-black text-white text-sm">
                      {aux.nameZh}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{aux.nameEn}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{aux.pinyin} · {aux.element}</div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                      aux.category === 'Lucky6'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {aux.category === 'Lucky6' ? '六吉星 (Lucky 6)' : '六煞星 (Sha 6)'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-surface-100 text-xs space-y-1">
                  <span className="font-bold text-brand-champagne block">Strategic Superpower / Bottleneck:</span>
                  <p className="text-slate-200 leading-snug">{aux.businessTranslation.superpowerOrBottleneck}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div>
                    <strong className="text-slate-400 font-mono text-[10px]">CONTENT IMPACT:</strong>
                    <p className="leading-snug text-[11px]">{aux.businessTranslation.contentStrategyImpact}</p>
                  </div>
                  <div>
                    <strong className="text-slate-400 font-mono text-[10px]">RECOMMENDED CREATOR ACTION:</strong>
                    <p className="leading-snug text-[11px] text-emerald-300">{aux.businessTranslation.recommendedAction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===================== TAB 5: CLASSIC IP PATTERNS ===================== */}
        {activeCategory === 'patterns' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPatterns.map((pat) => (
              <div
                key={pat.id}
                onClick={() => setSelectedPattern(pat)}
                className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 hover:border-brand-champagne transition-all cursor-pointer group flex flex-col justify-between space-y-4 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-bold border border-brand-champagne/30">
                      Classic IP Pattern (格局)
                    </span>
                    <span className="text-xs font-mono text-slate-400">High-Leverage Model</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-brand-champagne transition-colors">
                    {pat.nameZh} — {pat.nameEn}
                  </h3>

                  <div className="text-xs font-bold text-brand-gold mt-1 mb-3">
                    Commercial Archetype: {pat.modernIpModel.commercialArchetype}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {pat.configurationDescription}
                  </p>

                  <div className="p-3 rounded-xl bg-surface-100 border border-white/5 text-xs text-slate-200 space-y-1">
                    <span className="font-bold text-emerald-400 block font-mono text-[10px]">REAL-WORLD ANALOGY:</span>
                    <p className="text-xs leading-snug">{pat.modernIpModel.realWorldAnalogy}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Offer Model: {pat.modernIpModel.highestRoiOfferModel.split('&')[0]}</span>
                  <span className="text-brand-champagne font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Blueprint &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===================== STAR DETAIL MODAL / DRAWER ===================== */}
        {selectedStar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedStar(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center text-2xl font-black text-slate-950">
                  <div className="w-full h-full bg-surface-300 rounded-[14px] flex items-center justify-center text-brand-champagne">
                    {selectedStar.nameZh}
                  </div>
                </span>
                <div>
                  <h2 className="text-2xl font-black text-white">{selectedStar.nameEn}</h2>
                  <p className="text-xs text-brand-gold font-mono">
                    {selectedStar.pinyin} · {selectedStar.element} ({selectedStar.yinYang}) · {selectedStar.symbolicTitle}
                  </p>
                </div>
              </div>

              {/* IP Archetype */}
              <div className="p-4 rounded-2xl bg-surface-200 border border-brand-champagne/30 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne block">
                  IP Archetype & Positioning
                </span>
                <div className="text-base font-bold text-white">{selectedStar.ipArchetype}</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {selectedStar.businessTranslation.corePositioning}
                </p>
              </div>

              {/* Grid Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block font-mono text-[10px]">NATURAL AUTHORITY LEVER</span>
                  <p className="text-slate-300">{selectedStar.businessTranslation.naturalAuthorityLever}</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-400 block font-mono text-[10px]">MONETIZATION STRENGTH</span>
                  <p className="text-slate-300">{selectedStar.businessTranslation.monetizationStrength}</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-purple-400 block font-mono text-[10px]">CAMERA & VOICE CADENCE</span>
                  <p className="text-slate-300">{selectedStar.businessTranslation.cameraAndVoiceStyle}</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-pink-400 block font-mono text-[10px]">POTENTIAL BLIND SPOT</span>
                  <p className="text-slate-300">{selectedStar.businessTranslation.potentialBlindSpot}</p>
                </div>
              </div>

              {/* Signature Content Hooks */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne block">
                  Signature Content Hooks & Prompts:
                </span>
                <div className="space-y-2 text-xs">
                  {selectedStar.businessTranslation.signatureContentAngles.map((angle, i) => (
                    <div key={i} className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between gap-3">
                      <span className="text-slate-200">{angle}</span>
                      <button
                        onClick={() => handleSendToStudio(angle.replace(/[“”]/g, ''))}
                        className="px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-surface-50 text-brand-champagne font-bold text-[11px] flex-shrink-0"
                      >
                        Draft in Studio
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PALACE DETAIL MODAL ===================== */}
        {selectedPalace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedPalace(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono font-bold text-brand-champagne">
                  Palace 0{selectedPalace.palaceOrder}
                </span>
                <h2 className="text-2xl font-black text-white">{selectedPalace.nameZh} ({selectedPalace.nameEn})</h2>
                <p className="text-xs text-brand-gold font-medium mt-0.5">{selectedPalace.businessIpMeaning}</p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-white block mb-1">Traditional Metaphysical Meaning:</span>
                {selectedPalace.traditionalMeaning}
              </div>

              {/* Strategic Diagnostic Questions */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne block">
                  Diagnostic Strategic Questions:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedPalace.strategicQuestions.map((q, i) => (
                    <li key={i} className="p-2.5 rounded-xl bg-surface-200 border border-white/5 flex items-start gap-2">
                      <span className="text-brand-champagne font-bold">?</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operational Directives */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block font-mono text-[10px]">FOR POSITIONING</span>
                  <p className="text-slate-300 text-[11px]">{selectedPalace.operationalDirectives.forPositioning}</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-blue-400 block font-mono text-[10px]">FOR CONTENT</span>
                  <p className="text-slate-300 text-[11px]">{selectedPalace.operationalDirectives.forContentStrategy}</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-400 block font-mono text-[10px]">FOR MONETIZATION</span>
                  <p className="text-slate-300 text-[11px]">{selectedPalace.operationalDirectives.forMonetization}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PATTERN DETAIL MODAL ===================== */}
        {selectedPattern && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedPattern(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-bold border border-brand-champagne/30">
                  Classic Pattern Teardown
                </span>
                <h2 className="text-2xl font-black text-white mt-2">
                  {selectedPattern.nameZh} — {selectedPattern.nameEn}
                </h2>
                <p className="text-xs text-brand-gold font-medium mt-0.5">
                  Commercial Archetype: {selectedPattern.modernIpModel.commercialArchetype}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-brand-champagne/30 text-xs text-slate-200 leading-relaxed italic">
                “{selectedPattern.traditionalAppraisal}”
              </div>

              {/* Grid Blueprint */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block font-mono text-[10px]">CORE ADVANTAGE</span>
                  <p className="text-slate-300">{selectedPattern.modernIpModel.coreCompetitiveAdvantage}</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-emerald-400 block font-mono text-[10px]">HIGHEST ROI OFFER</span>
                  <p className="text-slate-300">{selectedPattern.modernIpModel.highestRoiOfferModel}</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-purple-400 block font-mono text-[10px]">CONTENT BLUEPRINT</span>
                  <p className="text-slate-300">{selectedPattern.modernIpModel.contentDistributionBlueprint}</p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                  <span className="font-bold text-pink-400 block font-mono text-[10px]">RISK MITIGATION</span>
                  <p className="text-slate-300">{selectedPattern.modernIpModel.riskMitigation}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-champagne/10 border border-brand-champagne/30 text-xs text-slate-200">
                🚀 <strong>Real-World Benchmark:</strong> {selectedPattern.modernIpModel.realWorldAnalogy}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
