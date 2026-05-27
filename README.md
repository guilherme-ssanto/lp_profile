# Portfolio — Guilherme Santos

Landing page profissional de Guilherme Santos, Analista de Dados Sênior especializado em integrações e automação de processos.

**[guilherme-ssanto.github.io/lp_profile](https://guilherme-ssanto.github.io/lp_profile)**

## Stack

- React 18 + Vite
- Tailwind CSS v3
- Lucide React (ícones)
- devicons (ícones de tecnologias)
- GitHub Pages (deploy)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173/lp_profile/`

## Build e deploy

```bash
# Build de produção
npm run build

# Preview local do build
npm run preview

# Deploy para GitHub Pages
npm run deploy
```

O comando `deploy` faz o build e publica na branch `gh-pages`. Ative o GitHub Pages no repositório em **Settings → Pages → Source: `gh-pages` branch**.

## Estrutura

```
src/
  components/
    layout/         # Navbar e Footer
    sections/       # Uma seção por componente (Hero, Sobre, Experiencia...)
  data/             # Conteúdo separado do markup
  hooks/            # useActiveSection, useReveal
```

O conteúdo de cada seção fica nos arquivos `src/data/`. Itens pendentes estão marcados com `// TODO:` — use `grep -r "TODO" src/data/` para listar o que falta preencher.

## Seções

| Seção | Conteúdo |
|---|---|
| `#hero` | Nome, título com typewriter, tagline, CTAs |
| `#sobre` | Bio e badges de perfil |
| `#experiencia` | Timeline TM1 (3 promoções) + Oli + HUBi + Fibra + SPDM |
| `#formacao` | UFF Estatística e FMU Administração |
| `#skills` | Stack técnica em 7 categorias |
| `#projetos` | Cards de projetos do GitHub |
| `#cursos` | Certificações |
| `#contato` | Links sociais e e-mail |

## Checklist de conteúdo pendente

- [ ] Substituir foto de perfil (avatar GitHub → foto profissional)
- [ ] Selecionar 4–6 projetos do GitHub e atualizar `src/data/projects.js`
- [ ] Adicionar descrição das responsabilidades na Oli em `src/data/experience.js`
- [ ] Confirmar lista de certificações em `src/data/cursos.js`
- [ ] Decidir exibição do telefone: alterar `SHOW_PHONE` em `src/components/sections/Contato.jsx`

