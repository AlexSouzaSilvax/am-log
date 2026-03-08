import { useQuery } from "@tanstack/react-query";
import { fetchQuotes } from "../services/quote-service";

export function useQuotes() {
  return useQuery({
    queryKey: ["quotes"],
    queryFn: fetchQuotes,
  });
}
