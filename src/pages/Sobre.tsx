import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Sectors } from "@/components/site/Sectors";
import { FinalCTA } from "@/components/site/FinalCTA";

const Sobre = () => (
  <>
    <PageHeader
      eyebrow="Quem somos"
      title="Engenharia"
      highlight="que resolve."
      intro="Rigor técnico, gestão disciplinada e visão estratégica aplicados a projetos de infraestrutura, indústria e mineração."
    />
    <About />
    <Sectors />
    <FinalCTA />
  </>
);

export default Sobre;
