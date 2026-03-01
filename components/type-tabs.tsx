import { ContentType } from "@/lib/types";

const labels: Record<ContentType, string> = {
  apresentacao: "Apresentacao",
  resumo: "Resumo",
  guia: "Guia",
  faq: "FAQ"
};

export function TypeTabs({
  value,
  onChange
}: {
  value: ContentType | "todos";
  onChange: (next: ContentType | "todos") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange("todos")}
        className={`pill ${value === "todos" ? "bg-ink text-white" : "hover:bg-ink/10"}`}
      >
        Todos
      </button>
      {(Object.keys(labels) as ContentType[]).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onChange(type)}
          className={`pill ${value === type ? "bg-ink text-white" : "hover:bg-ink/10"}`}
        >
          {labels[type]}
        </button>
      ))}
    </div>
  );
}
