import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * @ficticio Os entregáveis nomeados abaixo descrevem um compromisso comercial
 * que a G2 ainda não confirmou. Diagnóstico → Planejamento → Execução → Entrega
 * é um processo genérico; o que diferencia é dizer o que o cliente recebe em
 * cada etapa. Precisa do aval do dono, linha por linha.
 */
const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Visita técnica, leitura de projeto e mapeamento dos riscos.",
    entrega: "Relatório com riscos priorizados e estimativa de ordem de grandeza.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Escopo fechado, governança e matriz de responsabilidades entre as partes.",
    entrega: "Cronograma físico-financeiro e baseline de custo.",
  },
  {
    n: "03",
    title: "Execução",
    desc: "Coordenação em campo, controle de qualidade e frente de segurança.",
    entrega: "Relatório periódico de progresso e registro de não conformidades.",
  },
  {
    n: "04",
    title: "Entrega",
    desc: "Comissionamento, as-built e transferência documentada ao cliente.",
    entrega: "Dossiê técnico completo e ART de conclusão.",
  },
];

export const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);

  return (
    <section id="processo" ref={ref} className="relative bg-primary text-primary-foreground" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-cz w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-20"
          >
            <div className="eyebrow text-accent-on-dark mb-6">
              <span className="inline-block h-px w-8 bg-accent-on-dark" />
              Como trabalhamos
            </div>
            <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-[56px] leading-[1.05]">
              Um método <span className="font-serif italic font-light text-silver-light">construído em cada projeto.</span>
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[80px_1fr] md:gap-16">
            {/* Vertical line */}
            <div className="hidden md:flex justify-center relative">
              <div className="absolute inset-y-0 w-px bg-silver/15" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 w-px bg-gradient-to-b from-accent-on-dark via-silver to-silver/30"
              />
            </div>

            <div className="space-y-10 md:space-y-14">
              {steps.map((s, i) => {
                const start = i / steps.length;
                const end = (i + 1) / steps.length;
                return (
                  <Step key={s.n} step={s} progress={scrollYProgress} start={start} end={end} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({
  step,
  progress,
  start,
  end,
}: {
  step: { n: string; title: string; desc: string; entrega: string };
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) => {
  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  const a = clamp(start - 0.05);
  const b = clamp(start + 0.05);
  const c = clamp(end);
  const d = clamp(end + 0.1);
  const opacity = useTransform(progress, [a, Math.max(a, b), Math.max(b, c), Math.max(c, d)], [0.25, 1, 1, 0.35]);
  const y = useTransform(progress, [a, Math.max(a, b)], [20, 0]);

  return (
    <motion.div style={{ opacity, y }} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
      <div className="font-serif text-5xl md:text-7xl text-silver-light/90 leading-none">{step.n}</div>
      <div className="pt-2 md:pt-4">
        <h3 className="text-2xl md:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-xl text-primary-foreground/70 leading-relaxed">{step.desc}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-silver">
          <span className="uppercase tracking-[0.15em] text-primary-foreground/50">
            Você recebe:
          </span>{" "}
          {step.entrega}
        </p>
      </div>
    </motion.div>
  );
};
