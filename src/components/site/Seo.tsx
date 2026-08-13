import { Head } from "vite-react-ssg";
import { SITE_URL } from "@/config/site";

/**
 * Título, descrição e canonical por rota. Sem isto, cada página do site
 * herdaria a meta da home — e o preview de link no WhatsApp e no LinkedIn
 * mostraria sempre a mesma coisa, porque esses crawlers não rodam JS.
 */
export const Seo = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="G2 Engenharia e Consultoria" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};
