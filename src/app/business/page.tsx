'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Layers,
  ArrowRight,
  Edit3,
  CheckCircle2,
  Lock,
  Plus
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { BusinessOffer } from '@/types/database';

export default function BusinessBuilderPage() {
  const { businessOffers, setBusinessOffers, addToast } = useAppState();

  const [editingOfferId, setEditingOfferId] = useState<string | null>(null);
  const [editedOffer, setEditedOffer] = useState<BusinessOffer | null>(null);

  const handleEditClick = (offer: BusinessOffer) => {
    setEditingOfferId(offer.id);
    setEditedOffer({ ...offer });
  };

  const handleSaveOffer = () => {
    if (!editedOffer) return;
    setBusinessOffers((prev) =>
      prev.map((o) => (o.id === editedOffer.id ? editedOffer : o))
    );
    setEditingOfferId(null);
    setEditedOffer(null);
    addToast('产品阶梯配置已保存！', 'success');
  };

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* 顶部 Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                HIGH-TICKET OFFER ARCHITECTURE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              五阶商业产品阶梯构建器
            </h1>
            <p className="text-sm text-slate-300">
              将你的隐性专业知识与服务经验转化为一套层层递进、自然转化的 5 阶高客单商业产品天梯。
            </p>
          </div>

          <Link
            href="/elite"
            className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center gap-1.5 self-start sm:self-auto shadow-md"
          >
            <span>申请私享陪跑定制</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 阶产品阶梯卡片列表 */}
        <div className="space-y-6">
          {businessOffers.map((offer, idx) => {
            const isEditing = editingOfferId === offer.id;

            return (
              <div
                key={offer.id}
                className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-5 shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-surface-100 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center font-mono font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2 py-0.5 rounded">
                          {offer.tier} 阶梯 · {offer.conversionFunnelStage}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-0.5">{offer.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-brand-champagne font-mono">
                      {offer.priceFormatted}
                    </span>
                    <button
                      onClick={() => handleEditClick(offer)}
                      className="px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white border border-white/5 text-xs font-mono flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>编辑产品</span>
                    </button>
                  </div>
                </div>

                {/* 编辑模式 vs 详情展示 */}
                {isEditing && editedOffer ? (
                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-400 font-bold">产品名称</label>
                        <input
                          type="text"
                          value={editedOffer.name}
                          onChange={(e) => setEditedOffer({ ...editedOffer, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-100 border border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-400 font-bold">定价展示 (格式化文本)</label>
                        <input
                          type="text"
                          value={editedOffer.priceFormatted}
                          onChange={(e) => setEditedOffer({ ...editedOffer, priceFormatted: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-surface-100 border border-white/10 text-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-400 font-bold">核心交付承诺与价值点</label>
                      <textarea
                        rows={2}
                        value={editedOffer.promise}
                        onChange={(e) => setEditedOffer({ ...editedOffer, promise: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-surface-100 border border-white/10 text-white"
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveOffer}
                        className="px-4 py-2 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold"
                      >
                        保存产品修改
                      </button>
                      <button
                        onClick={() => setEditingOfferId(null)}
                        className="px-4 py-2 rounded-xl bg-surface-100 text-slate-400 text-xs"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                    <div className="space-y-1">
                      <strong className="text-slate-400 font-mono text-[10px] uppercase block">
                        核心交付承诺 (PROMISE)：
                      </strong>
                      <p className="text-slate-200 leading-relaxed font-medium">{offer.promise}</p>
                    </div>

                    <div className="space-y-1">
                      <strong className="text-slate-400 font-mono text-[10px] uppercase block">
                        目标购买人群 (AUDIENCE)：
                      </strong>
                      <p className="leading-relaxed">{offer.audience}</p>
                    </div>

                    <div className="space-y-1.5">
                      <strong className="text-slate-400 font-mono text-[10px] uppercase block">
                        包含的核心交付物清单：
                      </strong>
                      <ul className="space-y-1">
                        {offer.deliverables?.map((del, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
