import { SlideShell, RevealItem } from "../components/SlideShell";
import { Star, CircleDoodle } from "../components/doodles";
import { resume } from "../data/resume";
import type { SkillGroup } from "../data/resume";

const toneStyles: Record<SkillGroup["tone"], { bg: string; border: string; dot: string }> = {
  pink: { bg: "bg-pastel-pink/60", border: "border-func-pink/30", dot: "bg-func-pink" },
  blue: { bg: "bg-pastel-blue/60", border: "border-func-blue/30", dot: "bg-func-blue" },
  green: { bg: "bg-pastel-green/60", border: "border-func-green/30", dot: "bg-func-green" },
  yellow: { bg: "bg-pastel-yellow/60", border: "border-func-yellow/30", dot: "bg-func-yellow" },
};

export function Skills({ revealIndex }: { revealIndex: number }) {
  return (
    <SlideShell>
      <div className="absolute right-[10%] top-[16%] animate-floaty">
        <Star color="#FFE066" size={46} variant="grid" rotate={8} />
      </div>
      <div className="absolute left-[12%] bottom-[20%]">
        <CircleDoodle color="#FFB3C6" size={60} />
      </div>

      <RevealItem step={0} revealIndex={revealIndex} className="relative text-center">
        <h2 className="font-hand text-4xl text-ink sm:text-5xl">专业技能</h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-func-blue sm:w-24" />
      </RevealItem>

      <div className="relative mt-8 grid w-[85vw] max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
        {resume.skills.map((group, i) => {
          const s = toneStyles[group.tone];
          return (
            <RevealItem key={group.category} step={i + 1} revealIndex={revealIndex}>
              <div
                className={`rounded-2xl ${s.bg} border ${s.border} p-6 shadow-soft h-full`}
              >
                <h3 className="font-hand text-2xl text-ink mb-4">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-body text-base leading-7 text-ink-soft">
                      <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          );
        })}
      </div>
    </SlideShell>
  );
}
