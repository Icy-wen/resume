import type { DoodleProps } from "./types";

export function CircleDoodle({ color = "#B9E4C9", size = 60, rotate = 0, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`doodle ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="5" strokeDasharray="2 11" strokeLinecap="round" />
      <circle cx="50" cy="50" r="27" fill="none" stroke={color} strokeWidth="4" />
      <circle cx="50" cy="50" r="14" fill={color} opacity="0.35" />
    </svg>
  );
}
