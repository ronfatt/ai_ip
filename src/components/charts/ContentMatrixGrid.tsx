'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, Check, Video, FileText, HelpCircle } from 'lucide-react';

interface MatrixCell {
  row: string;
  col: string;
  active: boolean;
  topic: string;
  purpose: string;
  format: string;
}

export const MATRIX_CELLS: MatrixCell[] = [
  // Opinion
  { row: 'Opinion', col: 'LU', active: false, topic: 'Why conventional advice about personal branding is broken', purpose: 'Resonates with tired creators', format: '60s Short' },
  { row: 'Opinion', col: 'QUAN', active: true, topic: 'Why most businesses should stop copying influencer marketing', purpose: 'Establishes high-conviction standards', format: '45s Direct-to-camera Video' },
  { row: 'Opinion', col: 'KE', active: false, topic: 'Why client results depend on positioning before advertising', purpose: 'Connects theory to ROI', format: 'Case breakdown post' },
  { row: 'Opinion', col: 'JI', active: true, topic: 'The uncomfortable reason high-ticket consultants undercharge', purpose: 'Challenges audience blind spots', format: '75s Deep Teardown' },

  // Knowledge
  { row: 'Knowledge', col: 'LU', active: false, topic: '3 signs your positioning is repelling qualified clients', purpose: 'Attracts problem-aware buyers', format: 'Infographic carousel' },
  { row: 'Knowledge', col: 'QUAN', active: true, topic: 'The 5-Position Brand Radar: How to price at RM10k+', purpose: 'Category-defining framework', format: 'Whiteboard breakdown' },
  { row: 'Knowledge', col: 'KE', active: true, topic: 'Diagnostic audit checklist for 6-figure consulting firms', purpose: 'Demonstrates deep competence', format: 'Framework walkthrough' },
  { row: 'Knowledge', col: 'JI', active: false, topic: 'Why more knowledge won’t fix your client acquisition', purpose: 'Reframes intellectual excuses', format: 'Direct perspective video' },

  // Process
  { row: 'Process', col: 'LU', active: false, topic: 'How I map out my weekly content in under 2 hours', purpose: 'Low-friction practical pull', format: 'Screen share recording' },
  { row: 'Process', col: 'QUAN', active: false, topic: 'The exact criteria we use to reject 60% of applicants', purpose: 'Exclusivity & boundary setting', format: 'Executive debrief' },
  { row: 'Process', col: 'KE', active: true, topic: 'The 3-stage roadmap we used to reposition an advisory firm', purpose: 'Undeniable structural proof', format: 'Client autopsy deck' },
  { row: 'Process', col: 'JI', active: false, topic: 'The expensive mistake I made trying to serve everyone', purpose: 'Vulnerability that educates', format: 'Narrative reel' },

  // Story
  { row: 'Story', col: 'LU', active: true, topic: 'The day I realized working 14 hours was a positioning failure', purpose: 'Deep human resonance', format: 'Story-driven short' },
  { row: 'Story', col: 'QUAN', active: false, topic: 'How saying no to a RM20k deal saved our agency', purpose: 'Demonstrates conviction in action', format: 'Direct-to-lens essay' },
  { row: 'Story', col: 'KE', active: true, topic: 'From 0 inbound to RM45k pipeline in 60 days: Client log', purpose: 'Case proof with timeline', format: 'Interview video' },
  { row: 'Story', col: 'JI', active: true, topic: 'How my own intellectual arrogance cost me my first big launch', purpose: 'Radical vulnerability & polarity', format: 'Behind-the-scenes post' },
];

export const ContentMatrixGrid: React.FC = () => {
  const router = useRouter();
  const [selectedCell, setSelectedCell] = useState<MatrixCell>(MATRIX_CELLS[1]); // default QUAN x Opinion

  const rows = ['Opinion', 'Knowledge', 'Process', 'Story'];
  const cols = [
    { key: 'LU', label: 'LU (Attract)', color: 'text-emerald-400' },
    { key: 'QUAN', label: 'QUAN (Authority)', color: 'text-amber-400' },
    { key: 'KE', label: 'KE (Trust)', color: 'text-blue-400' },
    { key: 'JI', label: 'JI (Breakthrough)', color: 'text-pink-400' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
            CONTENT ENGINE MATRIX
          </span>
          <h3 className="text-xl font-bold text-white mt-0.5">
            4×4 Transformation Content Matrix
          </h3>
          <p className="text-xs text-slate-400">
            Hover or click any cell to inspect the specific high-converting topic and format.
          </p>
        </div>

        <span className="text-xs text-slate-400 font-mono hidden md:block">
          ● = Primary Core Vectors · ○ = Supporting
        </span>
      </div>

      {/* Grid Layout: Left Table + Right Cell Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Matrix Grid (lg:col-span-7) */}
        <div className="lg:col-span-7 overflow-x-auto">
          <div className="min-w-[340px] bg-surface-300/80 p-4 rounded-2xl border border-white/5">
            {/* Column Headers */}
            <div className="grid grid-cols-5 gap-2 text-center pb-3 border-b border-white/10 text-xs font-mono font-bold">
              <span className="text-slate-500 text-left">Format</span>
              {cols.map((c) => (
                <span key={c.key} className={c.color}>
                  {c.key}
                </span>
              ))}
            </div>

            {/* Matrix Rows */}
            <div className="space-y-2 pt-2">
              {rows.map((rowName) => (
                <div key={rowName} className="grid grid-cols-5 gap-2 items-center text-xs">
                  <span className="font-bold text-slate-200">{rowName}</span>
                  {cols.map((col) => {
                    const cell = MATRIX_CELLS.find((c) => c.row === rowName && c.col === col.key)!;
                    const isSelected = selectedCell.row === cell.row && selectedCell.col === cell.col;

                    return (
                      <button
                        key={col.key}
                        onClick={() => setSelectedCell(cell)}
                        className={`h-10 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-brand-champagne text-slate-950 font-black shadow-md scale-105 ring-2 ring-white/20'
                            : cell.active
                            ? 'bg-surface-100 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30'
                            : 'bg-surface-200/60 hover:bg-surface-100 text-slate-500 border border-white/5'
                        }`}
                        title={`${cell.row} × ${cell.col}: ${cell.topic}`}
                      >
                        <span className="text-base">{cell.active ? '●' : '○'}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Active Cell Inspector Drawer (lg:col-span-5) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-surface-100/95 border border-brand-champagne/30 space-y-4 animate-fade-in shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-champagne/15 text-brand-champagne text-xs font-mono font-bold">
              {selectedCell.col} × {selectedCell.row}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Interactive Blueprint</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block">Signature Topic:</span>
            <h4 className="text-sm font-bold text-white leading-snug">“{selectedCell.topic}”</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-surface-200 border border-white/5">
              <span className="text-slate-400 font-mono text-[10px] block">STRATEGIC PURPOSE:</span>
              <span className="text-slate-200 font-medium">{selectedCell.purpose}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-200 border border-white/5">
              <span className="text-slate-400 font-mono text-[10px] block">RECOMMENDED FORMAT:</span>
              <span className="text-brand-champagne font-medium">{selectedCell.format}</span>
            </div>
          </div>

          <button
            onClick={() => router.push(`/studio?trans=${selectedCell.col}&topic=${encodeURIComponent(selectedCell.topic)}`)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Generate This Script in Studio &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
