import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchCall = () => {
    try {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((results) => {
          setData(results);
          setLoading(false);
        });
    } catch (e: unknown) {
      setError(e);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCall();
  }, [url]);

  return [data, loading, error];
}
