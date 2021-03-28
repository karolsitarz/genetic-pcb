import { Pair } from "util/array";

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}
const DIRECTIONS = [Direction.Up, Direction.Right, Direction.Down, Direction.Left];

export const rotate = (direction: Direction, degrees: number) => {
  const offset = (direction.valueOf() + Math.floor(degrees / 90)) % DIRECTIONS.length;
  return DIRECTIONS[offset];
};

export const directionValue = (direction: Direction): Pair<number> => {
  if (direction === Direction.Up) return [0, 1];
  if (direction === Direction.Down) return [0, -1];
  if (direction === Direction.Left) return [-1, 0];
  if (direction === Direction.Right) return [1, 0];
  throw new Error();
};
