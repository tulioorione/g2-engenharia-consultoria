/**
 * O que cada tipo de obra exige na prática.
 *
 * São restrições reais do setor — regulamento de condomínio, normas técnicas,
 * documentação obrigatória — e não afirmações sobre a G2. É o tipo de coisa
 * que o cliente só descobre depois de contratar, e que gera a maior parte das
 * surpresas desagradáveis.
 *
 * @ficticio As linhas que dizem o que a G2 faz a respeito ("assumimos",
 * "cuidamos", "entregamos") são compromisso comercial e precisam do aval dos
 * sócios. As restrições em si são factuais.
 */
export const exigencias = [
  {
    area: "Residencial",
    resumo: "Obra em prédio ocupado tem regra de horário, de barulho e de circulação.",
    pontos: [
      {
        titulo: "Horário e barulho",
        texto:
          "Quase todo regulamento interno limita serviço ruidoso a dias úteis, em faixa de horário fixa, com sábado reduzido e domingo proibido. Isso muda o prazo da obra — e precisa estar no cronograma desde o começo, não descoberto no meio.",
      },
      {
        titulo: "Circulação e área comum",
        texto:
          "Elevador, hall e escada precisam de proteção, e a retirada de entulho costuma ter horário próprio. Dano em área comum é cobrado do apartamento que está reformando.",
      },
      {
        titulo: "Documentação antes de começar",
        texto:
          "Plano de reforma com ART entregue à administração, conforme a NBR 16280. Sem ele o porteiro é orientado a barrar a entrada de material.",
      },
      {
        titulo: "Morar durante a obra",
        texto:
          "Dá para faseá-la por ambiente, mantendo cozinha e um banheiro em uso. Custa um pouco mais de prazo e precisa ser decidido antes do cronograma, não depois.",
      },
    ],
  },
  {
    area: "Comercial",
    resumo: "Aqui o inimigo é o dia parado — e a fiscalização que impede de abrir.",
    pontos: [
      {
        titulo: "Obra fora do horário",
        texto:
          "Em shopping e galeria a obra costuma ser noturna ou de madrugada, por exigência do próprio empreendimento. Encarece a mão de obra e precisa estar no orçamento desde a primeira versão.",
      },
      {
        titulo: "O que trava o alvará",
        texto:
          "Acessibilidade pela NBR 9050, saída de emergência e projeto aprovado no corpo de bombeiros para o AVCB. Consultório ainda passa pela vigilância sanitária. É o que mais atrasa abertura — e quase nunca entra no orçamento de quem só olha acabamento.",
      },
      {
        titulo: "Loja funcionando durante a obra",
        texto:
          "Possível em parte dos casos, com isolamento e faseamento. A decisão é comercial, não técnica: comparar o custo do faseamento com o do dia fechado.",
      },
      {
        titulo: "Prazo em contrato",
        texto:
          "Quando cada dia parado tem custo, o prazo precisa ser cláusula com data — não estimativa verbal.",
      },
    ],
  },
  {
    area: "Condomínios",
    resumo: "O síndico presta contas e responde. Tudo aqui passa por documento.",
    pontos: [
      {
        titulo: "Aprovação e verba",
        texto:
          "Obra de melhoria depende de assembleia e de previsão de verba. O orçamento precisa chegar num formato que o conselho consiga comparar com outro — item a item, não valor fechado.",
      },
      {
        titulo: "Prestação de contas",
        texto:
          "Relatório de gastos por etapa, nota de cada compra e medição conferida antes do pagamento. É o que protege o síndico na prestação de contas anual.",
      },
      {
        titulo: "Manutenção não é conserto",
        texto:
          "A NBR 5674 trata de plano de manutenção preventiva, com periodicidade definida por sistema. Sai mais barato que a corretiva e é o que sustenta a garantia da construtora enquanto ela vale.",
      },
      {
        titulo: "Reforma de morador",
        texto:
          "O síndico responde se autorizar obra sem o plano da NBR 16280. Analisar esses planos antes de liberar é o que tira essa responsabilidade das costas dele.",
      },
    ],
  },
];
