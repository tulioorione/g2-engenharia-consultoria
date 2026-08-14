import {
  Blocks,
  Brush,
  CalendarRange,
  ClipboardCheck,
  Hammer,
  Wallet,
  Wrench,
} from "lucide-react";

/**
 * Serviços REAIS, extraídos da apresentação institucional da G2 (páginas 4 e 5).
 *
 * A empresa se organiza em duas frentes, e essa divisão é o argumento central
 * dela — "Entendemos tanto da execução (chão de obra) quanto do planejamento
 * (escritório)". Manter os dois grupos separados preserva esse argumento.
 */
export const grupos = [
  {
    id: "execucao",
    titulo: "Execução e instalações",
    resumo: "O que é feito no canteiro, com equipe própria e responsabilidade técnica.",
  },
  {
    id: "gestao",
    titulo: "Consultoria e gestão",
    resumo: "O que é controlado no escritório, para a obra não fugir do prazo nem do orçamento.",
  },
];

export const servicos = [
  {
    grupo: "execucao",
    icon: Hammer,
    title: "Construção civil em geral",
    desc: "Alvenaria, acabamentos finos e pintura.",
    itens: ["Alvenaria", "Acabamentos finos", "Pintura"],
  },
  {
    grupo: "execucao",
    icon: Blocks,
    title: "Serviços estruturais",
    desc: "Forma, armação e concreto.",
    itens: ["Forma", "Armação", "Concreto"],
  },
  {
    grupo: "execucao",
    icon: Wrench,
    title: "Manutenção",
    desc: "Preventiva e corretiva para empresas e condomínios.",
    itens: ["Manutenção preventiva", "Manutenção corretiva", "Atendimento a condomínios"],
  },
  {
    grupo: "gestao",
    icon: Wallet,
    title: "Orçamento de obras",
    desc: "Levantamento quantitativo detalhado para evitar surpresas financeiras.",
    itens: ["Levantamento quantitativo", "Composição de custos", "Comparativo de alternativas"],
  },
  {
    grupo: "gestao",
    icon: ClipboardCheck,
    title: "Acompanhamento técnico",
    desc: "Fiscalização da qualidade dos serviços, com visitas técnicas.",
    itens: ["Visitas técnicas", "Fiscalização de qualidade", "Registro de não conformidades"],
  },
  {
    grupo: "gestao",
    icon: Brush,
    title: "Controle de caixa",
    desc: "Relatórios de gastos, gestão de compras e de pagamentos.",
    itens: ["Relatório de gastos", "Gestão de compras", "Controle de pagamentos"],
  },
  {
    grupo: "gestao",
    icon: CalendarRange,
    title: "Cronograma físico-financeiro",
    desc: "Planejamento real das etapas da obra contra o fluxo de caixa necessário.",
    itens: ["Etapas da obra", "Fluxo de caixa por etapa", "Acompanhamento de desvios"],
  },
];

/**
 * Diferencial declarado na apresentação (página 4). É uma afirmação forte e
 * verificável — vale destacar em vez de deixar como item de lista.
 */
export const diferencialEquipe =
  "Equipe capacitada, treinada e regularizada diante de todas as normas legais.";
