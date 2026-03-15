import { BarChart3, Calculator, Map, Star } from "lucide-react";

export function Features() {
  const items = [
    {
      icon: Calculator,
      title: "Cotação rápida",
      desc: "Calcule fretes em segundos",
    },
    {
      icon: Map,
      title: "Rotas inteligentes",
      desc: "Visualize origem e destino",
    },
    {
      icon: BarChart3,
      title: "Gestão completa",
      desc: "Controle seus transportes",
    },
    {
      icon: Star,
      title: "Avaliações",
      desc: "Reputação de transportadores",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Tudo que você precisa para gerir fretes
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
          >
            <Icon size={28} className="mb-4 text-zinc-700 dark:text-zinc-300" />

            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
