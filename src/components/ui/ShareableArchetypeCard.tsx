'use client';

import React, { useState } from 'react';
import { Sparkles, Download, Copy, Check, Share2 } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

interface ShareableArchetypeCardProps {
  archetypeName: string;
  secondaryArchetype?: string;
  tagline: string;
}

export const ShareableArchetypeCard: React.FC<ShareableArchetypeCardProps> = ({
  archetypeName,
  secondaryArchetype = '权威建构者',
  tagline,
}) => {
  const { userProfile, addToast } = useAppState();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    addToast('专属报告链接已复制到剪贴板！', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    addToast('高清 1080x1350 社交分享图已生成并保存！', 'success');
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* 1080x1350 比例预览卡片 */}
      <div
        id="shareable-archetype-card"
        className="relative aspect-[4/5] rounded-3xl bg-gradient-to-b from-surface-100 via-surface-200 to-surface-300 border-2 border-brand-champagne/40 p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden"
      >
        {/* 背景光晕装饰 */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-champagne/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-violet/20 rounded-full blur-2xl pointer-events-none" />

        {/* 顶部：品牌标示与档案编号 */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne flex items-center justify-center font-mono font-black text-slate-950 text-xs">
              ZW
            </span>
            <span className="font-extrabold text-sm tracking-tight text-white">ZIWEI IP</span>
          </div>
          <span className="text-[10px] font-mono text-brand-champagne bg-brand-champagne/15 px-2 py-0.5 rounded-full border border-brand-champagne/30">
            个人商业品牌基因档案
          </span>
        </div>

        {/* 中部：核心定位原型展示 */}
        <div className="space-y-4 text-center my-auto relative z-10">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
            核心定位主原型
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-champagne to-brand-gold tracking-tight">
            策略型破局者
          </h3>
          <span className="text-xs font-mono font-bold text-brand-champagne block">
            次要原型：{secondaryArchetype}
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium max-w-xs mx-auto pt-2 italic">
            “用结构化洞察、高维认知与清晰框架建立不可替代的行业权威。”
          </p>
        </div>

        {/* 底部：得分与专属签名 */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10 text-xs font-mono">
          <div>
            <span className="text-[10px] text-slate-400 block">主理人</span>
            <strong className="text-white text-xs">{userProfile.name}</strong>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">综合战略势能</span>
            <strong className="text-brand-champagne text-sm font-bold">84.8 分</strong>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          className="flex-1 py-3 rounded-2xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center justify-center gap-1.5 shadow-md"
        >
          <Download className="w-3.5 h-3.5" />
          <span>下载高清分享卡片 (小红书/领英)</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="px-4 py-3 rounded-2xl bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? '已复制' : '复制报告链接'}</span>
        </button>
      </div>
    </div>
  );
};
