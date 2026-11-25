import { SiteShell, PageHeader, Card, Badge } from "../components/site-shell";
import { HOW_STEPS } from "../content/academy";

export default function ComoFunciona() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Como funciona"
        title="Da primeira visita ao certificado"
        lead="Cada passo mostra a situação real. Passos que ainda não existem estão marcados como planejados."
      />

      <ol className="grid gap-4">
        {HOW_STEPS.map((s, i) => (
          <li key={s.title}>
            <Card className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <span aria-hidden className="text-2xl font-bold text-[#7FB6FF]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                  <p className="mt-1 text-[#9AA6BD]">{s.text}</p>
                </div>
              </div>
              <Badge>{s.status}</Badge>
            </Card>
          </li>
        ))}
      </ol>
    </SiteShell>
  );
}
