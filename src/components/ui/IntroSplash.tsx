import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
}

const AUTO_DISMISS_MS = 4200;

/**
 * Video-only landing moment — no nav, no logo, no copy.
 * Swap the placeholder <div> below for a real <video autoPlay muted playsInline> once footage is ready.
 */
export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setExiting(true), AUTO_DISMISS_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [exiting, onComplete]);

  function skip() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setExiting(true);
  }

  return (
    <motion.div
      role="presentation"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] overflow-hidden bg-dark"
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      onClick={skip}
    >
      {/* Placeholder for the real ambience video — replace with:
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/media/elio-intro.mp4" type="video/mp4" />
          </video> */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: exiting ? 1.14 : 1 }}
        transition={{ duration: AUTO_DISMISS_MS / 1000 + 0.9, ease: "easeOut" }}
        className="grain-overlay h-full w-full plate-dark"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-8"
      >
        <button
          type="button"
          onClick={skip}
          className="focus-ring text-xs tracking-[0.2em] uppercase text-bg/50 hover:text-bg transition-colors"
        >
          Skip
        </button>
      </motion.div>
    </motion.div>
  );
}
