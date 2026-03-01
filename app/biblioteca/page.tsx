import { LibraryView } from "@/components/library-view";
import { getAllContent } from "@/lib/content";

export default function BibliotecaPage() {
  const items = getAllContent();

  return (
    <div className="space-y-4">
      <h1 className="font-display text-3xl font-bold">Biblioteca</h1>
      <p className="text-sm text-ink/70">Filtre por tipo e busque rapidamente por tags ou origem.</p>
      <LibraryView items={items} />
    </div>
  );
}
