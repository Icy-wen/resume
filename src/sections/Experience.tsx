import { SlideShell, RevealItem } from "../components/SlideShell";
import { Heart, Star } from "../components/doodles";
import { resume } from "../data/resume";

export function Experience({ revealIndex }: { revealIndex: number }) {
  return (
    <SlideShell>
      <div className="absolute left-[8%] top-[16%] animate-floaty">
        <Heart color="#FF8FAB" size={36} />
      </div>
      <div className="absolute right-[12%] top-[20%]">
        <Star color="#B9E4C9" size={40} variant="striped" rotate={-10} />
      </div>

      <RevealItem step={0} revealIndex={revealIndex} className="relative w-full max-w-3xl text-center">
        <h2 className="font-hand text-4xl text-ink sm:text-5xl">经历 · Experience</h2>
      </RevealItem>

      <div className="relative mt-8 max-h-[55vh] w-full max-w-3xl overflow-y-auto pr-1">
        <ol className="relative ml-3 border-l-2 border-dashed border-ink/15 pl-6">
          {resume.experiences.map((e, i) => (
            <RevealItem key={i} step={i + 1} revealIndex={revealIndex}>
              <li className="relative mb-7">
                <span className="absolute -left-[35px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-func-pink shadow-soft">
                  <span className="block h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <div
                  className="card-paper rounded-2xl p-5 shadow-soft"
                  style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-hand text-2xl text-ink">{e.role}</h3>
                    <span className="font-body text-sm text-ink-soft">
                      {e.period} · {e.location}
                    </span>
                  </div>
                  <p className="font-body font-medium text-func-blue">{e.company}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 font-body text-sm leading-7 text-ink-soft">
                    {e.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </RevealItem>
          ))}
        </ol>
      </div>
    </SlideShell>
  );
}
