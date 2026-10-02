type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
        <span>{current + 1} / {total}</span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div className="progress-fill h-full rounded-full transition-all duration-300" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
