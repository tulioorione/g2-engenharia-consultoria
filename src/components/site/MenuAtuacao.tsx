import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { areasAtuacao } from "@/config/atuacao";

/**
 * Submenu de "Atuação".
 *
 * Fica sob Atuação, e não sob Serviços, porque quem se identifica sozinho é o
 * comprador — ninguém procura "cronograma físico-financeiro", mas alguém
 * procura "reforma de apartamento". E porque cada item aqui leva a uma página
 * de verdade: menu com submenu promete subpágina, e prometer sem entregar é o
 * mesmo erro do "Saiba mais" que levava ao contato.
 *
 * Abre no hover e no foco, sem JavaScript. O chevron existe para avisar que há
 * algo ali — sem ele, ou a pessoa descobre por acidente ou não descobre.
 */
export const MenuAtuacao = () => {
  return (
    <div className="group relative">
      <NavLink
        to="/atuacao"
        className="nav-link inline-flex items-center gap-1.5 text-primary-foreground/90 hover:text-primary-foreground"
        activeClassName="text-primary-foreground after:w-full"
      >
        Atuação
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
          strokeWidth={2}
          aria-hidden="true"
        />
      </NavLink>

      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-5 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="w-[22rem] border border-silver/15 bg-primary-deep p-3 shadow-elevated">
          {areasAtuacao.map((a) => (
            <li key={a.slug}>
              <Link
                to={`/atuacao/${a.slug}`}
                className="flex items-start gap-4 p-4 transition-colors duration-300 hover:bg-primary-steel"
              >
                <a.icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-silver"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-sm font-medium text-primary-foreground">
                    {a.nome}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-primary-foreground/55">
                    {a.desc}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
