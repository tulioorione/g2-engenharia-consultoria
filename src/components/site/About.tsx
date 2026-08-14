import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { institucional } from "@/config/atuacao";
import aboutImage from "@/assets/about-team.webp";
import aboutImage640 from "@/assets/about-team-640.webp";

/** `compact` é a versão da home: só a chamada, com link para a página Sobre. */
export const About = ({ compact = false }: { compact?: boolean }) => {
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

          {/* Texto da apresentação institucional da G2 (página 2). */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {institucional.quemSomos}
          </p>

          {!compact && (
            <div className="mt-10 border-l-2 border-accent pl-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Nossa missão
              </div>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-primary">
                {institucional.missao}
              </p>
            </div>
          )}

          <p className="mt-8 font-serif text-xl italic text-primary md:text-2xl">
            {institucional.assinatura}
          </p>

          {compact && (
            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center gap-3 self-start border-b border-primary pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:gap-5 hover:border-accent hover:text-accent"
            >
              Conheça a G2 →
            </Link>
          )}
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
              srcSet={`${aboutImage640} 640w, ${aboutImage} 1280w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Profissional da G2 com equipamento de proteção durante serviço em telhado"
              loading="lazy"
              decoding="async"
              width={1029}
              height={1548}
              className="h-full w-full object-cover"
            />
          </div>
          {/* O selo "20+ anos" saiu: a apresentação da G2 não afirma tempo de
              mercado, e a empresa é nova. Ver auditoria de conteúdo, item 08. */}
        </motion.div>
      </div>
    </section>
  );
};
