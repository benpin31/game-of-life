import { useEffect, useRef } from "react";

export const useMouseDown = () => {
  const isMouthDown = useRef<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseDown = () => {
    isMouthDown.current = true;
  };
  const onMouseUp = () => {
    isMouthDown.current = false;
  };

  return { isMouthDown };
};
