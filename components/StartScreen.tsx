type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-slate-50 px-4 py-8">
      <div className="card-surface w-full max-w-[480px] p-6 sm:p-7">
        <div className="mb-6 flex items-center justify-center">
          <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-brand-700">
            AI 궁합 테스트
          </span>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            나한테 딱 맞는 AI는?
          </h1>
          <p className="text-balance text-base leading-7 text-slate-600">
            ChatGPT, Claude, Gemini, Manus 등 여러 AI 중<br />
            내 사용 방식에 가장 잘 맞는 AI를 찾아보세요.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-left">
          <div className="flex items-center justify-between gap-2 text-sm text-slate-600">
            <span className="font-medium">테스트 요약</span>
            <span>약 2분 · 15문항</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-500 to-sky-500 opacity-80" />
          </div>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 w-full rounded-2xl bg-slate-900 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          AI 궁합 알아보기
        </button>
      </div>
    </main>
  );
}
