import energy from "@/assets/project-energy.webp";
import energySm from "@/assets/project-energy-800.webp";
import infra from "@/assets/project-infra.webp";
import infraSm from "@/assets/project-infra-800.webp";
import mining from "@/assets/project-mining.webp";
import miningSm from "@/assets/project-mining-800.webp";

/**
 * @ficticio TODOS os cases abaixo são inventados: cliente, local, período,
 * escopo e principalmente os números de resultado (18% de produtividade,
 * 45 MW, 1,2 km). São afirmações técnicas verificáveis — obra desse porte tem
 * registro público de quem executou.
 *
 * As imagens são de banco e ilustram o setor, não são obras da G2. O campo
 * `creditoImagem` existe para deixar isso explícito na interface.
 *
 * A estrutura (metadados + desafio → solução → resultado) é o padrão dos cases
 * do setor e serve de molde: o dono preenche com projetos reais, ou a página
 * vira "Capacidades" — o que a equipe sabe fazer — se ainda não houver projetos
 * entregues pela empresa.
 */
export const projetos = [
  {
    slug: "reestruturacao-cava-mineracao",
    image: mining,
    imageSm: miningSm,
    creditoImagem: "Imagem ilustrativa",
    category: "Mineração",
    title: "Reestruturação de cava em mina de grande porte",
    resumo:
      "Reorganização operacional e plano de lavra para mina de minério de ferro.",
    meta: [
      { label: "Cliente", value: "Confidencial" },
      { label: "Local", value: "Minas Gerais" },
      { label: "Período", value: "2023 — 2024" },
      { label: "Escopo", value: "Consultoria e gestão" },
    ],
    desafio:
      "A sequência de lavra vinha gerando retrabalho de transporte e ociosidade de frota, com o avanço da cava desalinhado do plano original.",
    solucao:
      "Revisão do plano de lavra de curto prazo, reorganização das frentes e implantação de rotina de acompanhamento semanal com indicadores de ciclo de transporte.",
    resultado: "Ganho de 18% em produtividade de transporte no primeiro semestre.",
  },
  {
    slug: "modernizacao-pch",
    image: energy,
    imageSm: energySm,
    creditoImagem: "Imagem ilustrativa",
    category: "Energia",
    title: "Modernização de usina hidrelétrica",
    resumo:
      "Estudo técnico e supervisão da modernização eletromecânica de uma PCH.",
    meta: [
      { label: "Cliente", value: "Confidencial" },
      { label: "Local", value: "Goiás" },
      { label: "Período", value: "2022 — 2023" },
      { label: "Escopo", value: "Viabilidade e supervisão" },
    ],
    desafio:
      "Equipamentos no fim da vida útil, com paradas não programadas crescentes e sem estudo que sustentasse a decisão entre reformar e substituir.",
    solucao:
      "Estudo técnico-econômico comparando os cenários e supervisão da execução escolhida, incluindo comissionamento assistido.",
    resultado: "45 MW de capacidade instalada recuperados, com parada única programada.",
  },
  {
    slug: "ponte-rodoviaria",
    image: infra,
    imageSm: infraSm,
    creditoImagem: "Imagem ilustrativa",
    category: "Infraestrutura",
    title: "Ponte rodoviária sobre travessia fluvial",
    resumo:
      "Gerenciamento integrado da execução, incluindo fundações em águas profundas.",
    meta: [
      { label: "Cliente", value: "Confidencial" },
      { label: "Local", value: "Bahia" },
      { label: "Período", value: "2021 — 2024" },
      { label: "Escopo", value: "Gestão e fiscalização" },
    ],
    desafio:
      "Fundações em leito de rio com janela hidrológica curta e três fornecedores atuando sem coordenação entre si.",
    solucao:
      "Gerenciamento integrado das frentes, replanejamento do cronograma em torno da janela de seca e fiscalização em campo com medição por etapa.",
    resultado: "1,2 km de extensão entregues sem acidente com afastamento.",
  },
];
