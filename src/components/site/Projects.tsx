import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projetos } from "@/config/projetos";

/**
 * `compact` é a versão da home: grade de 3 com imagem, setor e título, sem a
 * ficha completa — para não repetir na íntegra o conteúdo de /projetos, que o
 * Google leria como página duplicada.
 */
export const Projects = ({ compact = false }: { compact?: boolean }) => {
  if (compact) return <ProjectsCompact />;

  return (
    <section id="projetos" className="relative bg-background py-24 md:py-32">
      <div className="container-cz">
        <div className="space-y-24 md:space-y-32">
          {projetos.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    srcSet={`${p.imageSm} 800w, ${p.image} 1600w`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover transition-transform [transition-duration:800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                {/* A imagem é de banco e ilustra o setor — dizer isso evita que
                    ela seja lida como registro da obra. */}
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {p.creditoImagem}
                </p>
              </div>

              <div className="lg:px-4">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent">
                  {p.category}
                </div>
                <h3 className="mt-4 max-w-md text-3xl leading-tight text-primary md:text-4xl">
                  {p.title}
                </h3>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-6">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-primary">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 space-y-5">
                  <Bloco titulo="Desafio">{p.desafio}</Bloco>
                  <Bloco titulo="Solução">{p.solucao}</Bloco>
                  <Bloco titulo="Resultado" destaque>
                    {p.resultado}
                  </Bloco>
                </div>

                <Link
                  to="/contato"
                  className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:gap-5 hover:border-accent hover:text-accent"
                >
                  Falar sobre um projeto assim →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bloco = ({
  titulo,
  children,
  destaque = false,
}: {
  titulo: string;
  children: React.ReactNode;
  destaque?: boolean;
}) => (
  <div>
    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{titulo}</div>
    <p
      className={`mt-2 max-w-md leading-relaxed ${
        destaque ? "font-medium text-primary" : "text-muted-foreground"
      }`}
    >
      {children}
    </p>
  </div>
);

const ProjectsCompact = () => (
  <section id="projetos" className="relative bg-background py-24 md:py-32">
    <div className="container-cz">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Projetos em destaque
          </div>
          <h2 className="max-w-3xl text-4xl text-primary md:text-5xl lg:text-[56px] leading-[1.05]">
            O que entregamos <span className="font-serif italic font-light">fala por si.</span>
          </h2>
        </div>
        <Link
          to="/projetos"
          className="inline-flex shrink-0 items-center gap-3 border-b border-primary pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:gap-5 hover:border-accent hover:text-accent"
        >
          Ver todos →
        </Link>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {projetos.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={p.imageSm}
                srcSet={`${p.imageSm} 800w, ${p.image} 1600w`}
                sizes="(min-width: 768px) 33vw, 100vw"
                alt={p.title}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1067}
                className="h-full w-full object-cover transition-transform [transition-duration:800ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-accent">
              {p.category}
            </div>
            <h3 className="mt-3 text-xl leading-snug text-primary">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>
            <Link to="/projetos" className="absolute inset-0" aria-label={`Ver o projeto ${p.title}`} />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
