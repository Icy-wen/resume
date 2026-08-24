import type { DoodleProps } from "./types";

export function Dot({ color = "#A0C4FF", size = 16, rotate = 0, className = "" }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`doodle ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="30" fill={color} stroke="#4A4A4A" strokeWidth="4" />
    </svg>
  );
}
