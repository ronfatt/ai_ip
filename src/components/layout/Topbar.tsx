'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Crown, Bell, Search, Compass } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

export const Topbar: React.FC = () => {
  const { userProfile, openUpgradeModal, activePlan } = useAppState();

  return (
    <header className="sticky top-0 z-20 h-16 bg-surface-300/80 backdrop-blur-xl border-b border-surface-border flex items-center justify-between px-4 sm:px-6">
      {/* Left info / Mobile brand */}
      <div className="flex items-center gap-3">
        <Link href="/" className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <span className="font-extrabold text-sm text-white tracking-tight">ZIWEI IP</span>
        </Link>

        {/* Global Strategy Tag */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-surface-100 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Archetype: <strong className="text-brand-champagne">{userProfile.primaryArchetype.name}</strong>
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            Momentum: <strong className="text-slate-200 font-mono">{userProfile.momentumScore}/100</strong> (+{userProfile.momentumChange}%)
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick studio jump */}
        <Link
          href="/studio"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-violet/15 hover:bg-brand-violet/25 text-brand-violet border border-brand-violet/30 text-xs font-semibold transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Script</span>
        </Link>

        {/* Upgrade Pill */}
        <button
          onClick={() => openUpgradeModal('Direct Upgrade via Topbar')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm"
        >
          <Crown className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Upgrade</span>
          <span className="font-mono text-[11px] opacity-80 uppercase">({activePlan})</span>
        </button>

        {/* Link to Blueprint quick view */}
        <Link
          href="/blueprint"
          title="Personal Brand Blueprint"
          className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <Compass className="w-4 h-4" />
        </Link>

        {/* User Mini Avatar */}
        <Link
          href="/account"
          className="w-8 h-8 rounded-full bg-surface-50 border border-white/20 flex items-center justify-center text-xs font-bold text-brand-champagne hover:scale-105 transition-transform"
        >
          AT
        </Link>
      </div>
    </header>
  );
};
