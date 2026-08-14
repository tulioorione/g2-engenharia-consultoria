import type { RouteObject } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import Index from "@/pages/Index";
import Sobre from "@/pages/Sobre";
import Servicos from "@/pages/Servicos";
import AtuacaoPage from "@/pages/Atuacao";
import { AtuacaoArea } from "@/pages/AtuacaoArea";
import Contato from "@/pages/Contato";
import { areasAtuacao } from "@/config/atuacao";
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
      // /projetos saiu: os três cases eram inventados e a apresentação da G2
      // não traz nenhum projeto entregue. Volta quando houver obra real para
      // mostrar. No lugar entra /atuacao, que é conteúdo verdadeiro.
      { path: "atuacao", element: <AtuacaoPage /> },
      // Uma rota por área, geradas do config e não por parâmetro dinâmico:
      // assim o SSG pré-renderiza as três em HTML estático, como as demais.
      ...areasAtuacao.map((a) => ({
        path: `atuacao/${a.slug}`,
        element: <AtuacaoArea slug={a.slug} />,
      })),
      { path: "contato", element: <Contato /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

/** Menu principal — usado pelo header e pelo rodapé, para não divergirem. */
export const mainNav = [
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Atuação", to: "/atuacao" },
  { label: "Contato", to: "/contato" },
];
