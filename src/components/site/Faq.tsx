import { motion } from "framer-motion";
import { Head } from "vite-react-ssg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/config/faq";

/**
 * O accordion do Radix desmonta o painel fechado, então as RESPOSTAS não
 * chegavam ao HTML pré-renderizado — só as perguntas. Como o FAQ é o melhor
 * conteúdo de busca do site (são as frases exatas que as pessoas digitam),
 * isso anulava o ganho inteiro.
 *
 * O JSON-LD FAQPage resolve pelo caminho certo: coloca pergunta e resposta no
 * HTML de forma legível por máquina e habilita o resultado rico do Google.
 * Forçar o painel aberto no DOM quebraria a animação de fechar, que não tem
 * fill-mode e faria o conteúdo reaparecer ao fim do movimento.
 */
const montarEstrutura = (itens: typeof faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: itens.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

/** `area` filtra as perguntas para a página daquele público. */
export const Faq = ({ area }: { area?: string }) => {
  const itens = area ? faq.filter((f) => f.areas.includes(area)) : faq;
  const dadosEstruturados = montarEstrutura(itens);

  return (
    <section id="faq" className="relative bg-secondary secao-densa">
      <Head>
        <script type="application/ld+json">{JSON.stringify(dadosEstruturados)}</script>
      </Head>
      <div className="container-cz">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow text-accent mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              Perguntas frequentes
            </div>
            <h2 className="text-4xl leading-[1.05] text-primary md:text-5xl">
              O que perguntam <span className="font-display italic">antes de contratar.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {itens.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left text-lg text-primary hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
