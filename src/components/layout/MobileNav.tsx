'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Dna,
  Sparkles,
  GraduationCap,
  Bot
} from 'lucide-react';

const MOBILE_NAV_ITEMS = [
  { href: '/dashboard', label: '控制台', icon: LayoutDashboard },
  { href: '/ip-dna', label: 'IP基因', icon: Dna },
  { href: '/studio', label: '创作台', icon: Sparkles },
  { href: '/academy', label: '大师课', icon: GraduationCap },
  { href: '/coach', label: 'AI教练', icon: Bot },
];

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface-300/95 backdrop-blur-xl border-t border-surface-border py-2 px-4 flex items-center justify-around">
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors ${
              isActive ? 'text-brand-champagne font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-brand-champagne' : 'text-slate-400'}`} />
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
