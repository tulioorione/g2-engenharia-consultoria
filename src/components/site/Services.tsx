import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicos as services } from "@/config/servicos";

/** `compact` é a versão da home: os 4 cards + link para a página de serviços. */
export const Services = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section id="servicos" className="relative bg-gradient-navy-radial py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="eyebrow text-silver mb-6">
              <span className="inline-block h-px w-8 bg-silver" />
              O que fazemos
            </div>
            <h2 className="max-w-3xl text-4xl text-primary-foreground md:text-5xl lg:text-[56px] leading-[1.05]">
              Quatro frentes. Uma <span className="font-serif italic font-light text-silver-light">obsessão por entregar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-primary-foreground/70">
            Atuamos do estudo inicial à entrega final, com equipes dedicadas a cada etapa do ciclo do projeto.
          </p>
        </motion.div>

        {/* Na home cabem 4 colunas porque só há título e uma frase. Na página
            de serviços entram "quando você precisa" e a lista de entregáveis —
            que em 4 colunas ficariam ilegíveis. */}
        <div
          className={`mt-16 grid gap-px bg-silver/10 ${
            compact ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-2"
          }`}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col bg-primary-deep p-8 transition-all duration-500 ${
                compact ? "hover:bg-primary-steel hover:-translate-y-1" : ""
              }`}
            >
              <s.icon
                className="h-8 w-8 text-silver transition-all duration-500 group-hover:text-accent-on-dark group-hover:rotate-[-6deg]"
                strokeWidth={1.25}
              />
              <h3 className="mt-8 text-xl text-primary-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed flex-1">{s.desc}</p>

              {!compact && (
                <>
                  <div className="mt-8 border-t border-silver/15 pt-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-silver">
                      Quando você precisa
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                      {s.quando}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-silver">
                      O que você recebe
                    </div>
                    <ul className="mt-3 space-y-2">
                      {s.entregaveis.map((e) => (
                        <li
                          key={e}
                          className="flex gap-3 text-sm leading-relaxed text-primary-foreground/70"
                        >
                          <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-silver/60" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {compact && (
                <>
                  <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-silver transition-colors duration-500 group-hover:text-accent-on-dark">
                    Saiba mais
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                  {/* Link esticado: o card inteiro clica, sem trocar o elemento
                      e sem perder as animações do motion.div. */}
                  <Link
                    to="/servicos"
                    className="absolute inset-0"
                    aria-label={`Saiba mais sobre ${s.title}`}
                  />
                </>
              )}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

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
