/**
 * As falhas clássicas de uma obra mal conduzida.
 *
 * O `sintoma` é escrito na voz de quem contratou — é a frase que a pessoa
 * realmente diz depois que o problema acontece. A `causa` é técnica. O que
 * `evita` é a prática que impede aquilo.
 *
 * Sintoma e causa são conhecimento de engenharia, não afirmação sobre a G2.
 *
 * @ficticio A coluna "o que evita" descreve o método de trabalho da G2 e vira
 * compromisso comercial — precisa do aval dos sócios, item por item. As
 * práticas listadas são as usuais do setor, mas quem promete é a empresa.
 */
export const riscos = [
  {
    sintoma: "O orçamento era 80 mil e a obra fechou em 110.",
    causa:
      "Orçamento feito por estimativa, no olho, sem levantar quantidade item a item. O número inicial nunca foi um orçamento — era um palpite.",
    evita:
      "Levantamento quantitativo detalhado antes da assinatura, com composição de custo por serviço.",
  },
  {
    sintoma: "Achei que a pintura estava incluída.",
    causa:
      "Escopo escrito só pelo que está dentro, nunca pelo que está fora. Toda omissão vira aditivo — e discussão.",
    evita:
      "Escopo com a lista do que NÃO está incluso, escrita antes de começar.",
  },
  {
    sintoma: "O pedreiro sumiu no meio da obra.",
    causa:
      "Equipe contratada na indicação, sem contrato, sem prazo acordado e sem retenção. Quando aparece serviço melhor, a obra para.",
    evita:
      "Contrato com prazo, escopo e retenção por etapa. Equipe própria ou fornecedor com vínculo formal.",
  },
  {
    sintoma: "Atrasou duas semanas por causa da chuva.",
    causa:
      "Cronograma montado no melhor cenário, sem folga para chuva, feriado, atraso de material ou autorização do condomínio. Um atraso empurra todos os outros.",
    evita:
      "Cronograma físico-financeiro com folga prevista e caminho crítico identificado, para saber o que realmente atrasa a entrega.",
  },
  {
    sintoma: "Paguei a etapa e depois vi que faltava serviço.",
    causa:
      "Medição paga pela palavra de quem executou, sem conferência em campo. O dinheiro acaba antes da obra.",
    evita:
      "Medição conferida no local antes de liberar o pagamento, com registro fotográfico do que foi executado.",
  },
  {
    sintoma: "Comprei material errado e sobrou meia obra de piso.",
    causa:
      "Compra feita na urgência, no balcão, sem cotação e sem quantitativo. Paga-se mais caro e ainda sobra.",
    evita:
      "Cotação com pelo menos três fornecedores e cronograma de compras amarrado às etapas da obra.",
  },
  {
    sintoma: "O síndico embargou a obra na segunda semana.",
    causa:
      "Reforma iniciada sem o plano exigido pela NBR 16280. O síndico é obrigado a barrar — e responde se deixar seguir.",
    evita:
      "Plano de reforma com ART entregue à administração antes de qualquer material entrar no prédio.",
  },
];
