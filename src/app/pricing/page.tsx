'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Crown,
  ArrowRight,
  Lock,
  Compass,
  GraduationCap,
  Bot
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

export default function PricingPage() {
  const { pricing } = useAppState();

  const pricingTiers = [
    {
      id: 'blueprint',
      name: 'ZIWEI IP 战略蓝图',
      badge: '入门战略基石',
      price: `RM ${pricing.blueprintPrice}`,
      period: '一次性买断 · 终身有效',
      desc: '专为需要看清自身天赋、建立精准定位与受众筛选体系的专业人士打造。',
      inclusions: [
        '完整个人 IP 基因与五维能力图谱',
        '目标受众反向筛选与品牌语态矩阵',
        '坐姿出镜风格与镜头表达节奏指南',
        '四化内容飞轮与 4 大核心内容支柱',
        '5 阶高客单产品设计与 30 天行动日历'
      ],
      ctaText: '立即解锁战略蓝图',
      ctaLink: '/checkout?product=blueprint',
      highlight: false
    },
    {
      id: 'course',
      name: '《紫微IP定位学》 大师课',
      badge: '实战体系化进阶',
      price: `RM ${pricing.coursePrice}`,
      period: '一次性买断 · 包含工作手册',
      desc: '8 大战略实战模块，手把手带你构建从内容生产到高客单成交的闭环系统。',
      inclusions: [
        '8 大实战视频大师模块（终身有效）',
        '即插即用的实战工作手册与模板工具',
        '与战略蓝图实时同步的个人资产库',
        '专属学员社群交流与后续更新权益',
        '包含战略蓝图所有基础核心权益'
      ],
      ctaText: '立即加入大师课',
      ctaLink: '/checkout?product=course',
      highlight: true
    },
    {
      id: 'pro',
      name: 'ZIWEI IP PRO 会员',
      badge: '日常创作者操作系统',
      price: `RM ${pricing.proMonthlyPrice}`,
      period: '按月自动续订 · 随时取消',
      desc: '无限次调用 AI 创作工作台与 AI 专属战略教练，保持每周高品质产出。',
      inclusions: [
        '无限次 AI 爆款脚本与分镜头生成',
        '7 大社交平台一键智能内容分发重构',
        '7 天主题战役连载内容生成器',
        '24/7 专属 AI 战略教练实时答疑',
        '每周自动化发布数据与策略复盘'
      ],
      ctaText: '开通 PRO 会员',
      ctaLink: '/checkout?product=pro',
      highlight: false
    },
    {
      id: 'elite',
      name: '商业IP私享陪跑计划',
      badge: '顶级深度一对一定制',
      price: `RM ${pricing.eliteStartingPrice.toLocaleString()}+`,
      period: '8–12 周私享高阶陪跑',
      desc: '由资深品牌战略顾问亲自下场，量身定制高客单产品阶梯与变现闭环。',
      inclusions: [
        '1对1 深度认知诊断与商业定位重塑',
        '高客单产品阶梯与价值定价体系设计',
        '坐姿短视频出镜表现力导师一对一调优',
        '季度四化内容路线图与私域转化SOP',
        '专属战略顾问微信直接沟通答疑通道'
      ],
      ctaText: '申请私享陪跑席位',
      ctaLink: '/elite',
      highlight: false
    }
  ];

  return (
    <AppShell>
      <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/15 px-3 py-1 rounded-full border border-brand-champagne/30">
            TRANSPARENT PRICING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            清晰透明的产品阶梯体系
          </h1>
          <p className="text-sm text-slate-300">
            按需选择适合您当前商业阶段的成长方案，从认知定位到持续创作与深度陪跑。
          </p>
        </div>

        {/* 4 档定价卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
                tier.highlight
                  ? 'bg-gradient-to-b from-surface-100 to-surface-200 border-brand-champagne shadow-2xl ring-1 ring-brand-champagne/40 scale-102'
                  : 'bg-surface-200/90 border-white/10'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                    {tier.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-black text-white font-mono">{tier.price}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono block mt-0.5">{tier.period}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {tier.desc}
                </p>

                {/* 权益 */}
                <div className="pt-3 border-t border-white/5 space-y-2 text-xs">
                  <span className="font-bold text-slate-300 font-mono text-[10px] uppercase block">
                    包含核心权益：
                  </span>
                  <ul className="space-y-2 text-slate-300">
                    {tier.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={tier.ctaLink}
                className={`w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 shadow-lg shadow-brand-champagne/20 hover:brightness-110 active:scale-95'
                    : 'bg-surface-100 hover:bg-surface-50 text-white border border-white/10'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
