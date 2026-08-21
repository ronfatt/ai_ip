'use client';

import React, { useState } from 'react';
import {
  User,
  Shield,
  CreditCard,
  Bell,
  Download,
  Key,
  Globe,
  CheckCircle2,
  ExternalLink,
  Crown,
  Sparkles,
  Save
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function AccountPage() {
  const { userProfile, setUserProfile, activePlan, openUpgradeModal, addToast } = useAppState();

  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [role, setRole] = useState(userProfile.role);

  const handleSaveProfile = () => {
    setUserProfile((prev) => ({
      ...prev,
      name,
      email,
      role: role as any
    }));
    addToast('Account profile updated successfully!', 'success');
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
        {/* Header */}
        <div className="pb-6 border-b border-surface-border">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
            USER SETTINGS & IDENTITY
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Account & Subscriptions
          </h1>
          <p className="text-sm text-slate-300">
            Manage your personal profile, active intelligence tier, and API integrations.
          </p>
        </div>

        {/* Section 1: Active Subscription Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200 border border-brand-champagne/40 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-4 h-4 text-brand-champagne" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne">
                  Current Membership Plan
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {activePlan === 'elite'
                  ? '12-Week Guided Elite Advisory'
                  : activePlan === 'pro'
                  ? 'ZIWEI IP Blueprint & AI Studio (PRO)'
                  : activePlan === 'snapshot'
                  ? 'IP Snapshot Diagnostic Report'
                  : 'Free IP Test Tier'}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Active status: <span className="text-emerald-400 font-bold">Verified & Active</span> · Renews automatically
              </p>
            </div>

            <button
              onClick={() => openUpgradeModal('Manage Subscription from Account')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md self-start sm:self-auto"
            >
              Change / Upgrade Plan
            </button>
          </div>
        </div>

        {/* Section 2: Profile Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-brand-champagne" />
            <span>Profile Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-400 block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne"
              />
            </div>

            <div>
              <label className="font-bold text-slate-400 block mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-bold text-slate-400 block mb-1">Professional Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-100 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleSaveProfile}
              className="px-5 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Profile</span>
            </button>
          </div>
        </div>

        {/* Section 3: Data Architecture & Export */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Supabase Ready Data Architecture</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Data models prepared for `profiles`, `birth_profiles`, `ip_scores`, `blueprints`, `offers`, `scripts`.
              </p>
            </div>

            <button
              onClick={() => addToast('Exporting Brand Blueprint JSON...', 'info')}
              className="px-3.5 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
