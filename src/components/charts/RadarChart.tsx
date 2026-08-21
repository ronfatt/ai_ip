'use client';

import React, { useState } from 'react';
import { IPScores } from '@/types/database';

interface RadarChartProps {
  scores: IPScores;
  size?: number;
  interactive?: boolean;
  showLabels?: boolean;
  className?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  scores,
  size = 320,
  interactive = true,
  showLabels = true,
  className = '',
}) => {
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null);

  const axes = [
    { key: 'authority', label: 'Authority (权威)', value: scores.authority, color: '#F59E0B' },
    { key: 'trust', label: 'Trust (信任)', value: scores.trust, color: '#3B82F6' },
    { key: 'attraction', label: 'Attraction (引力)', value: scores.attraction, color: '#10B981' },
    { key: 'expression', label: 'Expression (表达)', value: scores.expression, color: '#8B5CF6' },
    { key: 'monetization', label: 'Monetization (变现)', value: scores.monetization, color: '#E5C07B' },
  ];

  const totalAxes = axes.length;
  const center = size / 2;
  const radius = (size / 2) * 0.72;

  // Convert polar to cartesian
  const getCoordinates = (index: number, valueRatio: number) => {
    const angle = (Math.PI * 2 * index) / totalAxes - Math.PI / 2;
    const r = radius * valueRatio;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Polygon points
  const pointsString = axes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.value / 100);
      return `${x},${y}`;
    })
    .join(' ');

  // Grid levels (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg width={size} height={size} className="overflow-visible select-none">
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E5C07B" stopOpacity="0.55" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Polygons / Grid Web */}
        {gridLevels.map((level, lvlIdx) => {
          const webPoints = axes
            .map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={lvlIdx}
              points={webPoints}
              fill={lvlIdx === gridLevels.length - 1 ? 'rgba(255, 255, 255, 0.02)' : 'none'}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={lvlIdx === gridLevels.length - 1 ? '1.5' : '1'}
              strokeDasharray={lvlIdx < gridLevels.length - 1 ? '3 3' : undefined}
            />
          );
        })}

        {/* Axis Lines */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, 1);
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

        {/* Filled Data Polygon with Glow */}
        <polygon
          points={pointsString}
          fill="url(#radarGradient)"
          stroke="#E5C07B"
          strokeWidth="2.5"
          filter="url(#glow)"
          className="transition-all duration-700 ease-out"
        />

        {/* Axis Points / Markers */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, axis.value / 100);
          const isHovered = hoveredAxis === axis.key;

          return (
            <g
              key={axis.key}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setHoveredAxis(axis.key)}
              onMouseLeave={() => setHoveredAxis(null)}
            >
              {/* Outer pulsing ring on hover */}
              {isHovered && (
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="none"
                  stroke={axis.color}
                  strokeWidth="2"
                  className="animate-ping"
                />
              )}
              {/* Inner Node */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4.5}
                fill={axis.color}
                stroke="#080B11"
                strokeWidth="2"
                className="transition-all duration-200"
              />
            </g>
          );
        })}
      </svg>

      {/* Axis Labels & Values */}
      {showLabels && (
        <div className="w-full mt-2 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          {axes.map((axis) => (
            <div
              key={axis.key}
              onMouseEnter={() => setHoveredAxis(axis.key)}
              onMouseLeave={() => setHoveredAxis(null)}
              className={`p-2 rounded-lg border transition-all ${
                hoveredAxis === axis.key
                  ? 'bg-surface-50 border-white/20 scale-105 shadow-lg'
                  : 'bg-surface-200/60 border-surface-border'
              }`}
            >
              <div className="font-semibold text-slate-200">{axis.label.split(' ')[0]}</div>
              <div className="text-lg font-bold text-brand-champagne tracking-tight">
                {axis.value}
                <span className="text-[10px] text-slate-400 font-normal ml-0.5">/100</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
