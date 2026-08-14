# G2 Engenharia e Consultoria

Site institucional da G2 — construção civil, serviços estruturais, manutenção e
gerenciamento de obras para clientes residenciais, comerciais e condomínios.

## Rodando

```sh
npm install
npm run dev        # http://localhost:8080
```

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (CSR, sem pré-renderização) |
| `npm run build` | Gera um HTML estático por rota e o `sitemap.xml` |
| `npm run preview` | Serve o build, do jeito que vai para produção |
| `npm run lint` | ESLint |
| `npm test` | Vitest — smoke test das rotas |

## Stack

React 18 · TypeScript · Vite 5 · Tailwind · framer-motion · react-router 6 ·
vite-react-ssg

O build é **pré-renderizado**: cada rota vira um `.html` com o conteúdo e a meta
tag já dentro. Isso existe porque WhatsApp e LinkedIn não executam JavaScript —
sem isso, todo link compartilhado mostraria o título da home.

## Estrutura

```
src/
  config/          conteúdo do site (serviços, atuação, equipe, contato, FAQ)
  components/site/ seções e layout
  components/ui/   primitivos shadcn — só os 12 em uso
  pages/           uma por rota
  routes.tsx       rotas como array de dados (formato que o SSG espera)
```

**O conteúdo mora em `src/config/`, não nos componentes.** Para trocar um
telefone ou um serviço, mexa lá — o rodapé, as páginas e o JSON-LD leem da
mesma fonte.

## Rotas

`/` · `/sobre` · `/servicos` · `/atuacao` · `/contato`

## ⚠️ Antes de publicar

O site ainda tem conteúdo de protótipo. Tudo que é invenção está marcado:

```sh
grep -rn "@ficticio" src/
```

O `robots.txt` está com `Disallow: /` **de propósito**, bloqueando indexação.
Só libere depois de zerar os `@ficticio`. Ver `src/config/PROTOTIPO.md`.

## Configuração de ambiente

| Variável | Para quê |
|---|---|
| `VITE_SITE_URL` | Domínio usado no canonical, no `og:url` e no sitemap |
