import { ReactNode } from "react";

interface QueryProps<T> {
  query: {
    data?: T;
    isLoading: boolean;
    error: unknown;
  };
  loading: ReactNode;
  error?: ReactNode;
  children: (data: T) => ReactNode;
}

export function Query<T>({ query, loading, error, children }: QueryProps<T>) {
  if (query.isLoading) return <>{loading}</>;

  if (query.error) {
    return <>{error ?? <div>Erro ao carregar</div>}</>;
  }

  return <>{children(query.data as T)}</>;
}
