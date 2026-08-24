import { ExternalLink, Clock, User, ArrowLeft, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { useState } from "react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    </svg>
  );
}

type ProjectItem = (typeof resume.projects)[number];

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
    >
      {/* 背景渐变 */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
      <div className="absolute inset-0 bg-cream/90" />

      {/* 内容区 */}
      <div className="relative flex flex-1 flex-col overflow-y-auto">

        {/* 顶部栏 */}
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-ink/5 bg-cream/80 px-6 py-4 backdrop-blur-md">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded-xl bg-ink/5 px-4 py-2 font-body text-sm text-ink-soft transition hover:bg-ink/10 hover:text-ink"
          >
            <ArrowLeft size={16} />
            返回项目列表
          </button>
          <span className="font-hand text-lg text-ink-soft/40">|</span>
          <span className="hidden truncate font-body text-sm text-ink-soft sm:inline">
            {project.title}
          </span>
        </header>

        {/* 主体 */}
        <div className="mx-auto w-full max-w-4xl px-6 py-8 sm:px-10 sm:py-12">

          {/* 标题 */}
          <h1 className="font-hand text-3xl text-ink sm:text-4xl">{project.title}</h1>

          {/* 元信息 */}
          <div className="mt-3 flex flex-wrap items-center gap-4 font-body text-sm text-ink-soft/70">
            <span className="inline-flex items-center gap-1.5">
              <User size={14} /> {project.role}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {project.period}
            </span>
          </div>

          {/* 标签 */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className={`rounded-full border px-3 py-1 font-body text-xs ${project.gradient} bg-white/60 border-transparent text-ink-soft backdrop-blur-sm`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* 简介 */}
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
            {project.summary || project.description}
          </p>

          {/* 扫码体验 */}
          {project.qrCode && (
            <section className="mt-8">
              <h2 className="mb-4 inline-flex items-center gap-2 font-hand text-lg text-ink">
                <ImageIcon size={18} className="text-ink-soft/60" />
                扫码体验
              </h2>
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-white/50 p-6 shadow-soft">
                <img
                  src={project.qrCode}
                  alt={`${project.title} 小程序码`}
                  onClick={() => setLightbox(project.qrCode!)}
                  className="h-48 w-48 cursor-pointer rounded-xl bg-white object-contain transition group-hover:scale-105 hover:shadow-card"
                />
                <p className="font-body text-sm text-ink-soft">
                  微信扫码（或长按识别）即可体验 {project.title}
                </p>
              </div>
            </section>
          )}

          {/* 项目截图 */}
          {project.images && project.images.length > 0 && (
            <section className="mt-8">
              <h2 className="mb-4 inline-flex items-center gap-2 font-hand text-lg text-ink">
                <ImageIcon size={18} className="text-ink-soft/60" />
                项目截图
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightbox(img)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-ink/10 bg-white/50 shadow-soft transition hover:shadow-card"
                  >
                    <img
                      src={img}
                      alt={`${project.title} 截图 ${i + 1}`}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover:bg-ink/10 group-hover:opacity-100">
                      <span className="rounded-lg bg-ink/60 px-3 py-1.5 font-body text-xs text-cream backdrop-blur-sm">
                        点击放大
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 核心亮点 */}
          <section className="mt-8">
            <h2 className="mb-4 font-hand text-lg text-ink">核心亮点</h2>
            <ul className="space-y-3">
              {project.detail.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink-soft">
                  <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/5 text-xs font-medium text-ink-soft/60">
                    {i + 1}
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 链接 */}
          <section className="mt-8 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 font-body text-sm text-cream transition hover:bg-ink/85"
              >
                <ExternalLink size={16} /> 在线体验
              </a>
            )}
            {project.sourceLink && (
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-5 py-2.5 font-body text-sm text-ink transition hover:bg-ink/5"
              >
                <GithubIcon size={16} /> 查看源代码
              </a>
            )}
          </section>

          {/* 底部间距 */}
          <div className="h-16" />
        </div>
      </div>

      {/* 图片灯箱 */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
          >
            <ArrowLeft size={20} className="rotate-180" />
          </button>
          <img
            src={lightbox}
            alt="放大查看"
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </motion.div>
  );
}
