import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "A G2 entrou em um momento crítico do projeto e reorganizou o cronograma com uma clareza que não tínhamos visto antes. Entregaram exatamente o que prometeram.",
    name: "Ricardo Almeida",
    role: "Diretor de Operações",
    company: "Mineração Serra Verde",
  },
  {
    quote:
      "Equipe técnica de altíssimo nível. O estudo de viabilidade feito pela G2 foi a base para a aprovação do investimento na nossa diretoria.",
    name: "Patricia Lemos",
    role: "Gerente de Engenharia",
    company: "Grupo Andrade Infra",
  },
  {
    quote:
      "Supervisão de obra rigorosa, sem afrouxamento em nenhum momento. Foi por isso que terminamos antes do prazo e dentro do orçamento.",
    name: "Carlos Menezes",
    role: "CEO",
    company: "Vértice Construções",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative bg-primary-deep py-24 md:py-32 overflow-hidden">
      <div className="container-cz">
        <div className="eyebrow text-silver mb-12">
          <span className="inline-block h-px w-8 bg-silver" />
          Confiam na G2
        </div>

        <div className="relative min-h-[280px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-[1.3] font-light">
                “{t.quote}”
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-silver flex items-center justify-center text-primary font-medium">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-primary-foreground font-medium">{t.name}</div>
                  <div className="text-sm text-silver">{t.role} · {t.company}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Depoimento ${idx + 1}`}
              className={`h-px transition-all duration-500 ${idx === i ? "w-12 bg-accent" : "w-6 bg-silver/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
