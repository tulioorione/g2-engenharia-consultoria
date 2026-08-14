import { socios } from "@/config/contato";

/**
 * Os NOMES e TELEFONES são reais — vêm da página 8 da apresentação
 * institucional, onde os dois sócios assinam o convite de contato.
 *
 * @ficticio O que ainda falta: formação, número de CREA e a divisão de papéis
 * entre os dois. Deixei os campos de registro zerados no mesmo padrão do resto
 * do site — registro profissional é publicamente verificável, então número
 * inventado seria pior que campo vazio.
 *
 * Sem foto: monograma. Foto de banco apresentada como sendo o sócio é
 * enganosa; a inicial some assim que as fotos reais chegarem.
 */
export const equipe = [
  {
    nome: socios[0].nome,
    cargo: "Sócio-fundador",
    formacao: "",
    crea: "CREA-MG 000.000/D",
    telefoneExibido: socios[0].telefoneExibido,
    telefoneHref: socios[0].telefoneHref,
    trajetoria:
      "Atua nas duas pontas do negócio: execução no canteiro e gerenciamento no escritório.",
  },
  {
    nome: socios[1].nome,
    cargo: "Sócio-fundador",
    formacao: "",
    crea: "CREA-MG 000.000/D",
    telefoneExibido: socios[1].telefoneExibido,
    telefoneHref: socios[1].telefoneHref,
    trajetoria:
      "Responde pelo planejamento, orçamento e controle financeiro das obras acompanhadas.",
  },
];
