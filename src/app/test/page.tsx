'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Clock,
  ShieldCheck,
  Zap,
  Sliders,
  Check,
  RotateCcw
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

const TOTAL_STEPS = 7;

export default function TestPage() {
  const router = useRouter();
  const { testAnswers, updateTestAnswers, trackEvent } = useAppState();

  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = Intro, 1..7 = Questions, 8 = Processing
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStageIdx, setProcessStageIdx] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Form states
  const [name, setName] = useState(testAnswers.name || 'Alex Tan');
  const [dob, setDob] = useState(testAnswers.birthDate || '1990-05-18');
  const [tob, setTob] = useState(testAnswers.birthTime || '14:30');
  const [pob, setPob] = useState(testAnswers.birthLocation || 'Kuala Lumpur, Malaysia');

  const [currentRole, setCurrentRole] = useState<string>(testAnswers.role || 'Consultant');
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>(testAnswers.challenges || ['I don\'t know what I should be known for', 'People watch but don\'t buy']);
  const [primaryGoal, setPrimaryGoal] = useState<string>(testAnswers.primaryGoal || 'Build authority');

  // Sliders for Step 5 Communication Styles
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({
    analyticalEmotional: 25, // 0 = Analytical, 100 = Emotional
    directGentle: 20,       // 0 = Direct, 100 = Gentle
    structuredSpontaneous: 15, // 0 = Structured, 100 = Spontaneous
    teachingStorytelling: 35, // 0 = Teaching, 100 = Storytelling
    expertLifestyle: 10,     // 0 = Expert-led, 100 = Lifestyle-led
    privateVisible: 40       // 0 = Private, 100 = Highly Visible
  });

  const [businessModels, setBusinessModels] = useState<string[]>(['Consulting', '1-to-1 Service']);
  const [contentFrequency, setContentFrequency] = useState<string>('1–2 times/week');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['LinkedIn', 'Instagram']);

  const processStages = [
    'Building your profile and birth matrix...',
    'Mapping your communication preferences...',
    'Identifying authority and conviction signals...',
    'Analyzing positioning gaps and audience filters...',
    'Matching high-ticket content transformation strategy...',
    'Building your IP snapshot dossier...'
  ];

  useEffect(() => {
    trackEvent('test_started');
  }, []);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Transition to Processing
      setCurrentStep(8);
      setIsProcessing(true);
      setProcessStageIdx(0);
      trackEvent('test_completed', { role: currentRole, goal: primaryGoal });

      let stage = 0;
      const interval = setInterval(() => {
        stage++;
        if (stage < processStages.length) {
          setProcessStageIdx(stage);
        } else {
          clearInterval(interval);
          setIsProcessing(false);
        }
      }, 1200);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0);
    }
  };

  const toggleChallenge = (item: string) => {
    if (selectedChallenges.includes(item)) {
      setSelectedChallenges(selectedChallenges.filter((c) => c !== item));
    } else if (selectedChallenges.length < 3) {
      setSelectedChallenges([...selectedChallenges, item]);
    }
  };

  const toggleBusinessModel = (item: string) => {
    if (businessModels.includes(item)) {
      setBusinessModels(businessModels.filter((b) => b !== item));
    } else {
      setBusinessModels([...businessModels, item]);
    }
  };

  const togglePlatform = (item: string) => {
    if (selectedPlatforms.includes(item)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== item));
    } else {
      setSelectedPlatforms([...selectedPlatforms, item]);
    }
  };

  return (
    <div className="min-h-screen bg-surface-300 text-white flex flex-col justify-between p-4 sm:p-8 relative selection:bg-brand-champagne selection:text-slate-950">
      {/* Top Bar with Progress */}
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between pb-4 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
          <span className="text-brand-champagne font-mono font-black">ZW</span>
          <span>ZIWEI IP Assessment</span>
        </Link>

        {currentStep >= 1 && currentStep <= TOTAL_STEPS && (
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-brand-champagne">
              STEP {currentStep} OF {TOTAL_STEPS}
            </span>
            <div className="w-24 h-1.5 rounded-full bg-surface-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-violet to-brand-champagne transition-all duration-300"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Container Content */}
      <main className="max-w-2xl mx-auto w-full my-auto py-8">
        {/* ================= STEP 0: INTRO SCREEN ================= */}
        {currentStep === 0 && (
          <div className="space-y-8 animate-fade-in text-center sm:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/10 border border-brand-champagne/30 text-brand-champagne text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE STRATEGIC ASSESSMENT</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Discover How You Naturally Build Influence
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                This assessment combines your personal profile, professional direction, and communication preferences to generate your initial personal brand strategy.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-surface-200/90 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-champagne flex-shrink-0" />
                <div>
                  <strong className="block text-white">3–5 Minutes</strong>
                  <span className="text-slate-400">7 concise steps</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="block text-white">No Credit Card</strong>
                  <span className="text-slate-400">Free instant snapshot</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Personalized DNA</strong>
                  <span className="text-slate-400">Strategic 5-score map</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center justify-center gap-2"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/report?sample=true"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white font-bold text-xs border border-white/10 transition-colors text-center"
              >
                View Example Result
              </Link>
            </div>
          </div>
        )}

        {/* ================= STEP 1: BASIC PROFILE ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  Step 01 / 07
                </span>
                <button
                  onClick={() => setShowTooltip(!showTooltip)}
                  className="text-xs text-slate-400 hover:text-brand-champagne flex items-center gap-1 font-mono"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Why do we ask this?</span>
                </button>
              </div>
              <h2 className="text-2xl font-black text-white">Your Basic Profile</h2>
              <p className="text-xs text-slate-300">
                Foundational matrix data used to calibrate your cognitive archetype.
              </p>
            </div>

            {showTooltip && (
              <div className="p-3.5 rounded-2xl bg-surface-200 border border-brand-champagne/30 text-xs text-slate-300 space-y-1 animate-fade-in">
                <strong className="text-brand-champagne block font-mono text-[10px]">WHY DO WE ASK THIS?</strong>
                <p>
                  Birth information is used to generate your Zi Wei matrix archetype and natural authority patterns. In this demo, strategic analysis uses mock calibrated profile logic without fortune-telling claims.
                </p>
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-bold">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Tan"
                  className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold">Time of Birth (Optional)</label>
                  <input
                    type="time"
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold">Place of Birth (City / Country)</label>
                <input
                  type="text"
                  value={pob}
                  onChange={(e) => setPob(e.target.value)}
                  placeholder="e.g. Kuala Lumpur, Malaysia"
                  className="w-full p-3.5 rounded-2xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: CURRENT ROLE ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                Step 02 / 07
              </span>
              <h2 className="text-2xl font-black text-white">Which best describes what you do now?</h2>
              <p className="text-xs text-slate-300">Select your primary professional identity.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'Business Owner', 'Consultant', 'Coach', 'Educator',
                'Creator', 'Sales Professional', 'Real Estate', 'Insurance / Finance',
                'Beauty / Wellness', 'Professional Service', 'Freelancer', 'Other'
              ].map((role) => (
                <button
                  key={role}
                  onClick={() => setCurrentRole(role)}
                  className={`p-4 rounded-2xl border text-xs font-bold text-left transition-all ${
                    currentRole === role
                      ? 'bg-brand-champagne text-slate-950 border-brand-champagne shadow-lg scale-[1.02]'
                      : 'bg-surface-200/80 border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 3: CURRENT CHALLENGE ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  Step 03 / 07
                </span>
                <span className="text-xs font-mono text-brand-gold">
                  Selected: {selectedChallenges.length}/3
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">What makes personal branding difficult right now?</h2>
              <p className="text-xs text-slate-300">Select up to 3 biggest obstacles.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'I don\'t know what I should be known for',
                'I have too many topics and feel scattered',
                'My content feels inconsistent in tone',
                'I don\'t know what to post on camera',
                'I dislike being on camera and fake acting',
                'I attract the wrong audience with low budget',
                'People watch my content but don\'t buy',
                'I have deep expertise but low visibility',
                'I don\'t know what high-ticket product to sell',
                'I keep copying other creators without results'
              ].map((ch) => {
                const isSelected = selectedChallenges.includes(ch);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChallenge(ch)}
                    className={`p-3.5 rounded-2xl border text-xs text-left transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-surface-100 border-brand-champagne text-white font-bold shadow-md'
                        : 'bg-surface-200/80 border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${isSelected ? 'bg-brand-champagne text-slate-950 border-brand-champagne' : 'border-white/20'}`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span className="leading-snug">{ch}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 4: PRIMARY GOAL ================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                Step 04 / 07
              </span>
              <h2 className="text-2xl font-black text-white">What would make the biggest difference over the next 6 months?</h2>
              <p className="text-xs text-slate-300">Choose your primary strategic objective.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Build Authority (QUAN)', desc: 'Become the undisputed go-to standard in your niche' },
                { title: 'Get High-Ticket Clients', desc: 'Convert qualified decision-makers into 5-figure retainers' },
                { title: 'Grow Target Audience (LU)', desc: 'Attract the right high-affinity buyers at scale' },
                { title: 'Launch a High-Ticket Course', desc: 'Package your methodology into digital intellectual property' },
                { title: 'Sell Premium Advisory Services', desc: 'Shift from hourly trading to strategic advisory sprints' },
                { title: 'Become a Recognized Thought Leader', desc: 'Keynote invitations, media features, and industry voice' },
                { title: 'Build a Strong Personal Brand', desc: 'Unshakable positioning that stands the test of time' },
                { title: 'Create Content Consistently', desc: 'A repeatable 30-minute weekly content engine' }
              ].map((goal) => (
                <button
                  key={goal.title}
                  onClick={() => setPrimaryGoal(goal.title)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    primaryGoal === goal.title
                      ? 'bg-surface-100 border-brand-champagne shadow-lg scale-[1.02]'
                      : 'bg-surface-200/80 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-white text-xs">{goal.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">{goal.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 5: COMMUNICATION STYLE SLIDERS ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                Step 05 / 07
              </span>
              <h2 className="text-2xl font-black text-white">Communication Preferences</h2>
              <p className="text-xs text-slate-300">
                Adjust the sliders to reflect how you naturally think, speak, and communicate.
              </p>
            </div>

            <div className="space-y-5 p-6 rounded-3xl bg-surface-200/90 border border-white/10 text-xs">
              {[
                { key: 'analyticalEmotional', left: 'Analytical & Data', right: 'Emotional & Vibe' },
                { key: 'directGentle', left: 'Direct & Polarizing', right: 'Gentle & Harmonious' },
                { key: 'structuredSpontaneous', left: 'Structured & Frameworks', right: 'Spontaneous & Freeflow' },
                { key: 'teachingStorytelling', left: 'Teaching & Method', right: 'Storytelling & Narrative' },
                { key: 'expertLifestyle', left: 'Expert & Authority-led', right: 'Lifestyle & Relatable' },
                { key: 'privateVisible', left: 'Private & Deliberate', right: 'Highly Public & Open' }
              ].map((slider) => (
                <div key={slider.key} className="space-y-1.5">
                  <div className="flex justify-between font-mono font-bold text-[11px]">
                    <span className="text-brand-champagne">{slider.left}</span>
                    <span className="text-slate-400">{slider.right}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValues[slider.key]}
                    onChange={(e) =>
                      setSliderValues({
                        ...sliderValues,
                        [slider.key]: Number(e.target.value)
                      })
                    }
                    className="w-full accent-brand-champagne h-1.5 bg-surface-100 rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 6: BUSINESS MODEL ================= */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                Step 06 / 07
              </span>
              <h2 className="text-2xl font-black text-white">How do you monetize your expertise?</h2>
              <p className="text-xs text-slate-300">Select all revenue models that apply.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                '1-to-1 Service', 'Consulting', 'Coaching', 'Courses',
                'Physical Products', 'Digital Products', 'Commission / Sales',
                'Membership', 'Not monetizing yet'
              ].map((bm) => {
                const isSelected = businessModels.includes(bm);
                return (
                  <button
                    key={bm}
                    onClick={() => toggleBusinessModel(bm)}
                    className={`p-4 rounded-2xl border text-xs font-bold text-left transition-all ${
                      isSelected
                        ? 'bg-brand-violet text-white border-brand-violet shadow-md'
                        : 'bg-surface-200/80 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    {bm}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 7: CONTENT EXPERIENCE ================= */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                Step 07 / 07
              </span>
              <h2 className="text-2xl font-black text-white">Content Experience & Distribution</h2>
              <p className="text-xs text-slate-300">How often and where do you create content?</p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-2">
                <label className="font-bold text-slate-300">How often do you currently create content?</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {['Never', 'Occasionally', '1–2 times/week', '3–5 times/week', 'Daily'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setContentFrequency(freq)}
                      className={`p-3 rounded-xl border text-center font-bold transition-all ${
                        contentFrequency === freq
                          ? 'bg-brand-champagne text-slate-950 border-brand-champagne'
                          : 'bg-surface-200 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="font-bold text-slate-300">Which platforms do you prioritize?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'X', 'Xiaohongshu', 'Other'].map((p) => {
                    const isSelected = selectedPlatforms.includes(p);
                    return (
                      <button
                        key={p}
                        onClick={() => togglePlatform(p)}
                        className={`p-3 rounded-xl border text-center font-bold transition-all ${
                          isSelected
                            ? 'bg-brand-violet text-white border-brand-violet'
                            : 'bg-surface-200 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 8: PROCESSING SEQUENCE ================= */}
        {currentStep === 8 && (
          <div className="py-12 space-y-8 animate-fade-in text-center max-w-lg mx-auto">
            {isProcessing ? (
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center shadow-2xl animate-pulse">
                  <div className="w-full h-full bg-surface-300 rounded-[22px] flex items-center justify-center text-brand-champagne">
                    <Sparkles className="w-8 h-8 animate-spin-slow" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-champagne">
                    CALCULATING PERSONAL BRAND INTELLIGENCE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    {processStages[processStageIdx]}
                  </h2>
                </div>

                {/* Processing Steps Checklist */}
                <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-xs space-y-2 text-left">
                  {processStages.map((stg, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i <= processStageIdx ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0" />
                      )}
                      <span className={i <= processStageIdx ? 'text-slate-200 font-medium' : 'text-slate-500'}>
                        {stg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-scale-up">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                    CALCULATION COMPLETE
                  </span>
                  <h2 className="text-3xl font-black text-white">
                    Your IP Snapshot Is Ready
                  </h2>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    We have generated your baseline archetype, 5-dimension score map, and top 3 strategic insights.
                  </p>
                </div>

                <button
                  onClick={() => router.push('/report')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/25 flex items-center justify-center gap-2"
                >
                  <span>Reveal My Profile &rarr;</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Action Footer (for Steps 1 to 7) */}
      {currentStep >= 1 && currentStep <= TOTAL_STEPS && (
        <div className="max-w-2xl mx-auto w-full pt-4 border-t border-surface-border flex items-center justify-between">
          <button
            onClick={handleBack}
            className="px-4 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-brand-champagne text-slate-950 font-black text-xs hover:bg-brand-gold active:scale-95 transition-all shadow-md flex items-center gap-1.5"
          >
            <span>{currentStep === TOTAL_STEPS ? 'Complete & Analyze' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
