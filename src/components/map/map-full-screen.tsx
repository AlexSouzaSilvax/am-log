import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";

const center = {
  lat: -22.7564, // exemplo: Nova Iguaçu
  lng: -43.4511,
};

export default function MapFullScreen() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  if (!isLoaded) return <div>Carregando...</div>;

  return (
    <GoogleMap
      center={center}
      zoom={15}
      options={{
        disableDefaultUI: true,
      }}
      mapContainerStyle={{
        width: "100%",
        height: "95vh",
      }}
    />
  );
}
