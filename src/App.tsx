import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { ClientOnly } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Providers da aplicação. Com o SSG o router deixa de morar aqui — quem o
 * cria é o vite-react-ssg —, então este arquivo passa a envolver apenas o
 * que é global. Ele é montado pelo Layout, que é a raiz das rotas.
 *
 * O QueryClientProvider saiu: estava montado desde o template, sem uma única
 * query no site inteiro. O formulário de contato vai postar direto no
 * Formspree, que é um fetch simples.
 */
// reducedMotion="user" desliga as animações de transform quando o sistema pede
// menos movimento, mantendo as de opacidade — que são seguras.
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      {children}
      {/* O toast monta portal no document; só no cliente. */}
      <ClientOnly>{() => <Sonner />}</ClientOnly>
    </TooltipProvider>
  </MotionConfig>
);
