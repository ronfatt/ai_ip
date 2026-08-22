'use client';

import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { MethodSection } from '@/components/landing/MethodSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { ReportPreviewSection } from '@/components/landing/ReportPreviewSection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { UpgradeModal } from '@/components/ui/UpgradeModal';
import { Sparkles, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部悬浮导航栏 */}
      <header className="sticky top-0 z-40 bg-surface-300/80 backdrop-blur-xl border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-surface-300 rounded-[8px] flex items-center justify-center font-black text-brand-champagne text-xs font-mono">
                ZW
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base text-white tracking-tight group-hover:text-brand-champagne transition-colors">
                ZIWEI IP
              </span>
              <span className="text-[9px] text-slate-400 font-mono -mt-1 hidden sm:block">
                个人商业品牌智能操作系统
              </span>
            </div>
          </Link>

          {/* 导航链接 */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <Link href="#method" className="hover:text-white transition-colors">五步方法论</Link>
            <Link href="/blueprint" className="hover:text-white transition-colors">战略蓝图</Link>
            <Link href="/studio" className="hover:text-white transition-colors">AI创作台</Link>
            <Link href="/academy" className="hover:text-white transition-colors">大师实战课</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">产品定价</Link>
          </nav>

          {/* 右侧动作按钮 */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>控制台演示</span>
            </Link>

            <Link
              href="/test"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>免费 IP 测评</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 落地页核心分段 */}
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <HowItWorksSection />
        <ReportPreviewSection />
      </main>

      {/* 底部 Footer */}
      <LandingFooter />

      {/* 全局升级弹窗容器 */}
      <UpgradeModal />
    </div>
  );
}
