import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Gera o sitemap depois do build, a partir das rotas reais do site.
 *
 * Fica como script separado, e não em `public/sitemap.xml` escrito à mão,
 * porque um sitemap desatualizado é pior que nenhum: aponta o Google para
 * URLs que não existem mais. Assim ele nunca diverge das rotas.
 *
 * O domínio vem de VITE_SITE_URL, o mesmo que alimenta canonical e og:url.
 */
const SITE_URL = (process.env.VITE_SITE_URL ?? "https://g2engenharia.com.br").replace(/\/$/, "");

// Mantido em sincronia com mainNav em src/routes.tsx. A home tem prioridade
// maior; /contato é a página de conversão.
const rotas = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/sobre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos", priority: "0.9", changefreq: "monthly" },
  { path: "/atuacao", priority: "0.8", changefreq: "monthly" },
  { path: "/contato", priority: "0.7", changefreq: "yearly" },
];

const hoje = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const destino = resolve(process.cwd(), "dist/sitemap.xml");
writeFileSync(destino, xml, "utf8");
console.log(`[sitemap] ${rotas.length} rotas → ${destino} (${SITE_URL})`);
