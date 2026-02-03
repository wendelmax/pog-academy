import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section className="text-center">
        <Image
          src="/pog-certificacao-badge.png"
          alt="POG Academy"
          width={480}
          height={480}
          className="mx-auto w-full max-w-[480px]"
          priority
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          POG Academy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Aprendizado formal sobre Programação Orientada a Gambiarra: da sátira à
          verdade aplicável. Conheça os Gambi Design Patterns (GDPs) e alternativas
          sustentáveis.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/o-que-e-pog"
            className="rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition hover:bg-neutral-700 dark:bg-orange-600 dark:hover:bg-orange-500"
          >
            Começar a estudar
          </Link>
          <Link
            href="/certificacao"
            className="rounded-lg border border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Certificação POG
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          href="/o-que-e-pog"
          title="O que é POG"
          description="Origem, contexto e por que estudar a Programação Orientada a Gambiarra de forma séria. Baseado no Livro POG."
        />
        <Card
          href="/manifesto"
          title="Manifesto POG"
          description="Declaração de valores e princípios da POG, em formato de manifesto, com contraste ao Manifesto Ágil."
        />
        <Card
          href="/principios"
          title="Princípios"
          description="Lista dos princípios da POG com contraste às práticas recomendadas para não repetir os erros."
        />
        <Card
          href="/boas-praticas"
          title="GDPs e Boas Práticas"
          description="Gambi Design Patterns (GDPs) e como ser ágil sem cair na gambiarra: entregas rápidas com qualidade."
        />
        <Card
          href="/certificacao"
          title="Certificação"
          description="Níveis Foundation, Practitioner, Expert e GDP. Provas formais e certificado verificável."
        />
        <Card
          href="/validar"
          title="Validar Certificado"
          description="Consulte a autenticidade de um certificado pelo ID ou pela identificação do participante."
        />
      </section>

      <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Por que uma academia POG?
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          A Programação Orientada a Gambiarra é a técnica de desenvolvimento mais
          utilizada no mercado (em tom de documentação e sátira). O Livro POG
          documenta a história, os requisitos para o nascimento da POG, as
          técnicas de sumonamento e os Gambi Design Patterns (GDPs). Aqui
          tratamos o tema com seriedade: identificar o que não fazer e, em
          contraste, o que fazer para entregar com qualidade sustentável. O
          objetivo é certificar que você conhece os princípios, reconhece
          anti-padrões e sabe aplicar alternativas saudáveis.
        </p>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Referência:{" "}
          <a
            href="https://livropog.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
          >
            livropog.com.br
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/josenaldo/livro-pog"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
          >
            github.com/josenaldo/livro-pog
          </a>
        </p>
      </section>
    </div>
  );
}

function Card({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <h3 className="font-semibold text-neutral-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <span className="mt-3 inline-block text-sm font-medium text-orange-600 dark:text-orange-400">
        Acessar
      </span>
    </Link>
  );
}
