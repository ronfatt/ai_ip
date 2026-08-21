'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bot,
  Send,
  Sparkles,
  User,
  ArrowRight,
  HelpCircle,
  Compass,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';

const QUICK_QUESTIONS = [
  'What should I post today?',
  'What should I sell on my Offer Ladder?',
  'Why is my content not converting to calls?',
  'What type of videos fit my nature?',
  'How should I position myself to high-ticket clients?',
  'Who is my ideal audience?'
];

export default function CoachPage() {
  const router = useRouter();
  const { userProfile, coachMessages, sendCoachMessage } = useAppState();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [coachMessages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    sendCoachMessage(inputText);
    setInputText('');
  };

  const handleQuickClick = (q: string) => {
    sendCoachMessage(q);
  };

  return (
    <AppShell>
      <div className="flex flex-col h-[calc(100vh-140px)] max-w-5xl mx-auto animate-fade-in">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-surface-300 rounded-[14px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-brand-champagne" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold text-white">Ask Your IP Coach</h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Context
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Calibrated to: <strong className="text-slate-200">{userProfile.primaryArchetype.name}</strong> · Authority {userProfile.scores.authority}
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push('/blueprint')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs font-semibold border border-white/10"
          >
            <Compass className="w-3.5 h-3.5 text-brand-champagne" />
            <span>Open Blueprint</span>
          </button>
        </div>

        {/* Chat Stream Area */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 px-1">
          {coachMessages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    isUser
                      ? 'bg-brand-champagne text-slate-950 shadow-md'
                      : 'bg-surface-100 border border-white/10 text-brand-champagne'
                  }`}
                >
                  {isUser ? 'AT' : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`space-y-3 p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-brand-violet/20 border-brand-violet/40 text-white rounded-tr-none'
                      : 'bg-surface-200/90 border-white/10 text-slate-200 rounded-tl-none shadow-lg'
                  }`}
                >
                  {!isUser && msg.contextRef && (
                    <div className="flex items-center gap-1 text-[10px] font-mono text-brand-champagne uppercase tracking-wider pb-1 border-b border-white/5">
                      <Sparkles className="w-3 h-3" />
                      <span>Context: Based on your current IP Blueprint ({msg.contextRef})</span>
                    </div>
                  )}

                  <div className="whitespace-pre-line prose-invert max-w-none">{msg.content}</div>

                  {/* Context Actions */}
                  {!isUser && msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (act.linkUrl.startsWith('coach:')) {
                              const qKey = act.linkUrl.replace('coach:', '');
                              sendCoachMessage(qKey);
                            } else {
                              router.push(act.linkUrl);
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne text-xs font-bold border border-brand-champagne/30 transition-all flex items-center gap-1"
                        >
                          <span>{act.label}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 text-right">{msg.timestamp}</div>
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Question Chips */}
        <div className="pt-2 pb-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-[11px] text-slate-500 font-semibold flex-shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-champagne" /> Quick Ask:
            </span>
            {QUICK_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickClick(q)}
                className="px-3 py-1 rounded-lg bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white border border-white/10 text-xs flex-shrink-0 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <form onSubmit={handleSend} className="relative flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask your IP Coach anything about positioning, content, or monetization..."
            className="flex-1 px-4 py-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne text-xs sm:text-sm pr-12 shadow-xl"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="absolute right-2.5 p-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </AppShell>
  );
}
