export default function DiagramPogVsSaudavel() {
  return (
    <div className="diagram-pog-saudavel my-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50">
      <p className="mb-4 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">
        POG vs Práticas sustentáveis
      </p>
      <svg
        viewBox="0 0 520 200"
        className="mx-auto h-auto w-full max-w-lg"
        aria-hidden
      >
        <defs>
          <marker
            id="arrow-red-pog"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-orange-pog"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
          </marker>
        </defs>
        <g className="side-group cursor-pointer">
          <rect
            x="20"
            y="20"
            width="220"
            height="160"
            rx="8"
            fill="#fef2f2"
            stroke="#fecaca"
            strokeWidth="1.5"
          />
          <text x="130" y="50" textAnchor="middle" className="text-sm font-semibold" fill="#991b1b">
            POG (gambiarra)
          </text>
          <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Resolver rápido, sem planejamento
          </text>
          <text x="130" y="95" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Prazo absoluto, qualidade relativa
          </text>
          <text x="130" y="115" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Sem refactoring, rework infinito
          </text>
          <text x="130" y="135" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Dívida técnica crescente
          </text>
        </g>
        <g className="side-group cursor-pointer">
          <rect
            x="280"
            y="20"
            width="220"
            height="160"
            rx="8"
            fill="#fff7ed"
            stroke="#fed7aa"
            strokeWidth="1.5"
          />
          <text x="390" y="50" textAnchor="middle" className="text-sm font-semibold" fill="#9a3412">
            Práticas sustentáveis
          </text>
          <text x="390" y="75" textAnchor="middle" fontSize="11" fill="#c2410c">
            Testes e prevenção
          </text>
          <text x="390" y="95" textAnchor="middle" fontSize="11" fill="#c2410c">
            Escopo negociado, transparência
          </text>
          <text x="390" y="115" textAnchor="middle" fontSize="11" fill="#c2410c">
            Refatoração e DoD
          </text>
          <text x="390" y="135" textAnchor="middle" fontSize="11" fill="#c2410c">
            Código mantível
          </text>
        </g>
        <line
          x1="240"
          y1="100"
          x2="280"
          y2="100"
          stroke="#d6d3d1"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
