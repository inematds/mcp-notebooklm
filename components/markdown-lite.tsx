import { ReactNode } from "react";
import { ContentItem } from "@/lib/types";

function parseInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

export function MarkdownLite({ content }: { content: ContentItem["content"] }) {
  const lines = content.split(/\r?\n/);
  const blocks: ReactNode[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const safe = parseInline(line);

    if (!line.trim()) {
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${i}`} dangerouslySetInnerHTML={{ __html: safe.slice(4) }} />);
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${i}`} dangerouslySetInnerHTML={{ __html: safe.slice(3) }} />);
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push(<h1 key={`h1-${i}`} dangerouslySetInnerHTML={{ __html: safe.slice(2) }} />);
      continue;
    }

    if (line.startsWith("- ")) {
      const items: ReactNode[] = [];
      let listIndex = i;

      while (listIndex < lines.length && lines[listIndex].startsWith("- ")) {
        const item = parseInline(lines[listIndex].slice(2));
        items.push(<li key={`li-${listIndex}`} dangerouslySetInnerHTML={{ __html: item }} />);
        listIndex += 1;
      }

      blocks.push(<ul key={`ul-${i}`}>{items}</ul>);
      i = listIndex - 1;
      continue;
    }

    blocks.push(<p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: safe }} />);
  }

  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-display prose-code:rounded prose-code:bg-ink/10 prose-code:px-1 prose-code:py-0.5">
      {blocks}
    </div>
  );
}
