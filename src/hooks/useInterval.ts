import { useCallback, useEffect, useRef, useState } from "react";

interface UseIntervalOptions {
  autostart?: boolean;
}

export const useInterval = ({ autostart = false }: UseIntervalOptions) => {
  const [counter, setConuter] = useState(0);
  const [pause, setPause] = useState(!autostart);
  const timeout = useRef<undefined | ReturnType<typeof setInterval>>();

  const handleTimer = useCallback(() => {
    if (pause) {
      timeout.current = setInterval(() => setConuter((prev) => ++prev), 1000);
    } else {
      clearInterval(timeout.current);
    }

    setPause((prev) => !prev);
  }, [pause]);

  useEffect(() => {
    if (autostart) {
      timeout.current = setInterval(() => setConuter((prev) => ++prev), 1000);
    }

    return () => {
      clearInterval(timeout.current);
    };
  }, [autostart]);

  return {
    counter,
    pause,
    handleTimer,
  };
};
