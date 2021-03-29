import { useRef } from "react";
import { Individual } from "logic/individual";
import { Problem } from "logic/problem";
import { directionValue } from "logic/direction";
import { getHSL } from "util/color";

const UNIT = 50;
const WIDTH = 6;
const translate = (pos: number) => (pos + 1) * UNIT;

type Props = {
  width: number;
  height: number;
  isRunning: boolean;
};

export const BoardCanvas = ({ height, width, isRunning }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  window.__drawClear = () => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  window.__drawBoard = (problem: Problem) => {
    const { width, height, connectors } = problem;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#dddddd";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < width; x++) {
      const xPos = translate(x);
      for (let y = 0; y < height; y++) {
        const yPos = translate(y);
        ctx.beginPath();
        ctx.arc(xPos, yPos, WIDTH, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let i = 0; i < connectors.length; i++) {
      const [[startX, startY], [endX, endY]] = connectors[i];
      const [hue, lightness] = getHSL(i);
      ctx.fillStyle = `hsl(${hue}, 90%, ${lightness}%)`;
      ctx.beginPath();
      ctx.arc(translate(startX), translate(startY), WIDTH * 1.2, 0, 2 * Math.PI);
      ctx.arc(translate(endX), translate(endY), WIDTH * 1.2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  };

  window.__drawIndividual = (individual: Individual, problem: Problem) => {
    window.__drawBoard(problem);
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { paths } = individual;

    ctx.lineWidth = WIDTH;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
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
  };

  return (
    <canvas
      ref={ref}
      className={`absolute left-0 top-0 bottom-0 right-0 w-full h-full ${
        !isRunning ? "pointer-events-none opacity-0" : ""
      }`}
      width={(width + 1) * UNIT}
      height={(height + 1) * UNIT}
    />
  );
};
