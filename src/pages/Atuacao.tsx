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
      title="Áreas de atuação — Residencial, comercial e condomínios"
      description="A G2 atende reforma e construção residencial, adequação de lojas e escritórios, e manutenção predial em condomínios."
      path="/atuacao"
    />
    <PageHeader
      eyebrow="Áreas de atuação"
      title="Onde a engenharia"
      highlight="acontece."
      intro="Obra predial e reforma, do apartamento ao condomínio inteiro."
    />
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
