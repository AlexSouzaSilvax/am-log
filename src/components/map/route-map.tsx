import { DirectionsRenderer, GoogleMap } from "@react-google-maps/api";
import { useState } from "react";
import { RoutePanel } from "./route-panel";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export function RouteMap() {
  //const userLocation = useUserLocation();

  const userLocation = {
    lat: -22.75944558902757,
    lng: -43.449511161856606,
  };

  const [directions, setDirections] = useState<any>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  if (!userLocation) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        Obtendo localização...
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-80px)] w-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "greedy",
          clickableIcons: false,
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      <RoutePanel
        userLocation={userLocation}
        setDirections={setDirections}
        setDistance={setDistance}
        setDuration={setDuration}
        distance={distance}
        duration={duration}
      />
    </div>
  );
}
