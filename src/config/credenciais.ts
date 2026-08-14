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
    titulo: "Conformidade",
    valor: "NRs e NBRs",
    desc: "Atuação conforme as normas regulamentadoras de segurança e as NBRs aplicáveis a cada obra.",
  },
];

/**
 * @ficticio A área de atendimento precisa ser confirmada. Ela muda quem se dá
 * ao trabalho de entrar em contato: obra de mineração e infraestrutura
 * raramente fica perto de um escritório.
 */
export const atuacao = {
  base: "Belo Horizonte / MG",
  alcance: "Atendimento em todo o território nacional, com equipe mobilizada para o local do projeto.",
  estados: ["Minas Gerais", "Goiás", "Bahia", "Espírito Santo", "São Paulo"],
};
