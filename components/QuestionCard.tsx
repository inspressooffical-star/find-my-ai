import ProgressBar from '@/components/ProgressBar';
import type { Question, QuestionOption } from '@/types/test';

type QuestionCardProps = {
  question: Question;
  index: number;
  total: number;
  onSelect: (option: QuestionOption) => void;
  isTransitioning: boolean;
};

export default function QuestionCard({ question, index, total, onSelect, isTransitioning }: QuestionCardProps) {
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
        </div>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.text}
              type="button"
              onClick={() => onSelect(option)}
              disabled={isTransitioning}
              className={`w-full rounded-2xl border p-4 text-left shadow-sm transition duration-200 ${
                isTransitioning
                  ? 'cursor-default border-slate-200 bg-slate-100 text-slate-400'
                  : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:text-slate-900'
              }`}
            >
              <span className="block text-base font-medium leading-6">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
