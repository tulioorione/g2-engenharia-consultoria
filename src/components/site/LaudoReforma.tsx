import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileCheck2 } from "lucide-react";
import { laudoReforma } from "@/config/atuacao";

/**
 * Serviço de entrada: obrigação legal, ticket baixo e prazo curto.
 *
 * Ganha bloco próprio porque atinge os dois compradores ao mesmo tempo — o
 * morador, que precisa do laudo para começar a obra, e o síndico, que precisa
 * exigi-lo de todo mundo. E porque "laudo de reforma NBR 16280" é o termo que
 * a pessoa realmente digita, ao contrário de "laudos técnicos".
 */
export const LaudoReforma = () => {
  return (
    <section className="relative bg-primary-deep py-20 md:py-24">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12"
        >
          <FileCheck2
            className="h-10 w-10 shrink-0 text-accent-on-dark"
            strokeWidth={1.25}
            aria-hidden="true"
          />

          <div className="max-w-2xl">
            <div className="eyebrow mb-4 text-silver">
              <span className="inline-block h-px w-8 bg-silver" />
              {laudoReforma.norma}
            </div>
            <h2 className="text-3xl leading-[1.15] text-primary-foreground md:text-4xl">
              {laudoReforma.titulo}
            </h2>
            <p className="mt-6 leading-relaxed text-primary-foreground/75">{laudoReforma.texto}</p>
            <p className="mt-4 leading-relaxed text-silver">{laudoReforma.reforco}</p>
          </div>

          <Link
            to="/contato"
            className="inline-flex shrink-0 items-center gap-3 border border-silver/40 px-7 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:border-silver hover:bg-silver/10 md:ml-auto"
          >
            Pedir o laudo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
