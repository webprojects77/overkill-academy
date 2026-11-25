// Conteúdo institucional da Academy. Fonte: docs/academy (Documento 00 e Documento 02).
// Nada aqui é "disponível": tudo que não foi revisado aparece como planejado.

export type AreaStatus = "planejado";

export interface Area {
  id: string;
  name: string;
  etapa: 1 | 2 | 3 | 4 | 0;
  subjects: number;
  status: AreaStatus;
}

export const ETAPAS: Record<number, { name: string; goal: string }> = {
  1: { name: "Fundamentos", goal: "Construir a base matemática." },
  2: { name: "Matemática intermediária", goal: "Desenvolver abstração e resolução de problemas." },
  3: { name: "Matemática avançada", goal: "Estudar estruturas, análise e métodos matemáticos." },
  4: { name: "Especializada e computacional", goal: "Aplicar matemática em áreas técnicas." },
  0: { name: "Futuro", goal: "Áreas reservadas para expansão." },
};

// Contagens conferidas contra o cadastro atual (144 assuntos, 17 áreas).
export const AREAS: Area[] = [
  { id: "fundamentos", name: "Fundamentos matemáticos", etapa: 1, subjects: 8, status: "planejado" },
  { id: "aritmetica", name: "Aritmética", etapa: 1, subjects: 8, status: "planejado" },
  { id: "potencias-logaritmos", name: "Potenciação, radiciação e logaritmos", etapa: 1, subjects: 8, status: "planejado" },
  { id: "matematica-aplicada", name: "Matemática aplicada", etapa: 1, subjects: 6, status: "planejado" },
  { id: "algebra", name: "Álgebra", etapa: 2, subjects: 10, status: "planejado" },
  { id: "funcoes", name: "Funções", etapa: 2, subjects: 8, status: "planejado" },
  { id: "trigonometria", name: "Trigonometria", etapa: 2, subjects: 13, status: "planejado" },
  { id: "geometria", name: "Geometria", etapa: 2, subjects: 13, status: "planejado" },
  { id: "estatistica", name: "Estatística", etapa: 2, subjects: 11, status: "planejado" },
  { id: "probabilidade", name: "Probabilidade e combinatória", etapa: 2, subjects: 5, status: "planejado" },
  { id: "matrizes", name: "Matrizes e vetores", etapa: 3, subjects: 12, status: "planejado" },
  { id: "calculo", name: "Cálculo", etapa: 3, subjects: 10, status: "planejado" },
  { id: "discreta", name: "Matemática discreta", etapa: 3, subjects: 7, status: "planejado" },
  { id: "computacional", name: "Matemática computacional", etapa: 4, subjects: 10, status: "planejado" },
  { id: "financeira", name: "Matemática financeira e modelagem", etapa: 4, subjects: 4, status: "planejado" },
  { id: "especializados", name: "Tópicos especializados", etapa: 4, subjects: 4, status: "planejado" },
  { id: "laboratorio-geometria", name: "Laboratório de geometria (futuro)", etapa: 0, subjects: 7, status: "planejado" },
];

export const TOTAL_SUBJECTS = AREAS.reduce((sum, a) => sum + a.subjects, 0);

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Preciso saber matemática para começar?",
    a: "Não. A formação começa pelos fundamentos e não presume conhecimento prévio. O diagnóstico inicial, quando disponível, indica por onde começar.",
  },
  {
    q: "As aulas já estão disponíveis?",
    a: "Parte do conteúdo está em produção e em revisão. Assuntos ainda não revisados aparecem como planejados.",
  },
  {
    q: "A Academy é gratuita?",
    a: "[PRECISA CONFIRMAR] Modelo de sustentabilidade e eventuais condições de pagamento ainda não foram definidos.",
  },
  {
    q: "Os certificados são diplomas oficiais?",
    a: "Não. Os certificados são emitidos pela OVERKILL Academy e não são títulos acadêmicos ou profissionais reconhecidos por órgãos externos, salvo quando houver acreditação específica. [PRECISA CONFIRMAR]",
  },
  {
    q: "Quando abrem as inscrições?",
    a: "[PRECISA CONFIRMAR] Data não definida. O cadastro depende da fase de contas.",
  },
];

export const METHOD: { title: string; text: string }[] = [
  { title: "Ensinar antes de cobrar", text: "Nenhum exercício exige conteúdo que ainda não foi ensinado ou identificado como pré-requisito." },
  { title: "Pré-requisitos explícitos", text: "Cada assunto mostra o que precisa ser dominado antes. Se algo faltar, você recebe um aviso com links, sem bloqueio." },
  { title: "Domínio, não só visualização", text: "Ver uma aula, concluir uma atividade e acertar uma questão não são o mesmo que dominar. A Academy distingue os três." },
  { title: "Sem repetição desnecessária", text: "Se você já demonstrou um conteúdo, recebe apenas uma revisão breve." },
];

export const PRINCIPLES: string[] = [
  "O conhecimento é apresentado com clareza.",
  "Você não repete o que já demonstrou dominar.",
  "Acerto ocasional não é tratado como domínio.",
  "Avaliações são justas e transparentes.",
  "Suspeita de fraude nunca gera punição automática sem análise.",
  "Todo conteúdo passa por revisão antes de ser publicado.",
  "Colaboradores recebem crédito; direitos autorais são respeitados.",
  "Dados pessoais são protegidos e não ficam públicos por padrão.",
  "Acessibilidade é considerada desde o início.",
  "Funcionalidades planejadas não são apresentadas como disponíveis.",
];

export const HOW_STEPS: { title: string; text: string; status: string }[] = [
  { title: "Conheça a plataforma", text: "Leia a proposta, a formação e as regras antes de criar qualquer conta.", status: "Disponível" },
  { title: "Crie uma conta", text: "Cadastro com e-mail e senha, Google ou Microsoft.", status: "Planejado (fase 2)" },
  { title: "Faça sua inscrição", text: "Confirme seus dados essenciais e aceite os documentos aplicáveis.", status: "Planejado (fase 2)" },
  { title: "Faça o diagnóstico", text: "Uma avaliação para descobrir o que você já domina. Não é prova eliminatória.", status: "Planejado (fase 4)" },
  { title: "Receba sua trilha", text: "Um percurso personalizado a partir do diagnóstico.", status: "Planejado (fase 4)" },
  { title: "Estude e pratique", text: "Aulas, exercícios com correção e explicações.", status: "Planejado (fase 5)" },
  { title: "Acompanhe sua evolução", text: "Progresso por módulo e competência, sem porcentagem única.", status: "Planejado (fase 5)" },
  { title: "Receba certificados", text: "Quando houver conclusão real de aula, módulo, trilha ou formação.", status: "Planejado (fase 8)" },
];

export const COLLAB_ROLES: string[] = [
  "Professores",
  "Educadores",
  "Especialistas",
  "Revisores matemáticos",
  "Revisores pedagógicos",
  "Produtores de videoaulas",
  "Criadores de materiais didáticos",
];

export const COLLAB_STEPS: string[] = [
  "Você manifesta interesse e cria um cadastro de colaborador.",
  "Informa sua experiência relevante.",
  "A equipe avalia a solicitação.",
  "Se aprovado, recebe permissões específicas.",
  "Envia conteúdos.",
  "Os conteúdos passam por revisão matemática, pedagógica, audiovisual, de acessibilidade e de direitos autorais.",
  "Materiais aprovados são publicados com o nome do autor.",
];
