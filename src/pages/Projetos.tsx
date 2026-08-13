import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { FinalCTA } from "@/components/site/FinalCTA";

const Projetos = () => (
  <>
    <PageHeader
      eyebrow="Projetos em destaque"
      title="O que entregamos"
      highlight="fala por si."
      intro="Uma seleção de projetos em mineração, energia e infraestrutura."
    />
    <Projects />
    <FinalCTA />
  </>
);

export default Projetos;
