'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Dna,
  Compass,
  Sparkles,
  Briefcase,
  GraduationCap,
  Bot,
  LineChart,
  User,
  Crown,
  ChevronRight,
  Database
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: '' },
  { href: '/ip-dna', label: 'My IP DNA', icon: Dna, badge: '5-Axis' },
  { href: '/database', label: 'Ziwei Database', icon: Database, badge: 'Master' },
  { href: '/blueprint', label: 'Blueprint', icon: Compass, badge: '' },
  { href: '/studio', label: 'Content Studio', icon: Sparkles, badge: 'AI' },
  { href: '/business', label: 'Business Builder', icon: Briefcase, badge: 'Offers' },
  { href: '/academy', label: 'Academy', icon: GraduationCap, badge: '8 Mods' },
  { href: '/coach', label: 'AI Coach', icon: Bot, badge: 'Live' },
  { href: '/progress', label: 'Progress', icon: LineChart, badge: '' },
  { href: '/account', label: 'Account', icon: User, badge: '' },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { userProfile, openUpgradeModal, activePlan } = useAppState();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-surface-300 border-r border-surface-border z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-surface-border flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 shadow-lg shadow-brand-violet/20 flex items-center justify-center">
            <div className="w-full h-full bg-surface-300 rounded-[10px] flex items-center justify-center">
              <span className="text-brand-champagne font-black text-base tracking-widest">ZW</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-brand-champagne transition-colors">
                ZIWEI IP
              </span>
              <span className="text-[10px] px-1.5 py-0.2 bg-brand-champagne/15 text-brand-champagne rounded font-mono font-bold">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">Personal Brand Intelligence</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Strategy & Creation
        </div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-brand-violet/20 to-brand-blue/10 text-white border border-brand-violet/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-brand-champagne' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span>{item.label}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-semibold ${
                      item.badge === 'AI'
                        ? 'bg-brand-violet/20 text-brand-violet border border-brand-violet/30'
                        : item.badge === 'Master'
                        ? 'bg-brand-champagne/15 text-brand-champagne border border-brand-champagne/30'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-brand-champagne" />}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Upgrade Banner (if not elite) */}
      <div className="p-3 border-t border-surface-border">
        <div className="rounded-xl p-3.5 bg-gradient-to-b from-surface-100 to-surface-200 border border-brand-champagne/20 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1 rounded-md bg-brand-champagne/20 text-brand-champagne">
              <Crown className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white">12-Week Guided Elite</span>
          </div>
          <p className="text-[11px] text-slate-400 mb-3 leading-snug">
            Private 1-on-1 brand positioning cohort with high-ticket offer architecture.
          </p>
          <button
            onClick={() => openUpgradeModal('Upgrade to 12-Week Guided Elite Cohort')}
            className="w-full py-1.5 rounded-lg bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-all shadow-md"
          >
            Upgrade Plan
          </button>
        </div>

        {/* User Mini Profile */}
        <div className="mt-3 flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-surface-50 border border-white/20 overflow-hidden flex items-center justify-center font-bold text-brand-champagne text-xs">
              AT
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-200">{userProfile.name}</div>
              <div className="text-[10px] text-slate-400 truncate max-w-[100px]">{userProfile.role}</div>
            </div>
          </div>
          <Link href="/pricing" className="text-[10px] text-brand-champagne hover:underline font-mono">
            {activePlan.toUpperCase()}
          </Link>
        </div>
      </div>
    </aside>
  );
};
