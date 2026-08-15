import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq } from "@/components/site/Faq";
import { FormularioContato } from "@/components/site/FormularioContato";
import { contato, enderecoCompleto, socios } from "@/config/contato";
import { proximosPassos } from "@/config/faq";
import { Seo } from "@/components/site/Seo";
import acordo from "@/assets/acordo.webp";
import acordoSm from "@/assets/acordo-800.webp";

/** Os sócios atendem direto — é assim que a apresentação da G2 encerra. */
const canais = [
  ...socios.map((s) => ({
    icon: Phone,
    label: s.nome,
    value: s.telefoneExibido,
    href: s.whatsapp,
    externo: true,
  })),
  { icon: Mail, label: "E-mail", value: contato.email, href: `mailto:${contato.email}`, externo: false },
  { icon: MapPin, label: "Onde estamos", value: enderecoCompleto, href: undefined, externo: false },
];

const Contato = () => (
  <>
    <Seo
      title="Contato — Fale com a G2 Engenharia"
      description="Conte o que seu projeto precisa. Respondemos com clareza técnica e sem enrolação."
      path="/contato"
    />
    <PageHeader
      eyebrow="Vamos conversar"
      title="Vamos tirar seu projeto"
      highlight="do papel?"
      intro="Fale direto com um dos sócios. Conte o que sua obra precisa — sem custo pela primeira conversa."
    />

    <section className="relative bg-background secao">
      <div className="container-cz">
        {/* São 4 canais (os dois sócios, e-mail e endereço). Em 3 colunas o
            quarto ficava sozinho numa segunda linha. */}
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {canais.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col bg-background p-8"
            >
              <c.icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {c.label}
              </div>
              {c.href ? (
                <a
                  href={c.href}
                  {...(c.externo && { target: "_blank", rel: "noreferrer noopener" })}
                  className="mt-2 text-lg text-primary transition-colors duration-500 hover:text-accent"
                >
                  {c.value}
                  {c.externo && (
                    <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      WhatsApp
                    </span>
                  )}
                </a>
              ) : (
                <div className="mt-2 text-lg text-primary">{c.value}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* O formulário fica ao lado dos próximos passos de propósito: o medo
            silencioso de todo contato B2B é virar alvo de ligação, e ler o que
            vai acontecer enquanto preenche é o que remove esse atrito. */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-xl text-3xl leading-[1.1] text-primary md:text-4xl">
              Conte o que sua obra <span className="font-display italic">precisa.</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Quanto mais você contar aqui, mais perto do orçamento já vem a primeira resposta.
            </p>
            <div className="mt-10">
              <FormularioContato />
            </div>
          </motion.div>

          <div className="lg:pt-4">
            <h2 className="text-2xl leading-tight text-primary">
              O que acontece <span className="font-display italic">depois.</span>
            </h2>
            <ol className="mt-8 space-y-8 border-l border-border pl-6">
              {proximosPassos.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <span className="font-display text-3xl leading-none text-silver">{p.n}</span>
                  <h3 className="mt-3 text-lg text-primary">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 aspect-[3/1] overflow-hidden bg-muted"
          >
            <img
              src={acordo}
              srcSet={`${acordoSm} 800w, ${acordo} 1600w`}
              sizes="100vw"
              alt="Aperto de mãos sobre a planta de um projeto, ao lado do capacete de obra"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <Faq />
  </>
);

export default Contato;
