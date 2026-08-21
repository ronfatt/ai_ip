'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Compass,
  Sparkles,
  GraduationCap,
  User,
  Bot
} from 'lucide-react';

const MOBILE_TABS = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { href: '/blueprint', label: 'Blueprint', icon: Compass },
  { href: '/studio', label: 'Create', icon: Sparkles, isPrimary: true },
  { href: '/academy', label: 'Academy', icon: GraduationCap },
  { href: '/coach', label: 'Coach', icon: Bot },
];

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-surface-300/95 backdrop-blur-xl border-t border-surface-border px-2 flex items-center justify-around select-none">
      {MOBILE_TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;

        if (tab.isPrimary) {
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center -mt-5 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-violet via-brand-blue to-brand-champagne p-0.5 shadow-lg shadow-brand-violet/30 active:scale-95 transition-transform">
                <div className="w-full h-full bg-surface-300 rounded-full flex items-center justify-center group-hover:bg-transparent">
                  <Icon className="w-5 h-5 text-brand-champagne" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-brand-champagne mt-0.5">{tab.label}</span>
            </Link>
          );
        }

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
              isActive ? 'text-brand-champagne' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
