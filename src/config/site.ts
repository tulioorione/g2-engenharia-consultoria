/**
 * ⚠️ O domínio ainda não foi confirmado (item 16 da auditoria de conteúdo).
 * É daqui que saem canonical, og:url e o sitemap — se estiver errado, o
 * Google indexa a URL errada. Dá para sobrescrever sem mexer no código
 * definindo VITE_SITE_URL no ambiente de build.
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://g2engenharia.com.br"
).replace(/\/$/, "");
