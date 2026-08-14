import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { MenuAtuacao } from "@/components/site/MenuAtuacao";
import { mainNav } from "@/routes";
import { areasAtuacao } from "@/config/atuacao";
import logoClaro from "@/assets/g2-logo-claro.webp";
import simboloClaro from "@/assets/g2-simbolo-claro.webp";

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
        {/* O header fica sempre sobre navy — transparente por cima do hero
            escuro, ou bg-primary depois de rolar. Por isso a versão clara do
            logotipo. Em tela estreita entra só o símbolo: a assinatura
            "Engenharia e Consultoria" ficaria ilegível nesse tamanho. */}
        <Link to="/" className="flex items-center" aria-label="G2 Engenharia e Consultoria — início">
          <img
            src={logoClaro}
            alt="G2 Engenharia e Consultoria"
            width={300}
            height={138}
            className="hidden h-9 w-auto sm:block"
          />
          <img
            src={simboloClaro}
            alt="G2 Engenharia e Consultoria"
            width={123}
            height={138}
            className="h-8 w-auto sm:hidden"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {mainNav.map((item) =>
            item.to === "/atuacao" ? (
              <MenuAtuacao key={item.to} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav-link text-primary-foreground/90 hover:text-primary-foreground"
                activeClassName="text-primary-foreground after:w-full"
              >
                {item.label}
              </NavLink>
            ),
          )}
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
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  className="block py-3 text-sm text-primary-foreground/90 hover:text-accent-on-dark"
                  activeClassName="text-accent-on-dark"
                >
                  {item.label}
                </NavLink>
                {/* No celular não existe hover: as três áreas ficam listadas
                    abertas e indentadas, em vez de escondidas num painel. */}
                {item.to === "/atuacao" && (
                  <ul className="mb-2 ml-4 border-l border-silver/20 pl-4">
                    {areasAtuacao.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/atuacao/${a.slug}`}
                          className="block py-2 text-sm text-primary-foreground/60 hover:text-accent-on-dark"
                        >
                          {a.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};
