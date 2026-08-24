export function TopBar({ name, index, total }: { name: string; index: number; total: number }) {
  const progress = ((index + 1) / total) * 100;
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-cream/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-3 sm:px-8">
        <span className="font-hand text-2xl tracking-wide text-ink">{name}</span>
        <span className="font-body text-sm font-medium text-ink-soft">
          {index + 1} <span className="text-ink/40">/ {total}</span>
        </span>
      </div>
      <div
        className="h-1 rounded-r-full bg-func-pink transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={total}
      />
    </header>
  );
}
