import { Building, Home, Store } from "lucide-react";

/**
 * Áreas de atuação REAIS, da apresentação institucional (página 7).
 *
 * Substituem os oito "setores" que o site listava antes (mineração, energia,
 * saneamento, agronegócio…). Nenhum deles descreve o que a G2 faz: a empresa
 * atende obra predial e reforma, não infraestrutura de grande porte.
 */
export const areasAtuacao = [
  {
    icon: Home,
    nome: "Residencial",
    desc: "Reforma e construção para quem mora — do apartamento à casa, com laudo técnico quando o caso exige.",
    itens: ["Reformas de apartamentos", "Construção de casas", "Laudos técnicos"],
  },
  {
    icon: Store,
    nome: "Comercial",
    desc: "Adequação de ponto comercial com prazo curto e escopo fechado, incluindo entrega chave na mão.",
    itens: ["Adequação de lojas", "Escritórios e consultórios", "Entrega turnkey (chave na mão)"],
  },
  {
    icon: Building,
    nome: "Condomínios",
    desc: "Manutenção predial e obras de melhoria, com prestação de contas para síndico e conselho.",
    itens: ["Manutenção predial", "Gestão de obras de melhoria", "Relatórios para prestação de contas"],
  },
];

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
