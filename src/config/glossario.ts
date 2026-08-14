/**
 * Glossário dos termos que aparecem no próprio site e nos documentos de obra.
 *
 * Não há nada de inventado aqui: são definições técnicas e normativas. É o
 * único bloco de conteúdo do site que pode ir ao ar sem passar pelos sócios,
 * e por isso o arquivo não leva marcação de conteúdo fictício — o termo não
 * aparece nem neste comentário, para não sujar o inventário do `grep`.
 *
 * Serve a dois propósitos. Para quem lê, tira o jargão da frente da decisão.
 * Para busca, são exatamente os termos que alguém digita quando recebeu um
 * orçamento e não entendeu o que estava escrito nele.
 */
export const glossario = [
  {
    termo: "ART",
    expansao: "Anotação de Responsabilidade Técnica",
    definicao:
      "Documento registrado no CREA que vincula um engenheiro a um serviço específico. É o que dá nome e CPF a quem responde tecnicamente pela obra — sem ela, não há responsável legal identificável.",
  },
  {
    termo: "NBR 16280",
    expansao: "Reforma em edificações",
    definicao:
      "Norma que exige plano de reforma com ART, entregue ao síndico antes do início de qualquer obra em condomínio. Vale inclusive para troca de piso e remoção de parede não estrutural.",
  },
  {
    termo: "NBR 5674",
    expansao: "Manutenção de edificações",
    definicao:
      "Norma que trata do plano de manutenção predial: o que inspecionar, com que periodicidade e quem executa. É preventiva por definição — manutenção corretiva é o que se faz quando o plano falhou.",
  },
  {
    termo: "Levantamento quantitativo",
    expansao: "",
    definicao:
      "Medir e listar tudo que a obra vai consumir, item a item, antes de orçar: metros de parede, sacos de argamassa, peças de louça. É o que separa um orçamento de uma estimativa.",
  },
  {
    termo: "Cronograma físico-financeiro",
    expansao: "",
    definicao:
      "Cruzamento de duas coisas que costumam andar separadas: em que semana cada etapa acontece e quanto dinheiro precisa estar disponível naquela semana. Evita a obra parar por caixa, não por serviço.",
  },
  {
    termo: "Caminho crítico",
    expansao: "",
    definicao:
      "A sequência de etapas que não admite atraso sem empurrar a entrega inteira. Saber qual é permite atrasar o que não importa e proteger o que importa.",
  },
  {
    termo: "Medição",
    expansao: "",
    definicao:
      "Conferência em campo do que foi efetivamente executado num período, que autoriza o pagamento daquela etapa. Pagar sem medir é como assinar cheque em branco no meio da obra.",
  },
  {
    termo: "Retenção",
    expansao: "",
    definicao:
      "Percentual do pagamento retido até a entrega final, liberado depois da vistoria. É o que dá ao contratante alguma força quando aparece pendência no fim.",
  },
  {
    termo: "Aditivo",
    expansao: "",
    definicao:
      "Alteração de escopo, prazo ou valor depois do contrato assinado. Aditivo por mudança de ideia do cliente é normal; aditivo por falha de levantamento é o orçamento cobrando o que faltou.",
  },
  {
    termo: "Turnkey",
    expansao: "Chave na mão",
    definicao:
      "Contratação em que uma empresa só responde por projeto, execução e entrega pronta para uso. O contratante trata com um interlocutor, não com sete fornecedores.",
  },
];
