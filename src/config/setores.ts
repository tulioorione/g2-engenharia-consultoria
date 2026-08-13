import {
  Building2,
  Droplets,
  Factory,
  Pickaxe,
  TrainTrack,
  Truck,
  Wheat,
  Zap,
} from "lucide-react";

/**
 * @ficticio As frases abaixo descrevem atuação que a G2 ainda não confirmou ter.
 * Oito etiquetas sem conteúdo não provam nada a quem é do setor — mas a lista
 * também não pode afirmar experiência que não existe. O dono precisa dizer em
 * quais destes setores a equipe realmente atuou; os demais saem da lista.
 */
export const setores = [
  {
    icon: Pickaxe,
    name: "Mineração",
    desc: "Plano de lavra, reestruturação de cava e supervisão de barragens.",
  },
  {
    icon: Building2,
    name: "Construção Civil",
    desc: "Gerenciamento de obra e fiscalização independente para o contratante.",
  },
  {
    icon: Factory,
    name: "Industrial",
    desc: "Implantação e ampliação de plantas, com comissionamento assistido.",
  },
  {
    icon: Zap,
    name: "Energia",
    desc: "Viabilidade e supervisão de PCHs, subestações e linhas de transmissão.",
  },
  {
    icon: TrainTrack,
    name: "Infraestrutura",
    desc: "Obras de arte especiais, terraplenagem e pavimentação.",
  },
  {
    icon: Droplets,
    name: "Saneamento",
    desc: "Estações de tratamento, adutoras e redes coletoras.",
  },
  {
    icon: Truck,
    name: "Logística",
    desc: "Pátios, terminais de carga e acessos rodoferroviários.",
  },
  {
    icon: Wheat,
    name: "Agronegócio",
    desc: "Armazenagem, silos e estruturas de beneficiamento.",
  },
];
