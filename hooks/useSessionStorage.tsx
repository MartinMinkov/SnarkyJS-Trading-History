import { useState } from "react";

const useSessionStorage = (key: any) => {
  if (typeof window === "undefined") return [undefined, undefined];

  const initialValue = sessionStorage.getItem(key);
  const [persistedValue, setPersistedValue] = useState(
    initialValue ? JSON.parse(initialValue) : initialValue
  );

  const setValue = (newValue: any) => {
    setPersistedValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [persistedValue, setValue];
};

export default useSessionStorage;
