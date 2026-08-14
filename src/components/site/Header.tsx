import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { mainNav } from "@/routes";

export const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const height = useTransform(scrollY, [0, 120], [88, 64]);
  const { pathname } = useLocation();

  // Fecha o menu mobile ao navegar, senão ele fica aberto por cima da página nova.
  useEffect(() => setOpen(false), [pathname]);

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
        <Link to="/" className="flex items-center gap-2 text-primary-foreground" aria-label="G2 Engenharia — início">
          <div className="flex h-9 w-9 items-center justify-center border border-silver/40 bg-gradient-silver text-primary font-display text-lg font-medium">
            G2
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">G2 Engenharia</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-silver">Consultoria</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="nav-link text-primary-foreground/90 hover:text-primary-foreground"
              activeClassName="text-primary-foreground after:w-full"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Antes este CTA era `hidden md:inline-block`: no celular — de onde
              vem a maior parte do tráfego — o botão principal de conversão só
              existia dentro do hambúrguer. Agora aparece sempre, encurtado nas
              telas estreitas para caber ao lado do menu. */}
          <Link
            to="/contato"
            className="border border-silver/40 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-all duration-500 hover:bg-silver/10 hover:border-silver sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.15em]"
          >
            <span className="sm:hidden">Orçamento</span>
            <span className="hidden sm:inline">Solicitar Orçamento</span>
          </Link>
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
          <nav className="container-cz flex flex-col gap-1 py-4" aria-label="Navegação principal">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="py-3 text-sm text-primary-foreground/90 hover:text-accent-on-dark"
                activeClassName="text-accent-on-dark"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};
