"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import { TypeTabs } from "@/components/type-tabs";
import { searchItems } from "@/lib/search";
import { ContentItem, ContentType } from "@/lib/types";

export function LibraryView({ items }: { items: ContentItem[] }) {
  const [type, setType] = useState<ContentType | "todos">("todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byType = type === "todos" ? items : items.filter((item) => item.type === type);
    return searchItems(byType, query);
  }, [items, query, type]);

  return (
    <section className="space-y-4">
      <div className="card p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <TypeTabs value={type} onChange={setType} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por titulo, tag ou notebook"
            className="w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-sm outline-none focus:border-ink sm:max-w-sm"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card p-6 text-sm text-ink/70">Nenhum conteudo encontrado com esse filtro.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
