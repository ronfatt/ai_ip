'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Sparkles,
  ArrowRight,
  Compass,
  Briefcase,
  Bot,
  Layers,
  Database,
  X,
  Zap
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

interface CommandBarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandBarModal: React.FC<CommandBarModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { sendCoachMessage } = useAppState();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle if handled by parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const suggestions = [
    { label: 'What should I post today?', action: () => { router.push('/coach'); sendCoachMessage('What should I post today?'); onClose(); } },
    { label: 'How can I improve my Authority score?', action: () => { router.push('/coach'); sendCoachMessage('How can I improve my Authority score?'); onClose(); } },
    { label: 'Generate a QUAN Authority script in Studio', action: () => { router.push('/studio?trans=QUAN'); onClose(); } },
    { label: 'Inspect 5-Dimension IP Model', action: () => { router.push('/ip-dna'); onClose(); } },
    { label: 'Browse Professional Ziwei Database', action: () => { router.push('/database'); onClose(); } },
    { label: 'Review High-Ticket Offer Ladder', action: () => { router.push('/business'); onClose(); } }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push('/coach');
    sendCoachMessage(query);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-4 sm:p-6 text-slate-100 shadow-2xl space-y-4">
        {/* Search input bar */}
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Search className="w-5 h-5 text-brand-champagne absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask ZIWEI IP (e.g. What should I post today?)..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-champagne"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </form>

        {/* Shortcuts / Suggestions */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 block">
            Suggested Intelligent Commands
          </span>
          <div className="space-y-1">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={s.action}
                className="w-full p-3 rounded-xl hover:bg-surface-200/80 transition-colors flex items-center justify-between text-xs text-slate-200 hover:text-brand-champagne group text-left"
              >
                <span className="flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" />
                  <span>{s.label}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-champagne group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 px-2">
          <span>Press <strong>Enter</strong> to ask AI Coach</span>
          <span>Press <strong>ESC</strong> to close</span>
        </div>
      </div>
    </div>
  );
};
