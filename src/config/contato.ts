/**
 * Fonte única dos dados de contato — usada pelo rodapé, pela página /contato e
 * pelos dados estruturados (JSON-LD) lidos pelo Google.
 *
 * @ficticio Os valores abaixo ainda são PLACEHOLDERS herdados do gerador. O
 * telefone não é discável e o CNPJ é zerado. Trocar por dados reais antes de
 * publicar (itens 13 a 16 da auditoria de conteúdo).
 *
 * O endereço está quebrado em partes porque o JSON-LD precisa de cidade, UF e
 * país separados — é isso que alimenta o painel do Google com a localização.
 */
export const contato = {
  email: "contato@g2engenharia.com.br",
  telefoneExibido: "+55 (31) 0000-0000",
  telefoneHref: "tel:+553100000000",
  /** Formato E.164, exigido pelo schema.org. */
  telefoneE164: "+553100000000",
  endereco: {
    logradouro: "Av. Engenharia, 1000",
    cidade: "Belo Horizonte",
    uf: "MG",
    pais: "BR",
  },
  cnpj: "00.000.000/0001-00",
} as const;

/** Linha única do endereço, para exibição. */
export const enderecoCompleto = `${contato.endereco.logradouro} — ${contato.endereco.cidade} / ${contato.endereco.uf}`;

/** Redes sociais: só entram no rodapé as que tiverem URL preenchida. */
export const redesSociais: { label: string; href: string }[] = [
  // { label: "LinkedIn", href: "https://linkedin.com/company/..." },
  // { label: "Instagram", href: "https://instagram.com/..." },
];
