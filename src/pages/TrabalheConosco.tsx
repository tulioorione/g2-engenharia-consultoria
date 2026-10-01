import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { FormularioCandidatura } from "@/components/site/FormularioCandidatura";

/**
 * Só o formulário, centralizado. Sem texto de apoio, sem foto, sem lista de
 * vagas e sem o <FinalCTA /> que fecha as outras páginas — aquele CTA diz
 * "solicitar orçamento" e fala com cliente, não com candidato.
 *
 * O PageHeader fica: é a moldura de toda página interna do site e carrega o
 * <h1>. Sem ele a página não teria cabeçalho nenhum, ficaria sem trilha de
 * navegação e sem título na hierarquia — e seria a única assim.
 *
 * max-w-xl porque campo de formulário largo é mais difícil de preencher que
 * campo estreito: o olho perde a linha entre o rótulo e o campo seguinte.
 */
const TrabalheConosco = () => (
  <>
    <Seo
      title="Trabalhe conosco — Banco de talentos da G2 Engenharia"
      description="Execução no canteiro ou gestão no escritório: mande seus dados para o banco de talentos da G2 Engenharia e Consultoria."
      path="/trabalhe-conosco"
    />
    <PageHeader
      eyebrow="Trabalhe conosco"
      title="Obra boa se faz com"
      highlight="gente boa."
    />

    <section className="bg-background secao">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-cz"
      >
        <div className="mx-auto w-full max-w-xl">
          <FormularioCandidatura />
        </div>
      </motion.div>
    </section>
  </>
);

export default TrabalheConosco;
