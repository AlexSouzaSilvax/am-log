import { useEffect, useState } from "react";
import { useDebounce } from "./use-debounce";

export function usePlacesSearch(query: string, searchEnabled: boolean) {
  const debouncedQuery = useDebounce(query, 350);

  const [results, setResults] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);

  const clearResults = () => setResults([]);

  useEffect(() => {
    if (!debouncedQuery || !searchEnabled) {
      setResults([]);
      return;
    }

    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      {
        input: debouncedQuery,
        componentRestrictions: { country: "br" }, // opcional
      },
      (predictions) => {
        setResults(predictions || []);
      }
    );
  }, [debouncedQuery, searchEnabled]);

  return { results, clearResults };
}