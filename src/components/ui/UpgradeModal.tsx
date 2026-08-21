'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Check, Crown, Zap, ShieldCheck, X, ArrowRight } from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

export const UpgradeModal: React.FC = () => {
  const router = useRouter();
  const { isUpgradeModalOpen, closeUpgradeModal, upgradeModalFeature, unlockPro, pricing, addToast } = useAppState();
  const [selectedTier, setSelectedTier] = useState<'pro' | 'elite'>('pro');

  if (!isUpgradeModalOpen) return null;

  const handleConfirmUpgrade = () => {
    if (selectedTier === 'pro') {
      unlockPro();
      closeUpgradeModal();
      router.push('/studio');
    } else {
      closeUpgradeModal();
      router.push('/elite');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
        {/* 关闭按钮 */}
        <button
          onClick={closeUpgradeModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 头部标题 */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>会员权限升级</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {upgradeModalFeature}
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            升级您的 ZIWEI IP 权益，解锁无限次 AI 创作工作台脚本生成、专属 AI 战略教练实时指导与 7 大平台一键分发重构引擎。
          </p>
        </div>

        {/* 权益卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* PRO 会员 */}
          <div
            onClick={() => setSelectedTier('pro')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-3 ${
              selectedTier === 'pro'
                ? 'bg-surface-200 border-brand-champagne shadow-lg scale-102 ring-1 ring-brand-champagne/40'
                : 'bg-surface-300/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-brand-champagne uppercase text-[10px]">PRO 会员体系</span>
              <span className="text-sm font-black text-white font-mono">RM{pricing.proMonthlyPrice} / 月</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug">
              适合需要每周持续发布高质量内容、构建稳定客流引擎的独立顾问与创作者。
            </p>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 无限次 AI 爆款脚本生成</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 7大平台内容一键智能分发重构</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 24/7 专属 AI 战略教练陪伴</li>
            </ul>
          </div>

          {/* ELITE 私享陪跑 */}
          <div
            onClick={() => setSelectedTier('elite')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-3 ${
              selectedTier === 'elite'
                ? 'bg-surface-200 border-brand-champagne shadow-lg scale-102 ring-1 ring-brand-champagne/40'
                : 'bg-surface-300/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-amber-400 uppercase text-[10px]">商业IP私享陪跑</span>
              <span className="text-sm font-black text-white font-mono">RM{pricing.eliteStartingPrice.toLocaleString()}+</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug">
              8-12周资深品牌战略顾问一对一深度定制与高客单产品设计。
            </p>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 一对一深度定位与产品阶梯重构</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 坐姿视频出镜表现力导师一对一打磨</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 专属战略顾问微信直接沟通答疑通道</li>
            </ul>
          </div>
        </div>

        {/* 提交动作 */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handleConfirmUpgrade}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
          >
            <span>{selectedTier === 'pro' ? `立即升级为 PRO 会员 (RM${pricing.proMonthlyPrice}/月)` : '申请私享陪跑席位'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-slate-400 font-mono text-center">
            支持随时在账户设置中取消订阅。256 位 SSL 安全加密。
          </p>
        </div>
      </div>
    </div>
  );
};
