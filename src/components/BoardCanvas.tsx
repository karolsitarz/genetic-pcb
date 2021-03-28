import { useEffect, useRef } from "react";
import { Individual } from "logic/individual";
import { Problem } from "logic/problem";

type Props = {
  individual?: Individual;
  problem: Problem;
};

const UNIT = 50;

export const BoardCanvas = ({ individual, problem }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { width, height } = problem;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    context?.clearRect(0, 0, canvas.width, canvas.height);
  }, [individual, problem]);

  return (
    <>
      <canvas
        ref={ref}
        className="absolute left-0 top-0 bottom-0 right-0 w-full h-full"
        width={(width + 1) * UNIT}
        height={(height + 1) * UNIT}
      />
    </>
  );
};
