import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mainNav, navSecundaria } from "@/routes";
import { areasAtuacao } from "@/config/atuacao";
import simboloClaro from "@/assets/g2-simbolo-claro.webp";

/** Agora que o site tem hierarquia, a página interna precisa dizer onde você está. */
const Trilha = () => {
  const { pathname } = useLocation();

  // navSecundaria entra junto: a página existe e tem lugar na hierarquia, só
  // não aparece no header. Sem ela aqui, seria a única página sem trilha.
  const naNav = [...mainNav, ...navSecundaria].find((i) => i.to === pathname);
  // As páginas de área ficam um nível abaixo e não estão no menu principal:
  // sem este ramo, elas eram as únicas do site sem trilha nenhuma.
  const area = areasAtuacao.find((a) => `/atuacao/${a.slug}` === pathname);
  if (!naNav && !area) return null;

  return (
    <Breadcrumb aria-label="Trilha de navegação" className="mb-8">
      <BreadcrumbList className="text-primary-foreground/60">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="transition-colors hover:text-primary-foreground">
              Início
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {area ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/atuacao" className="transition-colors hover:text-primary-foreground">
                  Atuação
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary-foreground">{area.nome}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary-foreground">{naNav!.label}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

/**
 * Cabeçalho das páginas internas, no formato das aberturas de seção da
 * apresentação institucional: o rótulo em caixa alta, grande, na prata, e a
 * frase descritiva pequena logo abaixo.
 *
 * A hierarquia visual inverte de propósito — o maior elemento é o rótulo, não
 * o h1. É o que dá presença a uma faixa que antes ocupava pouco espaço, e é
 * como o próprio material da G2 abre cada seção. O h1 continua sendo a frase
 * descritiva, que é o que interessa para busca.
 *
 * O padding do topo compensa o header fixo.
 */
export const PageHeader = ({
  eyebrow,
  title,
  highlight,
  intro,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
}) => (
  <section className="relative overflow-hidden bg-primary pt-36 pb-16 md:pt-44 md:pb-24">
    <div className="absolute inset-0 bg-gradient-navy-radial opacity-70" />
    <div className="container-cz relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Trilha />

        <div className="flex items-start justify-between gap-10">
          <div className="min-w-0">
            <p className="font-display text-[clamp(2.25rem,8.5vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-silver">
              {eyebrow}
            </p>

            <h1 className="mt-7 max-w-3xl text-xl leading-snug text-primary-foreground md:text-2xl lg:text-3xl">
              {title}{" "}
              {highlight && (
                <span className="font-display italic text-silver-light">{highlight}</span>
              )}
            </h1>

            {intro && (
              <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70">{intro}</p>
            )}
          </div>

          {/* Como na abertura de seção do material: o símbolo ancora a direita.
              Só a partir do lg — abaixo disso ele roubaria largura do título. */}
          <img
            src={simboloClaro}
            alt=""
            aria-hidden="true"
            width={123}
            height={138}
            className="hidden w-14 shrink-0 opacity-70 lg:block"
          />
        </div>
      </motion.div>
    </div>
  </section>
);
