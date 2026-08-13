import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "./routes";

const queryClient = new QueryClient();

const AppRoutes = () => useRoutes(routes);

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* reducedMotion="user" desliga as animações de transform quando o sistema
        pede menos movimento, mantendo as de opacidade — que são seguras. */}
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* As rotas ficam em src/routes.tsx */}
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
