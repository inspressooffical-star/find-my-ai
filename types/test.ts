export type TraitKey =
  | 'conversation'
  | 'memory'
  | 'writing'
  | 'coding'
  | 'research'
  | 'creativity'
  | 'agent'
  | 'multimodal'
  | 'ecosystem'
  | 'concise'
  | 'reasoning'
  | 'productivity';

export type TraitScoreMap = Partial<Record<TraitKey, number>>;

export type QuestionOption = {
  text: string;
  scores: TraitScoreMap;
};

export type Question = {
  id: string;
  prompt: string;
  options: QuestionOption[];
};

export type UserTraits = Record<TraitKey, number>;

export type AiProfile = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  complementaryText: string;
  traits: Record<TraitKey, number>;
};

export type AiMatch = AiProfile & {
  score: number;
};

export type TraitMeta = {
  key: TraitKey;
  label: string;
  emoji: string;
};

export const TRAIT_KEYS: TraitKey[] = [
  'conversation',
  'memory',
  'writing',
  'coding',
  'research',
  'creativity',
  'agent',
  'multimodal',
  'ecosystem',
  'concise',
  'reasoning',
  'productivity',
];

export const TRAIT_META: Record<TraitKey, TraitMeta> = {
  conversation: { key: 'conversation', label: '대화를 많이 하는 타입', emoji: '💬' },
  memory: { key: 'memory', label: '이전 맥락을 중요하게 보는 타입', emoji: '🧠' },
  writing: { key: 'writing', label: '글쓰기와 문장 정리가 중요한 타입', emoji: '✍️' },
  coding: { key: 'coding', label: '코딩/개발을 자주 하는 타입', emoji: '💻' },
  research: { key: 'research', label: '자료 조사와 비교를 선호하는 타입', emoji: '🔎' },
  creativity: { key: 'creativity', label: '아이디어와 창작을 좋아하는 타입', emoji: '🎨' },
  agent: { key: 'agent', label: '자동 실행형을 선호하는 타입', emoji: '⚙️' },
  multimodal: { key: 'multimodal', label: '이미지와 파일을 활용하는 타입', emoji: '🖼️' },
  ecosystem: { key: 'ecosystem', label: '도구 연동을 중요하게 보는 타입', emoji: '🔄' },
  concise: { key: 'concise', label: '간결한 답변을 선호하는 타입', emoji: '✨' },
  reasoning: { key: 'reasoning', label: '논리적 분석을 중요하게 보는 타입', emoji: '📐' },
  productivity: { key: 'productivity', label: '업무 생산성을 중시하는 타입', emoji: '🚀' },
};
