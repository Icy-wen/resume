import { SlideShell, AnimItem } from "../components/SlideShell";
import { Star, Squiggle } from "../components/doodles";
import { resume } from "../data/resume";

export function Education({ revealIndex: _revealIndex }: { revealIndex: number }) {
  return (
    <SlideShell>
      <div className="absolute right-[10%] bottom-[18%] animate-floaty">
        <Star color="#A0C4FF" size={44} variant="outline" rotate={14} />
      </div>
      <div className="absolute left-[12%] top-[20%]">
        <Squiggle color="#6FCF97" size={70} rotate={-4} />
      </div>

      <AnimItem className="relative w-full max-w-2xl text-center">
        <h2 className="font-hand text-4xl text-ink sm:text-5xl">教育 · Education</h2>
      </AnimItem>

      <AnimItem className="relative mt-8 w-full max-w-2xl">
        {resume.educations.map((ed, i) => (
          <div
            key={i}
            className="card-paper doodle-border rounded-[2rem] p-7 shadow-card"
            style={{ transform: "rotate(0.8deg)" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-hand text-2xl text-ink">{ed.school}</h3>
              <span className="font-body text-sm text-ink-soft">{ed.period}</span>
            </div>
            <p className="mt-1 font-body font-medium text-func-green">{ed.degree}</p>
            <p className="mt-3 font-body text-sm leading-7 text-ink-soft">{ed.detail}</p>
          </div>
        ))}
      </AnimItem>
    </SlideShell>
  );
}
