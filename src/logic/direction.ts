import { Pair } from "util/array";

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
const DIRECTIONS = [Direction.Up, Direction.Right, Direction.Down, Direction.Left];

export const rotate = (direction: Direction, degrees: number) => {
  const offset = (directionOffset(direction) + Math.floor(degrees / 90)) % DIRECTIONS.length;
  return DIRECTIONS[offset];
};

export const directionOffset = (direction: Direction): number => {
  const offset = DIRECTIONS.indexOf(direction);
  if (offset < 0) throw new Error();
  return offset;
};

export const directionValue = (direction: Direction): Pair<number> => {
  if (direction === Direction.Up) return [0, -1];
  if (direction === Direction.Down) return [0, 1];
  if (direction === Direction.Left) return [-1, 0];
  if (direction === Direction.Right) return [1, 0];
  throw new Error();
};

export const isHorizontal = (direction: Direction) =>
  direction === Direction.Left || direction === Direction.Right;

export const isVertical = (direction: Direction) =>
  direction === Direction.Up || direction === Direction.Down;
