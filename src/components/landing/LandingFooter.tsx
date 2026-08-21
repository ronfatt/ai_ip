'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, ArrowUpRight } from 'lucide-react';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-surface-300 border-t border-surface-border text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center font-black text-brand-champagne text-xs">
                  ZW
                </div>
              </div>
              <span className="font-extrabold text-sm text-white tracking-tight">ZIWEI IP</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Know Your Nature. Build Your Influence. <br />
              AI-powered Personal Brand Intelligence platform combining strategic Zi Wei insights with creator monetization.
            </p>
            <div className="text-[10px] text-slate-400 font-mono">
              © 2026 ZIWEI IP Intelligence Inc. All rights reserved.
            </div>
          </div>

          {/* Col 2: Platform */}
          <div className="space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">Platform</span>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li><Link href="/test" className="hover:text-brand-champagne transition-colors">Free IP Test</Link></li>
              <li><Link href="/dashboard" className="hover:text-brand-champagne transition-colors">SaaS Dashboard</Link></li>
              <li><Link href="/ip-dna" className="hover:text-brand-champagne transition-colors">My IP DNA</Link></li>
              <li><Link href="/studio" className="hover:text-brand-champagne transition-colors">AI Content Studio</Link></li>
              <li><Link href="/business" className="hover:text-brand-champagne transition-colors">Business Builder</Link></li>
            </ul>
          </div>

          {/* Col 3: Learning & Strategy */}
          <div className="space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">Academy & Method</span>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li><Link href="/academy" className="hover:text-brand-champagne transition-colors">8-Module Video Academy</Link></li>
              <li><Link href="/coach" className="hover:text-brand-champagne transition-colors">AI Brand Coach</Link></li>
              <li><Link href="/blueprint" className="hover:text-brand-champagne transition-colors">Brand Blueprint</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-champagne transition-colors">Pricing & Plans</Link></li>
            </ul>
          </div>

          {/* Col 4: Positioning Principles */}
          <div className="space-y-3">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">Methodology Integrity</span>
            <div className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-1.5 text-[11px] text-slate-300 leading-snug">
              <div className="flex items-center gap-1.5 text-brand-champagne font-semibold">
                <Shield className="w-3.5 h-3.5" /> No Fixed Future Predictions
              </div>
              <p className="text-slate-400 text-[10px]">
                ZIWEI IP operates strictly as a self-discovery & strategic positioning framework. No fortune-telling or guaranteed destiny claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
