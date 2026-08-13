import { motion } from "framer-motion";

/** Cabeçalho das páginas internas. O padding do topo compensa o header fixo. */
export const PageHeader = ({
  eyebrow,
  title,
  highlight,
  intro,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
}) => (
  <section className="relative bg-primary pt-40 pb-20 md:pt-48 md:pb-28">
    <div className="absolute inset-0 bg-gradient-navy-radial opacity-70" />
    <div className="container-cz relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eyebrow text-silver mb-6">
          <span className="inline-block h-px w-8 bg-silver" />
          {eyebrow}
        </div>
        <h1 className="max-w-4xl text-4xl text-primary-foreground md:text-6xl lg:text-7xl leading-[1.05]">
          {title}{" "}
          {highlight && (
            <span className="font-serif font-light italic text-silver-light">{highlight}</span>
          )}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75 leading-relaxed">
            {intro}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);
