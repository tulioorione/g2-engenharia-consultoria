import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { diferencialEquipe, grupos, servicos } from "@/config/servicos";

/**
 * `compact` é a versão da home: os cards sem a lista de itens, com link para a
 * página de serviços.
 *
 * Os serviços ficam agrupados em "execução" e "gestão" porque essa divisão é o
 * argumento central da G2 — entender do canteiro e do escritório ao mesmo tempo.
 */
export const Services = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section id="servicos" className="relative bg-gradient-navy-radial secao-densa">
      <div className="container-cz">
        {/* Só na home. Em /servicos o PageHeader já traz este título e esta
            mesma introdução — repetir aqui gerava um h2 igual ao h1 acima. */}
        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <div className="eyebrow mb-6 text-silver">
                <span className="inline-block h-px w-8 bg-silver" />
                O que fazemos
              </div>
              <h2 className="max-w-3xl text-4xl leading-[1.05] text-primary-foreground md:text-5xl lg:text-[56px]">
                Da execução ao{" "}
                <span className="font-display italic text-silver-light">
                  gerenciamento da sua obra.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-primary-foreground/70">
              Duas frentes que se conversam: quem levanta a parede e quem controla o orçamento
              trabalham na mesma equipe.
            </p>
          </motion.div>
        )}

        <div className={`space-y-16 ${compact ? "mt-16" : ""}`}>
          {grupos.map((grupo) => {
            const doGrupo = servicos.filter((s) => s.grupo === grupo.id);
            return (
              <div key={grupo.id}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-2 border-b border-silver/15 pb-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <h3 className="text-2xl text-primary-foreground">{grupo.titulo}</h3>
                  <p className="max-w-md text-sm text-primary-foreground/60">{grupo.resumo}</p>
                </motion.div>

                {/* Cada grupo forma uma linha cheia: execução tem 3 serviços e
                    gestão tem 4. Antes o grupo de 4 parava em 2 colunas, então
                    no desktop um grupo aparecia com 3 cards e o outro com 2
                    fileiras de 2 — larguras diferentes e uma quebra estranha. */}
                <div
                  className={`mt-px grid gap-px bg-silver/10 sm:grid-cols-2 ${
                    doGrupo.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  }`}
                >
                  {doGrupo.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className={`group relative flex flex-col bg-primary-deep p-8 transition-all duration-500 ${
                        compact ? "hover:bg-primary-steel hover:-translate-y-1" : ""
                      }`}
                    >
                      <s.icon
                        className="h-8 w-8 text-silver transition-all duration-500 group-hover:rotate-[-6deg] group-hover:text-accent-on-dark"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                      <h4 className="mt-8 text-lg text-primary-foreground">{s.title}</h4>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/65">
                        {s.desc}
                      </p>

                      {!compact && (
                        <ul className="mt-6 space-y-2 border-t border-silver/15 pt-5">
                          {s.itens.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm text-primary-foreground/70"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-px w-3 shrink-0 bg-silver/60"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {compact && (
                        <Link
                          to="/servicos"
                          className="absolute inset-0"
                          aria-label={`Saiba mais sobre ${s.title}`}
                        />
                      )}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Diferencial declarado na apresentação (página 4). */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-l-2 border-accent-on-dark pl-6 text-lg text-primary-foreground/85"
        >
          {diferencialEquipe}
        </motion.p>

        {compact && (
          <div className="mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-3 border-b border-silver/60 pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:gap-5 hover:border-accent-on-dark hover:text-accent-on-dark"
            >
              Ver todos os serviços →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
