import { SlideShell, RevealItem } from "../components/SlideShell";
import { Star, Heart, Squiggle, Dot, CircleDoodle } from "../components/doodles";
import { resume } from "../data/resume";

export function Hero({ revealIndex }: { revealIndex: number }) {
  return (
    <SlideShell>
      <div className="absolute left-[8%] top-[20%] animate-floaty">
        <Star color="#FFB3C6" size={66} rotate={-12} />
      </div>
      <div className="absolute right-[10%] top-[16%] animate-floaty" style={{ animationDelay: "1s" }}>
        <Heart color="#FF8FAB" size={42} rotate={10} />
      </div>
      <div className="absolute left-[14%] bottom-[22%] animate-floaty" style={{ animationDelay: "1.6s" }}>
        <CircleDoodle color="#B9E4C9" size={70} />
      </div>
      <div className="absolute right-[12%] bottom-[20%] animate-floaty" style={{ animationDelay: "0.6s" }}>
        <Star color="#FFE066" size={48} variant="striped" rotate={18} />
      </div>
      <div className="absolute left-[46%] top-[12%] animate-floaty" style={{ animationDelay: "2s" }}>
        <Dot color="#A0C4FF" size={20} />
      </div>
      <div className="absolute right-[30%] top-[28%]">
        <Squiggle color="#7FB5FF" size={80} rotate={-6} />
      </div>

      <RevealItem step={0} revealIndex={revealIndex} className="relative text-center">
        <p className="font-hand text-2xl text-func-pink sm:text-3xl">{resume.slogan}</p>
      </RevealItem>
      <RevealItem step={1} revealIndex={revealIndex} className="relative mt-3 text-center">
        <h1 className="font-hand text-6xl text-ink text-shadow-soft sm:text-8xl">{resume.name}</h1>
      </RevealItem>
      <RevealItem step={2} revealIndex={revealIndex} className="relative mt-5 flex flex-col items-center gap-3 text-center">
        <p className="font-body text-lg text-ink-soft sm:text-xl">{resume.title}</p>
        <p className="font-hand text-xl text-func-blue">{resume.tagline}</p>
      </RevealItem>
    </SlideShell>
  );
}
