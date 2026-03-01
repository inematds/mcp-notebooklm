# NotebookLM Showcase

Plataforma publica e simples para publicar conteudos criados no NotebookLM, hospedada no Vercel.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Conteudo em markdown (`/content`)

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicar no Vercel
1. Subir este projeto para GitHub.
2. Importar no Vercel.
3. Deploy automatico a cada commit.

## Como adicionar conteudo
Crie um arquivo `.md` em `content/` com frontmatter:

```md
---
title: Titulo do conteudo
slug: slug-unico
type: apresentacao
summary: Resumo curto
tags: [tag1, tag2]
createdAt: 2026-03-01
updatedAt: 2026-03-01
sourceNotebook: Nome do notebook
coverImage:
---
# Corpo em markdown
```
