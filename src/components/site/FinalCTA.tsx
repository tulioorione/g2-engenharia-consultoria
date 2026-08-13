import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section id="contato" className="relative bg-primary py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
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
          <h2 className="text-5xl text-primary-foreground md:text-6xl lg:text-7xl leading-[1.05]">
            Pronto para transformar seu <span className="font-serif italic font-light text-silver-light">próximo desafio?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-primary-foreground/75">
            Conte com uma equipe que entrega clareza técnica e responsabilidade do primeiro contato à última assinatura.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:contato@g2engenharia.com.br"
              className="group inline-flex items-center justify-center gap-3 bg-primary-foreground px-10 py-5 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-silver-light hover:scale-[1.02]"
            >
              Solicitar orçamento
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="tel:+5500000000000"
              className="inline-flex items-center justify-center gap-3 border border-silver/40 px-10 py-5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:bg-silver/10 hover:border-silver"
            >
              Falar por telefone
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
