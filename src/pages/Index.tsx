import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Desafio } from "@/components/site/Desafio";
import { Services } from "@/components/site/Services";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Atuacao } from "@/components/site/Atuacao";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";

/**
 * A home apresenta e encaminha, em vez de ser o site inteiro numa página.
 *
 * Saíram daqui: os contadores de números inventados (viraram os diferenciais
 * reais da apresentação) e os depoimentos, que eram pessoas e empresas
 * inventadas sem nenhum respaldo no material da G2.
 */
const Index = () => (
  <>
    <Seo
      title="G2 Engenharia — Reforma e gestão de obras em Juiz de Fora"
      description="Construção civil, serviços estruturais e manutenção, com orçamento, cronograma e controle de caixa. Obra residencial, comercial e de condomínios."
      path="/"
    />
    <Hero />
    <About compact />
    <Desafio />
    <Services compact />
    <Diferenciais />
    <Atuacao compact />
    <FinalCTA />
  </>
);

export default Index;
