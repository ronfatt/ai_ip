'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MomentumGaugeProps {
  score: number; // e.g. 84
  changePercent?: number; // e.g. 6
  size?: number;
  label?: string;
}

export const MomentumGauge: React.FC<MomentumGaugeProps> = ({
  score = 84,
  changePercent = 6,
  size = 180,
  label = 'IP Momentum'
}) => {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="60%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#E5C07B" />
            </linearGradient>
          </defs>

          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Value Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gaugeGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold tracking-tight text-white font-mono">{score}</span>
          <div className="flex items-center gap-0.5 text-xs font-semibold text-emerald-400 mt-0.5 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+{changePercent}%</span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</div>
    </div>
  );
};
