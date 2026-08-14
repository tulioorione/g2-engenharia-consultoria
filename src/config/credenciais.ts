/**
 * @ficticio Nenhuma credencial abaixo foi confirmada.
 *
 * Números de registro e apólice ficam zerados de propósito, no mesmo padrão do
 * CNPJ e do CREA da equipe: são dados publicamente verificáveis, então número
 * inventado é pior que campo em branco — e o zero é o sinal visível de maquete.
 *
 * A ISO 9001 é o item mais sensível da lista (auditoria de conteúdo, item 11):
 * certificação é emitida por organismo acreditado e cliente grande pede o
 * certificado na habilitação. Se não houver certificado emitido, o item sai —
 * ou vira "em processo de certificação", se for o caso.
 */
export const credenciais = [
  {
    titulo: "Registro no CREA",
    valor: "CREA-MG 000000",
    desc: "Pessoa jurídica com registro ativo e responsável técnico designado.",
  },
  {
    titulo: "ART por projeto",
    valor: "Em todo contrato",
    desc: "Anotação de Responsabilidade Técnica emitida para cada escopo assumido.",
  },
  {
    titulo: "Responsabilidade civil",
    valor: "Apólice 000000",
    desc: "Seguro de responsabilidade civil profissional para erros e omissões de projeto.",
  },
  {
    titulo: "Equipe regularizada",
    valor: "Normas legais",
    desc: "Equipe capacitada, treinada e regularizada diante de todas as normas legais — como declara a apresentação institucional da G2.",
  },
];

/**
 * @ficticio A área de atendimento precisa ser confirmada. O DDD 32 dos sócios
 * é da Zona da Mata mineira, então parti de Juiz de Fora — mas o DDD cobre
 * várias cidades e o raio de atendimento é decisão comercial, não dedução.
 */
export const atuacao = {
  base: "Juiz de Fora / MG",
  alcance: "Atendimento em Juiz de Fora e região da Zona da Mata mineira.",
  estados: ["Juiz de Fora", "Zona da Mata", "Minas Gerais"],
};
