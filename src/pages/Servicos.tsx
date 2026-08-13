import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { FinalCTA } from "@/components/site/FinalCTA";

const Servicos = () => (
  <>
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
