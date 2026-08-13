import { motion, useInView, useMotionValue, useReducedMotion, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 20, suffix: "+", label: "Anos de experiência" },
  { value: 50, suffix: "+", label: "Clientes atendidos" },
  { value: 100, suffix: "%", label: "Comprometimento" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    // A contagem é imperativa, então o MotionConfig do App não a alcança.
    if (reduceMotion) {
      mv.set(to);
      return;
    }
    const ctrl = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    return () => ctrl.stop();
  }, [inView, mv, to, reduceMotion]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Stats = () => {
  return (
    <section className="relative bg-background py-24 md:py-28 border-y border-border">
      <div className="container-cz">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative px-6 lg:px-10 lg:border-l lg:border-border first:lg:border-l-0"
            >
              <div className="font-serif text-6xl md:text-7xl lg:text-[88px] text-primary leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
