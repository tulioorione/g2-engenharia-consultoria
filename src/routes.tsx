import type { RouteObject } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import Index from "@/pages/Index";
import Sobre from "@/pages/Sobre";
import Servicos from "@/pages/Servicos";
import Projetos from "@/pages/Projetos";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

/**
 * Rotas como array de dados, e não JSX inline, porque é o formato que o
 * vite-react-ssg espera para pré-renderizar cada página em HTML estático.
 * Fazer assim agora deixa a adoção do SSG num commit pequeno depois.
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "sobre", element: <Sobre /> },
      { path: "servicos", element: <Servicos /> },
      { path: "projetos", element: <Projetos /> },
      { path: "contato", element: <Contato /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

/** Menu principal — usado pelo header e pelo rodapé, para não divergirem. */
export const mainNav = [
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", to: "/contato" },
];
