'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  Copy,
  Bookmark,
  RefreshCw,
  Download,
  Share2,
  Check,
  Video,
  FileText,
  Layers,
  Sliders,
  Maximize2,
  Clock,
  User,
  Users,
  Eye,
  AlertTriangle,
  Play,
  RotateCcw,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  TrendingUp,
  HelpCircle,
  FolderPlus,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Mail,
  Send,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppState } from '@/context/AppStateContext';
import { TransformationKey } from '@/types/database';
import {
  ContentIntent,
  ContentFormat,
  VideoDuration,
  ToneStyle,
  FullStudioResult,
  ScriptBlock,
  IdeaVaultItem
} from '@/types/studio-coach';
import {
  detectStrategyFromTopic,
  buildCompleteStudioResult,
  generateTwelveSmartIdeas,
  DEFAULT_IDEA_VAULT
} from '@/lib/studio-engine';
import { copyToClipboard, triggerConfetti } from '@/lib/utils';

const FORMAT_OPTIONS: { format: ContentFormat; label: string; iconName: string }[] = [
  { format: 'Short Video', label: 'Short Video', iconName: 'Video' },
  { format: 'Reel / TikTok', label: 'Reel / TikTok', iconName: 'Instagram' },
  { format: 'Talking Head', label: 'Talking Head', iconName: 'User' },
  { format: 'Carousel', label: 'Carousel (PDF)', iconName: 'Layers' },
  { format: 'LinkedIn Post', label: 'LinkedIn Post', iconName: 'Linkedin' },
  { format: 'Facebook Post', label: 'Facebook Post', iconName: 'Facebook' },
  { format: 'Long Caption', label: 'Long Caption', iconName: 'FileText' },
  { format: 'Story', label: '3-Part Story', iconName: 'Play' },
  { format: 'Email', label: 'Newsletter', iconName: 'Mail' },
  { format: 'YouTube Short', label: 'YouTube Short', iconName: 'Video' }
];

const INTENT_OPTIONS: { intent: ContentIntent; trans: TransformationKey; label: string }[] = [
  { intent: 'Build Authority', trans: 'QUAN', label: '👑 Build Authority (QUAN)' },
  { intent: 'Build Trust', trans: 'KE', label: '🛡️ Build Trust (KE)' },
  { intent: 'Attract Attention', trans: 'LU', label: '🌟 Attract Attention (LU)' },
  { intent: 'Challenge Assumptions', trans: 'JI', label: '⚡ Challenge Assumptions (JI)' },
  { intent: 'Generate Leads', trans: 'LU', label: '🎯 Generate Leads' },
  { intent: 'Sell an Offer', trans: 'QUAN', label: '💰 Sell an Offer' },
  { intent: 'Educate', trans: 'KE', label: '📚 Educate & Framework' },
  { intent: 'Tell a Story', trans: 'JI', label: '📖 Tell a Story' }
];

const TONE_OPTIONS: ToneStyle[] = [
  'My Brand Voice',
  'Direct',
  'Strategic',
  'Calm',
  'Confident',
  'Warm',
  'Sharp',
  'Provocative',
  'Educational',
  'Premium'
];

const AUDIENCE_OPTIONS = [
  'SME Owners & Knowledge-Based Entrepreneurs',
  'First-Time Founders & Startups',
  'High-Ticket B2B Decision Makers',
  'Consultants & Independent Coaches',
  'Transitioning Corporate Executives'
];

function StudioWorkspace() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userProfile, savedScripts, saveScript, addToast } = useAppState();

  // Input & Strategy Controls State
  const [topicInput, setTopicInput] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<ContentIntent>('Build Authority');
  const [selectedTransformation, setSelectedTransformation] = useState<TransformationKey>('QUAN');
  const [selectedFormat, setSelectedFormat] = useState<ContentFormat>('Short Video');
  const [selectedDuration, setSelectedDuration] = useState<VideoDuration>('45s');
  const [selectedTone, setSelectedTone] = useState<ToneStyle>('My Brand Voice');
  const [selectedAudience, setSelectedAudience] = useState<string>('SME Owners & Knowledge-Based Entrepreneurs');

  // AI Strategy Detection States
  const [isDetectingStrategy, setIsDetectingStrategy] = useState(false);
  const [detectionStageIndex, setDetectionStageIndex] = useState(0);
  const [detectionResult, setDetectionResult] = useState<{
    recommendedTrans: TransformationKey;
    recommendedIntent: ContentIntent;
    confidence: number;
    reason: string;
    alternatives: { trans: TransformationKey; score: number }[];
  } | null>(null);

  // Studio Output State
  const [isBuildingContent, setIsBuildingContent] = useState(false);
  const [currentResult, setCurrentResult] = useState<FullStudioResult | null>(null);

  // Active Center Sub-Tabs
  const [activeOutputSection, setActiveOutputSection] = useState<'script' | 'delivery' | 'shots' | 'repurpose' | 'series'>('script');
  const [activeRepurposeTab, setActiveRepurposeTab] = useState<'reel' | 'linkedin' | 'facebook' | 'carousel' | 'stories' | 'email' | 'hooks'>('reel');

  // Idea Vault & Smart Ideas Modal
  const [ideaVault, setIdeaVault] = useState<IdeaVaultItem[]>(DEFAULT_IDEA_VAULT);
  const [isSmartIdeasOpen, setIsSmartIdeasOpen] = useState(false);
  const [newVaultTopic, setNewVaultTopic] = useState('');

  // Editable Script Blocks
  const [editableBlocks, setEditableBlocks] = useState<ScriptBlock[]>([]);

  // Detection Stages text
  const detectionStages = [
    'Analyzing topic semantics...',
    'Matching audience profile...',
    'Checking brand voice alignment...',
    'Selecting influence strategy (LU / QUAN / KE / JI)...',
    'Building high-ticket positioning angle...'
  ];

  // URL parameters initialization
  useEffect(() => {
    const urlTrans = searchParams?.get('trans') as TransformationKey | null;
    const urlTopic = searchParams?.get('topic');

    const initialTopic = urlTopic ? decodeURIComponent(urlTopic) : 'Why most business owners should stop copying generic influencers';
    setTopicInput(initialTopic);

    if (urlTrans && ['LU', 'QUAN', 'KE', 'JI'].includes(urlTrans)) {
      setSelectedTransformation(urlTrans);
      if (urlTrans === 'LU') setSelectedIntent('Attract Attention');
      if (urlTrans === 'QUAN') setSelectedIntent('Build Authority');
      if (urlTrans === 'KE') setSelectedIntent('Build Trust');
      if (urlTrans === 'JI') setSelectedIntent('Challenge Assumptions');
    }

    // Auto generate default initial output
    const defaultRes = buildCompleteStudioResult({
      topic: initialTopic,
      intent: 'Build Authority',
      transformation: urlTrans || 'QUAN',
      format: 'Short Video',
      duration: '45s',
      tone: 'My Brand Voice',
      audience: 'SME Owners & Knowledge-Based Entrepreneurs',
      userProfile
    });
    setCurrentResult(defaultRes);
    setEditableBlocks(defaultRes.scriptBlocks);
    setDetectionResult({
      recommendedTrans: urlTrans || 'QUAN',
      recommendedIntent: 'Build Authority',
      confidence: 88,
      reason: 'This topic is strongest when positioned as an expert judgment and boundary-setting framework rather than a general educational post.',
      alternatives: [
        { trans: 'KE', score: 72 },
        { trans: 'JI', score: 65 }
      ]
    });
  }, [searchParams]);

  // Handle Strategy Detection & Content Build Flow
  const handleBuildContent = () => {
    if (!topicInput.trim()) {
      addToast('Please enter a topic or select an idea.', 'warning');
      return;
    }

    setIsDetectingStrategy(true);
    setDetectionStageIndex(0);

    const interval = setInterval(() => {
      setDetectionStageIndex((prev) => {
        if (prev < detectionStages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsDetectingStrategy(false);

          // Detected Strategy
          const detected = detectStrategyFromTopic(topicInput);
          setDetectionResult(detected);
          setSelectedTransformation(detected.recommendedTrans);
          setSelectedIntent(detected.recommendedIntent);

          // Build full structured content
          setIsBuildingContent(true);
          setTimeout(() => {
            const built = buildCompleteStudioResult({
              topic: topicInput,
              intent: detected.recommendedIntent,
              transformation: detected.recommendedTrans,
              format: selectedFormat,
              duration: selectedDuration,
              tone: selectedTone,
              audience: selectedAudience,
              userProfile
            });
            setCurrentResult(built);
            setEditableBlocks(built.scriptBlocks);
            setIsBuildingContent(false);
            triggerConfetti();
            addToast('Personalized content ecosystem built!', 'success');
          }, 600);

          return prev;
        }
      });
    }, 350);
  };

  // Block Modifiers
  const handleModifyBlockContent = (blockId: string, modificationType: 'shorter' | 'direct' | 'emotional' | 'premium' | 'simplify') => {
    setEditableBlocks((prev) =>
      prev.map((blk) => {
        if (blk.id !== blockId) return blk;
        let modified = blk.content;
        if (modificationType === 'shorter') modified = blk.content.split('\n')[0] || blk.content.slice(0, 80) + '...';
        if (modificationType === 'direct') modified = 'Bottom line: ' + blk.content.replace(/I think|Maybe|Perhaps/gi, '').trim();
        if (modificationType === 'emotional') modified = 'I know how exhausting this is: ' + blk.content;
        if (modificationType === 'premium') modified = 'From an enterprise governance perspective: ' + blk.content;
        if (modificationType === 'simplify') modified = 'Here is the simple truth: ' + blk.content.replace(/diagnostic|methodological/gi, 'clear');
        return { ...blk, content: modified };
      })
    );
    addToast(`Applied block refinement (${modificationType})`, 'info');
  };

  const handleUpdateBlockText = (blockId: string, newText: string) => {
    setEditableBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, content: newText } : b))
    );
  };

  const handleSaveToLibrary = () => {
    if (!currentResult) return;
    saveScript({
      id: currentResult.id,
      topic: currentResult.topic,
      contentType: 'Opinion',
      transformation: currentResult.transformation,
      hookOptions: currentResult.hookOptions.map((h) => ({ text: h.text, score: h.retentionScore, style: h.style })),
      coreIdea: currentResult.coreMessage,
      script30s: currentResult.scriptBlocks.slice(0, 3).map((b) => b.content).join('\n'),
      script60s: editableBlocks.map((b) => b.content).join('\n\n'),
      cta: currentResult.ctaChoice,
      caption: currentResult.captions[currentResult.selectedCaptionStyle],
      thumbnailTitle: currentResult.selectedThumbnail,
      bRollIdeas: currentResult.bRollIdeas,
      shotSuggestions: currentResult.shotPlan.map((s) => `${s.number} (${s.framing}): ${s.action}`),
      createdAt: new Date().toISOString(),
      saved: true
    });
  };

  const handleSaveToIdeaVault = (topicToSave: string, tag: IdeaVaultItem['tag'] = 'Opinion') => {
    const newItem: IdeaVaultItem = {
      id: `vault_${Date.now()}`,
      topic: topicToSave,
      tag,
      transformation: selectedTransformation,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setIdeaVault((prev) => [newItem, ...prev]);
    setNewVaultTopic('');
    addToast('Idea saved to Vault!', 'success');
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in max-w-[1440px] mx-auto">
        {/* ================= PAGE HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-violet bg-brand-violet/10 px-2.5 py-0.5 rounded-full border border-brand-violet/30">
                CREATOR OPERATING SYSTEM
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Context Active: <strong className="text-brand-champagne">{userProfile.primaryArchetype.name}</strong> · Authority {userProfile.scores.authority}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              AI CONTENT STUDIO
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong>Turn your positioning into content people remember.</strong> Every idea is shaped by your IP Blueprint, audience, and influence strategy.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsSmartIdeasOpen(true)}
              className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne border border-brand-champagne/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Give Me Ideas</span>
            </button>

            <button
              onClick={handleSaveToLibrary}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-extrabold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
            >
              <Bookmark className="w-4 h-4" />
              <span>Save Full Dossier</span>
            </button>
          </div>
        </div>

        {/* ================= MAIN 3-COLUMN WORKSPACE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ================= LEFT COLUMN: INPUT & STRATEGY (lg:col-span-4) ================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Create Area */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 shadow-xl space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-champagne font-mono block">
                  What do you want to talk about?
                </label>
                <textarea
                  rows={3}
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  placeholder="Why most business owners should stop copying influencers..."
                  className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne text-xs sm:text-sm leading-relaxed"
                />
              </div>

              {/* Quick Topic Chips */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Suggested Prompts:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Why business owners should stop copying influencers',
                    'How we restructured an hourly rate into an RM18k retainer',
                    'Why expertise can secretly hurt your video hooks'
                  ].map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setTopicInput(p)}
                      className="px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-surface-50 text-[10px] text-slate-300 hover:text-white border border-white/5 truncate max-w-full text-left"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Strategic CTA */}
              <button
                onClick={handleBuildContent}
                disabled={isDetectingStrategy || isBuildingContent}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
              >
                {isDetectingStrategy ? (
                  <span className="flex items-center gap-2 font-mono">
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>{detectionStages[detectionStageIndex]}</span>
                  </span>
                ) : isBuildingContent ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                    <span>Building Content Ecosystem...</span>
                  </span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>Build My Content</span>
                  </>
                )}
              </button>
            </div>

            {/* AI Strategy Detection Panel */}
            {detectionResult && (
              <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 space-y-3 animate-fade-in shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    AI STRATEGY DETECTED
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {detectionResult.confidence}% Match
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-white">
                    {detectionResult.recommendedTrans} — {detectionResult.recommendedIntent}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {detectionResult.reason}
                  </p>
                </div>

                {/* Alternative Strategy Overrides */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Override Strategy:</span>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
                    {['LU', 'QUAN', 'KE', 'JI'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTransformation(t as TransformationKey)}
                        className={`p-1.5 rounded-lg border text-center font-bold transition-all ${
                          selectedTransformation === t
                            ? 'bg-brand-champagne text-slate-950 border-brand-champagne shadow-sm'
                            : 'bg-surface-100 text-slate-400 hover:text-white border-white/5'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Strategy & Formulation Controls */}
            <div className="p-5 rounded-3xl bg-surface-200/80 border border-white/10 space-y-4 text-xs">
              {/* Content Intent */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Content Intent
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {INTENT_OPTIONS.map((opt) => (
                    <button
                      key={opt.intent}
                      onClick={() => {
                        setSelectedIntent(opt.intent);
                        setSelectedTransformation(opt.trans);
                      }}
                      className={`p-2 rounded-xl text-[11px] font-medium border text-left truncate transition-all ${
                        selectedIntent === opt.intent
                          ? 'bg-brand-violet text-white border-brand-violet'
                          : 'bg-surface-100 text-slate-400 hover:text-slate-200 border-white/5'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Format Selector
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {FORMAT_OPTIONS.map((f) => (
                    <button
                      key={f.format}
                      onClick={() => setSelectedFormat(f.format)}
                      className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border transition-all ${
                        selectedFormat === f.format
                          ? 'bg-brand-champagne text-slate-950 border-brand-champagne shadow-sm font-bold'
                          : 'bg-surface-100 text-slate-400 hover:text-slate-200 border-white/5'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Video Duration
                </label>
                <div className="grid grid-cols-5 gap-1 text-center font-mono">
                  {(['15s', '30s', '45s', '60s', '90s'] as VideoDuration[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`p-1.5 rounded-lg border text-xs font-bold transition-all ${
                        selectedDuration === d
                          ? 'bg-surface-100 border-brand-champagne text-brand-champagne'
                          : 'bg-surface-100 text-slate-500 border-white/5 hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone Control */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Tone Control
                </label>
                <select
                  value={selectedTone}
                  onChange={(e) => setSelectedTone(e.target.value as ToneStyle)}
                  className="w-full p-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne font-medium"
                >
                  {TONE_OPTIONS.map((t) => (
                    <option key={t} value={t} className="bg-surface-300">
                      {t === 'My Brand Voice' ? `⭐ Use My Brand Voice (Direct, Strategic)` : t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Audience Target */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Audience Target
                </label>
                <select
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="w-full p-2 rounded-xl bg-surface-100 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-champagne font-medium"
                >
                  {AUDIENCE_OPTIONS.map((a) => (
                    <option key={a} value={a} className="bg-surface-300">
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN: STRUCTURED CONTENT & VISUAL EDITOR (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 space-y-6">
            {currentResult && (
              <div className="space-y-6 animate-fade-in">
                {/* Center Sub-Navigation Tabs */}
                <div className="flex items-center gap-1 bg-surface-200 p-1.5 rounded-2xl border border-white/10 overflow-x-auto text-xs font-bold">
                  <button
                    onClick={() => setActiveOutputSection('script')}
                    className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                      activeOutputSection === 'script' ? 'bg-brand-champagne text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🎬 Script Editor
                  </button>
                  <button
                    onClick={() => setActiveOutputSection('delivery')}
                    className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                      activeOutputSection === 'delivery' ? 'bg-brand-champagne text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🎙️ How To Say It
                  </button>
                  <button
                    onClick={() => setActiveOutputSection('shots')}
                    className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                      activeOutputSection === 'shots' ? 'bg-brand-champagne text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🎥 Shot Plan & B-Roll
                  </button>
                  <button
                    onClick={() => setActiveOutputSection('repurpose')}
                    className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                      activeOutputSection === 'repurpose' ? 'bg-brand-champagne text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ⚡ Repurpose
                  </button>
                  <button
                    onClick={() => setActiveOutputSection('series')}
                    className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                      activeOutputSection === 'series' ? 'bg-brand-champagne text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    📅 7-Day Series
                  </button>
                </div>

                {/* ================= SUB-TAB 1: SCRIPT VISUAL EDITOR ================= */}
                {activeOutputSection === 'script' && (
                  <div className="space-y-6">
                    {/* 1. Strategic Angle Card */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-surface-200/90 border border-brand-champagne/30 space-y-1 text-xs">
                      <span className="font-mono font-bold uppercase tracking-wider text-brand-champagne block text-[10px]">
                        1. STRATEGIC ANGLE
                      </span>
                      <p className="text-slate-100 font-bold text-sm leading-snug">
                        “{currentResult.strategicAngle}”
                      </p>
                    </div>

                    {/* 2. Hook & 3 Alternate Hooks */}
                    <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                          2. HOOK VARIATIONS
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Select or Refine</span>
                      </div>

                      <div className="space-y-3">
                        {currentResult.hookOptions.map((hook, idx) => (
                          <div
                            key={hook.id}
                            className="p-3.5 rounded-2xl bg-surface-100 border border-white/5 space-y-2 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono font-bold text-[10px] text-brand-champagne">
                                Hook 0{idx + 1} · {hook.style}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono font-bold">
                                Retention: {hook.retentionScore}%
                              </span>
                            </div>

                            <p className="text-slate-200 font-medium text-xs leading-snug">
                              “{hook.text}”
                            </p>

                            <div className="flex items-center gap-1.5 pt-1 text-[10px] font-mono">
                              <button
                                onClick={() => {
                                  handleUpdateBlockText('blk_1', hook.text);
                                  addToast('Hook applied to script!', 'success');
                                }}
                                className="px-2 py-0.5 rounded bg-brand-champagne text-slate-950 font-bold"
                              >
                                Use
                              </button>
                              <button
                                onClick={() => addToast('Hook rewritten with higher polarity', 'info')}
                                className="px-2 py-0.5 rounded bg-surface-200 text-slate-300 hover:text-white"
                              >
                                Stronger
                              </button>
                              <button
                                onClick={() => addToast('Hook softened for warmer resonance', 'info')}
                                className="px-2 py-0.5 rounded bg-surface-200 text-slate-300 hover:text-white"
                              >
                                Softer
                              </button>
                              <button
                                onClick={() => copyToClipboard(hook.text).then(() => addToast('Hook copied!', 'success'))}
                                className="px-2 py-0.5 rounded bg-surface-200 text-slate-400 hover:text-white ml-auto"
                              >
                                Copy
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Core Message */}
                    <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 space-y-1 text-xs">
                      <span className="font-mono font-bold uppercase tracking-wider text-slate-400 block text-[10px]">
                        3. CORE STRATEGIC MESSAGE
                      </span>
                      <p className="text-slate-300 leading-relaxed font-medium">
                        {currentResult.coreMessage}
                      </p>
                    </div>

                    {/* 4. Timestamped Visual Script Blocks */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                          4. TIMESTAMPED FULL SCRIPT BLOCKS
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Editable Blocks</span>
                      </div>

                      {editableBlocks.map((block) => (
                        <div
                          key={block.id}
                          className="p-4 rounded-2xl bg-surface-200 border border-white/10 space-y-2 text-xs transition-all hover:border-brand-champagne/30"
                        >
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-white/5 text-brand-champagne font-mono font-bold text-[10px]">
                                {block.timestamp}
                              </span>
                              <span className="font-bold text-white uppercase text-[11px] font-mono">
                                [{block.type}] {block.title}
                              </span>
                            </div>
                          </div>

                          <textarea
                            rows={3}
                            value={block.content}
                            onChange={(e) => handleUpdateBlockText(block.id, e.target.value)}
                            className="w-full p-3 rounded-xl bg-surface-100 border border-white/5 text-slate-200 text-xs focus:outline-none focus:border-brand-champagne leading-relaxed font-sans"
                          />

                          {/* Quick AI Refinement Modifiers */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] font-mono text-slate-400">
                            <span>Refine:</span>
                            <button
                              onClick={() => handleModifyBlockContent(block.id, 'shorter')}
                              className="px-2 py-0.5 rounded bg-surface-100 hover:bg-surface-50 text-slate-300"
                            >
                              Make Shorter
                            </button>
                            <button
                              onClick={() => handleModifyBlockContent(block.id, 'direct')}
                              className="px-2 py-0.5 rounded bg-surface-100 hover:bg-surface-50 text-slate-300"
                            >
                              More Direct
                            </button>
                            <button
                              onClick={() => handleModifyBlockContent(block.id, 'emotional')}
                              className="px-2 py-0.5 rounded bg-surface-100 hover:bg-surface-50 text-slate-300"
                            >
                              More Emotional
                            </button>
                            <button
                              onClick={() => handleModifyBlockContent(block.id, 'premium')}
                              className="px-2 py-0.5 rounded bg-surface-100 hover:bg-surface-50 text-slate-300"
                            >
                              More Premium
                            </button>
                            <button
                              onClick={() => handleModifyBlockContent(block.id, 'simplify')}
                              className="px-2 py-0.5 rounded bg-surface-100 hover:bg-surface-50 text-slate-300"
                            >
                              Simplify Language
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Thumbnail & Captions Quick Panel */}
                    <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 text-xs">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne block mb-1">
                          5 Thumbnails / Cover Titles
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {currentResult.thumbnailTitles.map((th, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                setCurrentResult({ ...currentResult, selectedThumbnail: th });
                                addToast('Thumbnail selected!', 'info');
                              }}
                              className={`p-2 rounded-xl text-[11px] font-mono font-bold border text-left truncate transition-all ${
                                currentResult.selectedThumbnail === th
                                  ? 'bg-brand-champagne text-slate-950 border-brand-champagne'
                                  : 'bg-surface-100 text-slate-300 border-white/5 hover:border-white/20'
                              }`}
                            >
                              {th}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                            Social Caption (Short Style)
                          </span>
                          <button
                            onClick={() => copyToClipboard(currentResult.captions.short).then(() => addToast('Caption copied!', 'success'))}
                            className="text-brand-champagne hover:underline font-mono text-[11px]"
                          >
                            Copy Caption
                          </button>
                        </div>
                        <div className="whitespace-pre-line text-slate-300 leading-relaxed p-3 rounded-xl bg-surface-100 border border-white/5 text-xs">
                          {currentResult.captions.short}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ================= SUB-TAB 2: DELIVERY COACH ================= */}
                {activeOutputSection === 'delivery' && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 space-y-6 animate-fade-in shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                          DELIVERY COACH
                        </span>
                        <h3 className="text-xl font-black text-white mt-0.5">
                          How To Say It on Camera
                        </h3>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-slate-300 font-mono">
                        Camera Personality Calibration
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-amber-400 uppercase font-mono text-[10px] block">DELIVERY CADENCE</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.delivery}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-blue-400 uppercase font-mono text-[10px] block">SPEECH PACE</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.pace}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-emerald-400 uppercase font-mono text-[10px] block">EYE CONTACT</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.eyeContact}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-purple-400 uppercase font-mono text-[10px] block">STRATEGIC PAUSE</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.pause}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-brand-champagne uppercase font-mono text-[10px] block">BODY LANGUAGE</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.bodyLanguage}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 space-y-1">
                        <span className="font-bold text-cyan-400 uppercase font-mono text-[10px] block">CAMERA FRAMING</span>
                        <p className="text-slate-200 font-medium">{currentResult.deliveryCoach.camera}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs text-slate-200 space-y-1">
                      <span className="font-bold text-rose-400 uppercase font-mono text-[10px] block">CRITICAL FRICTION TO AVOID:</span>
                      <p className="text-slate-300 leading-snug">{currentResult.deliveryCoach.avoid}</p>
                    </div>
                  </div>
                )}

                {/* ================= SUB-TAB 3: SHOT PLAN & B-ROLL ================= */}
                {activeOutputSection === 'shots' && (
                  <div className="space-y-6 animate-fade-in">
                    {/* Shot Plan */}
                    <div className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                          SHOT PLAN
                        </span>
                        <span className="text-xs text-slate-400 font-mono">4-Part Filming Structure</span>
                      </div>

                      <div className="space-y-2.5">
                        {currentResult.shotPlan.map((shot, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-surface-100 border border-white/5 flex items-center justify-between gap-4 text-xs"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-brand-champagne text-xs">{shot.number}</span>
                              <div>
                                <span className="font-bold text-white block">{shot.framing}</span>
                                <span className="text-slate-300 text-[11px]">{shot.action}</span>
                              </div>
                            </div>
                            <span className="font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-surface-200 flex-shrink-0">
                              {shot.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* B-Roll Ideas */}
                    <div className="p-6 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                          B-ROLL IDEAS
                        </span>
                        <button
                          onClick={() => addToast('Generated 3 additional B-Roll concepts', 'info')}
                          className="text-xs text-brand-champagne hover:underline font-bold"
                        >
                          Generate More +
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                        {currentResult.bRollIdeas.map((b, i) => (
                          <div key={i} className="p-3 rounded-xl bg-surface-100 border border-white/5 flex items-start gap-2">
                            <span className="text-brand-violet font-bold">🎬</span>
                            <span className="leading-snug">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ================= SUB-TAB 4: REPURPOSE ENGINE ================= */}
                {activeOutputSection === 'repurpose' && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 shadow-xl space-y-6 animate-fade-in">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                          CONTENT ECOSYSTEM REPURPOSER
                        </span>
                        <h3 className="text-xl font-black text-white mt-0.5">
                          1 Idea $\rightarrow$ 7 Distribution Channels
                        </h3>
                      </div>
                      <button
                        onClick={() => addToast('All 7 repurposed channels exported to clipboard!', 'success')}
                        className="px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-surface-50 text-brand-champagne font-bold text-xs border border-brand-champagne/30"
                      >
                        Copy All Channels
                      </button>
                    </div>

                    {/* Sub Channels Selector */}
                    <div className="flex flex-wrap gap-1.5 text-xs font-bold">
                      {[
                        { key: 'reel', label: '🎥 Reel Script' },
                        { key: 'linkedin', label: '💼 LinkedIn Post' },
                        { key: 'facebook', label: '📘 Facebook Post' },
                        { key: 'carousel', label: '📑 Carousel Slides' },
                        { key: 'stories', label: '📱 3 Stories' },
                        { key: 'email', label: '✉️ Newsletter Email' },
                        { key: 'hooks', label: '🪝 5 Short Hooks' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setActiveRepurposeTab(item.key as any)}
                          className={`px-3 py-1.5 rounded-xl transition-all ${
                            activeRepurposeTab === item.key
                              ? 'bg-brand-champagne text-slate-950 shadow-md'
                              : 'bg-surface-100 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Channel Preview Content */}
                    <div className="p-4 rounded-2xl bg-surface-100 border border-white/5 text-xs leading-relaxed text-slate-200">
                      {activeRepurposeTab === 'reel' && (
                        <div className="whitespace-pre-line font-mono">{currentResult.repurposeEcosystem.reelScript}</div>
                      )}
                      {activeRepurposeTab === 'linkedin' && (
                        <div className="whitespace-pre-line">{currentResult.repurposeEcosystem.linkedInPost}</div>
                      )}
                      {activeRepurposeTab === 'facebook' && (
                        <div className="whitespace-pre-line">{currentResult.repurposeEcosystem.facebookPost}</div>
                      )}
                      {activeRepurposeTab === 'carousel' && (
                        <div className="space-y-3">
                          {currentResult.repurposeEcosystem.carouselSlides.map((slide) => (
                            <div key={slide.slideNumber} className="p-3 rounded-xl bg-surface-200 border border-white/5 space-y-1">
                              <span className="font-mono font-bold text-brand-champagne text-[10px]">
                                SLIDE 0{slide.slideNumber}: {slide.title}
                              </span>
                              <p className="text-slate-300 whitespace-pre-line">{slide.body}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeRepurposeTab === 'stories' && (
                        <div className="space-y-3">
                          {currentResult.repurposeEcosystem.threeStories.map((story) => (
                            <div key={story.storyNumber} className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between gap-4">
                              <div>
                                <span className="font-mono font-bold text-brand-champagne text-[10px] block">
                                  STORY 0{story.storyNumber}
                                </span>
                                <p className="text-slate-200 font-medium">{story.hook}</p>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-surface-100 text-brand-gold font-mono text-[10px] flex-shrink-0">
                                {story.action}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeRepurposeTab === 'email' && (
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-surface-200 border border-white/5 font-mono text-[11px] space-y-1">
                            <div><strong>Subject:</strong> {currentResult.repurposeEcosystem.emailNewsletter.subject}</div>
                            <div><strong>Preview:</strong> {currentResult.repurposeEcosystem.emailNewsletter.preview}</div>
                          </div>
                          <div className="whitespace-pre-line p-3">{currentResult.repurposeEcosystem.emailNewsletter.body}</div>
                        </div>
                      )}
                      {activeRepurposeTab === 'hooks' && (
                        <div className="space-y-2">
                          {currentResult.repurposeEcosystem.fiveShortHooks.map((h, i) => (
                            <div key={i} className="p-3 rounded-xl bg-surface-200 border border-white/5 flex items-center justify-between gap-3">
                              <span>“{h}”</span>
                              <button
                                onClick={() => copyToClipboard(h).then(() => addToast('Hook copied!', 'success'))}
                                className="text-brand-champagne hover:underline font-mono text-[11px]"
                              >
                                Copy
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ================= SUB-TAB 5: 7-DAY CONTENT SERIES ================= */}
                {activeOutputSection === 'series' && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/95 border border-brand-champagne/30 shadow-xl space-y-6 animate-fade-in">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                          CAMPAIGN EXPANSION
                        </span>
                        <h3 className="text-xl font-black text-white mt-0.5">
                          Turn This Into A 7-Day Series
                        </h3>
                      </div>
                      <button
                        onClick={() => addToast('7-Day Series synchronized with Calendar!', 'success')}
                        className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-bold text-xs"
                      >
                        Schedule 7-Day Campaign
                      </button>
                    </div>

                    <div className="space-y-3">
                      {currentResult.sevenDaySeries.map((day) => (
                        <div
                          key={day.dayNumber}
                          className="p-4 rounded-2xl bg-surface-100 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-white">{day.dayName}</span>
                              <span
                                className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] ${
                                  day.transformation === 'LU'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : day.transformation === 'QUAN'
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : day.transformation === 'KE'
                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                    : 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                                }`}
                              >
                                {day.transformation}
                              </span>
                              <span className="text-slate-400 font-medium">({day.theme})</span>
                            </div>
                            <p className="text-slate-200 font-medium">“{day.hookIdea}”</p>
                          </div>

                          <span className="px-2.5 py-1 rounded-lg bg-surface-200 text-slate-300 font-mono text-[11px] self-start sm:self-auto flex-shrink-0">
                            {day.format}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ================= RIGHT COLUMN: PERSONAL STRATEGY CONTEXT (lg:col-span-3) ================= */}
          <div className="lg:col-span-3 space-y-6">
            {/* Content Readiness Quality Score */}
            {currentResult && (
              <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    CONTENT READINESS
                  </span>
                  <span className="text-xl font-black text-white font-mono">
                    {currentResult.qualityScore.overall}/100
                  </span>
                </div>

                <div className="space-y-2 text-[11px]">
                  {Object.entries(currentResult.qualityScore.breakdown).map(([k, val]) => (
                    <div key={k} className="flex justify-between items-center text-slate-300">
                      <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-mono font-bold text-brand-champagne">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 text-[11px] text-slate-300 leading-snug space-y-2">
                  <p>{currentResult.qualityScore.recommendation}</p>
                  <button
                    onClick={() => addToast('CTA updated with high-converting keyword trigger', 'success')}
                    className="w-full py-1 rounded-lg bg-brand-champagne/15 hover:bg-brand-champagne/25 text-brand-champagne border border-brand-champagne/30 font-bold text-[10px]"
                  >
                    Improve CTA
                  </button>
                </div>
              </div>
            )}

            {/* Brand Alignment Check */}
            {currentResult && (
              <div className="p-5 rounded-3xl bg-surface-200/90 border border-emerald-500/30 space-y-3 shadow-lg text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    BRAND FIT
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {currentResult.brandAlignment.percentage}% Aligned
                  </span>
                </div>

                <ul className="space-y-1 text-[11px] text-slate-300">
                  {currentResult.brandAlignment.matches.map((m, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{m}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-white/5 text-[10px] text-slate-400 space-y-1">
                  <p className="leading-snug">{currentResult.brandAlignment.potentialIssue}</p>
                  <button
                    onClick={() => addToast('Voice tone aligned with Strategic Creator profile', 'info')}
                    className="text-brand-champagne hover:underline font-bold"
                  >
                    Adjust To My Voice
                  </button>
                </div>
              </div>
            )}

            {/* Similar Topic Detection Alert */}
            {currentResult?.similarTopicWarning && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-[10px]">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>SIMILAR TOPIC DETECTED</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  You covered “{currentResult.similarTopicWarning.topic}” {currentResult.similarTopicWarning.daysAgo} days ago.
                </p>
                <div className="space-y-1 text-[10px] text-amber-200">
                  <span className="font-bold">Suggestions to avoid repetition:</span>
                  <ul className="list-disc pl-3.5 space-y-0.5">
                    {currentResult.similarTopicWarning.suggestions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Idea Vault (Quick Capture) */}
            <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  IDEA VAULT
                </span>
                <span className="text-[10px] text-slate-400 font-mono">{ideaVault.length} saved</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {ideaVault.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setTopicInput(item.topic)}
                    className="p-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/5 cursor-pointer space-y-1 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono">
                      <span className="text-brand-champagne">{item.tag}</span>
                      <span className="text-slate-500">{item.createdAt}</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium line-clamp-2 leading-snug">
                      {item.topic}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex gap-1.5">
                <input
                  type="text"
                  value={newVaultTopic}
                  onChange={(e) => setNewVaultTopic(e.target.value)}
                  placeholder="Quick save a raw idea..."
                  className="flex-1 px-3 py-1.5 rounded-xl bg-surface-100 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none"
                />
                <button
                  onClick={() => newVaultTopic.trim() && handleSaveToIdeaVault(newVaultTopic)}
                  className="p-2 rounded-xl bg-brand-champagne text-slate-950 font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SMART IDEAS DRAWER / MODAL ================= */}
        {isSmartIdeasOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-100 border border-brand-champagne/40 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
              <button
                onClick={() => setIsSmartIdeasOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-champagne/20 text-brand-champagne">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-champagne">
                    AI INTELLIGENCE DISPATCH
                  </span>
                  <h2 className="text-2xl font-black text-white">
                    12 Tailored Content Ideas for Alex Tan
                  </h2>
                  <p className="text-xs text-slate-400">
                    Calculated for: <strong className="text-brand-champagne">{userProfile.primaryArchetype.name}</strong> · Authority {userProfile.scores.authority} · SME Audience
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {generateTwelveSmartIdeas(userProfile).map((cat) => (
                  <div key={cat.trans} className="p-5 rounded-2xl bg-surface-200 border border-white/5 space-y-3">
                    <span className="text-xs font-mono font-bold text-brand-champagne block pb-1 border-b border-white/5">
                      {cat.label}
                    </span>
                    <div className="space-y-2.5">
                      {cat.ideas.map((idea, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/5 flex flex-col justify-between gap-2"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-white leading-snug">“{idea.topic}”</h4>
                            <p className="text-[10px] text-slate-400 mt-0.5">{idea.angle}</p>
                          </div>
                          <div className="flex items-center justify-between pt-1 text-[10px] font-mono">
                            <button
                              onClick={() => {
                                setTopicInput(idea.topic);
                                setSelectedTransformation(cat.trans);
                                setIsSmartIdeasOpen(false);
                                addToast('Idea loaded into Studio!', 'success');
                              }}
                              className="text-brand-champagne hover:underline font-bold"
                            >
                              Load in Studio &rarr;
                            </button>
                            <button
                              onClick={() => handleSaveToIdeaVault(idea.topic, 'Opinion')}
                              className="text-slate-400 hover:text-white"
                            >
                              Save to Vault
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading AI Content Studio...</div>}>
      <StudioWorkspace />
    </Suspense>
  );
}
