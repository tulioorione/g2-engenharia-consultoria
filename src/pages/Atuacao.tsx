import { PageHeader } from "@/components/site/PageHeader";
import { Atuacao } from "@/components/site/Atuacao";
import { FinalCTA } from "@/components/site/FinalCTA";
import { motion } from "framer-motion";
import { Seo } from "@/components/site/Seo";
import fachada from "@/assets/fachada.webp";
import fachadaSm from "@/assets/fachada-800.webp";

const AtuacaoPage = () => (
  <>
    <Seo
      title="Áreas de atuação — Reforma, laudo NBR 16280 e manutenção predial"
      description="Reforma e construção residencial, adequação de lojas com entrega chave na mão e manutenção predial em condomínios. Emitimos laudo de reforma conforme a NBR 16280."
      path="/atuacao"
    />
    <PageHeader
      eyebrow="Áreas de atuação"
      title="Onde a engenharia"
      highlight="acontece."
      intro="Obra predial e reforma, do apartamento ao condomínio inteiro."
    />
    {/* As exigências e o laudo NBR 16280 vivem nas páginas de cada área.
        Aqui eles eram repetição: esta página é um cruzamento — o trabalho
        dela é fazer a pessoa se reconhecer numa das três e seguir. */}
    <Atuacao />

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="aspect-[21/9] overflow-hidden bg-muted md:aspect-[3/1]"
    >
      <img
        src={fachada}
        srcSet={`${fachadaSm} 800w, ${fachada} 1600w`}
        sizes="100vw"
        alt="Fachada de edifício com esquadrias alinhadas, vista em detalhe"
        loading="lazy"
        decoding="async"
        width={1600}
        height={1066}
        className="h-full w-full object-cover"
      />
    </motion.div>

    {/* O bloco "desafio do cliente / solução G2" fica só na home, onde
        apresenta o problema logo depois do hero. Aqui era repetição. */}
    <FinalCTA />
  </>
);

export default AtuacaoPage;
