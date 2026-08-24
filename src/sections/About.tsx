import { SlideShell, AnimItem } from "../components/SlideShell";
import { Star, Dot } from "../components/doodles";
import { resume } from "../data/resume";

export function About({ revealIndex: _revealIndex }: { revealIndex: number }) {
  return (
    <SlideShell>
      <div className="absolute left-[10%] top-[18%]">
        <Star color="#A0C4FF" size={40} variant="outline" rotate={12} />
      </div>
      <div className="absolute right-[12%] bottom-[18%] animate-floaty">
        <Dot color="#FFB3C6" size={22} />
      </div>

      <AnimItem className="relative w-full max-w-2xl">
        <div
          className="card-paper doodle-border rounded-[2rem] p-8 shadow-card sm:p-10"
          style={{ transform: "rotate(-1deg)" }}
        >
          <h2 className="font-hand text-4xl text-ink">关于我 · About</h2>
          <div className="my-4 h-1 w-16 rounded-full bg-func-yellow" />
          <p className="font-body text-base leading-8 text-ink-soft sm:text-lg">{resume.about}</p>
        </div>
      </AnimItem>
    </SlideShell>
  );
}
