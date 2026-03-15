// components/footer.tsx

import { Mail, MapPin, Phone, Truck } from "lucide-react";
import { AboutSection } from "./about";

export function Footer() {
  return (
    <div>
      <AboutSection />
      <footer className="border-t bg-background mb-5">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Logo + Quem Somos */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg">
                <Truck size={22} />
                AM Log
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Orçamentos rápidos. Gestão inteligente de transporte.
              </p>
            </div>

            {/* Empresa */}
            <div className="space-y-4">
              <h3 className="font-semibold">Empresa</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition">
                  Quem somos
                </li>

                <li className="hover:text-foreground cursor-pointer transition">
                  Como funciona
                </li>

                <li className="hover:text-foreground cursor-pointer transition">
                  Clientes
                </li>
              </ul>
            </div>

            {/* Links úteis */}
            <div className="space-y-4">
              <h3 className="font-semibold">Links úteis</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition">
                  Termos de uso
                </li>

                <li className="hover:text-foreground cursor-pointer transition">
                  Política de privacidade
                </li>

                <li className="hover:text-foreground cursor-pointer transition">
                  Suporte
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  contato@amlog.com
                </li>

                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  (21) 99999-9999
                </li>

                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  Rio de Janeiro - Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Linha inferior */}
          <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AM Log. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
