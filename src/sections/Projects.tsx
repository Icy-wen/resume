import { useState, useMemo } from "react";
import { SlideShell, RevealItem } from "../components/SlideShell";
import { Star, Heart, CircleDoodle, Dot } from "../components/doodles";
import { resume, type ProjectCategory } from "../data/resume";
import { ExternalLink, StarIcon, Clock, User } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const CATEGORIES: Array<{ key: ProjectCategory | "全部"; label: string; emoji: string }> = [
  { key: "全部", label: "All", emoji: "✦" },
  { key: "全栈", label: "全栈", emoji: "🔧" },
  { key: "前端", label: "前端", emoji: "🎨" },
  { key: "AI", label: "AI", emoji: "🤖" },
  { key: "小程序", label: "小程序", emoji: "📱" },
  { key: "工具", label: "工具", emoji: "⚡" },
];

export function Projects({ revealIndex, onSelectProject }: { revealIndex: number; onSelectProject?: (index: number) => void }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "全部">("全部");

  const filtered = useMemo(
    () => (activeCategory === "全部" ? resume.projects : resume.projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <SlideShell>
      {/* 装饰涂鸦 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <div className="absolute left-[6%] top-[12%] animate-floaty">
          <Star color="#FFE066" size={36} rotate={-10} />
        </div>
        <div className="absolute right-[8%] top-[14%] animate-floaty" style={{ animationDelay: "1.2s" }}>
          <Heart color="#FFB3C6" size={30} rotate={14} />
        </div>
        <div className="absolute left-[10%] bottom-[14%] animate-floaty" style={{ animationDelay: "0.8s" }}>
          <CircleDoodle color="#B9E4C9" size={44} />
        </div>
        <div className="absolute right-[7%] bottom-[18%] animate-floaty" style={{ animationDelay: "1.8s" }}>
          <Dot color="#A0C4FF" size={16} />
        </div>
      </div>

      {/* Step 0: 标题 + 筛选 + 统计 */}
      <RevealItem step={0} revealIndex={revealIndex} className="relative z-10 w-full max-w-5xl text-center">
        <h2 className="font-hand text-4xl text-ink sm:text-5xl">项目 · Projects</h2>
        <p className="mt-1.5 font-body text-sm text-ink-soft">每一次 Coding 都有迹可循 ✦</p>

        {/* 分类筛选 */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count =
              cat.key === "全部"
                ? resume.projects.length
                : resume.projects.filter((p) => p.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-body text-xs transition-all duration-300 ${
                  isActive
                    ? "bg-ink text-cream shadow-soft scale-105"
                    : "bg-white/80 text-ink-soft hover:bg-white hover:text-ink hover:shadow-sm"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span className={`ml-0.5 rounded-full px-1.5 py-0 text-[10px] ${isActive ? "bg-cream/20 text-cream" : "bg-pastel-blue/40 text-ink-soft"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </RevealItem>

      {/* Step 1-2: 精选项目 (大卡片) */}
      {featured.length > 0 && (
        <div className="relative z-10 mt-5 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((project, i) => {
            const globalIndex = resume.projects.findIndex((p) => p.title === project.title);
            return (
            <RevealItem key={project.title} step={i < 2 ? 1 : 2} revealIndex={revealIndex} className="h-full">
              <FeaturedCard project={project} onClick={() => onSelectProject?.(globalIndex)} />
            </RevealItem>
          )})}
        </div>
      )}

      {/* Step 3: 其他项目 */}
      {others.length > 0 && (
        <RevealItem step={3} revealIndex={revealIndex} className="relative z-10 mt-4 w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {others.map((project) => {
              const globalIndex = resume.projects.findIndex((p) => p.title === project.title);
              return <CompactCard key={project.title} project={project} onClick={() => onSelectProject?.(globalIndex)} />;
            })}
          </div>
        </RevealItem>
      )}
    </SlideShell>
  );
}

/* ---- 子组件 ---- */

function FeaturedCard({ project, onClick }: { project: (typeof resume.projects)[number]; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
    >
      {/* 星级徽章 */}
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/60 px-2.5 py-1 text-xs font-medium text-ink backdrop-blur-sm">
        <StarIcon size={13} className="fill-func-yellow text-func-yellow" />
        {project.stars}
      </div>

      {/* 标题 */}
      <h3 className="font-hand text-2xl text-ink">{project.title}</h3>

      {/* 简介 */}
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
        {project.summary || project.description}
      </p>

      {/* 查看详情提示 */}
      <div className="mt-2 flex items-center gap-2">
        <span className="font-body text-xs text-ink-soft/60">点击查看详情 →</span>
      </div>

      {/* 元信息 */}
      <div className="mt-3 flex flex-wrap items-center gap-3 font-body text-xs text-ink-soft/70">
        <span className="inline-flex items-center gap-1">
          <User size={12} /> {project.role}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} /> {project.period}
        </span>
      </div>

      {/* 标签 */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="rounded-md bg-white/50 px-2 py-0.5 font-body text-[11px] text-ink-soft backdrop-blur-sm">
            {t}
          </span>
        ))}
      </div>

      {/* 链接 */}
      <div className="mt-3 flex gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 rounded-lg bg-ink/80 px-3 py-1.5 font-body text-xs text-cream transition hover:bg-ink"
          >
            <ExternalLink size={12} /> Demo
          </a>
        )}
        {project.sourceLink && (
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 rounded-lg bg-white/70 px-3 py-1.5 font-body text-xs text-ink transition hover:bg-white"
          >
            <GithubIcon size={12} /> Source
          </a>
        )}
      </div>
    </div>
  );
}

function CompactCard({ project, onClick }: { project: (typeof resume.projects)[number]; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-r ${project.gradient} px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {/* 标题行 */}
          <div className="flex items-center gap-2">
            <h4 className="font-hand text-lg text-ink truncate">{project.title}</h4>
            <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-white/50 px-1.5 py-0 text-[10px] text-ink-soft">
              <StarIcon size={10} className="fill-func-yellow text-func-yellow" /> {project.stars}
            </span>
          </div>

          {/* 描述 */}
          <p className="mt-1 font-body text-xs leading-relaxed text-ink-soft line-clamp-2">{project.description}</p>

          {/* 标签 */}
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-md bg-white/45 px-2 py-0.5 font-body text-[10px] text-ink-soft">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 右侧链接 */}
        <div className="flex shrink-0 flex-col gap-1.5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-ink/80 p-1.5 text-cream transition hover:bg-ink"
              title="在线演示"
            >
              <ExternalLink size={14} />
            </a>
          )}
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-white/70 p-1.5 text-ink transition hover:bg-white"
              title="源代码"
            >
              <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
