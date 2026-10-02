import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import type { Question, QuestionOption } from '@/types/test';

type QuestionCardProps = {
  question: Question;
  index: number;
  total: number;
  onSelect: (options: QuestionOption[]) => void;
  isTransitioning: boolean;
};

export default function QuestionCard({ question, index, total, onSelect, isTransitioning }: QuestionCardProps) {
  const [selectedOptions, setSelectedOptions] = useState<QuestionOption[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleOption = (option: QuestionOption) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.some((opt) => opt.text === option.text);

      if (isSelected) {
        return prev.filter((opt) => opt.text !== option.text);
      }

      if (prev.length >= 2) {
        return prev;
      }

      return [...prev, option];
    });
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onSelect(selectedOptions);
      setSelectedOptions([]);
      setIsSubmitting(false);
    }, 260);
  };

  const canSubmit = selectedOptions.length > 0 && !isSubmitting && !isTransitioning;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-8">
      <div className="card-surface w-full max-w-[480px] p-5 sm:p-6">
        <div className="mb-5">
          <ProgressBar current={index} total={total} />
        </div>

        <div className="mb-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-700">Q{index + 1}</p>
          <h2 className="text-balance text-2xl font-bold leading-snug text-slate-900 sm:text-[2rem]">
            {question.prompt}
          </h2>
          <p className="mt-2 text-sm text-slate-500">최대 2개까지 선택 가능</p>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptions.some((opt) => opt.text === option.text);

            return (
              <button
                key={option.text}
                type="button"
                onClick={() => handleToggleOption(option)}
                disabled={isSubmitting || isTransitioning}
                className={`w-full rounded-2xl border-2 p-4 text-left shadow-sm transition duration-200 ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 text-slate-900'
                    : isSubmitting || isTransitioning
                      ? 'cursor-default border-slate-200 bg-slate-100 text-slate-400'
                      : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition ${
                      isSelected ? 'border-brand-500 bg-brand-500' : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <span className="text-sm text-white">✓</span>}
                  </div>
                  <span className="block text-base font-medium leading-6">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`mt-6 w-full rounded-2xl px-5 py-3 text-base font-semibold transition ${
            canSubmit
              ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 hover:-translate-y-0.5 hover:bg-slate-800'
              : 'cursor-not-allowed bg-slate-200 text-slate-400'
          }`}
        >
          다음
        </button>
      </div>
    </main>
  );
}
