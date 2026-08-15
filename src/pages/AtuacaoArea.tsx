import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq } from "@/components/site/Faq";
import { LaudoReforma } from "@/components/site/LaudoReforma";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Seo } from "@/components/site/Seo";
import { areasAtuacao } from "@/config/atuacao";
import { exigencias } from "@/config/exigencias";

/**
 * Página de uma área de atuação.
 *
 * O eixo aqui é o COMPRADOR, não o serviço. Ninguém acorda procurando
 * "cronograma físico-financeiro" — a pessoa acorda pensando "vou reformar meu
 * apartamento" ou "sou síndico e o prédio tem infiltração". Por isso são três
 * páginas por público e não sete por serviço: os sete serviços da G2 são um
 * pacote, e separá-los sugeriria que dá para comprar cada um solto.
 *
 * Todo o conteúdo já existia — a dor, os itens da apresentação, as exigências
 * reais daquele tipo de obra e as perguntas do FAQ que se aplicam.
 */
/**
 * `seoTitle` é escrito à mão, e não montado a partir do título da página.
 * Compondo "nome da área + título + destaque + marca" o resultado passava de
 * 70 caracteres e o Google cortava justamente a marca no fim. Aqui cada um
 * cabe no corte de ~60 e começa pelo termo que a pessoa realmente digita.
 */
const textos: Record<
  string,
  { titulo: string; seoTitle: string; descricao: string }
> = {
  residencial: {
    titulo: "Reforma de apartamento e construção de casa",
    seoTitle: "Reforma de apartamento e casa em Juiz de Fora | G2",
    descricao:
      "Reforma de apartamento, construção de casa e laudo técnico em Juiz de Fora e região. Escopo fechado, com responsável técnico do começo ao fim.",
  },
  comercial: {
    titulo: "Reforma de loja, escritório e consultório",
    seoTitle: "Reforma de loja e escritório chave na mão | G2",
    descricao:
      "Reforma de loja, escritório e consultório com entrega chave na mão. Prazo assumido em cláusula, porque dia parado é faturamento perdido.",
  },
  condominios: {
    titulo: "Manutenção predial e obras de melhoria",
    seoTitle: "Manutenção predial para condomínios | G2 Engenharia",
    descricao:
      "Manutenção preventiva pela NBR 5674, gestão de obras de melhoria e análise de plano de reforma de morador, com a documentação que o conselho cobra.",
  },
};

export const AtuacaoArea = ({ slug }: { slug: string }) => {
  const area = areasAtuacao.find((a) => a.slug === slug);
  const exigencia = exigencias.find((e) => e.slug === slug);
  const texto = textos[slug];
  if (!area || !exigencia || !texto) return null;

  return (
    <>
      <Seo
        title={texto.seoTitle}
        description={texto.descricao}
        path={`/atuacao/${slug}`}
      />
      <PageHeader
        /* Só o nome da área: a trilha logo acima já diz que é dentro de
           Atuação, e "Atuação · Residencial" em caixa alta grande quebraria
           em duas linhas sem acrescentar nada. */
        eyebrow={area.nome}
        title={texto.titulo}
        intro={area.dor}
      />

      <section className="relative bg-background secao">
        <div className="container-cz grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow text-accent mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              O que fazemos aqui
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">{area.desc}</p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {area.itens.map((item) => (
                <li key={item} className="flex gap-3 text-primary">
                  <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/servicos"
              className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:gap-5 hover:border-accent hover:text-accent"
            >
              Ver todos os serviços →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="eyebrow text-accent mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              O que essa obra exige
            </div>
            <p className="leading-relaxed text-muted-foreground">{exigencia.resumo}</p>
            <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {exigencia.pontos.map((p) => (
                <div key={p.titulo}>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-accent">{p.titulo}</dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.texto}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* A norma só vale onde há condomínio envolvido. */}
      {slug !== "comercial" && <LaudoReforma />}

      <Faq area={slug} />
      <FinalCTA />
    </>
  );
};
