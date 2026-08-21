'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Sliders,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';
import { TestAnswers, UserRole } from '@/types/database';
import { triggerConfetti } from '@/lib/utils';

const ROLE_OPTIONS: UserRole[] = [
  'Consultant',
  'Coach',
  'Educator',
  'Creator',
  'Business Owner',
  'Sales Professional',
  'Freelancer',
  'Professional Service',
  'Other'
];

const CHALLENGE_OPTIONS = [
  "I don't know my sharp positioning",
  "My content has no clear direction",
  "I don't know what to talk about consistently",
  "I am uncomfortable or stiff on camera",
  "I attract low-budget or spectator audiences",
  "I don't know how to package what to sell",
  "I have 10+ years expertise but low inbound visibility"
];

const GOAL_OPTIONS = [
  "Build unquestioned industry authority",
  "Get premium high-ticket inbound clients",
  "Grow a recognizable social media channel",
  "Launch a scalable course or group cohort",
  "Build a RM4,800+ premium advisory service",
  "Become an acknowledged thought leader",
  "Develop a sustainable personal brand system"
];

export default function TestPage() {
  const router = useRouter();
  const { testAnswers, completeOnboarding, addToast } = useAppState();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TestAnswers>(testAnswers);

  // Processing stage animation states for Step 6
  const [processingStage, setProcessingStage] = useState(0);
  const stages = [
    'Initializing Archetype Engine & Cosmic Matrix...',
    'Analysing Core Identity & Cognitive Natural State...',
    'Evaluating Domain Expertise & Authority Potential...',
    'Calibrating Public Image & Camera Voice Archetype...',
    'Synthesizing Four Transformations (Lu, Quan, Ke, Ji)...',
    'Synthesizing High-Ticket Monetization Paths...',
    'Your Ziwei IP Profile Is Ready!'
  ];

  useEffect(() => {
    if (step === 6) {
      const interval = setInterval(() => {
        setProcessingStage((prev) => {
          if (prev < stages.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            triggerConfetti();
            setTimeout(() => {
              completeOnboarding(formData);
              router.push('/report');
            }, 1200);
            return prev;
          }
        });
      }, 700);

      return () => clearInterval(interval);
    }
  }, [step]);

  const toggleChallenge = (item: string) => {
    setFormData((prev) => {
      const exists = prev.currentChallenges.includes(item);
      return {
        ...prev,
        currentChallenges: exists
          ? prev.currentChallenges.filter((c) => c !== item)
          : [...prev.currentChallenges, item]
      };
    });
  };

  const toggleGoal = (item: string) => {
    setFormData((prev) => {
      const exists = prev.businessGoals.includes(item);
      return {
        ...prev,
        businessGoals: exists
          ? prev.businessGoals.filter((g) => g !== item)
          : [...prev.businessGoals, item]
      };
    });
  };

  const updateCommPref = (key: keyof TestAnswers['communicationPrefs'], val: number) => {
    setFormData((prev) => ({
      ...prev,
      communicationPrefs: {
        ...prev.communicationPrefs,
        [key]: val
      }
    }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.birthProfile.name) {
      addToast('Please enter your name to proceed', 'warning');
      return;
    }
    if (step === 3 && formData.currentChallenges.length === 0) {
      addToast('Please select at least 1 current challenge', 'warning');
      return;
    }
    if (step === 4 && formData.businessGoals.length === 0) {
      addToast('Please select at least 1 primary business goal', 'warning');
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1 && step < 6) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col justify-between py-6 px-4 sm:px-6">
      {/* Top Header */}
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between pb-6 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center shadow-md">
            <div className="w-full h-full bg-surface-300 rounded-[8px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <span className="font-extrabold text-base text-white tracking-tight">ZIWEI IP</span>
        </Link>

        {step < 6 && (
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono font-bold text-brand-champagne">
              Step 0{step} <span className="text-slate-400 font-normal">/ 06</span>
            </div>
            {/* Step Progress Bar */}
            <div className="w-24 sm:w-36 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-violet to-brand-champagne transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Form Container */}
      <div className="max-w-2xl w-full mx-auto my-auto py-8">
        {/* STEP 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/20">
                Step 01: Profile Coordinates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Tell Us About Yourself
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Your birth parameters initialize your archetypal cognitive baseline.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5 mb-1.5">
                  <User className="w-3.5 h-3.5 text-brand-champagne" />
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={formData.birthProfile.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthProfile: { ...formData.birthProfile, name: e.target.value }
                    })
                  }
                  placeholder="e.g. Alex Tan"
                  className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-champagne" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.birthProfile.birthDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthProfile: { ...formData.birthProfile, birthDate: e.target.value }
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-champagne" />
                    Time of Birth (Optional if unknown)
                  </label>
                  <input
                    type="time"
                    value={formData.birthProfile.birthTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthProfile: { ...formData.birthProfile, birthTime: e.target.value }
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-white focus:outline-none focus:border-brand-champagne transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-champagne" />
                  Place of Birth
                </label>
                <input
                  type="text"
                  value={formData.birthProfile.birthPlace}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthProfile: { ...formData.birthProfile, birthPlace: e.target.value }
                    })
                  }
                  placeholder="e.g. Kuala Lumpur, Malaysia"
                  className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-champagne transition-colors text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Current Professional Role */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/20">
                Step 02: Commercial Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What is Your Current Primary Role?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Select the role that best describes your core commercial vehicle today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ROLE_OPTIONS.map((role) => {
                const isSelected = formData.currentRole === role;
                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({ ...formData, currentRole: role })}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-brand-champagne/15 border-brand-champagne text-white shadow-md'
                        : 'bg-surface-200/80 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-sm font-semibold">{role}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-champagne" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Current Challenge */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/20">
                Step 03: Positioning Friction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What Are Your Biggest Challenges Right Now?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Select all that apply to pinpoint your bottleneck patterns.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {CHALLENGE_OPTIONS.map((challenge) => {
                const isSelected = formData.currentChallenges.includes(challenge);
                return (
                  <button
                    key={challenge}
                    type="button"
                    onClick={() => toggleChallenge(challenge)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? 'bg-brand-violet/20 border-brand-violet text-white shadow-md'
                        : 'bg-surface-200/80 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span>{challenge}</span>
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ml-3 ${
                        isSelected ? 'bg-brand-violet border-brand-violet text-white' : 'border-white/20'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Business Goal */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/20">
                Step 04: Growth Objectives
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What is Your #1 Business Objective in 2026?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Select the primary outcomes you want your personal brand to deliver.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {GOAL_OPTIONS.map((goal) => {
                const isSelected = formData.businessGoals.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleGoal(goal)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? 'bg-brand-champagne/15 border-brand-champagne text-white shadow-md'
                        : 'bg-surface-200/80 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span>{goal}</span>
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ml-3 ${
                        isSelected ? 'bg-brand-champagne border-brand-champagne text-slate-950' : 'border-white/20'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Communication Preference Sliders */}
        {step === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-champagne bg-brand-champagne/10 px-3 py-1 rounded-full border border-brand-champagne/20">
                Step 05: Expressive Tone
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Do You Naturally Express Yourself?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Fine-tune your communication spectrum to calibrate your Camera & Voice Archetype.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Dialectic 1 */}
              <div className="space-y-2 p-4 rounded-xl bg-surface-200 border border-white/5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-amber-400">Analytical & Structured</span>
                  <span className="text-pink-400">Emotional & Spontaneous</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.communicationPrefs.analyticalVsEmotional}
                  onChange={(e) => updateCommPref('analyticalVsEmotional', Number(e.target.value))}
                  className="w-full accent-brand-champagne h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Dialectic 2 */}
              <div className="space-y-2 p-4 rounded-xl bg-surface-200 border border-white/5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-blue-400">Direct & Uncompromising</span>
                  <span className="text-emerald-400">Gentle & Nurturing</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.communicationPrefs.directVsGentle}
                  onChange={(e) => updateCommPref('directVsGentle', Number(e.target.value))}
                  className="w-full accent-brand-champagne h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Dialectic 3 */}
              <div className="space-y-2 p-4 rounded-xl bg-surface-200 border border-white/5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-purple-400">Teaching & Frameworks</span>
                  <span className="text-cyan-400">Storytelling & Narrative</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.communicationPrefs.teachingVsStorytelling}
                  onChange={(e) => updateCommPref('teachingVsStorytelling', Number(e.target.value))}
                  className="w-full accent-brand-champagne h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Dialectic 4 */}
              <div className="space-y-2 p-4 rounded-xl bg-surface-200 border border-white/5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-brand-champagne">Expert & Authority Led</span>
                  <span className="text-rose-400">Lifestyle & Personality Led</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.communicationPrefs.expertVsLifestyle}
                  onChange={(e) => updateCommPref('expertVsLifestyle', Number(e.target.value))}
                  className="w-full accent-brand-champagne h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Multi-Stage Processing Screen */}
        {step === 6 && (
          <div className="text-center py-12 space-y-8 animate-fade-in max-w-lg mx-auto">
            {/* Spinning Radar & Glow */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-brand-violet/20 blur-xl animate-pulse" />
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-champagne animate-spin-slow flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-brand-champagne animate-pulse" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-black text-white tracking-tight">
                Synthesizing Personal Brand Intelligence
              </h2>
              <p className="text-sm font-mono text-brand-champagne h-6 transition-all duration-300">
                {stages[processingStage]}
              </p>
            </div>

            {/* Stages Checklist */}
            <div className="p-4 rounded-2xl bg-surface-200/90 border border-white/10 text-left space-y-2 text-xs">
              {stages.slice(0, 6).map((st, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 transition-colors ${
                    i <= processingStage ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                      i < processingStage
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : i === processingStage
                        ? 'border border-brand-champagne animate-ping'
                        : 'border border-white/10'
                    }`}
                  >
                    {i < processingStage && <Check className="w-2.5 h-2.5" />}
                  </div>
                  <span className="font-mono">{st.split('...')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer (For Steps 1-5) */}
      {step < 6 && (
        <div className="max-w-2xl w-full mx-auto flex items-center justify-between pt-6 border-t border-surface-border">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              step === 1
                ? 'opacity-30 cursor-not-allowed border-white/5 text-slate-600'
                : 'bg-surface-100 border-white/10 text-slate-300 hover:bg-white/5'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
          >
            <span>{step === 5 ? 'Generate My Report' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
