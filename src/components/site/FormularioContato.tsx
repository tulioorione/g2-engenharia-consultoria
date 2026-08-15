import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { socios } from "@/config/contato";
import {
  etapas,
  formularioConfigurado,
  formularioEndpoint,
  tiposImovel,
} from "@/config/formulario";

/**
 * Os campos existem para o orçamento já sair da primeira resposta. Um
 * formulário genérico de nome/e-mail/mensagem gera um contato que exige três
 * idas e vindas antes de dar para orçar — tipo de imóvel, etapa e metragem
 * são o que fecha o diagnóstico logo de cara.
 */
const esquema = z.object({
  nome: z.string().trim().min(2, "Diga como podemos te chamar."),
  telefone: z
    .string()
    .trim()
    .min(10, "Precisamos do telefone com DDD.")
    .regex(/[\d\s()+-]+/, "Use apenas números, espaços e parênteses."),
  email: z.string().trim().email("Confira o e-mail — parece estar incompleto."),
  tipoImovel: z.string().min(1, "Escolha o tipo de imóvel."),
  etapa: z.string().min(1, "Escolha em que etapa o projeto está."),
  metragem: z.string().trim().optional(),
  mensagem: z.string().trim().min(15, "Conte um pouco mais sobre a obra."),
  // Armadilha de spam: fica escondida, então só robô preenche.
  siteWeb: z.string().max(0),
});

type Dados = z.infer<typeof esquema>;

type Estado = "parado" | "enviando" | "enviado" | "erro";

const classeCampo =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-accent";

export const FormularioContato = () => {
  const [estado, setEstado] = useState<Estado>("parado");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Dados>({
    resolver: zodResolver(esquema),
    defaultValues: { siteWeb: "" },
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
          "tipo de imóvel": dados.tipoImovel,
          etapa: dados.etapa,
          "metragem aproximada": dados.metragem || "não informada",
          mensagem: dados.mensagem,
          _subject: `Site G2 — ${dados.tipoImovel}, ${dados.etapa}`,
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
        <h3 className="mt-6 text-2xl text-primary">Recebemos sua mensagem.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          Um dos sócios responde pessoalmente. Se preferir adiantar a conversa, o WhatsApp está
          logo acima.
        </p>
        <button
          type="button"
          onClick={() => setEstado("parado")}
          className="mt-8 border-b border-primary pb-1 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors hover:border-accent hover:text-accent"
        >
          Enviar outra mensagem
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
            O envio automático ainda não foi ligado. Enquanto isso, fale direto pelo WhatsApp —
            os números estão logo acima.
          </span>
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Campo id="nome" rotulo="Seu nome" erro={errors.nome?.message}>
          <input id="nome" type="text" autoComplete="name" className={classeCampo} {...register("nome")} />
        </Campo>
        <Campo id="telefone" rotulo="Telefone ou WhatsApp" erro={errors.telefone?.message}>
          <input
            id="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(32) 90000-0000"
            className={classeCampo}
            {...register("telefone")}
          />
        </Campo>
      </div>

      <Campo id="email" rotulo="E-mail" erro={errors.email?.message}>
        <input id="email" type="email" autoComplete="email" className={classeCampo} {...register("email")} />
      </Campo>

      <div className="grid gap-5 sm:grid-cols-2">
        <Campo id="tipoImovel" rotulo="Tipo de imóvel" erro={errors.tipoImovel?.message}>
          <select id="tipoImovel" className={classeCampo} defaultValue="" {...register("tipoImovel")}>
            <option value="" disabled>
              Selecione
            </option>
            {tiposImovel.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Campo>
        <Campo id="etapa" rotulo="Em que etapa está" erro={errors.etapa?.message}>
          <select id="etapa" className={classeCampo} defaultValue="" {...register("etapa")}>
            <option value="" disabled>
              Selecione
            </option>
            {etapas.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </Campo>
      </div>

      <Campo id="metragem" rotulo="Metragem aproximada" opcional erro={errors.metragem?.message}>
        <input
          id="metragem"
          type="text"
          inputMode="numeric"
          placeholder="Ex.: 80 m²"
          className={classeCampo}
          {...register("metragem")}
        />
      </Campo>

      <Campo id="mensagem" rotulo="O que sua obra precisa" erro={errors.mensagem?.message}>
        <textarea id="mensagem" rows={5} className={classeCampo} {...register("mensagem")} />
      </Campo>

      {/* Armadilha de spam. Fora da tela e fora da ordem de tabulação. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="siteWeb">Não preencha este campo</label>
        <input id="siteWeb" type="text" tabIndex={-1} autoComplete="off" {...register("siteWeb")} />
      </div>

      {estado === "erro" && (
        <p role="alert" className="flex gap-3 border border-destructive/40 bg-destructive/5 p-4 text-sm text-foreground">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" strokeWidth={1.5} aria-hidden="true" />
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
        {estado === "enviando" ? "Enviando…" : "Enviar mensagem"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Não usamos seus dados para mais nada além de responder este contato.
      </p>
    </form>
  );
};

/** Rótulo, campo e erro amarrados por id — o erro é lido junto do campo. */
const Campo = ({
  id,
  rotulo,
  opcional = false,
  erro,
  children,
}: {
  id: string;
  rotulo: string;
  opcional?: boolean;
  erro?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {rotulo}
      {opcional && <span className="ml-2 normal-case tracking-normal">(opcional)</span>}
    </label>
    {children}
    {erro && (
      <span id={`${id}-erro`} role="alert" className="text-xs text-destructive">
        {erro}
      </span>
    )}
  </div>
);
