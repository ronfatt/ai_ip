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
    { label: '今天我应该发布什么内容驱动高客单咨询？', action: () => { router.push('/coach'); sendCoachMessage('今天我应该发布什么内容驱动高客单咨询？'); onClose(); } },
    { label: '如何进一步提升我的权威定力得分 (QUAN 92)？', action: () => { router.push('/coach'); sendCoachMessage('如何进一步提升我的权威定力得分？'); onClose(); } },
    { label: '在 AI 创作工作台生成一篇权（权威观点）视频脚本', action: () => { router.push('/studio?trans=QUAN'); onClose(); } },
    { label: '查看我的五维 IP 基因与复合原型图谱', action: () => { router.push('/ip-dna'); onClose(); } },
    { label: '查阅紫微专业数据库与星曜商业映射', action: () => { router.push('/database'); onClose(); } },
    { label: '优化我的 5 阶高客单产品阶梯与定价', action: () => { router.push('/business'); onClose(); } }
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
        {/* 搜索框 */}
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Search className="w-5 h-5 text-brand-champagne absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="向 ZIWEI IP 提问（例如：今天我该发什么？输入回车直接咨询）..."
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

        {/* 推荐快捷指令 */}
        <div className="space-y-1.5 pt-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 block">
            智能推荐快捷指令
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
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-champagne transition-colors flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* 底部快捷键提示 */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>按 ESC 关闭指令面板</span>
          <span>按 ⌘K 可随时唤起</span>
        </div>
      </div>
    </div>
  );
};
