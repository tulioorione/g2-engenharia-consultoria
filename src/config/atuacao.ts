import { Building, Home, Store } from "lucide-react";

/**
 * Áreas de atuação REAIS, da apresentação institucional (página 7).
 *
 * Substituem os oito "setores" que o site listava antes (mineração, energia,
 * saneamento, agronegócio…). Nenhum deles descreve o que a G2 faz: a empresa
 * atende obra predial e reforma, não infraestrutura de grande porte.
 */
/**
 * Cada área fala com um comprador diferente, e o medo de cada um é outro:
 * quem mora teme a obra que não acaba; quem tem loja teme o dia parado; o
 * síndico teme responder pessoalmente por obra irregular. Por isso a `dor`
 * de cada bloco é escrita para uma pessoa só, não para as três.
 */
export const areasAtuacao = [
  {
    icon: Home,
    nome: "Residencial",
    dor: "Obra que não acaba, orçamento que dobra no meio do caminho e ninguém para responder.",
    desc: "Reforma e construção com escopo fechado e um responsável técnico do começo ao fim.",
    itens: [
      "Reformas de apartamentos",
      "Construção de casas",
      "Laudo de reforma (NBR 16280)",
      "Laudos técnicos",
    ],
  },
  {
    icon: Store,
    nome: "Comercial",
    dor: "Loja fechada é faturamento parado. Cada dia a mais de obra sai do caixa.",
    desc: "Adequação de ponto comercial com prazo assumido em contrato e entrega chave na mão.",
    itens: [
      "Adequação de lojas",
      "Escritórios e consultórios",
      "Entrega turnkey (chave na mão)",
      "Obra em horário alternativo",
    ],
  },
  {
    icon: Building,
    nome: "Condomínios",
    dor: "O síndico responde pessoalmente por obra irregular no prédio — inclusive pela do morador.",
    desc: "Manutenção predial e obras de melhoria, com a documentação que o conselho vai cobrar.",
    itens: [
      "Manutenção predial (NBR 5674)",
      "Análise de plano de reforma de morador",
      "Gestão de obras de melhoria",
      "Relatórios para prestação de contas",
    ],
  },
];

/**
 * @ficticio Precisa de confirmação dos sócios antes de ir ao ar.
 *
 * A NBR 16280 exige plano de reforma com ART, assinado por profissional
 * habilitado e entregue ao síndico ANTES de qualquer reforma em condomínio.
 * A apresentação da G2 já lista "laudos técnicos" na frente residencial, e o
 * laudo de reforma é exatamente isso — mas escrito de um jeito que ninguém
 * procura: quem vai reformar digita "laudo de reforma NBR 16280".
 *
 * Confirmar com os sócios: (1) emitem esse laudo? (2) qual o prazo típico?
 * Só depois disso o bloco pode ir ao ar.
 */
export const laudoReforma = {
  titulo: "Vai reformar em condomínio?",
  norma: "NBR 16280",
  texto:
    "A norma exige um plano de reforma com ART, assinado por profissional habilitado e entregue ao síndico antes de a obra começar. Sem ele, o síndico é obrigado a barrar o serviço — e responde se autorizar mesmo assim.",
  reforco: "Emitimos o laudo e conversamos com a administração do prédio pelo caminho.",
};

/**
 * O problema que a G2 diz resolver, na página 3 da apresentação. É o melhor
 * texto do material: nomeia a dor do cliente em vez de elogiar a empresa.
 */
export const desafioCliente = {
  problema: "Obras sem controle, prestadores de serviço desqualificados, estouro de orçamento e falta de transparência.",
  solucao:
    "Centralizamos a responsabilidade. Seja para instalar um equipamento ou gerenciar uma construção inteira, a G2 oferece controle técnico e prestação de contas.",
};

/** "Por que escolher a G2", página 6 da apresentação. */
export const diferenciais = [
  {
    titulo: "Visão 360º",
    desc: "Entendemos tanto da execução, no chão de obra, quanto do planejamento, no escritório. Isso evita projeto impossível de executar e execução que foge do projeto.",
  },
  {
    titulo: "Transparência",
    desc: "O cliente sabe exatamente onde cada centavo está sendo investido.",
  },
  {
    titulo: "Agilidade",
    desc: "Resolução rápida de problemas técnicos no canteiro.",
  },
  {
    titulo: "Foco no resultado",
    desc: "Trabalhamos para economizar o dinheiro do cliente através da eficiência.",
  },
];

/** Missão e apresentação, página 2. */
export const institucional = {
  missao:
    "Garantir que projetos saiam do papel com qualidade técnica, dentro do prazo e, principalmente, dentro do orçamento.",
  quemSomos:
    "Somos uma empresa dedicada a oferecer soluções integradas de engenharia. Nascemos da necessidade de unir a excelência técnica na execução de serviços com a inteligência no gerenciamento de obras.",
  assinatura: "Engenharia levada a sério, do parafuso ao cronograma.",
};
