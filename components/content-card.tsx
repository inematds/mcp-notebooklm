import Link from "next/link";
import { ContentItem } from "@/lib/types";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article className="card fade-up flex h-full flex-col p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="pill bg-mint/50">{item.type}</span>
        <span className="text-xs text-ink/60">Atualizado: {item.updatedAt}</span>
      </div>
      <h3 className="font-display text-xl font-bold">{item.title}</h3>
      <p className="mt-2 text-sm text-ink/80">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="pill text-ink/80">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-xs text-ink/70">Origem: {item.sourceNotebook}</div>
      <Link
        href={`/conteudo/${item.slug}`}
        className="mt-5 inline-flex w-fit rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        Ver conteudo
      </Link>
    </article>
  );
}
