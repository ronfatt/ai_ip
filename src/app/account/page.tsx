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
  const { userProfile, setUserProfile, entitlements, demoRole, setDemoRole, pricing, openUpgradeModal, addToast } = useAppState();

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
    addToast('个人信息已成功保存！', 'success');
  };

  const productLadder = [
    { stage: '第 1 阶', name: '探索认知', label: '免费 IP 诊断测试', unlocked: true, current: demoRole === 'FREE', href: '/test' },
    { stage: '第 2 阶', name: '确立定位', label: 'ZIWEI IP 战略蓝图', unlocked: entitlements.has_blueprint, current: demoRole === 'BLUEPRINT', href: '/blueprint' },
    { stage: '第 3 阶', name: '体系实战', label: '《紫微IP定位学》大师课', unlocked: entitlements.has_course, current: demoRole === 'COURSE', href: '/academy' },
    { stage: '第 4 阶', name: '持续运转', label: 'PRO AI 创作者会员', unlocked: entitlements.has_pro, current: demoRole === 'PRO', href: '/studio' },
    { stage: '第 5 阶', name: '商业放大', label: '商业IP私享陪跑计划', unlocked: entitlements.has_elite, current: demoRole === 'ELITE', href: '/elite' }
  ];

  const roleNameMap: Record<string, string> = {
    FREE: '免费测试',
    BLUEPRINT: '战略蓝图',
    COURSE: '大师课',
    PRO: 'PRO会员',
    ELITE: '私享陪跑'
  };

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                ACCOUNT & ENTITLEMENTS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              账户设置与产品成长阶梯
            </h1>
            <p className="text-sm text-slate-300">
              管理您的个人信息、已解锁权益、订单历史与会员订阅状态。
            </p>
          </div>

          {/* 角色快捷切换 */}
          <div className="p-2 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-1 text-xs font-mono">
            <span className="text-[10px] text-slate-400 font-bold px-1.5 uppercase">身份:</span>
            {['FREE', 'BLUEPRINT', 'COURSE', 'PRO', 'ELITE'].map((r) => (
              <button
                key={r}
                onClick={() => setDemoRole(r as any)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  demoRole === r ? 'bg-brand-champagne text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {roleNameMap[r] || r}
              </button>
            ))}
          </div>
        </div>

        {/* ================= 第一部分：个人品牌成长阶梯 ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                GROWTH LADDER
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">您的 ZIWEI IP 商业成长天梯</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">成长阶段状态</span>
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
                    当前阶段
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* ================= 第二部分：个人资料与会员状态 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左列：个人资料表单 (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white">个人资料信息</h3>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-bold">显示姓名 / 称呼</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold">电子邮箱</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold">主要专业角色</label>
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
                <span>保存个人资料</span>
              </button>
            </form>
          </div>

          {/* 右列：当前会员与订阅 (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-brand-champagne/30 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  MEMBERSHIP STATUS
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                  {entitlements.has_pro ? 'PRO 活跃中' : '免费层级'}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  {entitlements.has_pro ? 'ZIWEI IP PRO 会员' : '免费基础测评用户'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {entitlements.has_pro
                    ? '享有无限次 AI 创作工作台脚本生成、AI 专属教练深度咨询与每周自动化战略复盘。'
                    : '升级为 PRO 会员，即可解锁无限次脚本生成、7大平台一键重构与实时战略教练。'}
                </p>
              </div>

              {entitlements.has_pro ? (
                <div className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 text-xs font-mono space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span>计费周期：</span>
                    <strong className="text-white">RM99 / 月</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>下次续订日期：</span>
                    <strong className="text-brand-champagne">2026 年 9 月 21 日</strong>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => openUpgradeModal('PRO 会员权限升级')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 shadow-md"
                >
                  升级为 PRO 会员 (RM99/月)
                </button>
              )}
            </div>

            {entitlements.has_pro && (
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setIsCancelModalOpen(true)}
                  className="text-rose-400 hover:underline"
                >
                  取消自动续订
                </button>
                <Link href="/pricing" className="text-brand-champagne hover:underline">
                  变更方案 &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ================= 第三部分：订单历史与发票 ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              PURCHASE HISTORY
            </span>
            <span className="text-xs text-slate-400 font-mono">共 3 笔订单</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {[
              { id: 'INV-2026-081', item: 'ZIWEI IP 战略蓝图 (终身访问)', amount: 'RM 299', date: '2026年8月18日', status: '已支付' },
              { id: 'INV-2026-082', item: '《紫微IP定位学》 核心大师课', amount: 'RM 899', date: '2026年8月19日', status: '已支付' },
              { id: 'INV-2026-083', item: 'ZIWEI IP PRO 会员 (月度订阅)', amount: 'RM 99', date: '2026年8月21日', status: '生效中' },
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
                    onClick={() => addToast(`已下载发票收据 ${inv.id}`, 'info')}
                    className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-slate-400 hover:text-white"
                    title="下载发票收据"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 取消订阅弹窗 */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-surface-100 border border-rose-500/40 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">取消 PRO 会员自动续订</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              取消后，您在当前计费周期结束前（<strong>2026年9月21日</strong>）仍享有完整的 PRO 会员所有权益。到期后账户将自动转为基础免费版。
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-surface-200 hover:bg-surface-50 text-xs font-bold"
              >
                保留我的订阅
              </button>
              <button
                onClick={() => {
                  setIsCancelModalOpen(false);
                  addToast('已成功安排在当前周期结束后停止续订。', 'info');
                }}
                className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold"
              >
                确认取消续订
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
