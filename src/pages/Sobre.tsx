import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Credenciais } from "@/components/site/Credenciais";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

const Sobre = () => (
  <>
    <Seo
      title="Sobre a G2 — Engenharia levada a sério, do parafuso ao cronograma"
      description="Unimos a excelência técnica na execução de serviços com a inteligência no gerenciamento de obras."
      path="/sobre"
    />
    <PageHeader
      eyebrow="Quem somos"
      title="Engenharia"
      highlight="que resolve."
      intro="Unimos a excelência técnica na execução com a inteligência no gerenciamento de obras."
    />
    {/* "Por que escolher a G2" fica só na home: é argumento de conversão, e
        repetir aqui seria conteúdo duplicado. */}
    <About />
    <Team />
    <Credenciais />
    <FinalCTA />
  </>
);

export default Sobre;
