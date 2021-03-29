import { clonePath, generatePath, mutatePath, Path, pathToCoordinates } from "logic/path";
import { Connector, Problem } from "logic/problem";
import { randomBetween } from "util/number";

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

export const individualToCoordinates = (individual: Individual) => {
  const { paths } = individual;
  return paths.reduce(
    (list, path) => [...list, ...pathToCoordinates(path)],
    [] as ReturnType<typeof pathToCoordinates>,
  );
};

export const errorValues = (individual: Individual, problem: Problem) => {
  const { width, height } = problem;
  const coordinates = individualToCoordinates(individual);

  const outOfBounds = Object.entries(
    coordinates
      .filter(([x, y]) => x < 0 || y < 0 || x >= width || y >= height)
      .reduce(
        (grouped, [, , index]) => ({
          ...grouped,
          [index]: (grouped?.[index] ?? 0) + 1,
        }),
        {} as { [key: number]: number },
      ),
  );

  const duplication = Object.values(
    coordinates.reduce(
      (grouped, [x, y, index]) => ({
        ...grouped,
        [`${x}-${y}`]: [...(grouped?.[`${x}-${y}`] ?? []), index],
      }),
      {} as { [key: string]: number[] },
    ),
  ).filter((values) => values.length > 1);

  const length = coordinates.length;

  return { outOfBounds, duplication, length };
};

export const getFitness = (individual: Individual, problem: Problem): number => {
  const { paths } = individual;
  const { outOfBoundsWeights, duplicationWeights } = problem;
  const errors = errorValues(individual, problem);

  const outOfBounds = errors.outOfBounds.reduce<number>(
    (value, [index, exp]) => value + outOfBoundsWeights[parseInt(index)] ** exp,
    0,
  );

  const duplication = errors.duplication.reduce(
    (value, indexes) =>
      value + indexes.reduce((value, index) => value * duplicationWeights[index], 1),
    0,
  );
  const segmentsCount = paths.reduce((value, { segments }) => value + segments.length, 0);

  return 1 / (errors.length + segmentsCount + outOfBounds + duplication);
};

export const calculateFitness = (individual: Individual, problem: Problem): Individual => {
  const fitness = getFitness(individual, problem);
  return { ...individual, fitness };
};

export const crossOver = (
  { paths: pathsA }: Individual,
  { paths: pathsB }: Individual,
): Individual => {
  const splitPoint = randomBetween(0, pathsA.length + 1);
  const paths = [
    ...pathsA.slice(0, splitPoint).map((path) => clonePath(path)),
    ...pathsB.slice(splitPoint).map((path) => clonePath(path)),
  ];
  return { paths };
};

export const mutateIndividual = (individual: Individual, problem: Problem): Individual => {
  const { paths } = individual;
  const mutatedPaths = paths.map((path) => mutatePath(path, problem));
  return { ...individual, paths: mutatedPaths };
};
