'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Lock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Share2,
  X,
  Mail,
  Zap,
  Check
} from 'lucide-react';
import { RadarChart } from '@/components/charts/RadarChart';
import { LockedFeature } from '@/components/ui/LockedFeature';
import { ShareableArchetypeCard } from '@/components/ui/ShareableArchetypeCard';
import { useAppState } from '@/context/AppStateContext';

function ReportContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userProfile, pricing, trackEvent, addToast } = useAppState();

  const isSample = searchParams?.get('sample') === 'true';

  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');

  useEffect(() => {
    trackEvent('report_viewed', { isSample });

    // 桌面端鼠标移出检测（挽留弹窗）
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isExitIntentOpen && !isSample) {
        setIsExitIntentOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isExitIntentOpen, isSample]);

  const handleSaveSnapshotEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitEmail.trim()) return;
    addToast('您的专属商业IP快照已发送至您的邮箱！', 'success');
    setIsExitIntentOpen(false);
  };

  const freeScores = [
    { label: '权威定力', score: 92, labelZh: '权·行业话语权', color: 'text-amber-400' },
    { label: '信任背书', score: 87, labelZh: '科·口碑与确定性', color: 'text-blue-400' },
    { label: '共情引力', score: 76, labelZh: '禄·客户共鸣度', color: 'text-emerald-400' },
    { label: '表达语态', score: 81, labelZh: '表达·出镜穿透力', color: 'text-purple-400' },
    { label: '变现势能', score: 88, labelZh: '变现·高客单溢价', color: 'text-brand-champagne' },
  ];

  const topThreeInsights = [
    {
      number: '01',
      title: '核心优势：商业判断力远超泛娱乐搞怪',
      desc: '高净值客户对你的专业判断与逻辑框架产生信任的速度，远快于对你的情感依赖。当你进行高密度认知拆解时，高客单转化率最高。'
    },
    {
      number: '02',
      title: '破局机会：公开输出差异化逆主流观点',
      desc: '你的专业实力极其扎实，但如果能在公开内容中敢于挑战行业内的 2-3 个低效伪常识，你的品牌辨识度与记忆点将提升 10 倍。'
    },
    {
      number: '03',
      title: '本周行动：增加权（观点型）内容比重',
      desc: '多输出强观点与高维框架（权），减少基础的小技巧教学，能更快把泛流量观看者转化为高意向咨询客户。'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-300 text-white selection:bg-brand-champagne selection:text-slate-950">
      {/* 顶部导航栏 */}
      <header className="border-b border-surface-border bg-surface-300/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold text-white">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne flex items-center justify-center font-mono font-black text-slate-950 text-xs">
              ZW
            </span>
            <span className="font-extrabold tracking-tight">ZIWEI IP 诊断报告</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/checkout?product=blueprint"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>解锁完整战略蓝图 (RM{pricing.blueprintPrice})</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-14 space-y-14">
        {/* ================= 第一部分：头部与原型揭晓 ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/30 text-brand-champagne text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>个人商业IP绝密档案</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            您的个人商业IP定位快照
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            初次揭示你天生建立行业影响力、赢得决策者信任并掌握高客单定价权的底层逻辑。
          </p>
        </div>

        {/* 原型揭晓大卡片 */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-surface-200 to-surface-100 border border-brand-champagne/40 shadow-2xl space-y-6 text-center relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-champagne">
              核心定位主原型
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              策略型破局者
            </h2>
            <span className="text-xs sm:text-sm text-brand-gold font-mono font-bold block">
              次要原型：权威建构者
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed font-medium relative z-10">
            “你建立影响力的核心方式，是将极端复杂的商业与认知难题，转化为直击本质的清晰结构与战略方向。”
          </p>

          {/* 5维能力得分卡片 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 text-xs font-mono relative z-10">
            {freeScores.map((s) => (
              <div key={s.label} className="p-3 rounded-2xl bg-surface-300/80 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[10px] block">{s.label}</span>
                <span className={`text-2xl font-black ${s.color}`}>{s.score}</span>
                <span className="text-[10px] text-slate-500 block">{s.labelZh}</span>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 font-mono relative z-10">
            *基于紫微命盘时空矩阵与五维商业表达模型推演生成的战略评估估值。
          </div>
        </div>

        {/* ================= 第二部分：前3大核心破局洞察 ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                战略诊断提炼
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">已解锁的前 3 大核心破局洞察</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">免费快照层级</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            {topThreeInsights.map((ins) => (
              <div
                key={ins.number}
                className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono font-black text-brand-champagne text-base block">{ins.number}</span>
                  <h4 className="font-bold text-white text-sm">{ins.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 第三部分：社交高清分享卡片 ================= */}
        <div className="pt-4 space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              社交传播资产
            </span>
            <h3 className="text-xl font-bold text-white">分享你的专属 IP 基因徽章</h3>
            <p className="text-xs text-slate-400">支持一键导出高清卡片至领英、小红书或微信朋友圈。</p>
          </div>

          <ShareableArchetypeCard
            archetypeName="策略型破局者"
            secondaryArchetype="权威建构者"
            tagline="“用结构化洞察、高维认知与清晰框架建立不可替代的行业权威。”"
          />
        </div>

        {/* ================= 第四部分：锁定中的高阶战略模块 ================= */}
        <div className="space-y-6 pt-6 border-t border-surface-border">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              深度战略资产库
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              完整战略蓝图中包含的高阶系统
            </h3>
            <p className="text-xs text-slate-300">
              免费快照仅提供初始诊断。完整战略蓝图将为你提供具体到每一步的落地执行路线图。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LockedFeature
              featureName="目标受众反向筛选与主动过滤机制"
              requiredProduct="Blueprint"
              previewText="你最强烈的市场买家来自具备稳定营收的中小企业主与高管。为了过滤低价比价者，需要在所有前端内容中植入反向筛选话术..."
            />
            <LockedFeature
              featureName="定制化品牌语态与坚决防坑负面清单"
              requiredProduct="Blueprint"
              previewText="语态校准：直接率（90%）、战略定力（95%）、冷静沉稳（85%）。坚决禁止快节奏抖音弹幕、制造焦虑或泛娱乐网红表演..."
            />
            <LockedFeature
              featureName="坐姿出镜镜头风格与表达节奏指南"
              requiredProduct="Blueprint"
              previewText="黄金语速保持在 120-130 词/分钟，留白沉稳。搭配 iPad 黑暗模式手绘架构图与 Shure 广播级麦克风音频质感..."
            />
            <LockedFeature
              featureName="四化内容飞轮科学配比（禄 / 权 / 科 / 忌）"
              requiredProduct="Blueprint"
              previewText="季度内容飞轮配比：30% 禄（痛点吸引）、30% 权（权威观点）、25% 科（案例背书）、15% 忌（盲区警示）..."
            />
            <LockedFeature
              featureName="4大核心内容支柱与爆款选题库"
              requiredProduct="Blueprint"
              previewText="1. 商业案例深度尸检（35%）\n2. 逆主流高穿透力观点（30%）\n3. 诊断体检清单（20%）\n4. 幕后战略决策实录（15%）"
            />
            <LockedFeature
              featureName="高客单产品天梯设计与30天启动日历"
              requiredProduct="Blueprint"
              previewText="将知识与服务经验包装为5阶产品：免费自测 $\rightarrow$ RM299 战略蓝图 $\rightarrow$ RM899 大师课 $\rightarrow$ RM3,800 私享陪跑..."
            />
          </div>
        </div>

        {/* ================= 第五部分：主付费墙（RM299 战略蓝图） ================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-surface-200 via-surface-100 to-surface-200 border-2 border-brand-champagne shadow-2xl space-y-8 relative overflow-hidden">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold border border-brand-champagne/30 inline-block">
              完整战略升级
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              解锁我的完整战略蓝图
            </h2>
            <p className="text-sm text-slate-300">
              将你的天赋诊断转化为一套完整的个人商业品牌操作手册与 30 天内容落地引擎。
            </p>
          </div>

          {/* 价值对比表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* 免费快照 */}
            <div className="p-5 rounded-2xl bg-surface-300/60 border border-white/5 space-y-3">
              <span className="font-mono font-bold text-slate-400 uppercase text-[10px] block">
                免费快照（当前）
              </span>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> 核心主定位原型揭晓
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> 5 项基础能力得分
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-500" /> 前 3 条通用建议
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <X className="w-4 h-4" /> 完整受众反向筛选与产品阶梯
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <X className="w-4 h-4" /> 四化内容飞轮与30天行动日历
                </li>
              </ul>
            </div>

            {/* 完整战略蓝图 */}
            <div className="p-5 rounded-2xl bg-surface-100 border border-brand-champagne/40 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-brand-champagne uppercase text-[10px] block">
                  ZIWEI IP 完整战略蓝图
                </span>
                <span className="text-xs font-black text-emerald-400 font-mono">RM{pricing.blueprintPrice} 一次性</span>
              </div>
              <ul className="space-y-2 text-slate-100 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 完整 IP 基因与五维深度能力模型
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 目标受众反向筛选与品牌语态矩阵
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4 大核心内容支柱与科学配比滑块
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 四化内容飞轮（禄/权/科/忌）运行体系
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 5 阶高客单产品设计与 30 天行动日历
                </li>
              </ul>
            </div>
          </div>

          {/* 定价与结算 CTA */}
          <div className="text-center space-y-4 pt-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">RM{pricing.blueprintPrice}</span>
              <span className="text-xs text-slate-400 font-mono">一次性投资 · 终身永久访问权限</span>
            </div>

            <Link
              href="/checkout?product=blueprint"
              className="inline-flex w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/30 items-center justify-center gap-2"
            >
              <span>立即解锁完整战略蓝图</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-[11px] text-slate-400 font-mono max-w-md mx-auto leading-relaxed">
              ZIWEI IP 提供深度的战略自我认知与商业定位指导。建议将策略与实际市场反馈和客户互动数据相结合进行持续迭代。
            </p>
          </div>
        </div>

        {/* ================= 第六部分：常见问题解答 (FAQ) ================= */}
        <div className="space-y-4 max-w-2xl mx-auto pt-6 border-t border-surface-border text-xs">
          <h3 className="text-lg font-bold text-white text-center mb-4">常见问题解答</h3>

          <div className="space-y-3">
            {[
              {
                q: '这套系统与传统的算命或占星有何本质区别？',
                a: 'ZIWEI IP 坚决摒弃迷信宿命论。我们严格将紫微斗数的数学结构作为高维度的自我探索与天赋诊断框架，旨在帮助专业人士找到最省力、最具溢价能力的商业定位与内容打法。'
              },
              {
                q: '解锁战略蓝图后，我能立刻获得什么？',
                a: '您将立即获得专属于您的完整战略蓝图、五维雷达详细解析、受众过滤器、品牌语态清单、4大内容支柱与定制化 30 天落地行动计划。'
              },
              {
                q: '战略蓝图是按月扣费还是单次买断？',
                a: 'ZIWEI IP 战略蓝图为单次 RM299 投资，无任何隐性订阅费用，享有终身访问权限。'
              }
            ].map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <strong className="text-white block">{faq.q}</strong>
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 桌面端挽留弹窗 */}
      {isExitIntentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-4">
            <button
              onClick={() => setIsExitIntentOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-champagne/20 text-brand-champagne flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">保存您的 IP 定位快照</h3>
              <p className="text-xs text-slate-300">
                输入您的邮箱地址，在离开前为您免费保存策略型破局者定位与核心诊断洞察。
              </p>
            </div>

            <form onSubmit={handleSaveSnapshotEmail} className="space-y-3 pt-2">
              <input
                type="email"
                required
                value={exitEmail}
                onChange={(e) => setExitEmail(e.target.value)}
                placeholder="请输入您的常用邮箱..."
                className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-champagne"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
              >
                发送完整快照至邮箱
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">正在加载 IP 定位快照...</div>}>
      <ReportContent />
    </Suspense>
  );
}
