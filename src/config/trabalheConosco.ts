import { ClipboardCheck, GraduationCap, HardHat, ShieldCheck, Users } from "lucide-react";

/**
 * Conteúdo da página /trabalhe-conosco.
 *
 * A página é um BANCO DE TALENTOS, não uma lista de vagas. A decisão é
 * deliberada e está no PLANO.md: "rota vazia é pior que rota ausente". Uma
 * empresa entrando no mercado não tem fluxo de vagas para manter uma listagem
 * viva — e vaga fechada que fica no ar é pior que nenhuma vaga, porque o
 * candidato se inscreve em algo que não existe. Candidatura espontânea vale
 * igual com zero ou com cinco vagas abertas, e nunca envelhece.
 *
 * O argumento de recrutamento NÃO é inventado: "equipe capacitada, treinada e
 * regularizada diante de todas as normas legais" é declaração da própria
 * apresentação institucional (página 4) e já vive em `servicos.ts` como
 * `diferencialEquipe`. Na construção civil a informalidade é a regra — para
 * quem está do outro lado, contratação registrada é promessa concreta, não
 * frase de efeito de RH. É nisso que a página se sustenta.
 */

/**
 * As frentes são as mesmas duas que estruturam o site inteiro (execução no
 * canteiro / gestão no escritório), porque são a divisão real da empresa. Não
 * são cargos: cargo exigiria vaga aberta, e não há. São áreas de experiência,
 * para a pessoa se reconhecer em uma delas — o mesmo mecanismo das três áreas
 * de atuação, que faz o cliente se reconhecer antes de seguir.
 */
export const frentes = [
  {
    icon: HardHat,
    nome: "Execução e instalações",
    desc: "Quem trabalha no canteiro, com a mão na obra e responsabilidade pelo que entrega.",
    experiencias: [
      "Alvenaria, acabamentos finos e pintura",
      "Serviços estruturais — forma, armação e concreto",
      "Manutenção predial preventiva e corretiva",
      "Encarregado e mestre de obras",
    ],
  },
  {
    icon: ClipboardCheck,
    nome: "Consultoria e gestão",
    desc: "Quem trabalha no escritório, para a obra não fugir do prazo nem do orçamento.",
    experiencias: [
      "Orçamento e levantamento quantitativo",
      "Acompanhamento técnico e fiscalização de qualidade",
      "Controle de caixa, compras e pagamentos",
      "Cronograma físico-financeiro",
    ],
  },
];

/**
 * Três itens, e só três, porque são os três que a apresentação sustenta.
 *
 * Deixei de fora toda a lista habitual de benefício (plano, VR, home office):
 * nada disso foi confirmado, e benefício inventado numa página de vaga é a
 * mentira que o candidato descobre na primeira conversa. Três promessas
 * verdadeiras valem mais que seis com metade marcada como fictícia.
 */
export const oQueOferecemos = [
  {
    icon: ShieldCheck,
    titulo: "Contratação regularizada",
    desc: "Registro em dia e as obrigações legais cumpridas. A apresentação da G2 declara equipe regularizada diante de todas as normas — isso vale para quem assina o contrato de trabalho também.",
  },
  {
    icon: GraduationCap,
    titulo: "Treinamento",
    desc: "Equipe capacitada e treinada é o diferencial que a empresa declara ao cliente. Quem entra é treinado para sustentar essa afirmação, não para suprir número.",
  },
  {
    icon: Users,
    titulo: "As duas pontas do negócio",
    desc: "Empresa enxuta, com os sócios na obra e no escritório. Quem entra vê o quantitativo virar parede e a parede virar medição — aprendizado que estrutura grande fatia em departamento.",
  },
];

/**
 * @ficticio O processo abaixo é uma proposta de forma, não um processo
 * confirmado pelos sócios. Precisa de sinal verde antes de ir ao ar: promete
 * um comportamento da empresa para um terceiro ("um dos sócios conversa com
 * você"), e promessa de processo que não se cumpre queima a reputação de
 * empregador. Se o processo real for outro, troque o texto; se não houver
 * processo definido, o bloco sai.
 */
export const comoFunciona = [
  {
    n: "01",
    titulo: "Você manda sua experiência",
    desc: "Pelo formulário abaixo. Não precisa de currículo formatado — contar onde trabalhou e o que fazia já basta.",
  },
  {
    n: "02",
    titulo: "Conversa com um dos sócios",
    desc: "Sem triagem automática e sem teste eliminatório antes de você falar com alguém. A empresa é pequena o suficiente para isso.",
  },
  {
    n: "03",
    titulo: "Chamamos quando a frente abre",
    desc: "Se não houver frente agora, seu contato fica no banco e você é procurado quando houver. Não vamos fazer você competir por uma vaga que não existe.",
  },
];

/**
 * @ficticio A ausência de vaga aberta precisa ser confirmada pelos sócios —
 * é o estado presumido de uma empresa entrando no mercado, não um fato
 * verificado. Se houver vaga aberta, este aviso sai e entra a vaga.
 *
 * O aviso existe porque é a primeira pergunta de quem abre a página, e
 * responder antes de ser perguntado é o que evita a candidatura frustrada.
 */
export const avisoVagas =
  "Não temos vaga publicada neste momento. Ainda assim, queremos conhecer quem trabalha bem — é assim que montamos equipe antes de precisar.";

/** As áreas que o formulário oferece, derivadas das frentes para não divergirem. */
export const areasDeInteresse = [...frentes.map((f) => f.nome), "Ainda não sei / outra área"];
