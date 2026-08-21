'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  ShieldCheck,
  CreditCard,
  Bell,
  Sparkles,
  ExternalLink,
  Lock,
  Save,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  Download,
  Crown,
  ChevronRight,
  Layers
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function AccountPage() {
  const { userProfile, setUserProfile, activePlan, entitlements, demoRole, setDemoRole, pricing, openUpgradeModal, addToast } = useAppState();

  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [role, setRole] = useState(userProfile.role);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      ...userProfile,
      name,
      email,
      role: role as any
    });
    addToast('Profile updated successfully!', 'success');
  };

  const productLadder = [
    { stage: 'Stage 1', name: 'Discover', label: 'Free IP Assessment', unlocked: true, current: demoRole === 'FREE', href: '/test' },
    { stage: 'Stage 2', name: 'Position', label: 'Full ZIWEI IP Blueprint', unlocked: entitlements.has_blueprint, current: demoRole === 'BLUEPRINT', href: '/blueprint' },
    { stage: 'Stage 3', name: 'Build', label: '《紫微IP定位学》 Masterclass', unlocked: entitlements.has_course, current: demoRole === 'COURSE', href: '/academy' },
    { stage: 'Stage 4', name: 'Operate', label: 'PRO AI Content Engine', unlocked: entitlements.has_pro, current: demoRole === 'PRO', href: '/studio' },
    { stage: 'Stage 5', name: 'Scale', label: 'Elite 1-on-1 Implementation', unlocked: entitlements.has_elite, current: demoRole === 'ELITE', href: '/elite' }
  ];

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                ACCOUNT SETTINGS & ENTITLEMENTS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              My Profile & Product Journey
            </h1>
            <p className="text-sm text-slate-300">
              Manage your personal details, brand entitlements, order history, and subscription status.
            </p>
          </div>

          {/* Quick Demo Switcher */}
          <div className="p-2 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-1 text-xs font-mono">
            <span className="text-[10px] text-slate-400 font-bold px-1.5 uppercase">Role:</span>
            {['FREE', 'BLUEPRINT', 'COURSE', 'PRO', 'ELITE'].map((r) => (
              <button
                key={r}
                onClick={() => setDemoRole(r as any)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  demoRole === r ? 'bg-brand-champagne text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SECTION 1: YOUR ZIWEI IP JOURNEY (PRODUCT LADDER) ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                GROWTH LADDER
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">Your ZIWEI IP Journey</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Progression Status</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
            {productLadder.map((step, idx) => (
              <Link
                key={step.stage}
                href={step.href}
                className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                  step.current
                    ? 'bg-surface-100 border-brand-champagne ring-1 ring-brand-champagne/40 shadow-lg scale-105'
                    : step.unlocked
                    ? 'bg-surface-200/80 border-emerald-500/30 hover:border-emerald-500'
                    : 'bg-surface-300/60 border-white/5 opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[10px] text-slate-400">{step.stage}</span>
                  {step.unlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </div>

                <div>
                  <div className="font-black text-white text-sm">{step.name}</div>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{step.label}</p>
                </div>

                {step.current && (
                  <span className="text-[9px] font-mono font-bold text-brand-champagne bg-brand-champagne/15 px-2 py-0.5 rounded w-fit">
                    Active Stage
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: PROFILE & MEMBERSHIP STATUS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Personal Information Form (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white">Personal Profile</h3>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-bold">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold">Primary Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>
          </div>

          {/* Right Column: Active Membership & Subscription (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  MEMBERSHIP STATUS
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                  {entitlements.has_pro ? 'PRO ACTIVE' : 'FREE TIER'}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  {entitlements.has_pro ? 'ZIWEI IP PRO' : 'Free Assessment Tier'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {entitlements.has_pro
                    ? 'Unlimited AI Content Studio access, AI Coach consultation, and weekly automated reviews.'
                    : 'Upgrade to PRO for unlimited script generations, 7-channel repurposing, and live AI Coach guidance.'}
                </p>
              </div>

              {entitlements.has_pro ? (
                <div className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 text-xs font-mono space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span>Billing:</span>
                    <strong className="text-white">RM99 / month</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Renewal:</span>
                    <strong className="text-brand-champagne">September 21, 2026</strong>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => openUpgradeModal('PRO Membership Upgrade')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 shadow-md"
                >
                  Upgrade to PRO (RM99/mo)
                </button>
              )}
            </div>

            {entitlements.has_pro && (
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setIsCancelModalOpen(true)}
                  className="text-rose-400 hover:underline"
                >
                  Cancel Subscription
                </button>
                <Link href="/pricing" className="text-brand-champagne hover:underline">
                  Change Plan &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ================= SECTION 3: ORDER HISTORY & INVOICES ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              PURCHASE HISTORY
            </span>
            <span className="text-xs text-slate-400 font-mono">3 Orders</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {[
              { id: 'INV-2026-081', item: 'ZIWEI IP Blueprint (Lifetime)', amount: 'RM 299', date: 'August 18, 2026', status: 'Paid' },
              { id: 'INV-2026-082', item: '《紫微IP定位学》 Masterclass', amount: 'RM 899', date: 'August 19, 2026', status: 'Paid' },
              { id: 'INV-2026-083', item: 'ZIWEI IP PRO Membership (Monthly)', amount: 'RM 99', date: 'August 21, 2026', status: 'Active' },
            ].map((inv) => (
              <div
                key={inv.id}
                className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-300"
              >
                <div className="flex items-center gap-3">
                  <Receipt className="w-4 h-4 text-brand-champagne flex-shrink-0" />
                  <div>
                    <strong className="text-white block">{inv.item}</strong>
                    <span className="text-[10px] text-slate-400">{inv.id} · {inv.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold text-white">{inv.amount}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    {inv.status}
                  </span>
                  <button
                    onClick={() => addToast(`Downloaded invoice ${inv.id}`, 'info')}
                    className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-slate-400 hover:text-white"
                    title="Download Receipt"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Cancellation Modal (No Dark Patterns) */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-surface-100 border border-rose-500/40 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Cancel PRO Subscription</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you cancel, you will still retain access to PRO features until the end of your billing cycle (<strong>September 21, 2026</strong>). After that, your account will revert to the standard Free Tier with 3 studio generations.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-surface-200 hover:bg-surface-50 text-xs font-bold"
              >
                Keep My Subscription
              </button>
              <button
                onClick={() => {
                  setIsCancelModalOpen(false);
                  addToast('Subscription cancellation scheduled at end of period.', 'info');
                }}
                className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
