import { useCallback, useMemo, useState } from "react";

export default function useInput(defaultState = null) {
  const [input, setInput] = useState(defaultState);

  const handleChangeInput = useCallback((...params) => {
    const toUpdate = {};
    for (let i = 0; i < params.length; i += 2) {
      const [key, value] = params.slice(i, i + 2);
      toUpdate[key] = value;
    }
    setInput((prev) => ({ ...prev, ...toUpdate }));
  }, []);

  return useMemo(() => ({ handleChangeInput, input, setInput }), [input]);
}
