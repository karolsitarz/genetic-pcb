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

const breakAsync = () => new Promise((resolve) => setTimeout(resolve, 0));

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
  const population = times(populationSize, () => ({ paths: [] } as Individual));
  return {
    width,
    height,
    connectors,
    population,
    duplicationWeights: times(connectors.length, () => width * height),
    outOfBoundsWeights: times(connectors.length, () => width * height),
    mutationChance,
  };
};

export const initializePopulation = (problem: Problem): Problem => {
  const { width, height, connectors } = problem;
  const population = problem.population.map(() => generateIndividual(width, height, connectors));
  return { ...problem, population };
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
  if (previousBest?.fitness == null) throw new Error("The fitness has not been calculated!");
  if (currentBest?.fitness == null) throw new Error("The fitness has not been calculated!");

  if (previousBest.fitness <= currentBest.fitness) return problem;

  const errors = errorValues(currentBest, problem);

  const outOfBounds = new Set<string>();
  errors.outOfBounds.forEach(([index]) => outOfBounds.add(index));
  const newOutOfBoundsWeights = outOfBoundsWeights.map((weight, index) =>
    outOfBounds.has(index.toString()) ? weight + 1 : weight,
  );

  const duplication = new Set<number>();
  errors.duplication.forEach((group) => group.forEach((item) => duplication.add(item)));
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

export const runProblem = async (problem: Problem, drawEvery: number) => {
  let i = 0;
  window.__drawClear();
  window.__drawBoard(problem);
  window.__updateGeneration(0);

  const run = async (problem: Problem, best: Individual) => {
    if (!window.__isRunning) {
      window.__drawClear();
      return;
    }
    window.__updateGeneration(i);
    if (i++ % drawEvery === 0) {
      window.__drawIndividual(best, problem);
    }

    const populated = populate(problem);
    const calculated = calculateProblemFitness(populated);
    const adapted = adapt(best, calculated);
    const bestIndividual = getPopulationBest(adapted);
    await breakAsync(); // this is here to escape the loop and let react update the DOM
    await run(adapted, bestIndividual);
  };

  const initialized = initializePopulation(problem);
  const calculated = calculateProblemFitness(initialized);
  const best = getPopulationBest(calculated);
  await run(calculated, best);
};
