import { motion } from "framer-motion";
import { desafioCliente } from "@/config/atuacao";

/**
 * O problema do cliente e a resposta da G2, da página 3 da apresentação.
 *
 * É o texto mais forte do material institucional: nomeia a dor de quem contrata
 * em vez de elogiar a empresa. Ganha seção própria por isso.
 */
export const Desafio = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-70" />
      <div className="container-cz relative">
        <div className="grid gap-px bg-silver/10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary-deep p-10 md:p-14"
          >
            <div className="eyebrow mb-8 text-silver">
              <span className="inline-block h-px w-8 bg-silver" />
              O desafio do cliente
            </div>
            <p className="text-2xl leading-[1.35] text-primary-foreground/85 md:text-3xl">
              {desafioCliente.problema}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="bg-primary-steel p-10 md:p-14"
          >
            <div className="eyebrow mb-8 text-accent-on-dark">
              <span className="inline-block h-px w-8 bg-accent-on-dark" />
              A solução G2
            </div>
            <p className="text-2xl leading-[1.35] text-primary-foreground md:text-3xl">
              <span className="font-display italic">Centralizamos a responsabilidade.</span>{" "}
              {desafioCliente.solucao.replace("Centralizamos a responsabilidade. ", "")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
