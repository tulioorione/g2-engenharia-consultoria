/**
 * Fonte única dos dados de contato — usada pelo rodapé e pela página /contato.
 *
 * ⚠️ ATENÇÃO: os valores abaixo ainda são PLACEHOLDERS herdados do gerador.
 * O telefone não é discável e o CNPJ é zerado. Trocar por dados reais antes
 * de publicar (itens 13 a 16 da auditoria de conteúdo).
 */
export const contato = {
  email: "contato@g2engenharia.com.br",
  telefoneExibido: "+55 (31) 0000-0000",
  telefoneHref: "tel:+553100000000",
  endereco: "Av. Engenharia, 1000 — Belo Horizonte / MG",
  cnpj: "00.000.000/0001-00",
} as const;

/** Redes sociais: só entram no rodapé as que tiverem URL preenchida. */
export const redesSociais: { label: string; href: string }[] = [
  // { label: "LinkedIn", href: "https://linkedin.com/company/..." },
  // { label: "Instagram", href: "https://instagram.com/..." },
];
