import { BarChart3, ClipboardList, Compass, HardHat } from "lucide-react";

/**
 * Fonte única dos serviços — usada pela seção de serviços e pelo rodapé.
 *
 * `desc` aparece na home (versão curta). `quando` e `entregaveis` só aparecem
 * na página /servicos: engenheiro compra entregável, não conceito.
 *
 * @ficticio Os entregáveis e prazos abaixo são plausíveis para o setor, mas
 * descrevem um compromisso comercial que a G2 ainda não confirmou. Cada linha
 * precisa do aval do dono — principalmente periodicidade de relatório e prazo.
 */
export const servicos = [
  {
    icon: Compass,
    title: "Consultoria em Engenharia",
    desc: "Pareceres técnicos, due diligence e suporte em decisões críticas de projeto.",
    quando:
      "Quando há divergência técnica entre projetistas, quando é preciso auditar um projeto de terceiros, ou antes de assumir um ativo já construído.",
    entregaveis: [
      "Parecer técnico assinado, com ART",
      "Relatório de due diligence com riscos priorizados",
      "Recomendação de alternativas com ordem de grandeza de custo",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos",
    desc: "Planejamento integrado e controle de prazo, custo e escopo até a entrega.",
    quando:
      "Quando o projeto tem várias frentes ou fornecedores e ninguém está costurando o todo — ou quando o cronograma já começou a escorregar.",
    entregaveis: [
      "Cronograma físico-financeiro e baseline de custo",
      "Matriz de responsabilidades entre as partes",
      "Relatório de progresso e desvios por período",
    ],
  },
  {
    icon: BarChart3,
    title: "Estudos de Viabilidade",
    desc: "Análise técnica, econômica e ambiental para fundamentar o investimento.",
    quando:
      "Antes de comprometer capital. Serve tanto para decidir entre alternativas quanto para sustentar a aprovação do investimento na diretoria.",
    entregaveis: [
      "Estudo técnico-econômico com cenários comparados",
      "Levantamento de condicionantes ambientais e de licenciamento",
      "Estimativa de custo e prazo por alternativa",
    ],
  },
  {
    icon: HardHat,
    title: "Supervisão de Obras",
    desc: "Fiscalização em campo, com controle de qualidade, medição e conformidade.",
    quando:
      "Quando o contratante não tem estrutura própria para fiscalizar, ou quando a obra já apresentou não conformidade e precisa de acompanhamento independente.",
    entregaveis: [
      "Engenheiro responsável com ART de fiscalização",
      "Relatório periódico com registro fotográfico",
      "Controle de medições e parecer de aceite por etapa",
    ],
  },
];
