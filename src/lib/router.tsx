import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

interface RouterCtx {
  path: string;
  navigate: (to: string) => void;
}

const Ctx = createContext<RouterCtx>({ path: "/", navigate: () => {} });

const read = () => {
  const p = window.location.pathname;
  return p === "" ? "/" : p.replace(/\/+$/, "") || "/";
};

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(read);

  const navigate = useCallback((to: string) => {
    const [toPath, hash] = to.split("#");
    const clean = (toPath || "/").replace(/\/+$/, "") || "/";
    if (clean !== read()) {
      window.history.pushState({}, "", clean);
      setPath(clean);
      if (hash) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 750);
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    } else if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onPop = () => {
      setPath(read());
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>;
}

export const useRouter = () => useContext(Ctx);

export function Link({
  to,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { navigate } = useRouter();
  const href = to.startsWith("#") ? `${read()}${to}` : to;
  const handle = (e: MouseEvent) => {
    if (to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:")) return;
    e.preventDefault();
    onClick?.();
    navigate(to);
  };
  return (
    <a href={href} onClick={handle} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
