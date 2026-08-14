import { PageHeader } from "@/components/site/PageHeader";
import { Atuacao } from "@/components/site/Atuacao";
import { Desafio } from "@/components/site/Desafio";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

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
    <Desafio />
    <FinalCTA />
  </>
);

export default AtuacaoPage;
