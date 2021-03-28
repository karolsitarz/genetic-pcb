import { Pair, repeat } from "util/array";
import { Direction, directionValue } from "logic/direction";

export type Segment = [number, Direction];

export const segmentToCoordinates = (start: Pair<number>, segment: Segment): Pair<number>[] => {
  const [startX, startY] = start;
  const [distance, direction] = segment;
  const [modifierX, modifierY] = directionValue(direction);
  return repeat(distance, (n) => [startX + n * modifierX, startY + n * modifierY]);
};

export type Path = {
  start: Pair<number>;
  size: Pair<number>;
  index: number;
  segments: Segment[];
};
