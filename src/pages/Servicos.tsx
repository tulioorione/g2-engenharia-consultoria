import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Riscos } from "@/components/site/Riscos";
import { Process } from "@/components/site/Process";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

const Servicos = () => (
  <>
    <Seo
      title="Serviços — Execução, manutenção, orçamento e gestão de obras"
      description="Construção civil, serviços estruturais e manutenção. E do lado da gestão: orçamento de obras, acompanhamento técnico, controle de caixa e cronograma físico-financeiro."
      path="/servicos"
    />
    <PageHeader
      eyebrow="O que fazemos"
      title="Da execução ao"
      highlight="gerenciamento da sua obra."
      intro="Duas frentes que se conversam: quem levanta a parede e quem controla o orçamento trabalham na mesma equipe."
    />
    <Services />
    <Riscos />
    <Process />
    <FinalCTA />
  </>
);

export default Servicos;
