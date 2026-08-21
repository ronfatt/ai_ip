'use client';

import React, { useState } from 'react';
import { Share2, Download, Copy, Check, Sparkles } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import { useAppState } from '@/context/AppStateContext';

interface ShareableArchetypeCardProps {
  archetypeName?: string;
  secondaryArchetype?: string;
  tagline?: string;
}

export const ShareableArchetypeCard: React.FC<ShareableArchetypeCardProps> = ({
  archetypeName = 'Strategic Creator',
  secondaryArchetype = 'Authority Builder',
  tagline = '“I turn complexity into clarity, structure and direction.”'
}) => {
  const { addToast } = useAppState();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.origin + '/test' : 'https://ziweiip.com';
    copyToClipboard(`I just discovered my Personal Brand Archetype: ${archetypeName} on ZIWEI IP! Take the free 3-minute assessment: ${url}`);
    setCopied(true);
    addToast('Share link and result copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-surface-200 to-surface-100 border border-brand-champagne/30 space-y-6 shadow-2xl relative overflow-hidden text-center max-w-md mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-violet/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-champagne px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/20">
          MY ZIWEI IP ARCHETYPE
        </span>
      </div>

      {/* Main Archetype Card Visual (Aspect Ratio 1080 x 1350 preview) */}
      <div className="relative z-10 p-6 rounded-2xl bg-surface-300/90 border border-white/10 space-y-4 shadow-xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center shadow-lg">
          <div className="w-full h-full bg-surface-200 rounded-[14px] flex items-center justify-center text-brand-champagne font-black text-2xl font-mono">
            ZW
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            {archetypeName}
          </h3>
          <span className="text-xs text-brand-gold font-mono font-bold">
            Secondary: {secondaryArchetype}
          </span>
        </div>

        <p className="text-xs text-slate-200 italic font-medium leading-relaxed max-w-xs mx-auto">
          {tagline}
        </p>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>ZIWEI IP Intelligence</span>
          <span className="text-brand-champagne">ziweiip.com</span>
        </div>
      </div>

      {/* Share Actions */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <button
          onClick={handleShare}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-black hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied Link!' : 'Share My Archetype'}</span>
        </button>

        <button
          onClick={() => addToast('1080x1350 High-Res Social Card ready for download!', 'info')}
          className="px-3.5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-300 border border-white/10 text-xs font-bold transition-colors flex items-center gap-1"
        >
          <Download className="w-3.5 h-3.5 text-brand-champagne" />
          <span>Save Card</span>
        </button>
      </div>
    </div>
  );
};
