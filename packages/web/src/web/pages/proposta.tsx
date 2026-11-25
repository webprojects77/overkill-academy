import { SiteShell, PageHeader, Card } from "../components/site-shell";
import { METHOD, PRINCIPLES } from "../content/academy";

export default function Proposta() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Nossa proposta"
        title="Matemática organizada para quem está começando e para quem quer ir além"
        lead="A Academy existe porque aprender matemática costuma falhar por falta de ordem: conceitos aparecem fora de sequência e ninguém diz o que falta saber. Aqui, cada assunto mostra o que vem antes."
      />

      <section aria-labelledby="metodologia" className="grid gap-5 md:grid-cols-2">
        <h2 id="metodologia" className="sr-only">Metodologia</h2>
        {METHOD.map((m, i) => (
          <Card key={m.title} delay={i * 90}>
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="mt-2 leading-relaxed text-[#9AA6BD]">{m.text}</p>
          </Card>
        ))}
      </section>

      <section className="mt-14" aria-labelledby="acompanhamento">
        <h2 id="acompanhamento" className="text-2xl font-bold">Como você é acompanhado</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-[#9AA6BD]">
          Seu progresso aparece por módulo, competência e objetivo. Não existe uma porcentagem única que resume tudo. O
          suporte responde por categoria (acesso, cadastro, dúvidas sobre aulas, avaliações, certificados, privacidade).
          <span className="ml-1 text-[#F5B942]">[PRECISA CONFIRMAR] prazos de atendimento.</span>
        </p>
      </section>

      <section className="mt-14" aria-labelledby="principios">
        <h2 id="principios" className="text-2xl font-bold">Princípios</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p} className="flex gap-3 rounded-lg border border-white/10 bg-[#0B1A3A]/40 p-4 text-[#F2F5FA]">
              <span aria-hidden className="text-[#7FB6FF]">▸</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="evolucao">
        <h2 id="evolucao" className="text-2xl font-bold">Como a plataforma evolui</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-[#9AA6BD]">
          Em etapas: site e contas primeiro, depois estrutura acadêmica, diagnóstico, ambiente de aprendizagem, vídeos,
          colaboração e certificados. Cada etapa só é anunciada quando estiver no ar.
        </p>
      </section>
    </SiteShell>
  );
}
