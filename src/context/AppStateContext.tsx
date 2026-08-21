'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  TestAnswers,
  SavedScript,
  OfferTier,
  ContentPillar,
  CoachMessage,
  PlanTier,
  AcademyModule,
  BusinessOffer,
  BusinessMetrics
} from '@/types/database';
import {
  UserEntitlements,
  EntitlementRole,
  PricingConfig,
  DEFAULT_PRICING,
  FunnelEvent,
  EliteApplicationData
} from '@/types/conversion';
import {
  DEMO_USER_PROFILE,
  INITIAL_CONTENT_PILLARS,
  INITIAL_BUSINESS_OFFERS,
  ACADEMY_MODULES,
  DEMO_BUSINESS_METRICS
} from '@/lib/mock-data';

interface AppStateContextType {
  // User Profile & Entitlements
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  entitlements: UserEntitlements;
  demoRole: EntitlementRole;
  setDemoRole: (role: EntitlementRole) => void;
  pricing: PricingConfig;

  // Free Usage Limit (Content Studio)
  freeGenerationsUsed: number;
  incrementGenerationCount: () => boolean; // returns true if permitted

  // Purchase Actions
  unlockBlueprint: () => void;
  unlockCourse: () => void;
  unlockPro: () => void;
  submitEliteApplication: (data: EliteApplicationData) => void;

  // Onboarding & Test
  testAnswers: Partial<TestAnswers>;
  updateTestAnswers: (answers: Partial<TestAnswers>) => void;
  resetTest: () => void;

  // Brand Pillars & Offers
  customPillars: ContentPillar[];
  updatePillars: (pillars: ContentPillar[]) => void;
  contentPillars: ContentPillar[];
  setContentPillars: React.Dispatch<React.SetStateAction<ContentPillar[]>>;
  customOffers: BusinessOffer[];
  updateOffers: (offers: BusinessOffer[]) => void;
  businessOffers: BusinessOffer[];
  setBusinessOffers: React.Dispatch<React.SetStateAction<BusinessOffer[]>>;

  // Business Metrics
  businessMetrics: BusinessMetrics;

  // Academy Modules
  academyModules: AcademyModule[];
  toggleModuleCompletion: (id: string) => void;
  updateWorkbookAnswer: (moduleId: string, questionIndex: number, answer: string) => void;

  // Saved Scripts
  savedScripts: SavedScript[];
  saveScript: (script: SavedScript) => void;
  removeSavedScript: (id: string) => void;

  // AI Coach Chat
  coachMessages: CoachMessage[];
  sendCoachMessage: (content: string) => void;

  // Upgrade Modal Control
  isUpgradeModalOpen: boolean;
  upgradeModalFeature: string;
  openUpgradeModal: (featureName?: string) => void;
  closeUpgradeModal: () => void;

  // Plan Tier
  activePlan: PlanTier;
  setActivePlan: (plan: PlanTier) => void;

  // Toast System
  toasts: { id: string; message: string; type: 'success' | 'info' | 'warning' }[];
  addToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;

  // Analytics Tracking
  trackEvent: (eventName: string, metadata?: Record<string, any>) => void;
  eventsLog: FunnelEvent[];
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(DEMO_USER_PROFILE);
  const [demoRole, setDemoRoleState] = useState<EntitlementRole>('BLUEPRINT');
  const [pricing] = useState<PricingConfig>(DEFAULT_PRICING);

  const [entitlements, setEntitlements] = useState<UserEntitlements>({
    has_blueprint: true,
    has_course: true,
    has_pro: true,
    has_elite: false,
  });

  const [freeGenerationsUsed, setFreeGenerationsUsed] = useState<number>(1);
  const [testAnswers, setTestAnswers] = useState<Partial<TestAnswers>>({});
  const [customPillars, setCustomPillars] = useState<ContentPillar[]>(INITIAL_CONTENT_PILLARS);
  const [customOffers, setCustomOffers] = useState<BusinessOffer[]>(INITIAL_BUSINESS_OFFERS);
  const [academyModules, setAcademyModules] = useState<AcademyModule[]>(ACADEMY_MODULES);
  const [businessMetrics] = useState<BusinessMetrics>(DEMO_BUSINESS_METRICS);
  const [savedScripts, setSavedScripts] = useState<SavedScript[]>([]);
  const [activePlan, setActivePlan] = useState<PlanTier>('pro');

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [upgradeModalFeature, setUpgradeModalFeature] = useState<string>('Pro Feature');
  const [toasts, setToasts] = useState<{ id: string; message: string; type: 'success' | 'info' | 'warning' }[]>([]);
  const [eventsLog, setEventsLog] = useState<FunnelEvent[]>([]);

  // Track Funnel Events
  const trackEvent = (name: string, metadata?: Record<string, any>) => {
    const newEvent: FunnelEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name,
      timestamp: new Date().toISOString(),
      userId: userProfile.id,
      metadata,
    };
    setEventsLog((prev) => [newEvent, ...prev]);
  };

  // Demo Role Switcher
  const setDemoRole = (role: EntitlementRole) => {
    setDemoRoleState(role);
    if (role === 'FREE') {
      setEntitlements({ has_blueprint: false, has_course: false, has_pro: false, has_elite: false });
      setActivePlan('free');
    } else if (role === 'BLUEPRINT') {
      setEntitlements({ has_blueprint: true, has_course: false, has_pro: false, has_elite: false });
      setActivePlan('free');
    } else if (role === 'COURSE') {
      setEntitlements({ has_blueprint: true, has_course: true, has_pro: false, has_elite: false });
      setActivePlan('free');
    } else if (role === 'PRO') {
      setEntitlements({ has_blueprint: true, has_course: true, has_pro: true, has_elite: false });
      setActivePlan('pro');
    } else if (role === 'ELITE') {
      setEntitlements({ has_blueprint: true, has_course: true, has_pro: true, has_elite: true });
      setActivePlan('elite');
    }
    addToast(`Switched Demo Role to: ${role}`, 'info');
  };

  // Increment Generation Count with Free Limit Check
  const incrementGenerationCount = (): boolean => {
    if (entitlements.has_pro || activePlan === 'pro' || activePlan === 'elite') {
      return true; // Unlimited for PRO
    }
    if (freeGenerationsUsed >= 3) {
      openUpgradeModal('AI Content Studio Limit Reached (3/3 Free Generations Used)');
      return false;
    }
    setFreeGenerationsUsed((prev) => prev + 1);
    return true;
  };

  // Purchase Actions
  const unlockBlueprint = () => {
    setEntitlements((prev) => ({ ...prev, has_blueprint: true }));
    trackEvent('blueprint_purchased', { price: pricing.blueprintPrice });
    addToast('🎉 Full ZIWEI IP Blueprint Unlocked!', 'success');
  };

  const unlockCourse = () => {
    setEntitlements((prev) => ({ ...prev, has_course: true }));
    trackEvent('course_purchased', { price: pricing.coursePrice });
    addToast('🎓 《紫微IP定位学》 Course Unlocked in Academy!', 'success');
  };

  const unlockPro = () => {
    setEntitlements((prev) => ({ ...prev, has_pro: true }));
    setActivePlan('pro');
    trackEvent('pro_upgraded', { price: pricing.proMonthlyPrice });
    addToast('⭐ Upgraded to ZIWEI IP PRO Membership!', 'success');
  };

  const submitEliteApplication = (data: EliteApplicationData) => {
    trackEvent('elite_application_submitted', { business: data.currentBusiness });
    addToast('📋 Elite Application submitted! Our advisory team will reach out within 24h.', 'success');
  };

  const updateTestAnswers = (answers: Partial<TestAnswers>) => {
    setTestAnswers((prev) => ({ ...prev, ...answers }));
  };

  const resetTest = () => {
    setTestAnswers({});
  };

  const updatePillars = (pillars: ContentPillar[]) => {
    setCustomPillars(pillars);
  };

  const updateOffers = (offers: BusinessOffer[]) => {
    setCustomOffers(offers);
  };

  const toggleModuleCompletion = (id: string) => {
    setAcademyModules((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
    addToast('Module progress updated!', 'success');
  };

  const updateWorkbookAnswer = (moduleId: string, questionIndex: number, answer: string) => {
    setAcademyModules((prev) =>
      prev.map((m) => {
        if (m.id !== moduleId) return m;
        const newPrompts = [...m.workbookPrompts];
        if (newPrompts[questionIndex]) {
          newPrompts[questionIndex] = { ...newPrompts[questionIndex], userAnswer: answer };
        }
        return {
          ...m,
          workbookPrompts: newPrompts,
        };
      })
    );
  };

  const saveScript = (script: SavedScript) => {
    setSavedScripts((prev) => [script, ...prev.filter((s) => s.id !== script.id)]);
    addToast('Script saved to your library!', 'success');
  };

  const removeSavedScript = (id: string) => {
    setSavedScripts((prev) => prev.filter((s) => s.id !== id));
    addToast('Script removed.', 'info');
  };

  const [coachMessages, setCoachMessages] = useState<CoachMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      content:
        'Hello Alex. I am your strategic AI brand coach. I have analyzed your **Strategic Creator** archetype and your **QUAN (Authority)** focus. What content or monetization challenge are we solving today?',
      timestamp: '2026-08-21T10:00:00Z',
    },
  ]);

  const sendCoachMessage = (content: string) => {
    const userMsg: CoachMessage = {
      id: String(Date.now()),
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
    };

    setCoachMessages((prev) => [...prev, userMsg]);
    trackEvent('coach_message_sent', { query: content });
  };

  const openUpgradeModal = (featureName?: string) => {
    setUpgradeModalFeature(featureName || 'Pro Feature');
    setIsUpgradeModalOpen(true);
    trackEvent('pro_paywall_viewed', { feature: featureName });
  };

  const closeUpgradeModal = () => {
    setIsUpgradeModalOpen(false);
  };

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = String(Date.now()) + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AppStateContext.Provider
      value={{
        userProfile,
        setUserProfile,
        entitlements,
        demoRole,
        setDemoRole,
        pricing,
        freeGenerationsUsed,
        incrementGenerationCount,
        unlockBlueprint,
        unlockCourse,
        unlockPro,
        submitEliteApplication,
        testAnswers,
        updateTestAnswers,
        resetTest,
        customPillars,
        updatePillars,
        contentPillars: customPillars,
        setContentPillars: setCustomPillars,
        customOffers,
        updateOffers,
        businessOffers: customOffers,
        setBusinessOffers: setCustomOffers,
        businessMetrics,
        academyModules,
        toggleModuleCompletion,
        updateWorkbookAnswer,
        savedScripts,
        saveScript,
        removeSavedScript,
        coachMessages,
        sendCoachMessage,
        isUpgradeModalOpen,
        upgradeModalFeature,
        openUpgradeModal,
        closeUpgradeModal,
        activePlan,
        setActivePlan,
        toasts,
        addToast,
        removeToast,
        trackEvent,
        eventsLog,
      }}
    >
      {children}
      {/* Toast Render */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto px-4 py-3 rounded-xl text-xs font-semibold shadow-xl border animate-slide-up flex items-center gap-2 ${
              t.type === 'success'
                ? 'bg-emerald-950 text-emerald-200 border-emerald-500/40'
                : t.type === 'warning'
                ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                : 'bg-surface-100 text-slate-100 border-white/20'
            }`}
          >
            <span>{t.message}</span>
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
