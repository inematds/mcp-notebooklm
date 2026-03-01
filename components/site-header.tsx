import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/sobre", label: "Sobre" }
];

export function SiteHeader() {
  return (
    <header className="card fade-up flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-2xl font-bold">NotebookLM Showcase</p>
        <p className="text-sm text-ink/70">Apresentacoes e recursos publicados sem login</p>
      </div>
      <nav className="flex gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="pill hover:bg-ink hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
