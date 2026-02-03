export type CertificationLevel = "foundation" | "practitioner" | "expert" | "gdp";

export interface CertificationLevelInfo {
  id: CertificationLevel;
  name: string;
  description: string;
  durationMinutes: number;
  minScore: number;
  questionCount: number;
}

export const certificationLevels: CertificationLevelInfo[] = [
  {
    id: "foundation",
    name: "POG Foundation",
    description: "Conhecimento da Programação Orientada a Gambiarra, história e capacidade de identificar práticas POG e alternativas saudáveis.",
    durationMinutes: 45,
    minScore: 70,
    questionCount: 12,
  },
  {
    id: "practitioner",
    name: "POG Practitioner",
    description: "Aplicação em cenários reais: reconhecer gambiarras, GDPs e aplicar alternativas sustentáveis.",
    durationMinutes: 60,
    minScore: 75,
    questionCount: 17,
  },
  {
    id: "expert",
    name: "POG Expert",
    description: "Domínio completo: Gambi Design Patterns, liderança e transformação de times para práticas sustentáveis.",
    durationMinutes: 90,
    minScore: 80,
    questionCount: 15,
  },
  {
    id: "gdp",
    name: "POG GDP",
    description: "Gambi Design Patterns: padrões de projeto de gambiarra documentados no Livro POG e alternativas recomendadas.",
    durationMinutes: 45,
    minScore: 70,
    questionCount: 12,
  },
];

export interface ExamQuestion {
  id: string;
  level: CertificationLevel;
  question: string;
  options: string[];
  correctIndex: number;
}

export const examQuestions: ExamQuestion[] = [
  {
    id: "f1",
    level: "foundation",
    question: "Segundo o Livro POG, a Programação Orientada a Gambiarra é:",
    options: [
      "Uma técnica de desenvolvimento documentada e muito utilizada no mercado, que prioriza solução rápida sem planejamento.",
      "Uma metodologia formal com processos rígidos e documentação obrigatória.",
      "Sinônimo de Extreme Programming (XP).",
      "Uma prática recomendada pela Agile Alliance.",
    ],
    correctIndex: 0,
  },
  {
    id: "f2",
    level: "foundation",
    question: "Os Gambi Design Patterns (GDPs) são:",
    options: [
      "Padrões de projeto que promovem qualidade e manutenibilidade.",
      "Padrões de projeto de gambiarra documentados no Livro POG.",
      "Padrões de segurança de código.",
      "Padrões de arquitetura em nuvem.",
    ],
    correctIndex: 1,
  },
  {
    id: "f3",
    level: "foundation",
    question: "Por que estudar POG de forma séria?",
    options: [
      "Para adotar gambiarras em todos os projetos.",
      "Para reconhecer anti-padrões, defender práticas mínimas e comunicar riscos.",
      "Para eliminar todo tipo de solução temporária.",
      "Para substituir metodologias ágeis.",
    ],
    correctIndex: 1,
  },
  {
    id: "f4",
    level: "foundation",
    question: "A alternativa saudável à gambiarra 'fazer a primeira coisa que vier à mente' é:",
    options: [
      "Nunca codificar sem documentação completa.",
      "Planejamento mínimo, análise de impacto e decisão consciente antes de codificar.",
      "Sempre seguir um processo em cascata.",
      "Delegar todas as decisões ao gerente.",
    ],
    correctIndex: 1,
  },
  {
    id: "f5",
    level: "foundation",
    question: "No contexto POG, 'qualidade é relativa' significa:",
    options: [
      "Qualidade é o principal critério de aceite.",
      "Prazo e custo são absolutos; qualidade é negociável e muitas vezes sacrificada.",
      "Qualidade deve ser medida com métricas objetivas sempre.",
      "Qualidade é responsabilidade exclusiva do QA.",
    ],
    correctIndex: 1,
  },
  {
    id: "f6",
    level: "foundation",
    question: "O Livro POG (livropog.com.br) tem como intuito:",
    options: [
      "Ensinar a aplicar apenas gambiarras em produção.",
      "Documentar a história da POG, requisitos para seu nascimento, técnicas e os Gambi Design Patterns (GDPs).",
      "Substituir o Manifesto Ágil.",
      "Promover apenas desenvolvimento em Java.",
    ],
    correctIndex: 1,
  },
  {
    id: "f7",
    level: "foundation",
    question: "A prática recomendada em oposição a 'não existe refactoring, apenas rework' é:",
    options: [
      "Nunca alterar código após a primeira entrega.",
      "Refatoração incremental e dívida técnica controlada.",
      "Reescrever todo o sistema do zero a cada release.",
      "Congelar o código em produção.",
    ],
    correctIndex: 1,
  },
  {
    id: "f8",
    level: "foundation",
    question: "Para evitar o efeito 'quanto mais POG, mais problemas', a prática recomendada é:",
    options: [
      "Resolver cada problema o mais rápido possível sem considerar consequências.",
      "Refatoração contínua e código que reduz problemas futuros.",
      "Aumentar o número de TODOs no código.",
      "Não corrigir bugs antigos.",
    ],
    correctIndex: 1,
  },
  {
    id: "f9",
    level: "foundation",
    question: "POG é descrita como 'totalmente reativa' porque:",
    options: [
      "Erros são prevenidos com testes e revisões.",
      "Erros só importam quando aparecem; não há prevenção.",
      "Há monitoramento proativo 24/7.",
      "Toda ação é planejada com antecedência.",
    ],
    correctIndex: 1,
  },
  {
    id: "f10",
    level: "foundation",
    question: "A alternativa saudável a 'Se tiver funcionando, não mexa' é:",
    options: [
      "Nunca alterar código em produção.",
      "Melhoria contínua e refatoração mesmo em código que funciona.",
      "Congelar o código após a primeira entrega.",
      "Só mexer com autorização do gerente.",
    ],
    correctIndex: 1,
  },
  {
    id: "f11",
    level: "foundation",
    question: "O autor do Livro POG (Josenaldo de Oliveira Matos Filho) descreve a POG como:",
    options: [
      "Uma metodologia patenteada e paga.",
      "A técnica de desenvolvimento de software mais utilizada do mercado (em tom de documentação/sátira).",
      "Exclusiva para Java e Spring.",
      "Substituída completamente por Agile.",
    ],
    correctIndex: 1,
  },
  {
    id: "f12",
    level: "foundation",
    question: "Na prática sustentável, prazos e escopo são tratados com:",
    options: [
      "Compromisso de entregar tudo no prazo a qualquer custo.",
      "Negociação de escopo, transparência e entregas parciais reais.",
      "Ocultar atrasos do cliente.",
      "Não definir prazo.",
    ],
    correctIndex: 1,
  },
  {
    id: "p1",
    level: "practitioner",
    question: "Em um POC com prazo apertado, a abordagem que equilibra agilidade e responsabilidade é:",
    options: [
      "Implementar sem testes e documentar depois.",
      "Definir escopo mínimo, fazer testes críticos e deixar explícito o que é POC.",
      "Não definir escopo e implementar tudo que for pedido.",
      "Evitar qualquer refatoração até o fim do projeto.",
    ],
    correctIndex: 1,
  },
  {
    id: "p2",
    level: "practitioner",
    question: "Quando o time usa POG e você quer melhorar, a atitude recomendada é:",
    options: [
      "Desistir e adotar POG também.",
      "Influência positiva, exemplos concretos e melhoria gradual.",
      "Impor novas regras sem discussão.",
      "Trabalhar sozinho sem integrar com o time.",
    ],
    correctIndex: 1,
  },
  {
    id: "p3",
    level: "practitioner",
    question: "No MVP, a dívida técnica deve ser:",
    options: [
      "Ignorada completamente.",
      "Registrada e priorizada no backlog com prazo de resolução.",
      "Resolvida antes de qualquer nova funcionalidade.",
      "Deixada para quando o sistema for reescrito.",
    ],
    correctIndex: 1,
  },
  {
    id: "p4",
    level: "practitioner",
    question: "Definition of Done em um contexto ágil deve incluir:",
    options: [
      "Apenas 'compilou e commit'.",
      "Testes, revisão e critérios de aceite atendidos.",
      "Documentação completa antes de qualquer código.",
      "Aprovação de todos os stakeholders.",
    ],
    correctIndex: 1,
  },
  {
    id: "p5",
    level: "practitioner",
    question: "Para um MVP, o critério de priorização do backlog deve priorizar:",
    options: [
      "O que o cliente pediu primeiro na reunião.",
      "Valor entregue ao usuário e aprendizado validado com o menor esforço.",
      "Todas as funcionalidades com o mesmo peso.",
      "Só itens técnicos para reduzir dívida.",
    ],
    correctIndex: 1,
  },
  {
    id: "e1",
    level: "expert",
    question: "Para transformar um ambiente POG em práticas sustentáveis, o primeiro passo é:",
    options: [
      "Introduzir ordem total de uma vez.",
      "Introduzir ordem gradual: visibilidade, métricas e ritmos.",
      "Substituir toda a equipe.",
      "Congelar o produto e reescrever do zero.",
    ],
    correctIndex: 1,
  },
  {
    id: "e2",
    level: "expert",
    question: "O anti-padrão 'rewrite from scratch' costuma falhar porque:",
    options: [
      "A equipe nova nunca entende o legado.",
      "Ignora dívida de domínio e risco; refatoração gradual com testes costuma ser mais segura.",
      "Linguagens antigas não suportam refatoração.",
      "Não há ferramentas para reescrita.",
    ],
    correctIndex: 1,
  },
  {
    id: "gdp1",
    level: "gdp",
    question: "Um Gambi Design Pattern (GDP) típico é:",
    options: [
      "Singleton para gerenciamento de estado global.",
      "Padrão de 'resolver rápido sem considerar consequências' documentado no Livro POG.",
      "Padrão de testes automatizados.",
      "Padrão de documentação técnica.",
    ],
    correctIndex: 1,
  },
  {
    id: "gdp2",
    level: "gdp",
    question: "Os GDPs (Gambi Design Patterns) servem para:",
    options: [
      "Promover gambiarras em produção.",
      "Documentar padrões de gambiarra e, por contraste, valorizar alternativas saudáveis.",
      "Substituir os padrões GoF.",
      "Eliminar toda solução temporária.",
    ],
    correctIndex: 1,
  },
];

export const CERTIFICATION_LEVEL_IDS = certificationLevels.map((l) => l.id);

function getShuffledPool(level: CertificationLevel): ExamQuestion[] {
  const filtered = examQuestions.filter((q) => q.level === level);
  return [...filtered].sort(() => Math.random() - 0.5);
}

function getQuestionsForLevel(level: CertificationLevel, count: number): ExamQuestion[] {
  const pool = getShuffledPool(level);
  return pool.slice(0, Math.min(count, pool.length));
}

function fillWithFoundation(pool: ExamQuestion[], target: number): ExamQuestion[] {
  if (pool.length >= target) return pool.slice(0, target);
  const foundation = getShuffledPool("foundation");
  const result = [...pool];
  const needed = target - result.length;
  for (let i = 0; i < needed && foundation.length > 0; i++) {
    result.push(foundation[i % foundation.length]);
  }
  return result.slice(0, target);
}

export function buildExam(level: CertificationLevel): ExamQuestion[] {
  const info = certificationLevels.find((l) => l.id === level);
  const count = info?.questionCount ?? 12;
  let pool = getQuestionsForLevel(level, count);
  if (pool.length < count) {
    pool = fillWithFoundation(pool, count);
  } else {
    pool = pool.slice(0, count);
  }
  return pool.sort(() => Math.random() - 0.5);
}
