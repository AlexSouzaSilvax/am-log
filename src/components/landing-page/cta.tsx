import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-24 text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-semibold">
          Pronto para simplificar sua logística?
        </h2>

        <p className="text-zinc-400">
          Comece agora e faça sua primeira cotação de frete em poucos segundos.
        </p>

        <button onClick={() => navigate("/budgets")} className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:scale-105 transition">
          Criar primeira cotação
        </button>
      </div>
    </section>
  );
}
