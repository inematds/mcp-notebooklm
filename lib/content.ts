import fs from "node:fs";
import path from "node:path";
import { ContentItem, ContentType } from "@/lib/types";

const contentDir = path.join(process.cwd(), "content");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const normalized = raw.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { data: {}, body: normalized };
  }

  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) {
    return { data: {}, body: normalized };
  }

  const fm = normalized.slice(4, end);
  const body = normalized.slice(end + 5).trim();
  const data: Record<string, string> = {};

  for (const line of fm.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    data[key] = value;
  }

  return { data, body };
}

function parseTags(rawTags: string | undefined): string[] {
  if (!rawTags) return [];
  return rawTags
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((item) => item.trim().replace(/^"|"$/g, "").replace(/^'|'$/g, ""))
    .filter(Boolean);
}

function toItem(filePath: string): ContentItem {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);

  return {
    title: data.title || "Sem titulo",
    slug: data.slug || path.basename(filePath, ".md"),
    type: (data.type as ContentType) || "resumo",
    summary: data.summary || "",
    tags: parseTags(data.tags),
    createdAt: data.createdAt || "",
    updatedAt: data.updatedAt || "",
    sourceNotebook: data.sourceNotebook || "",
    coverImage: data.coverImage || undefined,
    content: body
  };
}

export function getAllContent(): ContentItem[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".md"));

  return files
    .map((name) => toItem(path.join(contentDir, name)))
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return getAllContent().find((item) => item.slug === slug);
}

export function getContentByType(type: ContentType | "todos"): ContentItem[] {
  const all = getAllContent();
  if (type === "todos") return all;
  return all.filter((item) => item.type === type);
}
