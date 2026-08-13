# G2 Engenharia e Consultoria

Crie um site institucional premium para "G2 Engenharia e Consultoria", uma empresa brasileira que oferece serviços de engenharia e consultoria. O tagline da empresa é: "Transformando desafios em resultados concretos."

=== REFERÊNCIA VISUAL PRINCIPAL ===

Use como referência estrutural o site da Vale (vale.com/pt) — site institucional sério, confiável, com navegação tradicional e fotografia real de operações. Porém, eleve visualmente com motion graphics, scrollytelling, transições suaves e tipografia mais refinada. O objetivo é parecer uma "Vale turbinada" — sério o suficiente para um cliente de engenharia confiar, moderno o suficiente para impressionar.

NÃO use: cursores customizados chamativos, ilustrações 3D futuristas, cores neon, gradientes psicodélicos, emojis, scroll invertido, ou qualquer elemento "startup de tecnologia". A estética precisa ser corporativa-sofisticada, não experimental.

=== IDENTIDADE VISUAL ===

PALETA DE CORES (extraída da logo da empresa):

- Azul marinho profundo (primária): #0D1B2A a #1B2A3F (usar como fundo dominante em seções escuras)

- Azul aço médio (secundária): #2C3E50 a #34495E

- Prata/aço metalizado (destaque): #B8C5D0 a #D4DCE4 (para detalhes, linhas, ícones)

- Branco off-white (texto sobre escuro): #F5F7FA

- Cinza carvão (texto sobre claro): #1A1A1A

- Um azul ciano sutil para hover/CTAs ativos: #4A90B8

Utilize bastante o contraste entre seções escuras (azul marinho) e seções claras (off-white) para criar ritmo visual conforme o scroll.

TIPOGRAFIA:

- Títulos: use uma fonte sans-serif moderna e confiante como "Inter", "Satoshi" ou "Manrope" em pesos 600-700, com letter-spacing ligeiramente negativo (-0.02em) para títulos grandes

- Corpo de texto: mesma família em peso 400, line-height 1.6

- Considere usar uma serif sutil ("Fraunces" ou "Instrument Serif") apenas para números grandes ou citações de destaque, criando contraste editorial

=== ESTRUTURA DO SITE (ordem das seções) ===

1. HEADER FIXO (fica no topo ao rolar)

- Logo G2 à esquerda

- Menu central: Home | Sobre | Serviços | Projetos | Setores | Contato

- Botão CTA à direita: "Solicitar Orçamento" (estilo outline, discreto)

- Background com leve transparência e blur (glassmorphism sutil) ao rolar

- Ao rolar para baixo, o header diminui ligeiramente de altura

2. HERO (primeira dobra)

- Ocupa 100vh

- Background: vídeo em loop silenciado de operação de engenharia (drone sobrevoando obra, timelapse de construção, trabalhadores de capacete em campo) com overlay azul marinho semi-transparente para garantir legibilidade

- Fallback: imagem fixa de alta qualidade caso o vídeo não carregue

- Texto centralizado ou alinhado à esquerda:

  - Título grande (72-96px em desktop): "Transformando desafios em resultados concretos."

  - Subtítulo (18-20px): "Soluções em engenharia e consultoria com a precisão que seu projeto exige."

  - Dois CTAs: "Conheça nossos serviços" (primário, preenchido) e "Fale com um especialista" (secundário, outline)

- Animação de entrada: texto sobe suavemente com fade-in escalonado (stagger) ao carregar a página

- Indicador de scroll discreto na parte inferior (seta com animação de bounce sutil)

3. BLOCO "QUEM SOMOS" (seção clara)

- Layout em duas colunas no desktop, empilhado no mobile

- Coluna esquerda: título curto "Engenharia que resolve." + parágrafo descritivo de 3-4 linhas sobre a empresa

- Coluna direita: imagem profissional (time em campo ou detalhe técnico)

- Ao entrar em tela, o texto e imagem fazem fade-in com leve slide horizontal

4. SEÇÃO "NOSSOS SERVIÇOS" (seção escura, azul marinho)

- Título da seção: "O que fazemos"

- Grid de 4 cards de serviços. Sugestão de serviços (o usuário pode ajustar):

  - Consultoria em Engenharia

  - Gestão de Projetos

  - Estudos de Viabilidade

  - Supervisão de Obras

- Cada card: ícone de linha fina (não preenchido), título, descrição curta, link "Saiba mais →"

- Efeito hover: o card inteiro sobe levemente (translateY -4px), a borda ganha brilho prateado, e o ícone faz uma micro-animação (rotação ou desenho de linha)

5. SEÇÃO "COMO TRABALHAMOS" — SCROLLYTELLING (destaque do site)

- Seção sticky (posição fixa) enquanto o usuário rola

- Background escuro com uma linha vertical prateada no centro (ou do lado) que vai se "desenhando" conforme o scroll avança

- 4 etapas que aparecem sequencialmente ao rolar:

  1. Diagnóstico

  2. Planejamento

  3. Execução

  4. Entrega

- Cada etapa: número grande em tipografia serif (01, 02, 03, 04), título, descrição, e um ícone SVG que se desenha (stroke-dasharray animation) quando entra em tela

- Use intersection observer para disparar as animações

- Essa é a seção mais importante do site — capricha na suavidade das transições

6. SEÇÃO DE NÚMEROS (contadores animados)

- Fundo claro com detalhes sutis em prata

- 4 contadores em linha: "+150 Projetos Entregues" | "+20 Anos de Experiência" | "+50 Clientes Atendidos" | "100% Comprometimento"

- Os números sobem de 0 até o valor final quando entram em tela (count-up animation, duração de 2s com easing out)

- Tipografia grande e em serif para os números, sans-serif para os rótulos

7. SEÇÃO "PROJETOS EM DESTAQUE"

- 3 cases em formato editorial

- Cada case ocupa uma linha inteira: imagem grande à esquerda (ou direita alternando), e à direita: categoria (pequena, em maiúsculas com letter-spacing amplo), título do projeto, descrição de 2-3 linhas, e link "Ver projeto completo →"

- Ao hover na imagem: leve zoom (scale 1.03) com transição suave de 600ms

8. SEÇÃO "SETORES ATENDIDOS"

- Grid de 6-8 setores em formato de pílulas ou cards mínimos: Mineração, Construção Civil, Industrial, Energia, Infraestrutura, Saneamento, Logística, Agronegócio

- Hover sutil: muda cor de fundo e aparece um ícone

9. SEÇÃO DE DEPOIMENTOS (opcional mas recomendada)

- Fundo escuro

- Carrossel de 3 depoimentos com foto do cliente, nome, cargo e empresa

- Transição de slide com fade suave, não carrossel abrupto

10. CTA FINAL (bloco de conversão)

- Fundo azul marinho profundo

- Título grande: "Pronto para transformar seu próximo desafio?"

- Subtítulo curto

- Botão CTA grande: "Solicitar orçamento"

11. FOOTER

- Estrutura em 4 colunas: Logo + descrição breve | Serviços | Institucional | Contato (endereço, telefone, email, redes sociais)

- Linha final com copyright e CNPJ

- Fundo azul marinho mais escuro que o resto do site

=== ANIMAÇÕES E MICROINTERAÇÕES ===

- Use Framer Motion ou GSAP para todas as animações

- Todas as transições devem ter easing suave (cubic-bezier(0.4, 0, 0.2, 1) ou similar), duração entre 400-800ms

- Implemente scroll reveal em todas as seções (elementos sobem levemente com fade-in ao entrar no viewport)

- Respeite prefers-reduced-motion do sistema operacional do usuário

- Botões com hover: leve mudança de cor de fundo + subtle scale (1.02)

- Links de navegação: underline animado que cresce da esquerda para a direita no hover

=== RESPONSIVIDADE ===

- Mobile-first, mas garanta que a versão desktop seja impactante

- No mobile: menu vira hamburger, grids viram stacks, tipografias reduzem proporcionalmente

- Teste breakpoints em 375px, 768px, 1024px, 1440px

=== ACESSIBILIDADE ===

- Contraste AA mínimo em todos os textos

- Foco visível em todos os elementos interativos

- Alt text descritivo em todas as imagens

- Estrutura semântica com header, main, section, footer

- Aria-labels em ícones sem texto

=== PERFORMANCE ===

- Lazy load em todas as imagens abaixo da dobra

- Vídeo do hero com poster image de fallback

- Fontes com font-display: swap

=== TOM DE VOZ (textos do site) ===

- Direto, confiante, técnico sem ser frio

- Frases curtas e afirmativas

- Evitar clichês como "soluções inovadoras" ou "pensando no futuro"

- Priorizar verbos de ação: entregamos, projetamos, executamos, resolvemos

Comece criando a estrutura completa com todas as seções acima, usando conteúdo placeholder realista (não lorem ipsum). Use imagens do Unsplash com queries como "engineering construction", "industrial site", "civil engineers working", "mining operation" para os placeholders visuais.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3dc48f97-7c5e-4052-9ac1-6e192ad24cc4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
