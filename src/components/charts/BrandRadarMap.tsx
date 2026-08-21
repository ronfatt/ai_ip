'use client';

import React, { useState } from 'react';
import { Sparkles, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight, Lightbulb } from 'lucide-react';

interface RadarNodeDetail {
  key: string;
  label: string;
  labelZh: string;
  score: number;
  color: string;
  headline: string;
  description: string;
  bestExpressions: string[];
  recommendedAction: string;
}

export const RADAR_NODES_DATA: Record<string, RadarNodeDetail> = {
  expertise: {
    key: 'expertise',
    label: 'Expertise',
    labelZh: '专业定位',
    score: 92,
    color: '#F59E0B',
    headline: 'You build credibility most naturally through analysis, structure and practical judgment.',
    description: 'Your domain authority is high-density. When you explain the root mechanism behind a problem rather than giving shallow tips, enterprise decision-makers immediately register your caliber.',
    bestExpressions: [
      'Forensic Case Studies & Client Autopsies',
      'Proprietary 2x2 Matrices & Decision Logic',
      'Contrarian Opinion & Industry Teardowns',
      'Strategic High-Ticket Workshops'
    ],
    recommendedAction: 'Package your diagnostic method into 1 signature visual model.'
  },
  identity: {
    key: 'identity',
    label: 'Identity',
    labelZh: '核心天性',
    score: 89,
    color: '#8B5CF6',
    headline: 'Strategic Interpreter rather than a superficial entertainer.',
    description: 'You operate with an innate architectural instinct. You are at your peak cognitive energy when mapping complex, chaotic systems into clear, repeatable roadmaps.',
    bestExpressions: [
      'Sit-down structured analysis',
      'Methodology walkthroughs',
      'Whiteboard strategy sessions',
      'Unscripted tactical debriefs'
    ],
    recommendedAction: 'Ground your analytical depth with a brief personal story before presenting frameworks.'
  },
  values: {
    key: 'values',
    label: 'Values',
    labelZh: '价值底线',
    score: 87,
    color: '#3B82F6',
    headline: 'Intellectual integrity, substance over hype, and strict boundaries.',
    description: 'Your audience respects that you do not participate in fake countdown scarcity, manufactured urgency, or hollow lifestyle flexing. Your boundaries act as your strongest trust filter.',
    bestExpressions: [
      'The “Anti-Pitch” manifesto',
      'Standards & non-negotiables teardown',
      'Refusal of commoditized price wars'
    ],
    recommendedAction: 'Publicly state what practices you reject to deepen polarity with ideal buyers.'
  },
  visibility: {
    key: 'visibility',
    label: 'Visibility',
    labelZh: '公众感知',
    score: 76,
    color: '#10B981',
    headline: 'You are respected faster than you are emotionally approached.',
    description: 'Your public perception is authoritative and seasoned. The primary growth lever is lowering the initial barrier to entry with high-resonance observation hooks.',
    bestExpressions: [
      'Resonance hooks on unspoken founder frustrations',
      'Short diagnostic question reels',
      'Behind-the-scenes decision logs'
    ],
    recommendedAction: 'Open content with the exact emotional pain point before diving into the rational solution.'
  },
  monetization: {
    key: 'monetization',
    label: 'Monetization',
    labelZh: '商业变现',
    score: 88,
    color: '#E5C07B',
    headline: 'High-ticket advisory sprints and productized knowledge equity.',
    description: 'Your pricing power is strongest when selling structured transformation rather than charging by the hour. High-leverage 12-week advisory models yield maximum client ROI and founder margin.',
    bestExpressions: [
      'RM4,800+ 1-on-1 Strategic Advisory Sprints',
      'Productized RM69 Entry Workshops',
      'Annual SaaS & Intelligence Membership'
    ],
    recommendedAction: 'Tighten the transition from free scorecards into your RM69 tripwire workshop.'
  }
};

export const BrandRadarMap: React.FC = () => {
  const [selectedNodeKey, setSelectedNodeKey] = useState<string>('expertise');
  const [hoveredNodeKey, setHoveredNodeKey] = useState<string | null>(null);

  const selectedNode = RADAR_NODES_DATA[selectedNodeKey] || RADAR_NODES_DATA.expertise;

  const axes = [
    { key: 'identity', label: 'Identity', score: 89, angleDeg: -90, color: '#8B5CF6' },
    { key: 'values', label: 'Values', score: 87, angleDeg: -18, color: '#3B82F6' },
    { key: 'monetization', label: 'Monetization', score: 88, angleDeg: 54, color: '#E5C07B' },
    { key: 'visibility', label: 'Visibility', score: 76, angleDeg: 126, color: '#10B981' },
    { key: 'expertise', label: 'Expertise', score: 92, angleDeg: 198, color: '#F59E0B' },
  ];

  const size = 300;
  const center = size / 2;
  const maxRadius = 105;

  const polarToCartesian = (angleDeg: number, ratio: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = maxRadius * ratio;
    return {
      x: center + r * Math.cos(angleRad),
      y: center + r * Math.sin(angleRad),
    };
  };

  const polygonPoints = axes
    .map((axis) => {
      const { x, y } = polarToCartesian(axis.angleDeg, axis.score / 100);
      return `${x},${y}`;
    })
    .join(' ');

  const gridRings = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
              INTELLIGENCE MAP
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne font-mono font-bold">
              Interactive 5-Axis
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
            Your Brand Intelligence Map
          </h2>
          <p className="text-xs text-slate-400">
            How your natural strengths translate into public influence and commercial value. Click any node to inspect details.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-mono hidden md:block text-right">
          Active Focus: <strong className="text-brand-champagne">{selectedNode.label} ({selectedNode.score}/100)</strong>
        </div>
      </div>

      {/* Main Dual Grid: Interactive Radar SVG + Dynamic Deep Intel Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Radar SVG (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-3 rounded-2xl bg-surface-300/80 border border-white/5">
          <svg width={size} height={size} className="overflow-visible select-none">
            <defs>
              <linearGradient id="brandRadarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F3D59B" stopOpacity="0.65" />
              </linearGradient>
              <filter id="nodeGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Polygons */}
            {gridRings.map((ring, rIdx) => {
              const ringPoints = axes
                .map((a) => {
                  const { x, y } = polarToCartesian(a.angleDeg, ring);
                  return `${x},${y}`;
                })
                .join(' ');

              return (
                <polygon
                  key={rIdx}
                  points={ringPoints}
                  fill={rIdx === gridRings.length - 1 ? 'rgba(255, 255, 255, 0.015)' : 'none'}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray={rIdx < gridRings.length - 1 ? '2 4' : undefined}
                />
              );
            })}

            {/* Radial Axis Lines */}
            {axes.map((axis) => {
              const { x, y } = polarToCartesian(axis.angleDeg, 1.0);
              return (
                <line
                  key={axis.key}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Active Filled Area */}
            <polygon
              points={polygonPoints}
              fill="url(#brandRadarGlow)"
              stroke="#F3D59B"
              strokeWidth="2.5"
              filter="url(#nodeGlow)"
              className="transition-all duration-700 ease-out"
            />

            {/* Interactive Axis Nodes */}
            {axes.map((axis) => {
              const { x, y } = polarToCartesian(axis.angleDeg, axis.score / 100);
              const labelPos = polarToCartesian(axis.angleDeg, 1.25);
              const isSelected = selectedNodeKey === axis.key;
              const isHovered = hoveredNodeKey === axis.key;

              return (
                <g
                  key={axis.key}
                  className="cursor-pointer"
                  onClick={() => setSelectedNodeKey(axis.key)}
                  onMouseEnter={() => setHoveredNodeKey(axis.key)}
                  onMouseLeave={() => setHoveredNodeKey(null)}
                >
                  {/* Selected / Hover Pulsing Ring */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={x}
                      cy={y}
                      r="12"
                      fill="none"
                      stroke={axis.color}
                      strokeWidth="2"
                      className="animate-ping"
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 7 : 5}
                    fill={axis.color}
                    stroke="#080B11"
                    strokeWidth="2.5"
                    className="transition-all duration-200"
                  />

                  {/* Outer Axis Label in SVG */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`text-[11px] font-bold font-mono transition-colors ${
                      isSelected ? 'fill-brand-champagne font-extrabold text-xs' : 'fill-slate-400 hover:fill-white'
                    }`}
                  >
                    {axis.label} ({axis.score})
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Node Selector Pills underneath SVG */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {axes.map((a) => (
              <button
                key={a.key}
                onClick={() => setSelectedNodeKey(a.key)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  selectedNodeKey === a.key
                    ? 'bg-brand-champagne text-slate-950 shadow-sm scale-105'
                    : 'bg-surface-100 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Contextual Intelligence Drawer (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4 animate-fade-in">
          {/* Node Title & Score */}
          <div className="p-5 rounded-2xl bg-surface-100/90 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedNode.color }}
                />
                <h3 className="text-xl font-black text-white">
                  {selectedNode.label.toUpperCase()} — {selectedNode.score}
                </h3>
                <span className="text-xs font-semibold text-brand-gold font-mono">
                  ({selectedNode.labelZh})
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300">
                Top 3% Index
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-200 leading-snug">
              “{selectedNode.headline}”
            </p>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {selectedNode.description}
            </p>
          </div>

          {/* Best Expressions List */}
          <div className="p-4 rounded-2xl bg-surface-100/70 border border-white/5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Best Expressions & Delivery Formats:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {selectedNode.bestExpressions.map((exp, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-surface-200/90 border border-white/5 flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Action */}
          <div className="p-3.5 rounded-2xl bg-brand-champagne/10 border border-brand-champagne/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-brand-champagne flex-shrink-0" />
              <span className="text-slate-200">
                <strong>Recommended Next Move:</strong> {selectedNode.recommendedAction}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
