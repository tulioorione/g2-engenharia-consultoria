import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useRoutes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "@/routes";

/**
 * Smoke test das rotas: tsc e build não pegam erro de runtime no React.
 * Aqui cada rota é realmente renderizada, então uma quebra no Layout, no
 * Outlet ou num componente aparece como teste vermelho.
 */
const renderRoute = (path: string) => {
  const Routed = () => useRoutes(routes);
  // Na aplicação real quem monta o HelmetProvider é o vite-react-ssg; aqui
  // ele precisa ser montado à mão para o <Seo> de cada página funcionar.
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routed />
      </MemoryRouter>
    </HelmetProvider>,
  );
};

describe("rotas", () => {
  it.each([
    ["/", "Transformando desafios em"],
    ["/sobre", "Engenharia"],
    ["/servicos", "Quatro frentes. Uma"],
    ["/projetos", "O que entregamos"],
    ["/contato", "Pronto para transformar seu"],
  ])("renderiza %s com o título esperado", (path, titulo) => {
    renderRoute(path);
    expect(screen.getAllByRole("heading", { level: 1 })[0]).toHaveTextContent(titulo);
  });

  it("mostra a 404 numa rota inexistente", () => {
    renderRoute("/rota-que-nao-existe");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /voltar ao início/i })).toBeInTheDocument();
  });

  it("monta header e rodapé em todas as páginas", () => {
    renderRoute("/servicos");
    expect(screen.getByRole("navigation", { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("marca o hero como prioridade alta de download (LCP)", () => {
    renderRoute("/");
    const hero = screen.getByAltText(/vista aérea de canteiro/i);
    // Em camelCase o React 18 descarta o atributo silenciosamente; este
    // teste existe para o fetchpriority não sumir sem ninguém perceber.
    expect(hero).toHaveAttribute("fetchpriority", "high");
    expect(hero).toHaveAttribute("srcset");
  });

  it("não deixa nenhum link apontando para href vazio", () => {
    renderRoute("/");
    const mortos = screen
      .getAllByRole("link")
      .filter((a) => {
        const href = a.getAttribute("href");
        return !href || href === "#";
      });
    expect(mortos).toHaveLength(0);
  });
});
