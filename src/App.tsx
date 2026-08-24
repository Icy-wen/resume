import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSlideDeck } from "./hooks/useSlideDeck";
import { TopBar } from "./components/TopBar";
import { SlideNav } from "./components/SlideNav";
import { resume } from "./data/resume";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import ProjectDetail from "./sections/ProjectDetail";

const slides = [Hero, About, Skills, Projects, Experience, Contact];

/* 每页揭示步数（0~N-1 步，全部揭示后下一击翻页） */
const SLIDE_STEPS = [3, 1, 5, 4, 2, 1];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const NON_INTERACTIVE = new Set([
  "DIV", "SPAN", "SECTION", "MAIN", "SVG", "P",
  "H1", "H2", "H3", "H4", "H5", "H6",
  "LI", "UL", "OL", "ARTICLE", "HEADER", "IMG",
  "path", "circle", "rect", "g",
]);

export default function App() {
  const { index, direction, next, prev, goTo, total } = useSlideDeck(slides.length);
  const Slide = slides[index];

  /* 当前页已揭示到第几步 */
  const [revealIndex, setRevealIndex] = useState(0);
  const maxSteps = SLIDE_STEPS[index];

  /* 项目详情页（选中的项目索引，null = 主页面） */
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  /* 翻页时重置揭示进度 */
  useEffect(() => {
    setRevealIndex(0);
  }, [index]);

  /* 核心：点击 / 键盘 → 先揭示再翻页 */
  const handleAdvance = useCallback(() => {
    setRevealIndex((r) => {
      if (r < maxSteps - 1) return r + 1;
      next();
      return r;
    });
  }, [maxSteps, next]);

  const handleGoBack = useCallback(() => {
    prev();
  }, [prev]);

  /* 键盘监听（接管 useSlideDeck 的内置监听） */
  useEffect(() => {
    if (selectedProject !== null) return; // 详情页禁用主页键盘
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        handleAdvance();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        handleGoBack();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleAdvance, handleGoBack, goTo, total, selectedProject]);

  /* 点击屏幕：未揭示完 → 揭示下一步；揭示完 → 左侧上一页 / 右侧下一页 */
  const handleScreenClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!NON_INTERACTIVE.has(target.tagName)) return;
      if (target.closest("button, a, input, textarea, select, [role='tab']")) return;

      setRevealIndex((r) => {
        if (r < maxSteps - 1) return r + 1;
        /* 全部揭示后，按位置翻页 */
        const x = e.clientX;
        if (x < window.innerWidth / 2) prev();
        else next();
        return r;
      });
    },
    [maxSteps, prev, next],
  );

  /* 渲染：项目详情页 vs 幻灯片主页 */
  if (selectedProject !== null) {
    return (
      <AnimatePresence mode="wait">
        <ProjectDetail
          key={`project-${selectedProject}`}
          project={resume.projects[selectedProject]}
          onBack={() => setSelectedProject(null)}
        />
      </AnimatePresence>
    );
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <TopBar name={resume.name} index={index} total={total} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 cursor-pointer"
          onClick={handleScreenClick}
        >
          <Slide
            revealIndex={revealIndex}
            {...(index === 3 ? { onSelectProject: (i: number) => setSelectedProject(i) } : {})}
          />
        </motion.div>
      </AnimatePresence>

      <SlideNav index={index} total={total} goTo={goTo} />
    </main>
  );
}
