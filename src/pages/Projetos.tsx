import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

const Projetos = () => (
  <>
    <Seo
      title="Projetos — Mineração, energia e infraestrutura"
      description="Uma seleção de projetos entregues pela G2 em mineração, energia e infraestrutura."
      path="/projetos"
    />
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
