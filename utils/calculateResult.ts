import { aiProfiles } from '@/data/aiProfiles';
import { TRAIT_KEYS, TRAIT_META, type AiMatch, type QuestionOption, type TraitKey, type UserTraits } from '@/types/test';

export function createEmptyTraits(): UserTraits {
  return TRAIT_KEYS.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as UserTraits);
}

export function calculateUserTraits(selectedAnswers: Record<number, QuestionOption>): UserTraits {
  const totals = createEmptyTraits();

  Object.values(selectedAnswers).forEach((option) => {
    Object.entries(option.scores).forEach(([trait, value]) => {
      const traitKey = trait as TraitKey;
      totals[traitKey] += value ?? 0;
    });
  });

  return totals;
}

export function calculateAiMatches(userTraits: UserTraits): AiMatch[] {
  const matches = aiProfiles.map((profile) => {
    const userValues = TRAIT_KEYS.map((key) => userTraits[key]);
    const aiValues = TRAIT_KEYS.map((key) => profile.traits[key]);

    const dotProduct = TRAIT_KEYS.reduce((sum, key) => sum + userTraits[key] * profile.traits[key], 0);
    const userMagnitude = Math.sqrt(userValues.reduce((sum, value) => sum + value * value, 0));
    const aiMagnitude = Math.sqrt(aiValues.reduce((sum, value) => sum + value * value, 0));

    const cosineSimilarity = userMagnitude === 0 || aiMagnitude === 0 ? 0 : dotProduct / (userMagnitude * aiMagnitude);

    const averageGap =
      TRAIT_KEYS.reduce((sum, key) => sum + Math.abs(userTraits[key] - profile.traits[key]), 0) / TRAIT_KEYS.length;
    const balanceScore = 1 - averageGap / 10;
    const combined = Math.max(0, Math.min(1, cosineSimilarity * 0.7 + balanceScore * 0.3));
    const score = Math.round(combined * 100);

    return {
      ...profile,
      score,
    };
  });

  return matches.sort((a, b) => b.score - a.score);
}

export function getTopTraitMeta(userTraits: UserTraits, limit = 4) {
  return TRAIT_KEYS.map((key) => ({
    key,
    label: TRAIT_META[key].label,
    emoji: TRAIT_META[key].emoji,
    value: userTraits[key],
  }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
    .map(({ key, label, emoji }) => ({
      key,
      label,
      emoji,
    }));
}
