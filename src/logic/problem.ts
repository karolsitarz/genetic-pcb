import { Pair, times } from "util/array";
import { generateIndividual, Individual } from "logic/individual";

export type Connector = Pair<Pair<number>>;

export type Problem = {
  width: number;
  height: number;
  connectors: Connector[];
  population: Individual[];
  duplicationWeights: number[];
  outOfBoundsWeights: number[];
};

export const generateProblem = (
  width: number,
  height: number,
  connectors: Connector[],
  populationSize: number,
): Problem => {
  const population = times(populationSize, () => generateIndividual(width, height, connectors));
  return {
    width,
    height,
    connectors,
    population,
    duplicationWeights: times(connectors.length, () => 1),
    outOfBoundsWeights: times(connectors.length, () => 1),
  };
};
