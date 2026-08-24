import { SlideShell, AnimItem } from "../components/SlideShell";
import { Heart, Star, Dot } from "../components/doodles";
import { resume } from "../data/resume";
import { Github, Linkedin, Twitter, Globe, Mail, Phone, MessageCircle } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
  mail: Mail,
  wechat: MessageCircle,
} as const;

export function Contact({ revealIndex: _revealIndex }: { revealIndex: number }) {
  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(resume.email);
    } else {
      console.error("当前环境不支持复制到剪贴板");
    }
  };

  const copyPhone = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(resume.phone);
    } else {
      console.error("当前环境不支持复制到剪贴板");
    }
  };

  return (
    <SlideShell>
      <div className="absolute left-[10%] top-[18%] animate-floaty">
        <Heart color="#FF8FAB" size={40} />
      </div>
      <div className="absolute right-[10%] top-[16%]">
        <Star color="#FFE066" size={46} variant="striped" rotate={10} />
      </div>
      <div className="absolute left-[14%] bottom-[20%]">
        <Dot color="#B9E4C9" size={20} />
      </div>

      <AnimItem className="relative text-center">
        <h2 className="font-hand text-5xl text-ink sm:text-6xl">联系方式 ✦</h2>
        <p className="mt-3 font-hand text-xl text-func-blue">Let's contact</p>
      </AnimItem>

      <AnimItem className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-pink"
        >
          <Mail size={18} /> {resume.email}
        </button>
        <a
          href={`tel:${resume.phone}`}
          onClick={copyPhone}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-green"
        >
          <Phone size={18} /> {resume.phone}
        </a>
      </AnimItem>

      <AnimItem className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
        {resume.contacts.map((c) => {
          const Icon = iconMap[c.icon];
          return (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-body text-sm text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-blue"
            >
              <Icon size={16} /> {c.label}
            </a>
          );
        })}
      </AnimItem>

      <AnimItem className="relative mt-10">
        <span className="font-hand text-2xl text-func-pink">Thanks for watching ✦</span>
      </AnimItem>
    </SlideShell>
  );
}
