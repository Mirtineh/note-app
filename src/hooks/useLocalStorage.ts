import { useState } from "react";

export function useLocalStorage<Type>(
  key: string,
  initialValue: Type | (() => Type)
) {
  const [value, setValue] = useState<Type>(() => {
    const item = window.localStorage.getItem(key);
    if (item == null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => Type)();
      }
      return initialValue;
    } else {
      return JSON.parse(item);
    }
  });
  return [value, setValue];
}
