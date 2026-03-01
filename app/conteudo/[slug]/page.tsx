import { notFound } from "next/navigation";
import { MarkdownLite } from "@/components/markdown-lite";
import { getAllContent, getContentBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllContent().map((item) => ({ slug: item.slug }));
}

export default async function ConteudoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="card space-y-4 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="pill bg-mint/60">{item.type}</span>
        <span className="text-xs text-ink/70">Criado: {item.createdAt}</span>
        <span className="text-xs text-ink/70">Atualizado: {item.updatedAt}</span>
      </div>
      <h1 className="font-display text-3xl font-bold">{item.title}</h1>
      <p className="text-sm text-ink/75">{item.summary}</p>
      <div className="text-xs text-ink/70">Notebook origem: {item.sourceNotebook}</div>
      <hr className="border-ink/10" />
      <MarkdownLite content={item.content} />
    </article>
  );
}
