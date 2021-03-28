import { Pair, times } from "util/array";
import { Direction, directionValue, isHorizontal, rotate } from "logic/direction";
import { randomBetween, randomBool } from "util/number";

export type Segment = [number, Direction];

export const segmentToCoordinates = (start: Pair<number>, segment: Segment): Pair<number>[] => {
  const [startX, startY] = start;
  const [distance, direction] = segment;
  const [modifierX, modifierY] = directionValue(direction);
  return times(distance, (n) => [startX + n * modifierX, startY + n * modifierY]);
};

export const mutateSegment = (segment: Segment, width: number, height: number): Segment[] => {
  const [distance, direction] = segment;
  const mutationDirection = rotate(direction, randomBool() ? 90 : -90);
  const mutationDistance = randomBetween(1, isHorizontal(direction) ? height : width);

  if (distance == 1 || randomBool())
    return [
      [mutationDistance, mutationDirection],
      [distance, direction],
      [mutationDistance, rotate(mutationDirection, 180)],
    ];

  const splitPoint = randomBetween(1, distance);
  if (randomBool())
    return [
      [mutationDistance, mutationDirection],
      [splitPoint, direction],
      [mutationDistance, rotate(mutationDirection, 180)],
      [distance - splitPoint, direction],
    ];

  return [
    [splitPoint, direction],
    [mutationDistance, mutationDirection],
    [distance - splitPoint, direction],
    [mutationDistance, rotate(mutationDirection, 180)],
  ];
};
