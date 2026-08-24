import type { DoodleProps } from "./types";

export function Heart({ color = "#FF8FAB", size = 36, rotate = 0, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`doodle ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M50 86 C 10 56 8 26 30 18 C 44 13 50 28 50 28 C 50 28 56 13 70 18 C 92 26 90 56 50 86 Z"
        fill={color}
        stroke="#4A4A4A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
