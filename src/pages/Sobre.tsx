import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Credenciais } from "@/components/site/Credenciais";
import { Sectors } from "@/components/site/Sectors";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

const Sobre = () => (
  <>
    <Seo
      title="Sobre a G2 — Engenharia que resolve"
      description="Rigor técnico, gestão disciplinada e visão estratégica aplicados a projetos de infraestrutura, indústria e mineração."
      path="/sobre"
    />
    <PageHeader
      eyebrow="Quem somos"
      title="Engenharia"
      highlight="que resolve."
      intro="Rigor técnico, gestão disciplinada e visão estratégica aplicados a projetos de infraestrutura, indústria e mineração."
    />
    <About />
    <Team />
    <Credenciais />
    <Sectors />
    <FinalCTA />
  </>
);

export default Sobre;
