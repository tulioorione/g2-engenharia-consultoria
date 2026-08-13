import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

/**
 * Entry do vite-react-ssg. No build ele percorre as rotas e gera um HTML
 * estático por página; no browser ele hidrata esse HTML. Por isso aqui não
 * há mais createRoot(...).render() — quem monta é a lib.
 */
export const createRoot = ViteReactSSG({ routes });
