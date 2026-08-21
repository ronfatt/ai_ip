'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bot,
  Sparkles,
  Send,
  User,
  Zap,
  ArrowRight,
  ShieldCheck,
  Award,
  Calendar,
  Compass,
  Briefcase,
  Video,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  Layers,
  ChevronRight
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { CoachMode, StructuredCoachResponse } from '@/types/studio-coach';
import { generateCoachStructuredResponse } from '@/lib/studio-engine';

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  structured?: StructuredCoachResponse;
  timestamp: string;
}

const COACH_MODES: { mode: CoachMode; label: string; desc: string; icon: any }[] = [
  { mode: 'Strategy', label: 'Strategy', desc: 'Overall brand guidance', icon: Compass },
  { mode: 'Content', label: 'Content', desc: 'Scripts & formats', icon: Sparkles },
  { mode: 'Business', label: 'Business', desc: 'Offer monetization', icon: Briefcase },
  { mode: 'Camera', label: 'Camera', desc: 'Delivery & pacing', icon: Video },
  { mode: 'Positioning', label: 'Positioning', desc: 'Audience & market fit', icon: Award },
];

const STARTER_PROMPTS = [
  'What should I post today?',
  'What content am I missing?',
  'Why is my Attraction score lower?',
  'What should I sell next?',
  'How should I explain my expertise?',
  'What content should I stop making?',
  'Build my content plan for this week.'
];

export default function CoachPage() {
  const router = useRouter();
  const { userProfile, addToast, coachMessages: contextCoachMessages, sendCoachMessage } = useAppState();

  const [activeMode, setActiveMode] = useState<CoachMode>('Strategy');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isWeeklyReviewModalOpen, setIsWeeklyReviewModalOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm_init',
      sender: 'coach',
      text: `Good day, ${userProfile.name.split(' ')[0]}. Your **Strategic Creator** profile and **QUAN Authority** leverage are active.

I’m calibrated with your latest metrics (Momentum: 84, Authority: 92, Attraction: 76). What strategic bottleneck shall we solve today?`,
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const structured = generateCoachStructuredResponse(query, activeMode, userProfile);
      const coachMsg: ChatMessage = {
        id: `coach_${Date.now()}`,
        sender: 'coach',
        text: '',
        structured,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, coachMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleApplyProfileUpdate = (field: string, val: string) => {
    addToast(`Updated ${field} to: ${val}`, 'success');
  };

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in max-w-5xl mx-auto flex flex-col min-h-[calc(100vh-140px)]">
        {/* ================= HEADER & CONTEXT BAR ================= */}
        <div className="pb-4 border-b border-surface-border space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-2.5 py-0.5 rounded-full border border-brand-champagne/30">
                  EXECUTIVE AI STRATEGIST
                </span>
                <span className="text-xs text-slate-400 font-mono">Personal Context Active</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                YOUR IP COACH
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Strategic guidance based on your current positioning, content, and business direction.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsWeeklyReviewModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Weekly Review</span>
              </button>
            </div>
          </div>

          {/* Context Bar */}
          <div className="p-3 rounded-2xl bg-surface-200/90 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2 text-slate-300">
              <span className="text-slate-400 font-bold uppercase text-[10px]">CURRENTLY USING:</span>
              <span className="px-2 py-0.5 rounded bg-surface-100 text-brand-champagne border border-white/5">
                {userProfile.primaryArchetype.name}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 text-amber-400 border border-white/5">
                Authority Focus (92)
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 text-blue-400 border border-white/5">
                SME Audience
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 text-purple-400 border border-white/5">
                RM4.8k Offer
              </span>
            </div>

            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-Time Alignment
            </span>
          </div>
        </div>

        {/* ================= COACH MODES SELECTOR ================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold font-mono text-[10px] uppercase flex-shrink-0">
            COACH MODE:
          </span>
          {COACH_MODES.map((m) => {
            const Icon = m.icon;
            const isSelected = activeMode === m.mode;
            return (
              <button
                key={m.mode}
                onClick={() => setActiveMode(m.mode)}
                className={`px-3 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-brand-champagne text-slate-950 border-brand-champagne shadow-md font-bold'
                    : 'bg-surface-200 text-slate-400 hover:text-white border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= DAILY FOCUS CARD ================= */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-surface-200 to-surface-200 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> TODAY’S DIRECTIVE
            </span>
            <div className="font-bold text-white text-sm">
              Primary Focus: Authority (QUAN)
            </div>
            <p className="text-slate-300 text-[11px]">
              Recommended: 1 expert opinion video + 1 trust-building case story. Estimated effort: <strong>30 min</strong>.
            </p>
          </div>

          <button
            onClick={() => router.push('/studio?trans=QUAN&topic=Why%20most%20businesses%20should%20stop%20copying%20influencer%20marketing')}
            className="px-4 py-2 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:brightness-110 flex items-center gap-1 flex-shrink-0"
          >
            <span>Start Today’s Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ================= CHAT STREAM AREA ================= */}
        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 text-xs ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'coach' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex-shrink-0 mt-0.5 shadow-md">
                  <div className="w-full h-full bg-surface-300 rounded-[10px] flex items-center justify-center text-brand-champagne font-black text-xs">
                    ZW
                  </div>
                </div>
              )}

              <div
                className={`max-w-2xl rounded-3xl p-4 sm:p-5 space-y-3 leading-relaxed shadow-lg ${
                  msg.sender === 'user'
                    ? 'bg-brand-violet text-white rounded-tr-none font-medium'
                    : 'bg-surface-200/95 border border-white/10 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text && <div className="whitespace-pre-line text-xs sm:text-sm">{msg.text}</div>}

                {/* Structured Coach Response */}
                {msg.structured && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    {/* Observation */}
                    <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-[10px] uppercase text-amber-400 block">
                        🔍 OBSERVATION
                      </span>
                      <p className="text-slate-200 font-medium">{msg.structured.observation}</p>
                    </div>

                    {/* Why It Matters */}
                    <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-[10px] uppercase text-blue-400 block">
                        💡 WHY IT MATTERS
                      </span>
                      <p className="text-slate-300 leading-snug">{msg.structured.whyItMatters}</p>
                    </div>

                    {/* Recommendation */}
                    <div className="p-3 rounded-xl bg-surface-100 border border-brand-champagne/20 space-y-1">
                      <span className="font-mono font-bold text-[10px] uppercase text-brand-champagne block">
                        🎯 STRATEGIC RECOMMENDATION
                      </span>
                      <p className="text-slate-100 font-bold leading-snug">{msg.structured.recommendation}</p>
                    </div>

                    {/* Inline Profile Update Proposal */}
                    {msg.structured.inlineProfileUpdate && (
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-2">
                        <div className="flex items-center gap-1.5 text-purple-300 font-bold text-[11px] font-mono">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>PROPOSED BLUEPRINT CALIBRATION</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          Update {msg.structured.inlineProfileUpdate.field}: <strong className="text-white">{msg.structured.inlineProfileUpdate.currentValue}</strong> &rarr; <strong className="text-brand-champagne">{msg.structured.inlineProfileUpdate.proposedValue}</strong>
                        </p>
                        <button
                          onClick={() => handleApplyProfileUpdate(msg.structured!.inlineProfileUpdate!.field, msg.structured!.inlineProfileUpdate!.proposedValue)}
                          className="px-3 py-1 rounded-lg bg-brand-champagne text-slate-950 font-bold text-[10px]"
                        >
                          Update Blueprint
                        </button>
                      </div>
                    )}

                    {/* Next Action CTA */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => router.push(msg.structured!.nextAction.url)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                      >
                        <span>{msg.structured.nextAction.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-surface-50 border border-white/20 flex items-center justify-center font-bold text-brand-champagne text-xs flex-shrink-0 mt-0.5">
                  AT
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono p-3 rounded-2xl bg-surface-200/50 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-brand-champagne animate-spin-slow" />
              <span>Analyzing IP DNA and strategic vector...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ================= STARTER PROMPTS & CONVERSATION MEMORY ================= */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase flex-shrink-0">
              QUICK ASKS:
            </span>
            {STARTER_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                className="px-2.5 py-1 rounded-lg bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white border border-white/5 whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask IP Coach (e.g. /today, What content should I stop making?)..."
              className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne text-xs sm:text-sm"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="absolute right-2.5 px-4 py-2 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-gold transition-colors flex items-center gap-1"
            >
              <span>Send</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          {/* Memory Chips */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-2">
            <span>Using: My Blueprint · Content History · High-Ticket Offer</span>
            <span>Slash Commands: <strong>/today</strong> · <strong>/week</strong> · <strong>/offer</strong></span>
          </div>
        </div>

        {/* ================= WEEKLY REVIEW MODAL ================= */}
        {isWeeklyReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
              <button
                onClick={() => setIsWeeklyReviewModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-champagne/20 text-brand-champagne">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    AI WEEKLY PERFORMANCE REVIEW
                  </span>
                  <h2 className="text-xl font-black text-white">7-Day Strategic Audit</h2>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-mono">
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">Published</span>
                  <span className="text-base font-bold text-white">4 Pieces</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">Active Mix</span>
                  <span className="text-xs font-bold text-amber-400">48% Lu · 21% Quan</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">Inbound Leads</span>
                  <span className="text-base font-bold text-emerald-400">+12 Calls</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-white/5">
                  <span className="text-slate-400 text-[10px] block">Pipeline Value</span>
                  <span className="text-base font-bold text-brand-champagne">RM 8,400</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-surface-200 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-400 font-mono text-[10px] block">✅ WHAT WORKED:</strong>
                  <p className="text-slate-300">Your attraction video on unspoken founder frustrations reached 4,200 accounts with high save rates.</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-rose-500/20 space-y-1">
                  <strong className="text-rose-400 font-mono text-[10px] block">⚠️ WHAT DIDN’T WORK:</strong>
                  <p className="text-slate-300">You published zero QUAN authority pieces this week, causing qualified B2B leads to hesitate on booking high-ticket discovery audits.</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-200 border border-brand-champagne/20 space-y-1">
                  <strong className="text-brand-champagne font-mono text-[10px] block">🎯 NEXT WEEK FOCUS:</strong>
                  <p className="text-slate-300">Deploy two strong contrarian opinion pieces (QUAN) and one diagnostic client autopsy (KE).</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setIsWeeklyReviewModalOpen(false);
                    router.push('/studio?trans=QUAN');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold"
                >
                  Apply to Content Studio &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
