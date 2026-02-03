# POG Academy

Plataforma de aprendizado e certificação em **Programação Orientada a Gambiarra** (POG). Conteúdo baseado no [Livro POG](https://livropog.com.br): história, Gambi Design Patterns (GDPs) e alternativas sustentáveis.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Neon** (Postgres serverless) para persistência de certificados

## Pré-requisitos

- Node.js 18+
- Conta na [Neon](https://neon.tech) (ou outro Postgres) para os certificados

## Configuração

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env.local` na raiz com a URL do banco:

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

Ou use `POSTGRES_URL`; a aplicação aceita qualquer um dos dois. A tabela `pog_certificates` é criada automaticamente na primeira requisição que usar o banco.

3. Rode em desenvolvimento (porta 3001):

```bash
npm run dev
```

Acesse [http://localhost:3001](http://localhost:3001).

## Scripts

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento na porta 3001 |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção (porta 3001) |
| `npm run lint` | Executa o ESLint |
| `npm run export-badges` | Gera os PNGs dos badges a partir dos SVGs em `public/badges/` |

## Funcionalidades

- **Conteúdo:** O que é POG, Manifesto, Princípios, GDPs e Boas Práticas
- **Certificação:** quatro níveis (Foundation, Practitioner, Expert, GDP) com provas e nota mínima por nível
- **Exames:** questões por nível, tempo limite, dicas após tempo parado, bloqueio de refazer se já certificado
- **Certificados:** emissão ao aprovar, página por certificado, download em PDF e link para validação
- **Validação:** página pública para validar certificado por ID
- **Badges:** SVGs/PNGs por nível; PDF do certificado usa os PNGs

## Estrutura principal

```
src/
  app/           # Rotas e páginas (App Router)
  api/           # APIs: exame, certificates (submit, check, verify, pdf), badges
  components/    # Header, Footer, BadgeSpotlight, etc.
  data/          # certification.ts (níveis e questões)
  lib/            # db.ts (Neon), certificates.ts
public/
  badges/         # SVGs e PNGs por nível (foundation, practitioner, expert, gdp)
scripts/
  export-badges-png.mjs   # Gera PNGs dos badges (requer sharp)
```

## Variáveis de ambiente

| Variável | Obrigatório | Descrição |
|----------|-------------|-----------|
| `DATABASE_URL` ou `POSTGRES_URL` | Sim (para certificados) | URL de conexão Postgres (Neon ou outro). Sem isso, as rotas que gravam ou leem certificados falham. |

## Licença

MIT. Veja [LICENSE](LICENSE).
