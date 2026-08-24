import { useState, useEffect, useCallback } from "react";

interface UseSlideDeckOptions {
  /** 是否注册内置键盘监听，默认 true */
  registerKeyboard?: boolean;
  /** 自定义前进回调，覆盖内置 next */
  onAdvance?: () => void;
  /** 自定义后退回调，覆盖内置 prev */
  onGoBack?: () => void;
}

export function useSlideDeck(total: number, options: UseSlideDeckOptions = {}) {
  const { registerKeyboard = true, onAdvance, onGoBack } = options;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i >= total - 1 ? i : i + 1));
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i <= 0 ? i : i - 1));
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(total - 1, i));
      setDirection(clamped >= index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total]
  );

  useEffect(() => {
    if (!registerKeyboard) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        if (onAdvance) onAdvance();
        else next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (onGoBack) onGoBack();
        else prev();
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
  }, [registerKeyboard, next, prev, goTo, total, onAdvance, onGoBack]);

  return { index, direction, next, prev, goTo, total };
}
