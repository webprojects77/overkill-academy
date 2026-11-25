import { SiteShell, PageHeader, Card } from "../components/site-shell";
import { Link } from "wouter";

export type LegalKey = "privacidade" | "termos" | "cookies" | "conteudo";

const DOCS: Record<LegalKey, { title: string; points: string[] }> = {
  privacidade: {
    title: "Política de privacidade",
    points: [
      "Coletamos apenas os dados necessários para operar a Academy.",
      "Dados pessoais e acadêmicos não ficam públicos por padrão.",
      "Você pode solicitar acesso, correção e exclusão da conta.",
      "[PRECISA CONFIRMAR] Base legal, prazos de retenção, operador e encarregado de dados (LGPD).",
      "[PRECISA CONFIRMAR] Regras para menores de idade, se o público incluir crianças e adolescentes.",
    ],
  },
  termos: {
    title: "Termos de uso",
    points: [
      "Regras de uso da plataforma e de participação.",
      "Funcionalidades planejadas não são garantidas até estarem disponíveis.",
      "[PRECISA CONFIRMAR] Texto jurídico definitivo, revisado por advogado.",
    ],
  },
  cookies: {
    title: "Política de cookies",
    points: [
      "Nesta fase do site institucional, não há cookies de conta.",
      "[PRECISA CONFIRMAR] Cookies e medições quando houver login e análise de uso.",
    ],
  },
  conteudo: {
    title: "Política de conteúdo",
    points: [
      "Todo conteúdo passa por revisão matemática, pedagógica e de direitos autorais.",
      "Conteúdo não revisado não é apresentado como publicado.",
      "[PRECISA CONFIRMAR] Processo de denúncia e correção de conteúdo.",
    ],
  },
};

export function Legal({ doc }: { doc: LegalKey }) {
  const d = DOCS[doc];
  return (
    <SiteShell>
      <PageHeader eyebrow="Documento legal" title={d.title} lead="Versão de rascunho. Não vale como texto final." />
      <Card>
        <ul className="grid list-disc gap-3 pl-5 leading-relaxed text-[#9AA6BD]">
          {d.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Card>
      <p className="mt-8 text-sm text-[#9AA6BD]">
        Dúvidas: <Link href="/contato" className="text-[#7FB6FF] underline">canal de contato</Link>.
      </p>
    </SiteShell>
  );
}

export default function LegalPage(props: { doc: LegalKey }) {
  return <Legal doc={props.doc} />;
}
