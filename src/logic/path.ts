import { compareTuples, Pair, splitAt } from "util/array";
import { Segment, segmentToCoordinates } from "logic/segment";
import { Connector } from "logic/problem";
import { roulette } from "logic/random";
import { Direction, isHorizontal, isVertical, rotate } from "logic/direction";
import { randomBetween } from "util/number";

export type Path = {
  start: Pair<number>;
  index: number;
  segments: Segment[];
};

export const pathToCoordinates = ({ segments, start, index }: Path) => {
  const initial = {
    coordinates: [start],
    start,
  };
  const { coordinates } = segments.reduce(({ coordinates, start }, segment) => {
    const segmentCoordinates = segmentToCoordinates(start, segment);
    const [, [last]] = splitAt(segmentCoordinates, -1);
    return {
      coordinates: [...coordinates, ...segmentCoordinates],
      start: last,
    };
  }, initial);

  return coordinates.map(([x, y]) => [x, y, index]) as [number, number, number][];
};

const WEIGHT = 0.5;

export const generatePath = (
  [start, end]: Connector,
  width: number,
  height: number,
  index: number
): Path => {
  const [endX, endY] = end;

  const generateSegments = (current: Pair<number>): Segment[] => {
    if (compareTuples(current, end)) return [];
    const [currentX, currentY] = current;

    let leftValue = currentX === 0 ? 0 : 1;
    let rightValue = currentX === width - 1 ? 0 : 1;
    let upValue = currentY === 0 ? 0 : 1;
    let downValue = currentY === height - 1 ? 0 : 1;

    if (currentX > endX) leftValue += (currentX - endX) * WEIGHT;
    if (currentX < endX) rightValue += (endX - currentX) * WEIGHT;
    if (currentY > endY) upValue += (currentY - endY) * WEIGHT;
    if (currentY < endY) downValue += (endY - currentY) * WEIGHT;

    const directions: [Direction, number][] = [
      [Direction.Left, leftValue],
      [Direction.Right, rightValue],
      [Direction.Up, upValue],
      [Direction.Down, downValue],
    ];

    const [direction] = roulette(directions, 1);
    const maxDistance =
      direction === Direction.Up
        ? currentY
        : direction === Direction.Down
        ? height - currentY
        : direction === Direction.Left
        ? currentX
        : width - currentX;

    let distance = randomBetween(1, maxDistance);
    if (
      (currentX === endX && isVertical(direction)) ||
      (currentY === endY && isHorizontal(direction))
    ) {
      const coordinates = segmentToCoordinates(current, [distance, direction]);
      const isThroughEnd = coordinates.find((coord) => compareTuples(coord, end));
      if (isThroughEnd) {
        distance = Math.abs(currentX - endX + currentY - endY);
      }
    }

    const newCurrent: Pair<number> =
      direction === Direction.Up
        ? [currentX, currentY - distance]
        : direction === Direction.Down
        ? [currentX, currentY + distance]
        : direction === Direction.Left
        ? [currentX - distance, currentY]
        : [currentX + distance, currentY];

    return [[distance, direction], ...generateSegments(newCurrent)];
  };

  const generated = generateSegments(start);
  const segments = mergePath(generated);
  return { start, index, segments };
};

export const mergePath = (segments: Segment[]): Segment[] => {
  if (segments.length < 2) return segments;
  return segments.reduce((segments, segment) => {
    if (segments.length === 0) return [segment];
    const [distance, direction] = segment;
    const [list, [last]] = splitAt(segments, -1);
    const [lastDistance, lastDirection] = last;

    if (lastDirection === direction) {
      return [...list, [lastDistance + distance, direction]];
    }
    if (lastDirection === rotate(direction, 180)) {
      const newDistance = lastDistance - distance;
      if (newDistance === 0) {
        return list;
      }

      const newDirection = newDistance < 0 ? direction : rotate(direction, 180);
      return [...list, [Math.abs(newDistance), newDirection]];
    }

    return [...segments, [distance, direction]];
  }, [] as Segment[]);
};
