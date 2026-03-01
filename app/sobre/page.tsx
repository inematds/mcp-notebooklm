const steps = [
  "Gerar conteudo no NotebookLM",
  "Salvar como markdown em /content",
  "Commitar no GitHub",
  "Vercel publica automaticamente"
];

export default function SobrePage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-3xl font-bold">Sobre a plataforma</h1>
      <p className="card p-5 text-sm text-ink/80">
        Este site foi pensado para publicacao rapida de materiais do NotebookLM sem login e sem banco de dados.
      </p>
      <section className="card p-5">
        <h2 className="font-display text-xl font-bold">Fluxo de publicacao</h2>
        <ol className="mt-3 space-y-2 text-sm">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="mr-2 rounded bg-ink px-2 py-1 text-xs text-white">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
