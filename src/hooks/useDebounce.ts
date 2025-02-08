import { useEffect, useState } from "react";

export const useDebounce = (query:string, timeout:number) => {
  const [state, setState] = useState("");

  useEffect(() => {
    let queryTimer = null;
    if (queryTimer) {
      clearTimeout(queryTimer);
    }
    queryTimer = setTimeout(() => {
      setState(query);
    }, timeout);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [query, timeout]);

  return state;
};
