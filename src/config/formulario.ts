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
