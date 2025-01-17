import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, value: T): [T, (state: T) => void] => {
  const [state, setInternalState] = useState<T>(value);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return;

    setInternalState(JSON.parse(storedValue));
  }, [key]);

  const setState = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setInternalState(value);
  }

  return [state, setState];
}
