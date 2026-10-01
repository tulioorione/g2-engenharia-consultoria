import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    ["/servicos", "Execução e gestão de obras"],
    ["/atuacao", "Residencial, comercial e condomínios"],
    ["/atuacao/residencial", "Reforma de apartamento"],
    ["/atuacao/comercial", "Reforma de loja"],
    ["/atuacao/condominios", "Manutenção predial"],
    ["/contato", "Vamos tirar seu projeto"],
    ["/trabalhe-conosco", "Obra boa se faz com"],
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
    const hero = screen.getByAltText(/equipe de engenharia conferindo medições/i);
    // Em camelCase o React 18 descarta o atributo silenciosamente; este
    // teste existe para o fetchpriority não sumir sem ninguém perceber.
    expect(hero).toHaveAttribute("fetchpriority", "high");
    expect(hero).toHaveAttribute("srcset");
  });

  it("oferece os dois sócios no WhatsApp flutuante", async () => {
    const user = userEvent.setup();
    renderRoute("/");
    const botao = await screen.findByRole("button", { name: /falar no whatsapp/i });
    await user.click(botao);
    // Escopado na lista do widget: o CTA final da home também tem links wa.me.
    const lista = screen.getByRole("list", { name: /sócios disponíveis no whatsapp/i });
    const links = within(lista).getAllByRole("link");
    expect(links).toHaveLength(2);
    links.forEach((a) => expect(a.getAttribute("href")).toMatch(/^https:\/\/wa\.me\/55\d{10,}$/));
  });

  it("o submenu de atuação leva a três páginas que existem de verdade", () => {
    renderRoute("/");
    const nav = screen.getAllByRole("navigation", { name: /navegação principal/i })[0];
    const destinos = within(nav)
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"))
      .filter((h): h is string => !!h?.startsWith("/atuacao/"));
    expect(destinos).toHaveLength(3);
    // Cada destino do menu tem de ser uma rota registrada — menu com submenu
    // promete subpágina, e prometer sem entregar foi o erro da versão anterior.
    const registradas = routes[0].children?.map((r) => `/${r.path}`) ?? [];
    destinos.forEach((d) => expect(registradas).toContain(d));
  });

  it("filtra as perguntas do FAQ pela área da página", () => {
    renderRoute("/atuacao/comercial");
    // A pergunta do síndico é de condomínios; não deve aparecer no comercial.
    expect(screen.queryByText(/sou síndico/i)).not.toBeInTheDocument();
    renderRoute("/atuacao/condominios");
    expect(screen.getAllByText(/sou síndico/i).length).toBeGreaterThan(0);
  });

  /**
   * A decisão de deixar /trabalhe-conosco fora do header é deliberada: aquele
   * menu é o caminho de conversão do cliente. É o tipo de decisão que se
   * desfaz sem ninguém perceber, então fica travada aqui.
   */
  it("expõe /trabalhe-conosco no rodapé e não no menu principal", () => {
    renderRoute("/");

    const rodape = screen.getByRole("contentinfo");
    expect(
      within(rodape).getByRole("link", { name: /trabalhe conosco/i }),
    ).toHaveAttribute("href", "/trabalhe-conosco");

    screen.getAllByRole("navigation", { name: /navegação principal/i }).forEach((nav) => {
      expect(
        within(nav).queryByRole("link", { name: /trabalhe conosco/i }),
      ).not.toBeInTheDocument();
    });
  });

  it("dá trilha de navegação à página que fica fora do menu principal", () => {
    renderRoute("/trabalhe-conosco");
    const trilha = screen.getByRole("navigation", { name: /trilha de navegação/i });
    expect(within(trilha).getByText("Trabalhe conosco")).toBeInTheDocument();
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
