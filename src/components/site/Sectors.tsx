import { motion } from "framer-motion";
import { Pickaxe, Building2, Factory, Zap, TrainTrack, Droplets, Truck, Wheat } from "lucide-react";

const sectors = [
  { icon: Pickaxe, name: "Mineração" },
  { icon: Building2, name: "Construção Civil" },
  { icon: Factory, name: "Industrial" },
  { icon: Zap, name: "Energia" },
  { icon: TrainTrack, name: "Infraestrutura" },
  { icon: Droplets, name: "Saneamento" },
  { icon: Truck, name: "Logística" },
  { icon: Wheat, name: "Agronegócio" },
];

export const Sectors = () => {
  return (
    <section id="setores" className="relative bg-secondary py-24 md:py-32">
      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Setores atendidos
          </div>
          <h2 className="text-4xl text-primary md:text-5xl lg:text-[56px] leading-[1.05]">
            Onde a engenharia <span className="font-serif italic font-light">acontece.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex items-center gap-4 border border-border bg-background px-5 py-6 transition-all duration-500 hover:bg-primary hover:border-primary hover:-translate-y-0.5"
            >
              <s.icon className="h-5 w-5 text-primary transition-colors duration-500 group-hover:text-accent" strokeWidth={1.5} />
              <span className="text-sm font-medium text-primary transition-colors duration-500 group-hover:text-primary-foreground">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
