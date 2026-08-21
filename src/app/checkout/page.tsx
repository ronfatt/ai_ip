'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Sparkles,
  CheckCircle2,
  CreditCard,
  Building2,
  QrCode,
  ArrowRight,
  Check,
  AlertCircle,
  Tag,
  Gift
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';
import { triggerConfetti } from '@/lib/utils';

function CheckoutWorkspace() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { pricing, unlockBlueprint, unlockCourse, unlockPro, trackEvent, addToast } = useAppState();

  const productParam = searchParams?.get('product') || 'blueprint';

  // 产品选择与详情
  let productName = 'ZIWEI IP 战略蓝图';
  let basePrice = pricing.blueprintPrice;
  let isRecurring = false;
  let inclusions = [
    '完整 IP 基因档案与五维深度能力模型',
    '目标受众反向筛选与品牌语态矩阵',
    '坐姿出镜风格与镜头表达节奏指南',
    '四化内容飞轮（禄/权/科/忌）运行体系',
    '4大核心内容支柱与科学配比滑块',
    '5阶高客单产品设计与30天行动日历'
  ];

  if (productParam === 'course') {
    productName = '《紫微IP定位学》 核心大师课';
    basePrice = pricing.coursePrice;
    inclusions = [
      '8大战略实战视频模块（终身有效）',
      '即插即用的实战工作手册与模板工具',
      '与战略蓝图实时同步的个人资产库',
      '终身免费课程更新与社群答疑权益'
    ];
  } else if (productParam === 'bundle') {
    productName = 'ZIWEI IP 新手起步套装 (蓝图 + 大师课)';
    basePrice = pricing.starterBundlePrice;
    inclusions = [
      'ZIWEI IP 完整个人品牌战略蓝图',
      '《紫微IP定位学》 8大实战模块完整课程',
      '4大核心内容支柱与高客单产品阶梯',
      '30天行动执行日历与实战工作手册'
    ];
  } else if (productParam === 'pro') {
    productName = 'ZIWEI IP PRO 会员体系';
    basePrice = pricing.proMonthlyPrice;
    isRecurring = true;
    inclusions = [
      '无限次 AI 创作工作台脚本与爆款选题生成',
      '24/7 上下文感知的 AI 专属战略教练',
      '7大社交平台一键智能内容分发重构',
      '7天主题战役连载内容生成器',
      '每周自动化发布数据与策略复盘'
    ];
  }

  // 加购选项 (30天内容起步包 +RM49)
  const [hasOrderBump, setHasOrderBump] = useState(false);
  const bumpPrice = pricing.orderBumpStarterPack;

  // 总价计算
  const totalPrice = basePrice + (hasOrderBump ? bumpPrice : 0);

  // 表单状态
  const [email, setEmail] = useState('alex.tan@ziwei-ip.io');
  const [fullName, setFullName] = useState('陈志远');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'fpx' | 'duitnow'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed' | 'pending'>('idle');

  // 购买后软性追加销售状态 (Course Bundle)
  const [showSoftUpsell, setShowSoftUpsell] = useState(false);

  useEffect(() => {
    trackEvent('checkout_started', { product: productParam, price: basePrice });
  }, [productParam, basePrice]);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
      triggerConfetti();

      // 在全局上下文中解锁相应权益
      if (productParam === 'blueprint' || productParam === 'bundle') {
        unlockBlueprint();
      }
      if (productParam === 'course' || productParam === 'bundle') {
        unlockCourse();
      }
      if (productParam === 'pro') {
        unlockPro();
      }

      if (productParam === 'blueprint') {
        setShowSoftUpsell(true);
      }
    }, 1200);
  };

  const handleAddUpsellCourse = () => {
    unlockCourse();
    addToast('🎉 已成功以优惠组合价将《紫微IP定位学》添加至您的账户！', 'success');
    router.push('/blueprint');
  };

  return (
    <div className="min-h-screen bg-surface-300 text-white selection:bg-brand-champagne selection:text-slate-950 flex flex-col justify-between p-4 sm:p-8">
      {/* 顶部 Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-4 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold text-white">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne flex items-center justify-center font-mono font-black text-slate-950 text-xs">
            ZW
          </span>
          <span className="font-extrabold tracking-tight">ZIWEI IP 安全结算收银台</span>
        </Link>
        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> 256 位 SSL 安全加密传输
        </span>
      </div>

      <main className="max-w-4xl mx-auto w-full my-auto py-8">
        {paymentStatus === 'success' ? (
          /* ================= 支付成功 / 软追加销售界面 ================= */
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-200/95 border border-brand-champagne/40 shadow-2xl space-y-8 text-center max-w-xl mx-auto animate-scale-up">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                支付已确认成功
              </span>
              <h2 className="text-3xl font-black text-white">
                您的完整战略蓝图已正式解锁
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                您的专属个人商业品牌战略地图与 30 天落地执行框架已就绪。
              </p>
            </div>

            {/* 购买后软追加销售（大师课组合优惠） */}
            {showSoftUpsell && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-violet/20 via-surface-100 to-surface-100 border border-brand-champagne/30 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                    学员专享特惠升级
                  </span>
                  <span className="text-xs font-bold font-mono text-emerald-400">今日立省 RM200</span>
                </div>

                <h3 className="text-base font-black text-white">
                  需要实战导师手把手带你落地蓝图？
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  加购完整的 <strong>《紫微IP定位学》</strong> 8 大模块大师课，仅需 <strong>RM{pricing.upsellCourseBundle}</strong>（原价 RM{pricing.coursePrice}）。
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAddUpsellCourse}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all text-center"
                  >
                    以特惠价加购大师课 (RM{pricing.upsellCourseBundle})
                  </button>
                  <button
                    onClick={() => router.push('/blueprint')}
                    className="px-4 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-50 text-slate-400 hover:text-white font-semibold text-xs text-center"
                  >
                    暂不需要，直接查看蓝图
                  </button>
                </div>
              </div>
            )}

            {!showSoftUpsell && (
              <button
                onClick={() => router.push('/blueprint')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl"
              >
                立即进入我的战略蓝图 &rarr;
              </button>
            )}
          </div>
        ) : (
          /* ================= 主收银结算网格 ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 左列：订单详情与权益 (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  订单明细
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {productName}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {isRecurring ? '按月自动续订，支持随时取消' : '一次性买断 · 享有终身访问权限'}
                </span>
              </div>

              {/* 权益列表 */}
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <span className="font-bold text-slate-300 font-mono text-[10px] uppercase block">
                  所包含的专属权益：
                </span>
                <ul className="space-y-2 text-slate-300">
                  {inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 可选加购：30天内容起步包 */}
              {productParam === 'blueprint' && (
                <div
                  onClick={() => setHasOrderBump(!hasOrderBump)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                    hasOrderBump
                      ? 'bg-surface-100 border-brand-champagne shadow-md'
                      : 'bg-surface-300/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={hasOrderBump}
                        onChange={() => {}}
                        className="accent-brand-champagne rounded"
                      />
                      <strong className="text-xs text-white">加购 30 天内容落地起步包</strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-champagne">+RM{bumpPrice}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug pl-5">
                    包含 30 组高转化权威钩子公式、高赞文案模板与私域引流转化话术。
                  </p>
                </div>
              )}

              {/* 费用清单 */}
              <div className="pt-4 border-t border-white/5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>{productName}</span>
                  <span>RM{basePrice}</span>
                </div>
                {hasOrderBump && (
                  <div className="flex justify-between text-brand-champagne">
                    <span>30 天内容落地起步包</span>
                    <span>+RM{bumpPrice}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                  <span>应付总额</span>
                  <span>RM{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* 右列：支付方式表单 (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  安全支付通道
                </span>
                <h3 className="text-xl font-black text-white mt-0.5">
                  填写结算信息
                </h3>
              </div>

              <form onSubmit={handlePay} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">姓名 / 称呼</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">接收账户邮箱（用于开通即时权限）</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                {/* 支付方式选择 */}
                <div className="space-y-2 pt-2">
                  <label className="font-bold text-slate-300 block">选择支付方式</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'card', label: '信用卡 / 借记卡', icon: CreditCard },
                      { id: 'fpx', label: 'FPX 网银转账', icon: Building2 },
                      { id: 'duitnow', label: 'DuitNow QR 扫码', icon: QrCode },
                    ].map((m) => {
                      const Icon = m.icon;
                      const isSelected = paymentMethod === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setPaymentMethod(m.id as any)}
                          className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                            isSelected
                              ? 'bg-surface-100 border-brand-champagne text-brand-champagne font-bold shadow-sm'
                              : 'bg-surface-300/80 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-[11px]">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 信用卡卡号输入模拟 */}
                {paymentMethod === 'card' && (
                  <div className="space-y-3 p-4 rounded-2xl bg-surface-100 border border-white/5 animate-fade-in">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-mono">卡号</label>
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        defaultValue="4242 8888 9999 4242"
                        className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs font-mono focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div>
                        <label className="text-[10px] text-slate-400">有效日期 (MM/YY)</label>
                        <input
                          type="text"
                          defaultValue="12/28"
                          className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs text-center focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400">安全码 (CVC)</label>
                        <input
                          type="text"
                          defaultValue="888"
                          className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs text-center focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 折扣码输入框 */}
                <div className="pt-1">
                  {!isPromoOpen ? (
                    <button
                      type="button"
                      onClick={() => setIsPromoOpen(true)}
                      className="text-slate-400 hover:text-brand-champagne text-[11px] font-mono flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      <span>使用优惠折扣码？</span>
                    </button>
                  ) : (
                    <div className="flex gap-2 animate-fade-in">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="输入折扣码 (如 VIP2026)..."
                        className="flex-1 p-2 rounded-lg bg-surface-100 border border-white/10 text-white text-xs uppercase font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => addToast('折扣码已成功应用（演示模式）', 'success')}
                        className="px-3 py-2 rounded-lg bg-surface-100 text-brand-champagne font-bold text-xs border border-brand-champagne/30"
                      >
                        兑换
                      </button>
                    </div>
                  )}
                </div>

                {/* 提交支付按钮 */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>正在进行安全支付处理...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>安全支付 RM{totalPrice} 并立即开通</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 font-mono text-center leading-snug">
                  ZIWEI IP 提供专业的战略自我认知与定位指导。支付即视为同意平台服务协议。
                </p>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto w-full pt-4 border-t border-surface-border text-center text-[10px] text-slate-400 font-mono">
        © 2026 ZIWEI IP · 保留所有权利 · 安全结算系统
      </footer>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">正在加载收银台...</div>}>
      <CheckoutWorkspace />
    </Suspense>
  );
}
