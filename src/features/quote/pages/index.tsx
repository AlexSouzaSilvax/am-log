import { Query } from "@/components/query/query";
import QuoteSkeleton from "../components/quote-skeleton";
import { useQuotes } from "../hooks/use-quotes";

export default function QuotePage() {
  const quotesQuery = useQuotes();

  return (
    <Query query={quotesQuery} loading={<QuoteSkeleton />}>
      {(quotes) => (
        <div>
          {quotes.map((q) => (
            <div key={q.id}>{q.name}</div>
          ))}
        </div>
      )}
    </Query>
  );
}
