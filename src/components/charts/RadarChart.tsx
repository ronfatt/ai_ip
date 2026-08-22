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
    { key: 'authority', label: `权威定力 (${scores.authority})`, value: scores.authority, color: '#F59E0B' },
    { key: 'trust', label: `信任背书 (${scores.trust})`, value: scores.trust, color: '#3B82F6' },
    { key: 'attraction', label: `共情引力 (${scores.attraction})`, value: scores.attraction, color: '#10B981' },
    { key: 'expression', label: `表达语态 (${scores.expression})`, value: scores.expression, color: '#8B5CF6' },
    { key: 'monetization', label: `变现势能 (${scores.monetization})`, value: scores.monetization, color: '#E5C07B' },
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
            <stop offset="0%" stopColor="#C6A868" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.45" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Polygons */}
        {gridLevels.map((level, lvlIdx) => {
          const levelPoints = axes
            .map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={lvlIdx}
              points={levelPoints}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis Lines */}
        {axes.map((_, i) => {
          const { x, y } = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          );
        })}

        {/* Main Data Polygon */}
        <polygon
          points={pointsString}
          fill="url(#radarGradient)"
          stroke="#C6A868"
          strokeWidth="2"
          filter="url(#glow)"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Points */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, axis.value / 100);
          const isHovered = hoveredAxis === axis.key;

          return (
            <g
              key={axis.key}
              className={interactive ? 'cursor-pointer' : ''}
              onMouseEnter={() => interactive && setHoveredAxis(axis.key)}
              onMouseLeave={() => interactive && setHoveredAxis(null)}
            >
              {isHovered && (
                <circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill={axis.color}
                  opacity="0.25"
                  className="animate-ping"
                />
              )}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4.5}
                fill={axis.color}
                stroke="#090B10"
                strokeWidth="2"
                className="transition-all duration-200"
              />
            </g>
          );
        })}

        {/* Axis Labels */}
        {showLabels &&
          axes.map((axis, i) => {
            const { x, y } = getCoordinates(i, 1.24);
            const isHovered = hoveredAxis === axis.key;

            return (
              <text
                key={axis.key}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isHovered ? '#C6A868' : '#94A3B8'}
                fontSize="11"
                fontWeight={isHovered ? 'bold' : 'normal'}
                className="font-sans transition-colors select-none"
              >
                {axis.label}
              </text>
            );
          })}
      </svg>
    </div>
  );
};
