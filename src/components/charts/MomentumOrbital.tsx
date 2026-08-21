'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, HelpCircle, Sparkles, TrendingUp, Info } from 'lucide-react';

interface MomentumOrbitalProps {
  score: number; // e.g. 84
  changePercent?: number; // e.g. 6
  onOpenExplainability?: () => void;
}

export const MomentumOrbital: React.FC<MomentumOrbitalProps> = ({
  score = 84,
  changePercent = 6,
  onOpenExplainability
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const breakdown = [
    { label: 'Authority', change: '+8%', positive: true, current: 92 },
    { label: 'Trust', change: '+5%', positive: true, current: 87 },
    { label: 'Expression', change: '+3%', positive: true, current: 81 },
    { label: 'Attraction', change: '-1%', positive: false, current: 76 },
  ];

  const size = 190;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-between h-full w-full">
      {/* Top Meta Bar */}
      <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2">
        <span className="font-bold uppercase tracking-wider text-slate-400 text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-champagne animate-pulse" />
          IP Momentum
        </span>
        <button
          onClick={onOpenExplainability}
          className="text-slate-400 hover:text-brand-champagne transition-colors flex items-center gap-1 text-[11px]"
          title="Why am I seeing this?"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Explain</span>
        </button>
      </div>

      {/* Layered Animated Orbital Visualization */}
      <div className="relative my-auto flex items-center justify-center" style={{ width: size, height: size }}>
        {/* Outer subtle glow */}
        <div className="absolute inset-2 rounded-full bg-brand-violet/10 blur-xl animate-pulse" />

        {/* Outer Orbiting Data Ring (Dashed) */}
        <svg width={size} height={size} className="absolute inset-0 transform -rotate-90">
          <defs>
            <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#F3D59B" />
            </linearGradient>
          </defs>

          {/* Background Outer Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius + 4}
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            fill="transparent"
            className="animate-spin-slow"
          />

          {/* Base Inactive Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Active Glowing Value Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#orbitalGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Intel Stats */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-mono leading-none">
            {score}
          </span>
          <div className="flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+{changePercent}%</span>
          </div>
          <span className="text-[10px] text-brand-champagne font-bold uppercase tracking-wider mt-1">
            Strong Momentum
          </span>
        </div>
      </div>

      {/* Supporting Copy */}
      <p className="text-xs text-slate-300 text-center max-w-xs mt-3 leading-relaxed">
        Your authority and trust indicators are strengthening, while attraction remains the next growth opportunity.
      </p>

      {/* Expandable Analysis Toggle */}
      <div className="w-full mt-3 pt-3 border-t border-white/5">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-xs font-semibold text-brand-champagne hover:text-brand-gold transition-colors"
        >
          <span>{isExpanded ? 'Hide Factor Breakdown' : 'View Factor Analysis →'}</span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>

        {/* Compact Expanded Factor Panel */}
        {isExpanded && (
          <div className="mt-3 p-3 rounded-xl bg-surface-100/90 border border-white/10 space-y-2 text-xs animate-fade-in">
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
              7-Day Velocity Breakdown
            </div>
            <div className="grid grid-cols-2 gap-2">
              {breakdown.map((item) => (
                <div key={item.label} className="p-2 rounded-lg bg-surface-200/80 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">{item.label}</span>
                  <span className={`font-mono font-bold ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
