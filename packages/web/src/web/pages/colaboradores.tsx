import { SiteShell, PageHeader, Card } from "../components/site-shell";
import { COLLAB_ROLES, COLLAB_STEPS } from "../content/academy";

export default function Colaboradores() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Colaboradores"
        title="Quem ensina e revisa a Academy"
        lead="Professores, especialistas e revisores podem contribuir. Todo material passa por revisão antes de ser publicado, e o autor é creditado."
      />

      <section aria-labelledby="papeis">
        <h2 id="papeis" className="text-2xl font-bold">Papéis</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {COLLAB_ROLES.map((r) => (
            <li key={r} className="rounded-full border border-white/10 px-4 py-2 text-[#F2F5FA]">{r}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="processo">
        <h2 id="processo" className="text-2xl font-bold">Processo de participação</h2>
        <ol className="mt-5 grid gap-3">
          {COLLAB_STEPS.map((s, i) => (
            <li key={s}>
              <Card className="flex gap-4 p-5">
                <span className="font-bold text-[#7FB6FF]">{i + 1}.</span>
                <span className="text-[#9AA6BD]">{s}</span>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-10 max-w-3xl text-sm text-[#9AA6BD]">
        Candidaturas abrem na fase de colaboradores. <span className="text-[#F5B942]">[PRECISA CONFIRMAR] condições de remuneração e cessão de direitos.</span>
      </p>
    </SiteShell>
  );
}
