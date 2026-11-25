# OVERKILL Academy — Next Evolution — Design

Site institucional e, depois, plataforma educacional. Tom profissional, elegante e acessível. Sem aparência infantil.

## Paleta (fonte: Documento 00 §3.3)

| Token | Hex | Uso |
|---|---|---|
| ink | #05070D | fundo principal (preto profundo) |
| navy | #0B1A3A | seções, cards (azul-marinho) |
| electric | #1E6BFF | botões, links, ações (azul elétrico) |
| glow | #7FB6FF | destaques luminosos |
| snow | #F2F5FA | texto principal (branco suave) |
| mist | #9AA6BD | texto secundário (tons neutros) |
| line | rgba(255,255,255,0.10) | divisórias |
| warn | #F5B942 | marcadores [PRECISA CONFIRMAR] e avisos |

Cards: fundo `rgba(11,26,58,0.6)` com borda de transparência sutil.

## Tipografia

Sistema: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Sem fontes externas (não carregar de CDN). Títulos com peso 700 e tamanho grande; corpo 16–18px, altura de linha 1.6. Assumido por ausência de definição no briefing: se houver preferência de fonte, trocar aqui. [PRECISA CONFIRMAR]

## Layout

- Largura máxima 1120px. Espaço generoso.
- Mobile first: tudo empilha em uma coluna abaixo de 768px; menu colapsa.
- Elementos geométricos discretos (linhas, grades) no fundo. Gradiente controlado, sem roxo.
- Animação: entrada suave (fade + 8px), respeitando `prefers-reduced-motion`.

## Acessibilidade

- Contraste mínimo WCAG AA em todo texto.
- Foco visível em todos os controles; navegação por teclado.
- Imagens com texto alternativo. Mensagens de erro em texto claro.

## Páginas (rotas)

- `/` Início — apresentação, recursos, áreas, FAQ, botão de inscrição (desativado até F2).
- `/proposta` — Nossa proposta: por que existe, método, acompanhamento, princípios, evolução.
- `/formacao` — Áreas, etapas, assuntos planejados. Nada aparece como publicado antes de revisão.
- `/como-funciona` — Passos da experiência acadêmica.
- `/colaboradores` — Papéis, processo de seleção, publicação.
- `/legal/privacidade`, `/legal/termos`, `/legal/cookies`, `/contato` — textos marcados com [PRECISA CONFIRMAR] até revisão.

## Regras de conteúdo

- Funcionalidade planejada é rotulada "planejado". Nunca "disponível".
- Nenhum contato, data ou texto jurídico inventado.
