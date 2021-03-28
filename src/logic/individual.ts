import { generatePath, Path, pathToCoordinates } from "logic/path";
import { Connector, Problem } from "logic/problem";

export type Individual = {
  paths: Path[];
  fitness?: number;
};

export const generateIndividual = (
  width: number,
  height: number,
  connectors: Connector[],
): Individual => {
  const paths = connectors.map((connector, index) => generatePath(connector, width, height, index));
  return { paths };
};

export const getOutOfBounds = (
  coordinates: ReturnType<typeof pathToCoordinates>,
  width: number,
  height: number,
) =>
  coordinates
    .filter(([x, y]) => x < 0 || y < 0 || x >= width || y >= height)
    .reduce(
      (grouped, [, , index]) => ({
        ...grouped,
        [index]: (grouped?.[index] ?? 0) + 1,
      }),
      {} as { [key: number]: number },
    );

export const getDuplicates = (coordinates: ReturnType<typeof pathToCoordinates>) =>
  coordinates.reduce(
    (grouped, [x, y, index]) => ({
      ...grouped,
      [`${x}-${y}`]: [...(grouped?.[`${x}-${y}`] ?? []), index],
    }),
    {} as { [key: string]: number[] },
  );

export const getFitness = (individual: Individual, problem: Problem): number => {
  const { paths } = individual;
  const { width, height, outOfBoundsWeights, duplicationWeights } = problem;
  const coordinates = paths.reduce(
    (list, path) => [...list, ...pathToCoordinates(path)],
    [] as ReturnType<typeof pathToCoordinates>,
  );

  const outOfBounds = Object.entries(getOutOfBounds(coordinates, width, height)).reduce<number>(
    (value, [index, exp]) => value + outOfBoundsWeights[parseInt(index)] ** exp,
    0,
  );
  const duplicates = Object.values(getDuplicates(coordinates)).reduce(
    (value, indexes) => indexes.reduce((value, index) => value * duplicationWeights[index], 1),
    0,
  );
  const length = coordinates.length;
  const segmentsCount = paths.reduce((value, { segments }) => value + segments.length, 0);

  return 1 / (length + segmentsCount + outOfBounds + duplicates);
};

export const calculateFitness = (individual: Individual, problem: Problem) => {
  individual.fitness = getFitness(individual, problem);
};
