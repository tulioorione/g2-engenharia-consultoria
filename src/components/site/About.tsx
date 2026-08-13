import { motion } from "framer-motion";
import aboutImage from "@/assets/about-team.jpg";

export const About = () => {
  return (
    <section id="sobre" className="relative bg-background py-24 md:py-32">
      <div className="container-cz grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Quem somos
          </div>
          <h2 className="text-4xl text-primary md:text-5xl lg:text-[56px] leading-[1.05]">
            Engenharia <span className="font-serif italic font-light">que resolve.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            A G2 Engenharia e Consultoria atua há mais de duas décadas projetando, supervisionando e
            entregando soluções técnicas para projetos de infraestrutura, indústria e mineração.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Combinamos rigor de engenharia, gestão disciplinada e visão estratégica para transformar
            cenários complexos em projetos viáveis, seguros e dentro do prazo.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
            <div>
              <div className="font-serif text-3xl text-primary">CREA</div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Registro técnico ativo</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-primary">ISO 9001</div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Gestão da qualidade</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={aboutImage}
              alt="Engenheiros analisando projetos no canteiro de obras"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden border border-border bg-background p-6 shadow-elevated md:block">
            <div className="font-serif text-5xl text-primary">20+</div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1 max-w-[140px]">
              Anos de experiência em engenharia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
