/**
 * Fonte única dos dados de contato — usada pelo rodapé, pela página /contato e
 * pelos dados estruturados (JSON-LD).
 *
 * Os sócios e os telefones vêm da apresentação institucional da G2 (página 8):
 * são REAIS. O que ainda falta confirmar está marcado abaixo.
 */

/** Sócios, com o telefone direto de cada um — como está na apresentação. */
export const socios = [
  {
    nome: "Gabriel Imbelloni",
    telefoneExibido: "(32) 99829-0696",
    telefoneHref: "tel:+5532998290696",
    whatsapp: "https://wa.me/5532998290696",
  },
  {
    nome: "Guilherme Massucatti",
    telefoneExibido: "(32) 98464-7138",
    telefoneHref: "tel:+5532984647138",
    whatsapp: "https://wa.me/5532984647138",
  },
];

export const contato = {
  /**
   * @ficticio E-mail e domínio ainda não confirmados — a apresentação traz só
   * os telefones. Trocar assim que o domínio for registrado.
   */
  email: "contato@g2engenharia.com.br",

  /** Telefone principal: o primeiro sócio. Real. */
  telefoneExibido: socios[0].telefoneExibido,
  telefoneHref: socios[0].telefoneHref,
  telefoneE164: "+5532998290696",

  /**
   * @ficticio Endereço não confirmado. O DDD 32 é da Zona da Mata mineira
   * (Juiz de Fora e região) — NÃO é Belo Horizonte, como estava antes. A
   * cidade exata precisa vir do dono; ela define o SEO local e o JSON-LD.
   */
  endereco: {
    logradouro: "",
    cidade: "Juiz de Fora",
    uf: "MG",
    pais: "BR",
  },

  /** @ficticio CNPJ não consta na apresentação. */
  cnpj: "00.000.000/0001-00",
} as const;

/** Linha única do endereço, para exibição. Omite o logradouro enquanto vazio. */
export const enderecoCompleto = [contato.endereco.logradouro, `${contato.endereco.cidade} / ${contato.endereco.uf}`]
  .filter(Boolean)
  .join(" — ");

/** @ficticio Redes sociais não constam na apresentação. */
export const redesSociais: { label: string; href: string }[] = [];
