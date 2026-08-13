import { motion } from "framer-motion";
import heroImage from "@/assets/hero-construction.webp";
import hero1280 from "@/assets/hero-construction-1280.webp";
import hero768 from "@/assets/hero-construction-768.webp";

export const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          srcSet={`${hero768} 768w, ${hero1280} 1280w, ${heroImage} 1920w`}
          sizes="100vw"
          alt="Vista aérea de canteiro de obras de grande porte"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          /* É o LCP da página: precisa sair na frente do resto. */
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>

      <div className="container-cz relative z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow text-silver mb-8"
        >
          <span className="inline-block h-px w-8 bg-silver" />
          G2 Engenharia e Consultoria
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-primary-foreground text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Transformando desafios em <span className="font-serif font-light italic text-silver-light">resultados concretos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg text-primary-foreground/80 md:text-xl"
        >
          Soluções em engenharia e consultoria com a precisão que seu projeto exige.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#servicos"
            className="group inline-flex items-center justify-center gap-3 bg-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-silver-light hover:scale-[1.02]"
          >
            Conheça nossos serviços
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-3 border border-silver/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:bg-silver/10 hover:border-silver"
          >
            Fale com um especialista
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-silver"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-12 w-px animate-bounce-soft bg-silver/60" />
        </div>
      </motion.div>
    </section>
  );
};
