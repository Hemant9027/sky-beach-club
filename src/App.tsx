import { useEffect, useState, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { RouterProvider, useRouter, Link } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EASE } from "./components/motion";
import Home from "./pages/Home";
import Stay from "./pages/Stay";
import Experience from "./pages/Experience";
import Dine from "./pages/Dine";
import Weddings from "./pages/Weddings";
import Eleuthera from "./pages/Eleuthera";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reserve from "./pages/Reserve";
import Contact from "./pages/Contact";

const ROUTES: Record<string, { el: () => JSX.Element; title: string }> = {
  "/": { el: Home, title: "Sky Beach Club — Eleuthera, The Bahamas | Oceanfront Villas & Bungalows" },
  "/stay": { el: Stay, title: "Accommodations & Rates — Sky Beach Club, Eleuthera" },
  "/experience": { el: Experience, title: "Amenities & Adventure — Sky Beach Club, Eleuthera" },
  "/dine": { el: Dine, title: "Pascal's Oceanfront Restaurant & Bar — Sky Beach Club" },
  "/weddings": { el: Weddings, title: "Weddings & Events — Sky Beach Club, Eleuthera" },
  "/eleuthera": { el: Eleuthera, title: "Discover Eleuthera & Getting Here — Sky Beach Club" },
  "/about": { el: About, title: "About & Journal — Sky Beach Club, Eleuthera" },
  "/gallery": { el: Gallery, title: "Photo Gallery — Sky Beach Club, Eleuthera" },
  "/reserve": { el: Reserve, title: "Reservations — Sky Beach Club, Eleuthera" },
  "/contact": { el: Contact, title: "Contact — Sky Beach Club, Eleuthera" },
};

/* Sticky mobile reserve bar */
function StickyReserve() {
  const { path } = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (path === "/reserve") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-x-4 bottom-4 z-30 xl:hidden"
        >
          <Link
            to="/reserve"
            className="btn btn-coral w-full py-4 shadow-[0_18px_40px_-12px_rgba(27,34,35,0.55)]"
          >
            <CalendarCheck size={15} strokeWidth={1.5} /> Reserve Your Stay
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Intro veil */
function Intro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-abyss"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-center"
          >
            <p className="display-2 text-3xl uppercase tracking-[0.1em] text-paper">Sky Beach Club</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="eyebrow mt-3 text-paper/55"
            >
              Eleuthera · The Bahamas
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Shell() {
  const { path } = useRouter();
  const route = ROUTES[path] ?? ROUTES["/"];
  const Page = route.el;

  useEffect(() => {
    document.title = route.title;
  }, [route]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={path}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <Page />
          <Footer />
        </motion.main>
      </AnimatePresence>
      <StickyReserve />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Intro />
      <Shell />
    </RouterProvider>
  );
}
