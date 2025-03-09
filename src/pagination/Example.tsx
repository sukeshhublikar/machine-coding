import { useMemo, useState } from "react";
import Pagination from "./Pagination";
import { useFetch } from "../hooks/useFetch";

interface IProduct {
  title: string;
  id: number;
  thumbnail: string;
}

const SIZE = 20;

export function Example() {
  const [page, setPage] = useState(1);

  const { data, loading } = useFetch(
    `https://dummyjson.com/products?limit=200`
  );

  const items = useMemo(() => {
    return data?.products.slice((page - 1) * SIZE, page * SIZE);
  }, [data, page]);

  if (loading) {
    return <div className="px-8 py-6">Data Loading....</div>;
  }

  return (
    <div style={{ height: "calc(100%- 100px)" }}>
      <Pagination
        current={page}
        total={data?.total}
        onChange={(page) => setPage(page)}
        size={SIZE}
      />
      <div className="product-list">
        {items?.map((product: IProduct) => {
          return (
            <div className="product-item" key={product.id}>
              <img src={product.thumbnail} width={100} />
              <div>{product.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
