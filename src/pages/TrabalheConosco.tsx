import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { FormularioCandidatura } from "@/components/site/FormularioCandidatura";
import {
  avisoVagas,
  comoFunciona,
  frentes,
  oQueOferecemos,
} from "@/config/trabalheConosco";
import equipeCampo from "@/assets/equipe-campo.webp";
import equipeCampo640 from "@/assets/equipe-campo-640.webp";

/**
 * Banco de talentos. A página não fecha com o <FinalCTA />, ao contrário das
 * outras quatro: aquele CTA diz "solicitar orçamento" e fala com cliente.
 * Oferecer orçamento a quem acabou de se candidatar é trocar as pessoas de
 * lugar — aqui a conversão é o formulário, e ele já é o último bloco.
 */
const TrabalheConosco = () => (
  <>
    <Seo
      title="Trabalhe conosco — Banco de talentos da G2 Engenharia"
      description="Execução no canteiro ou gestão no escritório: mande sua experiência para o banco de talentos da G2. Contratação regularizada e equipe treinada."
      path="/trabalhe-conosco"
    />
    <PageHeader
      eyebrow="Trabalhe conosco"
      title="Obra boa se faz com"
      highlight="gente boa."
      intro="A G2 está montando equipe para crescer. Se você trabalha no canteiro ou no escritório, queremos saber de você."
    />

    {/* O aviso vem primeiro porque "tem vaga aberta?" é a primeira pergunta de
        quem abre esta página. Responder antes de ser perguntado é o que evita
        a candidatura frustrada — e o que dá credibilidade ao resto. */}
    <section className="bg-background secao-densa">
      <div className="container-cz">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex max-w-3xl gap-4 border-l-2 border-accent bg-secondary p-6 md:p-8"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
          <span className="leading-relaxed text-foreground">{avisoVagas}</span>
        </motion.p>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="eyebrow text-accent mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              Por que a G2
            </div>
            <h2 className="text-3xl leading-[1.1] text-primary md:text-4xl lg:text-[44px]">
              O que a gente promete a quem entra
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Três coisas, e só as três que a gente sustenta. Sem lista de benefício que não
              existe.
            </p>

            <dl className="mt-12 space-y-10">
              {oQueOferecemos.map((item, i) => (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <item.icon
                    className="mt-1 h-6 w-6 shrink-0 text-accent"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-lg text-primary">{item.titulo}</dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{item.desc}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* A mesma foto da home: o cinto de segurança no telhado é
              exatamente o argumento desta página — equipe regularizada não é
              frase, é o equipamento que a pessoa veste. */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden bg-muted lg:aspect-auto"
          >
            <img
              src={equipeCampo}
              srcSet={`${equipeCampo640} 640w, ${equipeCampo} 1029w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Profissional da G2 com cinto de segurança durante serviço em telhado"
              loading="lazy"
              decoding="async"
              width={1029}
              height={1548}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Navy, para quebrar o ritmo entre dois blocos claros — e porque as duas
        frentes são a estrutura da empresa, não um detalhe. */}
    <section className="relative bg-primary secao overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-70" />
      <div className="container-cz relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow text-accent-on-dark mb-6">
            <span className="inline-block h-px w-8 bg-accent-on-dark" />
            Onde você entra
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary-foreground md:text-5xl">
            Duas frentes, a mesma equipe
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            A G2 trabalha na execução e na gestão da obra. Veja em qual das duas sua experiência
            se encaixa — e se encaixar nas duas, melhor ainda.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px bg-silver/10 lg:grid-cols-2">
          {frentes.map((f, i) => (
            <motion.div
              key={f.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-primary-deep p-8 md:p-10"
            >
              <f.icon
                className="h-7 w-7 text-accent-on-dark"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-2xl text-primary-foreground">{f.nome}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/70">{f.desc}</p>
              <ul className="mt-8 space-y-3 border-t border-silver/15 pt-8">
                {f.experiencias.map((e) => (
                  <li
                    key={e}
                    className="flex gap-3 text-sm leading-relaxed text-primary-foreground/70"
                  >
                    <span
                      className="mt-2 h-px w-3 shrink-0 bg-silver/50"
                      aria-hidden="true"
                    />
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Formulário ao lado do processo, pelo mesmo motivo da página de contato:
        ler o que vai acontecer enquanto preenche é o que remove o medo de
        mandar dado pessoal e nunca mais ouvir falar. */}
    <section className="bg-background secao">
      <div className="container-cz">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl leading-[1.1] text-primary md:text-4xl">
              Conte sua experiência
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Escreva do seu jeito. Não precisa de currículo formatado para começar.
            </p>
            <div className="mt-10">
              <FormularioCandidatura />
            </div>
          </motion.div>

          <div className="lg:pt-4">
            <h2 className="text-2xl leading-tight text-primary">Como funciona</h2>
            <ol className="mt-8 space-y-8 border-l border-border pl-6">
              {comoFunciona.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <span className="font-display text-3xl leading-none text-silver">{p.n}</span>
                  <h3 className="mt-3 text-lg text-primary">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TrabalheConosco;
