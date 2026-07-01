import { Reveal } from "./Reveal";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            "text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance",
            light ? "text-bg" : "text-dark",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "mt-5 text-lg font-light",
              light ? "text-bg/70" : "text-dark/60",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
