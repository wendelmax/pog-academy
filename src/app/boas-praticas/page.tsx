import Link from "next/link";

export const metadata = {
  title: "GDPs e Boas Práticas | POG Academy",
  description:
    "Gambi Design Patterns (GDPs) e como ser ágil sem cair na gambiarra: entregas rápidas com qualidade e práticas sustentáveis.",
};

export default function BoasPraticasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Gambi Design Patterns (GDPs) e Boas Práticas
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        O Livro POG documenta os Gambi Design Patterns (GDPs), padrões de
        projeto de gambiarra; o catálogo completo de GDPs está em{" "}
        <a
          href="https://livropog.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
        >
          livropog.com.br
        </a>
        . Aqui o foco é em práticas recomendadas para não cair na POG: a
        agilidade real entrega valor rápido mantendo qualidade mínima,
        visibilidade e capacidade de evoluir. Abaixo, princípios aplicáveis a
        POC, MVP e entregas contínuas.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          POC (Prova de Conceito)
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Objetivo: validar uma ideia ou viabilidade técnica no menor tempo
          possível. Mesmo em POC, é importante deixar explícito o escopo (o que
          está sendo provado), o critério de sucesso e o que não será mantido.
          Evite código que vira produção por acidente; se possível, testes
          mínimos nos pontos críticos reduzem risco quando a POC virar produto.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-400">
          <li>Definir claramente a pergunta que a POC responde</li>
          <li>Documentar suposições e limites (tempo, escopo)</li>
          <li>Comunicar ao stakeholder que POC não é produto final</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          MVP (Produto Mínimo Viável)
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          MVP entrega o mínimo que gera valor e aprendizado. Diferente da POG,
          &quot;mínimo&quot; não significa código ilegível ou sem testes: significa
          escopo enxuto com qualidade suficiente para iterar. Dívida técnica
          deve ser registrada no backlog e priorizada; não ignorada.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-400">
          <li>Definition of Done mínima: compila, testes críticos, revisão</li>
          <li>Backlog de dívida técnica com priorização explícita</li>
          <li>Entregas parciais reais, não promessas de &quot;depois a gente arruma&quot;</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Velocidade sustentável
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Ser rápido uma vez e quebrar depois não é ágil. Velocidade
          sustentável combina prazo, custo e qualidade de forma transparente:
          negociar escopo quando o prazo é fixo, comunicar riscos e evitar
          atalhos que multiplicam problemas (o ciclo &quot;quanto mais POG, mais
          precisará fazer&quot;).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Referências
        </h2>
        <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>
            <a
              href="https://livropog.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
            >
              Livro POG – livropog.com.br
            </a>
          </li>
          <li>
            <a
              href="https://martinfowler.com/bliki/TechnicalDebt.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
            >
              Martin Fowler – Technical Debt
            </a>
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/principios"
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-orange-600 dark:hover:bg-orange-500"
        >
          Ver princípios
        </Link>
        <Link
          href="/certificacao"
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Certificação POG
        </Link>
      </div>
    </div>
  );
}
