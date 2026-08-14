import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { institucional } from "@/config/atuacao";
import homeImage from "@/assets/equipe-campo.webp";
import homeImage640 from "@/assets/equipe-campo-640.webp";
import sobreImage from "@/assets/sobre-capacete.webp";
import sobreImage640 from "@/assets/sobre-capacete-640.webp";

/**
 * O mesmo componente serve a home e a página /sobre, então a imagem tem de
 * variar junto: na home entra o profissional em campo, e em /sobre o retrato
 * com o capacete e a planta ao fundo.
 */
const imagens = {
  home: {
    src: homeImage,
    src640: homeImage640,
    largura: 1029,
    altura: 1548,
    alt: "Profissional da G2 com cinto de segurança durante serviço em telhado",
  },
  sobre: {
    src: sobreImage,
    src640: sobreImage640,
    largura: 1100,
    altura: 1650,
    alt: "Profissional de engenharia segurando capacete de obra, com planta de projeto ao fundo",
  },
};

/** `compact` é a versão da home: só a chamada, com link para a página Sobre. */
export const About = ({ compact = false }: { compact?: boolean }) => {
  const imagem = compact ? imagens.home : imagens.sobre;

  return (
    <section id="sobre" className="relative bg-background secao">
      <div className="container-cz grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          {/* Só na home. Em /sobre o PageHeader já traz este mesmo eyebrow e
              este mesmo título — repetir aqui criava um h2 idêntico ao h1
              logo abaixo dele. */}
          {compact && (
            <>
              <div className="eyebrow text-accent mb-6">
                <span className="inline-block h-px w-8 bg-accent" />
                Quem somos
              </div>
              <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl lg:text-[56px]">
                Engenharia <span className="font-display italic">que resolve.</span>
              </h2>
            </>
          )}

          {/* Texto da apresentação institucional da G2 (página 2). */}
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {institucional.quemSomos}
          </p>

          {!compact && (
            <div className="mt-8 border-l-2 border-accent pl-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Nossa missão
              </div>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-primary">
                {institucional.missao}
              </p>
            </div>
          )}

          <p className="mt-8 font-display text-xl italic text-primary md:text-2xl">
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
              src={imagem.src}
              srcSet={`${imagem.src640} 640w, ${imagem.src} 1100w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={imagem.alt}
              loading="lazy"
              decoding="async"
              width={imagem.largura}
              height={imagem.altura}
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
