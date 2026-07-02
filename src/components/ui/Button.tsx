import { Link } from "react-router-dom";
import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "outline-light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "focus-ring inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-[0.08em] uppercase transition-colors duration-300";

const variants = {
  primary: "bg-primary text-bg hover:bg-primary-dim",
  outline: "border border-dark text-dark hover:bg-dark hover:text-bg",
  "outline-light": "border border-bg/40 text-bg hover:bg-bg hover:text-dark",
  ghost: "text-dark hover:text-primary",
};

export function Button({ children, to, href, onClick, variant = "primary", className, type = "button", disabled = false }: ButtonProps) {
  const classes = clsx(base, variants[variant], disabled && "opacity-40 cursor-not-allowed pointer-events-none", className);

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} tabIndex={disabled ? -1 : undefined}>
        {children}
      </Link>
    );
  }
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  );
}
