import Link from "next/link";
import DiagramPogVsSaudavel from "@/components/DiagramPogVsSaudavel";

export const metadata = {
  title: "O que é POG | POG Academy",
  description:
    "Origem e contexto da Programação Orientada a Gambiarra (POG), por que estudar de forma séria e o que extrair. Baseado no Livro POG.",
};

export default function OQueEPogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        O que é POG (Programação Orientada a Gambiarra)
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        A Programação Orientada a Gambiarra (POG) é a técnica de desenvolvimento
        de software mais utilizada no mercado, documentada no Livro POG
        (livropog.com.br). O livro documenta a história da POG, os requisitos
        necessários para o nascimento da POG, as técnicas utilizadas no
        sumonamento da POG e os principais padrões de projeto de gambiarra,
        os Gambi Design Patterns (GDPs). Embora apresentada com humor, funciona
        como crítica às gambiarras, ao improviso e à priorização cega de prazo
        e custo em detrimento da qualidade.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Por que estudar POG de forma séria?
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Conhecer os princípios da POG e os GDPs permite identificar
          rapidamente quando um projeto ou time está adotando essas práticas. Em
          cenários de alta pressão (prazos curtos, POC, MVP), é comum que
          equipes caiam em atalhos que parecem ágeis mas geram dívida técnica e
          risco. O estudo formal da POG ajuda a:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Reconhecer anti-padrões antes que virem cultura</li>
          <li>Defender práticas mínimas mesmo em entregas rápidas</li>
          <li>Comunicar riscos usando uma linguagem conhecida no mercado</li>
          <li>Priorizar o que realmente entrega valor sem sacrificar sustentabilidade</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          A verdade além da brincadeira
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          A &quot;verdade&quot; que extraímos não é adotar a POG, e sim o oposto:
          ser produtivo e ágil para entregar POC, MVP e produtos reais
          mantendo um mínimo de qualidade, visibilidade e responsabilidade.
          Isso inclui testes críticos, refatoração possível, escopo negociado e
          transparência com o cliente. A POG Academy existe para formalizar
          esse conhecimento e certificar que você domina tanto os princípios
          quanto as alternativas corretas.
        </p>
        <DiagramPogVsSaudavel />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Referências
        </h2>
        <ul className="mt-3 space-y-2">
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
              href="https://github.com/josenaldo/livro-pog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
            >
              GitHub – josenaldo/livro-pog
            </a>
          </li>
          <li>
            <a
              href="https://agilemanifesto.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
            >
              Manifesto Ágil – agilemanifesto.org
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
          href="/boas-praticas"
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          GDPs e boas práticas
        </Link>
      </div>
    </div>
  );
}
