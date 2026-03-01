# Dicas Consolidadas dos 3 Repos

Data: 2026-03-01

## 1) PleasePrompto/notebooklm-mcp
Repo: https://github.com/PleasePrompto/notebooklm-mcp

Dicas principais:
- Usar `NOTEBOOK_PROFILE_STRATEGY=isolated` para reduzir conflito com Chrome em uso.
- Ajustar `browser_options` (`show/headless`, `timeout_ms`, stealth/delays) conforme ambiente.
- Para falha persistente de login: fechar Chrome -> `cleanup_data(confirm=true, preserve_library=true)` -> `setup_auth`.
- Se bater limite de consultas da conta, usar `re_auth` para trocar conta/sessao.
- Aproveitar recursos de biblioteca/sessoes (`list_notebooks`, `select_notebook`, `list_sessions`) para fluxo organizado.

## 2) khengyun/notebooklm-mcp (quick setup)
Guia: https://github.com/khengyun/notebooklm-mcp/blob/main/docs/quick-setup-guide.md

Dicas principais:
- Inicializar com URL do notebook para configurar mais rapido.
- Rodar servidor com arquivo de configuracao fixo para repetir ambiente sem retrabalho.
- Usar profile persistente/isolado para evitar quebra frequente de sessao.
- Exportar/importar profile quando precisar mover ambiente entre maquinas.
- Em troubleshooting, recriar profile/config pode ser mais rapido que ajustes pontuais.

## 3) inematds/mcp-notebooklm (este projeto)
Repo: https://github.com/inematds/mcp-notebooklm

Dicas principais:
- Arquitetura simples e robusta para Vercel: `content/*.md` -> GitHub -> deploy automatico.
- Evitar dependencia de autenticacao NotebookLM em runtime da Vercel.
- Publicar conteudo como markdown com frontmatter padrao (`title`, `slug`, `type`, `summary`, `tags`, datas, `sourceNotebook`).
- Para videos/PPT: usar `public/` para estatico; para videos grandes preferir plataforma externa com embed.
- Manter fluxo editorial: gerar no NotebookLM, revisar, salvar em markdown, commit e push.

## Observacoes Importantes
- MCP local e deploy Vercel sao camadas diferentes: Vercel nao enxerga sua sessao local.
- Se o NotebookLM nao permitir "Anyone with the link", pode haver restricao de Workspace/admin.
- Para estabilidade operacional, tratar MCP como ferramenta de ingestao local e o site como canal publico.

## Fluxo Recomendado (Pratico)
1. Gerar e validar conteudo no NotebookLM.
2. Converter para markdown padrao do projeto.
3. Commit + push no GitHub.
4. Vercel publica automaticamente.
5. Revisar pagina e ajustar iterativamente.