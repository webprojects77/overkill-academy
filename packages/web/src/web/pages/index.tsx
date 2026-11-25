import { Link } from "wouter";
import { SiteShell, Card, Badge, Warn } from "../components/site-shell";
import { AREAS, TOTAL_SUBJECTS, FAQ, METHOD } from "../content/academy";

function Index() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1A3A] via-[#05070D] to-[#05070D] p-8 md:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(#7FB6FF_1px,transparent_1px),linear-gradient(90deg,#7FB6FF_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative max-w-3xl">
          <Badge>Site institucional · fase 1</Badge>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Não importa de onde você começa. <span className="text-[#7FB6FF]">Importa até onde pode chegar.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#9AA6BD]">
            A OVERKILL Academy é uma formação matemática organizada por pré-requisitos: do zero ao avançado, sem presumir
            conhecimento prévio. Você descobre o que já domina e segue um percurso que respeita isso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              aria-describedby="inscricao-aviso"
              className="press cursor-not-allowed rounded-lg bg-[#1E6BFF]/40 px-5 py-3 font-semibold text-[#F2F5FA]/70"
            >
              Inscrever-se
            </button>
            <Link href="/proposta" className="press rounded-lg border border-white/20 px-5 py-3 font-semibold hover:border-[#7FB6FF]">
              Conhecer a proposta
            </Link>
          </div>
          <p id="inscricao-aviso" className="mt-3 text-sm text-[#9AA6BD]">
            Inscrições abrem na fase de contas. <Warn>[PRECISA CONFIRMAR] data</Warn>
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3" aria-labelledby="metodo">
        <h2 id="metodo" className="sr-only">Método</h2>
        {METHOD.slice(0, 3).map((m, i) => (
          <Card key={m.title} delay={i * 90}>
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="mt-2 leading-relaxed text-[#9AA6BD]">{m.text}</p>
          </Card>
        ))}
      </section>

      <section className="mt-16" aria-labelledby="areas">
        <h2 id="areas" className="text-3xl font-bold">Áreas de conhecimento</h2>
        <p className="mt-3 text-[#9AA6BD]">
          {AREAS.length} áreas e {TOTAL_SUBJECTS} assuntos mapeados. Tudo está em fase de planejamento e revisão; nenhum
          assunto aparece como publicado ainda.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <span key={a.id} className="rounded-full border border-white/10 px-3 py-1 text-sm text-[#9AA6BD]">
              {a.name}
            </span>
          ))}
        </div>
        <Link href="/formacao" className="mt-6 inline-block font-semibold text-[#7FB6FF] hover:underline">
          Ver a estrutura completa →
        </Link>
      </section>

      <section className="mt-16" aria-labelledby="faq">
        <h2 id="faq" className="text-3xl font-bold">Perguntas frequentes</h2>
        <div className="mt-6 grid gap-4">
          {FAQ.map((item) => (
            <details key={item.q} className="rounded-xl border border-white/10 bg-[#0B1A3A]/40 p-5">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-3 leading-relaxed text-[#9AA6BD]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

export default Index;
