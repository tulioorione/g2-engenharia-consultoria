import { motion } from "framer-motion";
import { Head } from "vite-react-ssg";
import { glossario } from "@/config/glossario";

/**
 * O site usa esses termos o tempo todo — ART, medição, retenção, caminho
 * crítico. Explicá-los tira o jargão da frente da decisão e, de quebra,
 * posiciona a G2 como quem explica em vez de quem promete.
 *
 * O DefinedTermSet é o schema.org correspondente: o mesmo conteúdo em forma
 * legível por máquina, sem depender de o Google interpretar o HTML.
 */
const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossário de obra — G2 Engenharia e Consultoria",
  hasDefinedTerm: glossario.map((g) => ({
    "@type": "DefinedTerm",
    name: g.expansao ? `${g.termo} (${g.expansao})` : g.termo,
    description: g.definicao,
  })),
};

export const Glossario = () => {
  return (
    <section id="glossario" className="relative bg-background secao-densa">
      <Head>
        <script type="application/ld+json">{JSON.stringify(dadosEstruturados)}</script>
      </Head>

      <div className="container-cz">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow text-accent mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            Glossário
          </div>
          <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl">
            O que significa cada termo do orçamento
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Se algum destes termos apareceu num orçamento que você recebeu — nosso ou de outro
            engenheiro — é o que significam.
          </p>
        </motion.div>

        <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {glossario.map((g, i) => (
            <motion.div
              key={g.termo}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.05 }}
              className="border-t border-border pt-5"
            >
              <dt className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-lg font-semibold text-primary">{g.termo}</span>
                {g.expansao && (
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {g.expansao}
                  </span>
                )}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.definicao}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};
