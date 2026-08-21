'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Crown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  Users,
  Target
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function ElitePage() {
  const router = useRouter();
  const { userProfile, submitEliteApplication, pricing } = useAppState();

  const [fullName, setFullName] = useState(userProfile.name);
  const [email, setEmail] = useState('alex.tan@ziwei-ip.io');
  const [phone, setPhone] = useState('+60 12-345 6789');
  const [currentBusiness, setCurrentBusiness] = useState('精品品牌战略与商业咨询公司');
  const [monthlyRevenueRange, setMonthlyRevenueRange] = useState('RM20,000 – RM50,000');
  const [mainChallenge, setMainChallenge] = useState('无法稳定获客并成交 RM10k+ 高客单顾问年框，过多时间被低价杂务消耗。');
  const [currentAudienceSize, setCurrentAudienceSize] = useState('全网约 5,000 精准高管与企业主粉丝（领英 + 微信私域）');
  const [currentOffer, setCurrentOffer] = useState('一对一商业定位诊断咨询 (单次 RM4,800)');
  const [goalNext90Days, setGoalNext90Days] = useState('沉淀出 1 套标准化高客单陪跑产品，签约 5 家年度顾问客户，月营收突破 RM80k。');
  const [whyNow, setWhyNow] = useState('目前业务处于关键转型节点，急需资深战略专家亲自介入，打破小时咨询的时间瓶颈。');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEliteApplication({
      fullName,
      email,
      phone,
      currentBusiness,
      monthlyRevenueRange,
      mainChallenge,
      currentAudienceSize,
      currentOffer,
      goalNext90Days,
      whyNow,
      submittedAt: new Date().toISOString()
    });
    setIsSubmitted(true);
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30">
            <Crown className="w-3.5 h-3.5" />
            <span>私享高阶战略陪跑</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            商业 IP 高阶私享陪跑计划
          </h1>
          <p className="text-sm text-slate-300">
            8–12 周资深品牌战略顾问亲自下场，为成熟企业主、头部顾问与行业专家量身定制高客单交付闭环。
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-200/90 border border-brand-champagne/40 shadow-2xl text-center space-y-6 max-w-lg mx-auto animate-scale-up">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">申请已正式提交</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                感谢您的信任，{fullName}。我们的顾问团队将认真评估您的业务现状与匹配度。我们将在 24 个工作小时内通过微信或电话与您取得联系，安排 1 对 1 战略评估对话。
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex px-6 py-3 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
            >
              返回战略控制台
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 包含权益清单 */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  PROGRAM SCOPE
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  私享陪跑包含权益：
                </h3>
                <span className="text-xs text-slate-400 font-mono">投资起价 RM{pricing.eliteStartingPrice.toLocaleString()}+</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                {[
                  '1对1 深度认知诊断与商业定位重塑',
                  '高客单产品阶梯与价值定价体系设计',
                  '坐姿短视频出镜表现力与语调一对一打磨',
                  '季度四化内容路线图与私域承接话术SOP',
                  '高净值客户反向筛选问卷与诊断脚本',
                  '专属战略顾问微信直接沟通答疑通道'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white font-mono text-[10px] uppercase block">严格席位限制：</span>
                <p className="text-[11px] leading-relaxed">
                  为确保最高交付品质与顾问精力深度聚焦，每季度严格限制招募 6 位学员。
                </p>
              </div>
            </div>

            {/* 申请表单 */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 space-y-6 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">您的姓名 / 称呼</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">电子邮箱</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">微信 / 电话联系方式</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">当前月均营收区间</label>
                    <select
                      value={monthlyRevenueRange}
                      onChange={(e) => setMonthlyRevenueRange(e.target.value)}
                      className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                    >
                      <option value="RM10,000 以下">RM10,000 以下</option>
                      <option value="RM10,000 – RM20,000">RM10,000 – RM20,000</option>
                      <option value="RM20,000 – RM50,000">RM20,000 – RM50,000</option>
                      <option value="RM50,000 – RM100,000">RM50,000 – RM100,000</option>
                      <option value="RM100,000 以上">RM100,000 以上</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">目前经营的业务与核心服务介绍</label>
                  <input
                    type="text"
                    required
                    value={currentBusiness}
                    onChange={(e) => setCurrentBusiness(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">您当前业务最大的商业卡点是什么？</label>
                  <textarea
                    rows={2}
                    required
                    value={mainChallenge}
                    onChange={(e) => setMainChallenge(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">未来 90 天最核心的业绩与品牌目标</label>
                  <textarea
                    rows={2}
                    required
                    value={goalNext90Days}
                    onChange={(e) => setGoalNext90Days(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>提交审核申请</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
