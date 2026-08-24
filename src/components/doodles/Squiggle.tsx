import type { DoodleProps } from "./types";

export function Squiggle({ color = "#FFE066", size = 70, rotate = 0, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size / 2.2}
      viewBox="0 0 140 40"
      className={`doodle ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M5 20 Q 20 2 35 20 T 65 20 T 95 20 T 125 20 T 138 20"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
