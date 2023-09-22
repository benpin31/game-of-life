import { useRef, MutableRefObject } from "react";

export const useCurrent = <T>(state: T): MutableRefObject<T | undefined> => {
  const stateRef = useRef<T>();
  stateRef.current = state;
  return stateRef;
};
