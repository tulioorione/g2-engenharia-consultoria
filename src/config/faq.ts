/**
 * @ficticio As respostas descrevem política comercial que a G2 ainda não
 * confirmou: prazos, forma de cobrança e área de atendimento. As perguntas são
 * as certas — todas travam o contato —, mas cada resposta vira compromisso e
 * precisa do aval dos sócios.
 *
 * As perguntas foram reescritas para o negócio real da G2 (obra predial,
 * reforma, condomínio). Antes falavam de estudo de viabilidade e obra pública,
 * que não é o que a empresa faz.
 */
export const faq = [
  {
    q: "Como funciona o orçamento?",
    areas: ["residencial","comercial","condominios"],
    a: "A primeira conversa e a visita técnica são sem custo. A partir delas você recebe um orçamento com levantamento quantitativo detalhado — é o que evita surpresa financeira no meio da obra.",
  },
  {
    q: "Vocês executam a obra ou só acompanham?",
    areas: ["residencial","comercial","condominios"],
    a: "Os dois, e essa é a diferença. Podemos executar com equipe própria, apenas gerenciar a obra de terceiros, ou fazer as duas coisas. Quem entende do canteiro e do escritório evita projeto impossível de executar.",
  },
  {
    q: "Atendem condomínios?",
    areas: ["condominios"],
    a: "Sim. Manutenção predial preventiva e corretiva, e gestão de obras de melhoria — com relatório de gastos para o síndico prestar contas ao conselho.",
  },
  {
    q: "Assumem obra que já começou?",
    areas: ["residencial","comercial"],
    a: "Sim, e é situação frequente. Começamos por um diagnóstico do que já foi executado, para separar o que precisa de correção do que pode seguir.",
  },
  {
    q: "Como acompanho o andamento e os gastos?",
    areas: ["residencial","comercial","condominios"],
    a: "Com cronograma físico-financeiro e relatório de gastos por etapa. A ideia é você saber exatamente onde cada centavo está sendo investido, sem precisar perguntar.",
  },
  {
    q: "Preciso de laudo para reformar meu apartamento?",
    areas: ["residencial"],
    a: "Se for em condomínio, sim. A NBR 16280 exige um plano de reforma com ART, assinado por profissional habilitado e entregue ao síndico antes de a obra começar — vale até para troca de piso ou remoção de parede. Emitimos o laudo e falamos com a administração do prédio.",
  },
  {
    q: "Sou síndico. O que devo exigir de um morador que vai reformar?",
    areas: ["condominios"],
    a: "O plano de reforma previsto na NBR 16280, com ART do responsável técnico, antes de autorizar a entrada de material ou de equipe. Sem isso, a responsabilidade por qualquer dano à estrutura pode recair sobre a administração. Analisamos esses planos para condomínios.",
  },
];

/**
 * @ficticio O prazo de resposta e o de proposta são compromissos comerciais e
 * precisam do aval dos sócios. O ponto da seção é remover o medo silencioso de
 * todo contato B2B: virar alvo de ligação.
 */
export const proximosPassos = [
  {
    n: "01",
    titulo: "Você conta o que precisa",
    desc: "Não precisa de projeto pronto. Uma descrição da obra ou do problema já basta para começarmos.",
  },
  {
    n: "02",
    titulo: "Visita técnica",
    desc: "Um dos sócios vai até o local entender o escopo e dizer com franqueza se é caso para a G2.",
  },
  {
    n: "03",
    titulo: "Orçamento detalhado",
    desc: "Com levantamento quantitativo, prazo e cronograma. Sem cobrança pela visita e sem compromisso de seguir.",
  },
];
