import { SiteShell, PageHeader, Card, Badge } from "../components/site-shell";
import { AREAS, ETAPAS, TOTAL_SUBJECTS } from "../content/academy";

const FERRAMENTAS = [
  "Calculadora e operações básicas",
  "Calculadora científica",
  "Ferramentas algébricas",
  "Matrizes",
  "Estatística",
  "Gráficos",
  "Conversão e utilitários",
  "Notebook",
  "Configurações e personalização",
  "Instalação e utilização da plataforma",
];

export default function Formacao() {
  const etapas = [1, 2, 3, 4] as const;

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Formação"
        title="Estrutura curricular"
        lead={`${AREAS.length - 1} áreas e ${TOTAL_SUBJECTS} assuntos mapeados. Tudo abaixo é planejado: nenhum assunto está publicado antes de passar por revisão matemática e pedagógica.`}
      />

      <div className="grid gap-10">
        {etapas.map((e) => {
          const areas = AREAS.filter((a) => a.etapa === e);
          return (
            <section key={e} aria-labelledby={`etapa-${e}`}>
              <div className="mb-4 flex flex-wrap items-baseline gap-3">
                <h2 id={`etapa-${e}`} className="text-2xl font-bold">
                  Etapa {e} — {ETAPAS[e].name}
                </h2>
                <span className="text-[#9AA6BD]">{ETAPAS[e].goal}</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {areas.map((a) => (
                  <Card key={a.id} className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{a.name}</h3>
                      <p className="mt-1 text-sm text-[#9AA6BD]">{a.subjects} assuntos</p>
                    </div>
                    <Badge>Planejado</Badge>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-14" aria-labelledby="futuro">
        <h2 id="futuro" className="text-2xl font-bold">Laboratório de geometria</h2>
        <p className="mt-3 max-w-3xl text-[#9AA6BD]">
          Área reservada para expansão futura. Não há conteúdo publicado.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="ferramentas">
        <h2 id="ferramentas" className="text-2xl font-bold">Formação específica da OVERKILL</h2>
        <p className="mt-3 max-w-3xl text-[#9AA6BD]">
          Tutoriais das ferramentas da calculadora, relacionados aos conteúdos matemáticos. Inventário e revisão em andamento.
        </p>
        <ul className="mt-5 grid gap-2 md:grid-cols-2">
          {FERRAMENTAS.map((f) => (
            <li key={f} className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
              <span>{f}</span>
              <Badge>Planejado</Badge>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[#9AA6BD]">Oracle, Geometria interativa e Plugins: em breve.</p>
      </section>
    </SiteShell>
  );
}
