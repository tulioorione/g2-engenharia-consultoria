import { motion } from "framer-motion";
import { Compass, ClipboardList, BarChart3, HardHat } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Consultoria em Engenharia",
    desc: "Pareceres técnicos, due diligence e suporte especializado em decisões críticas de projeto.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos",
    desc: "Planejamento integrado, controle de prazos, custos e escopo do conceito à entrega.",
  },
  {
    icon: BarChart3,
    title: "Estudos de Viabilidade",
    desc: "Análise técnica, econômica e ambiental para fundamentar investimentos com segurança.",
  },
  {
    icon: HardHat,
    title: "Supervisão de Obras",
    desc: "Fiscalização rigorosa em campo, garantindo qualidade, segurança e conformidade.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative bg-gradient-navy-radial py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="eyebrow text-silver mb-6">
              <span className="inline-block h-px w-8 bg-silver" />
              O que fazemos
            </div>
            <h2 className="max-w-3xl text-4xl text-primary-foreground md:text-5xl lg:text-[56px] leading-[1.05]">
              Quatro frentes. Uma <span className="font-serif italic font-light text-silver-light">obsessão por entregar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-primary-foreground/70">
            Atuamos do estudo inicial à entrega final, com equipes dedicadas a cada etapa do ciclo do projeto.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px bg-silver/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              href="#contato"
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-primary-deep p-8 transition-all duration-500 hover:bg-primary-steel hover:-translate-y-1"
            >
              <s.icon
                className="h-8 w-8 text-silver transition-all duration-500 group-hover:text-accent group-hover:rotate-[-6deg]"
                strokeWidth={1.25}
              />
              <h3 className="mt-8 text-xl text-primary-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-silver group-hover:text-accent transition-colors duration-500">
                Saiba mais
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
