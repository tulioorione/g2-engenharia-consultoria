import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { socios } from "@/config/contato";
import { formularioConfigurado, formularioEndpoint } from "@/config/formulario";
import { areasDeInteresse } from "@/config/trabalheConosco";

/**
 * Candidatura espontânea. Posta no MESMO endpoint do Formspree que o
 * formulário de contato, mudando só o `_subject` — candidatura e orçamento
 * chegam na mesma caixa, separados pelo assunto. Endpoint novo seria
 * configuração nova para manter, e a empresa tem dois sócios, não um RH.
 *
 * Seis campos contra os quatro do contato, e a diferença é proposital: um
 * candidato já decidiu se candidatar quando chega aqui, então tolera mais
 * campo que um visitante decidindo se pede orçamento. Ainda assim só um é
 * obrigatório a mais — o link do currículo é opcional, porque exigir currículo
 * hospedado em algum lugar elimina justamente quem trabalha no canteiro.
 */
const esquema = z.object({
  nome: z.string().trim().min(2, "Diga como podemos te chamar."),
  telefone: z.string().trim().min(10, "Precisamos do telefone com DDD."),
  email: z.string().trim().email("Confira o e-mail — parece estar incompleto."),
  area: z.string().min(1, "Escolha a área que mais combina com sua experiência."),
  experiencia: z.string().trim().min(15, "Conte onde você já trabalhou e o que fazia."),
  // Opcional de verdade: aceita vazio, mas se vier preenchido tem de ser URL —
  // link quebrado num currículo é pior que campo em branco.
  curriculo: z
    .string()
    .trim()
    .url("Cole o endereço completo, começando com https://")
    .or(z.literal(""))
    .optional(),
  // Armadilha de spam: fica escondida, então só robô preenche.
  siteWeb: z.string().max(0),
});

type Dados = z.infer<typeof esquema>;
type Estado = "parado" | "enviando" | "enviado" | "erro";

const classeCampo =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-accent";

export const FormularioCandidatura = () => {
  const [estado, setEstado] = useState<Estado>("parado");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Dados>({
    resolver: zodResolver(esquema),
    defaultValues: { siteWeb: "", area: "", curriculo: "" },
  });

  const enviar = async (dados: Dados) => {
    if (dados.siteWeb) return; // robô
    if (!formularioConfigurado) {
      setEstado("erro");
      return;
    }
    setEstado("enviando");
    try {
      const resposta = await fetch(formularioEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.nome,
          telefone: dados.telefone,
          email: dados.email,
          area: dados.area,
          experiencia: dados.experiencia,
          curriculo: dados.curriculo || "não informado",
          // Assunto diferente do contato: é o que separa candidatura de
          // orçamento na caixa de entrada dos sócios.
          _subject: `Site G2 — candidatura de ${dados.nome}`,
        }),
      });
      if (!resposta.ok) throw new Error(String(resposta.status));
      setEstado("enviado");
      reset();
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
        <h3 className="mt-6 text-2xl text-primary">Recebemos sua candidatura.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          Seu contato entra no nosso banco. Procuramos você quando houver uma frente que combine
          com sua experiência — mesmo que leve um tempo.
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

      <Campo
        id="experiencia"
        rotulo="Sua experiência"
        erro={errors.experiencia?.message}
        dica="Onde você trabalhou e o que fazia. Não precisa ser formal."
      >
        {(aria) => (
          <textarea
            id="experiencia"
            rows={6}
            placeholder="Digite aqui..."
            className={classeCampo}
            {...aria}
            {...register("experiencia")}
          />
        )}
      </Campo>

      <Campo
        id="curriculo"
        rotulo="Link do currículo"
        erro={errors.curriculo?.message}
        dica="Opcional — LinkedIn, Google Drive ou qualquer endereço onde o currículo esteja."
      >
        {(aria) => (
          <input
            id="curriculo"
            type="url"
            inputMode="url"
            placeholder="https://..."
            className={classeCampo}
            {...aria}
            {...register("curriculo")}
          />
        )}
      </Campo>

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
  // ler o rótulo sozinho ("Link do currículo") não diz que é opcional.
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
