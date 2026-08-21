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
  Database,
  BarChart3,
  CreditCard
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

const NAV_ITEMS = [
  { href: '/dashboard', label: '战略控制台', icon: LayoutDashboard, badge: '' },
  { href: '/ip-dna', label: '我的 IP 基因', icon: Dna, badge: '五维' },
  { href: '/database', label: '紫微知识库', icon: Database, badge: '大师' },
  { href: '/blueprint', label: '战略蓝图', icon: Compass, badge: '' },
  { href: '/studio', label: 'AI 创作工作台', icon: Sparkles, badge: 'AI' },
  { href: '/business', label: '商业构建器', icon: Briefcase, badge: '产品' },
  { href: '/academy', label: '大师实战课', icon: GraduationCap, badge: '8模块' },
  { href: '/coach', label: 'AI 专属战略教练', icon: Bot, badge: '实时' },
  { href: '/analytics', label: '转化与漏斗分析', icon: BarChart3, badge: '漏斗' },
  { href: '/progress', label: '成长进度看板', icon: LineChart, badge: '' },
  { href: '/account', label: '账户与产品阶梯', icon: User, badge: '' },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { userProfile, openUpgradeModal, activePlan, demoRole, setDemoRole } = useAppState();

  const roleDisplayNames: Record<string, string> = {
    FREE: '免费测试',
    BLUEPRINT: '战略蓝图',
    COURSE: '大师课',
    PRO: 'PRO会员',
    ELITE: '私享陪跑'
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-surface-300 border-r border-surface-border z-30 select-none">
      {/* 品牌顶部 Header */}
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
                {roleDisplayNames[demoRole] || demoRole}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">个人品牌智能操作系统</p>
          </div>
        </Link>
      </div>

      {/* 导航菜单 */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
          战略与创作体系
        </div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
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
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      item.badge === 'AI'
                        ? 'bg-brand-violet/20 text-brand-violet border border-brand-violet/30'
                        : item.badge === '大师' || item.badge === '漏斗' || item.badge === '五维'
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

      {/* 底部升级入口与用户信息 */}
      <div className="p-3 border-t border-surface-border">
        <Link
          href="/elite"
          className="block rounded-xl p-3 bg-gradient-to-b from-surface-100 to-surface-200 border border-brand-champagne/20 relative overflow-hidden group hover:border-brand-champagne/50 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1 rounded-md bg-brand-champagne/20 text-brand-champagne">
              <Crown className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-brand-champagne transition-colors">
              商业IP私享陪跑计划
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mb-2 leading-snug">
            8-12周一对一深度定制，构建高客单产品与交付闭环。
          </p>
          <span className="text-brand-champagne font-bold text-xs flex items-center gap-1">
            申请私享席位 &rarr;
          </span>
        </Link>

        {/* 用户微型卡片 */}
        <div className="mt-2.5 flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-surface-50 border border-white/20 overflow-hidden flex items-center justify-center font-bold text-brand-champagne text-xs">
              志远
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-200">{userProfile.name}</div>
              <div className="text-[10px] text-slate-400 truncate max-w-[100px]">资深商业顾问</div>
            </div>
          </div>
          <Link href="/pricing" className="text-[10px] text-brand-champagne hover:underline font-mono">
            {roleDisplayNames[demoRole] || demoRole}
          </Link>
        </div>
      </div>
    </aside>
  );
};
