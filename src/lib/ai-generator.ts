import { GeneratedScript, TransformationKey } from '@/types/database';

interface GenerateParams {
  topic: string;
  contentType: 'Opinion' | 'Knowledge' | 'Story' | 'Case Study' | 'Sales' | 'Educational' | 'Behind The Scenes';
  transformation: TransformationKey;
  userName?: string;
  userRole?: string;
  archetype?: string;
}

export function generateScriptContent(params: GenerateParams): GeneratedScript {
  const { topic, contentType, transformation, userName = 'Alex Tan', userRole = 'Brand Consultant', archetype = 'Strategic Creator' } = params;
  const cleanTopic = topic.trim() || 'Why high-performing professionals struggle with personal branding';
  const id = `scr_${Date.now()}`;
  const now = new Date().toISOString();

  // Transformation specifics
  const transMap: Record<TransformationKey, { prefix: string; hookAngle: string; tone: string; ctaWord: string; ctaText: string }> = {
    LU: {
      prefix: '🌟 LU (Attraction & Resonance)',
      hookAngle: 'Unspoken Frustration / Deep Resonance',
      tone: 'Empathic, observant, insightful',
      ctaWord: 'BLUEPRINT',
      ctaText: 'Comment "BLUEPRINT" and I will send you our 5-Step Brand Resonance Audit template.'
    },
    QUAN: {
      prefix: '👑 QUAN (Authority & Conviction)',
      hookAngle: 'Contrarian Truth / Industry Critique',
      tone: 'Direct, uncompromising, high-conviction, authoritative',
      ctaWord: 'IP',
      ctaText: 'Comment "IP" to get our confidential High-Ticket Positioning Framework.'
    },
    KE: {
      prefix: '🛡️ KE (Trust & Reputation)',
      hookAngle: 'Diagnostic Evidence / Before-and-After Autopsy',
      tone: 'Analytical, pragmatic, evidence-based, credible',
      ctaWord: 'CASE',
      ctaText: 'DM me "CASE" to read the complete confidential breakdown and diagnostic sheets.'
    },
    JI: {
      prefix: '⚡ JI (Breakthrough & Blind Spot)',
      hookAngle: 'Counter-Intuitive Bottleneck / Vulnerable Awakening',
      tone: 'Revealing, self-aware, perspective-shifting',
      ctaWord: 'AUDIT',
      ctaText: 'Take the free 3-minute IP DNA Test to uncover your blind spots before your next launch.'
    }
  };

  const currentTrans = transMap[transformation] || transMap.QUAN;

  // Generate 3 dynamic hook options
  const hookOptions = [
    {
      text: `If you are an experienced ${userRole.toLowerCase()} and you are still struggling with ${cleanTopic.toLowerCase()}, you have a positioning problem, not an effort problem.`,
      score: 96,
      style: 'High-Conviction Polarizing'
    },
    {
      text: `The single biggest mistake I see 6-figure practitioners make when tackling ${cleanTopic.toLowerCase()}—and what to do instead.`,
      score: 92,
      style: 'Direct Diagnostic Warning'
    },
    {
      text: `Why conventional advice about ${cleanTopic.toLowerCase()} actually repels your highest-paying clients.`,
      score: 89,
      style: 'Counter-Intuitive Insight'
    }
  ];

  const coreIdea = `For a ${archetype}, the key to mastering "${cleanTopic}" is replacing superficial noise with structural clarity, setting clear boundaries, and anchoring your natural authority.`;

  const script30s = `Most people think ${cleanTopic.toLowerCase()} is about creating more content and shouting louder.
Here is the truth: High-value decision makers don't buy noise; they buy clarity and conviction.
When you master your natural IP Archetype, you stop competing on algorithm tricks and start commanding premium respect.
Stop copying generic tactics. Build your authentic strategic brand engine.
Follow for daily high-ticket brand intelligence.`;

  const script60s = `Let me tell you something that most social media coaches will never admit:
When it comes to ${cleanTopic.toLowerCase()}, doing what everyone else does is the fastest way to become invisible.
If you have 10+ years of domain expertise, trying to win with fast-cut viral trends makes you look commoditized.
High-paying enterprise clients look for three specific signals:
1. Deep Diagnostic Precision: Can you pinpoint their exact problem in 30 seconds?
2. Methodological Restraint: Do you have a structured framework, or are you just guessing?
3. Unshakable Conviction: Do you hold your standards when everyone else is cutting prices?
When you align your content with your true nature—using our Four Transformations model—client acquisition stops feeling like a struggle.
You transition from chasing leads to attracting buyers who already respect your price.
If you are ready to stop guessing your positioning, ${currentTrans.ctaText.toLowerCase()}`;

  const caption = `Stop trying to solve ${cleanTopic.toLowerCase()} with generic advice. 🛑

As a ${userRole}, your greatest asset isn't viral reach—it's intellectual authority and deep trust.

Here are the 3 structural shifts required:
1️⃣ Replace volume with diagnostic depth.
2️⃣ Filter out unqualified spectators with strong boundary-setting.
3️⃣ Speak directly to the pain points of 5-figure decision-makers.

What is your biggest bottleneck with this right now? Drop your thoughts below. 👇

#PersonalBranding #ConsultingStrategy #BrandIntelligence #HighTicketPositioning #ZiweiIP #ExecutiveLeadership #${transformation}Content`;

  const thumbnailTitle = `${transformation}: ${cleanTopic.toUpperCase().slice(0, 32)}`;

  const bRollIdeas = [
    'Overhead desk shot writing a 3-part framework diagram on an iPad Pro with dark aesthetic',
    'Tight close-up of a premium notebook with handwritten strategic notes and a fountain pen',
    'Clean mid-shot in a modern studio adjusting microphone and speaking with quiet intensity',
    'Screen recording showing the ZIWEI IP radar momentum score rising from 72 to 92'
  ];

  const shotSuggestions = [
    '0:00 - 0:08 | Hook: Direct camera eye-contact, no smile, high-conviction delivery with clear mic proximity',
    '0:09 - 0:25 | Core Shift: Cut to side angle (45 degrees) explaining the structural industry flaw',
    '0:26 - 0:48 | Framework: Visual overlay of the 3-step transformation model while speaking',
    '0:49 - 0:60 | Resolution & CTA: Return to central eye-level framing for the clear unhurried call-to-action'
  ];

  return {
    id,
    topic: cleanTopic,
    contentType,
    transformation,
    hookOptions,
    coreIdea,
    script30s,
    script60s,
    cta: currentTrans.ctaText,
    caption,
    thumbnailTitle,
    bRollIdeas,
    shotSuggestions,
    createdAt: now,
    saved: false
  };
}
