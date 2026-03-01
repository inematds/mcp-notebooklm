import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NotebookLM Showcase",
  description: "Biblioteca visual dos conteudos criados no NotebookLM",
  metadataBase: new URL("https://example.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <SiteHeader />
          <main className="mt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
