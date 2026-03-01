export type ContentType = "apresentacao" | "resumo" | "guia" | "faq";

export type ContentItem = {
  title: string;
  slug: string;
  type: ContentType;
  summary: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  sourceNotebook: string;
  coverImage?: string;
  content: string;
};
