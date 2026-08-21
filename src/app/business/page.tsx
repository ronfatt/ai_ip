'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  DollarSign,
  Sparkles,
  Edit3,
  Check,
  Plus,
  Trash2,
  Layers,
  ArrowRight,
  TrendingUp,
  Save,
  HelpCircle,
  PackageCheck
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { BusinessOffer } from '@/types/database';
import { formatCurrencyRM, triggerConfetti } from '@/lib/utils';

export default function BusinessBuilderPage() {
  const { businessOffers, setBusinessOffers, addToast } = useAppState();

  const [editingOfferId, setEditingOfferId] = useState<string | null>(null);
  const [editedOffer, setEditedOffer] = useState<BusinessOffer | null>(null);

  // Revenue simulator states
  const [entryUnits, setEntryUnits] = useState(25);
  const [coreUnits, setCoreUnits] = useState(12);
  const [premiumUnits, setPremiumUnits] = useState(2);
  const [continuityUnits, setContinuityUnits] = useState(18);

  const startEdit = (offer: BusinessOffer) => {
    setEditingOfferId(offer.id);
    setEditedOffer({ ...offer });
  };

  const saveEdit = () => {
    if (!editedOffer) return;
    setBusinessOffers((prev) =>
      prev.map((o) => (o.id === editedOffer.id ? editedOffer : o))
    );
    setEditingOfferId(null);
    setEditedOffer(null);
    addToast('Offer updated successfully!', 'success');
  };

  const calculateTotalMonthlyMRR = () => {
    const entryRev = entryUnits * 69;
    const coreRev = coreUnits * (499 / 12);
    const premiumRev = premiumUnits * (4800 / 3); // 12-week amortized
    const continuityRev = continuityUnits * 149;
    return Math.round(entryRev + coreRev + premiumRev + continuityRev);
  };

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                MONETIZATION ENGINE
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Turn Expertise Into Offers
            </h1>
            <p className="text-sm text-slate-300">
              Architect an airtight 5-tier Offer Ladder that smoothly converts social audience into high-ticket advisory wire transfers.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-surface-200 border border-brand-champagne/30 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Projected Capacity MRR</span>
            <span className="text-xl font-black text-brand-champagne font-mono">
              {formatCurrencyRM(calculateTotalMonthlyMRR())} <span className="text-xs font-normal text-slate-400">/ mo</span>
            </span>
          </div>
        </div>

        {/* 5-Tier Offer Ladder Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                Offer Ladder System
              </span>
              <h2 className="text-xl font-bold text-white">5-Tier High-Ticket Architecture</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Click edit on any tier to customize &rarr;
            </span>
          </div>

          <div className="space-y-4">
            {businessOffers.map((offer, idx) => {
              const isEditing = editingOfferId === offer.id;

              return (
                <div
                  key={offer.id}
                  className={`p-6 rounded-3xl border transition-all ${
                    offer.tier === 'Premium'
                      ? 'bg-surface-200/95 border-brand-champagne/50 shadow-xl'
                      : 'bg-surface-200/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  {!isEditing ? (
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Left: Tier & Names */}
                      <div className="space-y-2 lg:max-w-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider ${
                              offer.tier === 'Free'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : offer.tier === 'Entry'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : offer.tier === 'Core'
                                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                : offer.tier === 'Premium'
                                ? 'bg-brand-champagne/20 text-brand-champagne border border-brand-champagne/40'
                                : 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                            }`}
                          >
                            Tier 0{idx + 1}: {offer.tier}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {offer.conversionFunnelStage}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white">{offer.name}</h3>
                        <div className="text-xl font-black text-brand-champagne font-mono">
                          {offer.priceFormatted}
                        </div>
                      </div>

                      {/* Middle: Promise & Deliverables */}
                      <div className="space-y-2 flex-1">
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          <strong>Promise:</strong> {offer.promise}
                        </p>
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Deliverables:</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                            {offer.deliverables.map((del, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                <span className="truncate">{del}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: CTA & Edit Button */}
                      <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                        <span className="text-xs text-slate-400 font-medium">
                          CTA Trigger: <strong className="text-white">“{offer.cta}”</strong>
                        </span>

                        <button
                          onClick={() => startEdit(offer)}
                          className="px-3.5 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-bold border border-white/10 flex items-center gap-1.5 transition-colors"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-brand-champagne" />
                          <span>Edit Offer</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Inline Editor */
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                          Editing {offer.tier} Offer
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingOfferId(null)}
                            className="px-3 py-1 rounded-lg text-xs text-slate-400 hover:text-white"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={saveEdit}
                            className="px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 flex items-center gap-1"
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>Save Offer</span>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-slate-400 block mb-1">Product Name</label>
                          <input
                            type="text"
                            value={editedOffer?.name || ''}
                            onChange={(e) => setEditedOffer({ ...editedOffer!, name: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-400 block mb-1">Price Formatted</label>
                          <input
                            type="text"
                            value={editedOffer?.priceFormatted || ''}
                            onChange={(e) => setEditedOffer({ ...editedOffer!, priceFormatted: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 block mb-1">Core Transformation Promise</label>
                        <input
                          type="text"
                          value={editedOffer?.promise || ''}
                          onChange={(e) => setEditedOffer({ ...editedOffer!, promise: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 block mb-1">Call To Action (CTA)</label>
                        <input
                          type="text"
                          value={editedOffer?.cta || ''}
                          onChange={(e) => setEditedOffer({ ...editedOffer!, cta: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Monthly Revenue Capacity Calculator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Revenue Simulation
              </span>
              <h3 className="text-xl font-bold text-white">Monthly Delivery Capacity & MRR Simulator</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Real-time projection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Entry Workshop (RM69)</span>
                <span className="font-mono text-brand-champagne font-bold">{entryUnits} buyers/mo</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={entryUnits}
                onChange={(e) => setEntryUnits(Number(e.target.value))}
                className="w-full accent-brand-champagne h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 font-mono block">
                = {formatCurrencyRM(entryUnits * 69)}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Core SaaS Pro (RM499/yr)</span>
                <span className="font-mono text-brand-champagne font-bold">{coreUnits} users/mo</span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                value={coreUnits}
                onChange={(e) => setCoreUnits(Number(e.target.value))}
                className="w-full accent-brand-champagne h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 font-mono block">
                = {formatCurrencyRM(Math.round(coreUnits * (499 / 12)))}/mo
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-brand-champagne/30 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-brand-champagne font-bold">1-on-1 Advisory (RM4.8k)</span>
                <span className="font-mono text-brand-champagne font-bold">{premiumUnits} clients/quarter</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={premiumUnits}
                onChange={(e) => setPremiumUnits(Number(e.target.value))}
                className="w-full accent-brand-champagne h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-emerald-400 font-mono block">
                = {formatCurrencyRM(Math.round(premiumUnits * (4800 / 3)))}/mo
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Inner Circle (RM149/mo)</span>
                <span className="font-mono text-brand-champagne font-bold">{continuityUnits} members</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={continuityUnits}
                onChange={(e) => setContinuityUnits(Number(e.target.value))}
                className="w-full accent-brand-champagne h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 font-mono block">
                = {formatCurrencyRM(continuityUnits * 149)}/mo
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-300 border border-brand-champagne/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 block font-medium">Estimated Monthly Cashflow at this Volume:</span>
              <div className="text-2xl sm:text-3xl font-black text-brand-champagne font-mono mt-0.5">
                {formatCurrencyRM(calculateTotalMonthlyMRR())} <span className="text-xs font-normal text-slate-400">/ month</span>
              </div>
            </div>

            <button
              onClick={() => {
                triggerConfetti();
                addToast('Capacity model saved to Brand Blueprint!', 'success');
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Lock Capacity Model</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
