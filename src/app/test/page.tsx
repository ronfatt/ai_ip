'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Briefcase,
  Target,
  Layers,
  Sliders,
  TrendingUp,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useAppState } from '@/context/AppStateContext';

const CALCULATION_STEPS = [
  '正在校准天干地支与时空坐标系...',
  '正在计算十四主星与十二宫位能量分布...',
  '正在推演四化流转飞轮（禄 / 权 / 科 / 忌）...',
  '正在构建五维商业品牌能力模型...',
  '正在匹配核心主辅定位原型与反向受众过滤器...',
  '战略分析完成，正在生成您的专属 IP 商业快照...'
];

export default function TestPage() {
  const router = useRouter();
  const { testAnswers, updateTestAnswers, trackEvent } = useAppState();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calcIndex, setCalcIndex] = useState<number>(0);

  // 表单状态
  const [name, setName] = useState(testAnswers.name || '陈志远');
  const [dob, setDob] = useState(testAnswers.birthDate || '1990-05-18');
  const [tob, setTob] = useState(testAnswers.birthTime || '14:30');
  const [pob, setPob] = useState(testAnswers.birthLocation || '吉隆坡 (Kuala Lumpur)');
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');

  const [role, setRole] = useState(testAnswers.role || '商业顾问 / 战略顾问');
  const [bottleneck, setBottleneck] = useState(
    testAnswers.challenges?.[0] || '按小时计费，缺乏高客单产品，收入与时间严重绑定'
  );
  const [businessGoal, setBusinessGoal] = useState(
    testAnswers.primaryGoal || '打造年营收突破百万的高客单个人商业IP'
  );

  // 5大沟通偏好滑块 (0 - 100)
  const [analyticalVsEmotional, setAnalyticalVsEmotional] = useState<number>(20); // 0=严密逻辑, 100=情感共鸣
  const [directVsGentle, setDirectVsGentle] = useState<number>(15);               // 0=直击本质, 100=温和委婉
  const [structuredVsSpontaneous, setStructuredVsSpontaneous] = useState<number>(10); // 0=高度结构化, 100=随性即兴
  const [teachingVsStorytelling, setTeachingVsStorytelling] = useState<number>(25);  // 0=方法论交付, 100=故事驱动
  const [expertVsLifestyle, setExpertVsLifestyle] = useState<number>(10);            // 0=纯专业深度, 100=生活方式展示

  const [offerTier, setOfferTier] = useState<string>('一对一单次咨询 / 项目制服务 (RM3k - RM10k)');
  const [channelFrequency, setChannelFrequency] = useState<string>('每周 2-3 篇深度内容（微信视频号 / 领英 / 小红书）');

  useEffect(() => {
    trackEvent('test_started', { step: currentStep });
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 提交并启动 6 阶段动画推演序列
      updateTestAnswers({
        name,
        birthDate: dob,
        birthTime: tob,
        birthLocation: pob,
        role,
        challenges: [bottleneck],
        primaryGoal: businessGoal,
        communicationPrefs: {
          analyticalVsEmotional,
          directVsGentle,
          structuredVsSpontaneous,
          teachingVsStorytelling,
          expertVsLifestyle,
        },
      });

      trackEvent('test_completed');
      setIsCalculating(true);
    }
  };

  useEffect(() => {
    if (isCalculating) {
      const interval = setInterval(() => {
        setCalcIndex((prev) => {
          if (prev < CALCULATION_STEPS.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              router.push('/report');
            }, 800);
            return prev;
          }
        });
      }, 700);
      return () => clearInterval(interval);
    }
  }, [isCalculating, router]);

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-surface-300 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-brand-violet/20 border-t-brand-champagne animate-spin" />
          <div className="w-16 h-16 rounded-2xl bg-surface-200 border border-brand-champagne/40 flex items-center justify-center shadow-xl">
            <Sparkles className="w-8 h-8 text-brand-champagne animate-pulse" />
          </div>
        </div>

        <div className="max-w-md space-y-4 animate-fade-in">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-champagne uppercase">
            ZIWEI IP 智能引擎推演中
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white min-h-[60px] flex items-center justify-center">
            {CALCULATION_STEPS[calcIndex]}
          </h2>
          <div className="w-full bg-surface-100 h-2 rounded-full overflow-hidden border border-white/5">
            <div
              className="bg-gradient-to-r from-brand-violet via-brand-blue to-brand-champagne h-full transition-all duration-500"
              style={{ width: `${((calcIndex + 1) / CALCULATION_STEPS.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 font-mono">
            正在综合匹配 14 颗主星、四化流转与五维商业定位算法...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-300 text-white selection:bg-brand-champagne selection:text-slate-950 flex flex-col justify-between p-4 sm:p-8">
      {/* 顶部导航 */}
      <header className="max-w-3xl mx-auto w-full flex items-center justify-between pb-6 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-champagne p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center font-black text-brand-champagne text-xs">
              ZW
            </div>
          </div>
          <span className="font-extrabold text-sm text-white tracking-tight">ZIWEI IP 免费测试</span>
        </Link>

        {/* 进度指示 */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-brand-champagne">
            步骤 0{currentStep} / 07
          </span>
          <div className="w-24 sm:w-32 h-2 bg-surface-100 rounded-full overflow-hidden border border-white/5">
            <div
              className="bg-gradient-to-r from-brand-violet to-brand-champagne h-full transition-all duration-300"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* 主答题卡片区域 */}
      <main className="max-w-2xl mx-auto w-full my-auto py-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-surface-200/90 border border-white/10 shadow-2xl backdrop-blur-md space-y-8 animate-fade-in">
          {/* STEP 1: 出生时空坐标系校准 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  01 / 时空坐标系校准
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  输入你的出生时间与地点
                </h2>
                <p className="text-xs text-slate-300">
                  紫微斗数通过时空星盘矩阵推演你的底层认知模式、表达风格与商业能量。
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold">您的姓名或称呼</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例如：陈志远"
                    className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalendarType('solar')}
                    className={`p-3 rounded-2xl border text-center font-bold text-xs transition-all ${
                      calendarType === 'solar'
                        ? 'bg-surface-100 border-brand-champagne text-brand-champagne shadow-md'
                        : 'bg-surface-300/80 border-white/5 text-slate-400'
                    }`}
                  >
                    阳历 / 公历 (Solar)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalendarType('lunar')}
                    className={`p-3 rounded-2xl border text-center font-bold text-xs transition-all ${
                      calendarType === 'lunar'
                        ? 'bg-surface-100 border-brand-champagne text-brand-champagne shadow-md'
                        : 'bg-surface-300/80 border-white/5 text-slate-400'
                    }`}
                  >
                    农历 / 阴历 (Lunar)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-champagne" /> 出生日期
                    </label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-champagne" /> 出生时间（若不确定可填大概）
                    </label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-champagne" /> 出生城市
                  </label>
                  <input
                    type="text"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder="例如：吉隆坡 / 北京 / 台北 / 新加坡"
                    className="w-full p-3.5 rounded-2xl bg-surface-100 border border-white/10 text-white focus:outline-none focus:border-brand-champagne text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: 当前专业身份与赛道 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  02 / 专业领域与身份
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  你目前深耕的专业领域是什么？
                </h2>
                <p className="text-xs text-slate-300">
                  选择最符合你核心专业资产的身份角色。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  '商业顾问 / 战略顾问',
                  '实体企业主 / 创始人',
                  '高管教练 / 心理导师',
                  '专业讲师 / 培训师',
                  '垂直知识创作者 / 自媒体人',
                  '高客单销售领袖 / 金融法律专家'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    className={`p-4 rounded-2xl border text-left font-bold transition-all flex items-center justify-between ${
                      role === item
                        ? 'bg-surface-100 border-brand-champagne text-white shadow-lg'
                        : 'bg-surface-300/80 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span>{item}</span>
                    {role === item && <Check className="w-4 h-4 text-brand-champagne" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: 当前核心瓶颈 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  03 / 商业瓶颈排查
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  你当前最大的商业卡点是什么？
                </h2>
                <p className="text-xs text-slate-300">
                  精准识别阻碍你客单价与影响力提升的核心阻力。
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  '按小时计费，缺乏高客单产品，收入与时间严重绑定',
                  '专业能力很强，但在市场上缺乏知名度，过度依赖熟人介绍',
                  '发布了很多内容，但点赞多转化少，吸引不来精准高付费客户',
                  '不知道如何在镜头前自然表达，担心破坏专业严肃形象',
                  '定位太宽泛，和同行陷入同质化价格战内卷'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBottleneck(item)}
                    className={`w-full p-4 rounded-2xl border text-left font-bold transition-all flex items-center justify-between ${
                      bottleneck === item
                        ? 'bg-surface-100 border-brand-champagne text-white shadow-lg'
                        : 'bg-surface-300/80 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span className="leading-snug">{item}</span>
                    {bottleneck === item && <Check className="w-4 h-4 text-brand-champagne flex-shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: 90天核心目标 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  04 / 战略目标设定
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  未来 90 天，你最希望达成的目标是？
                </h2>
                <p className="text-xs text-slate-300">
                  我们将根据你的目标调整内容飞轮与产品阶梯的配置重点。
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  '打造年营收突破百万的高客单个人商业IP',
                  '将隐性经验产品化，推出首个标准化高客单咨询/陪跑产品',
                  '建立每周稳定获取 5-10 个高意向精准客户的引流系统',
                  '摆脱低效杂务，将咨询客单价从单次收费提升至年度顾问年框',
                  '确立细分赛道不可替代的专家权威地位'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBusinessGoal(item)}
                    className={`w-full p-4 rounded-2xl border text-left font-bold transition-all flex items-center justify-between ${
                      businessGoal === item
                        ? 'bg-surface-100 border-brand-champagne text-white shadow-lg'
                        : 'bg-surface-300/80 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span className="leading-snug">{item}</span>
                    {businessGoal === item && <Check className="w-4 h-4 text-brand-champagne flex-shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: 沟通表达偏好校准滑块 */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  05 / 表达语态校准
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  校准你的天然沟通与表达偏好
                </h2>
                <p className="text-xs text-slate-300">
                  拖动滑块，告诉我们你在表达时最真实、最舒适的状态。
                </p>
              </div>

              <div className="space-y-5 text-xs font-mono">
                {/* 滑块 1 */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
                  <div className="flex justify-between text-slate-300 font-bold">
                    <span>严密逻辑与理性框架</span>
                    <span>情感共鸣与感性触动</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={analyticalVsEmotional}
                    onChange={(e) => setAnalyticalVsEmotional(Number(e.target.value))}
                    className="w-full accent-brand-champagne"
                  />
                </div>

                {/* 滑块 2 */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
                  <div className="flex justify-between text-slate-300 font-bold">
                    <span>直接犀利，直击本质</span>
                    <span>温和委婉，循循善诱</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={directVsGentle}
                    onChange={(e) => setDirectVsGentle(Number(e.target.value))}
                    className="w-full accent-brand-champagne"
                  />
                </div>

                {/* 滑块 3 */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-surface-100 border border-white/5">
                  <div className="flex justify-between text-slate-300 font-bold">
                    <span>高度结构化逻辑推演</span>
                    <span>随性即兴发挥</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={structuredVsSpontaneous}
                    onChange={(e) => setStructuredVsSpontaneous(Number(e.target.value))}
                    className="w-full accent-brand-champagne"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: 当前产品与交付模式 */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  06 / 变现模式现状
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  你目前主要的交付与收费方式是？
                </h2>
                <p className="text-xs text-slate-300">
                  帮助我们评估你现有的变现杠杆与产品升级空间。
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  '一对一单次咨询 / 项目制服务 (RM3k - RM10k)',
                  '年度企业战略顾问 / 深度陪跑 (RM20k - RM100k+)',
                  '知识付费课程 / 小班训练营 (RM300 - RM2k)',
                  '实体业务销售 / 供应链产品交付',
                  '目前尚未形成标准化产品，处于探索初期'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOfferTier(item)}
                    className={`w-full p-4 rounded-2xl border text-left font-bold transition-all flex items-center justify-between ${
                      offerTier === item
                        ? 'bg-surface-100 border-brand-champagne text-white shadow-lg'
                        : 'bg-surface-300/80 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span>{item}</span>
                    {offerTier === item && <Check className="w-4 h-4 text-brand-champagne" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: 发布频率与主阵地 */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-champagne">
                  07 / 创作者运营节奏
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  你计划在哪些核心平台深耕？
                </h2>
                <p className="text-xs text-slate-300">
                  AI 创作工作台将根据你的发布渠道自动重构多平台内容版本。
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  '每周 2-3 篇深度内容（微信视频号 / 领英 / 小红书）',
                  '高频输出（抖音 / 快手 / 视频号短视频矩阵）',
                  '长文与思想领导力（微信公众号 / 领英专栏 / 邮件通讯）',
                  '播客深度对谈与长视频（YouTube / 喜马拉雅 / 知识私域）',
                  '时间精力有限，希望每周花 2 小时高效产出'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setChannelFrequency(item)}
                    className={`w-full p-4 rounded-2xl border text-left font-bold transition-all flex items-center justify-between ${
                      channelFrequency === item
                        ? 'bg-surface-100 border-brand-champagne text-white shadow-lg'
                        : 'bg-surface-300/80 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span>{item}</span>
                    {channelFrequency === item && <Check className="w-4 h-4 text-brand-champagne" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 底部导航按钮 */}
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-3 rounded-2xl bg-surface-100 hover:bg-surface-50 text-slate-300 font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>上一步</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-champagne to-brand-gold text-slate-950 font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-champagne/20 flex items-center gap-2"
            >
              <span>{currentStep === 7 ? '生成我的专属商业IP快照' : '下一步'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* 底部隐私声明 */}
      <footer className="max-w-3xl mx-auto w-full pt-4 border-t border-surface-border text-center text-[10px] text-slate-400 font-mono">
        © 2026 ZIWEI IP · 严谨算法保障 · 您的所有测评数据受 256 位加密保护
      </footer>
    </div>
  );
}
