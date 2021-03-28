import { useEffect, useRef } from "react";
import { Individual } from "logic/individual";
import { Problem } from "logic/problem";
import { directionValue } from "logic/direction";
import { getHSL } from "util/color";

type Props = {
  individual?: Individual;
  problem: Problem;
};

const UNIT = 50;
const WIDTH = 6;
const translate = (pos: number) => (pos + 1) * UNIT;

export const BoardCanvas = ({ individual, problem }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { width, height } = problem;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#dddddd";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 1; x <= width; x++) {
      const xPos = x * UNIT;
      for (let y = 1; y <= height; y++) {
        const yPos = y * UNIT;
        ctx.beginPath();
        ctx.arc(xPos, yPos, WIDTH, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }

    if (!individual) return;

    ctx.lineWidth = WIDTH;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let i = 0; i < individual.paths.length; i++) {
      const path = individual.paths[i];
      const { start, segments } = path;
      let [startX, startY] = start;

      const [hue, lightness] = getHSL(i);
      ctx.strokeStyle = `hsl(${hue}, 90%, ${lightness}%)`;
      ctx.beginPath();
      ctx.moveTo(translate(startX), translate(startY));

      for (const [distance, direction] of segments) {
        const [modifierX, modifierY] = directionValue(direction);
        const endX = startX + distance * modifierX;
        const endY = startY + distance * modifierY;
        ctx.lineTo(translate(endX), translate(endY));
        startX = endX;
        startY = endY;
      }
      ctx.stroke();
      ctx.closePath();
    }
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
