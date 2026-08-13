import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq } from "@/components/site/Faq";
import { contato } from "@/config/contato";
import { proximosPassos } from "@/config/faq";
import { Seo } from "@/components/site/Seo";

const canais = [
  { icon: Mail, label: "E-mail", value: contato.email, href: `mailto:${contato.email}` },
  { icon: Phone, label: "Telefone", value: contato.telefoneExibido, href: contato.telefoneHref },
  { icon: MapPin, label: "Endereço", value: contato.endereco },
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
      title="Pronto para transformar seu"
      highlight="próximo desafio?"
      intro="Conte o que seu projeto precisa. Respondemos com clareza técnica e sem enrolação."
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
                  className="mt-2 text-lg text-primary transition-colors duration-500 hover:text-accent"
                >
                  {c.value}
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
