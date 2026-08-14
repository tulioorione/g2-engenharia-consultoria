import { motion } from "framer-motion";
import { equipe } from "@/config/equipe";

/** Iniciais para o monograma — evita foto de banco fingindo ser a equipe. */
const iniciais = (nome: string) =>
  nome
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

export const Team = () => {
  return (
    <section id="equipe" className="relative bg-background py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Quem assina
          </div>
          <h2 className="text-4xl text-primary md:text-5xl lg:text-[56px] leading-[1.05]">
            Projeto de engenharia <span className="font-display italic">tem nome.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Quem responde tecnicamente pelo seu projeto, com registro profissional ativo.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {equipe.map((p, i) => (
            <motion.article
              key={p.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-background p-8"
            >
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center bg-gradient-silver font-display text-xl text-primary"
              >
                {iniciais(p.nome)}
              </div>
              <h3 className="mt-6 text-xl leading-snug text-primary">{p.nome}</h3>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{p.cargo}</div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.trajetoria}
              </p>
              <dl className="mt-6 border-t border-border pt-5 text-sm">
                {p.formacao && (
                  <>
                    <dt className="sr-only">Formação</dt>
                    <dd className="text-muted-foreground">{p.formacao}</dd>
                  </>
                )}
                <dt className="sr-only">Telefone</dt>
                <dd>
                  <a
                    href={p.telefoneHref}
                    className="font-medium text-primary transition-colors duration-300 hover:text-accent"
                  >
                    {p.telefoneExibido}
                  </a>
                </dd>
                <dt className="sr-only">Registro profissional</dt>
                <dd className="mt-2 text-muted-foreground">{p.crea}</dd>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
