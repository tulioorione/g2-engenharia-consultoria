import { motion } from "framer-motion";
import mining from "@/assets/project-mining.webp";
import miningSm from "@/assets/project-mining-800.webp";
import energy from "@/assets/project-energy.webp";
import energySm from "@/assets/project-energy-800.webp";
import infra from "@/assets/project-infra.webp";
import infraSm from "@/assets/project-infra-800.webp";

const projects = [
  {
    image: mining,
    imageSm: miningSm,
    category: "Mineração",
    title: "Reestruturação de cava em mina de grande porte",
    desc: "Reorganização operacional e plano de lavra para mina de minério de ferro com ganho de 18% em produtividade.",
  },
  {
    image: energy,
    imageSm: energySm,
    category: "Energia",
    title: "Modernização de usina hidrelétrica",
    desc: "Estudo técnico e supervisão da modernização eletromecânica de PCH com 45 MW de capacidade instalada.",
  },
  {
    image: infra,
    imageSm: infraSm,
    category: "Infraestrutura",
    title: "Ponte rodoviária sobre travessia fluvial",
    desc: "Gerenciamento integrado da execução de ponte de 1,2 km, incluindo fundações em águas profundas.",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="relative bg-background py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
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
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
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
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="lg:px-4">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent">{p.category}</div>
                <h3 className="mt-4 text-3xl md:text-4xl text-primary leading-tight max-w-md">{p.title}</h3>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                <a
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-primary border-b border-primary pb-2 transition-all duration-500 hover:text-accent hover:border-accent hover:gap-5"
                >
                  Ver projeto completo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
