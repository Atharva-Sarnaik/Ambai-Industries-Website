import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  hindiTitle?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  hindiTitle,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className={`font-body text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${
          isDark ? "text-[#EDE7D9]/70" : "text-[#8B1A1A]/80"
        }`}>
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-display font-bold leading-tight mb-4 ${
          isDark ? "text-white" : "text-[#0D4B34]"
        }`}
        style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
      >
        {title}
        {hindiTitle && (
          <span
            className={`block text-base sm:text-xl mt-1 font-body font-normal opacity-60 ${
              isDark ? "text-[#EDE7D9]" : "text-[#4A4A4A]"
            }`}
          >
            {hindiTitle}
          </span>
        )}
      </h2>

      {/* Red divider rule — BBF style */}
      <span
        className={`block w-16 h-0.5 mb-5 ${
          isCenter ? "mx-auto" : ""
        } ${isDark ? "bg-white/40" : "bg-[#8B1A1A]"}`}
      />

      {description && (
        <p
          className={`font-body text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#D4C9B8]" : "text-[#4A4A4A]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
