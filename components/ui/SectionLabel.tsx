interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
  align?: "left" | "right";
}

/**
 * Small editorial section label, e.g. "01 — ABOUT ME".
 * Uppercase monospace technical typography.
 */
export default function SectionLabel({
  index,
  label,
  className = "",
  align = "left",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "right" ? "justify-end" : "justify-start"} ${className}`}
    >
      <span className="font-mono text-xs tracking-[0.3em] text-[#666]">
        {index}
      </span>
      <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" aria-hidden="true" />
      <span className="text-xs uppercase tracking-[0.3em] text-[#A0A0A0]">
        {label}
      </span>
    </div>
  );
}
