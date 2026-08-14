import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { socios } from "@/config/contato";

/**
 * Neste mercado o WhatsApp é o canal — ninguém preenche formulário para pedir
 * orçamento de reforma. Como são dois sócios, o botão abre a escolha em vez de
 * chutar um deles.
 */
export const WhatsAppFlutuante = () => {
  const [aberto, setAberto] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    const onClickFora = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setAberto(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickFora);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickFora);
    };
  }, [aberto]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {aberto && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            aria-label="Sócios disponíveis no WhatsApp"
            className="flex flex-col items-end gap-2"
          >
            {socios.map((s) => (
              <li key={s.nome}>
                <a
                  href={s.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 border border-silver/30 bg-primary px-4 py-3 shadow-elevated transition-colors duration-300 hover:bg-primary-steel"
                >
                  <span className="text-right leading-tight">
                    <span className="block text-sm font-medium text-primary-foreground">
                      {s.nome.split(" ")[0]}
                    </span>
                    <span className="block text-xs text-silver">{s.telefoneExibido}</span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-label={aberto ? "Fechar contatos de WhatsApp" : "Falar no WhatsApp com um dos sócios"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-colors duration-300 hover:bg-primary-steel"
      >
        {aberto ? (
          <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>
    </div>
  );
};
