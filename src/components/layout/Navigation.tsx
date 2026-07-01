import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinks } from "../../data/content";

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="focus-ring flex items-baseline gap-1.5 leading-none">
      <span
        className={clsx("text-3xl md:text-4xl", light ? "text-bg" : "text-primary")}
        style={{ fontFamily: "var(--font-script)" }}
      >
        Cafe
      </span>
      <span
        className={clsx("text-2xl md:text-3xl tracking-[0.06em]", light ? "text-accent" : "text-dark")}
        style={{ fontFamily: "var(--font-wordmark)" }}
      >
        Elio
      </span>
    </Link>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-dark focus:text-bg focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500",
          hidden && !drawerOpen ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <nav
          aria-label="Primary"
          className={clsx(
            "container-page flex items-center justify-between px-6 md:px-10 transition-all duration-500",
            scrolled ? "py-4" : "py-7",
          )}
        >
          <div
            className={clsx(
              "absolute inset-0 -z-10 transition-opacity duration-500",
              scrolled ? "opacity-100 bg-bg/90 backdrop-blur-md border-b hairline" : "opacity-0",
            )}
          />
          <Logo />

          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    clsx(
                      "focus-ring group relative text-sm tracking-[0.04em] text-dark/80 hover:text-dark transition-colors",
                      isActive && "text-dark",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      {isActive && <span className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/reservation"
              className="focus-ring relative inline-flex items-center px-6 py-3 text-sm tracking-[0.08em] uppercase bg-primary text-bg hover:bg-primary-dim transition-colors"
            >
              Reserve a Table
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
            className="focus-ring lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="sr-only">Open menu</span>
            <span className="block h-px w-7 bg-dark" />
            <span className="block h-px w-7 bg-dark" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col surface-dark"
          >
            <div className="flex items-center justify-between px-6 py-7">
              <Logo light />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="focus-ring text-bg text-3xl leading-none p-2"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setDrawerOpen(false)}
                    className="focus-ring block py-3 text-4xl font-serif text-bg"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-10">
              <Link
                to="/reservation"
                onClick={() => setDrawerOpen(false)}
                className="focus-ring flex items-center justify-center w-full px-6 py-4 text-sm tracking-[0.08em] uppercase bg-accent text-dark"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
