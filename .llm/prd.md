# PRD — Portfolio Pessoal: Guilherme Santos
**Versão:** 2.0 (atualizado com LinkedIn)  
**Data:** Maio 2026  
**Autor:** Guilherme Santos  
**Tipo de Produto:** Landing Page — Portfolio Pessoal  

---

## 1. Visão Geral

### 1.1 Objetivo do Produto
Criar uma landing page profissional e moderna que funcione como o principal ponto de entrada da presença digital de Guilherme Santos — Analista de Dados Sênior com especialização em **Integrações e Automação de Processos**. O site deve comunicar a progressão de carreira clara (Jr. → Pl. → Sr. em 5 anos na mesma empresa), profundidade técnica e facilitar o contato por recrutadores e parceiros.

### 1.2 Problema a Resolver
O portfólio atual (guilherme-ssanto.github.io) está desatualizado e não reflete:
- A promoção para **Sênior** em janeiro/2026
- O novo foco em **integrações, automação e APIs**
- A experiência paralela na **Oli**
- O stack atual (Google Apps Script, Pipefy, DynamoDB)
- A trajetória de **3 promoções em 5 anos** na TM1 — um diferencial competitivo forte

### 1.3 Público-Alvo

| Perfil | Objetivo ao visitar o site |
|---|---|
| Recrutadores de Dados/Engenharia | Avaliar fit técnico para vagas Sr./Especialista |
| Tech Leads / CTOs | Entender capacidade de integração de sistemas e automação |
| Parceiros e Freelancers | Encontrar contato e área de especialização |
| Comunidade de Dados | Referência de projetos e GitHub |

---

## 2. Metas e Métricas de Sucesso

| Meta | Indicador | Alvo |
|---|---|---|
| Gerar interesse de recrutadores | Taxa de clique no botão de contato ou LinkedIn | > 10% dos visitantes |
| Comunicar senioridade e evolução de carreira | Tempo médio na seção Experiência | > 45 segundos |
| Destacar foco em integrações e automação | Leitura do resumo/hero | > 60% dos visitantes |
| Direcionar para projetos no GitHub | Cliques no link do GitHub | > 15% dos visitantes |
| Experiência mobile fluida | Core Web Vitals (LCP, CLS, FID) | Green em todos |

---

## 3. Escopo do MVP

### 3.1 Dentro do Escopo (MVP)
- Seção Hero com apresentação, título atualizado e CTAs
- Seção Sobre Mim com resumo profissional (foco em automação/integração)
- Seção Experiência Profissional com timeline e destaque de promoções na TM1
- Seção Formação Acadêmica
- Seção de Skills / Stack Técnica (atualizada)
- Seção de Projetos em Destaque (com link para GitHub)
- Seção de Cursos e Certificações
- Seção de Contato
- Design responsivo (mobile-first)
- Deploy via GitHub Pages

### 3.2 Fora do Escopo (Fase 2)
- Blog ou seção de artigos
- Dark/Light mode toggle
- CMS para gestão de conteúdo
- Formulário com backend (apenas mailto no MVP)
- Versão em inglês

---

## 4. Arquitetura de Informação

```
/  (Landing Page — Single Page Application)
│
├── #hero          → Nome, título, tagline, CTAs
├── #sobre         → Bio atualizada com foco em automação/integrações
├── #experiencia   → Timeline TM1 (3 promoções) + Oli + HUBi + Fibra + SPDM
├── #formacao      → UFF Estatística (concluído 2025)
├── #skills        → Stack técnica com categorias atualizadas
├── #projetos      → Cards de projetos do GitHub
├── #cursos        → Certificações
└── #contato       → Links sociais + CTA de contato
```

---

## 5. Especificação Funcional por Seção

### 5.1 Hero
**Objetivo:** Captura de atenção imediata, comunicar quem é e o que faz em menos de 5 segundos.

**Conteúdo:**
- Nome: **Guilherme Santos**
- Título: **Analista de Dados Sênior | Integrações & Automação de Processos**
- Tagline sugerida: *"Conecto sistemas, automatizo rotinas e transformo dados em decisões."*
- Foto de perfil (avatar do GitHub / foto profissional)
- CTA primário: **"Ver Projetos"** → ancora #projetos
- CTA secundário: **"LinkedIn"** → linkedin.com/in/guilherme-santos-07
- Badge de localização: São Paulo, Brasil 🇧🇷

**Requisitos técnicos:**
- Acima da dobra em todas as resoluções
- Animação de texto opcional (typewriter) no título
- Background: gradiente sutil ou padrão grid/terminal — tema data/tech

---

### 5.2 Sobre Mim
**Objetivo:** Humanizar o perfil, contextualizar a trajetória e o diferencial.

**Conteúdo sugerido:**
> *"Sou Analista de Dados Sênior na TM1, onde comecei como Jr. em 2021 e cresci até a posição Sênior ao longo de 5 anos. Sou Bacharel em Estatística pela UFF e especializo em conectar sistemas, automatizar processos e entregar dados de forma eficiente — do pipeline à visualização. Trabalho com Google Apps Script, Python, APIs REST, Pipefy, SQL e Google Sheets no dia a dia."*

**Elementos visuais:**
- Foto circular/hexagonal
- Badges: `📍 São Paulo` · `🎓 Estatística - UFF (2025)` · `🚀 5 anos na TM1` · `⚙️ Automação & Integrações`

---

### 5.3 Experiência Profissional
**Objetivo:** Demonstrar trajetória e — principalmente — a evolução de carreira com 3 promoções.

**Formato sugerido:** Timeline vertical com agrupamento da TM1 em bloco único destacado mostrando as 3 promoções.

#### TM1 Brand Experience — 5 anos e 4 meses *(Bloco de destaque)*

| Cargo | Período | Duração |
|---|---|---|
| 🥇 Analista de Dados e Integrações **Sr.** | Jan 2026 – Atual | ~5 meses |
| Analista de Dados e Integrações **Pl.** | Nov 2024 – Jan 2026 | 1 ano 3 meses |
| Analista de Dados e Integrações **Jr.** | Fev 2021 – Out 2024 | 3 anos 9 meses |

**Responsabilidades e conquistas para destacar (TM1):**
- Primeiro membro do time de dados da TM1
- Desenvolvimento de integrações entre sistemas via APIs REST e Google Apps Script
- Automação de processos operacionais e de marketing
- Criação de dashboards no Google Data Studio / Looker Studio para KPIs de eventos
- Análises de dados com Python, R e SQL
- Guardião dos processos de LGPD
- Implementação e gestão do Pipefy para fluxos de trabalho
- Uso de Amazon DynamoDB para estruturação de dados

**Tags:** `Python` `Google Apps Script` `SQL` `APIs REST` `Pipefy` `Looker Studio` `Amazon DynamoDB`

---

#### Oli — Analista de Dados Jr. *(Simultâneo à TM1)*
| Período | Duração |
|---|---|
| Fev 2022 – Dez 2023 | 1 ano 11 meses |

> ⚠️ **Nota para Guilherme:** Esta experiência estava ausente no site antigo. Adicionar aqui fortalece o perfil. Descrever as principais responsabilidades na Oli para compor o conteúdo da seção.

**Tags:** `Análise de Dados` `SQL` *(completar com ferramentas usadas na Oli)*

---

#### The HUBi — Assistente e Estagiário de Mídia e Performance
| Cargo | Período | Duração |
|---|---|---|
| Assistente de Mídia e Performance | Dez 2020 – Jan 2021 | 2 meses |
| Estagiário | Out 2018 – Ago 2020 | 1 ano 11 meses |

**Responsabilidades:**
- Criação e gestão de e-mail marketing, SMS marketing e Facebook Ads
- Análise de dados e segmentação de bases
- Extração de relatórios e atualização de planilhas
- Auxílio na criação e análise de dashboards para tomada de decisão
- Job rotation em RH, Compras e Operacional

**Tags:** `Facebook Ads` `Google Analytics` `Email Marketing` `Excel`

---

#### Banco Fibra — Jovem Aprendiz (Recursos Humanos)
| Período | Duração |
|---|---|
| Set 2017 – Set 2018 | 1 ano 1 mês |

**Responsabilidades:**
- Processos de recrutamento e seleção (triagem e primeiro contato)
- Apoio logístico em programas de treinamento
- Gestão de pagamentos e campanhas de RH

---

#### SPDM — Estagiário
| Período | Duração |
|---|---|
| Ago 2016 – Ago 2017 | 1 ano 1 mês |

> Primeiro contato com o mercado de trabalho. Pode ser exibido de forma compacta ou omitido se houver limitação de espaço.

---

### 5.4 Formação Acadêmica

| Curso | Instituição | Período | Status |
|---|---|---|---|
| Bacharelado em Estatística | Universidade Federal Fluminense (UFF) | 2021 – 2025 | ✅ Concluído |
| Bacharelado em Administração | Faculdades Metropolitanas Unidas (FMU) | 2018 – 2020 | ⏸ Trancado |

> **Destaque:** A graduação em Estatística pela UFF fortalece a credibilidade técnica para posições de dados — vale destacar no hero ou badges.

---

### 5.5 Skills / Stack Técnica
**Atualizada com base no LinkedIn e GitHub:**

| Categoria | Tecnologias |
|---|---|
| Linguagens | Python · R · SQL |
| Automação & Integrações | Google Apps Script · APIs REST · Pipefy |
| Banco de Dados | Amazon DynamoDB · MySQL · Google Sheets (como DB) |
| Visualização & BI | Looker Studio (ex-Data Studio) · Power BI · ggplot2 |
| Análise de Dados | Pandas · NumPy · tidyverse · RStudio |
| Marketing Digital | Google Analytics · Facebook Ads |
| Produtividade | Excel Avançado · Google Sheets |

**Formato sugerido:** Grid de ícones com categorias colapsáveis no mobile. Ao hover: nome + nível de proficiência.

**Idiomas:**
- 🇧🇷 Português — Nativo
- 🇺🇸 Inglês — Básico/Elementar

---

### 5.6 Projetos em Destaque
**Formato:** Grid de cards (2 colunas desktop / 1 coluna mobile)

Cada card deve conter:
- Título do projeto
- Descrição breve (2–3 linhas)
- Tags de tecnologias
- Botão "Ver no GitHub"
- Screenshot ou preview (se disponível)

> ⚠️ **Ação necessária — Guilherme:** Selecionar 4–6 projetos dos 23 repositórios do GitHub. Priorizar:
> - Projetos de integração de APIs
> - Automações com Google Apps Script ou Python
> - Análises end-to-end com visualização
> - Projetos com README bem documentado

---

### 5.7 Cursos e Certificações

| Curso | Plataforma |
|---|---|
| SQL Completo | Softblue |
| Python & MySQL | Udemy |
| Excel Avançado | SENAI São Paulo |
| Teorias da Administração | Saber — IBAP |
| Domine Google Data Studio | Udemy *(do site antigo)* |
| Power BI Week | Leonardo Karpinspi *(do site antigo)* |
| Curso Avançado Google Analytics | Google Analytics Academy *(do site antigo)* |

> ⚠️ Confirmar quais certificados ainda quer exibir e se há novos desde 2021.

---

### 5.8 Contato

**Elementos:**
- Título: *"Vamos conversar?"*
- Subtítulo: *"Aberto a novas oportunidades, projetos e colaborações."*
- 📧 E-mail: `guilhermesantossilva@outlook.com.br`
- 💼 LinkedIn: `linkedin.com/in/guilherme-santos-07`
- 🐙 GitHub: `github.com/guilherme-ssanto`
- 📱 Telefone: (11) 97038-5396 *(exibição opcional — decisão do Guilherme)*

---

## 6. Design e Identidade Visual

### 6.1 Direção Estética
Perfil Sênior de Dados + Automação → **credibilidade técnica** com **modernidade clean**.

**Personalidade visual:** Preciso como código, fluido como dados em movimento.

### 6.2 Paleta de Cores Sugerida

| Uso | Cor | Hex |
|---|---|---|
| Background principal | Cinza escuro (tom GitHub/terminal) | `#0D1117` |
| Background secundário | Cinza médio | `#161B22` |
| Accent primário | Verde elétrico (tech/automação) | `#00D9A6` |
| Accent secundário | Azul LinkedIn | `#0A66C2` |
| Texto principal | Branco suave | `#E6EDF3` |
| Texto secundário | Cinza claro | `#8B949E` |
| Bordas | Cinza discreto | `#30363D` |

> Alternativa clara: fundo branco com accent azul corporativo — mais adequado para vagas em empresas tradicionais.

### 6.3 Tipografia

| Uso | Fonte | Peso |
|---|---|---|
| Títulos (H1/H2) | Space Grotesk ou Inter | 700 |
| Corpo de texto | Inter | 400/500 |
| Tags / código | JetBrains Mono | 400 |

### 6.4 Componentes UI Essenciais
- Navbar fixa com scroll suave + indicador de seção ativa
- **Bloco de carreira TM1** com badge "3 promoções em 5 anos" — diferencial visual
- Timeline vertical com marcadores e conectores
- Skill badges com ícones (devicons.dev)
- Cards de projeto com hover elevation
- Badge de idioma (PT / EN)
- Footer com links sociais e ano dinâmico

---

## 7. Requisitos Técnicos

### 7.1 Stack Recomendada

| Camada | Opção A (Rápido) | Opção B (Mais controle) |
|---|---|---|
| Framework | HTML + CSS + Vanilla JS | React + Tailwind CSS |
| Hospedagem | GitHub Pages | Vercel ou Netlify |
| Domínio | guilherme-ssanto.github.io | guilhermesantos.dev |
| Ícones | devicons CDN + lucide | lucide-react |
| Analytics | Google Analytics 4 | — |

### 7.2 SEO Básico
```html
<title>Guilherme Santos — Analista de Dados Sênior | Integrações & Automação</title>
<meta name="description" content="Portfolio de Guilherme Santos, Analista de Dados Sênior
na TM1. Especialista em integrações, automação com Google Apps Script, Python, APIs REST,
SQL e Pipefy. São Paulo, Brasil." />
<meta property="og:title" content="Guilherme Santos — Analista de Dados Sênior" />
```

### 7.3 Acessibilidade (mínimo)
- Contraste WCAG AA
- Alt text em imagens
- Navegação por teclado funcional
- `aria-label` nos ícones sem texto

---

## 8. Roadmap de Desenvolvimento

### Fase 1 — MVP (2–3 semanas)
- [ ] Preparar conteúdo (projetos GitHub, bio, foto)
- [ ] Definir paleta, tipografia e componentes base
- [ ] Setup HTML/CSS ou React + Tailwind
- [ ] Implementar: Hero, Sobre, Experiência TM1 com promoções
- [ ] Implementar: Skills atualizada, Projetos, Formação, Cursos, Contato
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Deploy GitHub Pages
- [ ] Validar SEO básico e meta tags Open Graph

### Fase 2 — Melhorias
- [ ] Google Analytics 4
- [ ] Conectar GitHub API (repositórios dinâmicos)
- [ ] Dark/Light mode toggle
- [ ] Animações de entrada (Intersection Observer)
- [ ] Versão em inglês
- [ ] Domínio personalizado

---

## 9. Checklist de Conteúdo para o Guilherme

- [ ] Foto profissional atualizada (quadrada, mínimo 400×400px)
- [ ] Selecionar 4–6 projetos do GitHub para destacar (garantir README em cada um)
- [ ] Descrever responsabilidades na **Oli** (ausente no site atual)
- [ ] Confirmar lista de cursos/certificações atuais
- [ ] Decidir se exibe telefone ou só links sociais
- [ ] Escrever bio de 3–4 linhas em 1ª pessoa
- [ ] Confirmar e-mail de contato preferido
- [ ] Decidir domínio personalizado

---

## 10. Diferenciais Competitivos a Destacar no Site

> Estes pontos devem ter **destaque visual** — são os maiores argumentos de venda do perfil.

1. **🚀 3 promoções em 5 anos** na mesma empresa (Jr. → Pl. → Sr.)
2. **🔧 Perfil raro:** une Estatística (UFF) + experiência em automação/integrações
3. **⚡ Primeiro analista de dados da TM1** — construiu o time do zero
4. **🔗 Stack transversal:** dados + integrações + automação + visualização
5. **📊 Atuação em paralelo** (TM1 + Oli) demonstra versatilidade e comprometimento

---

## 11. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Projetos GitHub sem documentação | Alto | Priorizar criação de READMEs antes de lançar |
| Responsabilidades da Oli não documentadas | Médio | Listar antes de começar o desenvolvimento |
| Foto desatualizada | Médio | Tirar nova foto ou usar avatar atual |
| Inglês básico limitando vagas internacionais | Baixo (por ora) | Adicionar versão EN na Fase 2 |

---

## 12. Referências e Recursos

**Inspirações de portfólio:**
- `brittanychiang.com` — dark mode, referência clássica tech
- `mattfarley.ca` — estrutura limpa e direta
- `caferati.me` — identidade visual forte

**Recursos:**
- Ícones de tecnologias: `devicons.dev`
- Fontes: `fonts.google.com` (Inter, Space Grotesk)
- Paletas: `coolors.co`
- Layouts: `onepagelove.com`

---

*PRD v2.0 — Atualizado com dados do LinkedIn (PDF), GitHub (guilherme-ssanto) e site atual. Versão anterior (v1.0) baseada apenas no site antigo estava desatualizada em experiências, stack e senioridade.*