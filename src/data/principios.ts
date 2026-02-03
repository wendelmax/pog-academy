export interface Principio {
  id: number;
  titulo: string;
  descricao: string;
  antiPadrao: string;
  nomeLivro?: string;
}

export const principios: Principio[] = [
  {
    id: 1,
    titulo: "Pensou, não é POG",
    descricao: "POG não pensa, faz a primeira coisa que vem à mente. Não existe segunda opção.",
    antiPadrao: "Planejamento mínimo, análise de impacto e decisão consciente antes de codificar.",
    nomeLivro: "O Teorema de Namarra",
  },
  {
    id: 2,
    titulo: "Três formas de resolver",
    descricao: "A correta, a errada e a POG — igual à errada, só que mais rápida.",
    antiPadrao: "Velocidade sustentável: entregar valor com qualidade que não gera dívida técnica.",
    nomeLivro: "Economia Linear",
  },
  {
    id: 3,
    titulo: "Quanto mais POG, mais precisará fazer",
    descricao: "Para cada problema resolvido com POG, mais uns sete são criados.",
    antiPadrao: "Refatoração contínua e código que reduz problemas futuros.",
  },
  {
    id: 4,
    titulo: "POG é totalmente reativa",
    descricao: "Os erros só existem quando aparecem.",
    antiPadrao: "Prevenção: testes, revisões e monitoramento proativo.",
    nomeLivro: "Insistimento Determinante",
  },
  {
    id: 5,
    titulo: "POG vale tudo",
    descricao: "Resolveu o problema? Compilou? Commit e era isso.",
    antiPadrao: "Definition of Done: testes, revisão, documentação mínima.",
    nomeLivro: "Imperativo Funcional",
  },
  {
    id: 6,
    titulo: "Commit sempre antes de update",
    descricao: "Se der problema, sua parte estará sempre correta.",
    antiPadrao: "Integração contínua, responsabilidade compartilhada e comunicação.",
  },
  {
    id: 7,
    titulo: "POG não tem prazo",
    descricao: "Os prazos do cliente são meros detalhes. Você sempre implementará tudo no tempo.",
    antiPadrao: "Negociação de escopo, transparência e entregas parciais reais.",
  },
  {
    id: 8,
    titulo: "Pular fora ou culpar",
    descricao: "Quando o barco afundar, esteja pronto para sair ou atribuir a culpa.",
    antiPadrao: "Ownership, post-mortems construtivos e melhoria de processo.",
    nomeLivro: "Redireção Tangencial",
  },
  {
    id: 9,
    titulo: "POG não respeita padrões",
    descricao: "Escreva o código como bem entender.",
    antiPadrao: "Convenções de código, style guides e consistência na base.",
    nomeLivro: "Documentação Espartana",
  },
  {
    id: 10,
    titulo: "Não existe refactoring, apenas rework",
    descricao: "Se der problema, refaça um POG rápido. O rework vira reescrever tudo.",
    antiPadrao: "Refatoração incremental e dívida técnica controlada.",
    nomeLivro: "Devaneio Entusiasmado",
  },
  {
    id: 11,
    titulo: "Se tiver funcionando, não mexa",
    descricao: "Nunca altere código que funciona. Refactoring não existe.",
    antiPadrao: "Melhoria contínua mesmo em código que 'funciona'.",
  },
  {
    id: 12,
    titulo: "Teste é para os fracos",
    descricao: "Se você sabe o que está fazendo, para que testar? Compilou, basta.",
    antiPadrao: "Testes automatizados como base para refatoração e entrega segura.",
  },
  {
    id: 13,
    titulo: "Prazo e custo absolutos, qualidade relativa",
    descricao: "Qualidade é detalhe. Pense no menor tempo de implementação.",
    antiPadrao: "Qualidade como requisito não negociável para entrega sustentável.",
    nomeLivro: "Simplicidade Indolente",
  },
  {
    id: 14,
    titulo: "O problema só é seu quando seu nome está no Doc",
    descricao: "Nunca ponha a mão numa classe cujo autor não é você.",
    antiPadrao: "Code ownership coletivo, pair programming e conhecimento compartilhado.",
    nomeLivro: "Proatividade Egocêntrica",
  },
  {
    id: 15,
    titulo: "Não remar contra a maré",
    descricao: "Se os colegas usam POG, esqueça fazer certo.",
    antiPadrao: "Influência positiva, exemplos e melhoria gradual do time.",
  },
  {
    id: 16,
    titulo: "Iluda-se com promessas de melhoria",
    descricao: "TODO no código como promessa. O refactoring nunca será feito.",
    antiPadrao: "Backlog de dívida técnica com priorização e sprints de melhoria.",
    nomeLivro: "Foco Morcegativo",
  },
  {
    id: 17,
    titulo: "POG não é perigoso até surgir ordem",
    descricao: "Não tente por ordem no caos. O projeto afunda mais rápido.",
    antiPadrao: "Introduzir ordem gradual: métricas, ritmos e transparência.",
  },
  {
    id: 18,
    titulo: "Gerente de projeto é descartável",
    descricao: "Cada um faz o que quiser quando o problema surgir.",
    antiPadrao: "Papéis claros, alinhamento de prioridades e visibilidade do trabalho.",
  },
  {
    id: 19,
    titulo: "Quando o barco afundar, esteja pronto para pular fora",
    descricao: "Ou atribuir a culpa. O importante é não ser o último.",
    antiPadrao: "Post-mortems sem culpa e melhoria de processo.",
  },
  {
    id: 20,
    titulo: "Para cada problema resolvido com POG, mais sete surgirão",
    descricao: "Todos resolvidos com POG. O ciclo não tem fim.",
    antiPadrao: "Refatoração e prevenção para quebrar o ciclo.",
  },
];
