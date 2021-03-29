import { Pair, times } from "util/array";
import {
  calculateFitness,
  crossOver,
  errorValues,
  generateIndividual,
  Individual,
  mutateIndividual,
} from "logic/individual";
import { roulette, rouletteDraw } from "logic/random";

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

export const calculateProblemFitness = (problem: Problem): Problem => {
  const population = problem.population.map((individual) => calculateFitness(individual, problem));
  return { ...problem, population };
};

export const getPopulationBest = (problem: Problem) => {
  const { population } = problem;
  return population.reduce<Individual>((best, individual) => {
    if (individual?.fitness == null) throw new Error("The fitness has not been calculated!");
    if (best?.fitness == null) throw new Error("The fitness has not been calculated!");

    return individual.fitness > best.fitness ? individual : best;
  }, population[0]);
};

export const adapt = (previousBest: Individual, problem: Problem): Problem => {
  const { duplicationWeights, outOfBoundsWeights } = problem;
  const currentBest = getPopulationBest(problem);
  if (previousBest <= currentBest) return problem;

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

  return {
    ...problem,
    outOfBoundsWeights: newOutOfBoundsWeights,
    duplicationWeights: newDuplicationWeights,
  };
};

export const populate = (problem: Problem): Problem => {
  const { population } = problem;
  const weighed = roulette(
    population.map((individual) => {
      if (individual.fitness == null) throw new Error("Fitness not calculated");
      return [individual, individual.fitness];
    }),
  );

  const newPopulation = population.map(() => {
    const parents = rouletteDraw(weighed);
    const child = crossOver(parents[0], parents[1]);
    return mutateIndividual(child, problem);
  });

  return { ...problem, population: newPopulation };
};

let i = 0;
export const runProblem = (problem: Problem, best?: Individual) => {
  if (i++ == 10) return;
  console.log(i);
  const calculated = calculateProblemFitness(problem);
  const bestIndividual = best ?? getPopulationBest(calculated);

  const adapted = adapt(bestIndividual, calculated);
  const newProblem = populate(adapted);
  runProblem(newProblem);
};
