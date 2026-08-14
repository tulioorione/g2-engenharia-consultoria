import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-obra.webp";
import hero1280 from "@/assets/hero-obra-1280.webp";
import hero768 from "@/assets/hero-obra-768.webp";

export const Hero = () => {
  // min-h-svh em vez de min-h-screen: no celular, 100vh inclui a área da barra
  // de endereço, o que faz o conteúdo pular quando ela recolhe.
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          srcSet={`${hero768} 768w, ${hero1280} 1280w, ${heroImage} 1920w`}
          sizes="100vw"
          alt="Equipe de engenharia conferindo medições em campo, com equipamento topográfico"
          className="h-full w-full object-cover"
          width={1920}
          height={1281}
          decoding="async"
          /* É o LCP da página: precisa sair na frente do resto.
             O React 18 descarta `fetchPriority` em camelCase — só a forma
             minúscula chega ao DOM —, e os tipos ainda não a conhecem. */
          {...({ fetchpriority: "high" } as Record<string, string>)}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>

      {/* Em tela baixa (celular deitado) 224px de padding sobram quase nada
          para o conteúdo, e a seção cresce muito além da dobra. */}
      <div className="container-cz relative z-10 pt-32 pb-24 [@media(max-height:640px)]:pt-24 [@media(max-height:640px)]:pb-12">
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
          Da execução ao gerenciamento estratégico da sua obra — construção, reforma e
          manutenção com orçamento, cronograma e prestação de contas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/servicos"
            className="group inline-flex items-center justify-center gap-3 bg-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-silver-light hover:scale-[1.02]"
          >
            Conheça nossos serviços
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-3 border border-silver/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:bg-silver/10 hover:border-silver"
          >
            Fale com um especialista
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        /* Em tela baixa o indicador se sobrepõe aos botões e não diz nada de
           útil — a rolagem já é evidente quando o conteúdo passa da dobra. */
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-silver [@media(max-height:640px)]:hidden"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
          <div className="h-12 w-px animate-bounce-soft bg-silver/60" />
        </div>
      </motion.div>
    </section>
  );
};
