export type FiveElement =
  | 'Wood'
  | 'Fire'
  | 'Earth'
  | 'Metal'
  | 'Water'
  | 'Wood/Water'
  | 'Metal/Fire'
  | 'Water/Wood';

export type YinYang = 'Yin' | 'Yang';
export type StarCategory = 'NorthDipper' | 'SouthDipper' | 'MiddleDipper' | 'AuxiliaryLucky' | 'AuxiliarySha' | 'Dynamic';

export interface ZiweiMajorStar {
  id: string;
  nameZh: string;
  nameEn: string;
  pinyin: string;
  element: FiveElement;
  yinYang: YinYang;
  category: StarCategory;
  symbolicTitle: string; // e.g. 帝座 (The Sovereign Emperor)
  ipArchetype: string;   // e.g. The Sovereign Leader / High-Ticket Standard Setter
  temperament: string;   // Traditional essence
  businessTranslation: {
    corePositioning: string;
    naturalAuthorityLever: string;
    monetizationStrength: string;
    cameraAndVoiceStyle: string;
    idealAudience: string;
    potentialBlindSpot: string;
    signatureContentAngles: string[];
    sampleHooks: string[];
    recommendedOfferTier: string;
  };
  transformations: {
    canTransformLu: boolean;
    canTransformQuan: boolean;
    canTransformKe: boolean;
    canTransformJi: boolean;
    transformationNotes?: string;
  };
  palaceAffinity: {
    bestPalaces: string[];
    challengingPalaces: string[];
  };
}

export interface ZiweiPalace {
  id: string;
  nameZh: string;
  nameEn: string;
  pinyin: string;
  palaceOrder: number; // 1 to 12
  traditionalMeaning: string;
  businessIpMeaning: string;
  strategicQuestions: string[];
  operationalDirectives: {
    forPositioning: string;
    forContentStrategy: string;
    forMonetization: string;
  };
  keyIndicatorsWhenActive: string[];
}

export interface StemTransformation {
  stemZh: string;
  stemEn: string;
  pinyin: string;
  luStar: string;
  quanStar: string;
  keStar: string;
  jiStar: string;
  mnemonic: string; // 口诀 e.g. 廉破武阳
  annualEnergyTheme: string;
  commercialStrategy: {
    luInsight: string;
    quanInsight: string;
    keInsight: string;
    jiInsight: string;
  };
}

export interface ZiweiAuxiliaryStar {
  id: string;
  nameZh: string;
  nameEn: string;
  pinyin: string;
  category: 'Lucky6' | 'Sha6' | 'BoShi' | 'Special';
  element: FiveElement;
  symbolism: string;
  businessTranslation: {
    superpowerOrBottleneck: string;
    contentStrategyImpact: string;
    monetizationImpact: string;
    recommendedAction: string;
  };
}

export interface ZiweiClassicPattern {
  id: string;
  nameZh: string;
  nameEn: string;
  pinyin: string;
  configurationDescription: string;
  starComposition: string[];
  traditionalAppraisal: string;
  modernIpModel: {
    commercialArchetype: string;
    coreCompetitiveAdvantage: string;
    highestRoiOfferModel: string;
    contentDistributionBlueprint: string;
    riskMitigation: string;
    realWorldAnalogy: string;
  };
}
