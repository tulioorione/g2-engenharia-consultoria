import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Setores", href: "#setores" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const height = useTransform(scrollY, [0, 120], [88, 64]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 24));
  }, [scrollY]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.header
      style={{ height }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-silver/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-cz flex h-full items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-primary-foreground" aria-label="G2 Engenharia">
          <div className="flex h-9 w-9 items-center justify-center border border-silver/40 bg-gradient-silver text-primary font-serif text-lg font-medium">
            G2
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">G2 Engenharia</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-silver">Consultoria</span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-primary-foreground/90 hover:text-primary-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden border border-silver/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:bg-silver/10 hover:border-silver md:inline-block"
          >
            Solicitar Orçamento
          </a>
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
              <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="lg:hidden bg-primary-deep border-t border-silver/10">
          <div className="container-cz flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-primary-foreground/90 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="mt-2 border border-silver/40 px-5 py-3 text-center text-xs uppercase tracking-[0.15em] text-primary-foreground">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};
