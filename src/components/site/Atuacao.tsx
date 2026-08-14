import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { areasAtuacao } from "@/config/atuacao";

/**
 * Áreas de atuação, página 7 da apresentação.
 *
 * Substitui a antiga seção "Setores atendidos", que listava mineração, energia,
 * saneamento e agronegócio — nenhum deles é o que a G2 faz.
 */
export const Atuacao = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section id="atuacao" className="relative bg-secondary py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <div className="eyebrow text-accent mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              Áreas de atuação
            </div>
            <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl lg:text-[56px]">
              Onde a engenharia <span className="font-serif font-light italic">acontece.</span>
            </h2>
          </div>
          {compact && (
            <Link
              to="/atuacao"
              className="inline-flex shrink-0 items-center gap-3 border-b border-primary pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:gap-5 hover:border-accent hover:text-accent"
            >
              Ver detalhes →
            </Link>
          )}
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {areasAtuacao.map((a, i) => (
            <motion.article
              key={a.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-background p-8"
            >
              <a.icon className="h-7 w-7 text-accent" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="mt-6 text-2xl text-primary">{a.nome}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              {!compact && (
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {a.itens.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-primary">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
