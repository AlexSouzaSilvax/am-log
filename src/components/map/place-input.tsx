import { Input } from "@/components/ui/input";
import { usePlacesSearch } from "@/hooks/map/use-places-search";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

export function PlaceInput({ value, onChange, placeholder }: Props) {
  const [searchEnabled, setSearchEnabled] = useState(true);

  const { results, clearResults } = usePlacesSearch(value, searchEnabled);

  const selectPlace = (description: string) => {
    setSearchEnabled(false); // bloqueia nova busca
    onChange(description);
    clearResults();
  };

  return (
    <div className="relative w-full">
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setSearchEnabled(true); // reativa busca quando usuário digitar
          onChange(e.target.value);
        }}
      />

      {searchEnabled && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-background border rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {results.map((place: any) => (
            <button
              key={place.place_id}
              onClick={() => selectPlace(place.description)}
              className="w-full text-left px-3 py-3 hover:bg-muted flex flex-col"
            >
              <span className="text-sm font-medium">
                {place.structured_formatting.main_text}
              </span>

              <span className="text-xs text-muted-foreground">
                {place.structured_formatting.secondary_text}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
