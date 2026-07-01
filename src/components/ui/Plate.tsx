import clsx from "clsx";

interface PlateProps {
  label?: string;
  dark?: boolean;
  className?: string;
  ratio?: string;
}

/**
 * Elegant placeholder for real photography — a toned gradient "plate"
 * with a caption, sized to the real photo it will be swapped for.
 */
export function Plate({ label, dark = false, className, ratio = "aspect-4/5" }: PlateProps) {
  return (
    <div
      className={clsx(
        "grain-overlay relative flex items-end overflow-hidden",
        ratio,
        dark ? "plate-dark" : "plate",
        className,
      )}
    >
      {label && (
        <span
          className={clsx(
            "relative z-10 m-6 text-xs uppercase tracking-[0.2em]",
            dark || true ? "text-bg/80" : "text-dark/70",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
