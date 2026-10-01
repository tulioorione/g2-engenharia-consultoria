import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/**
 * O anexo de currículo só existe com plano pago no Formspree, então vive
 * desligado por variável de ambiente e o resto da suíte o vê desligado.
 *
 * Este arquivo cobre o outro lado: o dia em que alguém ligar a chave, meses
 * depois de ela ter sido escrita. É o caminho que ninguém vai lembrar de
 * testar e cujo defeito não aparece na tela — um arquivo grande demais ou de
 * tipo errado é recusado pelo Formspree, não pelo navegador, e a candidatura
 * se perde depois do envio.
 *
 * A chave é lida no carregamento do módulo, por isso o import é dinâmico e vem
 * depois do stubEnv — importar no topo congelaria o valor desligado.
 */
const montar = async () => {
  const { FormularioCandidatura } = await import("@/components/site/FormularioCandidatura");
  render(<FormularioCandidatura />);
};

/** Arquivo falso com o tamanho forçado, para não alocar 26 MB num teste. */
const arquivoDe = (nome: string, tipo: string, bytes: number) => {
  const f = new File(["conteudo"], nome, { type: tipo });
  Object.defineProperty(f, "size", { value: bytes });
  return f;
};

const MB = 1024 * 1024;

describe("anexo de currículo, com o plano pago ligado", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("VITE_FORMSPREE_ANEXO", "1");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("mostra o botão de anexar e diz o limite junto do rótulo", async () => {
    await montar();
    expect(screen.getByText(/anexar currículo/i)).toBeInTheDocument();
    // O limite é parte da dica, e a dica entra no aria-describedby do campo:
    // o rótulo "Currículo" sozinho não diz que é opcional nem até quanto vai.
    expect(screen.getByText(/até 25 MB/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Currículo")).toHaveAttribute(
      "aria-describedby",
      "curriculo-dica",
    );
  });

  it("aceita um PDF dentro do limite e mostra o nome escolhido", async () => {
    const user = userEvent.setup();
    await montar();
    await user.upload(
      screen.getByLabelText("Currículo"),
      arquivoDe("curriculo.pdf", "application/pdf", 2 * MB),
    );

    expect(screen.getByText("curriculo.pdf")).toBeInTheDocument();
    // O botão muda de texto porque já existe arquivo escolhido.
    expect(screen.getByText(/trocar arquivo/i)).toBeInTheDocument();
  });

  it("recusa arquivo acima dos 25 MB que o Formspree aceita", async () => {
    const user = userEvent.setup();
    await montar();
    await user.upload(
      screen.getByLabelText("Currículo"),
      arquivoDe("pesado.pdf", "application/pdf", 26 * MB),
    );
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    expect(await screen.findByText(/passa de 25 MB/i)).toBeInTheDocument();
  });

  it("recusa um tipo de arquivo que não é currículo", async () => {
    const user = userEvent.setup();
    await montar();
    await user.upload(
      screen.getByLabelText("Currículo"),
      arquivoDe("planilha.csv", "text/csv", 1 * MB),
    );
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    expect(await screen.findByText(/pdf, doc, docx, jpg ou png/i)).toBeInTheDocument();
  });

  it("deixa remover o arquivo escolhido", async () => {
    const user = userEvent.setup();
    await montar();
    await user.upload(
      screen.getByLabelText("Currículo"),
      arquivoDe("curriculo.pdf", "application/pdf", 1 * MB),
    );
    await user.click(screen.getByRole("button", { name: /remover o arquivo curriculo\.pdf/i }));

    expect(screen.queryByText("curriculo.pdf")).not.toBeInTheDocument();
    expect(screen.getByText(/anexar currículo/i)).toBeInTheDocument();
  });

  it("continua enviável sem anexo, porque o currículo é opcional", async () => {
    const user = userEvent.setup();
    await montar();
    await user.click(screen.getByRole("button", { name: /enviar candidatura/i }));

    // Os quatro campos de texto reclamam; o currículo, não.
    await screen.findByText(/diga como podemos te chamar/i);
    // Casar por "envie em" e não pela lista de extensões: a lista também
    // aparece na dica do campo, que está sempre na tela.
    expect(screen.queryByText(/passa de 25 MB/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^envie em/i)).not.toBeInTheDocument();
  });
});
