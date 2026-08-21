'use client';

import React from 'react';
import Link from 'next/link';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="py-12 border-t border-surface-border bg-surface-300 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <div>
            <span className="font-extrabold text-sm text-white">ZIWEI IP</span>
            <p className="text-[10px] text-slate-400">看懂自己，找到定位，建立影响力。</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
          <Link href="/test" className="hover:text-brand-champagne transition-colors">免费测试</Link>
          <Link href="/report?sample=true" className="hover:text-brand-champagne transition-colors">示例报告</Link>
          <Link href="/pricing" className="hover:text-brand-champagne transition-colors">产品定价</Link>
          <Link href="/database" className="hover:text-brand-champagne transition-colors">紫微知识库</Link>
          <Link href="/elite" className="hover:text-brand-champagne transition-colors">私享陪跑申请</Link>
        </div>

        <div className="text-[11px] text-slate-400 font-mono text-center sm:text-right">
          © 2026 ZIWEI IP · 保留所有权利 · 个人商业品牌智能操作系统
        </div>
      </div>
    </footer>
  );
};
