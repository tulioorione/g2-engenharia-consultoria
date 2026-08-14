import { Link } from "react-router-dom";
import { contato, enderecoCompleto, redesSociais } from "@/config/contato";
import { servicos } from "@/config/servicos";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(213_55%_7%)] text-primary-foreground">
      <div className="container-cz py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2" aria-label="G2 Engenharia — início">
              <div className="flex h-9 w-9 items-center justify-center border border-silver/40 bg-gradient-silver text-primary font-serif text-lg">
                G2
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">G2 Engenharia</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-silver">Consultoria</div>
              </div>
            </Link>
            <p className="mt-6 text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Engenharia e consultoria com a precisão que seu projeto exige.
            </p>
          </div>

          {/* Os serviços vêm do mesmo array que a seção de serviços, para não
              divergirem quando um for adicionado ou renomeado. */}
          <FooterCol
            title="Serviços"
            /* São 7 serviços; no rodapé cabem os 4 principais. */
            links={servicos.slice(0, 4).map((s) => ({ label: s.title, to: "/servicos" }))}
          />
          <FooterCol
            title="Institucional"
            links={[
              { label: "Sobre", to: "/sobre" },
              { label: "Atuação", to: "/atuacao" },
              { label: "Contato", to: "/contato" },
            ]}
          />
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-silver mb-5">Contato</div>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>{enderecoCompleto}</li>
              <li>
                <a className="hover:text-accent-on-dark transition-colors" href={contato.telefoneHref}>
                  {contato.telefoneExibido}
                </a>
              </li>
              <li>
                <a className="hover:text-accent-on-dark transition-colors" href={`mailto:${contato.email}`}>
                  {contato.email}
                </a>
              </li>
              {redesSociais.length > 0 && (
                <li className="flex gap-4 pt-2">
                  {redesSociais.map((r) => (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-accent-on-dark transition-colors text-xs uppercase tracking-[0.15em]"
                    >
                      {r.label}
                    </a>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-silver/10 pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-primary-foreground/50">
          <div>
            © {new Date().getFullYear()} G2 Engenharia e Consultoria · CNPJ {contato.cnpj}
          </div>
          <div>Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) => (
  <div>
    <div className="text-xs uppercase tracking-[0.2em] text-silver mb-5">{title}</div>
    <ul className="space-y-3 text-sm text-primary-foreground/70">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.to} className="hover:text-accent-on-dark transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
