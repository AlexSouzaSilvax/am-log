import { useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries: "places"[] = ["places"];

interface Props {
  children: ReactNode;
}

export function MapProvider({ children }: Props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries,
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        Carregando mapa...
      </div>
    );
  }

  return <>{children}</>;
}
