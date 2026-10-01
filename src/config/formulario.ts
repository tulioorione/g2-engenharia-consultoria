/**
 * Endpoint do formulário de contato.
 *
 * Para ligar: criar a conta em formspree.io apontando para o e-mail que deve
 * receber as mensagens, copiar o ID gerado (a parte final da URL, algo como
 * `xdkoqwer`) e colocar num arquivo `.env` na raiz do projeto:
 *
 *     VITE_FORMSPREE_ID=xdkoqwer
 *
 * O ID é público por natureza — vai no bundle do navegador de qualquer forma —,
 * mas fica em variável de ambiente para trocar sem mexer no código. O `.env`
 * não é commitado.
 *
 * Enquanto estiver vazio o formulário continua funcionando e validando, mas
 * avisa na tela que o envio ainda não está ligado e oferece o WhatsApp. Melhor
 * do que engolir a mensagem de alguém em silêncio.
 */
const ID = import.meta.env.VITE_FORMSPREE_ID?.trim();

export const formularioConfigurado = Boolean(ID);
export const formularioEndpoint = ID ? `https://formspree.io/f/${ID}` : "";

/**
 * Anexo de currículo na página /trabalhe-conosco.
 *
 * O Formspree ACEITA anexo, mas só nos planos pagos — Personal, Professional
 * e Business. No plano gratuito a cota de armazenamento é 0 GB, então o campo
 * de arquivo não funciona de jeito nenhum. Limites do serviço: até 10 arquivos
 * por envio, 25 MB cada, 100 MB por requisição.
 *
 * Por isso o campo é OPCIONAL e fica DESLIGADO por padrão. Mostrar um botão de
 * anexo enquanto a conta é gratuita é a pior combinação possível: o candidato
 * escolhe o arquivo, envia, o Formspree recusa a requisição e a candidatura
 * morre. Enquanto desligado, o campo não é renderizado e o formulário envia
 * só os campos de texto — que funcionam em qualquer plano.
 *
 * Para ligar, depois de assinar um plano pago:
 *
 *     VITE_FORMSPREE_ANEXO=1
 */
export const anexoHabilitado = import.meta.env.VITE_FORMSPREE_ANEXO?.trim() === "1";

/** Limite por arquivo do Formspree. Usado na validação e no texto da tela. */
export const anexoLimiteMB = 25;
