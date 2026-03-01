import { ContentItem } from "@/lib/types";

export function extractUniqueTags(items: ContentItem[]): string[] {
  const tags = new Set<string>();
  for (const item of items) {
    for (const tag of item.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function searchItems(items: ContentItem[], query: string): ContentItem[] {
  if (!query.trim()) return items;
  const q = query.toLowerCase();

  return items.filter((item) => {
    const bag = [item.title, item.summary, item.type, item.tags.join(" "), item.sourceNotebook].join(" ").toLowerCase();
    return bag.includes(q);
  });
}
