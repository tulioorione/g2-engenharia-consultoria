import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";

/**
 * A home vira uma porta de entrada: apresenta e encaminha, em vez de ser o
 * site inteiro numa página. Processo e Setores foram para /sobre, e as
 * versões `compact` daqui levam às páginas completas.
 */
const Index = () => (
  <>
    <Hero />
    <About compact />
    <Services compact />
    <Stats />
    <Projects compact />
    <Testimonials />
    <FinalCTA />
  </>
);

export default Index;
