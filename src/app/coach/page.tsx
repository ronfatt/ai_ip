'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Bot,
  Send,
  Sparkles,
  Zap,
  Target,
  Compass,
  ArrowRight,
  TrendingUp,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Terminal,
  X
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { CoachMode, StructuredCoachResponse } from '@/types/studio-coach';
import { AI_COACH_KNOWLEDGE_RESPONSES } from '@/lib/mock-data';

export default function CoachPage() {
  const { userProfile, coachMessages, sendCoachMessage, addToast, trackEvent } = useAppState();

  const [inputQuery, setInputQuery] = useState('');
  const [activeCoachMode, setActiveCoachMode] = useState<CoachMode>('daily_strategy');
  const [isWeeklyReviewOpen, setIsWeeklyReviewOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [coachMessages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputQuery;
    if (!q.trim()) return;

    sendCoachMessage(q);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // 模拟 AI 战略教练针对性深度回答
    setTimeout(() => {
      let replyContent = '';
      const lower = q.toLowerCase();

      if (lower.includes('今天') || lower.includes('发什么') || lower.includes('/today')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.post_today;
      } else if (lower.includes('卖什么') || lower.includes('产品') || lower.includes('定价') || lower.includes('/offer')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.what_to_sell;
      } else if (lower.includes('不转化') || lower.includes('没咨询') || lower.includes('为什么')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.not_converting;
      } else if (lower.includes('镜头') || lower.includes('视频') || lower.includes('出镜') || lower.includes('/camera')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.video_fit;
      } else if (lower.includes('受众') || lower.includes('客户') || lower.includes('/audience')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.ideal_audience;
      } else {
        replyContent = `根据你的 **策略型破局者 (Strategic Creator)** 蓝图与当前 **变现势能 (88分)**：\n\n🎯 **战略诊断洞察**：\n你面临的核心挑战在于如何将隐性经验提炼为高客单标准化交付方案，摆脱低效的小时咨询。\n\n💡 **教练执行建议**：\n1. 停止在泛短视频中讲基础概念，转而输出高维商业框架。\n2. 在每篇内容末尾统一使用单一指令型 CTA（如：在评论区回复【蓝图】）。\n3. 将咨询报价锚定在为客户多赚或少亏的商业价值上。\n\n需要我立即为你生成对应的主题视频脚本吗？`;
      }

      sendCoachMessage(replyContent);
      setIsTyping(false);
    }, 900);
  };

  const slashCommands = [
    { cmd: '/today', label: '今日发布建议', query: '今天我应该发布什么内容来驱动高客单咨询？' },
    { cmd: '/offer', label: '高客单产品阶梯', query: '基于我的定位，我应该如何设计我的产品阶梯与定价？' },
    { cmd: '/audience', label: '目标受众画像', query: '我最应该深度影响并成交的核心客户画像是谁？' },
    { cmd: '/camera', label: '出镜人设与语调', query: '什么样的坐姿镜头出镜风格最符合我的专业定位？' },
    { cmd: '/audit', label: '排查转化瓶颈', query: '为什么我的内容点赞很高，却没有高客单咨询？' }
  ];

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-6xl mx-auto flex flex-col h-[calc(100vh-140px)]">
        {/* 顶部战略上下文感知状态栏 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-200/90 border border-brand-champagne/30 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-champagne/15 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-white text-sm">AI 专属品牌战略教练</strong>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                  实时在线 · 上下文已锁定
                </span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">
                当前定位：{userProfile.primaryArchetype.titleZh} · 核心杠杆：权 (Authority 92)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWeeklyReviewOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-slate-200 border border-white/10 font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-champagne" />
              <span>本周战略复盘报告</span>
            </button>
          </div>
        </div>

        {/* 聊天对话区域 */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 rounded-3xl bg-surface-200/60 border border-white/10 space-y-4 shadow-inner">
          {coachMessages.map((msg, idx) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id || idx}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md ${
                    isUser
                      ? 'bg-brand-champagne text-slate-950 font-black'
                      : 'bg-surface-100 border border-brand-champagne/30 text-brand-champagne'
                  }`}
                >
                  {isUser ? '志远' : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed space-y-2 ${
                    isUser
                      ? 'bg-brand-champagne text-slate-950 font-medium'
                      : 'bg-surface-100/90 border border-white/10 text-slate-200 shadow-xl'
                  }`}
                >
                  <div className="whitespace-pre-line font-sans">
                    {msg.content}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-brand-champagne font-mono p-3">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>AI 战略教练正在基于您的蓝图推演解答...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 底部输入框与快捷指令 */}
        <div className="space-y-3 flex-shrink-0">
          {/* 快捷指令胶囊 */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
            {slashCommands.map((sc) => (
              <button
                key={sc.cmd}
                onClick={() => handleSendMessage(sc.query)}
                className="px-3 py-1.5 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-300 hover:text-white whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <span className="text-brand-champagne font-bold">{sc.cmd}</span>
                <span>{sc.label}</span>
              </button>
            ))}
          </div>

          {/* 输入表单 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="向专属 AI 战略教练提问（例如：为什么我的内容点赞很高但缺乏咨询？输入 / 查看指令）..."
              className="flex-1 p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-champagne shadow-lg"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="px-6 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-xs hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-xl shadow-brand-champagne/20"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">发送咨询</span>
            </button>
          </form>
        </div>
      </div>

      {/* 每周战略复盘报告弹窗 */}
      {isWeeklyReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-5 text-xs">
            <button
              onClick={() => setIsWeeklyReviewOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                WEEKLY PERFORMANCE REVIEW
              </span>
              <h3 className="text-xl font-bold text-white">2026 年第 34 周战略复盘</h3>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed font-sans">
              <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <strong className="text-white block">📊 本周核心表现：</strong>
                <p>发布了 4 篇视频，获取 142 个精准线索与 28 个战略咨询预约，总营收达成 RM48,600。</p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200 border border-white/5 space-y-1">
                <strong className="text-brand-champagne block">💡 下周重点调整：</strong>
                <p>权威类（权）内容占比达到 48% 略微偏高，建议下周补充 1 篇禄（痛点共鸣）与 1 篇忌（盲点警示），以维持健康转化漏斗。</p>
              </div>
            </div>

            <button
              onClick={() => setIsWeeklyReviewOpen(false)}
              className="w-full py-3 rounded-2xl bg-brand-champagne text-slate-950 font-bold text-xs hover:bg-brand-gold transition-colors"
            >
              已阅并应用建议
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
