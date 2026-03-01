import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { getAllContent } from "@/lib/content";

export default function HomePage() {
  const items = getAllContent().slice(0, 6);

  return (
    <div className="space-y-6">
      <section className="card fade-up p-6">
        <p className="pill mb-3 bg-coral/20">Sem login. Publicacao direta.</p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          Sua vitrine do NotebookLM, pronta para Vercel.
        </h1>
        <p className="mt-3 max-w-2xl text-ink/80">
          Publique apresentacoes, resumos e guias em um site visual e objetivo. Atualize so com markdown no GitHub.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/biblioteca" className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white">
            Abrir biblioteca
          </Link>
          <Link href="/sobre" className="pill hover:bg-ink/10">
            Como funciona
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-bold">Conteudos recentes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
