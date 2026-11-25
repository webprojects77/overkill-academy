import { SiteShell, PageHeader, Card } from "../components/site-shell";

const CATEGORIAS = [
  "Problemas de acesso",
  "Problemas de cadastro",
  "Dúvidas sobre aulas",
  "Problemas em avaliações",
  "Certificados",
  "Privacidade e dados",
  "Denúncias",
  "Sugestões",
  "Problemas técnicos",
];

export default function Contato() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contato e suporte"
        title="Fale com a equipe"
        lead="Escolha a categoria do seu assunto para encaminhar mais rápido."
      />
      <Card className="max-w-2xl">
        <h2 className="text-lg font-semibold">Categorias</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {CATEGORIAS.map((c) => (
            <li key={c} className="text-[#9AA6BD]">• {c}</li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg bg-[#F5B942]/10 p-4 text-[#F5B942]">
          [PRECISA CONFIRMAR] E-mail oficial, formulário e prazo de resposta ainda não definidos. Nenhum canal está ativo
          nesta versão.
        </p>
      </Card>
    </SiteShell>
  );
}
