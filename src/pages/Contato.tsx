import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq } from "@/components/site/Faq";
import { contato, enderecoCompleto, socios } from "@/config/contato";
import { proximosPassos } from "@/config/faq";
import { Seo } from "@/components/site/Seo";

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

    <section className="relative bg-background py-24 md:py-32">
      <div className="container-cz">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
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

        {/* O medo silencioso de todo formulário B2B é virar alvo de ligação.
            Dizer o que acontece depois remove o atrito antes do envio. */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-3xl leading-[1.1] text-primary md:text-4xl"
          >
            O que acontece <span className="font-serif font-light italic">depois que você envia.</span>
          </motion.h2>

          <ol className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {proximosPassos.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col bg-background p-8"
              >
                <span className="font-serif text-4xl leading-none text-silver">{p.n}</span>
                <h3 className="mt-5 text-lg text-primary">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <Faq />
  </>
);

export default Contato;
