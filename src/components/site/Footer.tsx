export const Footer = () => {
  return (
    <footer className="bg-[hsl(213_55%_7%)] text-primary-foreground">
      <div className="container-cz py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center border border-silver/40 bg-gradient-silver text-primary font-serif text-lg">
                CZ
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">CZ Engenharia</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-silver">Consultoria</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Engenharia e consultoria com a precisão que seu projeto exige.
            </p>
          </div>

          <FooterCol
            title="Serviços"
            links={["Consultoria", "Gestão de Projetos", "Estudos de Viabilidade", "Supervisão de Obras"]}
          />
          <FooterCol
            title="Institucional"
            links={["Sobre", "Projetos", "Setores", "Carreiras"]}
          />
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-silver mb-5">Contato</div>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Av. Engenharia, 1000 — Belo Horizonte / MG</li>
              <li><a className="hover:text-accent transition-colors" href="tel:+553100000000">+55 (31) 0000-0000</a></li>
              <li><a className="hover:text-accent transition-colors" href="mailto:contato@czengenharia.com.br">contato@czengenharia.com.br</a></li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="hover:text-accent transition-colors text-xs uppercase tracking-[0.15em]">LinkedIn</a>
                <a href="#" className="hover:text-accent transition-colors text-xs uppercase tracking-[0.15em]">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-silver/10 pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} CZ Engenharia e Consultoria · CNPJ 00.000.000/0001-00</div>
          <div>Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <div className="text-xs uppercase tracking-[0.2em] text-silver mb-5">{title}</div>
    <ul className="space-y-3 text-sm text-primary-foreground/70">
      {links.map((l) => (
        <li key={l}>
          <a href="#" className="hover:text-accent transition-colors">{l}</a>
        </li>
      ))}
    </ul>
  </div>
);
