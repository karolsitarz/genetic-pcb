import { roundTo } from "util/number";
import { times } from "util/array";

export const roulette = <T>(list: [T, number][]) => {
  const sum = list.reduce((acc, [, weight]) => acc + weight, 0);
  const { weighed } = list.reduce(
    ({ weighed, progress }, [item, weight]) => {
      const topBound = roundTo(weight / sum, 4);
      if (topBound === 0) return { weighed, progress };
      const newProgress = topBound + progress;
      return {
        weighed: [...weighed, [item, newProgress]] as typeof list,
        progress: newProgress,
      };
    },
    { weighed: [] as typeof list, progress: 0 },
  );

  return weighed;
};

export const rouletteDraw = <T>(roulette: [T, number][], take = 2) => {
  return times(take, () => {
    const random = Math.random();
    const [item] = roulette.find(([, weight]) => weight > random) || roulette[0];
    return item;
  });
};
