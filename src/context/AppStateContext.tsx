'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  TestAnswers,
  ContentPillar,
  BusinessOffer,
  AcademyModule,
  BusinessMetrics,
  GeneratedScript,
  CoachMessage,
  TransformationKey
} from '@/types/database';
import {
  DEMO_USER_PROFILE,
  INITIAL_CONTENT_PILLARS,
  INITIAL_BUSINESS_OFFERS,
  ACADEMY_MODULES,
  DEMO_BUSINESS_METRICS,
  INITIAL_SAVED_SCRIPTS,
  AI_COACH_KNOWLEDGE_RESPONSES
} from '@/lib/mock-data';

interface AppStateContextType {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  testAnswers: TestAnswers;
  setTestAnswers: React.Dispatch<React.SetStateAction<TestAnswers>>;
  contentPillars: ContentPillar[];
  setContentPillars: React.Dispatch<React.SetStateAction<ContentPillar[]>>;
  businessOffers: BusinessOffer[];
  setBusinessOffers: React.Dispatch<React.SetStateAction<BusinessOffer[]>>;
  academyModules: AcademyModule[];
  setAcademyModules: React.Dispatch<React.SetStateAction<AcademyModule[]>>;
  businessMetrics: BusinessMetrics;
  setBusinessMetrics: React.Dispatch<React.SetStateAction<BusinessMetrics>>;
  savedScripts: GeneratedScript[];
  saveScript: (script: GeneratedScript) => void;
  removeSavedScript: (id: string) => void;
  coachMessages: CoachMessage[];
  sendCoachMessage: (text: string) => void;
  isUpgradeModalOpen: boolean;
  setIsUpgradeModalOpen: (open: boolean) => void;
  upgradeModalTriggerReason: string;
  openUpgradeModal: (reason?: string) => void;
  activePlan: 'free' | 'snapshot' | 'pro' | 'elite';
  setActivePlan: (plan: 'free' | 'snapshot' | 'pro' | 'elite') => void;
  completeOnboarding: (answers: TestAnswers) => void;
  toggleModuleCompletion: (moduleId: string) => void;
  updateWorkbookAnswer: (moduleId: string, promptId: string, answer: string) => void;
  addToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

const DEFAULT_TEST_ANSWERS: TestAnswers = {
  birthProfile: {
    name: 'Alex Tan',
    birthDate: '1992-06-18',
    birthTime: '09:30',
    birthPlace: 'Kuala Lumpur, Malaysia',
    gender: 'male',
    calendarType: 'solar'
  },
  currentRole: 'Consultant',
  currentChallenges: [
    'I know a lot, but people do not know what I am best at',
    'I create content, but nobody remembers me',
    'I have expertise but no clear high-ticket monetization path'
  ],
  businessGoals: [
    'Build high-ticket authority',
    'Get premium inbound clients',
    'Develop a scalable personal brand intelligence engine'
  ],
  communicationPrefs: {
    analyticalVsEmotional: 25, // analytical
    directVsGentle: 15,        // direct
    structuredVsSpontaneous: 20, // structured
    teachingVsStorytelling: 35,  // teaching/framework
    expertVsLifestyle: 10        // expert-led
  }
};

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(DEMO_USER_PROFILE);
  const [testAnswers, setTestAnswers] = useState<TestAnswers>(DEFAULT_TEST_ANSWERS);
  const [contentPillars, setContentPillars] = useState<ContentPillar[]>(INITIAL_CONTENT_PILLARS);
  const [businessOffers, setBusinessOffers] = useState<BusinessOffer[]>(INITIAL_BUSINESS_OFFERS);
  const [academyModules, setAcademyModules] = useState<AcademyModule[]>(ACADEMY_MODULES);
  const [businessMetrics, setBusinessMetrics] = useState<BusinessMetrics>(DEMO_BUSINESS_METRICS);
  const [savedScripts, setSavedScripts] = useState<GeneratedScript[]>(INITIAL_SAVED_SCRIPTS);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [upgradeModalTriggerReason, setUpgradeModalTriggerReason] = useState('Unlock full PRO intelligence');
  const [activePlan, setActivePlan] = useState<'free' | 'snapshot' | 'pro' | 'elite'>('pro');

  const [toasts, setToasts] = useState<{ id: string; message: string; type: 'success' | 'info' | 'warning' }[]>([]);

  const [coachMessages, setCoachMessages] = useState<CoachMessage[]>([
    {
      id: 'msg_welcome',
      sender: 'assistant',
      content: `Good day Alex. I am your **ZIWEI IP Strategic Intelligence Coach**.

Based on your **Strategic Creator** archetype and **Authority (92)** / **Monetization (88)** profile, your fastest path to RM25k+ monthly revenue is publishing high-conviction diagnostic frameworks and driving qualified inbound leads to your high-ticket advisory offer.

What positioning or content challenge would you like to optimize today?`,
      timestamp: 'Just now',
      actions: [
        { label: '🎯 What should I post today?', linkUrl: 'coach:post_today' },
        { label: '💰 How to structure my offer ladder?', linkUrl: 'coach:what_to_sell' },
        { label: '🔍 Why is my content not converting?', linkUrl: 'coach:not_converting' },
        { label: '🎬 What video setup fits my nature?', linkUrl: 'coach:video_fit' }
      ]
    }
  ]);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const openUpgradeModal = (reason: string = 'Unlock full PRO intelligence') => {
    setUpgradeModalTriggerReason(reason);
    setIsUpgradeModalOpen(true);
  };

  const saveScript = (script: GeneratedScript) => {
    setSavedScripts((prev) => {
      const exists = prev.some((s) => s.id === script.id);
      if (exists) return prev;
      return [script, ...prev];
    });
    addToast('Script saved to your Content Library!', 'success');
  };

  const removeSavedScript = (id: string) => {
    setSavedScripts((prev) => prev.filter((s) => s.id !== id));
    addToast('Script removed from Library', 'info');
  };

  const completeOnboarding = (answers: TestAnswers) => {
    setTestAnswers(answers);
    setUserProfile((prev) => ({
      ...prev,
      name: answers.birthProfile.name || prev.name,
      role: answers.currentRole || prev.role,
      tier: 'free' // new test starts in free tier report preview
    }));
  };

  const toggleModuleCompletion = (moduleId: string) => {
    setAcademyModules((prev) =>
      prev.map((mod) => (mod.id === moduleId ? { ...mod, completed: !mod.completed } : mod))
    );
    addToast('Course progress updated!', 'success');
  };

  const updateWorkbookAnswer = (moduleId: string, promptId: string, answer: string) => {
    setAcademyModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== moduleId) return mod;
        return {
          ...mod,
          workbookPrompts: mod.workbookPrompts.map((p) => (p.id === promptId ? { ...p, userAnswer: answer } : p))
        };
      })
    );
  };

  const sendCoachMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: CoachMessage = {
      id: `msg_u_${Date.now()}`,
      sender: 'user',
      content: text,
      timestamp: 'Just now'
    };

    setCoachMessages((prev) => [...prev, userMsg]);

    // Generate intelligent contextual response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let replyContent = '';

      if (lower.includes('post') || lower.includes('today') || lower.includes('topic') || text.includes('post_today')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.post_today;
      } else if (lower.includes('sell') || lower.includes('offer') || lower.includes('price') || lower.includes('pricing') || text.includes('what_to_sell')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.what_to_sell;
      } else if (lower.includes('convert') || lower.includes('lead') || lower.includes('sales') || lower.includes('not converting') || text.includes('not_converting')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.not_converting;
      } else if (lower.includes('video') || lower.includes('camera') || lower.includes('film') || text.includes('video_fit')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.video_fit;
      } else if (lower.includes('audience') || lower.includes('who') || text.includes('ideal_audience')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.ideal_audience;
      } else if (lower.includes('position') || lower.includes('statement') || text.includes('how_to_position')) {
        replyContent = AI_COACH_KNOWLEDGE_RESPONSES.how_to_position;
      } else {
        replyContent = `Based on your **${userProfile.primaryArchetype.name}** profile with an **Authority score of ${userProfile.scores.authority}**:

When addressing "${text}", remember that your highest leverage is **structural clarity over emotional hype**.

💡 **Strategic Action**:
1. Anchor your solution in a 3-part framework rather than scattered tips.
2. Use the **Four Transformations** model: Start with LU to resonate with the exact pain, then QUAN to establish your standard.
3. Keep your call-to-action focused on a single DM trigger or Diagnostic Audit.

Would you like to generate a tailored script in the AI Content Studio or review your Offer Ladder?`;
      }

      const aiMsg: CoachMessage = {
        id: `msg_ai_${Date.now()}`,
        sender: 'assistant',
        content: replyContent,
        timestamp: 'Just now',
        contextRef: 'Strategic Creator DNA Model v2.6',
        actions: [
          { label: '⚡ Open AI Content Studio', linkUrl: '/studio' },
          { label: '📋 View Brand Blueprint', linkUrl: '/blueprint' },
          { label: '💰 Explore Offer Ladder', linkUrl: '/business' }
        ]
      };

      setCoachMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <AppStateContext.Provider
      value={{
        userProfile,
        setUserProfile,
        testAnswers,
        setTestAnswers,
        contentPillars,
        setContentPillars,
        businessOffers,
        setBusinessOffers,
        academyModules,
        setAcademyModules,
        businessMetrics,
        setBusinessMetrics,
        savedScripts,
        saveScript,
        removeSavedScript,
        coachMessages,
        sendCoachMessage,
        isUpgradeModalOpen,
        setIsUpgradeModalOpen,
        upgradeModalTriggerReason,
        openUpgradeModal,
        activePlan,
        setActivePlan,
        completeOnboarding,
        toggleModuleCompletion,
        updateWorkbookAnswer,
        addToast
      }}
    >
      {children}

      {/* Global Toast Container */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-xl border text-sm font-medium shadow-2xl backdrop-blur-xl animate-fade-in flex items-center gap-3 ${
              toast.type === 'success'
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-200'
                : toast.type === 'warning'
                ? 'bg-amber-950/80 border-amber-500/40 text-amber-200'
                : 'bg-slate-900/90 border-slate-700 text-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
