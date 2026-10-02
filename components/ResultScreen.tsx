'use client';

import type { AiMatch, TraitMeta } from '@/types/test';

type ResultScreenProps = {
  matches: AiMatch[];
  topAi: AiMatch;
  secondaryAi: AiMatch;
  topTraits: TraitMeta[];
  onRestart: () => void;
};

export default function ResultScreen({ matches, topAi, secondaryAi, topTraits, onRestart }: ResultScreenProps) {
  const handleShare = async () => {
    const shareData = {
      title: '나한테 딱 맞는 AI는?',
      text: `${topAi.name}와 가장 잘 맞는 조합이에요!`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert('결과 링크가 클립보드에 복사됐어요.');
      }
    } catch (error) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert('공유를 지원하지 않아 링크를 클립보드에 복사했어요.');
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-violet-50 via-white to-slate-50 px-4 py-8">
      <div className="w-full max-w-[480px] space-y-5">
        <div className="card-surface p-5 sm:p-6">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-700">당신의 AI 파트너는</p>
            <h2 className="mt-2 text-balance text-3xl font-bold text-slate-900">{topAi.name}</h2>
            <div className="mt-3 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-base font-semibold text-brand-700">
              궁합도 {topAi.score}%
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">{topAi.tagline}</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{topAi.description}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="mb-3 text-base font-semibold text-slate-800">당신의 주요 특징</h3>
            <div className="flex flex-wrap gap-2">
              {topTraits.map((trait) => (
                <span
                  key={trait.key}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {trait.emoji} {trait.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-slate-900">함께 쓰면 좋은 AI</h3>
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-slate-900">{secondaryAi.name}</p>
                <p className="mt-1 text-sm text-slate-600">{secondaryAi.bestFor}</p>
              </div>
              <span className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                {secondaryAi.score}%
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{secondaryAi.complementaryText}</p>
          </div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-slate-900">전체 AI 궁합</h3>
          <div className="space-y-3">
            {matches.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-20 shrink-0 text-sm font-medium text-slate-700">{item.name}</div>
                <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-500 to-sky-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="w-12 text-right text-sm font-semibold text-slate-700">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50"
          >
            결과 공유하기
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 hover:bg-slate-800"
          >
            다시 테스트하기
          </button>
        </div>
      </div>
    </main>
  );
}
