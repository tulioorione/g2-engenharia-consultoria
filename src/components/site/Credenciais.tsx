import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { atuacao, credenciais } from "@/config/credenciais";

export const Credenciais = () => {
  return (
    <section id="credenciais" className="relative bg-primary secao">
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-70" />
      <div className="container-cz relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow text-accent-on-dark mb-6">
            <span className="inline-block h-px w-8 bg-accent-on-dark" />
            Credenciais e conformidade
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary-foreground md:text-5xl">
            Registro, seguro e normas atendidas
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            Em engenharia, credencial sem número não passa numa habilitação. Estes são os
            registros que acompanham cada contrato.
          </p>
        </motion.div>

        <dl className="mt-16 grid gap-px bg-silver/10 sm:grid-cols-2 lg:grid-cols-4">
          {credenciais.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-primary-deep p-8"
            >
              <dt className="text-[11px] uppercase tracking-[0.2em] text-silver">{c.titulo}</dt>
              <dd className="mt-3 font-display text-2xl text-primary-foreground">{c.valor}</dd>
              <dd className="mt-4 text-sm leading-relaxed text-primary-foreground/65">{c.desc}</dd>
            </motion.div>
          ))}
        </dl>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-6 border-t border-silver/15 pt-10 md:flex-row md:items-start md:gap-16"
        >
          <div className="flex items-start gap-4">
            <MapPin
              className="mt-1 h-5 w-5 shrink-0 text-accent-on-dark"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver">
                Onde atendemos
              </div>
              <p className="mt-2 max-w-md leading-relaxed text-primary-foreground/75">
                {atuacao.alcance}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/55">Base em {atuacao.base}.</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2 md:pt-7">
            {atuacao.estados.map((e) => (
              <li
                key={e}
                className="border border-silver/25 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-primary-foreground/70"
              >
                {e}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
