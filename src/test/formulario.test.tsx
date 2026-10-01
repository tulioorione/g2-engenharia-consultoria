import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormularioContato } from "@/components/site/FormularioContato";
import { FormularioCandidatura } from "@/components/site/FormularioCandidatura";

/**
 * O formulário é o único ponto do site onde um lead pode ser perdido em
 * silêncio. Estes testes cobrem o que quebraria sem ninguém perceber: a
 * validação deixar passar campo vazio, e a armadilha de spam sumir num
 * refactor de layout.
 */
describe("formulário de contato", () => {
  it("não envia com os campos vazios e diz o que falta", async () => {
    const user = userEvent.setup();
    render(<FormularioContato />);
    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(await screen.findByText(/diga como podemos te chamar/i)).toBeInTheDocument();
    expect(screen.getByText(/precisamos do telefone com ddd/i)).toBeInTheDocument();
    expect(screen.getByText(/confira o e-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/conte um pouco mais sobre a obra/i)).toBeInTheDocument();
  });

  it("tem os quatro campos, cada um com rótulo amarrado", () => {
    render(<FormularioContato />);
    ["Nome", "Telefone", "E-mail", "Mensagem"].forEach((rotulo) => {
      expect(screen.getByLabelText(rotulo)).toBeInTheDocument();
    });
  });

  it("mantém a armadilha de spam fora da ordem de tabulação", () => {
    render(<FormularioContato />);
    const armadilha = screen.getByLabelText(/não preencha este campo/i);
    expect(armadilha).toHaveAttribute("tabindex", "-1");
  });

  it("avisa quando o envio ainda não foi ligado, em vez de engolir a mensagem", () => {
    // Sem VITE_FORMSPREE_ID no ambiente de teste, é este o estado esperado.
    render(<FormularioContato />);
    expect(screen.getByText(/envio automático ainda não foi ligado/i)).toBeInTheDocument();
  });
});

/**
 * O formulário de candidatura tem duas regras que não são óbvias no código e
 * que um refactor desfaz sem quebrar nada visível: o link do currículo é
 * opcional mas validado quando preenchido, e o erro é amarrado ao campo por
 * aria. Sem esses dois testes, as duas somem em silêncio.
 */
describe("formulário de candidatura", () => {
  it("não envia vazio e diz o que falta, incluindo a área", async () => {
    const user = userEvent.setup();
    render(<FormularioCandidatura />);
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    expect(await screen.findByText(/diga como podemos te chamar/i)).toBeInTheDocument();
    expect(screen.getByText(/escolha a área/i)).toBeInTheDocument();
    expect(screen.getByText(/onde você já trabalhou/i)).toBeInTheDocument();
  });

  it("aceita o link do currículo vazio, porque ele é opcional", async () => {
    const user = userEvent.setup();
    render(<FormularioCandidatura />);
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    await screen.findByText(/diga como podemos te chamar/i);
    // Exigir currículo hospedado eliminaria quem trabalha no canteiro.
    expect(screen.queryByText(/cole o endereço completo/i)).not.toBeInTheDocument();
  });

  it("recusa um link de currículo que não é endereço", async () => {
    const user = userEvent.setup();
    render(<FormularioCandidatura />);
    await user.type(screen.getByLabelText(/link do currículo/i), "meu-curriculo.pdf");
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    expect(await screen.findByText(/cole o endereço completo/i)).toBeInTheDocument();
  });

  it("amarra o erro ao campo para o leitor de tela, não só para quem vê", async () => {
    const user = userEvent.setup();
    render(<FormularioCandidatura />);
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));
    await screen.findByText(/diga como podemos te chamar/i);

    const nome = screen.getByLabelText("Nome");
    expect(nome).toHaveAttribute("aria-invalid", "true");
    expect(nome).toHaveAttribute("aria-describedby", "nome-erro");
  });

  it("mantém a armadilha de spam fora da ordem de tabulação", () => {
    render(<FormularioCandidatura />);
    expect(screen.getByLabelText(/não preencha este campo/i)).toHaveAttribute("tabindex", "-1");
  });
});
