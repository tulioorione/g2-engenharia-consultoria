import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { ClientOnly } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

/**
 * Providers da aplicação. Com o SSG o router deixa de morar aqui — quem o
 * cria é o vite-react-ssg —, então este arquivo passa a envolver apenas o
 * que é global. Ele é montado pelo Layout, que é a raiz das rotas.
 */
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {/* reducedMotion="user" desliga as animações de transform quando o sistema
        pede menos movimento, mantendo as de opacidade — que são seguras. */}
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        {children}
        {/* Os toasts montam portais no document; só no cliente. */}
        <ClientOnly>
          {() => (
            <>
              <Toaster />
              <Sonner />
            </>
          )}
        </ClientOnly>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);
