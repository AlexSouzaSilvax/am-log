import { useNavigate } from "react-router-dom";
import { NovaIguacuMap } from "../ui/nova-iguacu-map";
import { TruckAnimated } from "./truck-animated";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-start pt-28 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Gestão inteligente para
            <span className="text-zinc-400"> orçamentos e fretes</span>
          </h1>
          <div className="block md:hidden relative justify-center">
            <TruckAnimated />
          </div>

          <p className="text-zinc-400 text-lg">
            Sistema desenvolvido para facilitar a criação de orçamentos e a
            gestão de serviços logísticos e transporte de cargas terrestres.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-4">
            <button onClick={() => navigate("/budgets")} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition cursor-pointer">
              Criar Cotação
            </button>
          </div>
        </div>

        <div className="hidden md:block relative justify-center">
          <TruckAnimated />
        </div>
      </div>
      <NovaIguacuMap />
    </section>
  );
}
