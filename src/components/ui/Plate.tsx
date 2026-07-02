import clsx from "clsx";

interface PlateProps {
  label?: string;
  dark?: boolean;
  className?: string;
  ratio?: string;
  /** Path to a real photo (e.g. "/images/hero.jpg"). Renders instead of the gradient placeholder. */
  src?: string;
  /** Alt text — required whenever src is set, ignored otherwise. */
  alt?: string;
  /** object-position keyword, for cropping emphasis when reusing one photo for two spots (e.g. "left", "top"). */
  focus?: string;
}

/**
 * Elegant placeholder for real photography — a toned gradient "plate"
 * with a caption, sized to the real photo it will be swapped for.
 * Pass `src` (+ `alt`) once the real image is available to render it directly.
 */
export function Plate({ label, dark = false, className, ratio = "aspect-4/5", src, alt, focus }: PlateProps) {
  return (
    <div
      className={clsx(
        "grain-overlay relative flex items-end overflow-hidden",
        ratio,
        !src && (dark ? "plate-dark" : "plate"),
        className,
      )}
    >
      {src && (
        <img
          src={src}
          alt={alt ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      )}
      {label && !src && (
        <span className="relative z-10 m-6 text-xs uppercase tracking-[0.2em] text-bg/80">
          {label}
        </span>
      )}
    </div>
  );
}
