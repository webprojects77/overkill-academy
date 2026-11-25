import { Link, useLocation } from "wouter";
import { useEffect, type ReactNode } from "react";
import { Reveal } from "./motion";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/proposta", label: "Proposta" },
  { href: "/formacao", label: "Formação" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/colaboradores", label: "Colaboradores" },
  { href: "/contato", label: "Contato" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen bg-[#05070D] text-[#F2F5FA]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#1E6BFF] focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070D]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            OVERKILL <span className="text-[#7FB6FF]">Academy</span>
          </Link>
          <nav aria-label="Principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {NAV.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link rounded px-1 py-0.5 hover:text-[#7FB6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7FB6FF] ${
                    active ? "text-[#7FB6FF]" : "text-[#9AA6BD]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main id="conteudo" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div key={location} className="page-enter">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-[#9AA6BD] md:grid-cols-3">
          <div>
            <p className="font-semibold text-[#F2F5FA]">OVERKILL Academy — Next Evolution</p>
            <p className="mt-2">Plataforma educacional independente, parte do ecossistema OVERKILL.</p>
          </div>
          <nav aria-label="Institucional" className="flex flex-col gap-2">
            <Link href="/legal/privacidade" className="hover:text-[#7FB6FF]">Política de privacidade</Link>
            <Link href="/legal/termos" className="hover:text-[#7FB6FF]">Termos de uso</Link>
            <Link href="/legal/cookies" className="hover:text-[#7FB6FF]">Política de cookies</Link>
            <Link href="/legal/conteudo" className="hover:text-[#7FB6FF]">Política de conteúdo</Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Link href="/contato" className="hover:text-[#7FB6FF]">Canal de contato e suporte</Link>
            <p className="text-[#F5B942]">[PRECISA CONFIRMAR] Endereço, CNPJ e canal oficial ainda não definidos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#7FB6FF]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
      {lead && <p className="mt-5 text-lg leading-relaxed text-[#9AA6BD]">{lead}</p>}
    </header>
  );
}

export function Card({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className={`lift h-full rounded-xl border border-white/10 bg-[#0B1A3A]/60 p-6 ${className}`}>{children}</div>
    </Reveal>
  );
}

export function Warn({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#F5B942]/15 px-1.5 py-0.5 text-[#F5B942]">{children}</span>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[#7FB6FF]/40 px-2.5 py-0.5 text-xs text-[#7FB6FF]">
      {children}
    </span>
  );
}
