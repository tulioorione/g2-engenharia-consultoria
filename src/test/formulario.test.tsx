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
 * Os quatro campos de texto, e o anexo que NÃO deve aparecer enquanto o plano
 * do Formspree for gratuito. Esse último é o teste que mais importa: o campo
 * ligado na conta errada faz o candidato escolher o arquivo, enviar e a
 * candidatura ser recusada — perda silenciosa, que é justamente o que o resto
 * do formulário foi feito para evitar.
 */
describe("formulário de candidatura", () => {
  it("não envia vazio e diz o que falta, incluindo a área", async () => {
    const user = userEvent.setup();
    render(<FormularioCandidatura />);
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    expect(await screen.findByText(/diga como podemos te chamar/i)).toBeInTheDocument();
    expect(screen.getByText(/precisamos do telefone com ddd/i)).toBeInTheDocument();
    expect(screen.getByText(/confira o e-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/escolha a área/i)).toBeInTheDocument();
  });

  it("pede só os quatro campos, cada um com rótulo amarrado", () => {
    render(<FormularioCandidatura />);
    ["Nome", "Telefone", "E-mail", "Área de interesse"].forEach((rotulo) => {
      expect(screen.getByLabelText(rotulo)).toBeInTheDocument();
    });
  });

  it("não mostra o anexo enquanto o plano pago do Formspree não estiver ligado", () => {
    // Sem VITE_FORMSPREE_ANEXO no ambiente de teste, é este o estado esperado.
    render(<FormularioCandidatura />);
    expect(screen.queryByLabelText("Currículo")).not.toBeInTheDocument();
    expect(screen.queryByText(/anexar currículo/i)).not.toBeInTheDocument();
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
