interface SlideNavProps {
  index: number;
  total: number;
  goTo: (i: number) => void;
}

export function SlideNav({ index, total, goTo }: SlideNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-center border-t border-black/5 bg-cream/70 px-4 py-3 backdrop-blur-md"
      aria-label="幻灯片导航"
    >
      <div className="flex items-center gap-2" role="tablist">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`第 ${i + 1} 页`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-func-pink" : "w-2.5 bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
