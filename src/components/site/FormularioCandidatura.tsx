import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Paperclip, X } from "lucide-react";
import { socios } from "@/config/contato";
import {
  anexoHabilitado,
  anexoLimiteMB,
  formularioConfigurado,
  formularioEndpoint,
} from "@/config/formulario";
import { areasDeInteresse } from "@/config/trabalheConosco";

/**
 * Candidatura espontânea. Quatro campos e um anexo opcional.
 *
 * Posta no MESMO endpoint do Formspree que o formulário de contato, mudando só
 * o `_subject` — candidatura e orçamento chegam na mesma caixa, separados pelo
 * assunto. Endpoint novo seria configuração a mais para manter, e a G2 tem dois
 * sócios, não um RH.
 *
 * Envia como multipart/form-data, e não como JSON igual ao de contato: JSON não
 * transporta arquivo, e é o Formspree que exige multipart para anexo. Vale para
 * os campos de texto também, então é um caminho de código só — e nada muda no
 * dia que o anexo for ligado.
 */
const TIPOS_ACEITOS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

const LIMITE_BYTES = anexoLimiteMB * 1024 * 1024;

/**
 * O currículo é validado por `any` + refine, e não por `z.instanceof(FileList)`:
 * este módulo é avaliado também no Node, durante a pré-renderização do SSG, e
 * lá `FileList` não existe — referenciá-lo no escopo do módulo quebraria o
 * build. Os refines verificam por formato, que funciona nos dois ambientes.
 */
const esquema = z.object({
  nome: z.string().trim().min(2, "Diga como podemos te chamar."),
  telefone: z.string().trim().min(10, "Precisamos do telefone com DDD."),
  email: z.string().trim().email("Confira o e-mail — parece estar incompleto."),
  area: z.string().min(1, "Escolha a área que mais combina com sua experiência."),
  curriculo: z
    .any()
    .optional()
    .refine(
      (f) => !f?.length || f[0].size <= LIMITE_BYTES,
      `O arquivo passa de ${anexoLimiteMB} MB. Envie uma versão mais leve.`,
    )
    .refine(
      (f) => !f?.length || TIPOS_ACEITOS.includes(f[0].type),
      "Envie em PDF, DOC, DOCX, JPG ou PNG.",
    ),
  // Armadilha de spam: fica escondida, então só robô preenche.
  siteWeb: z.string().max(0),
});

type Dados = z.infer<typeof esquema>;
type Estado = "parado" | "enviando" | "enviado" | "erro";

const classeCampo =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-accent";

export const FormularioCandidatura = () => {
  const [estado, setEstado] = useState<Estado>("parado");
  // Nome do arquivo escolhido. O <input type="file"> nativo mostra isso sozinho,
  // mas de um jeito que não dá para estilizar — então ele fica escondido e quem
  // aparece é o botão abaixo.
  const [arquivo, setArquivo] = useState<File | null>(null);
  const campoArquivo = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm<Dados>({
    resolver: zodResolver(esquema),
    defaultValues: { siteWeb: "", area: "" },
  });

  const registroArquivo = register("curriculo");

  const limparArquivo = () => {
    resetField("curriculo");
    setArquivo(null);
    if (campoArquivo.current) campoArquivo.current.value = "";
  };

  const enviar = async (dados: Dados) => {
    if (dados.siteWeb) return; // robô
    if (!formularioConfigurado) {
      setEstado("erro");
      return;
    }
    setEstado("enviando");
    try {
      const corpo = new FormData();
      corpo.append("nome", dados.nome);
      corpo.append("telefone", dados.telefone);
      corpo.append("email", dados.email);
      corpo.append("area", dados.area);
      // Assunto diferente do contato: é o que separa candidatura de orçamento
      // na caixa de entrada dos sócios.
      corpo.append("_subject", `Site G2 — candidatura de ${dados.nome}`);

      const escolhido: File | undefined = dados.curriculo?.[0];
      if (anexoHabilitado && escolhido) corpo.append("curriculo", escolhido);

      const resposta = await fetch(formularioEndpoint, {
        method: "POST",
        // Sem Content-Type de propósito: quem o define é o navegador, que
        // precisa anexar o boundary do multipart. Declarar à mão quebra o
        // envio do arquivo.
        headers: { Accept: "application/json" },
        body: corpo,
      });
      if (!resposta.ok) throw new Error(String(resposta.status));
      setEstado("enviado");
      reset();
      setArquivo(null);
    } catch {
      setEstado("erro");
    }
  };

  if (estado === "enviado") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-border bg-secondary p-10"
        role="status"
      >
        <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.25} aria-hidden="true" />
        <h2 className="mt-6 text-2xl text-primary">Recebemos sua candidatura.</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Seu contato entra no nosso banco. Procuramos você quando houver uma frente que combine
          com sua experiência.
        </p>
        <button
          type="button"
          onClick={() => setEstado("parado")}
          className="mt-8 border-b border-primary pb-1 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors hover:border-accent hover:text-accent"
        >
          Enviar outra candidatura
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(enviar)} noValidate className="flex flex-col gap-5">
      {!formularioConfigurado && (
        <p className="flex gap-3 border border-border bg-secondary p-4 text-sm text-muted-foreground">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span>
            O envio automático ainda não foi ligado. Enquanto isso, fale direto pelo WhatsApp com
            um dos sócios — os números estão no rodapé.
          </span>
        </p>
      )}

      <Campo id="nome" rotulo="Nome" erro={errors.nome?.message}>
        {(aria) => (
          <input
            id="nome"
            type="text"
            autoComplete="name"
            placeholder="Digite aqui..."
            className={classeCampo}
            {...aria}
            {...register("nome")}
          />
        )}
      </Campo>

      <Campo id="telefone" rotulo="Telefone" erro={errors.telefone?.message}>
        {(aria) => (
          <input
            id="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Digite aqui..."
            className={classeCampo}
            {...aria}
            {...register("telefone")}
          />
        )}
      </Campo>

      <Campo id="email" rotulo="E-mail" erro={errors.email?.message}>
        {(aria) => (
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Digite aqui..."
            className={classeCampo}
            {...aria}
            {...register("email")}
          />
        )}
      </Campo>

      {/* <select> nativo, e não o Select do shadcn: o do shadcn traria o
          @radix-ui/react-select como dependência nova para resolver um campo
          de três opções — e no celular o seletor nativo do sistema é melhor
          que qualquer lista customizada. */}
      <Campo id="area" rotulo="Área de interesse" erro={errors.area?.message}>
        {(aria) => (
          <select id="area" className={classeCampo} {...aria} {...register("area")}>
            <option value="">Selecione...</option>
            {areasDeInteresse.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        )}
      </Campo>

      {/* Só existe com plano pago no Formspree. Ver config/formulario.ts: com a
          conta gratuita o envio com anexo é recusado, então é melhor o campo
          não existir do que existir e perder a candidatura. */}
      {anexoHabilitado && (
        <Campo
          id="curriculo"
          rotulo="Currículo"
          erro={errors.curriculo?.message as string | undefined}
          dica={`Opcional — PDF, DOC, DOCX, JPG ou PNG, até ${anexoLimiteMB} MB.`}
        >
          {(aria) => (
            <>
              {/* O input nativo fica escondido porque não dá para estilizar o
                  botão "Escolher arquivo" do navegador. O <label> abaixo é o
                  que aparece, e por ser label ele já abre o seletor no clique
                  e no Enter, sem onClick e sem perder o foco por teclado. */}
              <input
                id="curriculo"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="sr-only"
                {...aria}
                {...registroArquivo}
                ref={(el) => {
                  registroArquivo.ref(el);
                  campoArquivo.current = el;
                }}
                onChange={(e) => {
                  registroArquivo.onChange(e);
                  setArquivo(e.target.files?.[0] ?? null);
                }}
              />
              <div className="flex flex-wrap items-center gap-3">
                <label
                  htmlFor="curriculo"
                  className="inline-flex cursor-pointer items-center gap-2 border border-input px-5 py-3 text-sm text-primary transition-colors hover:border-accent hover:text-accent focus-within:border-accent"
                >
                  <Paperclip className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {arquivo ? "Trocar arquivo" : "Anexar currículo"}
                </label>

                {arquivo && (
                  <span className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                    <span className="truncate">{arquivo.name}</span>
                    <button
                      type="button"
                      onClick={limparArquivo}
                      className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                      aria-label={`Remover o arquivo ${arquivo.name}`}
                    >
                      <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </span>
                )}
              </div>
            </>
          )}
        </Campo>
      )}

      {/* Armadilha de spam. Fora da tela e fora da ordem de tabulação. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="siteWeb-candidatura">Não preencha este campo</label>
        <input
          id="siteWeb-candidatura"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("siteWeb")}
        />
      </div>

      {estado === "erro" && (
        <p
          role="alert"
          className="flex gap-3 border border-destructive/40 bg-destructive/5 p-4 text-sm text-foreground"
        >
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span>
            Não conseguimos enviar agora. Chame no WhatsApp:{" "}
            {socios.map((s, i) => (
              <span key={s.nome}>
                {i > 0 && " ou "}
                <a
                  href={s.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  {s.telefoneExibido}
                </a>
              </span>
            ))}
            .
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-2 inline-flex items-center justify-center gap-3 bg-primary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:bg-primary-steel disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar candidatura"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Seus dados ficam só com a G2, usados para avaliar sua candidatura. Não repassamos a
        ninguém.
      </p>
    </form>
  );
};

/**
 * Rótulo, campo e erro amarrados por id.
 *
 * O campo chega como função e recebe os atributos de acessibilidade prontos,
 * em vez de ser só `children`: assim é impossível montar um campo e esquecer
 * o `aria-invalid` / `aria-describedby`. Sem eles, quem usa leitor de tela
 * pousa no campo errado e não ouve o motivo — a mensagem fica na tela para
 * quem vê, e no vazio para quem não vê.
 */
const Campo = ({
  id,
  rotulo,
  erro,
  dica,
  children,
}: {
  id: string;
  rotulo: string;
  erro?: string;
  dica?: string;
  children: (aria: {
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
  }) => React.ReactNode;
}) => {
  const idErro = `${id}-erro`;
  const idDica = `${id}-dica`;
  // A dica também entra no describedby: ela explica o que o campo espera, e
  // ler o rótulo sozinho ("Currículo") não diz que é opcional nem o limite.
  const descrito = [erro && idErro, dica && idDica].filter(Boolean).join(" ");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {rotulo}
      </label>
      {dica && (
        <span id={idDica} className="-mt-1 text-xs leading-relaxed text-muted-foreground/80">
          {dica}
        </span>
      )}
      {children({
        "aria-invalid": !!erro,
        "aria-describedby": descrito || undefined,
      })}
      {erro && (
        <span id={idErro} role="alert" className="text-xs text-destructive">
          {erro}
        </span>
      )}
    </div>
  );
};
