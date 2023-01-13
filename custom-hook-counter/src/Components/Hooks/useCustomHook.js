import { useState, useEffect } from "react";

function useCustomHook(forwards = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (forwards) {
        setCount((prev) => prev + 1);
      } else {
        setCount((prev) => prev - 1);
      }
    }, 2000);
    return () => clearInterval(counter);
  }, []);

  return count;
}

export default useCustomHook;
