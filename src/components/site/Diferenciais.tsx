import { motion } from "framer-motion";
import { diferenciais } from "@/config/atuacao";

/**
 * "Por que escolher a G2", página 6 da apresentação.
 *
 * Ocupa o lugar dos quatro contadores animados que havia antes (+150 projetos,
 * +20 anos, +50 clientes, 100% comprometimento). Nenhum daqueles números tinha
 * respaldo — a apresentação da empresa não afirma nenhum deles — e estes
 * argumentos são reais e dizem mais.
 */
export const Diferenciais = () => {
  return (
    <section className="relative border-y border-border bg-background secao">
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
            Por que escolher a G2
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl">
            Quem entende das duas pontas{" "}
            <span className="font-display italic">erra menos.</span>
          </h2>
        </motion.div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-t border-primary pt-6"
            >
              <div className="font-display text-5xl leading-none text-silver">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.1em] text-primary">
                {d.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
