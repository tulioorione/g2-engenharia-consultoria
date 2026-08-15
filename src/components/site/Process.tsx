import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * @ficticio Os entregáveis nomeados abaixo descrevem um compromisso comercial
 * que a G2 ainda não confirmou — precisam do aval dos sócios, linha por linha.
 *
 * O vocabulário foi trazido para o negócio real da empresa: obra predial e
 * reforma. Antes falava de comissionamento e as-built, que é linguagem de
 * obra industrial e não descreve o que a G2 entrega.
 */
const steps = [
  {
    n: "01",
    title: "Visita técnica",
    desc: "Um dos sócios vai ao local entender o escopo, as condições e o que já existe.",
    entrega: "Diagnóstico do que precisa ser feito e do que pode ser aproveitado.",
  },
  {
    n: "02",
    title: "Orçamento",
    desc: "Levantamento quantitativo detalhado, item a item, para não haver surpresa depois.",
    entrega: "Orçamento fechado e cronograma físico-financeiro por etapa.",
  },
  {
    n: "03",
    title: "Execução",
    desc: "Equipe própria no canteiro, com acompanhamento técnico e controle de compras.",
    entrega: "Relatório de andamento e de gastos, com registro do que foi executado.",
  },
  {
    n: "04",
    title: "Entrega",
    desc: "Vistoria final com o cliente, ajuste de pendências e fechamento de contas.",
    entrega: "Prestação de contas completa e obra entregue sem pendência aberta.",
  },
];

export const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);

  // O sticky de 300vh só vale a partir do md. No celular ele prendia a tela por
  // três telas de rolagem, sem a linha de progresso (que é hidden md:flex) e com
  // o conteúdo cortado pelo overflow-hidden dentro de um h-screen. Abaixo do md
  // as etapas simplesmente empilham e rolam normalmente.
  return (
    <section
      id="processo"
      ref={ref}
      className="relative bg-primary text-primary-foreground md:h-[300vh]"
    >
      <div className="flex items-center py-24 md:sticky md:top-0 md:h-screen md:overflow-hidden md:py-0">
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
              Da visita técnica à entrega
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
    // As classes com "!" abaixo do md anulam o style inline do framer-motion:
    // sem o sticky não há progresso de rolagem, e as etapas ficariam presas na
    // opacidade inicial de 0.25. Resolver por CSS em vez de JS mantém correto
    // também no HTML pré-renderizado, antes da hidratação.
    <motion.div
      style={{ opacity, y }}
      className="grid grid-cols-[auto_1fr] items-start gap-6 max-md:!transform-none max-md:!opacity-100 md:gap-10"
    >
      <div className="font-display text-5xl md:text-7xl text-silver-light/90 leading-none">{step.n}</div>
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
