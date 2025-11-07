import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

type FetchFn<T> = () => Promise<T>

export function useFetch<T>(
  key: string | unknown[],
  fetchFn: FetchFn<T>,
  options?: UseQueryOptions<T>
) {
  const queryKey = Array.isArray(key) ? key : [key]
  return useQuery<T>({
    queryKey,
    queryFn: fetchFn,
    staleTime: 1000 * 60 * 5,
    ...options,
  })
}
