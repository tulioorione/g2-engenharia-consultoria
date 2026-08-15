import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormularioContato } from "@/components/site/FormularioContato";

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
