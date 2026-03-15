import { useEffect, useState } from "react";

export interface UserLocation {
  lat: number;
  lng: number;
}

export function useUserLocation() {
  const [location, setLocation] = useState<UserLocation | null>(null);

  useEffect(() => {
    /*navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Erro localização", err);
      },
    );*/

    //if (!navigation) {
      // caso nao encotre pegar a do centro de Nova Iguaçu
      setLocation({
        lat: -22.75944558902757,
        lng: -43.449511161856606,
      });
    //}
  }, [location]);

  return location;
}
