import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

const Servicos = () => (
  <>
    <Seo
      title="Serviços — Consultoria, gestão, viabilidade e supervisão de obras"
      description="Quatro frentes de atuação: consultoria em engenharia, gestão de projetos, estudos de viabilidade e supervisão de obras."
      path="/servicos"
    />
    <PageHeader
      eyebrow="O que fazemos"
      title="Quatro frentes. Uma"
      highlight="obsessão por entregar."
      intro="Atuamos do estudo inicial à entrega final, com equipes dedicadas a cada etapa do ciclo do projeto."
    />
    <Services />
    <Process />
    <FinalCTA />
  </>
);

export default Servicos;
