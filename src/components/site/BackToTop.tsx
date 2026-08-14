import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * As páginas ficaram longas — /servicos tem o scrollytelling de 300vh e /sobre
 * empilha cinco seções. Aparece só depois de duas telas de rolagem, para não
 * ocupar espaço em página curta.
 */
export const BackToTop = () => {
  const [visivel, setVisivel] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visivel) return null;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
      }
      aria-label="Voltar ao topo da página"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center border border-silver/40 bg-primary/90 text-primary-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-primary-steel"
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
};
