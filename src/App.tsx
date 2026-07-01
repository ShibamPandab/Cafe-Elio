import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { IntroSplash } from "./components/ui/IntroSplash";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reservation } from "./pages/Reservation";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Events } from "./pages/Events";
import { Journal } from "./pages/Journal";
import { NotFound } from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const INTRO_KEY = "cafe-elio-intro-shown";

function App() {
  const { pathname } = useLocation();
  const [showIntro, setShowIntro] = useState(
    () => pathname === "/" && !sessionStorage.getItem(INTRO_KEY),
  );
  const [revealed, setRevealed] = useState(!showIntro);

  function handleIntroComplete() {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
    setRevealed(true);
  }

  return (
    <div className="grain-overlay min-h-screen">
      <ScrollToTop />
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}

      <motion.div
        initial={false}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navigation />
        <main id="main-content">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/events" element={<Events />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
