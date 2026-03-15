import { calculateFreight } from "@/lib/map/freight-calculator";
import { Copy, Navigation, Plus, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { PlaceInput } from "./place-input";

interface Props {
  userLocation: google.maps.LatLngLiteral;
  setDirections: any;
  setDistance: any;
  setDuration: any;
  distance: string;
  duration: string;
}

export function RoutePanel({
  userLocation,
  setDirections,
  setDistance,
  setDuration,
  distance,
  duration,
}: Props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState<string[]>([]);
  const [freight, setFreight] = useState<any>(null);
  const addStop = () => setStops([...stops, ""]);
  const [loading, setLoading] = useState<boolean>(false);

  const removeStop = (index: number) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const updateStop = (index: number, value: string) => {
    const updated = [...stops];
    updated[index] = value;
    setStops(updated);
  };

  const directionsService = useRef<google.maps.DirectionsService | null>(null);

  useEffect(() => {
    directionsService.current = new google.maps.DirectionsService();
  }, []);

  const calculateRoute = () => {
    setLoading(true);

    directionsService.current?.route(
      {
        origin: origin || userLocation,
        destination,
        waypoints: stops.map((stop) => ({
          location: stop,
        })),
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);

          let totalDistance = 0;
          let totalDuration = 0;

          result.routes[0].legs.forEach((leg: any) => {
            totalDistance += leg.distance.value;
            totalDuration += leg.duration.value;
          });

          const distanceKm = totalDistance / 1000;
          const durationMinutes = totalDuration / 60;

          const freightResult = calculateFreight({
            distanceKm,
            durationMinutes,
          });

          setFreight(freightResult);

          setDistance((totalDistance / 1000).toFixed(1) + " km");
          setDuration(Math.floor(totalDuration / 60) + " min");
        } else {
          toast("Falha ao buscar rota", { description: "Tente novamente" });
        }
        setLoading(false);
      },
    );

    setLoading(false);
  };

  function generateGoogleMapsNavigationLink(
    origin: string,
    stops: string[],
    destination: string,
  ) {
    const params = new URLSearchParams();

    params.set("api", "1");
    params.set("origin", origin);
    params.set("destination", destination);
    params.set("travelmode", "driving");

    // adiciona paradas somente se existirem
    const validStops = stops.filter((s) => s && s.trim() !== "");

    if (validStops.length > 0) {
      params.set("waypoints", validStops.join("|"));
    }

    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }

  const mapsLink = generateGoogleMapsNavigationLink(origin, stops, destination);

  const copyLink = async () => {
    await navigator.clipboard.writeText(mapsLink);
    toast("Rota copiada com sucesso!");
  };

  const shareRoute = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Rota AM Log",
        text: "Veja esta rota",
        url: mapsLink,
      });
    } else {
      const whatsapp = `https://wa.me/?text=${encodeURIComponent(mapsLink)}`;

      window.open(whatsapp, "_blank");
    }
  };

  const novaRoute = () => {
    setOrigin("");
    setDestination("");
    setStops([]);
    setFreight(null);
    setLoading(false);
    setDistance("");
    setDuration("");
    window.location.reload();
  };

  return (
    <div className="absolute top-4 m-2 w-90 p-4 bg-background rounded-xl border shadow-xl space-y-3 md:top-4 md:left-4">
      <div className="flex items-center gap-2">
        <PlaceInput value={origin} onChange={setOrigin} placeholder="Origem" />

        <Button size="icon" variant="outline" onClick={addStop}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      {stops.map((stop, i) => (
        <div key={i} className="flex gap-2">
          <PlaceInput
            value={stop}
            placeholder="Parada"
            onChange={(v) => updateStop(i, v)}
          />

          <Button
            size="icon"
            variant="destructive"
            onClick={() => removeStop(i)}
          >
            X
          </Button>
        </div>
      ))}
      <PlaceInput
        value={destination}
        onChange={setDestination}
        placeholder="Destino"
      />
      <Button
        className="w-full"
        onClick={calculateRoute}
        disabled={loading}
        loading={loading}
      >
        Calcular rota
      </Button>
      {distance && (
        <div className="text-sm pt-2 space-y-1">
          <p>Distância: {distance}</p>
          <p>Tempo estimado: {duration}</p>
          <p className="font-semibold">
            Frete estimado: R$ {freight?.total?.toFixed(2)}
          </p>
        </div>
      )}
      {distance && duration && (
        <div className="bottom-0 left-0 w-full p-2">
          {/* BOTÕES SECUNDÁRIOS */}
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-background"
              onClick={copyLink}
            >
              <Copy size={16} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-background"
              onClick={shareRoute}
            >
              <Share2 size={16} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="block md:hidden rounded-full shadow-md bg-background"
              onClick={() => window.open(mapsLink, "_blank")}
            >
              <Navigation size={16} />
            </Button>
          </div>

          {/* BOTÃO PRINCIPAL */}
          <Button
            className="hidden md:flex w-full rounded-full py-6 text-lg font-semibold shadow-xl gap-2 bg-blue-300 hover:bg-blue-100 transition mt-2"
            onClick={() => window.open(mapsLink, "_blank")}
          >
            <Navigation size={20} />
            Iniciar rota
          </Button>

          <Button variant="outline" className="w-full mt-2" onClick={novaRoute}>
            Nova rota
          </Button>
        </div>
      )}
    </div>
  );
}
