"use client";

import { memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useInterval } from "@/hooks/useInterval";

const AboutPage = memo(() => {
  const memomizedArr = useMemo(() => [1, 2, 3], []);
  const pathname = usePathname();
  const { counter, pause, handleTimer } = useInterval({});

  return (
    <div>
      {memomizedArr.map((item) => (
        <div key={item}>{item + pathname}</div>
      ))}
      <button
        onClick={handleTimer}
        className="border-2 p-2 border-black hover:bg-amber-200"
      >
        {pause ? "Start" : "Stop"}
      </button>
      <div>Counter: {counter}</div>
    </div>
  );
});

export default AboutPage;
