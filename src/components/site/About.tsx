import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          {/* @ficticio A trajetória de "duas décadas em canteiros" e o compromisso
              de acompanhamento por sócio precisam do aval do dono. A formulação foi
              escolhida de propósito: atribui a experiência às pessoas — o que tende
              a ser verdade — em vez de à empresa, que é nova. Ver auditoria de
              conteúdo, itens 07 e 08. */}
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            A G2 nasce da trajetória de engenheiros que passaram duas décadas em canteiros de
            mineração, energia e infraestrutura.
          </p>
          {!compact && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              A experiência é longa; a empresa é nova. É por isso que aqui cada projeto é
              acompanhado por sócio — não repassado para equipe júnior.
            </p>
          )}

          {/* Os selos "CREA" e "ISO 9001" que ficavam aqui saíram: eram duas
              palavras sem número, e agora existe a seção Credenciais, que os
              mostra com registro, apólice e normas. Manter os dois seria
              repetir a mesma informação de forma mais fraca. */}
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
              alt="Engenheiros analisando projetos no canteiro de obras"
              loading="lazy"
              decoding="async"
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
