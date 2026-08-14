import { motion } from "framer-motion";
import { riscos } from "@/config/riscos";

/**
 * O argumento da G2 é "obra sem controle, estouro de orçamento". O site dizia
 * isso, mas nunca explicava COMO a obra descontrola — e sem o mecanismo o
 * argumento é só adjetivo.
 *
 * Cada item vai de sintoma (a frase que o cliente diz depois do problema) para
 * causa técnica e daí para a prática que evita. É o conteúdo que mais sustenta
 * a venda de gestão de obras, e o que mais falta no site dos concorrentes.
 *
 * Fica entre os serviços e o método, os dois em fundo escuro — este em fundo
 * claro, para quebrar a sequência.
 */
export const Riscos = () => {
  return (
    <section id="riscos" className="relative bg-background py-24 md:py-28">
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
            Onde as obras descarrilam
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl">
            Nenhuma obra estoura de uma vez.{" "}
            <span className="font-display italic">Estoura aos poucos.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            São sempre as mesmas sete falhas, e todas acontecem antes de a primeira parede subir.
            Boa parte do nosso trabalho é impedir que elas comecem.
          </p>
        </motion.div>

        <ol className="border-t border-border">
          {riscos.map((r, i) => (
            <motion.li
              key={r.sintoma}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.06 }}
              className="grid gap-x-10 gap-y-5 border-b border-border py-8 md:grid-cols-[3.5rem_1fr_1fr] md:py-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl leading-none text-silver md:text-4xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="font-display text-xl italic leading-snug text-primary md:text-2xl">
                  “{r.sintoma}”
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.causa}</p>
              </div>

              <div className="border-l-2 border-accent pl-5 md:pl-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  O que evita
                </div>
                <p className="mt-2 leading-relaxed text-primary">{r.evita}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
