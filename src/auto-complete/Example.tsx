import { useEffect, useMemo, useState } from "react";
import AutoComplete from "./AutoComplete";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

export function Example() {
  const [items, setItems] = useState<Array<any>>([]);
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 500);
  const [selected, setSelected] = useState("");

  const urlKey = useMemo(() => {
    return `https://dummyjson.com/products/search?q=${query}`;
  }, [debounceQuery]);

  const [data, loading, error] = useFetch(urlKey);

  useEffect(() => {
    setItems(data?.products || []);
  }, [data]);

  return (
    <AutoComplete
      loading={loading}
      value={selected}
      items={items}
      onSearch={setQuery}
      onSelect={(val: string) => setSelected(val)}
    />
  );
}
