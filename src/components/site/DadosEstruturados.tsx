import { Head } from "vite-react-ssg";
import { contato, redesSociais } from "@/config/contato";
import { servicos } from "@/config/servicos";
import { atuacao } from "@/config/credenciais";
import { SITE_URL } from "@/config/site";

/**
 * JSON-LD lido pelo Google. Para empresa nova, sem autoridade de domínio, é o
 * que faz aparecer no painel lateral com telefone, endereço e área de atuação —
 * o item de maior retorno por esforço em SEO.
 *
 * Os dados saem do mesmo config que alimenta o rodapé e a página de contato:
 * quando o telefone e o endereço reais entrarem lá, este bloco acompanha
 * sozinho. Hoje ele herda os placeholders, por isso o robots.txt bloqueia a
 * indexação enquanto o site for protótipo.
 */
export const DadosEstruturados = () => {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organizacao`,
    name: "G2 Engenharia e Consultoria",
    description:
      "Consultoria em engenharia, gestão de projetos, estudos de viabilidade e supervisão de obras para mineração, energia e infraestrutura.",
    url: SITE_URL,
    email: contato.email,
    telephone: contato.telefoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: contato.endereco.logradouro,
      addressLocality: contato.endereco.cidade,
      addressRegion: contato.endereco.uf,
      addressCountry: contato.endereco.pais,
    },
    areaServed: atuacao.estados.map((nome) => ({ "@type": "State", name: nome })),
    knowsAbout: servicos.map((s) => s.title),
    ...(redesSociais.length > 0 && { sameAs: redesSociais.map((r) => r.href) }),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Head>
  );
};
