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

  // Product Selection & Details
  let productName = 'ZIWEI IP Blueprint';
  let basePrice = pricing.blueprintPrice;
  let isRecurring = false;
  let inclusions = [
    'Complete IP DNA & Five-Dimension Model',
    'Audience Disqualification & Brand Voice Matrix',
    'Camera Personality & Delivery Directives',
    'Four Transformation (LU/QUAN/KE/JI) Engine',
    '4 Content Pillars with Strategic Ratio Sliders',
    'High-Ticket Offer Direction & 30-Day Action Plan'
  ];

  if (productParam === 'course') {
    productName = '《紫微IP定位学》 Masterclass';
    basePrice = pricing.coursePrice;
    inclusions = [
      '8 Comprehensive Strategic Video Modules',
      'Workbook Templates & Action Blueprints',
      'Direct Blueprint Synchronization',
      'Lifetime Course Access & Updates'
    ];
  } else if (productParam === 'bundle') {
    productName = 'ZIWEI IP Starter Bundle (Blueprint + Course)';
    basePrice = pricing.starterBundlePrice;
    inclusions = [
      'Full ZIWEI IP Strategy Blueprint',
      '《紫微IP定位学》 Complete Masterclass',
      '4 Content Pillars & Offer Architecture',
      '30-Day Action Plan & Workbooks'
    ];
  } else if (productParam === 'pro') {
    productName = 'ZIWEI IP PRO Membership';
    basePrice = pricing.proMonthlyPrice;
    isRecurring = true;
    inclusions = [
      'Unlimited AI Content Studio Generations',
      'Real-Time Context-Aware AI Coach',
      '7-Channel Repurpose Engine',
      '7-Day Campaign Series Generator',
      'Weekly AI Performance Review'
    ];
  }

  // Order Bump state (optional 30-Day Starter Pack +RM49)
  const [hasOrderBump, setHasOrderBump] = useState(false);
  const bumpPrice = pricing.orderBumpStarterPack;

  // Total calculation
  const totalPrice = basePrice + (hasOrderBump ? bumpPrice : 0);

  // Form states
  const [email, setEmail] = useState('alex@brandstrategy.co');
  const [fullName, setFullName] = useState('Alex Tan');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'fpx' | 'duitnow'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed' | 'pending'>('idle');

  // Post-purchase soft upsell state
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

      // Unlock entitlements in context
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
    addToast('🎉 Added 《紫微IP定位学》 to your account with bundle discount!', 'success');
    router.push('/blueprint');
  };

  return (
    <div className="min-h-screen bg-surface-300 text-white selection:bg-brand-champagne selection:text-slate-950 flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-4 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold text-white">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne flex items-center justify-center font-mono font-black text-slate-950 text-xs">
            ZW
          </span>
          <span className="font-extrabold tracking-tight">ZIWEI IP Checkout</span>
        </Link>
        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> 256-Bit SSL Encrypted
        </span>
      </div>

      <main className="max-w-4xl mx-auto w-full my-auto py-8">
        {paymentStatus === 'success' ? (
          /* ================= SUCCESS / SOFT UPSELL SCREEN ================= */
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-200/95 border border-brand-champagne/40 shadow-2xl space-y-8 text-center max-w-xl mx-auto animate-scale-up">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                PAYMENT CONFIRMED
              </span>
              <h2 className="text-3xl font-black text-white">
                Your Full Blueprint Is Unlocked
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Your complete personal brand strategy and 30-day execution framework are ready.
              </p>
            </div>

            {/* Soft Post-Purchase Upsell (Course Bundle) */}
            {showSoftUpsell && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-violet/20 via-surface-100 to-surface-100 border border-brand-champagne/30 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                    SPECIAL UPSELL OFFER
                  </span>
                  <span className="text-xs font-bold font-mono text-emerald-400">Save RM200 Today</span>
                </div>

                <h3 className="text-base font-black text-white">
                  Want Help Implementing Your Blueprint?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Add the complete <strong>《紫微IP定位学》</strong> 8-module Masterclass for only <strong>RM{pricing.upsellCourseBundle}</strong> (regular RM{pricing.coursePrice}).
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAddUpsellCourse}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all text-center"
                  >
                    Add Masterclass (RM{pricing.upsellCourseBundle})
                  </button>
                  <button
                    onClick={() => router.push('/blueprint')}
                    className="px-4 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-50 text-slate-400 hover:text-white font-semibold text-xs text-center"
                  >
                    No Thanks, View Blueprint
                  </button>
                </div>
              </div>
            )}

            {!showSoftUpsell && (
              <button
                onClick={() => router.push('/blueprint')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl"
              >
                Explore My Blueprint &rarr;
              </button>
            )}
          </div>
        ) : (
          /* ================= MAIN CHECKOUT GRID ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: ORDER SUMMARY (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  ORDER SUMMARY
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {productName}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {isRecurring ? 'Recurring monthly billing' : 'One-time investment · Lifetime access'}
                </span>
              </div>

              {/* Inclusions list */}
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <span className="font-bold text-slate-300 font-mono text-[10px] uppercase block">
                  What’s Included:
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

              {/* Optional Order Bump: 30-Day Content Starter Pack */}
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
                      <strong className="text-xs text-white">Add 30-Day Content Starter Pack</strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-champagne">+RM{bumpPrice}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug pl-5">
                    Includes 30 high-converting authority hooks, caption formulas, and CTA templates.
                  </p>
                </div>
              )}

              {/* Price Line Items */}
              <div className="pt-4 border-t border-white/5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>{productName}</span>
                  <span>RM{basePrice}</span>
                </div>
                {hasOrderBump && (
                  <div className="flex justify-between text-brand-champagne">
                    <span>30-Day Content Starter Pack</span>
                    <span>+RM{bumpPrice}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                  <span>Total Amount</span>
                  <span>RM{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PAYMENT FORM (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  SECURE CHECKOUT
                </span>
                <h3 className="text-xl font-black text-white mt-0.5">
                  Enter Payment Details
                </h3>
              </div>

              <form onSubmit={handlePay} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Email Address (for instant access)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne"
                  />
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2 pt-2">
                  <label className="font-bold text-slate-300 block">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'card', label: 'Credit Card', icon: CreditCard },
                      { id: 'fpx', label: 'FPX Banking', icon: Building2 },
                      { id: 'duitnow', label: 'DuitNow QR', icon: QrCode },
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

                {/* Mock Card Input fields */}
                {paymentMethod === 'card' && (
                  <div className="space-y-3 p-4 rounded-2xl bg-surface-100 border border-white/5 animate-fade-in">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 font-mono">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        defaultValue="4242 8888 9999 4242"
                        className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs font-mono focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div>
                        <label className="text-[10px] text-slate-400">MM/YY</label>
                        <input
                          type="text"
                          defaultValue="12/28"
                          className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs text-center focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400">CVC</label>
                        <input
                          type="text"
                          defaultValue="888"
                          className="w-full p-2.5 rounded-lg bg-surface-200 border border-white/10 text-white text-xs text-center focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Collapsible Promo Code */}
                <div className="pt-1">
                  {!isPromoOpen ? (
                    <button
                      type="button"
                      onClick={() => setIsPromoOpen(true)}
                      className="text-slate-400 hover:text-brand-champagne text-[11px] font-mono flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      <span>Have a promo code?</span>
                    </button>
                  ) : (
                    <div className="flex gap-2 animate-fade-in">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code (e.g. VIP2026)..."
                        className="flex-1 p-2 rounded-lg bg-surface-100 border border-white/10 text-white text-xs uppercase font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => addToast('Promo code applied (Demo Mode)', 'success')}
                        className="px-3 py-2 rounded-lg bg-surface-100 text-brand-champagne font-bold text-xs border border-brand-champagne/30"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Pay Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>Processing Secure Payment...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay RM{totalPrice} & Unlock Access</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 font-mono text-center leading-snug">
                  ZIWEI IP provides strategic self-reflection and business positioning guidance. It does not guarantee financial or life outcomes.
                </p>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto w-full pt-4 border-t border-surface-border text-center text-[10px] text-slate-500 font-mono">
        © 2026 ZIWEI IP · All Rights Reserved · Secure Checkout System
      </footer>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading Checkout...</div>}>
      <CheckoutWorkspace />
    </Suspense>
  );
}
