import { useId } from "react";
import type { DoodleProps } from "./types";

type Variant = "solid" | "outline" | "striped" | "grid";

const POINTS = "50,6 61,39 95,39 67,60 78,93 50,72 22,93 33,60 5,39 39,39";

export function Star({
  color = "#FFB3C6",
  size = 40,
  rotate = 0,
  variant = "solid",
  className = "",
}: DoodleProps & { variant?: Variant }) {
  const id = useId();
  const fill =
    variant === "solid"
      ? color
      : variant === "striped"
      ? `url(#${id}-stripes)`
      : variant === "grid"
      ? `url(#${id}-grid)`
      : "none";
  const stroke = variant === "outline" ? color : "#4A4A4A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`doodle ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      {variant === "striped" && (
        <pattern id={`${id}-stripes`} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="12" height="12" fill="#FFFDF7" />
          <rect width="6" height="12" fill={color} />
        </pattern>
      )}
      {variant === "grid" && (
        <pattern id={`${id}-grid`} width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#FFFDF7" />
          <path d="M0 0H16M0 0V16" stroke={color} strokeWidth="4" fill="none" />
        </pattern>
      )}
      <polygon points={POINTS} fill={fill} stroke={stroke} strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}
