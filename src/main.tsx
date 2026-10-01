import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

/**
 * Entry do vite-react-ssg. No build ele percorre as rotas e gera um HTML
 * estático por página; no browser ele hidrata esse HTML. Por isso aqui não
 * há mais createRoot(...).render() — quem monta é a lib.
 */
/**
 * O basename acompanha o base do Vite. Sem ele, num host que serve em
 * subpasta (GitHub Pages), o Vite acerta os assets mas o router continua
 * achando que está na raiz: clicar em "Sobre" levaria a /sobre em vez de
 * /g2-engenharia-consultoria/sobre. Em domínio próprio BASE_URL é "/" e
 * isto não muda nada.
 */
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
