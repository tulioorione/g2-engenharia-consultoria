import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppProviders } from "@/App";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { DadosEstruturados } from "@/components/site/DadosEstruturados";

/** Sem isto, trocar de rota mantém a posição do scroll e a página nova abre no meio. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" para não animar a rolagem a cada navegação — o smooth do CSS
    // é para as âncoras dentro da mesma página, não para troca de rota.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export const Layout = () => {
  return (
    <AppProviders>
      <div className="min-h-screen bg-background">
        <DadosEstruturados />
        <ScrollToTop />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary-foreground focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-primary"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </AppProviders>
  );
};
