import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { socios } from "@/config/contato";

export const FinalCTA = () => {
  return (
    <section className="relative bg-primary py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-on-dark/10 blur-[120px]" />
      </div>

      <div className="container-cz relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="eyebrow text-silver mb-8">
            <span className="inline-block h-px w-8 bg-silver" />
            Vamos conversar
          </div>
          {/* Chamada da última página da apresentação da G2. */}
          <h2 className="text-5xl leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl">
            Vamos tirar seu projeto{" "}
            <span className="font-serif font-light italic text-silver-light">do papel?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-primary-foreground/75">
            Fale direto com um dos sócios. Sem intermediário e sem custo pela primeira conversa.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center gap-3 bg-primary-foreground px-10 py-5 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:scale-[1.02] hover:bg-silver-light"
            >
              Solicitar orçamento
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            {socios.map((s) => (
              <a
                key={s.nome}
                href={s.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-col items-center justify-center gap-1 border border-silver/40 px-8 py-4 text-center transition-all duration-500 hover:border-silver hover:bg-silver/10"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-silver">
                  {s.nome.split(" ")[0]}
                </span>
                <span className="text-sm font-medium text-primary-foreground">
                  {s.telefoneExibido}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
