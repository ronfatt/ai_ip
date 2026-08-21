'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Sparkles,
  Layers,
  Wand2,
  Video,
  Share2,
  Calendar,
  Save,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Zap,
  Sliders,
  Compass,
  ArrowRight,
  RefreshCw,
  Eye,
  Film,
  Camera,
  MessageSquare,
  BookOpen,
  LayoutGrid
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import {
  ContentIntent,
  FormatDuration,
  TonePreset,
  AudiencePreset,
  ScriptDraft,
  IdeaCard
} from '@/types/studio-coach';
import {
  INTENT_CONFIGS,
  SMART_IDEAS_BANK,
  detectStrategyFromTopic,
  buildCompleteScript,
  generateRepurposedContent,
  generateSeriesCampaign
} from '@/lib/studio-engine';

function StudioWorkspace() {
  const searchParams = useSearchParams();
  const { userProfile, saveScript, incrementGenerationCount, addToast, trackEvent, openUpgradeModal, activePlan } = useAppState();

  const initialTopic = searchParams?.get('topic') || '为什么年入百万的资深顾问从来不卖单次小时咨询？';

  // 创作参数状态
  const [topicInput, setTopicInput] = useState<string>(initialTopic);
  const [selectedIntent, setSelectedIntent] = useState<ContentIntent>('authority_breakdown');
  const [formatDuration, setFormatDuration] = useState<FormatDuration>('60s');
  const [selectedTone, setSelectedTone] = useState<TonePreset>('direct_sharp');
  const [selectedAudience, setSelectedAudience] = useState<AudiencePreset>('established_founders');

  // 生成的脚本与衍生状态
  const [activeDraft, setActiveDraft] = useState<ScriptDraft | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'coach' | 'repurpose' | 'series' | 'ideas'>('editor');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 策略检测信息
  const [strategyDetection, setStrategyDetection] = useState(() =>
    detectStrategyFromTopic(initialTopic, userProfile)
  );

  // 监听主题输入实时更新策略推演
  useEffect(() => {
    if (topicInput.trim()) {
      const det = detectStrategyFromTopic(topicInput, userProfile);
      setStrategyDetection(det);
      setSelectedIntent(det.detectedIntent);
    }
  }, [topicInput, userProfile]);

  // 初始化生成默认脚本
  useEffect(() => {
    const draft = buildCompleteScript(
      initialTopic,
      'authority_breakdown',
      '60s',
      'direct_sharp',
      'established_founders',
      userProfile
    );
    setActiveDraft(draft);
  }, []);

  const handleGenerateScript = () => {
    if (!topicInput.trim()) {
      addToast('请输入或选择一个内容选题', 'warning');
      return;
    }

    // 免费使用次数检查
    const permitted = incrementGenerationCount();
    if (!permitted) return;

    setIsGenerating(true);
    trackEvent('studio_script_generated', { topic: topicInput, intent: selectedIntent });

    setTimeout(() => {
      const draft = buildCompleteScript(
        topicInput,
        selectedIntent,
        formatDuration,
        selectedTone,
        selectedAudience,
        userProfile
      );
      setActiveDraft(draft);
      setIsGenerating(false);
      addToast('✨ 已生成全新定制化视频脚本！', 'success');
    }, 600);
  };

  const handleSelectIdea = (idea: IdeaCard) => {
    setTopicInput(idea.topic);
    setSelectedIntent(idea.intent);
    setActiveTab('editor');
    addToast(`已加载精选选题：${idea.topic}`, 'info');
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    addToast('已复制到剪贴板', 'success');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSaveToLibrary = () => {
    if (!activeDraft) return;
    saveScript({
      id: activeDraft.id,
      topic: activeDraft.topic,
      contentType: 'Opinion',
      transformation: activeDraft.transformation,
      hookOptions: activeDraft.hookOptions.map((h) => ({ text: h.text, score: h.score, style: h.style })),
      coreIdea: activeDraft.structuredAngle,
      script30s: activeDraft.blocks[0].content + ' ' + activeDraft.blocks[1].content,
      script60s: activeDraft.blocks.map((b) => b.content).join(' '),
      cta: activeDraft.blocks[3]?.content || '',
      caption: activeDraft.captionText,
      thumbnailTitle: activeDraft.thumbnailTitles[activeDraft.selectedThumbnailIndex] || activeDraft.topic,
      bRollIdeas: activeDraft.bRollIdeas,
      shotSuggestions: activeDraft.shotPlan,
      createdAt: new Date().toISOString(),
      saved: true
    });
  };

  // AI 快捷修饰动作
  const handleApplyModifier = (modifier: string) => {
    if (!activeDraft) return;
    addToast(`正在应用 AI 修饰器：【${modifier}】`, 'info');

    setTimeout(() => {
      let updatedBlocks = [...activeDraft.blocks];
      if (modifier === '更精炼') {
        updatedBlocks = updatedBlocks.map((b) => ({
          ...b,
          content: b.content.replace(/真正|其实|在这个世界上|往往/g, '').trim()
        }));
      } else if (modifier === '更犀利') {
        updatedBlocks[0].content = '别再自欺欺人了：' + updatedBlocks[0].content;
      }
      setActiveDraft({ ...activeDraft, blocks: updatedBlocks });
      addToast(`已成功完成【${modifier}】润色！`, 'success');
    }, 400);
  };

  const repurposed = activeDraft ? generateRepurposedContent(activeDraft) : null;
  const seriesCampaign = activeDraft ? generateSeriesCampaign(activeDraft.topic) : null;

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
        {/* 顶部 Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                AI CREATOR OPERATING SYSTEM
              </span>
              <span className="text-xs text-slate-400 font-mono">2026 创作者引擎</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AI 个人品牌创作工作台
            </h1>
            <p className="text-sm text-slate-300">
              基于您的紫微 IP 基因与四化飞轮，生成具备高认知密度与高转化力的坐姿视频脚本与多平台内容资产。
            </p>
          </div>

          {/* 选项卡切换器 */}
          <div className="p-1 rounded-2xl bg-surface-200 border border-white/10 flex items-center gap-1 self-start sm:self-auto overflow-x-auto text-xs font-mono">
            {[
              { id: 'editor', label: '视频脚本工作台', icon: Video },
              { id: 'coach', label: '出镜教练与拍摄', icon: Camera },
              { id: 'repurpose', label: '7大平台一键分发', icon: Share2 },
              { id: 'series', label: '7天主题战役连载', icon: Calendar },
              { id: 'ideas', label: '12大核心选题库', icon: LayoutGrid }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-brand-champagne text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 列深度工作区布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= 左列：创作控制面板 (lg:col-span-4) ================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-5 shadow-xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  TOPIC & INTENT CONFIG
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">选题与战略意图</h3>
              </div>

              {/* 选题输入框 */}
              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-slate-300">内容核心主题 / 痛点切入</label>
                <textarea
                  rows={3}
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  placeholder="输入你想探讨的商业观点、案例或客户痛点..."
                  className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white text-xs leading-relaxed focus:outline-none focus:border-brand-champagne"
                />
              </div>

              {/* 实时 AI 策略检测卡片 */}
              <div className="p-3.5 rounded-2xl bg-surface-100 border border-brand-champagne/20 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-champagne uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> AI 策略意图推演
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    匹配度: {strategyDetection.fitScore}%
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {strategyDetection.strategicReasonZh}
                </p>
              </div>

              {/* 8 大意图选择器 */}
              <div className="space-y-2 text-xs">
                <label className="font-bold text-slate-300 block">选择核心创作意图</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(INTENT_CONFIGS).map((cfg) => {
                    const isSelected = selectedIntent === cfg.id;
                    return (
                      <button
                        key={cfg.id}
                        type="button"
                        onClick={() => setSelectedIntent(cfg.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-surface-100 border-brand-champagne text-brand-champagne font-bold shadow-sm'
                            : 'bg-surface-300/80 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="text-[11px] block truncate">{cfg.titleZh}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 时长、语调与受众配置 */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-mono">视频时长</label>
                  <select
                    value={formatDuration}
                    onChange={(e) => setFormatDuration(e.target.value as any)}
                    className="w-full p-2 rounded-xl bg-surface-100 border border-white/10 text-white text-[11px] focus:outline-none"
                  >
                    <option value="30s">30秒 精炼</option>
                    <option value="60s">60秒 黄金标准</option>
                    <option value="90s">90秒 深度展开</option>
                    <option value="deep_dive">5-10分 大师拆解</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-mono">表达语态</label>
                  <select
                    value={selectedTone}
                    onChange={(e) => setSelectedTone(e.target.value as any)}
                    className="w-full p-2 rounded-xl bg-surface-100 border border-white/10 text-white text-[11px] focus:outline-none"
                  >
                    <option value="direct_sharp">直接犀利 (90%)</option>
                    <option value="calm_strategic">沉稳克制 (95%)</option>
                    <option value="diagnostic_challenger">诊断挑战 (88%)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-mono">目标买家</label>
                  <select
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value as any)}
                    className="w-full p-2 rounded-xl bg-surface-100 border border-white/10 text-white text-[11px] focus:outline-none"
                  >
                    <option value="established_founders">成熟企业主/高管</option>
                    <option value="consultants_coaches">独立顾问/教练</option>
                    <option value="senior_specialists">资深专家</option>
                  </select>
                </div>
              </div>

              {/* 生成按钮 */}
              <button
                type="button"
                onClick={handleGenerateScript}
                disabled={isGenerating}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <span>正在推演生成脚本...</span>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>立即生成定制脚本</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ================= 右侧：多功能工作区展示 (lg:col-span-8) ================= */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. 视频脚本工作台视图 */}
            {activeTab === 'editor' && activeDraft && (
              <div className="space-y-6">
                {/* 脚本头部指标与操作 */}
                <div className="p-6 sm:p-7 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase text-brand-champagne bg-brand-champagne/15 px-2.5 py-0.5 rounded">
                          {INTENT_CONFIGS[activeDraft.intent].titleZh}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">
                          内容就绪度: {activeDraft.readinessScore}/100
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white">{activeDraft.topic}</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSaveToLibrary}
                        className="px-3.5 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30 text-xs font-bold transition-all flex items-center gap-1.5"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>保存至资产库</span>
                      </button>
                    </div>
                  </div>

                  {/* 3 组爆款破局钩子（Hook）选择器 */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-bold text-brand-champagne uppercase block">
                      3 组高转化黄金破局钩子（前 3 秒留人率）：
                    </span>
                    <div className="space-y-2 text-xs">
                      {activeDraft.hookOptions.map((h) => {
                        const isSelected = activeDraft.selectedHookId === h.id;
                        return (
                          <div
                            key={h.id}
                            onClick={() => setActiveDraft({ ...activeDraft, selectedHookId: h.id })}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-surface-100 border-brand-champagne text-white shadow-md ring-1 ring-brand-champagne/30'
                                : 'bg-surface-300/80 border-white/5 text-slate-300 hover:border-white/20'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-mono font-bold text-brand-champagne block">
                                {h.style} (转化分: {h.score})
                              </span>
                              <p className="font-medium leading-snug">“{h.text}”</p>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-brand-champagne flex-shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 时间轴可视化结构块编辑器 */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-champagne uppercase">
                        结构化分段逐字稿与镜头指导：
                      </span>
                      {/* AI 修饰器按钮 */}
                      <div className="flex items-center gap-1 text-[11px] font-mono">
                        <button
                          onClick={() => handleApplyModifier('更精炼')}
                          className="px-2 py-1 rounded bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white"
                        >
                          更精炼
                        </button>
                        <button
                          onClick={() => handleApplyModifier('更犀利')}
                          className="px-2 py-1 rounded bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white"
                        >
                          更犀利
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs">
                      {activeDraft.blocks.map((b, idx) => (
                        <div
                          key={b.id}
                          className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2"
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="font-bold text-brand-champagne">
                              {b.timestampRange} · {b.stageName}
                            </span>
                            <span className="text-slate-400">分段 0{idx + 1}</span>
                          </div>

                          <p className="text-white text-xs leading-relaxed font-medium">
                            {b.content}
                          </p>

                          <div className="pt-1.5 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                            <Film className="w-3 h-3 text-brand-champagne" />
                            <span>{b.screenGuidance}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 封面标题与文案排版 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/5 text-xs">
                    <div className="space-y-2">
                      <span className="font-mono font-bold text-brand-champagne text-[10px] uppercase block">
                        5 款高点击率封面标题备选：
                      </span>
                      <div className="space-y-1 text-slate-300 font-mono text-[11px]">
                        {activeDraft.thumbnailTitles.map((th, i) => (
                          <div
                            key={i}
                            onClick={() => setActiveDraft({ ...activeDraft, selectedThumbnailIndex: i })}
                            className={`p-2 rounded-xl border cursor-pointer ${
                              activeDraft.selectedThumbnailIndex === i
                                ? 'bg-surface-300 border-brand-champagne text-white font-bold'
                                : 'bg-surface-100 border-white/5 text-slate-400'
                            }`}
                          >
                            {i + 1}. {th.replace('\n', ' —— ')}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-brand-champagne text-[10px] uppercase block">
                          社交平台完整发布文案：
                        </span>
                        <button
                          onClick={() => handleCopyText(activeDraft.captionText, 'caption')}
                          className="text-[10px] font-mono text-brand-champagne hover:underline"
                        >
                          {copiedKey === 'caption' ? '已复制！' : '一键复制文案'}
                        </button>
                      </div>
                      <textarea
                        rows={5}
                        readOnly
                        value={activeDraft.captionText}
                        className="w-full p-2.5 rounded-xl bg-surface-100 border border-white/5 text-slate-300 text-[11px] leading-relaxed font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. 出镜教练与拍摄指导视图 */}
            {activeTab === 'coach' && activeDraft && (
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl text-xs">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    DELIVERY & SHOT PLAN
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">出镜表现力与分镜指导</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-3">
                    <strong className="text-white text-sm block">🎤 黄金语速与发声教练：</strong>
                    <div className="space-y-2 text-slate-300">
                      <div><span className="text-slate-400">语速：</span>{activeDraft.deliveryCoach.pace}</div>
                      <div><span className="text-slate-400">气场能量：</span>{activeDraft.deliveryCoach.energy}</div>
                      <div><span className="text-slate-400">留白停顿：</span>{activeDraft.deliveryCoach.pauses}</div>
                      <div><span className="text-slate-400">坐姿仪态：</span>{activeDraft.deliveryCoach.posture}</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-3">
                    <strong className="text-white text-sm block">🎬 B-Roll 空镜与辅助镜头灵感：</strong>
                    <ul className="space-y-1.5 text-slate-300">
                      {activeDraft.bRollIdeas.map((br, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-brand-champagne font-bold">•</span>
                          <span>{br}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-100 border border-white/5 space-y-2">
                  <strong className="text-white text-sm block">分镜头切换节奏方案：</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
                    {activeDraft.shotPlan.map((sp, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-surface-200 border border-white/5">
                        {sp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. 7 大平台一键分发重构视图 */}
            {activeTab === 'repurpose' && repurposed && (
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                      7-CHANNEL REPURPOSE ENGINE
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">7 大平台一键智能重构分发</h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">自适应多渠道</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: 'linkedin', ...repurposed.linkedin },
                    { key: 'xiaohongshu', ...repurposed.xiaohongshu },
                    { key: 'wechatArticle', ...repurposed.wechatArticle },
                    { key: 'newsletter', ...repurposed.newsletter },
                    { key: 'podcastOutline', ...repurposed.podcastOutline },
                    { key: 'communityPrompt', ...repurposed.communityPrompt },
                    { key: 'salesAngle', ...repurposed.salesAngle },
                  ].map((ch) => (
                    <div
                      key={ch.key}
                      className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-2 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white font-mono">{ch.platform}</span>
                        <button
                          onClick={() => handleCopyText(ch.content, ch.key)}
                          className="text-[10px] font-mono text-brand-champagne hover:underline"
                        >
                          {copiedKey === ch.key ? '已复制！' : '复制文案'}
                        </button>
                      </div>
                      <p className="text-slate-300 font-mono text-[11px] leading-relaxed whitespace-pre-line line-clamp-6">
                        {ch.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. 7 天主题战役连载视图 */}
            {activeTab === 'series' && seriesCampaign && (
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl text-xs">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    7-DAY CAMPAIGN ROADMAP
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{seriesCampaign.campaignTitle}</h3>
                  <p className="text-slate-400 mt-0.5 font-mono">{seriesCampaign.themeZh}</p>
                </div>

                <div className="space-y-3 font-mono">
                  {seriesCampaign.days.map((d) => (
                    <div
                      key={d.dayNumber}
                      className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-surface-200 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center font-bold text-xs flex-shrink-0">
                          D{d.dayNumber}
                        </span>
                        <div>
                          <strong className="text-white text-xs block">{d.title}</strong>
                          <span className="text-[10px] text-slate-400">{d.focus}</span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-surface-200 text-brand-champagne self-start sm:self-auto">
                        能量: {d.transformation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. 12 大核心选题库视图 */}
            {activeTab === 'ideas' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/90 border border-white/10 space-y-6 shadow-xl text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                      12 SIGNATURE CORE TOPICS
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">12 大高转化核心签名选题库</h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">永不枯竭灵感</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SMART_IDEAS_BANK.map((idea, idx) => (
                    <div
                      key={idea.id}
                      onClick={() => handleSelectIdea(idea)}
                      className="p-4 rounded-2xl bg-surface-100 border border-white/5 hover:border-brand-champagne/40 cursor-pointer transition-all space-y-2 flex flex-col justify-between group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-brand-champagne font-bold text-[10px]">
                            选题 0{idx + 1} · {idea.transformation}
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold font-mono">
                            匹配度 {idea.matchScore}%
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-xs group-hover:text-brand-champagne transition-colors">
                          {idea.topic}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {idea.reasonZh}
                        </p>
                      </div>

                      <span className="text-[10px] font-mono text-brand-champagne flex items-center gap-1 pt-2 border-t border-white/5">
                        加载至脚本工作台 &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">正在加载 AI 创作工作台...</div>}>
      <StudioWorkspace />
    </Suspense>
  );
}
