'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Crown, Bell, Search, Compass } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

export const Topbar: React.FC = () => {
  const { userProfile, openUpgradeModal, activePlan } = useAppState();

  const planNameZh: Record<string, string> = {
    free: '免费版',
    pro: 'PRO会员',
    elite: '私享陪跑'
  };

  return (
    <header className="sticky top-0 z-20 h-16 bg-surface-300/80 backdrop-blur-xl border-b border-surface-border flex items-center justify-between px-4 sm:px-6">
      {/* 移动端品牌与全局战略标签 */}
      <div className="flex items-center gap-3">
        <Link href="/" className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <span className="font-extrabold text-sm text-white tracking-tight">ZIWEI IP</span>
        </Link>

        {/* 全局战略状态指示 */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-surface-100 border border-white/10 text-slate-300 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            主定位原型: <strong className="text-brand-champagne">{userProfile.primaryArchetype.titleZh || userProfile.primaryArchetype.name}</strong>
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            战略势能: <strong className="text-slate-200 font-mono">{userProfile.momentumScore}/100</strong> (+{userProfile.momentumChange}%)
          </span>
        </div>
      </div>

      {/* 右侧快捷操作按钮 */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* 快速创作 */}
        <Link
          href="/studio"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-violet/15 hover:bg-brand-violet/25 text-brand-violet border border-brand-violet/30 text-xs font-semibold transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>新建脚本</span>
        </Link>

        {/* 升级按钮 */}
        <button
          onClick={() => openUpgradeModal('顶部导航直接升级')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm"
        >
          <Crown className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">升级</span>
          <span className="font-mono text-[11px] opacity-80 uppercase">({planNameZh[activePlan] || activePlan})</span>
        </button>

        {/* 查看战略蓝图快捷入口 */}
        <Link
          href="/blueprint"
          title="查看个人商业战略蓝图"
          className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <Compass className="w-4 h-4" />
        </Link>

        {/* 用户头像入口 */}
        <Link
          href="/account"
          className="w-8 h-8 rounded-full bg-surface-50 border border-white/20 flex items-center justify-center text-xs font-bold text-brand-champagne hover:scale-105 transition-transform"
        >
          志远
        </Link>
      </div>
    </header>
  );
};
