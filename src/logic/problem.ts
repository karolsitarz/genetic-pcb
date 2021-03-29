import { Pair, times } from "util/array";
import { calculateFitness, errorValues, generateIndividual, Individual } from "logic/individual";

export type Connector = Pair<Pair<number>>;

export type Problem = {
  width: number;
  height: number;
  connectors: Connector[];
  population: Individual[];
  duplicationWeights: number[];
  outOfBoundsWeights: number[];
  mutationChance: number;
};

export const generateProblem = (
  width: number,
  height: number,
  connectors: Connector[],
  populationSize: number,
  mutationChance: number,
): Problem => {
  const population = times(populationSize, () => generateIndividual(width, height, connectors));
  return {
    width,
    height,
    connectors,
    population,
    duplicationWeights: times(connectors.length, () => 1),
    outOfBoundsWeights: times(connectors.length, () => 1),
    mutationChance,
  };
};

export const calculatePopulationFitness = (problem: Problem) => {
  problem.population.forEach((individual) => calculateFitness(individual, problem));
};

export const getPopulationBest = (problem: Problem) => {
  const { population } = problem;
  return population.reduce<Individual>((best, individual) => {
    if (individual?.fitness == null) throw new Error("The fitness has not been calculated!");
    if (best?.fitness == null) throw new Error("The fitness has not been calculated!");

    return individual.fitness > best.fitness ? individual : best;
  }, population[0]);
};

export const adapt = (previousBest: Individual, problem: Problem) => {
  const { duplicationWeights, outOfBoundsWeights } = problem;
  const currentBest = getPopulationBest(problem);
  if (previousBest <= currentBest) return false;

  const errors = errorValues(currentBest, problem);

  const outOfBounds = errors.outOfBounds.reduce<Set<string>>(
    (set, [index]) => set.add(index),
    new Set(),
  );
  const newOutOfBoundsWeights = outOfBoundsWeights.map((weight, index) =>
    outOfBounds.has(index.toString()) ? weight + 1 : weight,
  );

  const duplication = errors.duplication.reduce<Set<number>>(
    (set, group) => group.reduce((set, index) => set.add(index), set),
    new Set(),
  );
  const newDuplicationWeights = duplicationWeights.map((weight, index) =>
    duplication.has(index) ? weight + 1 : weight,
  );

  problem.outOfBoundsWeights = newOutOfBoundsWeights;
  problem.duplicationWeights = newDuplicationWeights;
};
