import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * O caminho em que o site é servido.
 *
 * Fica "/" por padrão, que é o certo para domínio próprio e para Netlify ou
 * Cloudflare Pages. O GitHub Pages é o caso diferente: ele serve em
 * /nome-do-repositorio/, e sem isto todo caminho de asset sai absoluto de
 * raiz (/assets/...) e dá 404 — a tela fica branca.
 *
 * Vem de variável de ambiente, e não fixo no código, justamente para que o
 * dia em que o domínio real for apontado não exija desfazer nada: só o
 * workflow do Pages define VITE_BASE.
 */
const base = process.env.VITE_BASE ?? "/";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "react-router-dom"],
  },
}));
