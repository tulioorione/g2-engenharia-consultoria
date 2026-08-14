import { motion } from "framer-motion";
import { exigencias } from "@/config/exigencias";

/**
 * As restrições reais de cada tipo de obra — horário, norma, documentação.
 *
 * É o que o cliente normalmente só descobre depois de contratar, e de onde vem
 * a maior parte das surpresas. Dizer isso antes é o que separa quem entende de
 * obra de quem só vende reforma.
 *
 * Layout em linhas, não em cards: a página já tem uma grade de três colunas
 * logo acima, e repetir a mesma forma faria as duas seções se confundirem.
 */
export const Exigencias = () => {
  return (
    <section id="exigencias" className="relative bg-background secao-densa">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Antes de contratar
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl">
            O que cada obra exige{" "}
            <span className="font-display italic">e ninguém conta antes.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Horário, norma, documento. São essas restrições que mudam prazo e preço — e é melhor
            descobri-las agora do que na segunda semana de obra.
          </p>
        </motion.div>

        <div className="space-y-px bg-border">
          {exigencias.map((e, i) => (
            <motion.div
              key={e.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: Math.min(i, 2) * 0.08 }}
              className="grid gap-8 bg-background py-10 lg:grid-cols-[16rem_1fr] lg:gap-16"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h3 className="text-2xl text-primary">{e.area}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.resumo}</p>
              </div>

              <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {e.pontos.map((p) => (
                  <div key={p.titulo}>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-accent">
                      {p.titulo}
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {p.texto}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
