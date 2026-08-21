'use client';

import React from 'react';

interface ScoreItem {
  label: string;
  subLabel?: string;
  value: number;
  max?: number;
  color?: string;
  barClass?: string;
}

interface AnalyticsBarProps {
  items: ScoreItem[];
  className?: string;
}

export const AnalyticsBar: React.FC<AnalyticsBarProps> = ({ items, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const percentage = Math.min(100, Math.round((item.value / (item.max || 100)) * 100));

        return (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-200 flex items-center gap-2">
                {item.label}
                {item.subLabel && <span className="text-[11px] text-slate-400 font-normal">({item.subLabel})</span>}
              </span>
              <span className="font-mono font-bold text-brand-champagne">{item.value} / {item.max || 100}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  item.barClass || 'bg-gradient-to-r from-brand-violet via-brand-blue to-brand-champagne'
                }`}
                style={{ width: `${percentage}%`, backgroundColor: item.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
