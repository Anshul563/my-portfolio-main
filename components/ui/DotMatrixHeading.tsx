interface DotMatrixHeadingProps {
  text: string;
  className?: string;
  dotColor?: string;
  dotGap?: string;
}

/**
 * Dot-matrix style display heading. Renders each character spaced apart with
 * a monospace font, with a subtle dotted underline treatment to evoke a
 * dot-matrix printer / Nothing-style display. Lightweight (no canvas).
 */
export default function DotMatrixHeading({
  text,
  className = "",
  dotColor = "rgba(255,255,255,0.9)",
  dotGap = "0.06em",
}: DotMatrixHeadingProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-heading), sans-serif",
        letterSpacing: dotGap,
        fontWeight: 700,
      }}
      aria-label={text}
    >
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} aria-hidden="true">
            {"\u00A0"}
          </span>
        ) : (
          <span
            key={i}
            aria-hidden="true"
            style={{
              color: dotColor,
              textShadow: `0 0 ${i % 3 === 0 ? 12 : 6}px rgba(255,255,255,0.25)`,
            }}
          >
            {char}
          </span>
        ),
      )}
    </span>
  );
}
