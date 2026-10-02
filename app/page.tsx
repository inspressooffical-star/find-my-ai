'use client';

import { useMemo, useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuestionCard from '@/components/QuestionCard';
import ResultScreen from '@/components/ResultScreen';
import { questions } from '@/data/questions';
import type { QuestionOption, UserTraits } from '@/types/test';
import { calculateAiMatches, calculateUserTraits, getTopTraitMeta } from '@/utils/calculateResult';

export default function HomePage() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, QuestionOption[]>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = questions[currentIndex];

  const userTraits = useMemo<UserTraits>(() => calculateUserTraits(selectedAnswers), [selectedAnswers]);

  const handleAnswer = (options: QuestionOption[]) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentIndex]: options,
      }));

      if (currentIndex === questions.length - 1) {
        setStage('result');
        setIsTransitioning(false);
        return;
      }

      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(false);
    }, 260);
  };

  const handleRestart = () => {
    setStage('intro');
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsTransitioning(false);
  };

  if (stage === 'intro') {
    return <StartScreen onStart={() => setStage('quiz')} />;
  }

  if (stage === 'result') {
    const matches = calculateAiMatches(userTraits);
    const topAi = matches[0];
    const secondaryAi = matches[1];
    const topTraits = getTopTraitMeta(userTraits, 4);

    return (
      <ResultScreen
        matches={matches}
        topAi={topAi}
        secondaryAi={secondaryAi}
        topTraits={topTraits}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <QuestionCard
      question={question}
      index={currentIndex}
      total={questions.length}
      onSelect={handleAnswer}
      isTransitioning={isTransitioning}
    />
  );
}
