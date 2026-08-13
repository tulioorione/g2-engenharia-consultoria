# Conteúdo de protótipo — leia antes de publicar

Este site está em fase de **protótipo para apresentação ao dono**. Parte do
conteúdo é inventado de propósito, para mostrar a forma antes de ter o dado real.

## Como encontrar tudo que é inventado

Todo conteúdo fictício está marcado no código com o token `@ficticio`:

```sh
grep -rn "@ficticio" src/
```

Cada marcação diz **o que** é inventado e **o que precisa ser confirmado**.

## Antes de publicar em domínio público

1. Rodar o `grep` acima e zerar a lista — cada item vira dado real ou sai do site.
2. Conferir o inventário das 17 afirmações levantadas na auditoria de conteúdo.
3. Preencher `src/config/contato.ts` (telefone, endereço, CNPJ) e
   `src/config/site.ts` (domínio).

**Enquanto houver `@ficticio` no código, o site não deve ir ao ar em domínio
público nem ser indexado.** Depoimentos com pessoas e empresas nomeadas são o
item mais sensível: são terceiros identificáveis.
