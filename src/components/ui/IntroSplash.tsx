import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
}

// Safety net in case the video fails to load or "ended" never fires.
const FALLBACK_DISMISS_MS = 15000;

/**
 * Video-only landing moment — no nav, no logo, no copy.
 * Dismisses when the video finishes playing (or after the fallback timeout).
 */
export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [exiting, setExiting] = useState(false);
  const [muted, setMuted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setExiting(true), FALLBACK_DISMISS_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Try with sound first; browsers that block unmuted autoplay reject the
    // promise, so fall back to muted playback and let the visitor unmute.
    video.play().catch(() => {
      setMuted(true);
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  function toggleSound(e: MouseEvent) {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  }

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
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: exiting ? 1.1 : 1 }}
        transition={{ duration: FALLBACK_DISMISS_MS / 1000, ease: "easeOut" }}
        className="grain-overlay h-full w-full"
      >
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          playsInline
          onEnded={skip}
          className="h-full w-full object-cover"
        >
          <source src="/media/elio-intro.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-8"
      >
        <button
          type="button"
          onClick={toggleSound}
          className="focus-ring text-xs tracking-[0.2em] uppercase text-bg/50 hover:text-bg transition-colors"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </motion.div>

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
