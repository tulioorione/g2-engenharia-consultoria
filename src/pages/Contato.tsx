import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { contato } from "@/config/contato";

const canais = [
  { icon: Mail, label: "E-mail", value: contato.email, href: `mailto:${contato.email}` },
  { icon: Phone, label: "Telefone", value: contato.telefoneExibido, href: contato.telefoneHref },
  { icon: MapPin, label: "Endereço", value: contato.endereco },
];

const Contato = () => (
  <>
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
      </div>
    </section>
  </>
);

export default Contato;
