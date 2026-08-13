import { motion } from "framer-motion";
import { setores } from "@/config/setores";

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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {setores.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex flex-col border border-border bg-background px-5 py-6"
            >
              <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="mt-4 text-sm font-medium text-primary">{s.name}</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
